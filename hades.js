const FIXED_POINT = 1e18
const PRICE_POINT = 1e8
const DOL_POINT = 1e8
const HDS_POINT = 1e8
const INITIAL_REWARD = 4
const BLOCKS_PER_YEAR = 2102400
const INITIAL_SUPPLY = 4200000

class Hades {
  constructor(options) {
    this.options = options
    this.setProvider(options.provider)
    this.subscribeHDSPrice()
  }

  setProvider(provider) {
    if (!provider) throw new Error('Invalid provider')
    this._web3 = new Web3(provider)
    this._orchestrator = this._createContractInstance(ABI_Orchestrator, this.options.orchestratorAddress)
    this._dol = null
    this._hds = null
    this._reporter = null
    this._controller = null
    this._distributor = null
    this._hTokens = {}
    this._lpTokens = {}
    this._lastHDSPrice = 1
  }

  chainId() {
    return this.options.chainId
  }

  async isTransactionConfirmed(hash) {
    const tx = await this._web3.eth.getTransaction(hash)
    return !!tx && !!tx.blockHash
  }

  async dol(raw) {
    if (!this._dol) this._dol = await this._createHadesContractInstance(ABI_DOL, 'getDOL')
    return raw ? this._dol : this._dol.methods
  }

  async hds(raw) {
    if (!this._hds) this._hds = await this._createHadesContractInstance(ABI_HDS, 'getHDS')
    return raw ? this._hds : this._hds.methods
  }

  async reporter(raw) {
    if (!this._reporter) this._reporter = await this._createHadesContractInstance(ABI_ProtocolReporter, 'getReporter')
    return raw ? this._reporter : this._reporter.methods
  }

  async controller(raw) {
    if (!this._controller) {
      this._controller = await this._createHadesContractInstance(ABI_MarketController, 'getMarketController')
    }
    return raw ? this._controller : this._controller.methods
  }

  async distributor(raw) {
    if (!this._distributor) {
      this._distributor = await this._createHadesContractInstance(ABI_HDSDistributor, 'getDistributor')
    }
    this._distributor.methods._address = this._distributor._address
    return raw ? this._distributor : this._distributor.methods
  }

  async hToken(underlyingSymbol, addr, raw) {
    if (!this._hTokens[addr]) {
      if (underlyingSymbol === 'ETH') {
        this._hTokens[addr] = this._createContractInstance(ABI_HEther, addr)
      } else {
        this._hTokens[addr] = this._createContractInstance(ABI_HErc20, addr)
      }
    }
    return raw ? this._hTokens[addr] : this._hTokens[addr].methods
  }

  async lpToken(addr, raw) {
    if (!this._lpTokens[addr]) {
      this._lpTokens[addr] = this._createContractInstance(ABI_EIP20Interface, addr)
    }
    return raw ? this._lpTokens[addr] : this._lpTokens[addr].methods
  }

  async getOverview() {
    const reporter = await this.reporter()
    const hds = await this.hds()
    const dol = await this.dol()
    const distributor = await this.distributor()
    const results = await Promise.all([
      reporter.getAllMarketInfo().call(),
      reporter.getUnderlyingPrices().call(),
      hds.totalSupply().call(),
      dol.totalSupply().call(),
      distributor.mineStartBlock().call(),
      this._web3.eth.getBlock('latest'),
    ])

    const marketInfo = results[0]
    const prices = results[1]
    const hdsSupply = results[2]
    const dolSupply = results[3]
    const mineStartBlockNum = Number(results[4])
    const latestBlockNum = results[5].number

    const hdsMined = this._calculateTotalMined(mineStartBlockNum, latestBlockNum)
    const priceMap = new Map()
    for (const price of prices) {
      priceMap.set(price.hToken, price.underlyingPrice)
    }

    const hdsSupplyLiteral = Number(hdsSupply) / HDS_POINT
    const dolSupplyLiteral = Number(dolSupply) / DOL_POINT

    let totalSupplyAcc = 0
    let totalBorrowsAcc = 0
    let totalReservesAcc = 0
    let markets = []
    for (const item of marketInfo) {
      const { totalSupply, totalBorrows, totalReserves, exchangeRateCurrent, underlyingDecimals, hToken } = item
      const price = Number(priceMap.get(hToken))
      totalSupplyAcc += (Number(totalSupply) * Number(exchangeRateCurrent) * price) / FIXED_POINT
      totalReservesAcc += Number(totalReserves) * price
      totalBorrowsAcc += Number(totalBorrows) * price

      const decimalDenom = Math.pow(10, Number(underlyingDecimals))
      let market = {}
      market.totalSupplyLiteral = (Number(totalSupply) * Number(exchangeRateCurrent)) / FIXED_POINT / decimalDenom
      market.totalReservesLiteral = Number(totalReserves) / decimalDenom
      market.totalBorrowsLiteral = Number(totalBorrows) / decimalDenom
      if (item.symbol === 'hDOL') {
        market.totalSupplyLiteral -= dolSupplyLiteral
      }
      markets.push(market)
    }
    const totalSupplyAccLiteral = totalSupplyAcc / FIXED_POINT / PRICE_POINT - dolSupplyLiteral
    const totalReservesAccLiteral = totalReservesAcc / FIXED_POINT / PRICE_POINT
    const totalBorrowsAccLiteral = totalBorrowsAcc / FIXED_POINT / PRICE_POINT
    return {
      totalSupplyAccLiteral,
      totalReservesAccLiteral,
      totalBorrowsAccLiteral,
      markets,
      hds: {
        circulating: hdsSupplyLiteral,
        mined: hdsMined,
      },
      dol: {
        totalSupply: dolSupplyLiteral,
      },
    }
  }

  async getMarkets() {
    const reporter = await this.reporter()
    const marketInfo = await reporter.getAllMarketInfo().call()
    const markets = []
    for (const item of marketInfo) {
      const market = Object.assign({}, item)
      market.borrowRatePerYear = (Number(item.borrowRatePerBlock) * BLOCKS_PER_YEAR) / FIXED_POINT
      market.supplyRatePerYear = (Number(item.supplyRatePerBlock) * BLOCKS_PER_YEAR) / FIXED_POINT
      market.totalCashLiteral = Number(item.totalCash) / Math.pow(10, item.underlyingDecimals)
      market.totalSupplyLiteral = Number(item.totalSupply) / Math.pow(10, 8)
      market.collateralFactorLiteral = Number(item.collateralFactorMantissa) / FIXED_POINT
      market.reserveFactorLiteral = Number(item.reserveFactorMantissa) / FIXED_POINT

      const decimalsDiff = Number(item.underlyingDecimals) - Number(item.hTokenDecimals)
      market.exchangeRateLiteral = Number(item.exchangeRateCurrent) / FIXED_POINT / 10 ** decimalsDiff
      market.liquidationIncentiveLiteral = 0.08
      markets.push(market)
    }
    return markets
  }

  async getHTokenBalances(hToken, account) {
    const reporter = await this.reporter()
    const result = await reporter.getHTokenBalances(hToken, account).call()
    return this._transformHTokenBalances(result)
  }

  async getAccountBalances(account) {
    const reporter = await this.reporter()
    const hds = await this.hds()
    const results = await Promise.all([hds.balanceOf(account).call(), reporter.getAllHTokenBalances(account).call()])
    const sheets = results[1].map(this._transformHTokenBalances.bind(this))
    const hdsBalanceLiteral = Number(results[0]) / HDS_POINT
    return {
      sheets,
      hds: {
        balance: results[0],
        balanceLiteral: hdsBalanceLiteral,
      },
    }
  }

  async getPools(account) {
    const distributor = await this.distributor()
    const reporter = await this.reporter()
    const querys = [
      this._web3.eth.getBlock('latest'),
      reporter.getUnderlyingPrices().call(),
      distributor.rewardsPerBlock().call(),
      distributor.getAllPools().call(),
    ]
    if (account) {
      querys.push(distributor.getAccountRecords(account).call())
    }

    const results = await Promise.all(querys)
    const hdsPrice = this._lastHDSPrice * ((PRICE_POINT / HDS_POINT) * FIXED_POINT)
    let ethPrice = 0
    const latestBlockNum = Number(results[0].number)

    const priceMap = new Map()
    for (const price of results[1]) {
      priceMap.set(price.hToken, Number(price.underlyingPrice))
      if (price.anchorSymbol === 'ETH') {
        ethPrice = Number(price.underlyingPrice)
      }
    }
    const rewardsPerBlock = Number(results[2])

    const lendingPoolTitles = ['ETH', 'DOL', 'renBTC']
    const exchangingPoolTitles = ['ETH/DOL', 'ETH/HDS']

    const dol = await this.dol(true)
    const hds = await this.hds(true)
    const exchangingTokens = [dol.options.address, hds.options.address]

    const pools = []
    for (const item of results[3]) {
      const pool = Object.assign({}, item)
      pool.totalPowerCorrect = Number(item.totalPower) + Number(item.accumulatedPower)
      const ptype = Number(pool.ptype)
      if (ptype === 1) {
        // POOL_TYPE_LENDING
        const price = priceMap.get(item.tokenAddr)
        pool.totalPowerNormalized = (pool.totalPowerCorrect * price) / FIXED_POINT
        pool.underlyingPrice = price
        pool.title = lendingPoolTitles.shift()
      } else {
        // POOL_TYPE_EXCHANGING
        pool.totalPowerNormalized = (pool.totalPowerCorrect * ethPrice) / PRICE_POINT
        pool.underlyingPrice = ethPrice
        pool.title = exchangingPoolTitles.shift()

        let baseUrl
        if (this.chainId() == 1) {
          baseUrl = 'https://app.uniswap.org/#/add/ETH/'
        } else {
          baseUrl = 'https://faucet.hades.finance/#/add/ETH/'
        }
        pool.lpUrl = baseUrl + exchangingTokens.shift()
      }
      const state = Number(pool.state)
      if (state === 0) {
        // POOL_STATUS_NOT_START
        pool.countdown = Number(item.startBlock - latestBlockNum)
      }
      if (state === 1) {
        // POOL_STATUS_ACTIVE
        pool.apy = (rewardsPerBlock * BLOCKS_PER_YEAR * hdsPrice) / FIXED_POINT / pool.totalPowerNormalized
      } else {
        pool.apy = 0
      }
      pool.totalPowerNormalizedLiteral = pool.totalPowerNormalized / PRICE_POINT

      const newMined = this._calculateMined(Number(pool.lastBlockNumber), latestBlockNum)
      const totalMined = newMined * HDS_POINT + Number(pool.accumulatedTokens)
      pool.rewardIndex = Number(pool.rewardIndex) + (totalMined * FIXED_POINT) / pool.totalPowerCorrect
      pools.push(pool)
    }
    const my = []
    if (account) {
      const accountRecords = results[4]
      for (let i = 0; i < accountRecords.length; i++) {
        const item = Object.assign({}, accountRecords[i])
        const rewardIndex = Number(pools[i].rewardIndex)
        const power = Number(item.power)
        const mask = Number(item.mask)
        const settled = Number(item.settled)
        item.unclaimed = (rewardIndex * power - mask) / FIXED_POINT + settled
        item.unclaimedLiteral = item.unclaimed / HDS_POINT
        item.claimedLiteral = Number(item.claimed) / HDS_POINT
        item.powerNormalized = (item.power * pools[i].underlyingPrice) / FIXED_POINT
        item.powerNormalizedLiteral = item.powerNormalized / PRICE_POINT
        item.powerRatio = item.power / pools[i].totalPowerCorrect
        my.push(item)
      }
    }
    return { pools, my }
  }

  async getDistributorStats() {
    const distributor = await this.distributor()
    const result = await distributor.getDistributorStats().call()
    const stats = Object.assign({}, result)
    stats.rewardsPerBlockLiteral = Number(stats.rewardsPerBlock) / HDS_POINT
    return stats
  }

  async getPrice(symbol) {
    const prices = await this.getPrices()
    for (const item of prices) {
      if (item.anchorSymbol === symbol) {
        return item
      }
    }
    return null
  }

  async getPrices() {
    const reporter = await this.reporter()
    const prices = await reporter.getUnderlyingPrices().call()
    return prices
      .filter((item) => item.anchorSymbol !== 'USD')
      .map((item) => {
        const underlyingPriceLiteral = Number(item.underlyingPrice) / 1e8
        return Object.assign({}, item, { underlyingPriceLiteral })
      })
  }

  async getAccountLiquidity(account) {
    const controller = await this.controller()
    const result = await controller.getAccountLiquidity(account).call()
    const liquidity = Number(result[0])
    const shortfall = Number(result[1])
    const liquidityLiteral = liquidity / PRICE_POINT
    const shortfallLiteral = liquidity / PRICE_POINT
    return {
      liquidity,
      shortfall,
      liquidityLiteral,
      shortfallLiteral,
    }
  }

  subscribeHDSPrice() {
    const ws = new WebSocket('wss://wsapi.jbex.com/openapi/quote/ws/v1')
    const params = {
      symbol: 'HDSUSDT',
      topic: 'realtimes',
      event: 'sub',
      params: {
        binary: false,
      },
    }

    const self = this
    ws.onmessage = (msg) => {
      try {
        const result = JSON.parse(msg.data)
        if (result.data && result.data.length > 0 && result.data[0].c) {
          self._lastHDSPrice = Number(result.data[0].c)
          console.log('HDS price updated:', self._lastHDSPrice)
        } else {
          // console.log('unwanted msg:', result)
        }
      } catch (e) {
        console.log('failed to parse msg:', e, msg)
      }
    }
    ws.onopen = () => {
      ws.send(JSON.stringify(params))
      setInterval(() => {
        ws.send(JSON.stringify({ ping: Date.now() }))
      }, 60000)
    }
  }

  // async getHDSPrice() {
  // 	const self = this
  // 	return new Promise((resolve, reject) => {
  // 		const req = new XMLHttpRequest()
  // 		req.open('get', HDS_PRICE_URL)
  // 		req.onreadystatechange = () => {
  // 			console.log('req:', req.readyState, req.status)
  // 			if (req.readyState == 4 && req.status == 200) {
  // 				console.log('response', req.responseText)
  // 				try {
  // 					const res = JSON.parse(req.responseText)
  // 					if (res.price) {
  // 						console.log('update hds price:', self._lastHDSPrice, Number(res.price))
  // 						self._lastHDSPrice = Number(res.price)
  // 						resolve(self._lastHDSPrice)
  // 					} else {
  // 						reject('No price field')
  // 					}
  // 				} catch (e) {
  // 					console.log('failed to parse response:', e)
  // 					reject('Not json format')
  // 				}
  // 			}
  // 		}
  // 		req.send()
  // 	})
  // }

  // Private methods

  _transformHTokenBalances(obj) {
    const result = Object.assign({}, obj)
    const decimalDenom = Math.pow(10, Number(obj.underlyingDecimals))
    result.tokenBalanceLiteral = Number(obj.tokenBalance) / decimalDenom
    result.collateralBalanceLiteral = Number(obj.balanceOfUnderlying) / decimalDenom
    result.borrowBalanceLiteral = Number(obj.borrowBalanceCurrent) / decimalDenom
    result.hTokenBalanceLiteral = Number(obj.balanceOf) / 1e8
    result.underlyingDecimals = Number(obj.underlyingDecimals)
    return result
  }

  async _createHadesContractInstance(abi, getAddrMethod) {
    const addr = await this._orchestrator.methods[getAddrMethod].call().call()
    return new this._web3.eth.Contract(abi, addr)
  }

  _createContractInstance(abi, addr) {
    return new this._web3.eth.Contract(abi, addr)
  }

  _calculateTotalMined(start, end) {
    return this._calculateMined(start, end) + INITIAL_SUPPLY
  }

  _calculateMined(start, end) {
    let total = 0
    let rewardPerBlock = INITIAL_REWARD
    while (start + BLOCKS_PER_YEAR <= end) {
      total += rewardPerBlock * BLOCKS_PER_YEAR
      start += BLOCKS_PER_YEAR
      rewardPerBlock /= 2
    }
    total += (end - start) * INITIAL_REWARD
    return total
  }
}

window.Hades = Hades

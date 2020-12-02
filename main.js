let globals = {
	hades: null,
	hTokenMap: new Map(),
	lpTokenMap: new Map(),
	loginAccount: null,
	pendingTransactions: [],
}

function literalToReal(literal, decimals) {
	const real = Number(literal) * 10 ** Number(decimals)
	return real.toString()
}

function realToLiteral(real, decimals) {
	const literal = Number(real) / 10 ** Number(decimals)
	return literal
}

async function processMarkets() {
	const markets = await globals.hades.getMarkets()
	for (const market of markets) {
		globals.hTokenMap.set(market.underlyingSymbol, market.hToken)
	}
	return markets
}

async function processPools() {
	const result = await globals.hades.getPools()
	for (const pool of result.pools) {
		globals.lpTokenMap.set(pool.id, pool.tokenAddr)
	}
	return result
}

function promptSymbol(defaultSymbol) {
	const symbol = window.prompt('Input the symbol, e.g. ETH or DOL', defaultSymbol || '')
	const address = globals.hTokenMap.get(symbol)
	if (!symbol || !address) {
		alert('Please get symbol and hToken first!')
		throw new Error('Failed to get hToken address')
	}
	return { symbol, address }
}

async function launchTransaction(transaction) {
	try {
		const result = await transaction
		if (result.transactionHash) {
			globals.pendingTransactions.push(result.transactionHash)
		}
	} catch (e) {
		console.log('failed to launch transaction:', e)
	}
}

async function confirmPendingTransactions() {
	for (let i = 0; i < globals.pendingTransactions.length; i++) {
		const txHash = globals.pendingTransactions[i]
		const confirmed = await globals.hades.isTransactionConfirmed(txHash)
		if (confirmed) {
			console.log('Transaction confirmed:', txHash)
			globals.pendingTransactions.splice(i, 1)
			break
		}
	}
}

async function demoSupply() {
	const { symbol, address } = promptSymbol('ETH')
	const balanceInfo = await globals.hades.getHTokenBalances(address, globals.loginAccount)
	const inputAmount = window.prompt(`Input supply amount, you have total ${balanceInfo.tokenBalanceLiteral}`, ``)
	if (!inputAmount) return

	const value = literalToReal(inputAmount, balanceInfo.underlyingDecimals)
	const hToken = await globals.hades.hToken(symbol, address)

	let tx
	if (symbol === 'ETH') {
		tx = hToken.mint().send({ value: value.toString(), from: globals.loginAccount })
	} else {
		tx = hToken.mint(inputAmount).send({ from: globals.loginAccount })
	}
	await launchTransaction(tx)
}

async function demoEnterMarket() {
	const { address } = promptSymbol('ETH')
	const controller = await globals.hades.controller()
	await launchTransaction(controller.enterMarkets([address]).send({ from: globals.loginAccount }))
}

async function demoBorrow() {
	const { symbol, address } = promptSymbol('DOL')
	const account = globals.loginAccount
	const results = await Promise.all([
		globals.hades.getHTokenBalances(address, account),
		globals.hades.getPrice(symbol),
		globals.hades.getAccountLiquidity(account),
		globals.hades.hToken(symbol, address),
	])
	const balanceInfo = results[0]
	let borrowLimit
	if (symbol !== 'DOL') {
		borrowLimit = liquidity / Number(results[1].underlyingPrice)
	} else {
		borrowLimit = results[2].liquidityLiteral
	}
	const inputAmount = window.prompt(`Input borrow amount, limit: ${borrowLimit}`, '')
	const realAmount = literalToReal(inputAmount, balanceInfo.underlyingDecimals)
	const hToken = results[3]
	await launchTransaction(hToken.borrow(realAmount).send({ from: account }))
}

async function demoRepay() {
	const account = globals.loginAccount
	const { symbol, address } = promptSymbol('DOL')
	const results = await Promise.all([
		globals.hades.getHTokenBalances(address, account),
		globals.hades.hToken(symbol, address),
		globals.hades.dol(),
	])
	const balanceInfo = results[0]
	const hToken = results[1]
	const dol = results[2]
	const inputAmount = window.prompt(`Input repay amount, total debts: ${balanceInfo.borrowBalanceLiteral}`, '')
	if (!inputAmount) return

	const realAmount = literalToReal(inputAmount, balanceInfo.underlyingDecimals)
	await dol.approve(address, realAmount).send({ from: account })
	const isContinue = window.confirm('Continue to repayBorrow?')
	if (!isContinue) return

	await launchTransaction(hToken.repayBorrow(realAmount).send({ from: account }))
}

async function demoRedeem() {
	const account = globals.loginAccount
	const { symbol, address } = promptSymbol('ETH')
	const results = await Promise.all([
		globals.hades.getHTokenBalances(address, account),
		globals.hades.hToken(symbol, address),
	])
	const balanceInfo = results[0]
	const hToken = results[1]
	const inputAmount = window.prompt(`Input redeem amount, limit: ${balanceInfo.hTokenBalanceLiteral}`, '')
	if (!inputAmount) return

	const realAmount = literalToReal(inputAmount, 8)
	await launchTransaction(hToken.redeem(realAmount).send({ from: account }))
}

async function increaseLPPower() {
	const account = globals.loginAccount
	const pid = window.prompt('Input pool id', '2')
	const lpTokenAddr = globals.lpTokenMap.get(pid)
	if (!lpTokenAddr) {
		return alert('failed to get lp token address')
	}
	const lpToken = await globals.hades.lpToken(lpTokenAddr)
	const results = await Promise.all([
		lpToken.balanceOf(account).call(),
		lpToken.decimals().call(),
		globals.hades.distributor(),
	])
	const balance = results[0]
	const decimals = results[1]
	const balanceLiteral = realToLiteral(balance, decimals)
	const inputAmount = window.prompt(`Input the amount you want to put in, total: ${balanceLiteral}`, '')
	if (!inputAmount) return

	const realAmount = literalToReal(inputAmount, decimals)
	const distributor = results[2]
	await lpToken.approve(distributor._address, realAmount).send({ from: account })
	const isContinue = window.confirm('Continue to mint?')
	if (!isContinue) return

	await launchTransaction(distributor.mintExchangingPool(pid, realAmount).send({ from: account }))
}

async function demoClaim() {
	const pid = window.prompt('Input pool id', '0')
	const distributor = await globals.hades.distributor()
	await launchTransaction(distributor.claim(pid).send({ from: globals.loginAccount }))
}

function main() {
	const network = window.HADES_CONFIG.networks.test
	let hades = (globals.hades = new Hades(network))

	const bindClick = (id, handler) => (document.getElementById(id).onclick = handler)

	const login = () => {
		if (hades.chainId() <= 42 && hades.chainId() !== Number(window.ethereum.chainId)) {
			return alert('Wrong Network!')
		}
		hades.setProvider(window.web3.currentProvider)

		const loginAccount = (globals.loginAccount = window.ethereum.selectedAddress)
		console.log('Login Account:', loginAccount)

		bindClick('liquidity', () => hades.getAccountLiquidity(loginAccount).then(console.log))
		bindClick('balances', () => hades.getAccountBalances(loginAccount).then(console.log))
		bindClick('miningLogin', () => hades.getPools(loginAccount).then(console.log))

		bindClick('supply', demoSupply)
		bindClick('enterMarket', demoEnterMarket)
		bindClick('borrow', demoBorrow)
		bindClick('repay', demoRepay)
		bindClick('redeem', demoRedeem)
		bindClick('increaseLPPower', increaseLPPower)
		bindClick('claim', demoClaim)
		bindClick('exit')
	}

	bindClick('overview', () => hades.getOverview().then(console.log))
	bindClick('markets', () => processMarkets().then(console.log))
	bindClick('mining', () => processPools().then(console.log))
	bindClick('distributorStats', () => hades.getDistributorStats().then(console.log))
	bindClick('prices', () => hades.getPrices().then(console.log))

	bindClick('connect', () => {
		if (window.ethereum) {
			window.ethereum.enable()
			login()
		} else {
			alert('Please install MetaMask to use this dApp!')
		}
	})

	if (window.ethereum) {
		window.ethereum.on('accountsChanged', login)
	}

	setInterval(confirmPendingTransactions, 10000)

	processMarkets()
	processPools()
}

window.onload = main

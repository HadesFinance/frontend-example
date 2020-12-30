window.HADES_CONFIG = {
  networks: {
    dev: {
      provider: 'ws://localhost:8545',
      chainId: 0x539,
      orchestratorAddress: '0x661D820c1D1281e9147036B86fa3Ebe9fa627cdF',
      etherscan: 'etherscan.io',
      indexServer: 'http://localhost:3000',
    },
    test: {
      provider: 'ws://139.180.193.123:8545',
      chainId: 0x539,
      orchestratorAddress: '0x1d736CBAB67422a524E6923A2e4f47C2Ae891335',
      etherscan: 'etherscan.io',
      indexServer: 'http://139.180.193.123:3000',
    },
    kovan: {
      provider: 'https://kovan.infura.io/v3/d3f8f9c2141b4561b6c7f23a34466d7c',
      chainId: 42,
      orchestratorAddress: '0x297344B27D52abAe0f30AFE947ddAd60d425F40d',
      etherscan: 'kovan.etherscan.io',
      indexServer: 'http://localhost:3000',
    },
    ropsten: {
      provider: 'https://ropsten.infura.io/v3/d3f8f9c2141b4561b6c7f23a34466d7c',
      chainId: 3,
      orchestratorAddress: '0x297344B27D52abAe0f30AFE947ddAd60d425F40d',
      etherscan: 'ropsten.etherscan.io',
      indexServer: 'http://localhost:3000',
    },
    live: {
      provider: 'ws://localhost:8545',
      chainId: 1,
      orchestratorAddress: '0x297344B27D52abAe0f30AFE947ddAd60d425F40d',
      etherscan: 'etherscan.io',
      indexServer: 'http://localhost:3000',
    },
  },
}

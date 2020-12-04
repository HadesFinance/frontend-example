window.HADES_CONFIG = {
	networks: {
		dev: {
			provider: 'ws://localhost:8545',
			chainId: 0x539,
			orchestratorAddress: '0xdb358091fe73714fDBe62BEd9B59Ff26E1bB09D1',
			etherscan: 'etherscan.io',
		},
		test: {
			provider: 'ws://139.180.193.123:8545',
			chainId: 0x539,
			orchestratorAddress: '0xc01F7c458bcF82262CCd8e41387aeFA20a5635cd',
			etherscan: 'etherscan.io',
		},
		kovan: {
			provider: 'https://kovan.infura.io/v3/d3f8f9c2141b4561b6c7f23a34466d7c',
			chainId: 42,
			orchestratorAddress: '0x297344B27D52abAe0f30AFE947ddAd60d425F40d',
			etherscan: 'kovan.etherscan.io',
		},
		ropsten: {
			provider: 'https://ropsten.infura.io/v3/d3f8f9c2141b4561b6c7f23a34466d7c',
			chainId: 3,
			orchestratorAddress: '0x297344B27D52abAe0f30AFE947ddAd60d425F40d',
			etherscan: 'ropsten.etherscan.io',
		},
		live: {
			provider: 'ws://localhost:8545',
			chainId: 1,
			orchestratorAddress: '0x297344B27D52abAe0f30AFE947ddAd60d425F40d',
			etherscan: 'etherscan.io',
		},
	},
}

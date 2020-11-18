window.HADES_CONFIG = {
	networks: {
		dev: {
			provider: 'ws://localhost:8545',
			chainId: 0x539,
			orchestratorAddress: '0xdb358091fe73714fDBe62BEd9B59Ff26E1bB09D1',
		},
		test: {
			provider: 'ws://139.180.193.123:8545',
			chainId: 0x539,
			orchestratorAddress: '0x5e8a9E2832d8B35E3933f07Cf65e371837b30BDe',
		},
		kovan: {
			provider: 'https://kovan.infura.io/v3/d3f8f9c2141b4561b6c7f23a34466d7c',
			chainId: 42,
			orchestratorAddress: '0x297344B27D52abAe0f30AFE947ddAd60d425F40d',
		},
		ropsten: {
			provider: 'https://ropsten.infura.io/v3/d3f8f9c2141b4561b6c7f23a34466d7c',
			chainId: 3,
			orchestratorAddress: '0x297344B27D52abAe0f30AFE947ddAd60d425F40d',
		},
		live: {
			provider: 'ws://localhost:8545',
			chainId: 1,
			orchestratorAddress: '0x297344B27D52abAe0f30AFE947ddAd60d425F40d',
		},
	},
}

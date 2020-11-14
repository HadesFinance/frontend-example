window.HADES_CONFIG = {
	networks: {
		dev: {
			provider: 'ws://localhost:8545',
			chainId: 0x539,
			orchestratorAddress: '0x3d33Ea6ed4e3ABF22494881CdA166aB42168B61D',
		},
		ropsten: {
			provider: 'ws://localhost:8545',
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

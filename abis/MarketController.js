window.ABI_MarketController = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      }
    ],
    "name": "MarketListed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isCurrentSuspended",
        "type": "bool"
      }
    ],
    "name": "MarketSuspended",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldCloseFactorMantissa",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newCloseFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "NewCloseFactor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldCollateralFactorMantissa",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newCollateralFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "NewCollateralFactor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldLiquidationIncentiveMantissa",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newLiquidationIncentiveMantissa",
        "type": "uint256"
      }
    ],
    "name": "NewLiquidationIncentive",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldMaxAssets",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newMaxAssets",
        "type": "uint256"
      }
    ],
    "name": "NewMaxAssets",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allMarkets",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "closeFactorMantissa",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "defaultCollateralFactorMantissa",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "liquidationIncentiveMantissa",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "markets",
    "outputs": [
      {
        "internalType": "enum MarketControllerBase.MarketState",
        "name": "state",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "collateralFactorMantissa",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "maxAssets",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "orchestrator",
    "outputs": [
      {
        "internalType": "contract OrchestratorInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "part1",
    "outputs": [
      {
        "internalType": "contract MarketControllerPart1",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "suspended",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_orchestrator",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_parts",
        "type": "address[]"
      }
    ],
    "name": "bind",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOracle",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getAssetsIn",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAllMarkets",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      }
    ],
    "name": "getMarket",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getCollateralFactors",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      }
    ],
    "name": "isListedMarket",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      }
    ],
    "name": "isLiquidating",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "mintAmount",
        "type": "uint256"
      }
    ],
    "name": "mintAllowed",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "redeemer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "redeemTokens",
        "type": "uint256"
      }
    ],
    "name": "redeemAllowed",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "borrowAmount",
        "type": "uint256"
      }
    ],
    "name": "borrowAllowed",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "payer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "repayAmount",
        "type": "uint256"
      }
    ],
    "name": "repayBorrowAllowed",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hTokenBorrowed",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "hTokenCollateral",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "repayAmount",
        "type": "uint256"
      }
    ],
    "name": "liquidateBorrowAllowed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hTokenBorrowed",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "hTokenCollateral",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "actualRepayAmount",
        "type": "uint256"
      }
    ],
    "name": "liquidateCalculateSeizeTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hTokenCollateral",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "hTokenBorrowed",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "seizeTokens",
        "type": "uint256"
      }
    ],
    "name": "seizeAllowed",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "transferTokens",
        "type": "uint256"
      }
    ],
    "name": "transferAllowed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getAccountLiquidity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newMaxAssets",
        "type": "uint256"
      }
    ],
    "name": "setMaxAssets",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newLiquidationIncentiveMantissa",
        "type": "uint256"
      }
    ],
    "name": "setLiquidationIncentive",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      }
    ],
    "name": "supportMarket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      }
    ],
    "name": "closeMarket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      }
    ],
    "name": "liquidateMarket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      }
    ],
    "name": "removeMarket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "toogleSuspension",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newCloseFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "setCloseFactor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "hToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "newCollateralFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "setCollateralFactor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
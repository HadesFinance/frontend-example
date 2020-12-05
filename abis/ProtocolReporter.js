window.ABI_ProtocolReporter = [
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
        "internalType": "address",
        "name": "hTokenAddr",
        "type": "address"
      }
    ],
    "name": "getMarketInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "hToken",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "underlyingSymbol",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "anchorSymbol",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "exchangeRateCurrent",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "supplyRatePerBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "borrowRatePerBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reserveFactorMantissa",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalReserves",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalCash",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "state",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "collateralFactorMantissa",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "underlyingAssetAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "hTokenDecimals",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "underlyingDecimals",
            "type": "uint256"
          }
        ],
        "internalType": "struct ProtocolReporter.MarketInfo",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAllMarketInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "hToken",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "underlyingSymbol",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "anchorSymbol",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "exchangeRateCurrent",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "supplyRatePerBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "borrowRatePerBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reserveFactorMantissa",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBorrows",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalReserves",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalCash",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "state",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "collateralFactorMantissa",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "underlyingAssetAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "hTokenDecimals",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "underlyingDecimals",
            "type": "uint256"
          }
        ],
        "internalType": "struct ProtocolReporter.MarketInfo[]",
        "name": "",
        "type": "tuple[]"
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
        "name": "hTokenAddr",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getHTokenBalances",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "hToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "balanceOf",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "borrowBalanceCurrent",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "balanceOfUnderlying",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenBalance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenAllowance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "underlyingDecimals",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "underlyingSymbol",
            "type": "string"
          }
        ],
        "internalType": "struct ProtocolReporter.HTokenBalances",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getAllHTokenBalances",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "hToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "balanceOf",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "borrowBalanceCurrent",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "balanceOfUnderlying",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenBalance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenAllowance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "underlyingDecimals",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "underlyingSymbol",
            "type": "string"
          }
        ],
        "internalType": "struct ProtocolReporter.HTokenBalances[]",
        "name": "",
        "type": "tuple[]"
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
        "name": "hTokenAddr",
        "type": "address"
      }
    ],
    "name": "getUnderlyingPrice",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "hToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "underlyingPrice",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "anchorSymbol",
            "type": "string"
          }
        ],
        "internalType": "struct ProtocolReporter.HTokenUnderlyingPrice",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getUnderlyingPrices",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "hToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "underlyingPrice",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "anchorSymbol",
            "type": "string"
          }
        ],
        "internalType": "struct ProtocolReporter.HTokenUnderlyingPrice[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
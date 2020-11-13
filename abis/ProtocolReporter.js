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
        "internalType": "contract HToken",
        "name": "hToken",
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
            "internalType": "bool",
            "name": "isListed",
            "type": "bool"
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
            "internalType": "bool",
            "name": "isListed",
            "type": "bool"
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
        "internalType": "contract HToken",
        "name": "hToken",
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
        "internalType": "contract HToken",
        "name": "hToken",
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
  },
  {
    "inputs": [
      {
        "internalType": "contract ControllerInterface",
        "name": "controller",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getAccountLimits",
    "outputs": [
      {
        "components": [
          {
            "internalType": "contract HToken[]",
            "name": "markets",
            "type": "address[]"
          },
          {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "shortfall",
            "type": "uint256"
          }
        ],
        "internalType": "struct ProtocolReporter.AccountLimits",
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
        "internalType": "contract Governor",
        "name": "governor",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "voter",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "proposalIds",
        "type": "uint256[]"
      }
    ],
    "name": "getGovReceipts",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "hasVoted",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "support",
            "type": "bool"
          },
          {
            "internalType": "uint96",
            "name": "votes",
            "type": "uint96"
          }
        ],
        "internalType": "struct ProtocolReporter.GovReceipt[]",
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
        "internalType": "contract Governor",
        "name": "governor",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "proposalIds",
        "type": "uint256[]"
      }
    ],
    "name": "getGovProposals",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "proposer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "eta",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "targets",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "values",
            "type": "uint256[]"
          },
          {
            "internalType": "string[]",
            "name": "signatures",
            "type": "string[]"
          },
          {
            "internalType": "bytes[]",
            "name": "calldatas",
            "type": "bytes[]"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "forVotes",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "againstVotes",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "canceled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "executed",
            "type": "bool"
          }
        ],
        "internalType": "struct ProtocolReporter.GovProposal[]",
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
        "internalType": "contract HDS",
        "name": "hds",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getCompBalanceMetadata",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "votes",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "delegate",
            "type": "address"
          }
        ],
        "internalType": "struct ProtocolReporter.CompBalanceMetadata",
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
        "internalType": "contract HDS",
        "name": "hds",
        "type": "address"
      },
      {
        "internalType": "contract ControllerInterface",
        "name": "controller",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getCompBalanceMetadataExt",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "votes",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "delegate",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "allocated",
            "type": "uint256"
          }
        ],
        "internalType": "struct ProtocolReporter.CompBalanceMetadataExt",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract HDS",
        "name": "hds",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint32[]",
        "name": "blockNumbers",
        "type": "uint32[]"
      }
    ],
    "name": "getCompVotes",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "votes",
            "type": "uint256"
          }
        ],
        "internalType": "struct ProtocolReporter.CompVotes[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
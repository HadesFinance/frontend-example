window.ABI_HDSDistributor = [
  {
    "inputs": [],
    "name": "activePools",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "mineStartBlock",
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
    "name": "nextHalvingBlock",
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
    "name": "rewardsPerBlock",
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
        "name": "hToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "startBlock",
        "type": "uint256"
      }
    ],
    "name": "createLendingPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lpToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "startBlock",
        "type": "uint256"
      }
    ],
    "name": "createExchangingPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
      }
    ],
    "name": "openPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
      }
    ],
    "name": "closePool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "power",
        "type": "uint256"
      }
    ],
    "name": "updateLendingPower",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mintExchangingPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
      }
    ],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
      }
    ],
    "name": "exitExchangingPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
      }
    ],
    "name": "getPool",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "id",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "ptype",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "tokenAddr",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "status",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "rewardIndex",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastBlockNumber",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "accumulatedPower",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "accumulatedTokens",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          }
        ],
        "internalType": "struct DistributorInterface.Pool",
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
    "name": "getAllPools",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "id",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "ptype",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "tokenAddr",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "status",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "rewardIndex",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastBlockNumber",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "accumulatedPower",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "accumulatedTokens",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalPower",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startBlock",
            "type": "uint256"
          }
        ],
        "internalType": "struct DistributorInterface.Pool[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "totalPools",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
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
    "name": "getAccountRecords",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "power",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "mask",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "settled",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "claimed",
            "type": "uint256"
          }
        ],
        "internalType": "struct DistributorInterface.AccountRecord[]",
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
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "poolId",
        "type": "uint32"
      }
    ],
    "name": "getAccountRecord",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "power",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "mask",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "settled",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "claimed",
            "type": "uint256"
          }
        ],
        "internalType": "struct DistributorInterface.AccountRecord",
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
    "name": "getDistributorStats",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "rewardsPerBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "mineStartBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "nextHalvingBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint32",
            "name": "activePools",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "totalPools",
            "type": "uint32"
          }
        ],
        "internalType": "struct DistributorInterface.DistributorStats",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
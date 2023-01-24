export const BlockShopContractAddress = '0x8e13491B1f6A79C97401f0a6256DeB6F57971527'
export const BlockShopContractABI =  [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_chargedFeePercentage",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address payable",
          "name": "seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address payable",
          "name": "buyer",
          "type": "address"
        }
      ],
      "name": "CartEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "profileAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ProfileMetaData",
          "type": "string"
        }
      ],
      "name": "ProfileEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "productOwnerAccount",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "productBuyerAccount",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "buyerMetadata",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "PurchaseProductEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address payable",
          "name": "productOwnerAccount",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ownerMetadata",
          "type": "string"
        }
      ],
      "name": "StageProductEvent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_buyerMetadata",
          "type": "string"
        }
      ],
      "name": "BuyProduct",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "GetTotalPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_selleraddress",
          "type": "address"
        }
      ],
      "name": "ProductCart",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
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
      "name": "Purchasedproducts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "buyerMetadata",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Stagedproducts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "productOwnerAccount",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "productPrice",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "ownerMetadata",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "productStatus",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "received",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "delivered",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productPrice",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_ownerMetadata",
          "type": "string"
        }
      ],
      "name": "UploadProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "cartItems",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "sellerAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "buyerAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "chargedFeePercentage",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractOwnerAccount",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_profileMetaData",
          "type": "string"
        }
      ],
      "name": "createProfile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        }
      ],
      "name": "getProducts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "buyerMetadata",
              "type": "string"
            }
          ],
          "internalType": "struct BlockShop.PurchaseProduct[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "productCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "profiles",
      "outputs": [
        {
          "internalType": "address",
          "name": "profileAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "profileMetaData",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
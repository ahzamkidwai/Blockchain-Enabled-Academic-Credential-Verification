// {
//   "abi": [
//     {
//       "type": "constructor",
//       "inputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "approve",
//       "inputs": [
//         {
//           "name": "",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "authorizeInstitution",
//       "inputs": [
//         {
//           "name": "institution",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "balanceOf",
//       "inputs": [
//         {
//           "name": "owner",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "getApproved",
//       "inputs": [
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "getCertificateCount",
//       "inputs": [
//         {
//           "name": "student",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "getCertificatesOfStudent",
//       "inputs": [
//         {
//           "name": "student",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "",
//           "type": "bytes32[]",
//           "internalType": "bytes32[]"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "getCredential",
//       "inputs": [
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "ipfsHash",
//           "type": "string",
//           "internalType": "string"
//         },
//         {
//           "name": "revoked",
//           "type": "bool",
//           "internalType": "bool"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "getCredentialByHash",
//       "inputs": [
//         {
//           "name": "fileHash",
//           "type": "bytes32",
//           "internalType": "bytes32"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "ipfsHash",
//           "type": "string",
//           "internalType": "string"
//         },
//         {
//           "name": "issuer",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "student",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "revoked",
//           "type": "bool",
//           "internalType": "bool"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "isApprovedForAll",
//       "inputs": [
//         {
//           "name": "owner",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "operator",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "",
//           "type": "bool",
//           "internalType": "bool"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "isAuthorizedInstitution",
//       "inputs": [
//         {
//           "name": "institution",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "",
//           "type": "bool",
//           "internalType": "bool"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "issueCredential",
//       "inputs": [
//         {
//           "name": "student",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "ipfsHash",
//           "type": "string",
//           "internalType": "string"
//         },
//         {
//           "name": "fileHash",
//           "type": "bytes32",
//           "internalType": "bytes32"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "name",
//       "inputs": [],
//       "outputs": [
//         {
//           "name": "",
//           "type": "string",
//           "internalType": "string"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "owner",
//       "inputs": [],
//       "outputs": [
//         {
//           "name": "",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "ownerOf",
//       "inputs": [
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "removeInstitution",
//       "inputs": [
//         {
//           "name": "institution",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "renounceOwnership",
//       "inputs": [],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "revokeCredential",
//       "inputs": [
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "safeTransferFrom",
//       "inputs": [
//         {
//           "name": "from",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "to",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "safeTransferFrom",
//       "inputs": [
//         {
//           "name": "from",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "to",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         },
//         {
//           "name": "data",
//           "type": "bytes",
//           "internalType": "bytes"
//         }
//       ],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "setApprovalForAll",
//       "inputs": [
//         {
//           "name": "",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "",
//           "type": "bool",
//           "internalType": "bool"
//         }
//       ],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "supportsInterface",
//       "inputs": [
//         {
//           "name": "interfaceId",
//           "type": "bytes4",
//           "internalType": "bytes4"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "",
//           "type": "bool",
//           "internalType": "bool"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "symbol",
//       "inputs": [],
//       "outputs": [
//         {
//           "name": "",
//           "type": "string",
//           "internalType": "string"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "tokenURI",
//       "inputs": [
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "outputs": [
//         {
//           "name": "",
//           "type": "string",
//           "internalType": "string"
//         }
//       ],
//       "stateMutability": "view"
//     },
//     {
//       "type": "function",
//       "name": "transferFrom",
//       "inputs": [
//         {
//           "name": "from",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "to",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "function",
//       "name": "transferOwnership",
//       "inputs": [
//         {
//           "name": "newOwner",
//           "type": "address",
//           "internalType": "address"
//         }
//       ],
//       "outputs": [],
//       "stateMutability": "nonpayable"
//     },
//     {
//       "type": "event",
//       "name": "Approval",
//       "inputs": [
//         {
//           "name": "owner",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         },
//         {
//           "name": "approved",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         },
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "indexed": true,
//           "internalType": "uint256"
//         }
//       ],
//       "anonymous": false
//     },
//     {
//       "type": "event",
//       "name": "ApprovalForAll",
//       "inputs": [
//         {
//           "name": "owner",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         },
//         {
//           "name": "operator",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         },
//         {
//           "name": "approved",
//           "type": "bool",
//           "indexed": false,
//           "internalType": "bool"
//         }
//       ],
//       "anonymous": false
//     },
//     {
//       "type": "event",
//       "name": "CredentialIssued",
//       "inputs": [
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "indexed": true,
//           "internalType": "uint256"
//         },
//         {
//           "name": "student",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         },
//         {
//           "name": "institution",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         },
//         {
//           "name": "ipfsHash",
//           "type": "string",
//           "indexed": false,
//           "internalType": "string"
//         },
//         {
//           "name": "fileHash",
//           "type": "bytes32",
//           "indexed": false,
//           "internalType": "bytes32"
//         }
//       ],
//       "anonymous": false
//     },
//     {
//       "type": "event",
//       "name": "CredentialRevoked",
//       "inputs": [
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "indexed": true,
//           "internalType": "uint256"
//         }
//       ],
//       "anonymous": false
//     },
//     {
//       "type": "event",
//       "name": "InstitutionAuthorized",
//       "inputs": [
//         {
//           "name": "institution",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         }
//       ],
//       "anonymous": false
//     },
//     {
//       "type": "event",
//       "name": "InstitutionRemoved",
//       "inputs": [
//         {
//           "name": "institution",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         }
//       ],
//       "anonymous": false
//     },
//     {
//       "type": "event",
//       "name": "OwnershipTransferred",
//       "inputs": [
//         {
//           "name": "previousOwner",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         },
//         {
//           "name": "newOwner",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         }
//       ],
//       "anonymous": false
//     },
//     {
//       "type": "event",
//       "name": "Transfer",
//       "inputs": [
//         {
//           "name": "from",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         },
//         {
//           "name": "to",
//           "type": "address",
//           "indexed": true,
//           "internalType": "address"
//         },
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "indexed": true,
//           "internalType": "uint256"
//         }
//       ],
//       "anonymous": false
//     },
//     {
//       "type": "error",
//       "name": "AlreadyAuthorized",
//       "inputs": []
//     },
//     {
//       "type": "error",
//       "name": "CredentialAlreadyIssued",
//       "inputs": []
//     },
//     {
//       "type": "error",
//       "name": "ERC721IncorrectOwner",
//       "inputs": [
//         {
//           "name": "sender",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         },
//         {
//           "name": "owner",
//           "type": "address",
//           "internalType": "address"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "ERC721InsufficientApproval",
//       "inputs": [
//         {
//           "name": "operator",
//           "type": "address",
//           "internalType": "address"
//         },
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "ERC721InvalidApprover",
//       "inputs": [
//         {
//           "name": "approver",
//           "type": "address",
//           "internalType": "address"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "ERC721InvalidOperator",
//       "inputs": [
//         {
//           "name": "operator",
//           "type": "address",
//           "internalType": "address"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "ERC721InvalidOwner",
//       "inputs": [
//         {
//           "name": "owner",
//           "type": "address",
//           "internalType": "address"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "ERC721InvalidReceiver",
//       "inputs": [
//         {
//           "name": "receiver",
//           "type": "address",
//           "internalType": "address"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "ERC721InvalidSender",
//       "inputs": [
//         {
//           "name": "sender",
//           "type": "address",
//           "internalType": "address"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "ERC721NonexistentToken",
//       "inputs": [
//         {
//           "name": "tokenId",
//           "type": "uint256",
//           "internalType": "uint256"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "NotAuthorized",
//       "inputs": []
//     },
//     {
//       "type": "error",
//       "name": "NotAuthorizedInstitution",
//       "inputs": []
//     },
//     {
//       "type": "error",
//       "name": "OwnableInvalidOwner",
//       "inputs": [
//         {
//           "name": "owner",
//           "type": "address",
//           "internalType": "address"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "OwnableUnauthorizedAccount",
//       "inputs": [
//         {
//           "name": "account",
//           "type": "address",
//           "internalType": "address"
//         }
//       ]
//     },
//     {
//       "type": "error",
//       "name": "SoulboundToken",
//       "inputs": []
//     },
//     {
//       "type": "error",
//       "name": "TokenDoesNotExist",
//       "inputs": []
//     }
//   ],
//     "bytecode": {
//     "object": "0x608060405234801561000f575f5ffd5b50336040518060400160405280601281526020017f41636164656d696343726564656e7469616c00000000000000000000000000008152506040518060400160405280600581526020017f4143524544000000000000000000000000000000000000000000000000000000815250815f908161008b9190610423565b50806001908161009b9190610423565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361010e575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101059190610531565b60405180910390fd5b61011d8161012360201b60201c565b5061054a565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061026157607f821691505b6020821081036102745761027361021d565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026102d67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261029b565b6102e0868361029b565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61032461031f61031a846102f8565b610301565b6102f8565b9050919050565b5f819050919050565b61033d8361030a565b6103516103498261032b565b8484546102a7565b825550505050565b5f5f905090565b610368610359565b610373818484610334565b505050565b5b818110156103965761038b5f82610360565b600181019050610379565b5050565b601f8211156103db576103ac8161027a565b6103b58461028c565b810160208510156103c4578190505b6103d86103d08561028c565b830182610378565b50505b505050565b5f82821c905092915050565b5f6103fb5f19846008026103e0565b1980831691505092915050565b5f61041383836103ec565b9150826002028217905092915050565b61042c826101e6565b67ffffffffffffffff811115610445576104446101f0565b5b61044f825461024a565b61045a82828561039a565b5f60209050601f83116001811461048b575f8415610479578287015190505b6104838582610408565b8655506104ea565b601f1984166104998661027a565b5f5b828110156104c05784890151825560018201915060208501945060208101905061049b565b868310156104dd57848901516104d9601f8916826103ec565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61051b826104f2565b9050919050565b61052b81610511565b82525050565b5f6020820190506105445f830184610522565b92915050565b613261806105575f395ff3fe608060405234801561000f575f5ffd5b5060043610610171575f3560e01c80638da5cb5b116100dc578063b88d4fde11610095578063ddb6dbd61161006f578063ddb6dbd61461046a578063e985e9c51461049d578063f10705e6146104cd578063f2fde38b146104fd57610171565b8063b88d4fde14610402578063bd4d8bcb1461041e578063c87b56dd1461043a57610171565b80638da5cb5b146103195780638dd18d2d1461033757806395d89b4114610368578063a22cb46514610386578063b08c6a87146103a2578063b1d5ccf8146103d257610171565b806342842e0e1161012e57806342842e0e146102475780636352211e1461026357806370a0823114610293578063715018a6146102c35780638747d5ed146102cd5780638bbf5536146102e957610171565b806301ffc9a71461017557806306fdde03146101a5578063081812fc146101c3578063095ea7b3146101f35780631b87278d1461020f57806323b872dd1461022b575b5f5ffd5b61018f600480360381019061018a9190612543565b610519565b60405161019c9190612588565b60405180910390f35b6101ad6105fa565b6040516101ba9190612611565b60405180910390f35b6101dd60048036038101906101d89190612664565b610689565b6040516101ea91906126ce565b60405180910390f35b61020d60048036038101906102089190612711565b6106a4565b005b61022960048036038101906102249190612664565b6106d6565b005b6102456004803603810190610240919061274f565b6108b8565b005b610261600480360381019061025c919061274f565b6109b7565b005b61027d60048036038101906102789190612664565b6109d6565b60405161028a91906126ce565b60405180910390f35b6102ad60048036038101906102a8919061279f565b6109e7565b6040516102ba91906127d9565b60405180910390f35b6102cb610a9d565b005b6102e760048036038101906102e2919061279f565b610ab0565b005b61030360048036038101906102fe919061279f565b610bd2565b6040516103109190612588565b60405180910390f35b610321610c24565b60405161032e91906126ce565b60405180910390f35b610351600480360381019061034c9190612664565b610c4c565b60405161035f9291906127f2565b60405180910390f35b610370610df7565b60405161037d9190612611565b60405180910390f35b6103a0600480360381019061039b919061284a565b610e87565b005b6103bc60048036038101906103b7919061279f565b610eb9565b6040516103c99190612948565b60405180910390f35b6103ec60048036038101906103e7919061279f565b610f4c565b6040516103f991906127d9565b60405180910390f35b61041c60048036038101906104179190612a94565b610f95565b005b6104386004803603810190610433919061279f565b610fba565b005b610454600480360381019061044f9190612664565b6110de565b6040516104619190612611565b60405180910390f35b610484600480360381019061047f9190612b3e565b611144565b6040516104949493929190612b69565b60405180910390f35b6104b760048036038101906104b29190612bb3565b61131b565b6040516104c49190612588565b60405180910390f35b6104e760048036038101906104e29190612c4e565b6113a9565b6040516104f491906127d9565b60405180910390f35b6105176004803603810190610512919061279f565b611691565b005b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105e357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105f357506105f282611715565b5b9050919050565b60605f805461060890612cec565b80601f016020809104026020016040519081016040528092919081815260200182805461063490612cec565b801561067f5780601f106106565761010080835404028352916020019161067f565b820191905f5260205f20905b81548152906001019060200180831161066257829003601f168201915b5050505050905090565b5f6106938261177e565b5061069d82611804565b9050919050565b6040517f6e10574900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff166106f68261183d565b73ffffffffffffffffffffffffffffffffffffffff1603610743576040517fceea21b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60085f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166107c3576040517f6ab13ef400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660095f8381526020019081526020015f2060020160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461085c576040517f6ab13ef400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160095f8381526020019081526020015f206002015f6101000a81548160ff021916908315150217905550807f0d47d5695004d2a4180ebb40037756439184993a0d1c6d4a8ff3a6aa9325607460405160405180910390a250565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610928575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161091f91906126ce565b60405180910390fd5b5f61093b8383610936611876565b61187d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109b1578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016109a893929190612d1c565b60405180910390fd5b50505050565b6109d183838360405180602001604052805f815250610f95565b505050565b5f6109e08261177e565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a58575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610a4f91906126ce565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610aa5611936565b610aae5f6119bd565b565b610ab8611936565b60085f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16610b38576040517fea8e4eb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f1b0b878d06167e60e076b932df41de2b519d804c80445961e705ffbc98091f8760405160405180910390a250565b5f60085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff169050919050565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60605f5f73ffffffffffffffffffffffffffffffffffffffff16610c6f8461183d565b73ffffffffffffffffffffffffffffffffffffffff1603610cbc576040517fceea21b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60095f8581526020019081526020015f206040518060800160405290815f82018054610ce890612cec565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1490612cec565b8015610d5f5780601f10610d3657610100808354040283529160200191610d5f565b820191905f5260205f20905b815481529060010190602001808311610d4257829003601f168201915b5050505050815260200160018201548152602001600282015f9054906101000a900460ff161515151581526020016002820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050805f015181604001519250925050915091565b606060018054610e0690612cec565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3290612cec565b8015610e7d5780601f10610e5457610100808354040283529160200191610e7d565b820191905f5260205f20905b815481529060010190602001808311610e6057829003601f168201915b5050505050905090565b6040517f6e10574900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060600b5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20805480602002602001604051908101604052809291908181526020018280548015610f4057602002820191905f5260205f20905b815481526020019060010190808311610f2c575b50505050509050919050565b5f600b5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20805490509050919050565b610fa08484846108b8565b610fb4610fab611876565b85858585611a80565b50505050565b610fc2611936565b60085f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1615611043576040517f6027d27e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f2aef8a157b05c49aaaeebd094bf2b10b2b90835af1fd87c288f6effa9a6a243460405160405180910390a250565b60606110e98261177e565b505f6110f3611c2c565b90505f8151116111115760405180602001604052805f81525061113c565b8061111b84611c42565b60405160200161112c929190612d8b565b6040516020818303038152906040525b915050919050565b60605f5f5f5f600a5f8781526020019081526020015f205490505f73ffffffffffffffffffffffffffffffffffffffff1661117e8261183d565b73ffffffffffffffffffffffffffffffffffffffff16036111cb576040517fceea21b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60095f8381526020019081526020015f206040518060800160405290815f820180546111f790612cec565b80601f016020809104026020016040519081016040528092919081815260200182805461122390612cec565b801561126e5780601f106112455761010080835404028352916020019161126e565b820191905f5260205f20905b81548152906001019060200180831161125157829003601f168201915b5050505050815260200160018201548152602001600282015f9054906101000a900460ff161515151581526020016002820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050805f01518160600151611305846109d6565b8360400151955095509550955050509193509193565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f60085f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1661142a576040517f6ab13ef400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f600a5f8481526020019081526020015f205414611474576040517fd3a5681700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075f815461148290612ddb565b91905081905590506114948582611d0c565b604051806080016040528085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081526020018381526020015f151581526020013373ffffffffffffffffffffffffffffffffffffffff1681525060095f8381526020019081526020015f205f820151815f0190816115349190612fc2565b50602082015181600101556040820151816002015f6101000a81548160ff02191690831515021790555060608201518160020160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505080600a5f8481526020019081526020015f2081905550600b5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2082908060018154018082558091505060019003905f5260205f20015f90919091909150553373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16827f197d9e4ba9493712aa3bd22fa47c547de7a7e3fdd1c002b867bbbd7ac0b1928c878787604051611681939291906130cc565b60405180910390a4949350505050565b611699611936565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611709575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161170091906126ce565b60405180910390fd5b611712816119bd565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f5f6117898361183d565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036117fb57826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016117f291906127d9565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b5f5f61188a858585611d29565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156118f457505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561192b576040517f6e10574900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b809150509392505050565b61193e611876565b73ffffffffffffffffffffffffffffffffffffffff1661195c610c24565b73ffffffffffffffffffffffffffffffffffffffff16146119bb5761197f611876565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016119b291906126ce565b60405180910390fd5b565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115611c25578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611ade949392919061314e565b6020604051808303815f875af1925050508015611b1957506040513d601f19601f82011682018060405250810190611b1691906131ac565b60015b611b9a573d805f8114611b47576040519150601f19603f3d011682016040523d82523d5f602084013e611b4c565b606091505b505f815103611b9257836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611b8991906126ce565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611c2357836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611c1a91906126ce565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f6001611c5084611f34565b0190505f8167ffffffffffffffff811115611c6e57611c6d612970565b5b6040519080825280601f01601f191660200182016040528015611ca05781602001600182028036833780820191505090505b5090505f82602083010190505b600115611d01578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611cf657611cf56131d7565b5b0494505f8503611cad575b819350505050919050565b611d25828260405180602001604052805f815250612085565b5050565b5f5f611d348461183d565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611d7557611d748184866120a8565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e0057611db45f855f5f61216b565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611e7f57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611f90577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611f8657611f856131d7565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611fcd576d04ee2d6d415b85acef81000000008381611fc357611fc26131d7565b5b0492506020810190505b662386f26fc100008310611ffc57662386f26fc100008381611ff257611ff16131d7565b5b0492506010810190505b6305f5e1008310612025576305f5e100838161201b5761201a6131d7565b5b0492506008810190505b612710831061204a5761271083816120405761203f6131d7565b5b0492506004810190505b6064831061206d5760648381612063576120626131d7565b5b0492506002810190505b600a831061207c576001810190505b80915050919050565b61208f838361232a565b6120a361209a611876565b5f858585611a80565b505050565b6120b383838361241d565b612166575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361212757806040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161211e91906127d9565b60405180910390fd5b81816040517f177e802f00000000000000000000000000000000000000000000000000000000815260040161215d929190613204565b60405180910390fd5b505050565b80806121a357505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156122d5575f6121b28461177e565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561221c57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561222f575061222d818461131b565b155b1561227157826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161226891906126ce565b60405180910390fd5b81156122d357838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361239a575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161239191906126ce565b60405180910390fd5b5f6123a683835f61187d565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612418575f6040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161240f91906126ce565b60405180910390fd5b505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156124d457508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806124955750612494848461131b565b5b806124d357508273ffffffffffffffffffffffffffffffffffffffff166124bb83611804565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612522816124ee565b811461252c575f5ffd5b50565b5f8135905061253d81612519565b92915050565b5f60208284031215612558576125576124e6565b5b5f6125658482850161252f565b91505092915050565b5f8115159050919050565b6125828161256e565b82525050565b5f60208201905061259b5f830184612579565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6125e3826125a1565b6125ed81856125ab565b93506125fd8185602086016125bb565b612606816125c9565b840191505092915050565b5f6020820190508181035f83015261262981846125d9565b905092915050565b5f819050919050565b61264381612631565b811461264d575f5ffd5b50565b5f8135905061265e8161263a565b92915050565b5f60208284031215612679576126786124e6565b5b5f61268684828501612650565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6126b88261268f565b9050919050565b6126c8816126ae565b82525050565b5f6020820190506126e15f8301846126bf565b92915050565b6126f0816126ae565b81146126fa575f5ffd5b50565b5f8135905061270b816126e7565b92915050565b5f5f60408385031215612727576127266124e6565b5b5f612734858286016126fd565b925050602061274585828601612650565b9150509250929050565b5f5f5f60608486031215612766576127656124e6565b5b5f612773868287016126fd565b9350506020612784868287016126fd565b925050604061279586828701612650565b9150509250925092565b5f602082840312156127b4576127b36124e6565b5b5f6127c1848285016126fd565b91505092915050565b6127d381612631565b82525050565b5f6020820190506127ec5f8301846127ca565b92915050565b5f6040820190508181035f83015261280a81856125d9565b90506128196020830184612579565b9392505050565b6128298161256e565b8114612833575f5ffd5b50565b5f8135905061284481612820565b92915050565b5f5f604083850312156128605761285f6124e6565b5b5f61286d858286016126fd565b925050602061287e85828601612836565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f819050919050565b6128c3816128b1565b82525050565b5f6128d483836128ba565b60208301905092915050565b5f602082019050919050565b5f6128f682612888565b6129008185612892565b935061290b836128a2565b805f5b8381101561293b57815161292288826128c9565b975061292d836128e0565b92505060018101905061290e565b5085935050505092915050565b5f6020820190508181035f83015261296081846128ec565b905092915050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6129a6826125c9565b810181811067ffffffffffffffff821117156129c5576129c4612970565b5b80604052505050565b5f6129d76124dd565b90506129e3828261299d565b919050565b5f67ffffffffffffffff821115612a0257612a01612970565b5b612a0b826125c9565b9050602081019050919050565b828183375f83830152505050565b5f612a38612a33846129e8565b6129ce565b905082815260208101848484011115612a5457612a5361296c565b5b612a5f848285612a18565b509392505050565b5f82601f830112612a7b57612a7a612968565b5b8135612a8b848260208601612a26565b91505092915050565b5f5f5f5f60808587031215612aac57612aab6124e6565b5b5f612ab9878288016126fd565b9450506020612aca878288016126fd565b9350506040612adb87828801612650565b925050606085013567ffffffffffffffff811115612afc57612afb6124ea565b5b612b0887828801612a67565b91505092959194509250565b612b1d816128b1565b8114612b27575f5ffd5b50565b5f81359050612b3881612b14565b92915050565b5f60208284031215612b5357612b526124e6565b5b5f612b6084828501612b2a565b91505092915050565b5f6080820190508181035f830152612b8181876125d9565b9050612b9060208301866126bf565b612b9d60408301856126bf565b612baa6060830184612579565b95945050505050565b5f5f60408385031215612bc957612bc86124e6565b5b5f612bd6858286016126fd565b9250506020612be7858286016126fd565b9150509250929050565b5f5ffd5b5f5ffd5b5f5f83601f840112612c0e57612c0d612968565b5b8235905067ffffffffffffffff811115612c2b57612c2a612bf1565b5b602083019150836001820283011115612c4757612c46612bf5565b5b9250929050565b5f5f5f5f60608587031215612c6657612c656124e6565b5b5f612c73878288016126fd565b945050602085013567ffffffffffffffff811115612c9457612c936124ea565b5b612ca087828801612bf9565b93509350506040612cb387828801612b2a565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680612d0357607f821691505b602082108103612d1657612d15612cbf565b5b50919050565b5f606082019050612d2f5f8301866126bf565b612d3c60208301856127ca565b612d4960408301846126bf565b949350505050565b5f81905092915050565b5f612d65826125a1565b612d6f8185612d51565b9350612d7f8185602086016125bb565b80840191505092915050565b5f612d968285612d5b565b9150612da28284612d5b565b91508190509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612de582612631565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612e1757612e16612dae565b5b600182019050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302612e7e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612e43565b612e888683612e43565b95508019841693508086168417925050509392505050565b5f819050919050565b5f612ec3612ebe612eb984612631565b612ea0565b612631565b9050919050565b5f819050919050565b612edc83612ea9565b612ef0612ee882612eca565b848454612e4f565b825550505050565b5f5f905090565b612f07612ef8565b612f12818484612ed3565b505050565b5b81811015612f3557612f2a5f82612eff565b600181019050612f18565b5050565b601f821115612f7a57612f4b81612e22565b612f5484612e34565b81016020851015612f63578190505b612f77612f6f85612e34565b830182612f17565b50505b505050565b5f82821c905092915050565b5f612f9a5f1984600802612f7f565b1980831691505092915050565b5f612fb28383612f8b565b9150826002028217905092915050565b612fcb826125a1565b67ffffffffffffffff811115612fe457612fe3612970565b5b612fee8254612cec565b612ff9828285612f39565b5f60209050601f83116001811461302a575f8415613018578287015190505b6130228582612fa7565b865550613089565b601f19841661303886612e22565b5f5b8281101561305f5784890151825560018201915060208501945060208101905061303a565b8683101561307c5784890151613078601f891682612f8b565b8355505b6001600288020188555050505b505050505050565b5f61309c83856125ab565b93506130a9838584612a18565b6130b2836125c9565b840190509392505050565b6130c6816128b1565b82525050565b5f6040820190508181035f8301526130e5818587613091565b90506130f460208301846130bd565b949350505050565b5f81519050919050565b5f82825260208201905092915050565b5f613120826130fc565b61312a8185613106565b935061313a8185602086016125bb565b613143816125c9565b840191505092915050565b5f6080820190506131615f8301876126bf565b61316e60208301866126bf565b61317b60408301856127ca565b818103606083015261318d8184613116565b905095945050505050565b5f815190506131a681612519565b92915050565b5f602082840312156131c1576131c06124e6565b5b5f6131ce84828501613198565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6040820190506132175f8301856126bf565b61322460208301846127ca565b939250505056fea2646970667358221220fd64db32d762fc22a33aca11d6d4983bf31fc65c144b8d48677ce9f0fd8df46f64736f6c634300081e0033",
//       "sourceMap": "488:6754:32:-:0;;;1658:74;;;;;;;;;;1718:10;1380:113:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1454:5;1446;:13;;;;;;:::i;:::-;;1479:7;1469;:17;;;;;;:::i;:::-;;1380:113;;1297:1:15;1273:26;;:12;:26;;;1269:95;;1350:1;1322:31;;;;;;;;;;;:::i;:::-;;;;;;;;1269:95;1373:32;1392:12;1373:18;;;:32;;:::i;:::-;1225:187;488:6754:32;;2912:187:15;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;7:99:35:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2287:1;2280:8;;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;5234:126::-;5271:7;5311:42;5304:5;5300:54;5289:65;;5234:126;;;:::o;5366:96::-;5403:7;5432:24;5450:5;5432:24;:::i;:::-;5421:35;;5366:96;;;:::o;5468:118::-;5555:24;5573:5;5555:24;:::i;:::-;5550:3;5543:37;5468:118;;:::o;5592:222::-;5685:4;5723:2;5712:9;5708:18;5700:26;;5736:71;5804:1;5793:9;5789:17;5780:6;5736:71;:::i;:::-;5592:222;;;;:::o;488:6754:32:-;;;;;;;",
//         "linkReferences": { }
//   },
//   "deployedBytecode": {
//     "object": "0x608060405234801561000f575f5ffd5b5060043610610171575f3560e01c80638da5cb5b116100dc578063b88d4fde11610095578063ddb6dbd61161006f578063ddb6dbd61461046a578063e985e9c51461049d578063f10705e6146104cd578063f2fde38b146104fd57610171565b8063b88d4fde14610402578063bd4d8bcb1461041e578063c87b56dd1461043a57610171565b80638da5cb5b146103195780638dd18d2d1461033757806395d89b4114610368578063a22cb46514610386578063b08c6a87146103a2578063b1d5ccf8146103d257610171565b806342842e0e1161012e57806342842e0e146102475780636352211e1461026357806370a0823114610293578063715018a6146102c35780638747d5ed146102cd5780638bbf5536146102e957610171565b806301ffc9a71461017557806306fdde03146101a5578063081812fc146101c3578063095ea7b3146101f35780631b87278d1461020f57806323b872dd1461022b575b5f5ffd5b61018f600480360381019061018a9190612543565b610519565b60405161019c9190612588565b60405180910390f35b6101ad6105fa565b6040516101ba9190612611565b60405180910390f35b6101dd60048036038101906101d89190612664565b610689565b6040516101ea91906126ce565b60405180910390f35b61020d60048036038101906102089190612711565b6106a4565b005b61022960048036038101906102249190612664565b6106d6565b005b6102456004803603810190610240919061274f565b6108b8565b005b610261600480360381019061025c919061274f565b6109b7565b005b61027d60048036038101906102789190612664565b6109d6565b60405161028a91906126ce565b60405180910390f35b6102ad60048036038101906102a8919061279f565b6109e7565b6040516102ba91906127d9565b60405180910390f35b6102cb610a9d565b005b6102e760048036038101906102e2919061279f565b610ab0565b005b61030360048036038101906102fe919061279f565b610bd2565b6040516103109190612588565b60405180910390f35b610321610c24565b60405161032e91906126ce565b60405180910390f35b610351600480360381019061034c9190612664565b610c4c565b60405161035f9291906127f2565b60405180910390f35b610370610df7565b60405161037d9190612611565b60405180910390f35b6103a0600480360381019061039b919061284a565b610e87565b005b6103bc60048036038101906103b7919061279f565b610eb9565b6040516103c99190612948565b60405180910390f35b6103ec60048036038101906103e7919061279f565b610f4c565b6040516103f991906127d9565b60405180910390f35b61041c60048036038101906104179190612a94565b610f95565b005b6104386004803603810190610433919061279f565b610fba565b005b610454600480360381019061044f9190612664565b6110de565b6040516104619190612611565b60405180910390f35b610484600480360381019061047f9190612b3e565b611144565b6040516104949493929190612b69565b60405180910390f35b6104b760048036038101906104b29190612bb3565b61131b565b6040516104c49190612588565b60405180910390f35b6104e760048036038101906104e29190612c4e565b6113a9565b6040516104f491906127d9565b60405180910390f35b6105176004803603810190610512919061279f565b611691565b005b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105e357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105f357506105f282611715565b5b9050919050565b60605f805461060890612cec565b80601f016020809104026020016040519081016040528092919081815260200182805461063490612cec565b801561067f5780601f106106565761010080835404028352916020019161067f565b820191905f5260205f20905b81548152906001019060200180831161066257829003601f168201915b5050505050905090565b5f6106938261177e565b5061069d82611804565b9050919050565b6040517f6e10574900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff166106f68261183d565b73ffffffffffffffffffffffffffffffffffffffff1603610743576040517fceea21b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60085f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166107c3576040517f6ab13ef400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660095f8381526020019081526020015f2060020160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461085c576040517f6ab13ef400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160095f8381526020019081526020015f206002015f6101000a81548160ff021916908315150217905550807f0d47d5695004d2a4180ebb40037756439184993a0d1c6d4a8ff3a6aa9325607460405160405180910390a250565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610928575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161091f91906126ce565b60405180910390fd5b5f61093b8383610936611876565b61187d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109b1578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016109a893929190612d1c565b60405180910390fd5b50505050565b6109d183838360405180602001604052805f815250610f95565b505050565b5f6109e08261177e565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a58575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610a4f91906126ce565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610aa5611936565b610aae5f6119bd565b565b610ab8611936565b60085f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16610b38576040517fea8e4eb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f1b0b878d06167e60e076b932df41de2b519d804c80445961e705ffbc98091f8760405160405180910390a250565b5f60085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff169050919050565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60605f5f73ffffffffffffffffffffffffffffffffffffffff16610c6f8461183d565b73ffffffffffffffffffffffffffffffffffffffff1603610cbc576040517fceea21b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60095f8581526020019081526020015f206040518060800160405290815f82018054610ce890612cec565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1490612cec565b8015610d5f5780601f10610d3657610100808354040283529160200191610d5f565b820191905f5260205f20905b815481529060010190602001808311610d4257829003601f168201915b5050505050815260200160018201548152602001600282015f9054906101000a900460ff161515151581526020016002820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050805f015181604001519250925050915091565b606060018054610e0690612cec565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3290612cec565b8015610e7d5780601f10610e5457610100808354040283529160200191610e7d565b820191905f5260205f20905b815481529060010190602001808311610e6057829003601f168201915b5050505050905090565b6040517f6e10574900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060600b5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20805480602002602001604051908101604052809291908181526020018280548015610f4057602002820191905f5260205f20905b815481526020019060010190808311610f2c575b50505050509050919050565b5f600b5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20805490509050919050565b610fa08484846108b8565b610fb4610fab611876565b85858585611a80565b50505050565b610fc2611936565b60085f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1615611043576040517f6027d27e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f2aef8a157b05c49aaaeebd094bf2b10b2b90835af1fd87c288f6effa9a6a243460405160405180910390a250565b60606110e98261177e565b505f6110f3611c2c565b90505f8151116111115760405180602001604052805f81525061113c565b8061111b84611c42565b60405160200161112c929190612d8b565b6040516020818303038152906040525b915050919050565b60605f5f5f5f600a5f8781526020019081526020015f205490505f73ffffffffffffffffffffffffffffffffffffffff1661117e8261183d565b73ffffffffffffffffffffffffffffffffffffffff16036111cb576040517fceea21b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60095f8381526020019081526020015f206040518060800160405290815f820180546111f790612cec565b80601f016020809104026020016040519081016040528092919081815260200182805461122390612cec565b801561126e5780601f106112455761010080835404028352916020019161126e565b820191905f5260205f20905b81548152906001019060200180831161125157829003601f168201915b5050505050815260200160018201548152602001600282015f9054906101000a900460ff161515151581526020016002820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050805f01518160600151611305846109d6565b8360400151955095509550955050509193509193565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f60085f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1661142a576040517f6ab13ef400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f600a5f8481526020019081526020015f205414611474576040517fd3a5681700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075f815461148290612ddb565b91905081905590506114948582611d0c565b604051806080016040528085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081526020018381526020015f151581526020013373ffffffffffffffffffffffffffffffffffffffff1681525060095f8381526020019081526020015f205f820151815f0190816115349190612fc2565b50602082015181600101556040820151816002015f6101000a81548160ff02191690831515021790555060608201518160020160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505080600a5f8481526020019081526020015f2081905550600b5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2082908060018154018082558091505060019003905f5260205f20015f90919091909150553373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16827f197d9e4ba9493712aa3bd22fa47c547de7a7e3fdd1c002b867bbbd7ac0b1928c878787604051611681939291906130cc565b60405180910390a4949350505050565b611699611936565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611709575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161170091906126ce565b60405180910390fd5b611712816119bd565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f5f6117898361183d565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036117fb57826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016117f291906127d9565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b5f5f61188a858585611d29565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156118f457505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561192b576040517f6e10574900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b809150509392505050565b61193e611876565b73ffffffffffffffffffffffffffffffffffffffff1661195c610c24565b73ffffffffffffffffffffffffffffffffffffffff16146119bb5761197f611876565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016119b291906126ce565b60405180910390fd5b565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115611c25578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611ade949392919061314e565b6020604051808303815f875af1925050508015611b1957506040513d601f19601f82011682018060405250810190611b1691906131ac565b60015b611b9a573d805f8114611b47576040519150601f19603f3d011682016040523d82523d5f602084013e611b4c565b606091505b505f815103611b9257836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611b8991906126ce565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611c2357836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611c1a91906126ce565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f6001611c5084611f34565b0190505f8167ffffffffffffffff811115611c6e57611c6d612970565b5b6040519080825280601f01601f191660200182016040528015611ca05781602001600182028036833780820191505090505b5090505f82602083010190505b600115611d01578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611cf657611cf56131d7565b5b0494505f8503611cad575b819350505050919050565b611d25828260405180602001604052805f815250612085565b5050565b5f5f611d348461183d565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611d7557611d748184866120a8565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e0057611db45f855f5f61216b565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611e7f57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611f90577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611f8657611f856131d7565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611fcd576d04ee2d6d415b85acef81000000008381611fc357611fc26131d7565b5b0492506020810190505b662386f26fc100008310611ffc57662386f26fc100008381611ff257611ff16131d7565b5b0492506010810190505b6305f5e1008310612025576305f5e100838161201b5761201a6131d7565b5b0492506008810190505b612710831061204a5761271083816120405761203f6131d7565b5b0492506004810190505b6064831061206d5760648381612063576120626131d7565b5b0492506002810190505b600a831061207c576001810190505b80915050919050565b61208f838361232a565b6120a361209a611876565b5f858585611a80565b505050565b6120b383838361241d565b612166575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361212757806040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161211e91906127d9565b60405180910390fd5b81816040517f177e802f00000000000000000000000000000000000000000000000000000000815260040161215d929190613204565b60405180910390fd5b505050565b80806121a357505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156122d5575f6121b28461177e565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561221c57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561222f575061222d818461131b565b155b1561227157826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161226891906126ce565b60405180910390fd5b81156122d357838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361239a575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161239191906126ce565b60405180910390fd5b5f6123a683835f61187d565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612418575f6040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161240f91906126ce565b60405180910390fd5b505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156124d457508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806124955750612494848461131b565b5b806124d357508273ffffffffffffffffffffffffffffffffffffffff166124bb83611804565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612522816124ee565b811461252c575f5ffd5b50565b5f8135905061253d81612519565b92915050565b5f60208284031215612558576125576124e6565b5b5f6125658482850161252f565b91505092915050565b5f8115159050919050565b6125828161256e565b82525050565b5f60208201905061259b5f830184612579565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6125e3826125a1565b6125ed81856125ab565b93506125fd8185602086016125bb565b612606816125c9565b840191505092915050565b5f6020820190508181035f83015261262981846125d9565b905092915050565b5f819050919050565b61264381612631565b811461264d575f5ffd5b50565b5f8135905061265e8161263a565b92915050565b5f60208284031215612679576126786124e6565b5b5f61268684828501612650565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6126b88261268f565b9050919050565b6126c8816126ae565b82525050565b5f6020820190506126e15f8301846126bf565b92915050565b6126f0816126ae565b81146126fa575f5ffd5b50565b5f8135905061270b816126e7565b92915050565b5f5f60408385031215612727576127266124e6565b5b5f612734858286016126fd565b925050602061274585828601612650565b9150509250929050565b5f5f5f60608486031215612766576127656124e6565b5b5f612773868287016126fd565b9350506020612784868287016126fd565b925050604061279586828701612650565b9150509250925092565b5f602082840312156127b4576127b36124e6565b5b5f6127c1848285016126fd565b91505092915050565b6127d381612631565b82525050565b5f6020820190506127ec5f8301846127ca565b92915050565b5f6040820190508181035f83015261280a81856125d9565b90506128196020830184612579565b9392505050565b6128298161256e565b8114612833575f5ffd5b50565b5f8135905061284481612820565b92915050565b5f5f604083850312156128605761285f6124e6565b5b5f61286d858286016126fd565b925050602061287e85828601612836565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f819050919050565b6128c3816128b1565b82525050565b5f6128d483836128ba565b60208301905092915050565b5f602082019050919050565b5f6128f682612888565b6129008185612892565b935061290b836128a2565b805f5b8381101561293b57815161292288826128c9565b975061292d836128e0565b92505060018101905061290e565b5085935050505092915050565b5f6020820190508181035f83015261296081846128ec565b905092915050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6129a6826125c9565b810181811067ffffffffffffffff821117156129c5576129c4612970565b5b80604052505050565b5f6129d76124dd565b90506129e3828261299d565b919050565b5f67ffffffffffffffff821115612a0257612a01612970565b5b612a0b826125c9565b9050602081019050919050565b828183375f83830152505050565b5f612a38612a33846129e8565b6129ce565b905082815260208101848484011115612a5457612a5361296c565b5b612a5f848285612a18565b509392505050565b5f82601f830112612a7b57612a7a612968565b5b8135612a8b848260208601612a26565b91505092915050565b5f5f5f5f60808587031215612aac57612aab6124e6565b5b5f612ab9878288016126fd565b9450506020612aca878288016126fd565b9350506040612adb87828801612650565b925050606085013567ffffffffffffffff811115612afc57612afb6124ea565b5b612b0887828801612a67565b91505092959194509250565b612b1d816128b1565b8114612b27575f5ffd5b50565b5f81359050612b3881612b14565b92915050565b5f60208284031215612b5357612b526124e6565b5b5f612b6084828501612b2a565b91505092915050565b5f6080820190508181035f830152612b8181876125d9565b9050612b9060208301866126bf565b612b9d60408301856126bf565b612baa6060830184612579565b95945050505050565b5f5f60408385031215612bc957612bc86124e6565b5b5f612bd6858286016126fd565b9250506020612be7858286016126fd565b9150509250929050565b5f5ffd5b5f5ffd5b5f5f83601f840112612c0e57612c0d612968565b5b8235905067ffffffffffffffff811115612c2b57612c2a612bf1565b5b602083019150836001820283011115612c4757612c46612bf5565b5b9250929050565b5f5f5f5f60608587031215612c6657612c656124e6565b5b5f612c73878288016126fd565b945050602085013567ffffffffffffffff811115612c9457612c936124ea565b5b612ca087828801612bf9565b93509350506040612cb387828801612b2a565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680612d0357607f821691505b602082108103612d1657612d15612cbf565b5b50919050565b5f606082019050612d2f5f8301866126bf565b612d3c60208301856127ca565b612d4960408301846126bf565b949350505050565b5f81905092915050565b5f612d65826125a1565b612d6f8185612d51565b9350612d7f8185602086016125bb565b80840191505092915050565b5f612d968285612d5b565b9150612da28284612d5b565b91508190509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612de582612631565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612e1757612e16612dae565b5b600182019050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302612e7e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612e43565b612e888683612e43565b95508019841693508086168417925050509392505050565b5f819050919050565b5f612ec3612ebe612eb984612631565b612ea0565b612631565b9050919050565b5f819050919050565b612edc83612ea9565b612ef0612ee882612eca565b848454612e4f565b825550505050565b5f5f905090565b612f07612ef8565b612f12818484612ed3565b505050565b5b81811015612f3557612f2a5f82612eff565b600181019050612f18565b5050565b601f821115612f7a57612f4b81612e22565b612f5484612e34565b81016020851015612f63578190505b612f77612f6f85612e34565b830182612f17565b50505b505050565b5f82821c905092915050565b5f612f9a5f1984600802612f7f565b1980831691505092915050565b5f612fb28383612f8b565b9150826002028217905092915050565b612fcb826125a1565b67ffffffffffffffff811115612fe457612fe3612970565b5b612fee8254612cec565b612ff9828285612f39565b5f60209050601f83116001811461302a575f8415613018578287015190505b6130228582612fa7565b865550613089565b601f19841661303886612e22565b5f5b8281101561305f5784890151825560018201915060208501945060208101905061303a565b8683101561307c5784890151613078601f891682612f8b565b8355505b6001600288020188555050505b505050505050565b5f61309c83856125ab565b93506130a9838584612a18565b6130b2836125c9565b840190509392505050565b6130c6816128b1565b82525050565b5f6040820190508181035f8301526130e5818587613091565b90506130f460208301846130bd565b949350505050565b5f81519050919050565b5f82825260208201905092915050565b5f613120826130fc565b61312a8185613106565b935061313a8185602086016125bb565b613143816125c9565b840191505092915050565b5f6080820190506131615f8301876126bf565b61316e60208301866126bf565b61317b60408301856127ca565b818103606083015261318d8184613116565b905095945050505050565b5f815190506131a681612519565b92915050565b5f602082840312156131c1576131c06124e6565b5b5f6131ce84828501613198565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6040820190506132175f8301856126bf565b61322460208301846127ca565b939250505056fea2646970667358221220fd64db32d762fc22a33aca11d6d4983bf31fc65c144b8d48677ce9f0fd8df46f64736f6c634300081e0033",
//       "sourceMap": "488:6754:32:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1527:300:17;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2263:89;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3299:154;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6862:147:32;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4157:492;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3852:578:17;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4464:132;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2103:118;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1861:208;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2293:101:15;;;:::i;:::-;;2313:281:32;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2651:157;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1638:85:15;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4880:337:32;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;2394:93:17;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;7079:161:32;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5901:159;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6108:152;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4630:233:17;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1969:289:32;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2529:255:17;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5299:540:32;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;3665:153:17;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3100:1017:32;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2543:215:15;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1527:300:17;1629:4;1679:25;1664:40;;;:11;:40;;;;:104;;;;1735:33;1720:48;;;:11;:48;;;;1664:104;:156;;;;1784:36;1808:11;1784:23;:36::i;:::-;1664:156;1645:175;;1527:300;;;:::o;2263:89::-;2308:13;2340:5;2333:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2263:89;:::o;3299:154::-;3366:7;3385:22;3399:7;3385:13;:22::i;:::-;;3425:21;3438:7;3425:12;:21::i;:::-;3418:28;;3299:154;;;:::o;6862:147:32:-;6979:23;;;;;;;;;;;;;;4157:492;4252:1;4223:31;;:17;4232:7;4223:8;:17::i;:::-;:31;;;4219:95;;4277:26;;;;;;;;;;;;;;4219:95;4329:23;:35;4353:10;4329:35;;;;;;;;;;;;;;;;;;;;;;;;;4324:107;;4387:33;;;;;;;;;;;;;;4324:107;4477:10;4445:42;;:12;:21;4458:7;4445:21;;;;;;;;;;;:28;;;;;;;;;;;;:42;;;4441:113;;4510:33;;;;;;;;;;;;;;4441:113;4596:4;4564:12;:21;4577:7;4564:21;;;;;;;;;;;:29;;;:36;;;;;;;;;;;;;;;;;;4634:7;4616:26;;;;;;;;;;4157:492;:::o;3852:578:17:-;3960:1;3946:16;;:2;:16;;;3942:87;;4015:1;3985:33;;;;;;;;;;;:::i;:::-;;;;;;;;3942:87;4247:21;4271:34;4279:2;4283:7;4292:12;:10;:12::i;:::-;4271:7;:34::i;:::-;4247:58;;4336:4;4319:21;;:13;:21;;;4315:109;;4384:4;4390:7;4399:13;4363:50;;;;;;;;;;;;;:::i;:::-;;;;;;;;4315:109;3932:498;3852:578;;;:::o;4464:132::-;4550:39;4567:4;4573:2;4577:7;4550:39;;;;;;;;;;;;:16;:39::i;:::-;4464:132;;;:::o;2103:118::-;2166:7;2192:22;2206:7;2192:13;:22::i;:::-;2185:29;;2103:118;;;:::o;1861:208::-;1924:7;1964:1;1947:19;;:5;:19;;;1943:87;;2016:1;1989:30;;;;;;;;;;;:::i;:::-;;;;;;;;1943:87;2046:9;:16;2056:5;2046:16;;;;;;;;;;;;;;;;2039:23;;1861:208;;;:::o;2293:101:15:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;2313:281:32:-;1531:13:15;:11;:13::i;:::-;2395:23:32::1;:36;2419:11;2395:36;;;;;;;;;;;;;;;;;;;;;;;;;2390:97;;2454:22;;;;;;;;;;;;;;2390:97;2536:5;2497:23;:36;2521:11;2497:36;;;;;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;2575:11;2556:31;;;;;;;;;;;;2313:281:::0;:::o;2651:157::-;2742:4;2765:23;:36;2789:11;2765:36;;;;;;;;;;;;;;;;;;;;;;;;;2758:43;;2651:157;;;:::o;1638:85:15:-;1684:7;1710:6;;;;;;;;;;;1703:13;;1638:85;:::o;4880:337:32:-;4966:22;4990:12;5047:1;5018:31;;:17;5027:7;5018:8;:17::i;:::-;:31;;;5014:95;;5072:26;;;;;;;;;;;;;;5014:95;5118:22;5143:12;:21;5156:7;5143:21;;;;;;;;;;;5118:46;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5182:4;:13;;;5197:4;:12;;;5174:36;;;;;4880:337;;;:::o;2394:93:17:-;2441:13;2473:7;2466:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2394:93;:::o;7079:161:32:-;7210:23;;;;;;;;;;;;;;5901:159;5989:16;6024:20;:29;6045:7;6024:29;;;;;;;;;;;;;;;6017:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5901:159;;;:::o;6108:152::-;6191:7;6217:20;:29;6238:7;6217:29;;;;;;;;;;;;;;;:36;;;;6210:43;;6108:152;;;:::o;4630:233:17:-;4743:31;4756:4;4762:2;4766:7;4743:12;:31::i;:::-;4784:72;4818:12;:10;:12::i;:::-;4832:4;4838:2;4842:7;4851:4;4784:33;:72::i;:::-;4630:233;;;;:::o;1969:289:32:-;1531:13:15;:11;:13::i;:::-;2053:23:32::1;:36;2077:11;2053:36;;;;;;;;;;;;;;;;;;;;;;;;;2049:100;;;2112:26;;;;;;;;;;;;;;2049:100;2198:4;2159:23;:36;2183:11;2159:36;;;;;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;2239:11;2217:34;;;;;;;;;;;;1969:289:::0;:::o;2529:255:17:-;2593:13;2618:22;2632:7;2618:13;:22::i;:::-;;2651:21;2675:10;:8;:10::i;:::-;2651:34;;2726:1;2708:7;2702:21;:25;:75;;;;;;;;;;;;;;;;;2744:7;2753:18;:7;:16;:18::i;:::-;2730:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2702:75;2695:82;;;2529:255;;;:::o;5299:540:32:-;5420:22;5456:14;5484:15;5513:12;5550:15;5568:14;:24;5583:8;5568:24;;;;;;;;;;;;5550:42;;5636:1;5607:31;;:17;5616:7;5607:8;:17::i;:::-;:31;;;5603:95;;5661:26;;;;;;;;;;;;;;5603:95;5708:22;5733:12;:21;5746:7;5733:21;;;;;;;;;;;5708:46;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5773:4;:13;;;5788:4;:11;;;5801:16;5809:7;5801;:16::i;:::-;5819:4;:12;;;5765:67;;;;;;;;;;5299:540;;;;;:::o;3665:153:17:-;3753:4;3776:18;:25;3795:5;3776:25;;;;;;;;;;;;;;;:35;3802:8;3776:35;;;;;;;;;;;;;;;;;;;;;;;;;3769:42;;3665:153;;;;:::o;3100:1017:32:-;3243:15;3308:23;:35;3332:10;3308:35;;;;;;;;;;;;;;;;;;;;;;;;;3303:107;;3366:33;;;;;;;;;;;;;;3303:107;3495:1;3467:14;:24;3482:8;3467:24;;;;;;;;;;;;:29;3463:99;;3519:32;;;;;;;;;;;;;;3463:99;3614:15;;3612:17;;;;;:::i;:::-;;;;;;;3602:27;;3671;3681:7;3690;3671:9;:27::i;:::-;3762:146;;;;;;;;3797:8;;3762:146;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3829:8;3762:146;;;;3860:5;3762:146;;;;;;3887:10;3762:146;;;;;3738:12;:21;3751:7;3738:21;;;;;;;;;;;:170;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3967:7;3940:14;:24;3955:8;3940:24;;;;;;;;;;;:34;;;;3984:20;:29;4005:7;3984:29;;;;;;;;;;;;;;;4019:8;3984:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4079:10;4044:66;;4070:7;4044:66;;4061:7;4044:66;4091:8;;4101;4044:66;;;;;;;;:::i;:::-;;;;;;;;3100:1017;;;;;;:::o;2543:215:15:-;1531:13;:11;:13::i;:::-;2647:1:::1;2627:22;;:8;:22;;::::0;2623:91:::1;;2700:1;2672:31;;;;;;;;;;;:::i;:::-;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;730:146:26:-;806:4;844:25;829:40;;;:11;:40;;;;822:47;;730:146;;;:::o;15858:241:17:-;15921:7;15940:13;15956:17;15965:7;15956:8;:17::i;:::-;15940:33;;16004:1;15987:19;;:5;:19;;;15983:88;;16052:7;16029:31;;;;;;;;;;;:::i;:::-;;;;;;;;15983:88;16087:5;16080:12;;;15858:241;;;:::o;5609:127::-;5679:7;5705:15;:24;5721:7;5705:24;;;;;;;;;;;;;;;;;;;;;5698:31;;5609:127;;;:::o;5378:115::-;5444:7;5470;:16;5478:7;5470:16;;;;;;;;;;;;;;;;;;;;;5463:23;;5378:115;;;:::o;656:96:23:-;709:7;735:10;728:17;;656:96;:::o;6480:321:32:-;6597:7;6616:12;6631:32;6645:2;6649:7;6658:4;6631:13;:32::i;:::-;6616:47;;6694:1;6678:18;;:4;:18;;;;:38;;;;;6714:1;6700:16;;:2;:16;;;;6678:38;6674:99;;;6739:23;;;;;;;;;;;;;;6674:99;6790:4;6783:11;;;6480:321;;;;;:::o;1796:162:15:-;1866:12;:10;:12::i;:::-;1855:23;;:7;:5;:7::i;:::-;:23;;;1851:101;;1928:12;:10;:12::i;:::-;1901:40;;;;;;;;;;;:::i;:::-;;;;;;;;1851:101;1796:162::o;2912:187::-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;994:926:21:-;1191:1;1174:2;:14;;;:18;1170:744;;;1228:2;1212:36;;;1249:8;1259:4;1265:7;1274:4;1212:67;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1208:696;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1586:1;1569:6;:13;:18;1565:325;;1709:2;1673:39;;;;;;;;;;;:::i;:::-;;;;;;;;1565:325;1842:6;1836:13;1829:4;1821:6;1817:17;1810:40;1208:696;1336:41;;;1326:51;;;:6;:51;;;;1322:182;;1482:2;1446:39;;;;;;;;;;;:::i;:::-;;;;;;;;1322:182;1280:238;1170:744;994:926;;;;;:::o;3026:92:17:-;3077:13;3102:9;;;;;;;;;;;;;;3026:92;:::o;1343:634:25:-;1399:13;1448:14;1485:1;1465:17;1476:5;1465:10;:17::i;:::-;:21;1448:38;;1500:20;1534:6;1523:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:41;;1555:11;1653:6;1646:4;1638:6;1634:17;1630:30;1623:37;;1687:247;1694:4;1687:247;;;1718:5;;;;;;;;1822:10;1817:2;1810:5;1806:14;1801:32;1796:3;1788:46;1878:2;1869:11;;;;;;:::i;:::-;;;;;1911:1;1902:5;:10;1687:247;1898:21;1687:247;1954:6;1947:13;;;;;1343:634;;;:::o;10302:100:17:-;10369:26;10379:2;10383:7;10369:26;;;;;;;;;;;;:9;:26::i;:::-;10302:100;;:::o;8507:795::-;8593:7;8612:12;8627:17;8636:7;8627:8;:17::i;:::-;8612:32;;8720:1;8704:18;;:4;:18;;;8700:86;;8738:37;8755:4;8761;8767:7;8738:16;:37::i;:::-;8700:86;8846:1;8830:18;;:4;:18;;;8826:256;;8946:48;8963:1;8967:7;8984:1;8988:5;8946:8;:48::i;:::-;9056:1;9037:9;:15;9047:4;9037:15;;;;;;;;;;;;;;;;:20;;;;;;;;;;;8826:256;9110:1;9096:16;;:2;:16;;;9092:107;;9173:1;9156:9;:13;9166:2;9156:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;9092:107;9228:2;9209:7;:16;9217:7;9209:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9265:7;9261:2;9246:27;;9255:4;9246:27;;;;;;;;;;;;9291:4;9284:11;;;8507:795;;;;;:::o;29170:916:28:-;29223:7;29242:14;29259:1;29242:18;;29307:8;29298:5;:17;29294:103;;29344:8;29335:17;;;;;;:::i;:::-;;;;;29380:2;29370:12;;;;29294:103;29423:8;29414:5;:17;29410:103;;29460:8;29451:17;;;;;;:::i;:::-;;;;;29496:2;29486:12;;;;29410:103;29539:8;29530:5;:17;29526:103;;29576:8;29567:17;;;;;;:::i;:::-;;;;;29612:2;29602:12;;;;29526:103;29655:7;29646:5;:16;29642:100;;29691:7;29682:16;;;;;;:::i;:::-;;;;;29726:1;29716:11;;;;29642:100;29768:7;29759:5;:16;29755:100;;29804:7;29795:16;;;;;;:::i;:::-;;;;;29839:1;29829:11;;;;29755:100;29881:7;29872:5;:16;29868:100;;29917:7;29908:16;;;;;;:::i;:::-;;;;;29952:1;29942:11;;;;29868:100;29994:7;29985:5;:16;29981:66;;30031:1;30021:11;;;;29981:66;30073:6;30066:13;;;29170:916;;;:::o;10623:207:17:-;10717:18;10723:2;10727:7;10717:5;:18::i;:::-;10745:78;10779:12;:10;:12::i;:::-;10801:1;10805:2;10809:7;10818:4;10745:33;:78::i;:::-;10623:207;;;:::o;6751:368::-;6863:38;6877:5;6884:7;6893;6863:13;:38::i;:::-;6858:255;;6938:1;6921:19;;:5;:19;;;6917:186;;6990:7;6967:31;;;;;;;;;;;:::i;:::-;;;;;;;;6917:186;7071:7;7080;7044:44;;;;;;;;;;;;:::i;:::-;;;;;;;;6858:255;6751:368;;;:::o;14440:662::-;14600:9;:31;;;;14629:1;14613:18;;:4;:18;;;;14600:31;14596:460;;;14647:13;14663:22;14677:7;14663:13;:22::i;:::-;14647:38;;14829:1;14813:18;;:4;:18;;;;:35;;;;;14844:4;14835:13;;:5;:13;;;;14813:35;:69;;;;;14853:29;14870:5;14877:4;14853:16;:29::i;:::-;14852:30;14813:69;14809:142;;;14931:4;14909:27;;;;;;;;;;;:::i;:::-;;;;;;;;14809:142;14969:9;14965:81;;;15023:7;15019:2;15003:28;;15012:5;15003:28;;;;;;;;;;;;14965:81;14633:423;14596:460;15093:2;15066:15;:24;15082:7;15066:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;14440:662;;;;:::o;9624:327::-;9705:1;9691:16;;:2;:16;;;9687:87;;9760:1;9730:33;;;;;;;;;;;:::i;:::-;;;;;;;;9687:87;9783:21;9807:32;9815:2;9819:7;9836:1;9807:7;:32::i;:::-;9783:56;;9878:1;9853:27;;:13;:27;;;9849:96;;9931:1;9903:31;;;;;;;;;;;:::i;:::-;;;;;;;;9849:96;9677:274;9624:327;;:::o;6047:272::-;6150:4;6204:1;6185:21;;:7;:21;;;;:127;;;;;6232:7;6223:16;;:5;:16;;;:52;;;;6243:32;6260:5;6267:7;6243:16;:32::i;:::-;6223:52;:88;;;;6304:7;6279:32;;:21;6292:7;6279:12;:21::i;:::-;:32;;;6223:88;6185:127;6166:146;;6047:272;;;;;:::o;7:75:35:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:139::-;1887:6;1882:3;1877;1871:23;1928:1;1919:6;1914:3;1910:16;1903:27;1798:139;;;:::o;1943:102::-;1984:6;2035:2;2031:7;2026:2;2019:5;2015:14;2011:28;2001:38;;1943:102;;;:::o;2051:377::-;2139:3;2167:39;2200:5;2167:39;:::i;:::-;2222:71;2286:6;2281:3;2222:71;:::i;:::-;2215:78;;2302:65;2360:6;2355:3;2348:4;2341:5;2337:16;2302:65;:::i;:::-;2392:29;2414:6;2392:29;:::i;:::-;2387:3;2383:39;2376:46;;2143:285;2051:377;;;;:::o;2434:313::-;2547:4;2585:2;2574:9;2570:18;2562:26;;2634:9;2628:4;2624:20;2620:1;2609:9;2605:17;2598:47;2662:78;2735:4;2726:6;2662:78;:::i;:::-;2654:86;;2434:313;;;;:::o;2753:77::-;2790:7;2819:5;2808:16;;2753:77;;;:::o;2836:122::-;2909:24;2927:5;2909:24;:::i;:::-;2902:5;2899:35;2889:63;;2948:1;2945;2938:12;2889:63;2836:122;:::o;2964:139::-;3010:5;3048:6;3035:20;3026:29;;3064:33;3091:5;3064:33;:::i;:::-;2964:139;;;;:::o;3109:329::-;3168:6;3217:2;3205:9;3196:7;3192:23;3188:32;3185:119;;;3223:79;;:::i;:::-;3185:119;3343:1;3368:53;3413:7;3404:6;3393:9;3389:22;3368:53;:::i;:::-;3358:63;;3314:117;3109:329;;;;:::o;3444:126::-;3481:7;3521:42;3514:5;3510:54;3499:65;;3444:126;;;:::o;3576:96::-;3613:7;3642:24;3660:5;3642:24;:::i;:::-;3631:35;;3576:96;;;:::o;3678:118::-;3765:24;3783:5;3765:24;:::i;:::-;3760:3;3753:37;3678:118;;:::o;3802:222::-;3895:4;3933:2;3922:9;3918:18;3910:26;;3946:71;4014:1;4003:9;3999:17;3990:6;3946:71;:::i;:::-;3802:222;;;;:::o;4030:122::-;4103:24;4121:5;4103:24;:::i;:::-;4096:5;4093:35;4083:63;;4142:1;4139;4132:12;4083:63;4030:122;:::o;4158:139::-;4204:5;4242:6;4229:20;4220:29;;4258:33;4285:5;4258:33;:::i;:::-;4158:139;;;;:::o;4303:474::-;4371:6;4379;4428:2;4416:9;4407:7;4403:23;4399:32;4396:119;;;4434:79;;:::i;:::-;4396:119;4554:1;4579:53;4624:7;4615:6;4604:9;4600:22;4579:53;:::i;:::-;4569:63;;4525:117;4681:2;4707:53;4752:7;4743:6;4732:9;4728:22;4707:53;:::i;:::-;4697:63;;4652:118;4303:474;;;;;:::o;4783:619::-;4860:6;4868;4876;4925:2;4913:9;4904:7;4900:23;4896:32;4893:119;;;4931:79;;:::i;:::-;4893:119;5051:1;5076:53;5121:7;5112:6;5101:9;5097:22;5076:53;:::i;:::-;5066:63;;5022:117;5178:2;5204:53;5249:7;5240:6;5229:9;5225:22;5204:53;:::i;:::-;5194:63;;5149:118;5306:2;5332:53;5377:7;5368:6;5357:9;5353:22;5332:53;:::i;:::-;5322:63;;5277:118;4783:619;;;;;:::o;5408:329::-;5467:6;5516:2;5504:9;5495:7;5491:23;5487:32;5484:119;;;5522:79;;:::i;:::-;5484:119;5642:1;5667:53;5712:7;5703:6;5692:9;5688:22;5667:53;:::i;:::-;5657:63;;5613:117;5408:329;;;;:::o;5743:118::-;5830:24;5848:5;5830:24;:::i;:::-;5825:3;5818:37;5743:118;;:::o;5867:222::-;5960:4;5998:2;5987:9;5983:18;5975:26;;6011:71;6079:1;6068:9;6064:17;6055:6;6011:71;:::i;:::-;5867:222;;;;:::o;6095:411::-;6230:4;6268:2;6257:9;6253:18;6245:26;;6317:9;6311:4;6307:20;6303:1;6292:9;6288:17;6281:47;6345:78;6418:4;6409:6;6345:78;:::i;:::-;6337:86;;6433:66;6495:2;6484:9;6480:18;6471:6;6433:66;:::i;:::-;6095:411;;;;;:::o;6512:116::-;6582:21;6597:5;6582:21;:::i;:::-;6575:5;6572:32;6562:60;;6618:1;6615;6608:12;6562:60;6512:116;:::o;6634:133::-;6677:5;6715:6;6702:20;6693:29;;6731:30;6755:5;6731:30;:::i;:::-;6634:133;;;;:::o;6773:468::-;6838:6;6846;6895:2;6883:9;6874:7;6870:23;6866:32;6863:119;;;6901:79;;:::i;:::-;6863:119;7021:1;7046:53;7091:7;7082:6;7071:9;7067:22;7046:53;:::i;:::-;7036:63;;6992:117;7148:2;7174:50;7216:7;7207:6;7196:9;7192:22;7174:50;:::i;:::-;7164:60;;7119:115;6773:468;;;;;:::o;7247:114::-;7314:6;7348:5;7342:12;7332:22;;7247:114;;;:::o;7367:184::-;7466:11;7500:6;7495:3;7488:19;7540:4;7535:3;7531:14;7516:29;;7367:184;;;;:::o;7557:132::-;7624:4;7647:3;7639:11;;7677:4;7672:3;7668:14;7660:22;;7557:132;;;:::o;7695:77::-;7732:7;7761:5;7750:16;;7695:77;;;:::o;7778:108::-;7855:24;7873:5;7855:24;:::i;:::-;7850:3;7843:37;7778:108;;:::o;7892:179::-;7961:10;7982:46;8024:3;8016:6;7982:46;:::i;:::-;8060:4;8055:3;8051:14;8037:28;;7892:179;;;;:::o;8077:113::-;8147:4;8179;8174:3;8170:14;8162:22;;8077:113;;;:::o;8226:732::-;8345:3;8374:54;8422:5;8374:54;:::i;:::-;8444:86;8523:6;8518:3;8444:86;:::i;:::-;8437:93;;8554:56;8604:5;8554:56;:::i;:::-;8633:7;8664:1;8649:284;8674:6;8671:1;8668:13;8649:284;;;8750:6;8744:13;8777:63;8836:3;8821:13;8777:63;:::i;:::-;8770:70;;8863:60;8916:6;8863:60;:::i;:::-;8853:70;;8709:224;8696:1;8693;8689:9;8684:14;;8649:284;;;8653:14;8949:3;8942:10;;8350:608;;;8226:732;;;;:::o;8964:373::-;9107:4;9145:2;9134:9;9130:18;9122:26;;9194:9;9188:4;9184:20;9180:1;9169:9;9165:17;9158:47;9222:108;9325:4;9316:6;9222:108;:::i;:::-;9214:116;;8964:373;;;;:::o;9343:117::-;9452:1;9449;9442:12;9466:117;9575:1;9572;9565:12;9589:180;9637:77;9634:1;9627:88;9734:4;9731:1;9724:15;9758:4;9755:1;9748:15;9775:281;9858:27;9880:4;9858:27;:::i;:::-;9850:6;9846:40;9988:6;9976:10;9973:22;9952:18;9940:10;9937:34;9934:62;9931:88;;;9999:18;;:::i;:::-;9931:88;10039:10;10035:2;10028:22;9818:238;9775:281;;:::o;10062:129::-;10096:6;10123:20;;:::i;:::-;10113:30;;10152:33;10180:4;10172:6;10152:33;:::i;:::-;10062:129;;;:::o;10197:307::-;10258:4;10348:18;10340:6;10337:30;10334:56;;;10370:18;;:::i;:::-;10334:56;10408:29;10430:6;10408:29;:::i;:::-;10400:37;;10492:4;10486;10482:15;10474:23;;10197:307;;;:::o;10510:148::-;10608:6;10603:3;10598;10585:30;10649:1;10640:6;10635:3;10631:16;10624:27;10510:148;;;:::o;10664:423::-;10741:5;10766:65;10782:48;10823:6;10782:48;:::i;:::-;10766:65;:::i;:::-;10757:74;;10854:6;10847:5;10840:21;10892:4;10885:5;10881:16;10930:3;10921:6;10916:3;10912:16;10909:25;10906:112;;;10937:79;;:::i;:::-;10906:112;11027:54;11074:6;11069:3;11064;11027:54;:::i;:::-;10747:340;10664:423;;;;;:::o;11106:338::-;11161:5;11210:3;11203:4;11195:6;11191:17;11187:27;11177:122;;11218:79;;:::i;:::-;11177:122;11335:6;11322:20;11360:78;11434:3;11426:6;11419:4;11411:6;11407:17;11360:78;:::i;:::-;11351:87;;11167:277;11106:338;;;;:::o;11450:943::-;11545:6;11553;11561;11569;11618:3;11606:9;11597:7;11593:23;11589:33;11586:120;;;11625:79;;:::i;:::-;11586:120;11745:1;11770:53;11815:7;11806:6;11795:9;11791:22;11770:53;:::i;:::-;11760:63;;11716:117;11872:2;11898:53;11943:7;11934:6;11923:9;11919:22;11898:53;:::i;:::-;11888:63;;11843:118;12000:2;12026:53;12071:7;12062:6;12051:9;12047:22;12026:53;:::i;:::-;12016:63;;11971:118;12156:2;12145:9;12141:18;12128:32;12187:18;12179:6;12176:30;12173:117;;;12209:79;;:::i;:::-;12173:117;12314:62;12368:7;12359:6;12348:9;12344:22;12314:62;:::i;:::-;12304:72;;12099:287;11450:943;;;;;;;:::o;12399:122::-;12472:24;12490:5;12472:24;:::i;:::-;12465:5;12462:35;12452:63;;12511:1;12508;12501:12;12452:63;12399:122;:::o;12527:139::-;12573:5;12611:6;12598:20;12589:29;;12627:33;12654:5;12627:33;:::i;:::-;12527:139;;;;:::o;12672:329::-;12731:6;12780:2;12768:9;12759:7;12755:23;12751:32;12748:119;;;12786:79;;:::i;:::-;12748:119;12906:1;12931:53;12976:7;12967:6;12956:9;12952:22;12931:53;:::i;:::-;12921:63;;12877:117;12672:329;;;;:::o;13007:632::-;13198:4;13236:3;13225:9;13221:19;13213:27;;13286:9;13280:4;13276:20;13272:1;13261:9;13257:17;13250:47;13314:78;13387:4;13378:6;13314:78;:::i;:::-;13306:86;;13402:72;13470:2;13459:9;13455:18;13446:6;13402:72;:::i;:::-;13484;13552:2;13541:9;13537:18;13528:6;13484:72;:::i;:::-;13566:66;13628:2;13617:9;13613:18;13604:6;13566:66;:::i;:::-;13007:632;;;;;;;:::o;13645:474::-;13713:6;13721;13770:2;13758:9;13749:7;13745:23;13741:32;13738:119;;;13776:79;;:::i;:::-;13738:119;13896:1;13921:53;13966:7;13957:6;13946:9;13942:22;13921:53;:::i;:::-;13911:63;;13867:117;14023:2;14049:53;14094:7;14085:6;14074:9;14070:22;14049:53;:::i;:::-;14039:63;;13994:118;13645:474;;;;;:::o;14125:117::-;14234:1;14231;14224:12;14248:117;14357:1;14354;14347:12;14385:553;14443:8;14453:6;14503:3;14496:4;14488:6;14484:17;14480:27;14470:122;;14511:79;;:::i;:::-;14470:122;14624:6;14611:20;14601:30;;14654:18;14646:6;14643:30;14640:117;;;14676:79;;:::i;:::-;14640:117;14790:4;14782:6;14778:17;14766:29;;14844:3;14836:4;14828:6;14824:17;14814:8;14810:32;14807:41;14804:128;;;14851:79;;:::i;:::-;14804:128;14385:553;;;;;:::o;14944:819::-;15033:6;15041;15049;15057;15106:2;15094:9;15085:7;15081:23;15077:32;15074:119;;;15112:79;;:::i;:::-;15074:119;15232:1;15257:53;15302:7;15293:6;15282:9;15278:22;15257:53;:::i;:::-;15247:63;;15203:117;15387:2;15376:9;15372:18;15359:32;15418:18;15410:6;15407:30;15404:117;;;15440:79;;:::i;:::-;15404:117;15553:65;15610:7;15601:6;15590:9;15586:22;15553:65;:::i;:::-;15535:83;;;;15330:298;15667:2;15693:53;15738:7;15729:6;15718:9;15714:22;15693:53;:::i;:::-;15683:63;;15638:118;14944:819;;;;;;;:::o;15769:180::-;15817:77;15814:1;15807:88;15914:4;15911:1;15904:15;15938:4;15935:1;15928:15;15955:320;15999:6;16036:1;16030:4;16026:12;16016:22;;16083:1;16077:4;16073:12;16104:18;16094:81;;16160:4;16152:6;16148:17;16138:27;;16094:81;16222:2;16214:6;16211:14;16191:18;16188:38;16185:84;;16241:18;;:::i;:::-;16185:84;16006:269;15955:320;;;:::o;16281:442::-;16430:4;16468:2;16457:9;16453:18;16445:26;;16481:71;16549:1;16538:9;16534:17;16525:6;16481:71;:::i;:::-;16562:72;16630:2;16619:9;16615:18;16606:6;16562:72;:::i;:::-;16644;16712:2;16701:9;16697:18;16688:6;16644:72;:::i;:::-;16281:442;;;;;;:::o;16729:148::-;16831:11;16868:3;16853:18;;16729:148;;;;:::o;16883:390::-;16989:3;17017:39;17050:5;17017:39;:::i;:::-;17072:89;17154:6;17149:3;17072:89;:::i;:::-;17065:96;;17170:65;17228:6;17223:3;17216:4;17209:5;17205:16;17170:65;:::i;:::-;17260:6;17255:3;17251:16;17244:23;;16993:280;16883:390;;;;:::o;17279:435::-;17459:3;17481:95;17572:3;17563:6;17481:95;:::i;:::-;17474:102;;17593:95;17684:3;17675:6;17593:95;:::i;:::-;17586:102;;17705:3;17698:10;;17279:435;;;;;:::o;17720:180::-;17768:77;17765:1;17758:88;17865:4;17862:1;17855:15;17889:4;17886:1;17879:15;17906:233;17945:3;17968:24;17986:5;17968:24;:::i;:::-;17959:33;;18014:66;18007:5;18004:77;18001:103;;18084:18;;:::i;:::-;18001:103;18131:1;18124:5;18120:13;18113:20;;17906:233;;;:::o;18145:141::-;18194:4;18217:3;18209:11;;18240:3;18237:1;18230:14;18274:4;18271:1;18261:18;18253:26;;18145:141;;;:::o;18292:93::-;18329:6;18376:2;18371;18364:5;18360:14;18356:23;18346:33;;18292:93;;;:::o;18391:107::-;18435:8;18485:5;18479:4;18475:16;18454:37;;18391:107;;;;:::o;18504:393::-;18573:6;18623:1;18611:10;18607:18;18646:97;18676:66;18665:9;18646:97;:::i;:::-;18764:39;18794:8;18783:9;18764:39;:::i;:::-;18752:51;;18836:4;18832:9;18825:5;18821:21;18812:30;;18885:4;18875:8;18871:19;18864:5;18861:30;18851:40;;18580:317;;18504:393;;;;;:::o;18903:60::-;18931:3;18952:5;18945:12;;18903:60;;;:::o;18969:142::-;19019:9;19052:53;19070:34;19079:24;19097:5;19079:24;:::i;:::-;19070:34;:::i;:::-;19052:53;:::i;:::-;19039:66;;18969:142;;;:::o;19117:75::-;19160:3;19181:5;19174:12;;19117:75;;;:::o;19198:269::-;19308:39;19339:7;19308:39;:::i;:::-;19369:91;19418:41;19442:16;19418:41;:::i;:::-;19410:6;19403:4;19397:11;19369:91;:::i;:::-;19363:4;19356:105;19274:193;19198:269;;;:::o;19473:73::-;19518:3;19539:1;19532:8;;19473:73;:::o;19552:189::-;19629:32;;:::i;:::-;19670:65;19728:6;19720;19714:4;19670:65;:::i;:::-;19605:136;19552:189;;:::o;19747:186::-;19807:120;19824:3;19817:5;19814:14;19807:120;;;19878:39;19915:1;19908:5;19878:39;:::i;:::-;19851:1;19844:5;19840:13;19831:22;;19807:120;;;19747:186;;:::o;19939:543::-;20040:2;20035:3;20032:11;20029:446;;;20074:38;20106:5;20074:38;:::i;:::-;20158:29;20176:10;20158:29;:::i;:::-;20148:8;20144:44;20341:2;20329:10;20326:18;20323:49;;;20362:8;20347:23;;20323:49;20385:80;20441:22;20459:3;20441:22;:::i;:::-;20431:8;20427:37;20414:11;20385:80;:::i;:::-;20044:431;;20029:446;19939:543;;;:::o;20488:117::-;20542:8;20592:5;20586:4;20582:16;20561:37;;20488:117;;;;:::o;20611:169::-;20655:6;20688:51;20736:1;20732:6;20724:5;20721:1;20717:13;20688:51;:::i;:::-;20684:56;20769:4;20763;20759:15;20749:25;;20662:118;20611:169;;;;:::o;20785:295::-;20861:4;21007:29;21032:3;21026:4;21007:29;:::i;:::-;20999:37;;21069:3;21066:1;21062:11;21056:4;21053:21;21045:29;;20785:295;;;;:::o;21085:1395::-;21202:37;21235:3;21202:37;:::i;:::-;21304:18;21296:6;21293:30;21290:56;;;21326:18;;:::i;:::-;21290:56;21370:38;21402:4;21396:11;21370:38;:::i;:::-;21455:67;21515:6;21507;21501:4;21455:67;:::i;:::-;21549:1;21573:4;21560:17;;21605:2;21597:6;21594:14;21622:1;21617:618;;;;22279:1;22296:6;22293:77;;;22345:9;22340:3;22336:19;22330:26;22321:35;;22293:77;22396:67;22456:6;22449:5;22396:67;:::i;:::-;22390:4;22383:81;22252:222;21587:887;;21617:618;21669:4;21665:9;21657:6;21653:22;21703:37;21735:4;21703:37;:::i;:::-;21762:1;21776:208;21790:7;21787:1;21784:14;21776:208;;;21869:9;21864:3;21860:19;21854:26;21846:6;21839:42;21920:1;21912:6;21908:14;21898:24;;21967:2;21956:9;21952:18;21939:31;;21813:4;21810:1;21806:12;21801:17;;21776:208;;;22012:6;22003:7;22000:19;21997:179;;;22070:9;22065:3;22061:19;22055:26;22113:48;22155:4;22147:6;22143:17;22132:9;22113:48;:::i;:::-;22105:6;22098:64;22020:156;21997:179;22222:1;22218;22210:6;22206:14;22202:22;22196:4;22189:36;21624:611;;;21587:887;;21177:1303;;;21085:1395;;:::o;22510:317::-;22608:3;22629:71;22693:6;22688:3;22629:71;:::i;:::-;22622:78;;22710:56;22759:6;22754:3;22747:5;22710:56;:::i;:::-;22791:29;22813:6;22791:29;:::i;:::-;22786:3;22782:39;22775:46;;22510:317;;;;;:::o;22833:118::-;22920:24;22938:5;22920:24;:::i;:::-;22915:3;22908:37;22833:118;;:::o;22957:443::-;23108:4;23146:2;23135:9;23131:18;23123:26;;23195:9;23189:4;23185:20;23181:1;23170:9;23166:17;23159:47;23223:88;23306:4;23297:6;23289;23223:88;:::i;:::-;23215:96;;23321:72;23389:2;23378:9;23374:18;23365:6;23321:72;:::i;:::-;22957:443;;;;;;:::o;23406:98::-;23457:6;23491:5;23485:12;23475:22;;23406:98;;;:::o;23510:168::-;23593:11;23627:6;23622:3;23615:19;23667:4;23662:3;23658:14;23643:29;;23510:168;;;;:::o;23684:373::-;23770:3;23798:38;23830:5;23798:38;:::i;:::-;23852:70;23915:6;23910:3;23852:70;:::i;:::-;23845:77;;23931:65;23989:6;23984:3;23977:4;23970:5;23966:16;23931:65;:::i;:::-;24021:29;24043:6;24021:29;:::i;:::-;24016:3;24012:39;24005:46;;23774:283;23684:373;;;;:::o;24063:640::-;24258:4;24296:3;24285:9;24281:19;24273:27;;24310:71;24378:1;24367:9;24363:17;24354:6;24310:71;:::i;:::-;24391:72;24459:2;24448:9;24444:18;24435:6;24391:72;:::i;:::-;24473;24541:2;24530:9;24526:18;24517:6;24473:72;:::i;:::-;24592:9;24586:4;24582:20;24577:2;24566:9;24562:18;24555:48;24620:76;24691:4;24682:6;24620:76;:::i;:::-;24612:84;;24063:640;;;;;;;:::o;24709:141::-;24765:5;24796:6;24790:13;24781:22;;24812:32;24838:5;24812:32;:::i;:::-;24709:141;;;;:::o;24856:349::-;24925:6;24974:2;24962:9;24953:7;24949:23;24945:32;24942:119;;;24980:79;;:::i;:::-;24942:119;25100:1;25125:63;25180:7;25171:6;25160:9;25156:22;25125:63;:::i;:::-;25115:73;;25071:127;24856:349;;;;:::o;25211:180::-;25259:77;25256:1;25249:88;25356:4;25353:1;25346:15;25380:4;25377:1;25370:15;25397:332;25518:4;25556:2;25545:9;25541:18;25533:26;;25569:71;25637:1;25626:9;25622:17;25613:6;25569:71;:::i;:::-;25650:72;25718:2;25707:9;25703:18;25694:6;25650:72;:::i;:::-;25397:332;;;;;:::o",
//         "linkReferences": { }
//   },
//   "methodIdentifiers": {
//     "approve(address,uint256)": "095ea7b3",
//       "authorizeInstitution(address)": "bd4d8bcb",
//         "balanceOf(address)": "70a08231",
//           "getApproved(uint256)": "081812fc",
//             "getCertificateCount(address)": "b1d5ccf8",
//               "getCertificatesOfStudent(address)": "b08c6a87",
//                 "getCredential(uint256)": "8dd18d2d",
//                   "getCredentialByHash(bytes32)": "ddb6dbd6",
//                     "isApprovedForAll(address,address)": "e985e9c5",
//                       "isAuthorizedInstitution(address)": "8bbf5536",
//                         "issueCredential(address,string,bytes32)": "f10705e6",
//                           "name()": "06fdde03",
//                             "owner()": "8da5cb5b",
//                               "ownerOf(uint256)": "6352211e",
//                                 "removeInstitution(address)": "8747d5ed",
//                                   "renounceOwnership()": "715018a6",
//                                     "revokeCredential(uint256)": "1b87278d",
//                                       "safeTransferFrom(address,address,uint256)": "42842e0e",
//                                         "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
//                                           "setApprovalForAll(address,bool)": "a22cb465",
//                                             "supportsInterface(bytes4)": "01ffc9a7",
//                                               "symbol()": "95d89b41",
//                                                 "tokenURI(uint256)": "c87b56dd",
//                                                   "transferFrom(address,address,uint256)": "23b872dd",
//                                                     "transferOwnership(address)": "f2fde38b"
//   },
//   "rawMetadata": "{\"compiler\":{\"version\":\"0.8.30+commit.73712a01\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AlreadyAuthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"CredentialAlreadyIssued\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotAuthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotAuthorizedInstitution\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SoulboundToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TokenDoesNotExist\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"student\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"institution\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"ipfsHash\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"fileHash\",\"type\":\"bytes32\"}],\"name\":\"CredentialIssued\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"CredentialRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"institution\",\"type\":\"address\"}],\"name\":\"InstitutionAuthorized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"institution\",\"type\":\"address\"}],\"name\":\"InstitutionRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"institution\",\"type\":\"address\"}],\"name\":\"authorizeInstitution\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"student\",\"type\":\"address\"}],\"name\":\"getCertificateCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"student\",\"type\":\"address\"}],\"name\":\"getCertificatesOfStudent\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getCredential\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"ipfsHash\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"revoked\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"fileHash\",\"type\":\"bytes32\"}],\"name\":\"getCredentialByHash\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"ipfsHash\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"issuer\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"student\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"revoked\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"institution\",\"type\":\"address\"}],\"name\":\"isAuthorizedInstitution\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"student\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"ipfsHash\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"fileHash\",\"type\":\"bytes32\"}],\"name\":\"issueCredential\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"institution\",\"type\":\"address\"}],\"name\":\"removeInstitution\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"revokeCredential\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-721. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"balanceOf(address)\":{\"details\":\"Returns the number of tokens in ``owner``'s account.\"},\"getApproved(uint256)\":{\"details\":\"Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}\"},\"issueCredential(address,string,bytes32)\":{\"details\":\"Only authorized institutions can call\"},\"name()\":{\"details\":\"Returns the token collection name.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC-721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or   {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"Returns the token collection symbol.\"},\"tokenURI(uint256)\":{\"details\":\"Returns the Uniform Resource Identifier (URI) for `tokenId` token.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC-721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"title\":\"Academic Credential NFT (Soulbound)\",\"version\":1},\"userdoc\":{\"events\":{\"CredentialIssued(uint256,address,address,string,bytes32)\":{\"notice\":\"Emitted when a credential is issued\"},\"CredentialRevoked(uint256)\":{\"notice\":\"Emitted when a credential is revoked\"},\"InstitutionAuthorized(address)\":{\"notice\":\"Emitted when an institution is authorized\"},\"InstitutionRemoved(address)\":{\"notice\":\"Emitted when an institution is removed\"}},\"kind\":\"user\",\"methods\":{\"approve(address,uint256)\":{\"notice\":\"Disable approvals for soulbound tokens\"},\"authorizeInstitution(address)\":{\"notice\":\"Authorize an institution\"},\"constructor\":{\"notice\":\"=============================================================                         CONSTRUCTOR =============================================================\"},\"getCertificateCount(address)\":{\"notice\":\"Get count of certificates\"},\"getCertificatesOfStudent(address)\":{\"notice\":\"Get all certificate hashes of a student\"},\"getCredential(uint256)\":{\"notice\":\"Get credential by tokenId\"},\"getCredentialByHash(bytes32)\":{\"notice\":\"Get credential using file hash (MAIN VERIFICATION FUNCTION)\"},\"isAuthorizedInstitution(address)\":{\"notice\":\"Check if institution is authorized\"},\"issueCredential(address,string,bytes32)\":{\"notice\":\"Issue credential NFT (Soulbound)\"},\"removeInstitution(address)\":{\"notice\":\"Remove institution authorization\"},\"revokeCredential(uint256)\":{\"notice\":\"Revoke credential\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Disable operator approvals for soulbound tokens\"}},\"notice\":\"Issues non-transferable academic certificates stored via IPFS\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/AcademicCredential.sol\":\"AcademicCredential\"},\"evmVersion\":\"prague\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x1b88b3fb3d85ba5496d7d5f396f83ee1fddcdd6762059ff65992655b67920998\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://89393bb3212da1c0889601b9706a07b39419ddc4d2faab9eaf6e7f9152cf6a1c\",\"dweb:/ipfs/QmcCfzzxv1Bkdz1c1yF4gQCeYb6Us5BJANnzTFqawfd1HL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x0a5edd019f899b88982213d19339419578276a3f398eec03084b295cc1994039\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f0680afad39f55515cb8b0109d1c0d39691442edb1282d57127f834aedd2d77b\",\"dweb:/ipfs/QmbEn2gLtmZz15hRo8wNrzzqqm6nvowNABZAKatGrhNoRn\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xf78f05f3b8c9f75570e85300d7b4600d7f6f6a198449273f31d44c1641adb46f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e28b872613b45e0e801d4995aa4380be2531147bfe2d85c1d6275f1de514fba3\",\"dweb:/ipfs/QmeeFcfShHYaS3BdgVj78nxR28ZaVUwbvr66ud8bT6kzw9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x88cd5e3bee2e8c36b8d9058fbcaa81ad5704281b25634122234b55ea853d8055\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8dc7e7ab5b8ea36c15027ab04221b05d1c970f47a53e9fd47ead8ca665d49c7e\",\"dweb:/ipfs/Qmeeph7fsDyfRr8vb2L8KcDEmKPb224TAayMvgqgGAnqpL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0xf46268c37522320bb2119a5a394bc5c739a95c0c574c8d08e8c643f4d06e5c76\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://517e4b295f35b9947c72ad7379a6089439ece7bb6f4a2ea0a159da13046c039e\",\"dweb:/ipfs/QmZXzkSfLUbvujig3zVbpDHykpHhqLpvQtdiN3B5j4TA3u\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0xc7efbc23214ad7dced8bf2249460f4bda114d57f6a0079f84040654280f455bd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1f5bd44efca8c8c0d74439e7b808d1f9c4af1df78f91fef8e8bbca8104645435\",\"dweb:/ipfs/Qmb42XSd8MKsEitp42sZkSFGqDRigk6QgGXtiJyJqUZJJ6\"]},\"lib/openzeppelin-contracts/contracts/utils/Bytes.sol\":{\"keccak256\":\"0x8140d608316521b1fd71167c3b708ebb8659da070723fc8807609553b296ee33\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a7bf7db66869ba1e945a0390b85da2f6afc7e42a4735ca918d0d56ac90c50147\",\"dweb:/ipfs/QmRmNyhpBpgzSdQqLtrQCYE7H7eLnVVxh2Yy4YMrySR8AR\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x36d1750bf1aa5fee9c52adb2f7857ab652daca722fc05dff533b364f67a1139a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2e5e7052539b7849d02f3ce25acc1dce29373c11cfae9f0bc918c54b780c549a\",\"dweb:/ipfs/QmRGE32xNkMTo6i4pHHMxjpiu77yPwnTA25SFngw2NXJys\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x2d9dc2fe26180f74c11c13663647d38e259e45f95eb88f57b61d2160b0109d3e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://81233d1f98060113d9922180bb0f14f8335856fe9f339134b09335e9f678c377\",\"dweb:/ipfs/QmWh6R35SarhAn4z2wH8SU456jJSYL2FgucfTFgbHJJN4E\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://971f954442df5c2ef5b5ebf1eb245d7105d9fbacc7386ee5c796df1d45b21617\",\"dweb:/ipfs/QmadRjHbkicwqwwh61raUEapaVEtaLMcYbQZWs9gUkgj3u\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x09e3f1c72d4c5cbe8e2644ab7313f8f7177533ae2f4c24cdcbbeaf520a73734c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://93208401215d539fa2d81626b207c1f611def7883d0e447b3b5969ebaa7b3c2c\",\"dweb:/ipfs/QmXPxDnQPx8LAweX5ZJqEcwkvs59kP4c64VVDG1Jjq1mef\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03\",\"dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ\"]},\"src/AcademicCredential.sol\":{\"keccak256\":\"0x644c8fb3d919e93f7de20a450c02453290d0695eb493505a2d99069148fa9227\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3faf75eecc5b313bfbf1ba96aa0dd0401547d2a1cd4957b723bbf6f562a6074f\",\"dweb:/ipfs/QmYyNMjppLjooaweKj95xXuoNxQvd8TaqycRmuwcnA11PA\"]},\"src/interfaces/IAcademicCredential.sol\":{\"keccak256\":\"0xbaa14a2265590912598a22723fa3c9c510732f32032694c463e4ed3dd877bab6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef0667c7a044397babdced343b11933d29f06e95e44bb14ceb6e48179498abe\",\"dweb:/ipfs/QmdeoCdTitjTnRS2uof9JzT1jZgmqRiML4EG7goSs6mTyr\"]},\"src/libraries/Errors.sol\":{\"keccak256\":\"0xaedd59e6becb02b3ca750fa1c9e8eade45a5fd50aad0e89978db7cf5ad9c2979\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a47c946b9199296cd12158ebe57fd1d102f9ec49a273126a6a0444dd0782a116\",\"dweb:/ipfs/QmNyFJfHh4JDpALhbCLGcZdDt8xRKoL2XsmBgKKefw5FPn\"]}},\"version\":1}",
//     "metadata": {
//     "compiler": {
//       "version": "0.8.30+commit.73712a01"
//     },
//     "language": "Solidity",
//       "output": {
//       "abi": [
//         {
//           "inputs": [],
//           "stateMutability": "nonpayable",
//           "type": "constructor"
//         },
//         {
//           "inputs": [],
//           "type": "error",
//           "name": "AlreadyAuthorized"
//         },
//         {
//           "inputs": [],
//           "type": "error",
//           "name": "CredentialAlreadyIssued"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "sender",
//               "type": "address"
//             },
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             },
//             {
//               "internalType": "address",
//               "name": "owner",
//               "type": "address"
//             }
//           ],
//           "type": "error",
//           "name": "ERC721IncorrectOwner"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "operator",
//               "type": "address"
//             },
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ],
//           "type": "error",
//           "name": "ERC721InsufficientApproval"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "approver",
//               "type": "address"
//             }
//           ],
//           "type": "error",
//           "name": "ERC721InvalidApprover"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "operator",
//               "type": "address"
//             }
//           ],
//           "type": "error",
//           "name": "ERC721InvalidOperator"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "owner",
//               "type": "address"
//             }
//           ],
//           "type": "error",
//           "name": "ERC721InvalidOwner"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "receiver",
//               "type": "address"
//             }
//           ],
//           "type": "error",
//           "name": "ERC721InvalidReceiver"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "sender",
//               "type": "address"
//             }
//           ],
//           "type": "error",
//           "name": "ERC721InvalidSender"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ],
//           "type": "error",
//           "name": "ERC721NonexistentToken"
//         },
//         {
//           "inputs": [],
//           "type": "error",
//           "name": "NotAuthorized"
//         },
//         {
//           "inputs": [],
//           "type": "error",
//           "name": "NotAuthorizedInstitution"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "owner",
//               "type": "address"
//             }
//           ],
//           "type": "error",
//           "name": "OwnableInvalidOwner"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "account",
//               "type": "address"
//             }
//           ],
//           "type": "error",
//           "name": "OwnableUnauthorizedAccount"
//         },
//         {
//           "inputs": [],
//           "type": "error",
//           "name": "SoulboundToken"
//         },
//         {
//           "inputs": [],
//           "type": "error",
//           "name": "TokenDoesNotExist"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "owner",
//               "type": "address",
//               "indexed": true
//             },
//             {
//               "internalType": "address",
//               "name": "approved",
//               "type": "address",
//               "indexed": true
//             },
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256",
//               "indexed": true
//             }
//           ],
//           "type": "event",
//           "name": "Approval",
//           "anonymous": false
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "owner",
//               "type": "address",
//               "indexed": true
//             },
//             {
//               "internalType": "address",
//               "name": "operator",
//               "type": "address",
//               "indexed": true
//             },
//             {
//               "internalType": "bool",
//               "name": "approved",
//               "type": "bool",
//               "indexed": false
//             }
//           ],
//           "type": "event",
//           "name": "ApprovalForAll",
//           "anonymous": false
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256",
//               "indexed": true
//             },
//             {
//               "internalType": "address",
//               "name": "student",
//               "type": "address",
//               "indexed": true
//             },
//             {
//               "internalType": "address",
//               "name": "institution",
//               "type": "address",
//               "indexed": true
//             },
//             {
//               "internalType": "string",
//               "name": "ipfsHash",
//               "type": "string",
//               "indexed": false
//             },
//             {
//               "internalType": "bytes32",
//               "name": "fileHash",
//               "type": "bytes32",
//               "indexed": false
//             }
//           ],
//           "type": "event",
//           "name": "CredentialIssued",
//           "anonymous": false
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256",
//               "indexed": true
//             }
//           ],
//           "type": "event",
//           "name": "CredentialRevoked",
//           "anonymous": false
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "institution",
//               "type": "address",
//               "indexed": true
//             }
//           ],
//           "type": "event",
//           "name": "InstitutionAuthorized",
//           "anonymous": false
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "institution",
//               "type": "address",
//               "indexed": true
//             }
//           ],
//           "type": "event",
//           "name": "InstitutionRemoved",
//           "anonymous": false
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "previousOwner",
//               "type": "address",
//               "indexed": true
//             },
//             {
//               "internalType": "address",
//               "name": "newOwner",
//               "type": "address",
//               "indexed": true
//             }
//           ],
//           "type": "event",
//           "name": "OwnershipTransferred",
//           "anonymous": false
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "from",
//               "type": "address",
//               "indexed": true
//             },
//             {
//               "internalType": "address",
//               "name": "to",
//               "type": "address",
//               "indexed": true
//             },
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256",
//               "indexed": true
//             }
//           ],
//           "type": "event",
//           "name": "Transfer",
//           "anonymous": false
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "",
//               "type": "address"
//             },
//             {
//               "internalType": "uint256",
//               "name": "",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "approve"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "institution",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "authorizeInstitution"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "owner",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "balanceOf",
//           "outputs": [
//             {
//               "internalType": "uint256",
//               "name": "",
//               "type": "uint256"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "getApproved",
//           "outputs": [
//             {
//               "internalType": "address",
//               "name": "",
//               "type": "address"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "student",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "getCertificateCount",
//           "outputs": [
//             {
//               "internalType": "uint256",
//               "name": "",
//               "type": "uint256"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "student",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "getCertificatesOfStudent",
//           "outputs": [
//             {
//               "internalType": "bytes32[]",
//               "name": "",
//               "type": "bytes32[]"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "getCredential",
//           "outputs": [
//             {
//               "internalType": "string",
//               "name": "ipfsHash",
//               "type": "string"
//             },
//             {
//               "internalType": "bool",
//               "name": "revoked",
//               "type": "bool"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "bytes32",
//               "name": "fileHash",
//               "type": "bytes32"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "getCredentialByHash",
//           "outputs": [
//             {
//               "internalType": "string",
//               "name": "ipfsHash",
//               "type": "string"
//             },
//             {
//               "internalType": "address",
//               "name": "issuer",
//               "type": "address"
//             },
//             {
//               "internalType": "address",
//               "name": "student",
//               "type": "address"
//             },
//             {
//               "internalType": "bool",
//               "name": "revoked",
//               "type": "bool"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "owner",
//               "type": "address"
//             },
//             {
//               "internalType": "address",
//               "name": "operator",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "isApprovedForAll",
//           "outputs": [
//             {
//               "internalType": "bool",
//               "name": "",
//               "type": "bool"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "institution",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "isAuthorizedInstitution",
//           "outputs": [
//             {
//               "internalType": "bool",
//               "name": "",
//               "type": "bool"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "student",
//               "type": "address"
//             },
//             {
//               "internalType": "string",
//               "name": "ipfsHash",
//               "type": "string"
//             },
//             {
//               "internalType": "bytes32",
//               "name": "fileHash",
//               "type": "bytes32"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "issueCredential",
//           "outputs": [
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ]
//         },
//         {
//           "inputs": [],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "name",
//           "outputs": [
//             {
//               "internalType": "string",
//               "name": "",
//               "type": "string"
//             }
//           ]
//         },
//         {
//           "inputs": [],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "owner",
//           "outputs": [
//             {
//               "internalType": "address",
//               "name": "",
//               "type": "address"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "ownerOf",
//           "outputs": [
//             {
//               "internalType": "address",
//               "name": "",
//               "type": "address"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "institution",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "removeInstitution"
//         },
//         {
//           "inputs": [],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "renounceOwnership"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "revokeCredential"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "from",
//               "type": "address"
//             },
//             {
//               "internalType": "address",
//               "name": "to",
//               "type": "address"
//             },
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "safeTransferFrom"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "from",
//               "type": "address"
//             },
//             {
//               "internalType": "address",
//               "name": "to",
//               "type": "address"
//             },
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             },
//             {
//               "internalType": "bytes",
//               "name": "data",
//               "type": "bytes"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "safeTransferFrom"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "",
//               "type": "address"
//             },
//             {
//               "internalType": "bool",
//               "name": "",
//               "type": "bool"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "setApprovalForAll"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "bytes4",
//               "name": "interfaceId",
//               "type": "bytes4"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "supportsInterface",
//           "outputs": [
//             {
//               "internalType": "bool",
//               "name": "",
//               "type": "bool"
//             }
//           ]
//         },
//         {
//           "inputs": [],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "symbol",
//           "outputs": [
//             {
//               "internalType": "string",
//               "name": "",
//               "type": "string"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "view",
//           "type": "function",
//           "name": "tokenURI",
//           "outputs": [
//             {
//               "internalType": "string",
//               "name": "",
//               "type": "string"
//             }
//           ]
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "from",
//               "type": "address"
//             },
//             {
//               "internalType": "address",
//               "name": "to",
//               "type": "address"
//             },
//             {
//               "internalType": "uint256",
//               "name": "tokenId",
//               "type": "uint256"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "transferFrom"
//         },
//         {
//           "inputs": [
//             {
//               "internalType": "address",
//               "name": "newOwner",
//               "type": "address"
//             }
//           ],
//           "stateMutability": "nonpayable",
//           "type": "function",
//           "name": "transferOwnership"
//         }
//       ],
//         "devdoc": {
//         "kind": "dev",
//           "methods": {
//           "balanceOf(address)": {
//             "details": "Returns the number of tokens in ``owner``'s account."
//           },
//           "getApproved(uint256)": {
//             "details": "Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist."
//           },
//           "isApprovedForAll(address,address)": {
//             "details": "Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}"
//           },
//           "issueCredential(address,string,bytes32)": {
//             "details": "Only authorized institutions can call"
//           },
//           "name()": {
//             "details": "Returns the token collection name."
//           },
//           "owner()": {
//             "details": "Returns the address of the current owner."
//           },
//           "ownerOf(uint256)": {
//             "details": "Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist."
//           },
//           "renounceOwnership()": {
//             "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
//           },
//           "safeTransferFrom(address,address,uint256)": {
//             "details": "Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC-721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or   {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event."
//           },
//           "safeTransferFrom(address,address,uint256,bytes)": {
//             "details": "Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event."
//           },
//           "supportsInterface(bytes4)": {
//             "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
//           },
//           "symbol()": {
//             "details": "Returns the token collection symbol."
//           },
//           "tokenURI(uint256)": {
//             "details": "Returns the Uniform Resource Identifier (URI) for `tokenId` token."
//           },
//           "transferFrom(address,address,uint256)": {
//             "details": "Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC-721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event."
//           },
//           "transferOwnership(address)": {
//             "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
//           }
//         },
//         "version": 1
//       },
//       "userdoc": {
//         "kind": "user",
//           "methods": {
//           "approve(address,uint256)": {
//             "notice": "Disable approvals for soulbound tokens"
//           },
//           "authorizeInstitution(address)": {
//             "notice": "Authorize an institution"
//           },
//           "constructor": {
//             "notice": "=============================================================                         CONSTRUCTOR ============================================================="
//           },
//           "getCertificateCount(address)": {
//             "notice": "Get count of certificates"
//           },
//           "getCertificatesOfStudent(address)": {
//             "notice": "Get all certificate hashes of a student"
//           },
//           "getCredential(uint256)": {
//             "notice": "Get credential by tokenId"
//           },
//           "getCredentialByHash(bytes32)": {
//             "notice": "Get credential using file hash (MAIN VERIFICATION FUNCTION)"
//           },
//           "isAuthorizedInstitution(address)": {
//             "notice": "Check if institution is authorized"
//           },
//           "issueCredential(address,string,bytes32)": {
//             "notice": "Issue credential NFT (Soulbound)"
//           },
//           "removeInstitution(address)": {
//             "notice": "Remove institution authorization"
//           },
//           "revokeCredential(uint256)": {
//             "notice": "Revoke credential"
//           },
//           "setApprovalForAll(address,bool)": {
//             "notice": "Disable operator approvals for soulbound tokens"
//           }
//         },
//         "version": 1
//       }
//     },
//     "settings": {
//       "remappings": [
//         "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
//         "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
//         "forge-std/=lib/forge-std/src/",
//         "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
//         "openzeppelin-contracts/=lib/openzeppelin-contracts/"
//       ],
//         "optimizer": {
//         "enabled": false,
//           "runs": 200
//       },
//       "metadata": {
//         "bytecodeHash": "ipfs"
//       },
//       "compilationTarget": {
//         "src/AcademicCredential.sol": "AcademicCredential"
//       },
//       "evmVersion": "prague",
//         "libraries": { }
//     },
//     "sources": {
//       "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
//         "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
//           "urls": [
//             "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
//             "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
//         "keccak256": "0x1b88b3fb3d85ba5496d7d5f396f83ee1fddcdd6762059ff65992655b67920998",
//           "urls": [
//             "bzz-raw://89393bb3212da1c0889601b9706a07b39419ddc4d2faab9eaf6e7f9152cf6a1c",
//             "dweb:/ipfs/QmcCfzzxv1Bkdz1c1yF4gQCeYb6Us5BJANnzTFqawfd1HL"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol": {
//         "keccak256": "0x0a5edd019f899b88982213d19339419578276a3f398eec03084b295cc1994039",
//           "urls": [
//             "bzz-raw://f0680afad39f55515cb8b0109d1c0d39691442edb1282d57127f834aedd2d77b",
//             "dweb:/ipfs/QmbEn2gLtmZz15hRo8wNrzzqqm6nvowNABZAKatGrhNoRn"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol": {
//         "keccak256": "0xf78f05f3b8c9f75570e85300d7b4600d7f6f6a198449273f31d44c1641adb46f",
//           "urls": [
//             "bzz-raw://e28b872613b45e0e801d4995aa4380be2531147bfe2d85c1d6275f1de514fba3",
//             "dweb:/ipfs/QmeeFcfShHYaS3BdgVj78nxR28ZaVUwbvr66ud8bT6kzw9"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol": {
//         "keccak256": "0x88cd5e3bee2e8c36b8d9058fbcaa81ad5704281b25634122234b55ea853d8055",
//           "urls": [
//             "bzz-raw://8dc7e7ab5b8ea36c15027ab04221b05d1c970f47a53e9fd47ead8ca665d49c7e",
//             "dweb:/ipfs/Qmeeph7fsDyfRr8vb2L8KcDEmKPb224TAayMvgqgGAnqpL"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
//         "keccak256": "0xf46268c37522320bb2119a5a394bc5c739a95c0c574c8d08e8c643f4d06e5c76",
//           "urls": [
//             "bzz-raw://517e4b295f35b9947c72ad7379a6089439ece7bb6f4a2ea0a159da13046c039e",
//             "dweb:/ipfs/QmZXzkSfLUbvujig3zVbpDHykpHhqLpvQtdiN3B5j4TA3u"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol": {
//         "keccak256": "0xc7efbc23214ad7dced8bf2249460f4bda114d57f6a0079f84040654280f455bd",
//           "urls": [
//             "bzz-raw://1f5bd44efca8c8c0d74439e7b808d1f9c4af1df78f91fef8e8bbca8104645435",
//             "dweb:/ipfs/Qmb42XSd8MKsEitp42sZkSFGqDRigk6QgGXtiJyJqUZJJ6"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/utils/Bytes.sol": {
//         "keccak256": "0x8140d608316521b1fd71167c3b708ebb8659da070723fc8807609553b296ee33",
//           "urls": [
//             "bzz-raw://a7bf7db66869ba1e945a0390b85da2f6afc7e42a4735ca918d0d56ac90c50147",
//             "dweb:/ipfs/QmRmNyhpBpgzSdQqLtrQCYE7H7eLnVVxh2Yy4YMrySR8AR"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
//         "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
//           "urls": [
//             "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
//             "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/utils/Panic.sol": {
//         "keccak256": "0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a",
//           "urls": [
//             "bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a",
//             "dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
//         "keccak256": "0x36d1750bf1aa5fee9c52adb2f7857ab652daca722fc05dff533b364f67a1139a",
//           "urls": [
//             "bzz-raw://2e5e7052539b7849d02f3ce25acc1dce29373c11cfae9f0bc918c54b780c549a",
//             "dweb:/ipfs/QmRGE32xNkMTo6i4pHHMxjpiu77yPwnTA25SFngw2NXJys"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
//         "keccak256": "0x2d9dc2fe26180f74c11c13663647d38e259e45f95eb88f57b61d2160b0109d3e",
//           "urls": [
//             "bzz-raw://81233d1f98060113d9922180bb0f14f8335856fe9f339134b09335e9f678c377",
//             "dweb:/ipfs/QmWh6R35SarhAn4z2wH8SU456jJSYL2FgucfTFgbHJJN4E"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
//         "keccak256": "0x8891738ffe910f0cf2da09566928589bf5d63f4524dd734fd9cedbac3274dd5c",
//           "urls": [
//             "bzz-raw://971f954442df5c2ef5b5ebf1eb245d7105d9fbacc7386ee5c796df1d45b21617",
//             "dweb:/ipfs/QmadRjHbkicwqwwh61raUEapaVEtaLMcYbQZWs9gUkgj3u"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
//         "keccak256": "0x09e3f1c72d4c5cbe8e2644ab7313f8f7177533ae2f4c24cdcbbeaf520a73734c",
//           "urls": [
//             "bzz-raw://93208401215d539fa2d81626b207c1f611def7883d0e447b3b5969ebaa7b3c2c",
//             "dweb:/ipfs/QmXPxDnQPx8LAweX5ZJqEcwkvs59kP4c64VVDG1Jjq1mef"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol": {
//         "keccak256": "0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54",
//           "urls": [
//             "bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8",
//             "dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy"
//           ],
//             "license": "MIT"
//       },
//       "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
//         "keccak256": "0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3",
//           "urls": [
//             "bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03",
//             "dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ"
//           ],
//             "license": "MIT"
//       },
//       "src/AcademicCredential.sol": {
//         "keccak256": "0x644c8fb3d919e93f7de20a450c02453290d0695eb493505a2d99069148fa9227",
//           "urls": [
//             "bzz-raw://3faf75eecc5b313bfbf1ba96aa0dd0401547d2a1cd4957b723bbf6f562a6074f",
//             "dweb:/ipfs/QmYyNMjppLjooaweKj95xXuoNxQvd8TaqycRmuwcnA11PA"
//           ],
//             "license": "MIT"
//       },
//       "src/interfaces/IAcademicCredential.sol": {
//         "keccak256": "0xbaa14a2265590912598a22723fa3c9c510732f32032694c463e4ed3dd877bab6",
//           "urls": [
//             "bzz-raw://2ef0667c7a044397babdced343b11933d29f06e95e44bb14ceb6e48179498abe",
//             "dweb:/ipfs/QmdeoCdTitjTnRS2uof9JzT1jZgmqRiML4EG7goSs6mTyr"
//           ],
//             "license": "MIT"
//       },
//       "src/libraries/Errors.sol": {
//         "keccak256": "0xaedd59e6becb02b3ca750fa1c9e8eade45a5fd50aad0e89978db7cf5ad9c2979",
//           "urls": [
//             "bzz-raw://a47c946b9199296cd12158ebe57fd1d102f9ec49a273126a6a0444dd0782a116",
//             "dweb:/ipfs/QmNyFJfHh4JDpALhbCLGcZdDt8xRKoL2XsmBgKKefw5FPn"
//           ],
//             "license": "MIT"
//       }
//     },
//     "version": 1
//   },
//   "id": 32
// }



[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AlreadyAuthorized",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "institution",
        "type": "address"
      }
    ],
    "name": "authorizeInstitution",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "CredentialAlreadyIssued",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721IncorrectOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721InsufficientApproval",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOperator",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721NonexistentToken",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "ipfsHash",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "fileHash",
        "type": "bytes32"
      }
    ],
    "name": "issueCredential",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NotAuthorized",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotAuthorizedInstitution",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "institution",
        "type": "address"
      }
    ],
    "name": "removeInstitution",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "revokeCredential",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
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
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "SoulboundToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TokenDoesNotExist",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "institution",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ipfsHash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "fileHash",
        "type": "bytes32"
      }
    ],
    "name": "CredentialIssued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "CredentialRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "institution",
        "type": "address"
      }
    ],
    "name": "InstitutionAuthorized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "institution",
        "type": "address"
      }
    ],
    "name": "InstitutionRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
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
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
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
        "internalType": "address",
        "name": "student",
        "type": "address"
      }
    ],
    "name": "getCertificateCount",
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
        "name": "student",
        "type": "address"
      }
    ],
    "name": "getCertificatesOfStudent",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getCredential",
    "outputs": [
      {
        "internalType": "string",
        "name": "ipfsHash",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "revoked",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "fileHash",
        "type": "bytes32"
      }
    ],
    "name": "getCredentialByHash",
    "outputs": [
      {
        "internalType": "string",
        "name": "ipfsHash",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "issuer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "revoked",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "institution",
        "type": "address"
      }
    ],
    "name": "isAuthorizedInstitution",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
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
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
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
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
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
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
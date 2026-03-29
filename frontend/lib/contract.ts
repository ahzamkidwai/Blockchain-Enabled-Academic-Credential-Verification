// lib/contract.ts
// Contract address — update after deployment
export const CONTRACT_ADDRESS =
  (process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`) ||
  "0x0000000000000000000000000000000000000000";

// export const CREDENTIAL_ABI = [
//   // ── View Functions ──────────────────────────────────────────────────────────
//   {
//     inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
//     name: "getCredential",
//     outputs: [
//       {
//         components: [
//           { internalType: "uint256", name: "tokenId", type: "uint256" },
//           { internalType: "address", name: "student", type: "address" },
//           { internalType: "address", name: "issuer", type: "address" },
//           { internalType: "string", name: "ipfsCID", type: "string" },
//           { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
//           { internalType: "string", name: "credentialType", type: "string" },
//           { internalType: "string", name: "institutionName", type: "string" },
//           { internalType: "uint256", name: "issuedAt", type: "uint256" },
//           { internalType: "uint256", name: "expiresAt", type: "uint256" },
//           { internalType: "uint8", name: "status", type: "uint8" },
//           { internalType: "string", name: "revocationReason", type: "string" },
//         ],
//         internalType: "struct AcademicCredential.Credential",
//         name: "",
//         type: "tuple",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
//     ],
//     name: "verifyCredentialByHash",
//     outputs: [
//       { internalType: "bool", name: "isValid", type: "bool" },
//       {
//         components: [
//           { internalType: "uint256", name: "tokenId", type: "uint256" },
//           { internalType: "address", name: "student", type: "address" },
//           { internalType: "address", name: "issuer", type: "address" },
//           { internalType: "string", name: "ipfsCID", type: "string" },
//           { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
//           { internalType: "string", name: "credentialType", type: "string" },
//           { internalType: "string", name: "institutionName", type: "string" },
//           { internalType: "uint256", name: "issuedAt", type: "uint256" },
//           { internalType: "uint256", name: "expiresAt", type: "uint256" },
//           { internalType: "uint8", name: "status", type: "uint8" },
//           { internalType: "string", name: "revocationReason", type: "string" },
//         ],
//         internalType: "struct AcademicCredential.Credential",
//         name: "credential",
//         type: "tuple",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "address", name: "student", type: "address" }],
//     name: "getStudentCredentials",
//     outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
//     name: "getCredentialStatus",
//     outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "totalCredentials",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
//     ],
//     name: "getTokenIdByHash",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "issuerAddress", type: "address" },
//     ],
//     name: "institutions",
//     outputs: [
//       { internalType: "string", name: "name", type: "string" },
//       { internalType: "string", name: "country", type: "string" },
//       { internalType: "bool", name: "isActive", type: "bool" },
//       { internalType: "uint256", name: "registeredAt", type: "uint256" },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },

//   // ── Write Functions ─────────────────────────────────────────────────────────
//   {
//     inputs: [
//       { internalType: "address", name: "student", type: "address" },
//       { internalType: "string", name: "ipfsCID", type: "string" },
//       { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
//       { internalType: "string", name: "credentialType", type: "string" },
//       { internalType: "uint256", name: "expiresAt", type: "uint256" },
//     ],
//     name: "issueCredential",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "uint256", name: "tokenId", type: "uint256" },
//       { internalType: "string", name: "reason", type: "string" },
//     ],
//     name: "revokeCredential",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "uint256", name: "tokenId", type: "uint256" },
//       { internalType: "string", name: "reason", type: "string" },
//     ],
//     name: "suspendCredential",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
//     name: "reinstateCredential",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "issuerAddress", type: "address" },
//       { internalType: "string", name: "name", type: "string" },
//       { internalType: "string", name: "country", type: "string" },
//     ],
//     name: "registerInstitution",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },

//   // ── Events ──────────────────────────────────────────────────────────────────
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "student",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "issuer",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "bytes32",
//         name: "credentialHash",
//         type: "bytes32",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "credentialType",
//         type: "string",
//       },
//     ],
//     name: "CredentialIssued",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "revokedBy",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "reason",
//         type: "string",
//       },
//     ],
//     name: "CredentialRevoked",
//     type: "event",
//   },
// ] as const;

// Status enum mapping


export const CREDENTIAL_ABI = [
  {
    "type": "constructor",
    "inputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "approve",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "authorizeInstitution",
    "inputs": [
      {
        "name": "institution",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "country",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getApproved",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCertificateCount",
    "inputs": [
      {
        "name": "student",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCertificatesOfStudent",
    "inputs": [
      {
        "name": "student",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCredential",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "ipfsHash",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "revoked",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCredentialByHash",
    "inputs": [
      {
        "name": "fileHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "ipfsHash",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "issuer",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "student",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "revoked",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInstitution",
    "inputs": [
      {
        "name": "institution",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isApprovedForAll",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isAuthorizedInstitution",
    "inputs": [
      {
        "name": "institution",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "issueCredential",
    "inputs": [
      {
        "name": "student",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "ipfsHash",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "fileHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "credentialType",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "expiresAt",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ownerOf",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "removeInstitution",
    "inputs": [
      {
        "name": "institution",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revokeCredential",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setApprovalForAll",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      {
        "name": "interfaceId",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenURI",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalCredentials",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "approved",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "operator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "approved",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CredentialIssued",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "student",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "institution",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "ipfsHash",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "fileHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CredentialRevoked",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "InstitutionAuthorized",
    "inputs": [
      {
        "name": "institution",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "InstitutionRemoved",
    "inputs": [
      {
        "name": "institution",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "AlreadyAuthorized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CredentialAlreadyIssued",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC721IncorrectOwner",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC721InsufficientApproval",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC721InvalidApprover",
    "inputs": [
      {
        "name": "approver",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC721InvalidOperator",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC721InvalidOwner",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC721InvalidReceiver",
    "inputs": [
      {
        "name": "receiver",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC721InvalidSender",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC721NonexistentToken",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "NotAuthorized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NotAuthorizedInstitution",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OwnableInvalidOwner",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OwnableUnauthorizedAccount",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "SoulboundToken",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TokenDoesNotExist",
    "inputs": []
  }
] as const;


export const CredentialStatus = {
  0: "Active",
  1: "Revoked",
  2: "Suspended",
} as const;

export type CredentialStatusKey = keyof typeof CredentialStatus;

export const CHAIN_NAMES: Record<number, string> = {
  1: "Ethereum Mainnet",
  5: "Goerli",
  11155111: "Sepolia",
  137: "Polygon",
  80001: "Mumbai",
  31337: "Hardhat Local",
};

// Credential type options
export const CREDENTIAL_TYPES = [
  "Bachelor of Science",
  "Bachelor of Arts",
  "Master of Science",
  "Master of Arts",
  "Doctor of Philosophy",
  "Professional Certificate",
  "Diploma",
  "Associate Degree",
] as const;

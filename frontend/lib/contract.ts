// lib/contract.ts
// Contract address — update after deployment
export const CONTRACT_ADDRESS =
  (process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`) ||
  "0x0000000000000000000000000000000000000000";

export const CREDENTIAL_ABI = [
  // ── View Functions ──────────────────────────────────────────────────────────
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getCredential",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "address", name: "student", type: "address" },
          { internalType: "address", name: "issuer", type: "address" },
          { internalType: "string", name: "ipfsCID", type: "string" },
          { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
          { internalType: "string", name: "credentialType", type: "string" },
          { internalType: "string", name: "institutionName", type: "string" },
          { internalType: "uint256", name: "issuedAt", type: "uint256" },
          { internalType: "uint256", name: "expiresAt", type: "uint256" },
          { internalType: "uint8", name: "status", type: "uint8" },
          { internalType: "string", name: "revocationReason", type: "string" },
        ],
        internalType: "struct AcademicCredential.Credential",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
    ],
    name: "verifyCredentialByHash",
    outputs: [
      { internalType: "bool", name: "isValid", type: "bool" },
      {
        components: [
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "address", name: "student", type: "address" },
          { internalType: "address", name: "issuer", type: "address" },
          { internalType: "string", name: "ipfsCID", type: "string" },
          { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
          { internalType: "string", name: "credentialType", type: "string" },
          { internalType: "string", name: "institutionName", type: "string" },
          { internalType: "uint256", name: "issuedAt", type: "uint256" },
          { internalType: "uint256", name: "expiresAt", type: "uint256" },
          { internalType: "uint8", name: "status", type: "uint8" },
          { internalType: "string", name: "revocationReason", type: "string" },
        ],
        internalType: "struct AcademicCredential.Credential",
        name: "credential",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "student", type: "address" }],
    name: "getStudentCredentials",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getCredentialStatus",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCredentials",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
    ],
    name: "getTokenIdByHash",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "issuerAddress", type: "address" },
    ],
    name: "institutions",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "country", type: "string" },
      { internalType: "bool", name: "isActive", type: "bool" },
      { internalType: "uint256", name: "registeredAt", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },

  // ── Write Functions ─────────────────────────────────────────────────────────
  {
    inputs: [
      { internalType: "address", name: "student", type: "address" },
      { internalType: "string", name: "ipfsCID", type: "string" },
      { internalType: "bytes32", name: "credentialHash", type: "bytes32" },
      { internalType: "string", name: "credentialType", type: "string" },
      { internalType: "uint256", name: "expiresAt", type: "uint256" },
    ],
    name: "issueCredential",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "string", name: "reason", type: "string" },
    ],
    name: "revokeCredential",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "string", name: "reason", type: "string" },
    ],
    name: "suspendCredential",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "reinstateCredential",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "issuerAddress", type: "address" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "country", type: "string" },
    ],
    name: "registerInstitution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  // ── Events ──────────────────────────────────────────────────────────────────
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "student",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "credentialHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "credentialType",
        type: "string",
      },
    ],
    name: "CredentialIssued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "revokedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "CredentialRevoked",
    type: "event",
  },
] as const;

// Status enum mapping
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

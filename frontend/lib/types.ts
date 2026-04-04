// lib/types.ts

export interface Credential {
  tokenId: bigint;
  student: `0x${string}`;
  issuer: `0x${string}`;
  ipfsCID: string;
  credentialHash: `0x${string}`;
  credentialType: string;
  institutionName: string;
  issuedAt: bigint;
  expiresAt: bigint;
  status: number;
  revocationReason: string;
  revoked: boolean;
  ipfsHash?: string; // optional, for backward compatibility 
}

export type StudentCredentialStruct = {
  tokenId: bigint;
  ipfsHash: string;
  ipfsCID?: string;
  fileHash: `0x${string}`;
  revoked: boolean;
  issuer: `0x${string}`;
  credentialType: string;
  expiresAt: bigint;
  issuedAt: bigint;
  institutionName: string;
  status: number;
  student: `0x${string}`;
  credentialHash: `0x${string}`;
};

export interface Institution {
  name: string;
  country: string;
  isActive: boolean;
  registeredAt: bigint;
}

export interface IssueCredentialForm {
  studentAddress: string;
  ipfsCID: string;
  credentialType: string;
  expiresAt: string; // ISO date string or empty
}

export interface VerifyCredentialForm {
  credentialHash: string;
}

export type CredentialStatusType = "Active" | "Revoked" | "Suspended";

export interface WalletState {
  address?: `0x${string}`;
  isConnected: boolean;
  isConnecting: boolean;
  chainId?: number;
}

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info" | "warning";
  title: string;
  description?: string;
}

export interface VerificationResult {
  isValid: boolean;
  credential: Credential | null;
  checkedAt: Date;
}

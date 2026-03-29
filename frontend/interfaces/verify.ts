export interface FileVerifyResult {
  valid: boolean;
  credential?: {
    student: string;
    issuer: string;
    ipfsHash: string;
    fileHash: string;
    tokenId: number;
    revoked: boolean;
    createdAt?: string;
  };
}
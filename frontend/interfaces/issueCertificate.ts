export interface FormState {
  studentAddress: string;
  studentName: string;
  courseName: string;
  universityName: string;
  date: string;
}

export interface IssuanceResult {
  tokenId: number | string;
  ipfsHash: string;
  fileHash: string;
  student: string;
  issuer: string;
}

export type StepState = "idle" | "generating" | "generated" | "issuing" | "done" | "error";
// hooks/useIssueCredential.ts
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS } from "@/lib/contract";
import { computeCredentialHash } from "@/lib/utils";

interface IssueParams {
  studentAddress: `0x${string}`;
  ipfsCID: string;
  credentialType: string;
  expiresAt?: bigint;
  institutionName: string;
}

export function useIssueCredential() {
  const { writeContractAsync, data: txHash, isPending, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const issueCredential = async (params: IssueParams) => {
    const now = Math.floor(Date.now() / 1000);
    const credentialHash = computeCredentialHash({
      studentAddress: params.studentAddress,
      credentialType: params.credentialType,
      institutionName: params.institutionName,
      issuedAt: now,
      ipfsCID: params.ipfsCID,
    });

    return writeContractAsync({
      address: CONTRACT_ADDRESS,
      abi: CREDENTIAL_ABI,
      functionName: "issueCredential",
      args: [
        params.studentAddress,
        params.ipfsCID,
        credentialHash as `0x${string}`,
        params.credentialType,
        params.expiresAt ?? BigInt(0),
      ],
    });
  };

  return {
    issueCredential,
    txHash,
    isPending,
    isConfirming,
    isSuccess,
    error,
  };
}

// hooks/useCredential.ts
import { useReadContract } from "wagmi";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS } from "@/lib/contract";
import type { Credential } from "@/lib/types";

export function useCredential(tokenId: bigint | undefined) {
  const { data, isLoading, error, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "getCredential",
    args: tokenId !== undefined ? [tokenId] : undefined,
    query: { enabled: tokenId !== undefined },
  });

  return {
    credential: data as Credential | undefined,
    isLoading,
    error,
    refetch,
  };
}

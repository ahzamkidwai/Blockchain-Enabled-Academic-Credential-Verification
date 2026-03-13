// hooks/useVerifyCredential.ts
import { useState } from "react";
import { useReadContract } from "wagmi";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS } from "@/lib/contract";
import type { Credential, VerificationResult } from "@/lib/types";
import { isValidBytes32 } from "@/lib/utils";

export function useVerifyCredential(credentialHash?: `0x${string}`) {
  const { data, isLoading, error, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "verifyCredentialByHash",
    args: credentialHash ? [credentialHash] : undefined,
    query: { enabled: !!credentialHash && isValidBytes32(credentialHash) },
  });

  const result = data as [boolean, Credential] | undefined;

  return {
    isValid: result?.[0] ?? false,
    credential: result?.[1] ?? null,
    isLoading,
    error,
    refetch,
  };
}

// Imperative version for form submission
export function useVerifyCredentialLazy() {
  const [hash, setHash] = useState<`0x${string}` | undefined>();
  const [result, setResult] = useState<VerificationResult | null>(null);

  const { isValid, credential, isLoading, error } = useVerifyCredential(hash);

  const verify = (credentialHash: string) => {
    if (!isValidBytes32(credentialHash)) {
      setResult(null);
      return;
    }
    setHash(credentialHash as `0x${string}`);
  };

  // Update result when data changes
  if (hash && !isLoading && result?.checkedAt === undefined) {
    setResult({
      isValid,
      credential: credential as Credential | null,
      checkedAt: new Date(),
    });
  }

  return {
    verify,
    result,
    isLoading,
    error,
    reset: () => {
      setHash(undefined);
      setResult(null);
    },
  };
}

// hooks/useStudentCredentials.ts
import { useReadContract, useReadContracts } from "wagmi";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS } from "@/lib/contract";
import type { Credential } from "@/lib/types";

export function useStudentCredentialIds(studentAddress?: `0x${string}`) {
  const { data, isLoading, error, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "getStudentCredentials",
    args: studentAddress ? [studentAddress] : undefined,
    query: { enabled: !!studentAddress },
  });

  return {
    tokenIds: (data as bigint[] | undefined) ?? [],
    isLoading,
    error,
    refetch,
  };
}

export function useStudentCredentials(studentAddress?: `0x${string}`) {
  const { tokenIds, isLoading: loadingIds } = useStudentCredentialIds(studentAddress);

  const contracts = tokenIds.map((id) => ({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "getCredential" as const,
    args: [id] as const,
  }));

  const { data, isLoading: loadingCredentials, refetch } = useReadContracts({
    contracts,
    query: { enabled: tokenIds.length > 0 },
  });

  const credentials: Credential[] = (data ?? [])
    .filter((r) => r.status === "success" && r.result)
    .map((r) => r.result as Credential);

  return {
    credentials,
    tokenIds,
    isLoading: loadingIds || loadingCredentials,
    refetch,
  };
}

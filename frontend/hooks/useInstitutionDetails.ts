"use client";

import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS, CREDENTIAL_ABI } from "@/lib/contract";

export function useInstitution(address?: `0x${string}`) {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CREDENTIAL_ABI,
    functionName: "getInstitution",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address, // only run when address exists
    },
  });

  return {
    institutionName: data?.[0] as string | undefined,
    institutionMetadata: data?.[1] as string | undefined,
    isVerified: data?.[2] as boolean,
    raw: data,
    isLoading,
    isError,
    error,
  };
}
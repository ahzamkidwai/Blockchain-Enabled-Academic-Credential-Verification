"use client";

import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS, CREDENTIAL_ABI } from "@/lib/contract";

export function useContractOwner() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CREDENTIAL_ABI,
    functionName: "owner",
  });

  return {
    owner: data as string | undefined,
    isLoading,
    isError,
    error,
  };
}
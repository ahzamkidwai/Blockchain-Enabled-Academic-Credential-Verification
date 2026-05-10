// hooks/useContractStats.ts
import { useReadContract } from "wagmi";
import { useAccount, useBalance, useChainId } from "wagmi";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS, CHAIN_NAMES } from "@/lib/contract";

export function useTotalCredentials() {
  const { data, isLoading, refetch, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "totalCredentials",
    query: {
      staleTime: 10_000, // cache for 10s
    },
  });

  return {
    total: data ? Number(data) : 0,
    raw: data as bigint | undefined,
    isLoading,
    error,
    refetch,
  };
}


export function useInstitution(address?: `0x${string}`) {
  const { data, isLoading } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "isAuthorizedInstitution",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  return {
    institution: data as boolean | undefined,
    isLoading,
  };
}

// hooks/useWalletInfo.ts
export function useWalletInfo() {
  const { address, isConnected, isConnecting } = useAccount();
  const chainId = useChainId();
  const { data: balance } = useBalance({ address });

  return {
    address,
    isConnected,
    isConnecting,
    chainId,
    chainName: chainId ? CHAIN_NAMES[chainId] ?? `Chain ${chainId}` : undefined,
    balance: balance
      ? `${Number(balance.formatted).toFixed(4)} ${balance.symbol}`
      : undefined,
  };
}

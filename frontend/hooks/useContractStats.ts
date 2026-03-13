// hooks/useContractStats.ts
import { useReadContract } from "wagmi";
import { useAccount, useBalance, useChainId } from "wagmi";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS, CHAIN_NAMES } from "@/lib/contract";

export function useTotalCredentials() {
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "totalCredentials",
  });

  return {
    total: data as bigint | undefined,
    isLoading,
    refetch,
  };
}

export function useInstitution(address?: `0x${string}`) {
  const { data, isLoading } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "institutions",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  const result = data as [string, string, boolean, bigint] | undefined;

  return {
    institution: result
      ? {
          name: result[0],
          country: result[1],
          isActive: result[2],
          registeredAt: result[3],
        }
      : null,
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

// hooks/useRevokeCredential.ts
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS } from "@/lib/contract";

export function useRevokeCredential() {
  const { writeContractAsync, data: txHash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: txHash });

  const revokeCredential = (tokenId: bigint, reason: string) =>
    writeContractAsync({
      address: CONTRACT_ADDRESS,
      abi: CREDENTIAL_ABI,
      functionName: "revokeCredential",
      args: [tokenId, reason],
    });

  return { revokeCredential, txHash, isPending, isConfirming, isSuccess, error };
}

export function useSuspendCredential() {
  const { writeContractAsync, data: txHash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: txHash });

  const suspendCredential = (tokenId: bigint, reason: string) =>
    writeContractAsync({
      address: CONTRACT_ADDRESS,
      abi: CREDENTIAL_ABI,
      functionName: "suspendCredential",
      args: [tokenId, reason],
    });

  return { suspendCredential, txHash, isPending, isConfirming, isSuccess, error };
}

export function useReinstateCredential() {
  const { writeContractAsync, data: txHash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: txHash });

  const reinstateCredential = (tokenId: bigint) =>
    writeContractAsync({
      address: CONTRACT_ADDRESS,
      abi: CREDENTIAL_ABI,
      functionName: "reinstateCredential",
      args: [tokenId],
    });

  return { reinstateCredential, txHash, isPending, isConfirming, isSuccess, error };
}

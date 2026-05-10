"use client";

import { useEffect, useState } from "react";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  AlertBox,
} from "@/components/ui";
import { CONTRACT_ADDRESS, CREDENTIAL_ABI } from "@/lib/contract";
import { isValidAddress, truncateAddress } from "@/lib/utils";
import toast from "react-hot-toast";

export default function AuthorizeInstitutionForm() {
  const { address } = useAccount();

  // Form states
  const [institutionAddress, setInstitutionAddress] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [institutionCountry, setInstitutionCountry] = useState("");

  // UI states
  const [fieldError, setFieldError] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  const isAddressValid = isValidAddress(institutionAddress.trim());

  const {
    data: hash,
    writeContractAsync,
    isPending,
    error: writeError,
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  // Handle tx hash
  useEffect(() => {
    if (hash) {
      setTxHash(hash);
    }
  }, [hash]);

  // Handle errors
  useEffect(() => {
    if (writeError) {
      setError(writeError.message);
      toast.error(writeError.message);
    }
  }, [writeError]);

  // Success toast
  useEffect(() => {
    if (isConfirmed) {
      toast.success("Institution authorized successfully 🎉");

      // Reset form
      setInstitutionAddress("");
      setInstitutionName("");
      setInstitutionCountry("");
    }
  }, [isConfirmed]);

  // Validation
  const validate = (): boolean => {
    if (!institutionAddress.trim()) {
      setFieldError("Institution address is required");
      return false;
    }

    if (!isAddressValid) {
      setFieldError("Enter a valid Ethereum address");
      return false;
    }

    if (!institutionName.trim()) {
      setError("Institution name is required");
      return false;
    }

    if (!institutionCountry.trim()) {
      setError("Country is required");
      return false;
    }

    setFieldError(undefined);
    setError(null);
    return true;
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setTxHash(null);

    if (!validate()) return;

    try {
      await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CREDENTIAL_ABI,
        functionName: "authorizeInstitution",
        args: [
          institutionAddress.trim() as `0x${string}`,
          institutionName.trim(),
          institutionCountry.trim(),
        ],
      });

      toast.loading("Sending transaction...");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Transaction failed.";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Authorize Institution</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">
          Authorize an institution to issue credentials on-chain.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Address */}
          <Input
            label="Institution Address"
            placeholder="0x1234..."
            value={institutionAddress}
            onChange={(e) => {
              setInstitutionAddress(e.target.value);
              setFieldError(undefined);
              setError(null);
            }}
            error={fieldError}
          />

          {/* Name */}
          <Input
            label="Institution Name"
            placeholder="e.g. Harvard University"
            value={institutionName}
            onChange={(e) => {
              setInstitutionName(e.target.value);
              setError(null);
            }}
          />

          {/* Country */}
          <Input
            label="Country"
            placeholder="e.g. USA"
            value={institutionCountry}
            onChange={(e) => {
              setInstitutionCountry(e.target.value);
              setError(null);
            }}
          />

          {/* Button + Wallet */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
            <Button
              type="submit"
              isLoading={isPending || isConfirming}
              disabled={
                !isAddressValid ||
                !institutionName.trim() ||
                !institutionCountry.trim() ||
                isPending ||
                isConfirming
              }
            >
              Authorize Institution
            </Button>

            <div className="text-sm text-muted-foreground">
              {address
                ? `Connected: ${truncateAddress(address)}`
                : "Connect wallet"}
            </div>
          </div>
        </form>

        {/* Error */}
        {error && (
          <AlertBox variant="error" title="Transaction Failed">
            {error}
          </AlertBox>
        )}

        {/* Transaction Info */}
        {txHash && (
          <AlertBox
            variant={isConfirmed ? "success" : "info"}
            title={isConfirmed ? "Success" : "Transaction Sent"}
          >
            <div className="text-sm space-y-1">
              <p>Transaction Hash:</p>
              <p className="font-mono break-all">{txHash}</p>
            </div>
          </AlertBox>
        )}
      </CardContent>
    </Card>
  );
}

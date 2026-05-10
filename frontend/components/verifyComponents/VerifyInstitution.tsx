"use client";

import { useState, useEffect } from "react";
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
import { readContract } from "viem/actions";
import { usePublicClient } from "wagmi";

export default function VerifyInstitution() {
  const [addressInput, setAddressInput] = useState("");
  const [checkedAddress, setCheckedAddress] = useState<`0x${string}` | null>(
    null,
  );
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldError, setFieldError] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);

  const isAddressValid = isValidAddress(addressInput.trim());

  const publicClient = usePublicClient();

  // Wait for client to be ready
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    if (publicClient) setClientReady(true);
  }, [publicClient]);

  // Validation
  const validate = (): boolean => {
    if (!addressInput.trim()) {
      setFieldError("Institution address is required");
      return false;
    }
    if (!isAddressValid) {
      setFieldError("Enter a valid Ethereum address");
      return false;
    }
    setFieldError(undefined);
    setError(null);
    return true;
  };

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;
    if (!clientReady || !publicClient) {
      setError("Ethereum client not ready yet");
      return;
    }

    const normalized = addressInput.trim() as `0x${string}`;
    setCheckedAddress(normalized);
    setIsAuthorized(null);
    setIsLoading(true);
    setError(null);

    try {
      const result = await readContract(publicClient, {
        address: CONTRACT_ADDRESS,
        abi: CREDENTIAL_ABI,
        functionName: "isAuthorizedInstitution",
        args: [normalized],
      });

      setIsAuthorized(Boolean(result));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to read";
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const showResult = typeof isAuthorized === "boolean" && checkedAddress;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify Institution</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">
          Check if an institution is authorized to issue credentials.
        </p>

        <form onSubmit={handleCheck} className="space-y-5">
          <Input
            label="Institution Address"
            placeholder="0x1234..."
            value={addressInput}
            onChange={(e) => {
              setAddressInput(e.target.value);
              setFieldError(undefined);
              setError(null);
            }}
            error={fieldError}
          />

          <Button
            type="submit"
            isLoading={isLoading}
            disabled={!isAddressValid || isLoading || !clientReady}
          >
            Check Authorization
          </Button>
        </form>

        {error && (
          <AlertBox variant="error" title="Error">
            {error}
          </AlertBox>
        )}

        {showResult && (
          <AlertBox
            variant={isAuthorized ? "success" : "warning"}
            title={isAuthorized ? "Authorized Institution" : "Not Authorized"}
          >
            <p className="text-sm">
              {isAuthorized
                ? `${truncateAddress(checkedAddress)} is authorized to issue credentials.`
                : `${truncateAddress(checkedAddress)} is NOT authorized to issue credentials.`}
            </p>
          </AlertBox>
        )}
      </CardContent>
    </Card>
  );
}

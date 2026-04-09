"use client";

import { useEffect, useState } from "react";
import {
  useAccount,
  useContractRead,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, AlertBox } from "@/components/ui";
import { CONTRACT_ADDRESS, CREDENTIAL_ABI } from "@/lib/contract";
import { cn, isValidAddress, truncateAddress } from "@/lib/utils";
import toast from "react-hot-toast";

type TabId = "authorize" | "check";

const TABS: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: "authorize", label: "Authorize", icon: ShieldCheck },
  { id: "check", label: "Check Authorization", icon: CheckCircle2 },
];

export default function AuthorizeInstitutionForm() {
  const { address } = useAccount();

  const [institutionAddress, setInstitutionAddress] = useState("");
  const [fieldError, setFieldError] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [tab, setTab] = useState<TabId>("authorize");
  const [checkAddress, setCheckAddress] = useState("");
  const [checkedAddress, setCheckedAddress] = useState<string | null>(null);
  const [checkFieldError, setCheckFieldError] = useState<string | undefined>(undefined);
  const [checkError, setCheckError] = useState<string | null>(null);

  const isAddressValid = isValidAddress(institutionAddress.trim());
  const isCheckAddressValid = isValidAddress(checkAddress.trim());

  const {
    data: hash,
    writeContractAsync,
    isPending: isWritePending,
    error: writeError,
  } = useWriteContract();

  const {
    data: isAuthorized,
    isLoading: isChecking,
    error: checkReadError,
    refetch: refetchCheck,
  } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "isAuthorizedInstitution",
    args: checkedAddress ? [checkedAddress as `0x${string}`] : undefined,
    // enabled: Boolean(checkedAddress),
  });

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  // Handle tx hash
  useEffect(() => {
    if (hash) {
      setTxHash(hash);
      setHasSubmitted(true);
    }
  }, [hash]);

  // Handle write error
  useEffect(() => {
    if (writeError) {
      setError(writeError.message);
      toast.error(writeError.message);
    }
  }, [writeError]);

  // Success toast
  useEffect(() => {
    if (isConfirmed) {
      toast.success("Institution authorized successfully.");
    }
  }, [isConfirmed]);

  const validateAuthorization = (): boolean => {
    if (!institutionAddress.trim()) {
      setFieldError("Institution address is required");
      return false;
    }
    if (!isAddressValid) {
      setFieldError("Enter a valid Ethereum address");
      return false;
    }
    setFieldError(undefined);
    return true;
  };

  const validateCheck = (): boolean => {
    if (!checkAddress.trim()) {
      setCheckFieldError("Institution address is required");
      return false;
    }
    if (!isCheckAddressValid) {
      setCheckFieldError("Enter a valid Ethereum address");
      return false;
    }
    setCheckFieldError(undefined);
    return true;
  };

  const handleAuthorize = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setTxHash(null);
    setHasSubmitted(false);

    if (!validateAuthorization()) return;

    try {
      await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CREDENTIAL_ABI,
        functionName: "authorizeInstitution",
        args: [
          institutionAddress.trim() as `0x${string}`,
          "Authorized Institution",
          "Global",
        ],
      });

      toast.loading("Sending authorization transaction...");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Transaction failed to send.";
      setError(message);
      toast.error(message);
    }
  };

  const handleCheck = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckError(null);
    setCheckedAddress(null);

    if (!validateCheck()) return;

    const normalized = checkAddress.trim() as `0x${string}`;
    setCheckedAddress(normalized);

    if (checkedAddress === normalized) {
      await refetchCheck?.();
    }
  };

  const checkResultAvailable = typeof isAuthorized === "boolean" && !isChecking && checkedAddress;
  const checkResultVariant = isAuthorized ? "success" : "warning";
  const checkResultTitle = isAuthorized ? "Authorized Institution" : "Not Authorized";
  const checkResultMessage = isAuthorized
    ? `${truncateAddress(checkedAddress ?? "")} is authorized to issue credentials.`
    : `${truncateAddress(checkedAddress ?? "")} is not authorized to issue credentials.`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Authorize Institution</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">
          Enter an institution wallet address to authorize it on-chain.
        </p>

        <form onSubmit={handleAuthorize} className="space-y-5">
          <Input
            label="Institution Wallet Address"
            placeholder="0x1234..."
            value={institutionAddress}
            onChange={(e) => {
              setInstitutionAddress(e.target.value);
              setFieldError(undefined);
              setError(null);
            }}
            error={fieldError}
            hint="Enter the Ethereum address of the institution to authorize."
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              isLoading={isWritePending || isConfirming}
              disabled={!isAddressValid || isWritePending || isConfirming}
            >
              Authorize Institute
            </Button>

            <div className="text-sm text-muted-foreground">
              {address
                ? `Connected wallet: ${truncateAddress(address)}`
                : "Connect your wallet to continue."}
            </div>
          </div>
        </form>

        {error && (
          <AlertBox variant="error" title="Authorization failed">
            {error}
          </AlertBox>
        )}

        {hasSubmitted && txHash && (
          <AlertBox
            variant={isConfirmed ? "success" : "info"}
            title={isConfirmed ? "Authorized" : "Transaction sent"}
          >
            <div className="space-y-1 text-sm">
              <p>Institution authorization transaction has been submitted.</p>
              <p className="font-mono break-all">{txHash}</p>
            </div>
          </AlertBox>
        )}
      </CardContent>
    </Card>
  );
} 
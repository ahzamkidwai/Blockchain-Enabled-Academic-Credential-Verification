// app/verify/page.tsx
"use client";

import { useState } from "react";
import { useReadContract } from "wagmi";
import {
  ShieldCheck, ShieldX, Search, Hash, AlertCircle,
  CheckCircle2, XCircle, Info, ExternalLink, RefreshCw
} from "lucide-react";
import {
  Button, Card, CardContent, CardHeader, CardTitle,
  Input, AlertBox, Badge, Skeleton
} from "@/components/ui";
import { CredentialCard } from "@/components/CredentialCard";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS } from "@/lib/contract";
import type { Credential } from "@/lib/types";
import { isValidBytes32, formatTimestampFull, cn } from "@/lib/utils";

export default function VerifyPage() {
  const [inputHash, setInputHash] = useState("");
  const [searchHash, setSearchHash] = useState<`0x${string}` | undefined>();
  const [hasSearched, setHasSearched] = useState(false);

  const isValidHash = isValidBytes32(inputHash);

  const { data, isLoading, error, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "verifyCredentialByHash",
    args: searchHash ? [searchHash] : undefined,
    query: { enabled: !!searchHash },
  });

  const result = data as [boolean, Credential] | undefined;
  const isValid = result?.[0] ?? false;
  const credential = result?.[1] ?? null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidHash) return;
    setSearchHash(inputHash as `0x${string}`);
    setHasSearched(true);
  };

  const handleReset = () => {
    setInputHash("");
    setSearchHash(undefined);
    setHasSearched(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <h1 className="font-display text-2xl font-semibold text-foreground">
            Verify Credential
          </h1>
        </div>
        <p className="text-muted-foreground text-sm">
          Enter a credential hash to instantly verify its authenticity on-chain.
        </p>
      </div>

      {/* How it works */}
      <AlertBox variant="info" icon={<Info className="h-4 w-4" />} title="How Verification Works">
        Credentials are identified by a unique keccak256 hash stored on the blockchain.
        Enter the 32-byte hex hash (0x…) to query the smart contract directly.
      </AlertBox>

      {/* Search form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Enter Credential Hash</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <Input
              label="Credential Hash"
              placeholder="0x1234abcd..."
              value={inputHash}
              onChange={(e) => setInputHash(e.target.value)}
              leftAdornment={<Hash className="h-4 w-4" />}
              error={
                inputHash && !isValidHash
                  ? "Hash must be a valid 0x-prefixed 32-byte hex string"
                  : undefined
              }
              hint="64 hex characters after 0x prefix"
            />
            <div className="flex gap-2">
              <Button
                type="submit"
                leftIcon={<Search className="h-4 w-4" />}
                isLoading={isLoading}
                disabled={!isValidHash}
                className="flex-1"
              >
                Verify
              </Button>
              {hasSearched && (
                <Button type="button" variant="outline" onClick={handleReset} leftIcon={<RefreshCw className="h-4 w-4" />}>
                  Reset
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Loading */}
      {isLoading && (
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-muted shimmer" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </Card>
      )}

      {/* Error */}
      {error && (
        <AlertBox variant="error" icon={<AlertCircle className="h-4 w-4" />} title="Query Failed">
          {error.message}
        </AlertBox>
      )}

      {/* Result */}
      {hasSearched && !isLoading && !error && result && (
        <div className="space-y-4 animate-slide-up">
          {/* Verdict banner */}
          <div
            className={cn(
              "flex items-center gap-4 rounded-xl border p-5",
              isValid
                ? "bg-success/10 border-success/30"
                : "bg-destructive/10 border-destructive/30"
            )}
          >
            {isValid ? (
              <CheckCircle2 className="h-10 w-10 text-success flex-shrink-0" />
            ) : (
              <ShieldX className="h-10 w-10 text-destructive flex-shrink-0" />
            )}
            <div>
              <h2 className={cn("font-display text-xl font-semibold", isValid ? "text-success" : "text-destructive")}>
                {isValid ? "Credential is Valid" : "Credential is Invalid"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {isValid
                  ? "This credential is active and has not been revoked."
                  : credential && Number(credential.tokenId) > 0
                  ? `This credential exists but is marked as ${credential.status === 1 ? "Revoked" : credential.status === 2 ? "Suspended" : "Expired"}.`
                  : "No credential found matching this hash on-chain."}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Checked at {formatTimestampFull(BigInt(Math.floor(Date.now() / 1000)))}
              </p>
            </div>
            <Badge
              variant={isValid ? "active" : "revoked"}
              className="ml-auto flex-shrink-0"
            >
              {isValid ? "VALID" : "INVALID"}
            </Badge>
          </div>

          {/* Credential details */}
          {credential && Number(credential.tokenId) > 0 && (
            <div>
              <h3 className="font-display text-base font-medium text-foreground mb-3">
                Credential Details
              </h3>
              <CredentialCard credential={credential} />
            </div>
          )}

          {/* Etherscan link */}
          <div className="flex justify-end">
            <a
              href={`https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              View contract on Etherscan
            </a>
          </div>
        </div>
      )}

      {/* Empty state */}
      {hasSearched && !isLoading && !error && !result && (
        <div className="text-center py-10">
          <XCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
          <p className="font-display text-lg text-foreground">No credential found</p>
          <p className="text-sm text-muted-foreground">
            This hash does not match any credential on-chain.
          </p>
        </div>
      )}
    </div>
  );
}

// app/credential/[tokenId]/page.tsx
"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, Hash, ExternalLink, Copy, CheckCircle2,
  Building2, User, Calendar, ShieldCheck, Info
} from "lucide-react";
import {
  Button, Card, CardContent, CardHeader, CardTitle,
  Badge, AlertBox, Skeleton
} from "@/components/ui";
import { useCredential } from "@/hooks/useCredential";
import { useRevokeCredential, useSuspendCredential, useReinstateCredential } from "@/hooks/useRevokeCredential";
import {
  truncateAddress, formatTimestampFull, formatTimestamp,
  getStatusLabel, getStatusVariant, ipfsToHttp,
  copyToClipboard, isCredentialExpired, cn
} from "@/lib/utils";
import { CONTRACT_ADDRESS } from "@/lib/contract";
import { useState } from "react";

interface PageProps {
  params: Promise<{ tokenId: string }>;
}

function InfoRow({ label, value, mono = false, children }: {
  label: string;
  value?: string;
  mono?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground flex-shrink-0 w-40">{label}</span>
      <div className={cn("text-sm text-foreground text-right", mono && "font-mono break-all")}>
        {children ?? value}
      </div>
    </div>
  );
}

export default function CredentialDetailPage({ params }: PageProps) {
  const { tokenId } = use(params);
  const router = useRouter();
  const { credential, isLoading, error } = useCredential(BigInt(tokenId));
  const { revokeCredential, isPending: revoking } = useRevokeCredential();
  const { suspendCredential, isPending: suspending } = useSuspendCredential();
  const { reinstateCredential, isPending: reinstating } = useReinstateCredential();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    await copyToClipboard(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  if (error || !credential) {
    return (
      <div className="max-w-2xl mx-auto">
        <AlertBox variant="error" title="Credential Not Found">
          No credential found with token ID #{tokenId}.
        </AlertBox>
        <Button variant="ghost" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={() => router.back()} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  const statusVariant = getStatusVariant(credential.status);
  const expired = isCredentialExpired(credential.expiresAt);
  const statusLabel = expired && credential.status === 0 ? "Expired" : getStatusLabel(credential.status);

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Back */}
      <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={() => router.back()}>
        Back
      </Button>

      {/* Header card */}
      <Card className="overflow-hidden">
        <div className={cn(
          "h-2",
          statusVariant === "active" && !expired ? "bg-gradient-to-r from-success to-accent" :
          statusVariant === "revoked" ? "bg-destructive" :
          statusVariant === "suspended" ? "bg-warning" : "bg-muted"
        )} />
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <CardTitle className="text-xl">{credential.credentialType}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                <Building2 className="h-4 w-4" />
                {credential.institutionName}
              </p>
            </div>
            <Badge variant={statusVariant as "active" | "revoked" | "suspended"}>
              {statusLabel}
            </Badge>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs bg-muted px-2 py-1 rounded font-mono text-muted-foreground">
              Token #{credential.tokenId.toString()}
            </span>
          </div>
        </CardHeader>
      </Card>

      {/* Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="h-4 w-4 text-primary" />
            Credential Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <InfoRow label="Student">
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-mono text-xs">{truncateAddress(credential.student, 10, 8)}</span>
              <button onClick={() => handleCopy(credential.student, "student")}>
                {copied === "student" ? <CheckCircle2 className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />}
              </button>
            </div>
          </InfoRow>
          <InfoRow label="Issuer">
            <div className="flex items-center gap-2">
              <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-mono text-xs">{truncateAddress(credential.issuer, 10, 8)}</span>
            </div>
          </InfoRow>
          <InfoRow label="Issued At">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
              {formatTimestampFull(credential.issuedAt)}
            </div>
          </InfoRow>
          <InfoRow label="Expires At">
            <span className={expired ? "text-destructive" : ""}>
              {Number(credential.expiresAt) === 0 ? "Never" : formatTimestampFull(credential.expiresAt)}
            </span>
          </InfoRow>
          <InfoRow label="Status">
            <Badge variant={statusVariant as "active" | "revoked" | "suspended"}>
              {statusLabel}
            </Badge>
          </InfoRow>
          {credential.revocationReason && (
            <InfoRow label="Reason" value={credential.revocationReason} />
          )}
        </CardContent>
      </Card>

      {/* Cryptographic proof */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Cryptographic Proof
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Credential Hash (keccak256)</p>
            <div className="flex items-center gap-2 bg-muted rounded-md p-2">
              <Hash className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
              <p className="font-mono text-xs text-foreground break-all flex-1">
                {credential.credentialHash}
              </p>
              <button onClick={() => handleCopy(credential.credentialHash, "hash")} className="flex-shrink-0">
                {copied === "hash" ? <CheckCircle2 className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />}
              </button>
            </div>
          </div>
          {credential.ipfsCID && (
            <div>
              <p className="text-xs text-muted-foreground mb-1">IPFS Document CID</p>
              <div className="flex items-center justify-between gap-2 bg-muted rounded-md p-2">
                <p className="font-mono text-xs text-foreground truncate">{credential.ipfsCID}</p>
                <a
                  href={ipfsToHttp(credential.ipfsCID)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-primary hover:underline flex-shrink-0"
                >
                  <ExternalLink className="h-3 w-3" />
                  View
                </a>
              </div>
            </div>
          )}
          <div className="pt-2">
            <a
              href={`https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              View Smart Contract on Etherscan
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

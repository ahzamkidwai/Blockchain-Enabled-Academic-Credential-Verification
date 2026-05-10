"use client";

import { useState } from "react";
import { GraduationCap, Building2, ExternalLink, Copy, CheckCircle2 } from "lucide-react";
import { Card, CardContent, Badge, Skeleton } from "@/components/ui";
import { truncateAddress, formatTimestampFull, getStatusLabel, getStatusVariant, copyToClipboard, isCredentialExpired, cn } from "@/lib/utils";
import { StatusIcon } from "./CredentialCard/StatusIcon";
import { CredentialCardProps } from "@/interfaces/credentialCard";
import CopyButton from "../issueCertificateComponents/CopyButton";

export function CredentialCard({
  credential,
  isLoading,
  compact = false,
}: CredentialCardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const statusVariant = getStatusVariant(credential.status);
  const statusLabel = getStatusLabel(credential.status);
  const expired = isCredentialExpired(credential.expiresAt);

  const handleCopy = async (text: string, key: string) => {
    await copyToClipboard(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="space-y-3">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-[1px]",
        compact && ""
      )}
    >
      {/* Top Accent Bar */}
      <div
        className={cn(
          "h-1 w-full rounded-t-md",
          statusVariant === "active" && !expired
            ? "bg-success"
            : statusVariant === "revoked"
            ? "bg-destructive"
            : statusVariant === "suspended"
            ? "bg-warning"
            : "bg-muted"
        )}
      />

      <CardContent className="p-5 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <GraduationCap className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-base font-semibold leading-snug text-foreground">
                {credential.credentialType}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5" />
                {credential.institutionName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <StatusIcon status={credential.status} />
            <Badge variant={ statusVariant as | "active" | "revoked" | "suspended" | "muted" }>
              {expired && credential.status === 0 ? "Expired" : statusLabel}
            </Badge>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
          {/* Issued At */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Issued At</p>
            <p className="font-medium text-foreground">
              {formatTimestampFull(credential.issuedAt)}
            </p>
          </div>

          {/* Token ID */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Token ID</p>
            <p className="font-mono text-xs font-medium text-foreground">
              #{credential.tokenId.toString()}
            </p>
          </div>

          {/* Issuer */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Issuer</p>
            <button
              onClick={() => handleCopy(credential.issuer, "issuer")}
              className="flex items-center gap-1 font-mono text-xs text-foreground hover:text-primary transition"
            >
              {truncateAddress(credential.issuer)}
              {copied === "issuer" ? (
                <CheckCircle2 className="h-3 w-3 text-success" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </button>
          </div>

          {/* Credential Hash */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">
              Credential Hash
            </p>
            <div className="flex items-center gap-2">
              <code className="text-xs font-mono bg-secondary px-2 py-1 rounded break-all">
                {credential.fileHash}
              </code>
              <CopyButton text={credential.fileHash} />
            </div>
          </div>

          {/* IPFS */}
          <div className="space-y-1 sm:col-span-2">
            <p className="text-xs text-muted-foreground">
              IPFS (Certificate)
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <code className="text-xs font-mono bg-secondary px-2 py-1 rounded break-all">
                {credential.ipfsHash}
              </code>
              <CopyButton text={credential.ipfsHash} />
              <a
                href={`https://gateway.pinata.cloud/ipfs/${credential.ipfsHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <ExternalLink className="h-3 w-3" />
                View
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
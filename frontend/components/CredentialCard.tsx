// components/CredentialCard.tsx
"use client";

import { useState } from "react";
import {
  GraduationCap, Building2, Calendar, Hash, ExternalLink,
  ChevronDown, ChevronUp, Copy, CheckCircle2, XCircle, PauseCircle
} from "lucide-react";
import { Card, CardContent, Badge, Button, Skeleton } from "@/components/ui";
import type { Credential } from "@/lib/types";
import {
  truncateAddress, formatTimestamp, formatTimestampFull,
  getStatusLabel, getStatusVariant, ipfsToHttp,
  copyToClipboard, isCredentialExpired, cn
} from "@/lib/utils";

interface CredentialCardProps {
  credential: Credential;
  isLoading?: boolean;
  showActions?: boolean;
  onRevoke?: (tokenId: bigint) => void;
  onSuspend?: (tokenId: bigint) => void;
  onReinstate?: (tokenId: bigint) => void;
  compact?: boolean;
}

function StatusIcon({ status }: { status: number }) {
  switch (status) {
    case 0: return <CheckCircle2 className="h-4 w-4 text-success" />;
    case 1: return <XCircle className="h-4 w-4 text-destructive" />;
    case 2: return <PauseCircle className="h-4 w-4 text-warning" />;
    default: return null;
  }
}

export function CredentialCard({
  credential,
  isLoading,
  showActions = false,
  onRevoke,
  onSuspend,
  onReinstate,
  compact = false,
}: CredentialCardProps) {
  const [expanded, setExpanded] = useState(false);
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
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-[var(--shadow-lg)]", compact && "")}>
      {/* Top accent bar */}
      <div
        className={cn(
          "h-1 w-full",
          statusVariant === "active" && !expired ? "bg-success" :
          statusVariant === "revoked" ? "bg-destructive" :
          statusVariant === "suspended" ? "bg-warning" : "bg-muted"
        )}
      />

      <CardContent className="pt-5 pb-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-foreground leading-tight">
                {credential.credentialType}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                {credential.institutionName}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <StatusIcon status={credential.status} />
            <Badge variant={statusVariant as "active" | "revoked" | "suspended" | "muted"}>
              {expired && credential.status === 0 ? "Expired" : statusLabel}
            </Badge>
          </div>
        </div>

        {/* Key info */}
        <div className="grid grid-cols-2 gap-3 text-sm mb-3">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Issued</p>
            <p className="font-medium text-foreground">{formatTimestamp(credential.issuedAt)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Expires</p>
            <p className={cn("font-medium", expired ? "text-destructive" : "text-foreground")}>
              {Number(credential.expiresAt) === 0 ? "Never" : formatTimestamp(credential.expiresAt)}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Student</p>
            <button
              onClick={() => handleCopy(credential.student, "student")}
              className="flex items-center gap-1 font-mono text-xs text-foreground hover:text-primary transition-colors"
            >
              {truncateAddress(credential.student)}
              {copied === "student" ? <CheckCircle2 className="h-3 w-3 text-success" /> : <Copy className="h-3 w-3" />}
            </button>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Token ID</p>
            <p className="font-mono text-xs font-medium text-foreground">#{credential.tokenId.toString()}</p>
          </div>
        </div>

        {/* Revocation reason */}
        {credential.revocationReason && (
          <div className="rounded-md bg-destructive/10 border border-destructive/20 px-3 py-2 text-xs text-destructive mb-3">
            <span className="font-medium">Reason: </span>
            {credential.revocationReason}
          </div>
        )}

        {/* Expand / collapse */}
        {!compact && (
          <button
            onClick={() => setExpanded((p) => !p)}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            {expanded ? "Less details" : "More details"}
          </button>
        )}

        {/* Expanded details */}
        {expanded && !compact && (
          <div className="mt-3 pt-3 border-t border-border space-y-2.5 text-sm animate-fade-in">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Credential Hash</p>
              <div className="flex items-center gap-2">
                <p className="font-mono text-xs text-foreground truncate flex-1">{credential.credentialHash}</p>
                <button onClick={() => handleCopy(credential.credentialHash, "hash")} className="flex-shrink-0">
                  {copied === "hash" ? <CheckCircle2 className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />}
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Issuer</p>
              <p className="font-mono text-xs text-foreground">{credential.issuer}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Issued At</p>
              <p className="text-xs text-foreground">{formatTimestampFull(credential.issuedAt)}</p>
            </div>

            {credential.ipfsCID && (
              <div>
                <p className="text-xs text-muted-foreground mb-1">IPFS Document</p>
                <a
                  href={ipfsToHttp(credential.ipfsCID)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View on IPFS
                </a>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        {showActions && (
          <div className="flex gap-2 mt-4 pt-3 border-t border-border">
            {credential.status === 0 && (
              <>
                {onSuspend && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onSuspend(credential.tokenId)}
                    className="text-warning border-warning/30 hover:bg-warning/10"
                  >
                    Suspend
                  </Button>
                )}
                {onRevoke && (
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onRevoke(credential.tokenId)}
                  >
                    Revoke
                  </Button>
                )}
              </>
            )}
            {credential.status === 2 && onReinstate && (
              <Button
                size="sm"
                variant="success"
                onClick={() => onReinstate(credential.tokenId)}
              >
                Reinstate
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Loading skeleton version
export function CredentialCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="h-1 w-full bg-muted shimmer" />
      <CardContent className="pt-5 pb-4 space-y-3">
        <div className="flex items-start gap-3">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-5 w-3/5" />
            <Skeleton className="h-4 w-2/5" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}

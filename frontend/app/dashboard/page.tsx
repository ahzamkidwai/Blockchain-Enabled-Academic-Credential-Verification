"use client";

import { useState } from "react";
import { LayoutDashboard, GraduationCap, Search, Filter, RefreshCw } from "lucide-react";
import { Button, Card, Input, Select } from "@/components/ui";
import { CredentialCard } from "@/components/dashboard/CredentialCard";
import { ConnectWalletGate } from "@/components/ConnectWalletGate";
import { useStudentCredentials } from "@/hooks/useStudentCredentials";
import { useRevokeCredential, useSuspendCredential, useReinstateCredential } from "@/hooks/useRevokeCredential";
import { useWalletInfo } from "@/hooks/useContractStats";
import { truncateAddress } from "@/lib/utils";
import { STATUS_FILTERS } from "@/constants/dashboard";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { CredentialCardSkeleton } from "@/components/dashboard/CredentialCard/CredentialCardSkeleton";

export default function DashboardPage() {
  const { address } = useWalletInfo();
  console.log("Wallet inside dashboard route : ", address);
  const { credentials, isLoading } = useStudentCredentials(address);
  console.log("Credentials inside dashboard route : ", credentials);
  const { revokeCredential } = useRevokeCredential();
  const { suspendCredential } = useSuspendCredential();
  const { reinstateCredential } = useReinstateCredential();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = credentials.filter((c) => {
    const status = c.revoked ? 1 : 0;

    const matchesStatus =
      statusFilter === "all" || status === Number(statusFilter);

    const matchesSearch =
      !searchQuery ||
      (c.ipfsHash?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (c.issuer?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

    return matchesStatus && matchesSearch;
  });

  const handleRevoke = async (tokenId: bigint) => {
    const reason = window.prompt("Enter revocation reason:");
    if (reason) await revokeCredential(tokenId, reason);
  };

  const handleSuspend = async (tokenId: bigint) => {
    const reason = window.prompt("Enter suspension reason:");
    if (reason) await suspendCredential(tokenId, reason);
  };

  return (
    <ConnectWalletGate>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <LayoutDashboard className="h-5 w-5 text-primary" />
              <h1 className="font-display text-2xl font-semibold text-foreground">
                My Credentials
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Wallet: <span className="font-mono">{truncateAddress(address ?? "")}</span>
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            leftIcon={<RefreshCw className="h-4 w-4" />}
          // onClick={() => refetch()}
          >
            Refresh
          </Button>
        </div>

        {/* Stats */}
        {!isLoading && credentials.length > 0 && (
          <DashboardStats credentials={credentials} />
        )}

        {/* Filters */}
        <Card className="p-4">
          <div className="flex gap-3 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <Input
                placeholder="Search by type or institution…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftAdornment={<Search className="h-4 w-4" />}
              />
            </div>
            <div className="w-48">
              <Select
                options={STATUS_FILTERS}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              />
            </div>
          </div>
        </Card>

        {/* Loading */}
        {isLoading && (
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <CredentialCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Empty */}
        {!isLoading && credentials.length === 0 && (
          <div className="text-center py-16">
            <GraduationCap className="h-14 w-14 text-muted-foreground mx-auto mb-4 opacity-40" />
            <h2 className="font-display text-xl text-foreground mb-2">No Credentials Yet</h2>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              No academic credentials have been issued to this wallet address.
              Contact your institution to receive your credentials.
            </p>
          </div>
        )}

        {/* No results after filter */}
        {!isLoading && credentials.length > 0 && filtered.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-40" />
            <p className="text-muted-foreground">No credentials match your filters.</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2"
              onClick={() => { setSearchQuery(""); setStatusFilter("all"); }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Credential grid */}
        {!isLoading && filtered.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((cred, index) => {
              const mappedCredential = {
                ...cred,
                tokenId: cred.tokenId ?? BigInt(index + 1),
                status: cred.revoked ? 1 : 0, 
                credentialType: cred.credentialType ?? "Degree",
                institutionName: cred.institutionName ?? "Unknown Institution",
                fileHash: cred.fileHash ?? "",
                issuedAt: cred.issuedAt
              };

              return (
                <CredentialCard
                  key={mappedCredential.tokenId.toString()}
                  credential={mappedCredential}
                  showActions={false}
                  onRevoke={handleRevoke}
                  onSuspend={handleSuspend}
                  onReinstate={(id) => reinstateCredential(id)}
                />
              );
            })}
          </div>
        )}
      </div>
    </ConnectWalletGate>
  );
}

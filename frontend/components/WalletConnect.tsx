"use client";

import { useState, useEffect } from "react";
import { useConnect, useDisconnect } from "wagmi";
import { Wallet, ChevronDown, LogOut, Copy, CheckCircle2, AlertCircle } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { useWalletInfo } from "@/hooks/useContractStats";
import { truncateAddress, copyToClipboard, cn } from "@/lib/utils";

export function WalletConnect({ className }: { className?: string }) {
  const { address, isConnected, isConnecting, chainName, balance } =
    useWalletInfo();

  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();

  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showConnectors, setShowConnectors] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async () => {
    if (!address) return;
    const ok = await copyToClipboard(address);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // ✅ CRITICAL FIX: prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        isLoading={true}
        leftIcon={<Wallet className="h-4 w-4" />}
        size="md"
        className={className}
      >
        Connect Wallet
      </Button>
    );
  }

  if (isConnected && address) {
    return (
      <div className={cn("relative", className)}>
        <button
          onClick={() => setDropdownOpen((p) => !p)}
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-success animate-pulse-slow" />
          <span className="font-mono text-xs">
            {truncateAddress(address)}
          </span>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 text-muted-foreground transition-transform",
              dropdownOpen && "rotate-180"
            )}
          />
        </button>

        {dropdownOpen && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setDropdownOpen(false)}
            />

            <div className="absolute right-0 top-full mt-2 z-40 w-64 rounded-xl border border-border bg-card shadow-[var(--shadow-xl)] p-1 animate-fade-in">
              <div className="px-3 py-2 border-b border-border mb-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">
                    Connected Wallet
                  </span>
                  <Badge variant="active" className="text-[10px]">
                    {chainName ?? "Unknown"}
                  </Badge>
                </div>

                <p className="font-mono text-xs text-foreground break-all">
                  {address}
                </p>

                {balance && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {balance}
                  </p>
                )}
              </div>

              <button
                onClick={handleCopy}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
              >
                {copied ? (
                  <CheckCircle2 className="h-4 w-4 text-success" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Copied!" : "Copy Address"}
              </button>

              <button
                onClick={() => {
                  disconnect();
                  setDropdownOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Disconnect
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <Button
        onClick={() => setShowConnectors((p) => !p)}
        isLoading={isConnecting}
        leftIcon={<Wallet className="h-4 w-4" />}
        size="md"
      >
        Connect Wallet
      </Button>

      {showConnectors && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setShowConnectors(false)}
          />

          <div className="absolute right-0 top-full mt-2 z-40 w-56 rounded-xl border border-border bg-card shadow-[var(--shadow-xl)] p-2 animate-fade-in">
            <p className="px-3 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1">
              Select Wallet
            </p>

            {connectors.map((connector) => (
              <button
                key={connector.uid}
                onClick={() => {
                  connect({ connector });
                  setShowConnectors(false);
                }}
                className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors"
              >
                <Wallet className="h-4 w-4 text-primary" />
                {connector.name}
              </button>
            ))}

            {error && (
              <div className="mt-2 flex items-start gap-2 rounded-md bg-destructive/10 px-3 py-2">
                <AlertCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-xs text-destructive">{error.message}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
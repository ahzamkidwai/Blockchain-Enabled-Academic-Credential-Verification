"use client";

import { Wallet, ShieldAlert } from "lucide-react";
import { WalletConnect } from "@/components/WalletConnect";
import { useWalletInfo } from "@/hooks/useContractStats";
import { SUPPORTED_CHAINS } from "@/lib/wagmi";
import { AlertBox } from "@/components/ui";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  requireRole?: "issuer" | "admin";
}

export function ConnectWalletGate({ children }: Props) {
  const { isConnected, chainId } = useWalletInfo();

  // ✅ ADD THIS
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ PREVENT HYDRATION MISMATCH
  if (!mounted) {
    return null; // or loader if you want
  }

  if (!isConnected) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center px-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Wallet className="h-8 w-8" />
        </div>
        <div className="space-y-2 max-w-sm">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Connect Your Wallet
          </h2>
          <p className="text-sm text-muted-foreground">
            You need a Web3 wallet to access this page. Connect MetaMask or
            another supported wallet to continue.
          </p>
        </div>
        <WalletConnect />
      </div>
    );
  }

  const supportedChainIds: number[] = SUPPORTED_CHAINS.map((c) => c.id);

  if (chainId && !supportedChainIds.includes(chainId)) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center px-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-warning/10 text-warning">
          <ShieldAlert className="h-8 w-8" />
        </div>
        <div className="space-y-2 max-w-sm">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Wrong Network
          </h2>
          <AlertBox variant="warning" title="Unsupported Network">
            Please switch to Anvil (Local), Sepolia, Polygon, or Polygon Amoy.
          </AlertBox>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
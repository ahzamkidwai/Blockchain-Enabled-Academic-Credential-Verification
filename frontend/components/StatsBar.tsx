// components/StatsBar.tsx
"use client";

import { Award, ShieldCheck, Building2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui";
import { useTotalCredentials } from "@/hooks/useContractStats";
import { cn } from "@/lib/utils";

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  trend?: string;
  className?: string;
}

function StatItem({ icon, label, value, trend, className }: StatItemProps) {
  return (
    <Card className={cn("flex items-center gap-4 p-4", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground font-body">{label}</p>
        <p className="font-display text-xl font-semibold text-foreground">{value}</p>
        {trend && <p className="text-xs text-success">{trend}</p>}
      </div>
    </Card>
  );
}

export function StatsBar() {
  const { total, isLoading } = useTotalCredentials();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatItem
        icon={<Award className="h-5 w-5" />}
        label="Total Credentials"
        value={isLoading ? "—" : total?.toString() ?? "0"}
        trend="On-chain"
      />
      <StatItem
        icon={<ShieldCheck className="h-5 w-5" />}
        label="Verification Type"
        value="Soulbound"
        trend="Non-transferable"
      />
      <StatItem
        icon={<Building2 className="h-5 w-5" />}
        label="Storage"
        value="IPFS"
        trend="Decentralized"
      />
      <StatItem
        icon={<TrendingUp className="h-5 w-5" />}
        label="Protocol"
        value="EVM"
        trend="Ethereum / Polygon"
      />
    </div>
  );
}

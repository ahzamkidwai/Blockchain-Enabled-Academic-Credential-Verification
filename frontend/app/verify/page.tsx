// app/verify/page.tsx
"use client";

import { useState } from "react";
import { ShieldCheck, Hash, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import VerifyByFile from "@/components/verifyComponents/VerifyByFile";
import VerifyByHash from "@/components/verifyComponents/VerifyByHash";

// ── Tab definitions ────────────────────────────────────────────────────────────
type TabId = "hash" | "file";

const TABS: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: "hash", label: "Verify by Hash", icon: Hash },
  // { id: "file", label: "Verify by File", icon: Upload },
];

// ── Root page ─────────────────────────────────────────────────────────────────
export default function VerifyPage() {
  const [tab, setTab] = useState<TabId>("hash");

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
          Verify authenticity by credential hash or by uploading the original
          certificate PDF.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex rounded-lg border border-border bg-secondary/30 p-1 gap-1">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all",
              tab === id
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "hash" ? <VerifyByHash /> : <VerifyByFile />}
    </div>
  );
}

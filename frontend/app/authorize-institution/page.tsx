"use client";

import { ShieldCheck } from "lucide-react";
import { ConnectWalletGate } from "@/components/ConnectWalletGate";
import AuthorizeInstitutionForm from "@/components/AuthorizeInstitutionForm";

export default function AuthorizeInstitutionPage() {
  return (
    <ConnectWalletGate>
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h1 className="font-display text-2xl font-semibold text-foreground">
              Authorize Institution
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Authorize a new institution wallet so it can issue academic credentials.
          </p>
        </div>

        <AuthorizeInstitutionForm />
      </div>
    </ConnectWalletGate>
  );
}


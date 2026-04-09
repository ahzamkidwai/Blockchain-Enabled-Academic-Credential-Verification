"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

import { ConnectWalletGate } from "@/components/ConnectWalletGate";
import AuthorizeInstitutionForm from "@/components/AuthorizeInstitutionForm";
import VerifyInstitution from "@/components/verifyComponents/VerifyInstitution";

type Tab = "authorize" | "verify";

export default function AuthorizeInstitutionPage() {
  const [activeTab, setActiveTab] = useState<Tab>("authorize");

  return (
    <ConnectWalletGate>
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h1 className="font-display text-2xl font-semibold text-foreground">
              Institution Management
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Authorize institutions or verify their authorization status.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b">
          <button
            onClick={() => setActiveTab("authorize")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === "authorize"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            Authorize
          </button>

          <button
            onClick={() => setActiveTab("verify")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === "verify"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            Verify
          </button>
        </div>

        {/* Content */}
        <div>
          {activeTab === "authorize" ? (
            <AuthorizeInstitutionForm />
          ) : (
            <VerifyInstitution />
          )}
        </div>
      </div>
    </ConnectWalletGate>
  );
}

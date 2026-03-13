// app/issue/page.tsx
"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import {
  FilePlus, AlertCircle, CheckCircle2, ExternalLink, Info, Hash
} from "lucide-react";
import {
  Button, Card, CardHeader, CardTitle, CardContent,
  Input, Select, AlertBox, Badge, Divider
} from "@/components/ui";
import { ConnectWalletGate } from "@/components/ConnectWalletGate";
import { useIssueCredential } from "@/hooks/useIssueCredential";
import { useInstitution } from "@/hooks/useContractStats";
import { CREDENTIAL_TYPES } from "@/lib/contract";
import { isValidAddress, computeCredentialHash, truncateAddress } from "@/lib/utils";

const CREDENTIAL_OPTIONS = CREDENTIAL_TYPES.map((t) => ({ value: t, label: t }));

interface FormErrors {
  studentAddress?: string;
  ipfsCID?: string;
  credentialType?: string;
}

export default function IssuePage() {
  const { address } = useAccount();
  const { institution } = useInstitution(address);
  const { issueCredential, isPending, isConfirming, isSuccess, txHash, error } =
    useIssueCredential();

  const [form, setForm] = useState({
    studentAddress: "",
    ipfsCID: "",
    credentialType: CREDENTIAL_TYPES[0],
    expiresAt: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [previewHash, setPreviewHash] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!isValidAddress(form.studentAddress)) errs.studentAddress = "Invalid Ethereum address";
    if (!form.ipfsCID.trim()) errs.ipfsCID = "IPFS CID is required";
    if (!form.credentialType) errs.credentialType = "Select a credential type";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePreviewHash = () => {
    if (!isValidAddress(form.studentAddress) || !form.ipfsCID || !institution?.name) return;
    const hash = computeCredentialHash({
      studentAddress: form.studentAddress,
      credentialType: form.credentialType,
      institutionName: institution.name,
      issuedAt: Math.floor(Date.now() / 1000),
      ipfsCID: form.ipfsCID,
    });
    setPreviewHash(hash);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !institution?.name) return;

    const expiresAt = form.expiresAt
      ? BigInt(Math.floor(new Date(form.expiresAt).getTime() / 1000))
      : BigInt(0);

    try {
      await issueCredential({
        studentAddress: form.studentAddress as `0x${string}`,
        ipfsCID: form.ipfsCID,
        credentialType: form.credentialType,
        institutionName: institution.name,
        expiresAt,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const isLoading = isPending || isConfirming;

  return (
    <ConnectWalletGate>
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FilePlus className="h-5 w-5 text-primary" />
            <h1 className="font-display text-2xl font-semibold text-foreground">
              Issue Credential
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Issue a soulbound academic credential NFT to a student&apos;s wallet.
          </p>
        </div>

        {/* Institution badge */}
        {institution ? (
          <Card className="p-4 bg-success/5 border-success/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{institution.name}</p>
                <p className="text-xs text-muted-foreground">{institution.country} · Authorized Issuer</p>
              </div>
              <Badge variant="active" className="ml-auto">Active</Badge>
            </div>
          </Card>
        ) : (
          <AlertBox variant="warning" icon={<AlertCircle className="h-4 w-4" />} title="Not Registered as Issuer">
            Your wallet is not registered as an authorized institution. Contact the platform admin to get registered.
          </AlertBox>
        )}

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Credential Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Student Wallet Address"
                placeholder="0x..."
                value={form.studentAddress}
                onChange={(e) => setForm((p) => ({ ...p, studentAddress: e.target.value }))}
                error={errors.studentAddress}
                hint="The Ethereum address of the student receiving this credential"
              />

              <Select
                label="Credential Type"
                options={CREDENTIAL_OPTIONS}
                value={form.credentialType}
                onChange={(e) => setForm((p) => ({ ...p, credentialType: e.target.value }))}
                error={errors.credentialType}
              />

              <Input
                label="IPFS CID"
                placeholder="Qm... or bafyrei..."
                value={form.ipfsCID}
                onChange={(e) => setForm((p) => ({ ...p, ipfsCID: e.target.value }))}
                error={errors.ipfsCID}
                hint="The IPFS content identifier of the encrypted credential document"
              />

              <Input
                label="Expiry Date (optional)"
                type="date"
                value={form.expiresAt}
                onChange={(e) => setForm((p) => ({ ...p, expiresAt: e.target.value }))}
                hint="Leave empty for a credential with no expiry"
              />

              {/* Hash preview */}
              <div className="space-y-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  leftIcon={<Hash className="h-3.5 w-3.5" />}
                  onClick={handlePreviewHash}
                  disabled={!isValidAddress(form.studentAddress) || !form.ipfsCID || !institution}
                >
                  Preview Credential Hash
                </Button>
                {previewHash && (
                  <div className="rounded-md bg-muted p-3">
                    <p className="text-xs text-muted-foreground mb-1">Credential Hash (keccak256)</p>
                    <p className="font-mono text-xs text-foreground break-all">{previewHash}</p>
                  </div>
                )}
              </div>

              <Divider />

              <AlertBox variant="info" icon={<Info className="h-4 w-4" />}>
                This credential will be permanently recorded on-chain. The student&apos;s
                wallet address cannot be changed after issuance.
              </AlertBox>

              {/* Error */}
              {error && (
                <AlertBox variant="error" icon={<AlertCircle className="h-4 w-4" />} title="Transaction Failed">
                  {error.message.slice(0, 200)}
                </AlertBox>
              )}

              {/* Success */}
              {isSuccess && txHash && (
                <AlertBox variant="success" icon={<CheckCircle2 className="h-4 w-4" />} title="Credential Issued!">
                  <span>Transaction confirmed. </span>
                  <a
                    href={`https://sepolia.etherscan.io/tx/${txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline"
                  >
                    View on Etherscan <ExternalLink className="h-3 w-3" />
                  </a>
                </AlertBox>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                isLoading={isLoading}
                disabled={!institution?.isActive}
                leftIcon={<FilePlus className="h-4 w-4" />}
              >
                {isPending ? "Confirm in Wallet…" : isConfirming ? "Confirming…" : "Issue Credential"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </ConnectWalletGate>
  );
}

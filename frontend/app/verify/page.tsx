// app/verify/page.tsx
"use client";

import { useState, useRef } from "react";
import { useReadContract } from "wagmi";
import {
  ShieldCheck, ShieldX, Search, Hash, AlertCircle,
  CheckCircle2, XCircle, Info, ExternalLink, RefreshCw,
  Upload, FileText, Loader2, File,
} from "lucide-react";
import {
  Button, Card, CardContent, CardHeader, CardTitle,
  Input, AlertBox, Badge, Skeleton,
} from "@/components/ui";
import { CredentialCard } from "@/components/CredentialCard";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS } from "@/lib/contract";
import type { Credential } from "@/lib/types";
import { isValidBytes32, formatTimestampFull, cn } from "@/lib/utils";

// ── Tab definitions ────────────────────────────────────────────────────────────
type TabId = "hash" | "file";

const TABS: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: "hash", label: "Verify by Hash", icon: Hash },
  { id: "file", label: "Verify by File", icon: Upload },
];

// ── Shared verdict banner ──────────────────────────────────────────────────────
function VerdictBanner({
  isValid,
  label,
  subLabel,
  checkedAt,
}: {
  isValid: boolean;
  label: string;
  subLabel?: string;
  checkedAt: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl border p-5 animate-slide-up",
        isValid ? "bg-success/10 border-success/30" : "bg-destructive/10 border-destructive/30"
      )}
    >
      {isValid ? (
        <CheckCircle2 className="h-10 w-10 text-success flex-shrink-0" />
      ) : (
        <ShieldX className="h-10 w-10 text-destructive flex-shrink-0" />
      )}
      <div>
        <h2 className={cn("font-display text-xl font-semibold", isValid ? "text-success" : "text-destructive")}>
          {label}
        </h2>
        {subLabel && <p className="text-sm text-muted-foreground">{subLabel}</p>}
        <p className="text-xs text-muted-foreground mt-1">Checked at {checkedAt}</p>
      </div>
      <Badge variant={isValid ? "active" : "revoked"} className="ml-auto flex-shrink-0">
        {isValid ? "VALID" : "INVALID"}
      </Badge>
    </div>
  );
}

// ── Tab 1: Verify by Hash (on-chain via wagmi) ──────────────────────────────
function VerifyByHash() {
  const [inputHash, setInputHash] = useState("");
  const [searchHash, setSearchHash] = useState<`0x${string}` | undefined>();
  const [hasSearched, setHasSearched] = useState(false);

  const isValidHash = isValidBytes32(inputHash);

  const { data, isLoading, error, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "verifyCredentialByHash",
    args: searchHash ? [searchHash] : undefined,
    query: { enabled: !!searchHash },
  });

  const result = data as [boolean, Credential] | undefined;
  const isValid = result?.[0] ?? false;
  const credential = result?.[1] ?? null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidHash) return;
    setSearchHash(inputHash as `0x${string}`);
    setHasSearched(true);
  };

  return (
    <div className="space-y-4">
      <AlertBox variant="info" icon={<Info className="h-4 w-4" />} title="How Hash Verification Works">
        Enter the 32-byte keccak256 credential hash (0x…) to query the smart contract directly.
      </AlertBox>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Enter Credential Hash</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <Input
              label="Credential Hash"
              placeholder="0x1234abcd..."
              value={inputHash}
              onChange={(e) => setInputHash(e.target.value)}
              leftAdornment={<Hash className="h-4 w-4" />}
              error={
                inputHash && !isValidHash
                  ? "Hash must be a valid 0x-prefixed 32-byte hex string"
                  : undefined
              }
              hint="64 hex characters after 0x prefix"
            />
            <div className="flex gap-2">
              <Button
                type="submit"
                leftIcon={<Search className="h-4 w-4" />}
                isLoading={isLoading}
                disabled={!isValidHash}
                className="flex-1"
              >
                Verify
              </Button>
              {hasSearched && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => { setInputHash(""); setSearchHash(undefined); setHasSearched(false); }}
                  leftIcon={<RefreshCw className="h-4 w-4" />}
                >
                  Reset
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {isLoading && (
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-muted shimmer" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </Card>
      )}

      {error && (
        <AlertBox variant="error" icon={<AlertCircle className="h-4 w-4" />} title="Query Failed">
          {error.message}
        </AlertBox>
      )}

      {hasSearched && !isLoading && !error && result && (
        <div className="space-y-4">
          <VerdictBanner
            isValid={isValid}
            label={isValid ? "Credential is Valid" : "Credential is Invalid"}
            subLabel={
              isValid
                ? "This credential is active and has not been revoked."
                : credential && Number(credential.tokenId) > 0
                ? `This credential exists but is ${credential.status === 1 ? "Revoked" : credential.status === 2 ? "Suspended" : "Invalid"}.`
                : "No credential found matching this hash on-chain."
            }
            checkedAt={formatTimestampFull(BigInt(Math.floor(Date.now() / 1000)))}
          />

          {credential && Number(credential.tokenId) > 0 && (
            <div>
              <h3 className="font-display text-base font-medium text-foreground mb-3">Credential Details</h3>
              <CredentialCard credential={credential} />
            </div>
          )}

          <div className="flex justify-end">
            <a
              href={`https://sepolia.etherscan.io/address/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              View contract on Etherscan
            </a>
          </div>
        </div>
      )}

      {hasSearched && !isLoading && !error && !result && (
        <div className="text-center py-10">
          <XCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
          <p className="font-display text-lg text-foreground">No credential found</p>
          <p className="text-sm text-muted-foreground">This hash does not match any credential on-chain.</p>
        </div>
      )}
    </div>
  );
}

// ── Tab 2: Verify by File (backend) ──────────────────────────────────────────
interface FileVerifyResult {
  valid: boolean;
  credential?: {
    student: string;
    issuer: string;
    ipfsHash: string;
    fileHash: string;
    tokenId: number;
    revoked: boolean;
    createdAt?: string;
  };
}

function VerifyByFile() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FileVerifyResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
    setResult(null);
    setErrorMsg("");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setResult(null);
      setErrorMsg("");
    }
  };

  const handleVerify = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setResult(null);
    setErrorMsg("");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/api/credentials/verify", {
        method: "POST",
        body: formData,
      });
      const json: FileVerifyResult = await res.json();
      if (!res.ok) throw new Error((json as unknown as { error: string }).error ?? `HTTP ${res.status}`);
      setResult(json);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setResult(null);
    setErrorMsg("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="space-y-4">
      <AlertBox variant="info" icon={<Info className="h-4 w-4" />} title="File Verification">
        Upload the original certificate PDF. The backend computes its keccak256 hash and checks it
        against the blockchain records.
      </AlertBox>

      {/* Drop zone */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Upload Certificate PDF</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 cursor-pointer transition-colors",
              selectedFile
                ? "border-primary/50 bg-primary/5"
                : "border-border hover:border-primary/50 hover:bg-secondary/40"
            )}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            {selectedFile ? (
              <>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-7 w-7" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground text-sm">{selectedFile.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(selectedFile.size / 1024).toFixed(1)} KB · PDF
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                  <File className="h-7 w-7" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">Drop your certificate here</p>
                  <p className="text-xs text-muted-foreground">or click to browse — PDF files only</p>
                </div>
              </>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleVerify}
              disabled={!selectedFile || loading}
              className="flex-1"
              leftIcon={loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
            >
              {loading ? "Verifying…" : "Verify Certificate"}
            </Button>
            {(selectedFile || result) && (
              <Button variant="outline" onClick={handleReset} leftIcon={<RefreshCw className="h-4 w-4" />}>
                Reset
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Error */}
      {errorMsg && (
        <AlertBox variant="error" icon={<AlertCircle className="h-4 w-4" />} title="Verification Failed">
          {errorMsg}
        </AlertBox>
      )}

      {/* Result */}
      {result && (
        <div className="space-y-4 animate-slide-up">
          <VerdictBanner
            isValid={result.valid}
            label={
              result.valid
                ? "Certificate is Authentic"
                : result.credential
                ? "Certificate has been Revoked"
                : "Certificate Not Found"
            }
            subLabel={
              result.valid
                ? "This PDF matches an active, unrevoked credential on-chain."
                : result.credential
                ? "This certificate exists but has been revoked by the issuing institution."
                : "No matching credential was found for this PDF."
            }
            checkedAt={formatTimestampFull(BigInt(Math.floor(Date.now() / 1000)))}
          />

          {result.credential && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Credential Record</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">Token ID</p>
                  <p className="font-medium">#{result.credential.tokenId}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <Badge variant={result.credential.revoked ? "revoked" : "active"}>
                    {result.credential.revoked ? "Revoked" : "Active"}
                  </Badge>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs text-muted-foreground">Student Address</p>
                  <p className="font-mono text-xs break-all">{result.credential.student}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs text-muted-foreground">Issuer Address</p>
                  <p className="font-mono text-xs break-all">{result.credential.issuer}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs text-muted-foreground">IPFS Hash</p>
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-xs break-all">{result.credential.ipfsHash}</p>
                    <a
                      href={`https://gateway.pinata.cloud/ipfs/${result.credential.ipfsHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex-shrink-0"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

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
          Verify authenticity by credential hash or by uploading the original certificate PDF.
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
                : "text-muted-foreground hover:text-foreground"
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

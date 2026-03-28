// app/dashboard/issue-certificate/page.tsx
"use client";

import { useState, useCallback, useEffect } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import {
  FileText, Cpu, Upload, CheckCircle2, AlertCircle,
  Download, ExternalLink, Copy, Hash, User, BookOpen,
  Building2, Calendar, Loader2, ShieldAlert, Eye,
} from "lucide-react";
import {
  Button, Card, CardContent, CardHeader, CardTitle,
  Input, AlertBox, Badge, Spinner,
} from "@/components/ui";
import { ConnectWalletGate } from "@/components/ConnectWalletGate";
import { generateCertificatePDF, type CertificateData } from "@/lib/generateCertificate";
import { isValidAddress, truncateAddress, cn } from "@/lib/utils";
import toast from "react-hot-toast";

// ── Types ─────────────────────────────────────────────────────────────────────
interface FormState {
  studentAddress: string;
  studentName: string;
  courseName: string;
  universityName: string;
  date: string;
}

interface IssuanceResult {
  tokenId: number | string;
  ipfsHash: string;
  fileHash: string;
  student: string;
  issuer: string;
}

type StepState = "idle" | "generating" | "generated" | "issuing" | "done" | "error";

const API_BASE = "http://localhost:5000/api/credentials";

const DEFAULT_FORM: FormState = {
  studentAddress: "",
  studentName: "",
  courseName: "",
  universityName: "AcadChain University",
  date: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
};

// ── Helper: copy to clipboard ─────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-1.5 text-muted-foreground hover:text-primary transition-colors"
      title="Copy"
    >
      <Copy className={cn("h-3.5 w-3.5", copied && "text-success")} />
    </button>
  );
}

// ── Step indicator ────────────────────────────────────────────────────────────
const STEPS = [
  { id: 1, label: "Fill Details" },
  { id: 2, label: "Generate PDF" },
  { id: 3, label: "Issue on Chain" },
  { id: 4, label: "Success" },
];

function StepBar({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-0">
      {STEPS.map((step, i) => (
        <div key={step.id} className="flex items-center">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
                current >= step.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {current > step.id ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                step.id
              )}
            </div>
            <span
              className={cn(
                "hidden sm:block text-xs font-medium transition-colors",
                current >= step.id ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={cn(
                "mx-3 h-0.5 w-8 sm:w-16 transition-all duration-500",
                current > step.id ? "bg-primary" : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Field row for result display ──────────────────────────────────────────────
function ResultField({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="flex items-center gap-1 min-w-0">
        <p
          className={cn(
            "text-sm text-foreground truncate",
            mono && "font-mono text-xs"
          )}
        >
          {value}
        </p>
        <CopyButton text={value} />
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function IssueCertificatePage() {
  const { address } = useAccount();

  // Auth state
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  // Form
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  // PDF state
  const [pdfDataUrl, setPdfDataUrl] = useState<string | null>(null);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [pdfHash, setPdfHash] = useState<string | null>(null);

  // Flow state
  const [step, setStep] = useState<StepState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [result, setResult] = useState<IssuanceResult | null>(null);

  // ── Check institution authorization ────────────────────────────────────────
  useEffect(() => {
    if (!address) {
      setIsAuthorized(null);
      return;
    }
    setAuthLoading(true);
    fetch(`${API_BASE}/institution/${address}`)
      .then((r) => r.json())
      .then((data) => setIsAuthorized(data.isInstitution ?? false))
      .catch(() => setIsAuthorized(false))
      .finally(() => setAuthLoading(false));
  }, [address]);

  // ── Form helpers ───────────────────────────────────────────────────────────
  const setField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!isValidAddress(form.studentAddress))
      newErrors.studentAddress = "Invalid Ethereum address";
    if (!form.studentName.trim())
      newErrors.studentName = "Student name is required";
    if (!form.courseName.trim())
      newErrors.courseName = "Course name is required";
    if (!form.universityName.trim())
      newErrors.universityName = "University name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Generate PDF ──────────────────────────────────────────────────────────
  const handleGenerate = useCallback(async () => {
    if (!validate()) return;
    setStep("generating");
    setErrorMsg("");
    try {
      const certData: CertificateData = {
        studentName: form.studentName,
        courseName: form.courseName,
        universityName: form.universityName,
        date: form.date,
        verifyUrl: "http://localhost:3000/verify",
      };
      const { pdfBytes, blob, dataUrl } = await generateCertificatePDF(certData);
      setPdfDataUrl(dataUrl);
      setPdfBlob(blob);

      // Compute keccak256 of the PDF bytes
      const hash = ethers.keccak256(pdfBytes);
      setPdfHash(hash);

      setStep("generated");
      toast.success("Certificate generated! Review and issue below.");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "PDF generation failed";
      setErrorMsg(msg);
      setStep("error");
      toast.error(msg);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  // ── Download PDF ──────────────────────────────────────────────────────────
  const handleDownload = () => {
    if (!pdfBlob) return;
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `certificate-${form.studentName.replace(/\s+/g, "-")}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Issue on blockchain ────────────────────────────────────────────────────
  const handleIssue = async () => {
    if (!pdfBlob || !form.studentAddress) return;
    setStep("issuing");
    setErrorMsg("");

    const formData = new FormData();
    formData.append("file", pdfBlob, "certificate.pdf");
    formData.append("student", form.studentAddress);

    try {
      const res = await fetch(`${API_BASE}/issue`, {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? `HTTP ${res.status}`);
      }

      const cred = json.credential;
      setResult({
        tokenId: cred.tokenId,
        ipfsHash: cred.ipfsHash,
        fileHash: cred.fileHash,
        student: cred.student,
        issuer: cred.issuer ?? address ?? "—",
      });
      setStep("done");
      toast.success("🎓 Certificate issued on-chain!");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Issuance failed";
      setErrorMsg(msg);
      setStep("error");
      toast.error(msg);
    }
  };

  // ── Reset flow ────────────────────────────────────────────────────────────
  const handleReset = () => {
    setForm(DEFAULT_FORM);
    setErrors({});
    setPdfDataUrl(null);
    setPdfBlob(null);
    setPdfHash(null);
    setResult(null);
    setStep("idle");
    setErrorMsg("");
  };

  // ── Step counter for progress bar ─────────────────────────────────────────
  const currentStep =
    step === "idle" ? 1
    : step === "generating" ? 2
    : step === "generated" ? 2
    : step === "issuing" ? 3
    : step === "done" ? 4
    : 1;

  const isGenerating = step === "generating";
  const isIssuing = step === "issuing";
  const isDone = step === "done";
  const hasGenerated = step === "generated" || step === "issuing" || isDone;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <ConnectWalletGate>
      <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileText className="h-5 w-5 text-primary" />
            <h1 className="font-display text-2xl font-semibold text-foreground">
              Issue Certificate
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Generate and issue a tamper-proof academic certificate as a Soulbound NFT.
          </p>
        </div>

        {/* ── Step progress bar ────────────────────────────────────────────── */}
        <Card className="p-4">
          <StepBar current={currentStep} />
        </Card>

        {/* ── Authorization status ─────────────────────────────────────────── */}
        {authLoading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Checking institution authorization…
          </div>
        )}

        {!authLoading && isAuthorized === false && (
          <AlertBox
            variant="error"
            icon={<ShieldAlert className="h-4 w-4" />}
            title="Not Authorized"
          >
            Your wallet ({truncateAddress(address ?? "")}) is not registered as an authorized
            institution. Only authorized institutions can issue certificates. Contact the
            contract owner to get authorized.
          </AlertBox>
        )}

        {!authLoading && isAuthorized === true && (
          <AlertBox
            variant="success"
            icon={<CheckCircle2 className="h-4 w-4" />}
            title="Authorized Institution"
          >
            Your wallet is authorized to issue certificates.
          </AlertBox>
        )}

        {/* ── Form ─────────────────────────────────────────────────────────── */}
        {!isDone && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                Student &amp; Course Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                id="studentAddress"
                label="Student Wallet Address *"
                placeholder="0x..."
                value={form.studentAddress}
                onChange={(e) => setField("studentAddress", e.target.value)}
                error={errors.studentAddress}
                leftAdornment={<Hash className="h-4 w-4" />}
                disabled={isGenerating || isIssuing}
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  id="studentName"
                  label="Student Name *"
                  placeholder="e.g. Alice Johnson"
                  value={form.studentName}
                  onChange={(e) => setField("studentName", e.target.value)}
                  error={errors.studentName}
                  leftAdornment={<User className="h-4 w-4" />}
                  disabled={isGenerating || isIssuing}
                />

                <Input
                  id="courseName"
                  label="Course / Degree *"
                  placeholder="e.g. Bachelor of Computer Science"
                  value={form.courseName}
                  onChange={(e) => setField("courseName", e.target.value)}
                  error={errors.courseName}
                  leftAdornment={<BookOpen className="h-4 w-4" />}
                  disabled={isGenerating || isIssuing}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  id="universityName"
                  label="University / Institution"
                  placeholder="e.g. AcadChain University"
                  value={form.universityName}
                  onChange={(e) => setField("universityName", e.target.value)}
                  leftAdornment={<Building2 className="h-4 w-4" />}
                  disabled={isGenerating || isIssuing}
                />

                <Input
                  id="date"
                  label="Issue Date"
                  placeholder="e.g. March 28, 2026"
                  value={form.date}
                  onChange={(e) => setField("date", e.target.value)}
                  leftAdornment={<Calendar className="h-4 w-4" />}
                  disabled={isGenerating || isIssuing}
                />
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 flex-wrap pt-1">
                <Button
                  id="generate-btn"
                  onClick={handleGenerate}
                  isLoading={isGenerating}
                  leftIcon={<Cpu className="h-4 w-4" />}
                  disabled={isGenerating || isIssuing || isAuthorized === false}
                  className="flex-1 sm:flex-none"
                >
                  {isGenerating ? "Generating…" : hasGenerated ? "Re-generate" : "Generate Certificate"}
                </Button>

                {hasGenerated && (
                  <>
                    <Button
                      id="download-btn"
                      variant="outline"
                      onClick={handleDownload}
                      leftIcon={<Download className="h-4 w-4" />}
                      disabled={isIssuing}
                    >
                      Download
                    </Button>

                    <Button
                      id="issue-btn"
                      onClick={handleIssue}
                      isLoading={isIssuing}
                      leftIcon={<Upload className="h-4 w-4" />}
                      disabled={isIssuing || isAuthorized !== true}
                      className="flex-1 sm:flex-none bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700"
                    >
                      {isIssuing ? "Issuing on Blockchain…" : "Issue Certificate"}
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── Hash debug panel ─────────────────────────────────────────────── */}
        {pdfHash && !isDone && (
          <Card className="p-4 border-dashed">
            <p className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1.5">
              <Hash className="h-3.5 w-3.5" />
              Certificate File Hash (keccak256)
            </p>
            <div className="flex items-center gap-2 min-w-0">
              <code className="text-xs font-mono text-foreground bg-secondary px-2 py-1 rounded truncate">
                {pdfHash}
              </code>
              <CopyButton text={pdfHash} />
            </div>
          </Card>
        )}

        {/* ── PDF Preview ──────────────────────────────────────────────────── */}
        {hasGenerated && pdfDataUrl && !isDone && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Eye className="h-4 w-4 text-primary" />
                Certificate Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="rounded-b-xl overflow-hidden border-t border-border bg-muted/30">
                <iframe
                  src={pdfDataUrl}
                  className="w-full"
                  style={{ height: "480px" }}
                  title="Certificate Preview"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── Issuing loader ────────────────────────────────────────────────── */}
        {isIssuing && (
          <Card className="p-6 text-center space-y-3">
            <Spinner size="lg" className="mx-auto" />
            <p className="font-display text-base font-medium text-foreground">
              Issuing certificate on-chain…
            </p>
            <p className="text-sm text-muted-foreground">
              Uploading to IPFS, generating hash, and minting your Soulbound NFT.
              This may take 10–30 seconds.
            </p>
          </Card>
        )}

        {/* ── Error alert ───────────────────────────────────────────────────── */}
        {step === "error" && errorMsg && (
          <AlertBox
            variant="error"
            icon={<AlertCircle className="h-4 w-4" />}
            title="Something went wrong"
          >
            {errorMsg}
          </AlertBox>
        )}

        {/* ── Success result panel ──────────────────────────────────────────── */}
        {isDone && result && (
          <div className="space-y-4 animate-slide-up">
            {/* Green success banner */}
            <div className="flex items-center gap-4 rounded-xl border border-success/30 bg-success/10 p-5">
              <CheckCircle2 className="h-10 w-10 text-success flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-xl font-semibold text-success">
                  Certificate Issued Successfully!
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  The certificate has been minted as a Soulbound NFT and stored on IPFS.
                </p>
              </div>
              <Badge variant="active" className="flex-shrink-0">NFT MINTED</Badge>
            </div>

            {/* Result details card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Issuance Details</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4">
                <ResultField
                  label="Token ID"
                  value={`#${result.tokenId}`}
                />
                <ResultField
                  label="Student Address"
                  value={result.student}
                  mono
                />
                <ResultField
                  label="Issuer Address"
                  value={result.issuer}
                  mono
                />
                <ResultField
                  label="File Hash (keccak256)"
                  value={result.fileHash}
                  mono
                />
                <div className="sm:col-span-2">
                  <p className="text-xs text-muted-foreground mb-0.5">IPFS Hash (CID)</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="text-xs font-mono text-foreground bg-secondary px-2 py-1 rounded break-all">
                      {result.ipfsHash}
                    </code>
                    <CopyButton text={result.ipfsHash} />
                    <a
                      href={`https://gateway.pinata.cloud/ipfs/${result.ipfsHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View on IPFS
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleDownload}
                variant="outline"
                leftIcon={<Download className="h-4 w-4" />}
              >
                Download Certificate PDF
              </Button>
              <Button
                onClick={handleReset}
                variant="ghost"
              >
                Issue Another Certificate
              </Button>
            </div>
          </div>
        )}
      </div>
    </ConnectWalletGate>
  );
}

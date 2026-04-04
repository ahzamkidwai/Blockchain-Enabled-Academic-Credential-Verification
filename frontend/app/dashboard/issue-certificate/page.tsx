// app/dashboard/issue-certificate/page.tsx
"use client";

import { useState, useCallback, useEffect } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Hash,
  Loader2,
  ShieldAlert,
  Eye,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  AlertBox,
  Spinner,
} from "@/components/ui";
import { ConnectWalletGate } from "@/components/ConnectWalletGate";
import {
  generateCertificatePDF,
  type CertificateData,
} from "@/lib/generateCertificate";
import { isValidAddress, truncateAddress } from "@/lib/utils";
import toast from "react-hot-toast";
import {
  FormState,
  IssuanceResult,
  StepState,
} from "@/interfaces/issueCertificate";
import CopyButton from "@/components/issueCertificateComponents/CopyButton";
import StepBar from "@/components/issueCertificateComponents/StepBar";
import SuccessResultPanel from "@/components/issueCertificateComponents/SuccessResultPanel";
import CertificateForm from "@/components/issueCertificateComponents/CertificateForm";

const API_BASE = "http://localhost:5000/api/credentials";

const DEFAULT_FORM: FormState = {
  studentAddress: "",
  studentName: "",
  courseName: "",
  universityName: "",
  date: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
};

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function IssueCertificatePage() {
  const { address } = useAccount();

  // Auth state
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const [universityName, setUniversityName] = useState("");

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
    console.log("API URL : ", `${API_BASE}/institution/${address}`);
    const fetchInstitutionData = async () => {
      try {
        const res = await fetch(`${API_BASE}/institution/${address}`);
        const resData = await res.json();
        console.log("Res Data is : ", resData);
        const universityName = resData?.isInstitution[0] ?? "Unknown University";
        const country = resData?.isInstitution[1] ?? "Unknown Country";
        const completeUniversityname = `${universityName} ${country}`;
        const isUniversity = resData?.isInstitution[2] ?? false;
        setIsAuthorized(isUniversity ?? false); 
        setUniversityName(completeUniversityname);
        setForm((prev) => ({ ...prev, universityName: completeUniversityname }));
      } catch (err) {
        console.error("Error fetching institution data:", err);
        setIsAuthorized(false);
      } finally {
        setAuthLoading(false);
      }

    }
    fetchInstitutionData();
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
      const { pdfBytes, blob, dataUrl } =
        await generateCertificatePDF(certData);
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

    formData.append("credentialType", "Degree");
    formData.append(
      "expiresAt",
      Math.floor(Date.now() / 1000 + 365 * 24 * 60 * 60).toString()
    );

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
    step === "idle"
      ? 1
      : step === "generating"
        ? 2
        : step === "generated"
          ? 2
          : step === "issuing"
            ? 3
            : step === "done"
              ? 4
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
            Generate and issue a tamper-proof academic certificate as a
            Soulbound NFT.
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
            Your wallet ({truncateAddress(address ?? "")}) is not registered as
            an authorized institution. Only authorized institutions can issue
            certificates. Contact the contract owner to get authorized.
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
          <CertificateForm
            form={form}
            setField={setField}
            errors={errors}
            isGenerating={isGenerating}
            isIssuing={isIssuing}
            isAuthorized={isAuthorized}
            handleGenerate={handleGenerate}
            handleDownload={handleDownload}
            handleIssue={handleIssue}
            hasGenerated={hasGenerated}
          />
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
              Uploading to IPFS, generating hash, and minting your Soulbound
              NFT. This may take 10–30 seconds.
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
          <SuccessResultPanel
            result={result}
            pdfBlob={pdfBlob!}
            form={form}
            handleReset={handleReset}
          />
        )}
      </div>
    </ConnectWalletGate>
  );
}

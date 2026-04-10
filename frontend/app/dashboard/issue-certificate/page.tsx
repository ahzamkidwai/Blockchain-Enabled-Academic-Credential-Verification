"use client";

import { useState, useCallback, useEffect } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { keccak256 } from "viem";
import { Hash, Loader2 } from "lucide-react";
import { Card, AlertBox, Spinner } from "@/components/ui";
import { ConnectWalletGate } from "@/components/ConnectWalletGate";
import { generateCertificatePDF } from "@/lib/generateCertificate";
import { isValidAddress } from "@/lib/utils";
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
import { CONTRACT_ADDRESS, CREDENTIAL_ABI } from "@/lib/contract";
import type { Address } from "viem";

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

export default function IssueCertificatePage() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const [universityName, setUniversityName] = useState("");

  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const [pdfDataUrl, setPdfDataUrl] = useState<string | null>(null);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [pdfHash, setPdfHash] = useState<string | null>(null);
  console.log("PDF Hash : ", pdfHash);
  const [step, setStep] = useState<StepState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [txHash, setTxHash] = useState<string | null>(null);
  const [result, setResult] = useState<IssuanceResult | null>(null);

  // ── Check institution ─────────────────────────────
  useEffect(() => {
    if (!address) return;

    setAuthLoading(true);

    const fetchInstitution = async () => {
      try {
        const res = await fetch(`${API_BASE}/institution/${address}`);
        const data = await res.json();

        const name = data?.isInstitution?.[0] ?? "Unknown";
        const country = data?.isInstitution?.[1] ?? "";
        const isAuth = data?.isInstitution?.[2] ?? false;

        setIsAuthorized(isAuth);
        setUniversityName(`${name} ${country}`);

        setForm((p) => ({
          ...p,
          universityName: `${name} ${country}`,
        }));
      } catch {
        setIsAuthorized(false);
      } finally {
        setAuthLoading(false);
      }
    };

    fetchInstitution();
  }, [address]);

  // ── form helpers ─────────────────────────────
  const setField = (field: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};

    if (!isValidAddress(form.studentAddress)) {
      e.studentAddress = "Invalid address";
    }
    if (!form.studentName) e.studentName = "Required";
    if (!form.courseName) e.courseName = "Required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── generate PDF ─────────────────────────────
  const handleGenerate = useCallback(async () => {
    if (!validate()) return;

    setStep("generating");

    try {
      const cert = await generateCertificatePDF({
        studentName: form.studentName,
        courseName: form.courseName,
        universityName: form.universityName,
        date: form.date,
        verifyUrl: "http://localhost:3000/verify",
      });

      setPdfBlob(cert.blob);
      setPdfDataUrl(cert.dataUrl);

      const buffer = await cert.blob.arrayBuffer();
      const hash = keccak256(new Uint8Array(buffer));

      setPdfHash(hash);

      setStep("generated");
      toast.success("Certificate generated");
    } catch (e) {
      setStep("error");
      setErrorMsg("PDF generation failed");
    }
  }, [form]);

  // ── download ─────────────────────────────
  const handleDownload = () => {
    if (!pdfBlob) return;

    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `certificate-${form.studentName}.pdf`;
    a.click();

    URL.revokeObjectURL(url);
  };

  // ── issue on-chain ─────────────────────────────
  const handleIssue = async () => {
    if (!pdfBlob || !form.studentAddress || !pdfHash) return;

    setStep("issuing");

    try {
      toast.loading("Uploading to IPFS...");

      const formData = new FormData();
      formData.append("file", pdfBlob);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY as string,
            pinata_secret_api_key: process.env
              .NEXT_PUBLIC_PINATA_SECRET_KEY as string,
          },
          body: formData,
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error("IPFS upload failed");

      const ipfsHash = data.IpfsHash;

      toast.loading("Confirm wallet...");
      const expiresAt = BigInt(
        Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60,
      );

      const tx = await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CREDENTIAL_ABI,
        functionName: "issueCredential",
        args: [
          form.studentAddress as Address,
          ipfsHash,
          pdfHash as Address,
          "Degree",
          expiresAt,
        ],
      });

      setTxHash(tx);

      toast.success("Certificate issued!");
      setStep("done");
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Failed");
      setStep("error");
      toast.error("Issuance failed");
    }
  };

  // ── reset ─────────────────────────────
  const handleReset = () => {
    setForm(DEFAULT_FORM);
    setPdfBlob(null);
    setPdfDataUrl(null);
    setPdfHash(null);
    setResult(null);
    setStep("idle");
    setErrorMsg("");
    setTxHash(null);
  };

  const currentStep =
    step === "idle"
      ? 1
      : step === "generating"
        ? 2
        : step === "generated"
          ? 2
          : step === "issuing"
            ? 3
            : 4;

  return (
    <ConnectWalletGate>
      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="p-4">
          <StepBar current={currentStep} />
        </Card>

        {authLoading && <Loader2 className="animate-spin" />}

        {!authLoading && isAuthorized === false && (
          <AlertBox variant="error" title="Not Authorized">
            Your wallet is not authorized
          </AlertBox>
        )}

        <CertificateForm
          form={form}
          setField={setField}
          errors={errors}
          handleGenerate={handleGenerate}
          handleDownload={handleDownload}
          handleIssue={handleIssue}
          hasGenerated={!!pdfBlob}
          isGenerating={step === "generating"}
          isIssuing={step === "issuing"}
          isAuthorized={isAuthorized}
        />

        {pdfHash && (
          <Card className="p-3">
            <div className="text-xs flex gap-2 items-center">
              <Hash size={14} />
              <code>{pdfHash}</code>
              <CopyButton text={pdfHash} />
            </div>
          </Card>
        )}

        {pdfDataUrl && step !== "done" && (
          <iframe src={pdfDataUrl} className="w-full h-[500px]" />
        )}

        {step === "issuing" && (
          <Card className="p-4 text-center">
            <Spinner />
            <p>Issuing certificate...</p>
          </Card>
        )}

        {step === "error" && (
          <AlertBox variant="error" title="Error">
            {errorMsg}
          </AlertBox>
        )}

        {step === "done" && result && (
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

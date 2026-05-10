import { FormState } from "@/interfaces/issueCertificate";

// ── Step indicator ────────────────────────────────────────────────────────────
export const STEPS = [
  { id: 1, label: "Fill Details" },
  { id: 2, label: "Generate PDF" },
  { id: 3, label: "Issue on Chain" },
  { id: 4, label: "Success" },
];

export const handleDownload = (pdfBlob: Blob, form: FormState) => {
    if (!pdfBlob) return;
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `certificate-${form.studentName.replace(/\s+/g, "-")}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  
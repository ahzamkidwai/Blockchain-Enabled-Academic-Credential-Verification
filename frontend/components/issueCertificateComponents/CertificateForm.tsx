import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "../ui";
import {
  BookOpen,
  Building2,
  Calendar,
  Cpu,
  Download,
  Hash,
  Upload,
  User,
} from "lucide-react";
import { FormState } from "@/interfaces/issueCertificate";

const CertificateForm = ({
  form,
  setField,
  errors,
  isGenerating,
  isIssuing,
  isAuthorized,
  handleGenerate,
  handleDownload,
  handleIssue,
  hasGenerated,
}: {
  form: FormState;
  setField: (field: keyof FormState, value: string) => void;
  errors: Partial<FormState>;
  isGenerating: boolean;
  isIssuing: boolean;
  isAuthorized: boolean | null;
  handleGenerate: () => void;
  handleDownload: () => void;
  handleIssue: () => void;
  hasGenerated: boolean;
}) => {
  return (
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
            // disabled={isGenerating || isIssuing}
            disabled={form.universityName.length > 0 || isGenerating || isIssuing}
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
            {isGenerating
              ? "Generating…"
              : hasGenerated
                ? "Re-generate"
                : "Generate Certificate"}
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
  );
};

export default CertificateForm;

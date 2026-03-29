import { CheckCircle2, Download, ExternalLink } from "lucide-react"
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "../ui"
import ResultField from "./ResultField"
import CopyButton from "./CopyButton"
import { FormState, IssuanceResult } from "@/interfaces/issueCertificate"
import { handleDownload } from "@/lib/issueCertificate"


const SuccessResultPanel = ({ result,pdfBlob,form, handleReset } : {result: IssuanceResult,pdfBlob:Blob,form:FormState, handleReset:()=>void}) => {
  return (
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
                onClick={()=>{handleDownload(pdfBlob, form);}}
                variant="outline"
                leftIcon={<Download className="h-4 w-4" />}
              >
                Download Certificate PDF
              </Button>
              <Button
                onClick={()=>{handleReset();}}
                variant="ghost"
              >
                Issue Another Certificate
              </Button>
            </div>
          </div>
  )
}

export default SuccessResultPanel
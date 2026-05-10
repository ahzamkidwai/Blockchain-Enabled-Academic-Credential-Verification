import { CONTRACT_ADDRESS, CREDENTIAL_ABI } from "@/lib/contract";
import { formatTimestampFull, isValidBytes32 } from "@/lib/utils";
import { useState } from "react";
import { useReadContract } from "wagmi";
import {
  AlertBox,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Skeleton,
} from "../ui";
import {
  AlertCircle,
  ExternalLink,
  Hash,
  Info,
  RefreshCw,
  Search,
  XCircle,
} from "lucide-react";
import VerdictBanner from "./VerdictBanner";
import { CredentialCard } from "../dashboard/CredentialCard";
import type { Credential } from "@/lib/types";

type ContractResult = [
  string,        // ipfsHash
  `0x${string}`, // issuer
  `0x${string}`, // student
  boolean,       // revoked
  bigint,        // expiresAt
  bigint         // issuedAt
];

const VerifyByHash = () => {
  const [inputHash, setInputHash] = useState("");
  const [searchHash, setSearchHash] = useState<`0x${string}` | undefined>();
  const [hasSearched, setHasSearched] = useState(false);

  const isValidHash = isValidBytes32(inputHash);

  const { data, isLoading, error, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "getCredentialByHash",
    args: searchHash ? [searchHash] : undefined,
    query: { enabled: !!searchHash },
  });

  console.log("Data inside verifyByHash : ", data);
  console.log("Error inside verifyByHash : ", error);
  console.log("Is Loading inside verifyByHash : ", isLoading);

  // const result = data as [boolean, Credential] | undefined;
  // const result = data as
  //   | [boolean, string, `0x${string}`, `0x${string}`, boolean]
  //   | undefined;
  const result = data as ContractResult | undefined;

  // const exists = result?.[0];
  // const ipfsHash = result?.[1];
  // const issuer = result?.[2];
  // const student = result?.[3];
  // const revoked = result?.[4];
  // const isValid = exists && !revoked;
  const ipfsHash = result?.[0];
  const issuer = result?.[1];
  const student = result?.[2];
  const revoked = result?.[3];
  const expiresAt = result?.[4];
  const issuedAt = result?.[5];
  const credential = result?.[1] ?? null;
  const exists = !!result;
  const isValid = exists && !revoked;
  console.log("Exists : ", exists);
  console.log("IPFS Hash : ", ipfsHash);
  console.log("Issuer : ", issuer);
  console.log("Student : ", student);
  console.log("Revoked : ", revoked);
  console.log("Is Valid : ", isValid);
  console.log("Credential : ", credential);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidHash) return;
    setSearchHash(inputHash as `0x${string}`);
    setHasSearched(true);
  };

  return (
    <div className="space-y-4">
      <AlertBox
        variant="info"
        icon={<Info className="h-4 w-4" />}
        title="How Hash Verification Works"
      >
        Enter the 32-byte keccak256 credential hash (0x…) to query the smart
        contract directly.
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
                  onClick={() => {
                    setInputHash("");
                    setSearchHash(undefined);
                    setHasSearched(false);
                  }}
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
        <AlertBox
          variant="error"
          icon={<AlertCircle className="h-4 w-4" />}
          title="Query Failed"
        >
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
                : credential && Number(credential?.tokenId) > 0
                  ? `This credential exists but is ${credential.status === 1 ? "Revoked" : credential.status === 2 ? "Suspended" : "Invalid"}.`
                  : "No credential found matching this hash on-chain."
            }
            checkedAt={formatTimestampFull(
              BigInt(Math.floor(Date.now() / 1000)),
            )}
          />

          {credential && Number(credential.tokenId) > 0 && (
            <div>
              <h3 className="font-display text-base font-medium text-foreground mb-3">
                Credential Details
              </h3>
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
          <p className="font-display text-lg text-foreground">
            No credential found
          </p>
          <p className="text-sm text-muted-foreground">
            This hash does not match any credential on-chain.
          </p>
        </div>
      )}
    </div>
  );
};

export default VerifyByHash;

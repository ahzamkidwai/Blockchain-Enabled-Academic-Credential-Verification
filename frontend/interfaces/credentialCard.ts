import type { StudentCredentialStruct } from "@/lib/types";

export interface CredentialCardProps {
  credential: StudentCredentialStruct;
  isLoading?: boolean;
  showActions?: boolean;
  onRevoke?: (tokenId: bigint) => void;
  onSuspend?: (tokenId: bigint) => void;
  onReinstate?: (tokenId: bigint) => void;
  compact?: boolean;
}
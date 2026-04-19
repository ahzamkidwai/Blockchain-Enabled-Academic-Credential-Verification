import { CheckCircle2, XCircle, PauseCircle } from "lucide-react";

export function StatusIcon({ status }: { status: number }) {
  switch (status) {
    case 0: return <CheckCircle2 className="h-4 w-4 text-success" />;
    case 1: return <XCircle className="h-4 w-4 text-destructive" />;
    case 2: return <PauseCircle className="h-4 w-4 text-warning" />;
    default: return null;
  }
}
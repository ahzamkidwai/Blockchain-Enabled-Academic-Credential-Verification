import { cn } from '@/lib/utils';
import {  CheckCircle2, ShieldX } from 'lucide-react';
import { Badge } from '../ui';


const VerdictBanner = ({
  isValid,
  label,
  subLabel,
  checkedAt,
}: {
  isValid: boolean;
  label: string;
  subLabel?: string;
  checkedAt: string;
}) => {
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

export default VerdictBanner
import { Award, CheckCircle2, PauseCircle, XCircle } from "lucide-react";
import { Card } from "../ui";
import { StudentCredentialStruct } from "@/lib/types";
import { cn } from "@/lib/utils";

export function DashboardStats({ credentials }: { credentials: StudentCredentialStruct[] }) {
  const active = credentials.filter((c) => !c.revoked).length;
  const revoked = credentials.filter((c) => c.revoked).length;
  const suspended = 0; 

  const stats = [
    { icon: Award, label: "Total", value: credentials.length, color: "text-primary" },
    { icon: CheckCircle2, label: "Active", value: active, color: "text-success" },
    { icon: XCircle, label: "Revoked", value: revoked, color: "text-destructive" },
    { icon: PauseCircle, label: "Suspended", value: suspended, color: "text-warning" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <Card key={label} className="p-4 flex items-center gap-3">
          <Icon className={cn("h-5 w-5 flex-shrink-0", color)} />
          <div>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="font-display text-xl font-semibold text-foreground">{value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
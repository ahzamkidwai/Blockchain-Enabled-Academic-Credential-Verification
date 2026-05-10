import { Card, CardContent, Skeleton } from "@/components/ui";

export function CredentialCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="h-1 w-full bg-muted shimmer" />
      <CardContent className="pt-5 pb-4 space-y-3">
        <div className="flex items-start gap-3">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-5 w-3/5" />
            <Skeleton className="h-4 w-2/5" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}

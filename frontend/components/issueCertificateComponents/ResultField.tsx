import { cn } from '@/lib/utils';
import CopyButton from './CopyButton';

const ResultField = ({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="flex items-center gap-1 min-w-0">
        <p
          className={cn(
            "text-sm text-foreground truncate",
            mono && "font-mono text-xs"
          )}
        >
          {value}
        </p>
        <CopyButton text={value} />
      </div>
    </div>
  );
}

export default ResultField;
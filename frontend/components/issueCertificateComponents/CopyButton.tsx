import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';
import { useState } from 'react'

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-1.5 text-muted-foreground hover:text-primary transition-colors"
      title="Copy"
    >
      <Copy className={cn("h-3.5 w-3.5", copied && "text-success")} />
    </button>
  );
}

export default CopyButton;

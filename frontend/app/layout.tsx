// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AcadChain — Blockchain Credential Verification",
  description:
    "Decentralized academic credential verification using soulbound NFTs and IPFS. Issue, verify, and manage tamper-proof academic certificates on-chain.",
  keywords: ["blockchain", "credentials", "NFT", "soulbound", "IPFS", "academic", "verification"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

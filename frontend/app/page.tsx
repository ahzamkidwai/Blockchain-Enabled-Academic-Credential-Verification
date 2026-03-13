// app/page.tsx
import Link from "next/link";
import { Shield, Zap, Globe, Lock, FileCheck, ArrowRight, GraduationCap, ChevronRight } from "lucide-react";
import { Button, Card, CardContent, Badge } from "@/components/ui";
import { StatsBar } from "@/components/StatsBar";

const FEATURES = [
  {
    icon: Shield,
    title: "Tamper-Proof Credentials",
    desc: "Cryptographic hashes stored on Ethereum/Polygon make credentials impossible to forge or alter.",
  },
  {
    icon: Lock,
    title: "Soulbound NFTs",
    desc: "Non-transferable certificates are permanently bound to the recipient's wallet address.",
  },
  {
    icon: Globe,
    title: "Decentralized Storage",
    desc: "Credential data encrypted and stored on IPFS for censorship-resistant, permanent access.",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    desc: "Anyone can verify credential authenticity in seconds by querying the smart contract.",
  },
  {
    icon: FileCheck,
    title: "Revocation Support",
    desc: "Institutions can revoke or suspend fraudulent credentials with on-chain audit trails.",
  },
  {
    icon: GraduationCap,
    title: "Student Control",
    desc: "Students own their credentials and control who can access their academic records.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden bg-mesh border border-border py-16 px-6 sm:px-10 text-center">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative space-y-6 max-w-3xl mx-auto">
          <Badge variant="accent" className="mx-auto">
            Powered by Ethereum & IPFS
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
            Academic Credentials,{" "}
            <span className="text-primary">Verified Forever</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A decentralized platform for issuing, managing, and verifying academic
            credentials as soulbound NFTs — tamper-proof, globally accessible, and
            fully transparent.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/verify">
              <Button size="lg" leftIcon={<Shield className="h-4 w-4" />}>
                Verify a Credential
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Student Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
          Platform Overview
        </h2>
        <StatsBar />
      </section>

      {/* Features */}
      <section>
        <div className="mb-8 text-center">
          <Badge className="mb-3">Why AcadChain</Badge>
          <h2 className="font-display text-3xl font-semibold text-foreground text-balance">
            Built for Trust at Scale
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Every component of this platform is designed to eliminate credential fraud
            and put academic integrity back in the hands of students and institutions.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="p-5 hover:shadow-[var(--shadow-lg)] transition-all duration-200 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 rounded-2xl border border-border bg-secondary/30">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
          Ready to get started?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Connect your wallet to issue credentials as an institution, or search for
          yours as a student.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/issue">
            <Button rightIcon={<ChevronRight className="h-4 w-4" />}>
              Issue Credential
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" rightIcon={<ChevronRight className="h-4 w-4" />}>
              View Dashboard
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

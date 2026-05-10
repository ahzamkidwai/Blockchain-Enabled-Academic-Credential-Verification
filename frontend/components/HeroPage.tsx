import Link from "next/link";
import { Badge, Button } from "./ui";
import { ArrowRight, Shield } from "lucide-react";

const HeroPage = () => {
    return (
        <div>
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
        </div>
    )
}

export default HeroPage
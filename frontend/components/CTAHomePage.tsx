import Link from 'next/link'
import { Button } from './ui'
import { ChevronRight } from 'lucide-react'

const CTAHomePage = () => {
    return (
        <div>
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
    )
}

export default CTAHomePage
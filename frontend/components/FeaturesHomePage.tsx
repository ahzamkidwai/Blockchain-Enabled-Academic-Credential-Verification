import { FEATURES } from '@/constants/features'
import { Badge, Card } from './ui'

const FeaturesHomePage = () => {
  return (
    <div>
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
    </div>
  )
}

export default FeaturesHomePage
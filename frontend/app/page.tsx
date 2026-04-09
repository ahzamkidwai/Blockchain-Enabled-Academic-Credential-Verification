// app/page.tsx
import { StatsBar } from "@/components/StatsBar";
import HeroPage from "@/components/HeroPage";
import FeaturesHomePage from "@/components/FeaturesHomePage";
import CTAHomePage from "@/components/CTAHomePage";

export default function HomePage() {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero */}
      <HeroPage />

      {/* Stats */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
          Platform Overview
        </h2>
        <StatsBar />
      </section>

      {/* Features */}
      <FeaturesHomePage />

      {/* CTA */}
      <CTAHomePage />
    </div>
  );
}

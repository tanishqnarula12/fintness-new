import TransitionSection from "@/components/TransitionSection";
import EcosystemSection from "@/components/EcosystemSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import LifePhaseSection from "@/components/LifePhaseSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-[#1a1a2e] font-sans">
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-[#1a1a2e] tracking-tight max-w-5xl mx-auto leading-tight">
          Let&apos;s build a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF]">
            fitter
          </span>{" "}
          financial future together
        </h1>
      </section>
      
      <TransitionSection />
      <EcosystemSection />
      <ProcessSection />
      <CTASection />
      <Testimonials />
      <TrustSection />
      <LifePhaseSection />
      <FinalCTA />
    </main>
  );
}

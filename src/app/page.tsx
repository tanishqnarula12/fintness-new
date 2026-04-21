import PiggyScrollScene from "@/components/PiggyScrollScene";
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
    <main className="bg-[#020617] min-h-screen text-white font-sans overflow-clip">
      <PiggyScrollScene />
      
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

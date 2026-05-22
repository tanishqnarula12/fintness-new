import TransitionSection from "@/components/TransitionSection";
import EcosystemSection from "@/components/EcosystemSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import LifePhaseSection from "@/components/LifePhaseSection";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import StatsBanner from "@/components/StatsBanner";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-[#1a1a2e] font-sans">
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white text-[#1a1a2e]">
        {/* Ambient glows */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#0066FF] pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-20 bg-[#00B2FF] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/5 border border-[#0066FF]/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0066FF]">Wealth Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6">
            Let&apos;s build a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF] drop-shadow-sm">
              fitter financial
            </span>{" "}
            future.
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-[#1a1a2e]/60 font-light leading-relaxed mb-10">
            We don&apos;t just manage wealth; we architect legacies. Experience goal-based financial planning designed for precision, growth, and long-term security.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00B2FF] text-white shadow-sm font-bold text-lg hover:scale-105 transition-all duration-300">
              Talk to Advisor
            </button>
          </div>
        </div>
      </section>
      
      <StatsBanner />
      <TransitionSection />
      <EcosystemSection />
      <ProcessSection />
      <ContactSection />
      <TrustSection />
      <LifePhaseSection />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}

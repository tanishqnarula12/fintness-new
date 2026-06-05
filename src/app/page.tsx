"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TransitionSection from "@/components/TransitionSection";
import EcosystemSection from "@/components/EcosystemSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import WhyUsOrbital from "@/components/ui/WhyUsOrbital";
import FoundersDesk from "@/components/FoundersDesk";
import LifePhaseSection from "@/components/LifePhaseSection";
import FinalCTA from "@/components/FinalCTA";
import StatsBanner from "@/components/StatsBanner";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-[#1a1a2e] font-sans">
      <section className="relative hero-height w-full flex items-center justify-start px-6 md:px-12 lg:px-20 overflow-hidden bg-white text-[#1a1a2e] pt-24">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          {/* Desktop Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-100 hidden md:block"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Mobile Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-100 block md:hidden"
          >
            <source src="/hero-video-mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle gradient overlay to guarantee text legibility on LHS while showing the video clearly on RHS */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-white/40 to-transparent w-full md:w-[70%] lg:w-[55%]" />
        </div>

        {/* Ambient glows */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-[120px] opacity-10 bg-[#0066FF] pointer-events-none z-0" />

        <div className="relative z-10 w-full mt-4 md:mt-6">
          {/* LHS - Text Content (max-w bounds it to the left side) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="w-full max-w-lg lg:max-w-xl flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0"
          >
            <motion.h1 
              variants={{ 
                hidden: { opacity: 0, x: -60 }, 
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } 
              }}
              className="text-[clamp(2.75rem,6vw,5rem)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-6 text-[#1a1a2e] text-center md:text-left"
            >
              Let&apos;s Build <br className="block md:hidden" /> Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF] drop-shadow-sm whitespace-nowrap">
                Fitter Financial
              </span>{" "}
              <br className="block md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF] drop-shadow-sm">
                Future
              </span>{" "}
              Together.
            </motion.h1>
            
            <motion.p 
              variants={{ 
                hidden: { opacity: 0, x: -60 }, 
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } 
              }}
              className="max-w-[46ch] text-base md:text-lg text-[#334155] font-medium leading-[1.6] mb-8 text-center md:text-left"
            >
              Turning ambitions into achievements through personalized financial guidance and trusted expertise.
            </motion.p>

            <motion.div 
              variants={{ 
                hidden: { opacity: 0, x: -60 }, 
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } 
              }}
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
            >
              <Link href="/contact" className="px-10 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00B2FF] text-white shadow-lg shadow-[#0066FF]/25 font-bold text-lg hover:scale-105 hover:brightness-110 active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] focus:outline-none transition-all duration-300 cursor-pointer min-h-[44px] inline-block text-center">
                Talk to Advisor
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <StatsBanner />
      <EcosystemSection />
      <ProcessSection />
      <WhyUsOrbital />
      <FoundersDesk />
      <LifePhaseSection />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}

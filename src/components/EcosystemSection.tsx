"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wallet, TrendingUp, Shield, Scroll, ReceiptText, Landmark } from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";

const CARDS = [
  { icon: Wallet, title: "Wealth Management", desc: "Holistic strategies to preserve and grow your capital over time.", accent: "#0066FF", image: "/wealth_management_comp.png", stroke: 1.65 },
  { icon: TrendingUp, title: "Investment Planning", desc: "Data-driven portfolio architecture aligned with your risk profile.", accent: "#00B2FF", image: "/investment_planning_comp.png", stroke: 2.25 },
  { icon: Shield, title: "Risk Mitigation", desc: "Comprehensive protection strategies against market volatility.", accent: "#0066FF", image: "/risk_mitigation_comp.png", stroke: 1.85 },
  { icon: Scroll, title: "Estate Planning", desc: "Structuring your legacy for seamless intergenerational wealth transfer.", accent: "#00B2FF", image: "/estate_planning_comp.png", stroke: 1.85 },
  { icon: ReceiptText, title: "Tax Optimization", desc: "Proactive tax planning to maximize your after-tax returns.", accent: "#0066FF", image: "/tax_optimization_comp.png", stroke: 1.65 },
  { icon: Landmark, title: "Loan Against Securities", desc: "Leveraging your investments to provide smart and efficient access to capital.", accent: "#00B2FF", image: "/loan_against_securities_comp.png", stroke: 1.85 }
];

function StackCard({ card, idx, progress, range, targetScale }: { card: any, idx: number, progress: any, range: number[], targetScale: number }) {
  const containerRef = useRef(null);
  
  // The scale shrinks the card as the user scrolls past it, creating a deep stack effect
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Parallax effect for the image to give it life as you scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  // Fade out the image of this card as the next card scrolls up to cover it
  const fadeOutStart = (idx + 0.5) / 6; // 6 is CARDS.length
  const fadeOutEnd = (idx + 0.9) / 6;
  const isLastCard = idx === 5; // 5 is CARDS.length - 1
  const imageOpacity = useTransform(progress, [fadeOutStart, fadeOutEnd], [1, isLastCard ? 1 : 0]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-6">
      <motion.div 
        style={{ 
          scale, 
          top: `calc(15vh + ${idx * 20}px)` 
        }} 
        className="flex flex-col md:flex-row relative h-[50vh] md:h-[350px] w-full max-w-3xl mx-auto rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] origin-top bg-[#F4F5F7] border border-[#1a1a2e]/[0.06]"
      >
        {/* Left Side: 3D Image inside Card */}
        <div className="relative w-full md:w-[45%] h-1/2 md:h-full overflow-hidden shrink-0 bg-[#F4F5F7] border-b md:border-b-0 md:border-r border-[#1a1a2e]/[0.04]">
          <motion.div
            style={{ scale: imageScale }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Subtle glow behind the 3D component inside the card */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-36 h-36 md:w-48 md:h-48 rounded-full blur-[50px]"
                style={{ background: card.accent }}
              />
            </div>
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={card.image} 
              alt={card.title} 
              className="relative z-10 w-full h-full object-contain object-center p-5 md:p-6 drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-transform duration-700 hover:scale-110"
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center relative bg-[#F4F5F7]">
          
          {/* Glowing Icon */}
          <div className="mb-4 md:mb-5 relative w-12 h-12">
            <div 
              className="absolute inset-0 rounded-xl opacity-15 blur-lg"
              style={{ background: card.accent }}
            />
            <div className="relative w-full h-full rounded-xl border border-[#1a1a2e]/5 bg-white backdrop-blur-xl flex items-center justify-center shadow-md">
              <card.icon 
                className="w-5 h-5 md:w-6 md:h-6" 
                style={{ color: card.accent }} 
                strokeWidth={card.stroke || 2} 
              />
            </div>
          </div>

          <h3 className="font-bold text-[#1a1a2e] tracking-tight text-xl md:text-2xl lg:text-3xl mb-3 leading-tight">
            {card.title}
          </h3>
          
          <p className="text-[#1a1a2e]/60 leading-relaxed font-normal text-sm md:text-base max-w-lg">
            {card.desc}
          </p>

          {/* Accent Line */}
          <div 
            className="mt-4 md:mt-6 h-[2px] w-12 md:w-16 rounded-full opacity-60" 
            style={{ 
              background: card.accent, 
            }} 
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function EcosystemSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Switched to light mode theme
    <section id="services" className="bg-white border-y border-slate-200 relative w-full" ref={containerRef}>
      
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-10 bg-[#0066FF] pointer-events-none" />
      <div className="absolute bottom-1/2 left-0 w-80 h-80 rounded-full blur-[100px] opacity-10 bg-[#00B2FF] pointer-events-none" />

      {/* Introduction Header - Sticky at the top */}
      <div className="sticky top-0 h-[40vh] md:h-[45vh] flex flex-col items-center justify-center z-10 w-full max-w-7xl mx-auto px-6 text-center pointer-events-none">
        <SparklesText 
          text="Our Services" 
          colors={{ first: "#0066FF", second: "#00B2FF" }} 
          className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 pointer-events-auto"
        />
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1a2e] mb-4 tracking-tight pointer-events-auto">
          A Complete Financial Ecosystem
        </h3>
        <p className="text-[#1a1a2e]/60 text-lg md:text-xl max-w-2xl text-center font-normal leading-relaxed pointer-events-auto">
          Everything you need to manage, grow, and protect your wealth.
        </p>
      </div>

      {/* The Stacked Cards Container */}
      <div className="relative z-10 pb-[10vh]">
        {CARDS.map((card, i) => {
          const targetScale = 1 - ((CARDS.length - i) * 0.04);
          const range = [i * (1 / CARDS.length), 1];

          return (
            <StackCard 
              key={i} 
              idx={i} 
              card={card} 
              progress={scrollYProgress} 
              range={range} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
      
    </section>
  );
}

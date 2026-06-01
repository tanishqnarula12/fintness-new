"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wallet, TrendingUp, Shield, Scroll, ReceiptText, RockingChair } from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";

const CARDS = [
  { icon: Wallet, title: "Wealth Management", desc: "Holistic strategies to preserve and grow your capital over time.", accent: "#0066FF", image: "/wealth_management_real.png", stroke: 1.65 },
  { icon: TrendingUp, title: "Investment Planning", desc: "Data-driven portfolio architecture aligned with your risk profile.", accent: "#00B2FF", image: "/investment_planning_real.jpeg", stroke: 2.25 },
  { icon: Shield, title: "Risk Mitigation", desc: "Comprehensive protection strategies against market volatility.", accent: "#0066FF", image: "/risk_mitigation_real.png", stroke: 1.85 },
  { icon: Scroll, title: "Estate Planning", desc: "Structuring your legacy for seamless intergenerational wealth transfer.", accent: "#00B2FF", image: "/estate_planning_real.jpeg", stroke: 1.85 },
  { icon: ReceiptText, title: "Tax Optimization", desc: "Proactive tax planning to maximize your after-tax returns.", accent: "#0066FF", image: "/tax_planning_real.jpeg", stroke: 1.65 },
  { icon: RockingChair, title: "Retirement Strategy", desc: "Designing sustainable income streams for your post-career life.", accent: "#00B2FF", image: "/retirement_real.jpeg", stroke: 1.85 }
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

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-6">
      <motion.div 
        style={{ 
          scale, 
          top: `calc(12vh + ${idx * 20}px)` 
        }} 
        className="flex flex-col md:flex-row relative h-[60vh] md:h-[400px] w-full max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] origin-top bg-[#F4F5F7] border border-[#1a1a2e]/[0.06]"
      >
        {/* Left Side: Cinematic Image */}
        <div className="relative w-full md:w-[40%] h-1/2 md:h-full overflow-hidden shrink-0 bg-[#F4F5F7]">
          <motion.div
            style={{ scale: imageScale }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Ambient Background Blur from the image itself */}
            <div className="absolute inset-0 z-0 overflow-hidden">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src={card.image} 
                 alt="" 
                 className="w-full h-full object-cover blur-[40px] opacity-40 scale-150 saturate-150"
                 aria-hidden="true"
               />
               <div className="absolute inset-0 bg-[#F4F5F7]/30 backdrop-blur-[2px]" />
            </div>
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={card.image} 
              alt={card.title} 
              className="relative z-10 w-full h-full object-contain object-center p-6 md:p-8 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center relative bg-[#F4F5F7]">
          
          {/* Glowing Icon */}
          <div className="mb-6 md:mb-8 relative w-14 h-14">
            <div 
              className="absolute inset-0 rounded-2xl opacity-15 blur-lg"
              style={{ background: card.accent }}
            />
            <div className="relative w-full h-full rounded-2xl border border-[#1a1a2e]/5 bg-white backdrop-blur-xl flex items-center justify-center shadow-md">
              <card.icon 
                className="w-6 h-6 md:w-7 md:h-7" 
                style={{ color: card.accent }} 
                strokeWidth={card.stroke || 2} 
              />
            </div>
          </div>

          <h3 className="font-bold text-[#1a1a2e] tracking-tight text-2xl md:text-4xl mb-4 leading-tight">
            {card.title}
          </h3>
          
          <p className="text-[#1a1a2e]/60 leading-relaxed font-normal text-base md:text-lg max-w-lg">
            {card.desc}
          </p>

          {/* Accent Line */}
          <div 
            className="mt-6 md:mt-10 h-[2px] w-12 md:w-16 rounded-full opacity-60" 
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

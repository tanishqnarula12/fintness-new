"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface StatItemProps {
  endValue: number;
  suffix?: string;
  title: string;
  subtitle: string;
  isAccent?: boolean;
}

const StatItem = ({ endValue, suffix = "", title, subtitle, isAccent = false }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      // Use framer-motion's highly optimized animate function
      const controls = animate(count, endValue, { 
        duration: 2.5, // 2.5 seconds for all
        ease: "easeOut" 
      });
      return controls.stop;
    }
  }, [isInView, endValue, count]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-6 w-full">
      <h3 className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight flex items-center justify-center ${isAccent ? 'text-[#00B2FF]' : 'text-[#1a1a2e]'}`}>
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </h3>
      <p className="text-base md:text-lg font-medium text-[#1a1a2e]/80 mb-1">{title}</p>
      <p className="text-xs md:text-sm text-[#1a1a2e]/50 font-light">{subtitle}</p>
    </div>
  );
};

export default function StatsBanner() {
  return (
    <div className="w-full px-6 -mt-16 md:-mt-24 relative z-20 pb-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#1a1a2e]/[0.04] p-4 md:p-8 backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-[#1a1a2e]/10">
          
          <StatItem 
            endValue={10} 
            suffix="+" 
            title="Years" 
            subtitle="Proven Expertise" 
          />
          
          <StatItem 
            endValue={200} 
            suffix="+ Cr" 
            title="AUM" 
            subtitle="Assets Managed" 
          />
          
          <StatItem 
            endValue={400} 
            suffix="+" 
            title="Families" 
            subtitle="Trusted Partners" 
          />
          
          <StatItem 
            endValue={98} 
            suffix="%" 
            title="Success" 
            subtitle="Claim Settlement" 
            isAccent={true}
          />
          
        </div>
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import { Crosshair, Scale, Headphones, Users, Database } from "lucide-react";

const TRUST_POINTS = [
  { icon: Crosshair, num: "01", title: "Goal-based Advice", desc: "Every recommendation is laser-focused on your defined financial targets — not generic products." },
  { icon: Scale, num: "02", title: "Unbiased Recommendations", desc: "Fiduciary-first approach ensuring your interests always come before commissions." },
  { icon: Headphones, num: "03", title: "End-to-end Support", desc: "From onboarding to portfolio reviews — we handle every complexity behind the scenes." },
  { icon: Users, num: "04", title: "Dedicated Manager", desc: "A single point of contact who knows your portfolio inside-out and proactively monitors it." },
  { icon: Database, num: "05", title: "Data-driven Decisions", desc: "Quantitative research and real-time analytics powering every investment decision we make." }
];

export default function TrustSection() {
  return (
    <section className="py-24 w-full bg-[#FAFAFC] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF] rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[#0066FF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Why Us</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] tracking-tight">
              Why Clients Trust<br className="hidden md:block" /> Fintness Finserv
            </h2>
          </motion.div>
        </div>

        {/* One-Sided Timeline Layout */}
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full max-w-4xl mx-auto">
          {/* Left Timeline Line */}
          <div className="absolute w-[2px] h-full left-[43px] md:left-[67px] top-0 bg-gradient-to-b from-transparent via-[#1a1a2e]/10 to-transparent"></div>

          {TRUST_POINTS.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="relative flex items-start md:items-center mb-12 last:mb-0 w-full group"
            >
              {/* Timeline Node (Number) */}
              <div className="z-20 flex-shrink-0 flex items-center justify-center bg-[#0066FF] shadow-[0_4px_20px_rgba(0,102,255,0.25)] group-hover:shadow-[0_4px_30px_rgba(0,102,255,0.4)] transition-all duration-300 w-14 h-14 rounded-full mr-6 md:mr-10 mt-4 md:mt-0">
                <h1 className="font-bold text-lg text-white">{point.num}</h1>
              </div>

              {/* Content Card */}
              <div className="flex-1 rounded-2xl bg-white border border-[#1a1a2e]/[0.06] shadow-sm px-6 py-6 md:px-8 md:py-8 hover:-translate-y-1 hover:shadow-lg hover:border-[#0066FF]/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAFC] flex items-center justify-center border border-[#1a1a2e]/[0.06] group-hover:bg-[#0066FF]/5 group-hover:border-[#0066FF]/20 transition-all duration-300">
                    <point.icon className="w-5 h-5 text-[#1a1a2e]/60 group-hover:text-[#0066FF]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-xl text-[#1a1a2e] group-hover:text-[#0066FF] transition-colors duration-300">
                    {point.title}
                  </h3>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed text-[#1a1a2e]/60 font-medium">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

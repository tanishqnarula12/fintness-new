"use client";
import { motion } from "framer-motion";
import { Search, Map, Rocket, Settings } from "lucide-react";

const STEPS = [
  { num: "01", title: "Discover", desc: "We deep-dive into your current financial landscape, understanding assets, liabilities, goals, and risk appetite.", icon: Search },
  { num: "02", title: "Plan", desc: "Our experts architect a comprehensive strategy tailored to your unique situation and long-term vision.", icon: Map },
  { num: "03", title: "Execute", desc: "We deploy capital with surgical precision across optimized vehicles — equities, debt, alternatives, and insurance.", icon: Rocket },
  { num: "04", title: "Optimize", desc: "Continuous monitoring and iterative rebalancing ensure your portfolio adapts to market shifts and life changes.", icon: Settings },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-80 h-80 bg-[#00A3FF] rounded-full blur-[180px] opacity-[0.03] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-20"
      >
        <p className="text-[#00A3FF] text-sm font-medium tracking-[0.2em] uppercase mb-4">How We Work</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Our Process
        </h2>
      </motion.div>

      <div className="relative max-w-4xl">
        {/* Vertical timeline line */}
        <div className="absolute top-0 bottom-0 left-8 md:left-10 w-[1px] bg-white/[0.04]" />
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 left-8 md:left-10 w-[1px] bg-gradient-to-b from-[#4FFFB0] via-[#00A3FF] to-transparent origin-top"
        />

        <div className="flex flex-col gap-0 relative z-10">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.15 * idx, duration: 0.7, ease: "easeOut" }}
              className="flex items-stretch group"
            >
              {/* Timeline node */}
              <div className="flex flex-col items-center shrink-0 w-16 md:w-20">
                <div className="relative flex items-center justify-center w-[18px] h-[18px] mt-10">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#4FFFB0]/50 transition-all duration-500" />
                  {/* Inner dot */}
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#4FFFB0] group-hover:shadow-[0_0_12px_rgba(79,255,176,0.6)] transition-all duration-500" />
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 py-6 pl-4 md:pl-8 pr-4 mb-4 rounded-2xl group-hover:bg-white/[0.02] transition-colors duration-500">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="hidden md:flex w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.05] items-center justify-center shrink-0 group-hover:bg-[#00A3FF]/10 group-hover:border-[#00A3FF]/20 transition-all duration-500">
                    <step.icon className="w-6 h-6 text-white/30 group-hover:text-[#00A3FF] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    {/* Step number */}
                    <span className="text-xs font-mono text-white/20 tracking-widest group-hover:text-[#4FFFB0]/60 transition-colors duration-500">
                      STEP {step.num}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mt-2 mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/35 text-base md:text-lg leading-relaxed font-light max-w-lg group-hover:text-white/60 transition-colors duration-500">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

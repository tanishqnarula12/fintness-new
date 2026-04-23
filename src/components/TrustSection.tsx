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
    <section className="py-24 px-6 max-w-7xl mx-auto w-full relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3FF] rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-20"
      >
        <p className="text-[#00A3FF] text-sm font-medium tracking-[0.2em] uppercase mb-4">Why Us</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Why Clients Trust<br className="hidden md:block" /> Fintness Finserv
        </h2>
      </motion.div>

      {/* Numbered list layout — completely different from cards */}
      <div className="flex flex-col">
        {TRUST_POINTS.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.08 * idx, duration: 0.6, ease: "easeOut" }}
            className="group border-t border-white/[0.04] last:border-b hover:bg-white/[0.015] transition-all duration-500"
          >
            <div className="flex items-start gap-6 md:gap-10 py-8 md:py-10 px-2 md:px-6">
              {/* Number */}
              <span className="text-4xl md:text-5xl font-extralight text-white/[0.06] group-hover:text-white/[0.15] transition-colors duration-500 tabular-nums shrink-0 w-16 md:w-20">
                {point.num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#00A3FF]/10 group-hover:border-[#00A3FF]/20 transition-all duration-500">
                <point.icon className="w-5 h-5 text-white/20 group-hover:text-[#00A3FF] transition-colors duration-500" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-2 tracking-tight group-hover:text-white transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-white/30 text-sm md:text-base font-light leading-relaxed max-w-xl group-hover:text-white/55 transition-colors duration-500">
                  {point.desc}
                </p>
              </div>

              {/* Hover arrow indicator */}
              <div className="hidden md:flex items-center h-12 mt-1">
                <div className="w-8 h-[1px] bg-transparent group-hover:bg-[#00A3FF]/40 transition-all duration-500 group-hover:w-12 rounded-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

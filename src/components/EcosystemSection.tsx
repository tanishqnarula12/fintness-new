"use client";
import { motion } from "framer-motion";
import { useRef, useCallback } from "react";
import { Wallet, LineChart, Shield, Landmark, PieChart, Coins } from "lucide-react";

const CARDS = [
  { icon: Wallet, title: "Wealth Management", desc: "Holistic strategies to preserve and grow your capital over time.", accent: "#0066FF" },
  { icon: LineChart, title: "Investment Planning", desc: "Data-driven portfolios tailored for maximum risk-adjusted returns.", accent: "#00B2FF" },
  { icon: Shield, title: "Risk Mitigation", desc: "Advanced protection mechanisms for structured life security.", accent: "#7c6baa" },
  { icon: Landmark, title: "Estate Planning", desc: "Secure generational wealth transfer and legacy continuity.", accent: "#c9852a" },
  { icon: PieChart, title: "Tax Optimization", desc: "Strategic structuring to dynamically maximize your post-tax yield.", accent: "#c94e7c" },
  { icon: Coins, title: "Retirement Strategy", desc: "Reliable and structured cash flows for lasting financial independence.", accent: "#1e8a9a" }
];

function SpotlightCard({ card, idx }: { card: typeof CARDS[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.08 * idx, duration: 0.6, ease: "easeOut" }}
      className={`spotlight-card group relative rounded-3xl p-[1px] cursor-default ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Animated border gradient */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${card.accent}20, transparent 50%)` }}
      />

      <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#1a1a2e]/[0.06] group-hover:border-[#0066FF]/20 shadow-[0_2px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(0,102,255,0.1)] transition-all duration-500 overflow-hidden">
        {/* Mouse-tracking spotlight */}
        <div className="spotlight" />

        {/* Corner accent glow */}
        <div 
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-all duration-700"
          style={{ background: card.accent }}
        />

        <div className="relative z-10">
          {/* Icon with accent ring */}
          <div className="relative w-16 h-16 mb-8">
            <div 
              className="absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: card.accent }}
            />
            <div className="w-full h-full rounded-2xl border border-[#1a1a2e]/[0.06] bg-[#1a1a2e]/[0.02] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <card.icon 
                className="w-7 h-7 transition-colors duration-500" 
                style={{ color: card.accent }} 
                strokeWidth={1.5} 
              />
            </div>
          </div>

          <h3 className={`font-semibold text-[#1a1a2e] mb-4 tracking-tight group-hover:text-[#1a1a2e] transition-colors duration-300 ${idx === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
            {card.title}
          </h3>
          <p className={`text-[#1a1a2e]/50 leading-relaxed font-medium group-hover:text-[#1a1a2e]/70 transition-colors duration-500 ${idx === 0 ? "text-base md:text-lg max-w-md" : "text-sm"}`}>
            {card.desc}
          </p>

          {/* Bottom accent line on hover */}
          <div className="mt-6 h-[2px] w-0 group-hover:w-12 transition-all duration-500 rounded-full" style={{ background: card.accent }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function EcosystemSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[#0066FF] text-sm font-medium tracking-[0.2em] uppercase mb-4">Our Services</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6 tracking-tight">
            A Complete Financial Ecosystem
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[#1a1a2e]/45 text-lg md:text-xl max-w-2xl mx-auto font-light"
        >
          Everything you need to manage, grow, and protect your wealth.
        </motion.p>
      </div>

      {/* Bento Grid — first card is large */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        {CARDS.map((card, idx) => (
          <SpotlightCard key={idx} card={card} idx={idx} />
        ))}
      </div>
    </section>
  );
}

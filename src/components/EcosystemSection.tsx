"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // For CSS spotlight
    cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
    cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

    // For 3D tilt
    const width = rect.width;
    const height = rect.height;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.08 * idx, duration: 0.6, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      className={`spotlight-card group relative rounded-3xl p-[1px] cursor-default z-10`}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full transition-shadow duration-500 hover:z-50 relative"
      >
        {/* Animated border gradient */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${card.accent}20, transparent 50%)`, transform: "translateZ(-10px)" }}
        />

        <div 
          className="relative h-full bg-white rounded-3xl p-8 border border-[#1a1a2e]/10 group-hover:border-[#0066FF]/20 shadow-[0_12px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_50px_rgba(0,102,255,0.12)] transition-all duration-500 overflow-hidden"
          style={{ transform: "translateZ(20px)" }}
        >
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

          <h3 className={`font-semibold text-[#1a1a2e] mb-4 tracking-tight group-hover:text-[#1a1a2e] transition-colors duration-300 text-xl`}>
            {card.title}
          </h3>
          <p className={`text-[#1a1a2e]/50 leading-relaxed font-medium group-hover:text-[#1a1a2e]/70 transition-colors duration-500 text-sm`}>
            {card.desc}
          </p>

          {/* Bottom accent line on hover */}
          <div className="mt-6 h-[2px] w-0 group-hover:w-12 transition-all duration-500 rounded-full" style={{ background: card.accent }} />
        </div>
      </div>
      </motion.div>
    </motion.div>
  );
}

export default function EcosystemSection() {
  return (
    <section id="services" className="py-24 w-full bg-[#F4F5F7] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-[#0066FF] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Our Services</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1a2e] mb-6 tracking-tight">
              A Complete Financial Ecosystem
            </h3>
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
      </div>
    </section>
  );
}

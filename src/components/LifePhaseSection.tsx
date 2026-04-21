"use client";
import { motion } from "framer-motion";
import { Briefcase, Building2, Globe, Heart } from "lucide-react";

const PHASES = [
  {
    title: "Salaried Professionals",
    desc: "Maximize your take-home through smart tax planning, equity investing, and retirement corpus building.",
    icon: Briefcase,
    accent: "#4FFFB0",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Business Owners",
    desc: "Separate personal and business wealth. Structure your finances for growth, succession, and protection.",
    icon: Building2,
    accent: "#00A3FF",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "NRIs",
    desc: "Navigate cross-border taxation, repatriation, and investment regulations with expert guidance.",
    icon: Globe,
    accent: "#A78BFA",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Families",
    desc: "Build generational wealth with estate planning, education funds, and comprehensive family coverage.",
    icon: Heart,
    accent: "#F59E0B",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
  }
];

export default function LifePhaseSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full relative">
      <div className="mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[#F59E0B] text-sm font-medium tracking-[0.2em] uppercase mb-4">Who We Serve</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Tailored for Your Life Stage
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PHASES.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 * idx, duration: 0.6, ease: "easeOut" }}
            className="group relative h-[360px] md:h-[420px] rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${phase.image})` }}
            />
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617]/30" />
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: `linear-gradient(to top, ${phase.accent}15, transparent 60%)` }}
            />

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-white/[0.06] backdrop-blur-sm transition-all duration-500 group-hover:scale-110"
                style={{ background: `${phase.accent}10` }}
              >
                <phase.icon className="w-5 h-5 transition-colors duration-500" style={{ color: phase.accent }} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
                {phase.title}
              </h3>
              
              {/* Description slides up on hover */}
              <div className="overflow-hidden">
                <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {phase.desc}
                </p>
              </div>

              {/* Accent line */}
              <div className="mt-5 h-[2px] w-0 group-hover:w-16 rounded-full transition-all duration-700" style={{ background: phase.accent }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

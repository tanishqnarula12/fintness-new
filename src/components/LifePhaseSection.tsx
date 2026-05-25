"use client";
import { motion } from "framer-motion";

const PHASES = [
  {
    title: "Salaried Professionals",
    category: "Wealth Creation",
    categoryColor: "#0066FF",
    desc: "Optimization strategies for tax planning, wealth creation, and retirement mapping for high-earning experts.",
    bullets: ["Tax Optimization", "Automated SIP Management"],
    image: "/salaried-professionals.jpeg",
  },
  {
    title: "Business Owners",
    category: "Asset Protection",
    categoryColor: "#00B2FF",
    desc: "Integrated cash flow management and robust protection plans to separate personal wealth from business risk.",
    bullets: ["Cash Flow Smoothing", "Key-person Protection"],
    image: "/business-owners.jpeg",
  },
  {
    title: "Non-Resident Indians",
    category: "Global Mobility",
    categoryColor: "#7c6baa",
    desc: "Seamless cross-border planning, NRE/NRO account optimization, and Indian market exposure management.",
    bullets: ["Cross-border Compliance", "Remittance Strategy"],
    image: "/nris.jpeg",
  },
  {
    title: "Modern Families",
    category: "Legacy Building",
    categoryColor: "#c9852a",
    desc: "Comprehensive insurance layering and estate planning to ensure smooth wealth transition for the next generation.",
    bullets: ["Will & Trust Creation", "Child Education Corpus"],
    image: "/modern-families.jpeg",
  },
];

export default function LifePhaseSection() {
  return (
    <section id="careers" className="py-24 px-6 max-w-7xl mx-auto w-full relative">
      <div className="mb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-[#0066FF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Who We Serve</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] tracking-tight">
            Tailored for Your Life Stage
          </h2>
          <p className="text-[#1a1a2e]/50 text-base md:text-lg font-light leading-relaxed mt-5 max-w-2xl">
            We specialize in solving the complex financial challenges of high-achieving individuals and families.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PHASES.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 * idx, duration: 0.6, ease: "easeOut" }}
            className="group bg-[#f0f4fa] rounded-3xl overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-shadow duration-500"
          >
            {/* Image Side */}
            <div className="relative w-full sm:w-[45%] h-[220px] sm:h-auto min-h-[260px] overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={phase.image}
                alt={phase.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center p-6 sm:p-8 flex-1">
              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: phase.categoryColor }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: phase.categoryColor }}
                >
                  {phase.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-3 tracking-tight leading-tight">
                {phase.title}
              </h3>

              {/* Description */}
              <p className="text-[#1a1a2e]/55 text-sm font-normal leading-relaxed mb-5">
                {phase.desc}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5">
                {phase.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5">
                    <svg
                      className="w-4 h-4 shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill={phase.categoryColor} fillOpacity="0.12" />
                      <path
                        d="M6.5 10.5L8.5 12.5L13.5 7.5"
                        stroke={phase.categoryColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-[#1a1a2e]/80">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Crosshair, Scale, Headphones, Users, Database } from "lucide-react";

const ITEMS = [
  {
    id: 1,
    icon: Crosshair,
    title: "Goal-based Advice",
    description: "Every recommendation is laser-focused on your defined financial targets — not generic products.",
  },
  {
    id: 2,
    icon: Scale,
    title: "Unbiased Recommendations",
    description: "Fiduciary-first approach ensuring your interests always come before commissions.",
  },
  {
    id: 3,
    icon: Headphones,
    title: "End-to-end Support",
    description: "From onboarding to portfolio reviews — we handle every complexity behind the scenes.",
  },
  {
    id: 4,
    icon: Users,
    title: "Dedicated Manager",
    description: "A single point of contact who knows your portfolio inside-out and proactively monitors it.",
  },
  {
    id: 5,
    icon: Database,
    title: "Data-driven Decisions",
    description: "Quantitative research and real-time analytics powering every investment decision we make.",
  },
];

export default function WhyUsOrbital() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate the orbital and auto-cycle the active item
  useEffect(() => {
    // Rotate the orbital smoothly regardless of pause, but maybe pause it too?
    // Let's just keep the orbital spinning slowly, it looks cool.
    const rotationInterval = setInterval(() => {
      setRotation((prev) => prev + 0.15);
    }, 20);

    return () => clearInterval(rotationInterval);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    // Auto cycle the active item every 4 seconds
    const cycleInterval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % ITEMS.length);
    }, 4000);

    return () => clearInterval(cycleInterval);
  }, [isPaused, activeIdx]);

  const activeItem = ITEMS[activeIdx];
  const ActiveIcon = activeItem.icon;
  const RADIUS = 180; // orbital radius in px

  return (
    <section className="py-24 md:py-32 px-6 w-full relative overflow-hidden bg-[#FAFAFC]">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-10 bg-[#0066FF] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full blur-[100px] opacity-10 bg-[#00B2FF] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10">
        
        {/* Left Side: Content & Title */}
        <div className="flex-1 w-full max-w-2xl z-10 flex flex-col justify-center">
          <div className="mb-10 lg:mb-12 text-center lg:text-left">
            <SparklesText 
              text="Why Us" 
              colors={{ first: "#0066FF", second: "#00B2FF" }} 
              className="text-4xl md:text-5xl lg:text-7xl mb-4 lg:mb-6"
            />
          </div>

          {/* Active Item Display Box */}
          <div 
            className="relative h-[260px] md:h-[240px] bg-white rounded-3xl border border-slate-200 shadow-sm shadow-slate-200/50 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Glowing top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066FF] to-[#00B2FF]" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 p-8 md:p-10 flex flex-col justify-center"
              >
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF]/10 to-[#00B2FF]/10 flex shrink-0 items-center justify-center border border-[#0066FF]/10 shadow-sm">
                    <ActiveIcon className="w-7 h-7 text-[#0066FF]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] tracking-tight">
                    {activeItem.title}
                  </h3>
                </div>
                <p className="text-[#1a1a2e]/60 text-base md:text-lg leading-relaxed font-medium">
                  {activeItem.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress Bar for the active item */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
               {!isPaused && (
                 <motion.div 
                   key={`progress-${activeItem.id}`}
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 4, ease: "linear" }}
                   className="h-full bg-gradient-to-r from-[#0066FF] to-[#00B2FF]"
                 />
               )}
            </div>
          </div>
        </div>

        {/* Right Side: Orbital System */}
        <div 
          className="flex-1 w-full flex justify-center items-center py-10 lg:py-0 mt-8 lg:mt-0"
        >
          <div
            className="relative scale-90 md:scale-100"
            style={{ width: RADIUS * 2 + 100, height: RADIUS * 2 + 100 }}
          >
            {/* Orbital rings */}
            <div
              className="absolute rounded-full border border-slate-200 pointer-events-none"
              style={{
                width: RADIUS * 2, height: RADIUS * 2,
                top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              }}
            />
            <div
              className="absolute rounded-full border border-dashed border-[#0066FF]/25 pointer-events-none animate-[spin_60s_linear_infinite]"
              style={{
                width: RADIUS * 2 + 80, height: RADIUS * 2 + 80,
                top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              }}
            />

            {/* Center Logo */}
            <div
              className="absolute z-20 flex flex-col items-center justify-center"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
              <div className="absolute w-32 h-32 rounded-full border border-[#0066FF]/15" />
              <div className="absolute w-36 h-36 rounded-full border border-[#0066FF]/5" />
              <div className="absolute w-24 h-24 rounded-full bg-[#0066FF]/5 blur-[15px]" />
              <div className="relative w-24 h-24 rounded-full bg-white shadow-md border border-slate-100 z-30 flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain" />
              </div>
            </div>

            {/* Orbital Nodes */}
            {ITEMS.map((item, index) => {
              const isActive = activeIdx === index;
              const angle = (index / ITEMS.length) * 360 + rotation;
              const rad = (angle * Math.PI) / 180;
              const x = Number((Math.cos(rad) * RADIUS).toFixed(3));
              const y = Number((Math.sin(rad) * RADIUS).toFixed(3));
              const NodeIcon = item.icon;

              return (
                <div
                  key={item.id}
                  className="absolute z-10"
                  style={{
                    top: "50%", left: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  {/* Connector line to center */}
                  <svg className="absolute pointer-events-none" style={{ width: "1px", height: "1px", overflow: "visible", top: "50%", left: "50%", zIndex: -1 }}>
                    <line
                      x1="0" y1="0" x2={-x} y2={-y}
                      stroke={isActive ? "rgba(0,102,255,0.5)" : "rgba(148,163,184,0.3)"}
                      strokeWidth={isActive ? "2" : "1"}
                      strokeDasharray={isActive ? "0" : "4 4"}
                      className="transition-all duration-500"
                    />
                  </svg>

                  {/* Node Button */}
                  <button
                    onClick={() => setActiveIdx(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`
                      relative group cursor-pointer transition-all duration-500 flex items-center justify-center rounded-full
                      ${isActive ? "scale-[1.35] z-40" : "scale-100 hover:scale-110 z-30"}
                      w-14 h-14
                    `}
                  >
                    {/* Glow ring for active */}
                    {isActive && (
                      <div className="absolute -inset-3 rounded-full bg-[#0066FF]/10 blur-[10px] pointer-events-none" />
                    )}

                    {/* Node Circle */}
                    <div
                      className={`
                        relative w-full h-full rounded-full flex items-center justify-center transition-all duration-500
                        ${isActive
                          ? "bg-gradient-to-br from-[#0066FF] to-[#00B2FF] shadow-[0_4px_15px_rgba(0,102,255,0.25)] border border-white text-white"
                          : "bg-white shadow-sm border border-slate-200 text-[#1a1a2e]/40 hover:text-[#0066FF] hover:border-[#0066FF]/20 hover:shadow-md"
                        }
                      `}
                    >
                      <NodeIcon className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : ""}`} />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

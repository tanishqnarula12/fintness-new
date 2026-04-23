"use client";

import { useState, useEffect, useCallback } from "react";

interface OrbitalItem {
  id: number;
  title: string;
  description: string;
}

const ITEMS: OrbitalItem[] = [
  {
    id: 1,
    title: "Goal-based Advice",
    description:
      "Every recommendation is laser-focused on your defined financial targets — not generic products.",
  },
  {
    id: 2,
    title: "Unbiased Recommendations",
    description:
      "Fiduciary-first approach ensuring your interests always come before commissions.",
  },
  {
    id: 3,
    title: "End-to-end Support",
    description:
      "From onboarding to portfolio reviews — we handle every complexity behind the scenes.",
  },
  {
    id: 4,
    title: "Dedicated Manager",
    description:
      "A single point of contact who knows your portfolio inside-out and proactively monitors it.",
  },
  {
    id: 5,
    title: "Data-driven Decisions",
    description:
      "Quantitative research and real-time analytics powering every investment decision we make.",
  },
];

export default function WhyUsOrbital() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.15);
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNodeClick = useCallback((id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
    setIsPaused(true);
    // Resume rotation after 5 seconds
    setTimeout(() => setIsPaused(false), 5000);
  }, []);

  const RADIUS = 220; // orbital radius in px

  return (
    <section className="py-24 px-6 w-full relative overflow-hidden bg-[#F5F0EB]">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0066FF] rounded-full blur-[300px] opacity-[0.03] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-[#0066FF] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Why Us
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] tracking-tight">
          Why Clients Trust
          <br className="hidden md:block" /> Fintness Finserv
        </h2>
      </div>

      {/* ── DESKTOP: Orbital Layout ── */}
      <div className="hidden md:flex justify-center">
        <div
          className="relative"
          style={{ width: RADIUS * 2 + 180, height: RADIUS * 2 + 180 }}
        >
          {/* Orbital ring */}
          <div
            className="absolute rounded-full border border-[#1a1a2e]/[0.06] pointer-events-none"
            style={{
              width: RADIUS * 2,
              height: RADIUS * 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Second subtle ring */}
          <div
            className="absolute rounded-full border border-dashed border-[#0066FF]/[0.06] pointer-events-none"
            style={{
              width: RADIUS * 2 + 60,
              height: RADIUS * 2 + 60,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* ── Center Logo ── */}
          <div
            className="absolute z-20 flex flex-col items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Animated ring */}
            <div className="absolute w-32 h-32 rounded-full border-2 border-[#0066FF]/20 glow-pulse" />
            <div className="absolute w-36 h-36 rounded-full border border-[#0066FF]/[0.08]" />

            {/* Glow behind logo */}
            <div className="absolute w-24 h-24 rounded-full bg-[#0066FF]/[0.06] blur-[20px]" />

            {/* Logo */}
            <div className="relative w-20 h-20 rounded-full bg-white shadow-lg shadow-[#0066FF]/[0.08] flex items-center justify-center border border-[#1a1a2e]/[0.06]">
              <img
                src="/logo.png"
                alt="Fintness Finserv Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* ── Orbital Nodes ── */}
          {ITEMS.map((item, index) => {
            const angle =
              (index / ITEMS.length) * 360 + rotation;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * RADIUS;
            const y = Math.sin(rad) * RADIUS;
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className="absolute z-10 transition-all duration-500 ease-out"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                {/* Connector line to center */}
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    width: "1px",
                    height: "1px",
                    overflow: "visible",
                    top: "50%",
                    left: "50%",
                    zIndex: -1,
                  }}
                >
                  <line
                    x1="0"
                    y1="0"
                    x2={-x}
                    y2={-y}
                    stroke={isActive ? "rgba(0,102,255,0.15)" : "rgba(26,26,46,0.04)"}
                    strokeWidth="1"
                    strokeDasharray={isActive ? "0" : "4 4"}
                    className="transition-all duration-500"
                  />
                </svg>

                {/* Node button */}
                <button
                  onClick={() => handleNodeClick(item.id)}
                  className={`
                    relative group cursor-pointer transition-all duration-500
                    ${isActive ? "scale-110" : "hover:scale-105"}
                  `}
                >
                  {/* Glow ring for active */}
                  {isActive && (
                    <div className="absolute -inset-3 rounded-2xl bg-[#0066FF]/[0.06] blur-[12px] pointer-events-none" />
                  )}

                  {/* Card */}
                  <div
                    className={`
                      relative px-5 py-3 rounded-2xl text-center whitespace-nowrap
                      transition-all duration-500
                      ${isActive
                        ? "bg-white shadow-lg shadow-[#0066FF]/[0.1] border border-[#0066FF]/20"
                        : "bg-white/80 shadow-md shadow-black/[0.03] border border-[#1a1a2e]/[0.06] hover:bg-white hover:shadow-lg hover:border-[#0066FF]/10"
                      }
                    `}
                  >
                    <span
                      className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-[#0066FF]" : "text-[#1a1a2e]/80"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Description popup */}
                  <div
                    className={`
                      absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64
                      bg-white rounded-2xl p-5 shadow-xl shadow-black/[0.06] border border-[#1a1a2e]/[0.06]
                      transition-all duration-400 pointer-events-none
                      ${isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                      }
                    `}
                  >
                    <p className="text-[13px] leading-relaxed text-[#1a1a2e]/60 font-light">
                      {item.description}
                    </p>
                    {/* Arrow */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#1a1a2e]/[0.06] rotate-45" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE: Stacked Layout ── */}
      <div className="md:hidden">
        {/* Center logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border border-[#0066FF]/10 glow-pulse" />
            <div className="w-16 h-16 rounded-full bg-white shadow-lg shadow-[#0066FF]/[0.06] flex items-center justify-center border border-[#1a1a2e]/[0.06]">
              <img
                src="/logo.png"
                alt="Fintness Finserv Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Items list */}
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          {ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNodeClick(item.id)}
                className={`
                  text-left w-full rounded-2xl p-5 transition-all duration-500 cursor-pointer
                  border
                  ${isActive
                    ? "bg-white shadow-lg shadow-[#0066FF]/[0.06] border-[#0066FF]/15"
                    : "bg-white/60 shadow-sm border-[#1a1a2e]/[0.06] hover:bg-white/80"
                  }
                `}
              >
                <h4
                  className={`text-base font-semibold tracking-tight transition-colors duration-300 ${
                    isActive ? "text-[#0066FF]" : "text-[#1a1a2e]/80"
                  }`}
                >
                  {item.title}
                </h4>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isActive ? "max-h-24 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-[#1a1a2e]/50 font-light">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

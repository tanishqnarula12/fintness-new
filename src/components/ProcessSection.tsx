"use client";

import { useRef, useEffect, useState } from "react";

const PROCESS_PHASES = [
  {
    id: "process-1",
    num: "01",
    title: "Understand You",
    description:
      "We take time to understand your goals, lifestyle, income, and financial aspirations to build a strong foundation.",
  },
  {
    id: "process-2",
    num: "02",
    title: "Create a Plan",
    description:
      "We design a personalized financial roadmap balancing growth, protection, and long-term stability.",
  },
  {
    id: "process-3",
    num: "03",
    title: "Execute Strategy",
    description:
      "We implement the right investment, insurance, and financial solutions with full transparency.",
  },
  {
    id: "process-4",
    num: "04",
    title: "Review & Optimize",
    description:
      "We continuously monitor, review, and adjust your plan to keep you aligned with your goals.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const progress = scrolled / (sectionHeight - window.innerHeight);
      const idx = Math.floor(progress * PROCESS_PHASES.length);
      setActiveIndex(Math.min(Math.max(idx, -1), PROCESS_PHASES.length - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{ height: `${(PROCESS_PHASES.length + 1) * 100}vh` }}
      className="relative w-full"
    >
      {/* This is the sticky viewport — it pins to the screen */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#F5F0EB]" />

        {/* Subtle ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00B2FF]/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 xl:px-12">
          <div className="grid md:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left — sticky heading area */}
            <div>
              <p className="text-[#0066FF] text-sm font-medium tracking-[0.2em] uppercase mb-4">
                OUR PROCESS
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#1a1a2e]">
                Planning your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF]">
                  financial
                </span>{" "}
                journey
              </h2>
              <p className="max-w-md text-base md:text-lg text-[#1a1a2e]/45 leading-relaxed font-light mt-6">
                We engage in meaningful conversations to grasp your goals and
                build a foundation for everything that follows.
              </p>

              {/* Progress dots */}
              <div className="flex items-center gap-3 mt-10">
                {PROCESS_PHASES.map((phase, i) => (
                  <div
                    key={phase.id}
                    className="flex items-center gap-2 transition-all duration-500"
                  >
                    <div
                      className={`rounded-full transition-all duration-500 ${
                        i <= activeIndex
                          ? "w-8 h-2 bg-[#0066FF]"
                          : "w-2 h-2 bg-[#1a1a2e]/15"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stacking cards */}
            <div className="relative h-[400px] md:h-[360px]">
              {PROCESS_PHASES.map((phase, index) => {
                // Calculate card transform based on active index
                const isVisible = index <= activeIndex;
                const isActive = index === activeIndex;
                const stackOffset = isVisible
                  ? (activeIndex - index) * 8
                  : 0;
                const scale = isVisible
                  ? 1 - (activeIndex - index) * 0.03
                  : 1;

                return (
                  <div
                    key={phase.id}
                    className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform: isVisible
                        ? `translateY(${stackOffset}px) scale(${scale})`
                        : "translateY(100px) scale(0.95)",
                      opacity: isVisible ? 1 : 0,
                      zIndex: isVisible ? PROCESS_PHASES.length - (activeIndex - index) : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div
                      className={`
                        h-full rounded-3xl p-8 md:p-10 relative
                        border transition-all duration-700
                        ${isActive
                          ? "bg-white/90 border-[#0066FF]/15 shadow-[0_8px_40px_rgba(0,102,255,0.08)]"
                          : "bg-white/60 border-[#1a1a2e]/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                        }
                      `}
                    >
                      {/* Corner glow */}
                      <div
                        className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px] pointer-events-none transition-opacity duration-700 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.08), transparent 70%)" }}
                      />

                      {/* Card content */}
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-6">
                            <span
                              className={`text-7xl md:text-8xl font-black leading-none transition-colors duration-500 ${
                                isActive
                                  ? "text-[#0066FF]/20"
                                  : "text-[#1a1a2e]/[0.04]"
                              }`}
                            >
                              {phase.num}
                            </span>
                          </div>
                          <h3
                            className={`text-2xl md:text-3xl font-bold tracking-tight mb-4 transition-colors duration-500 ${
                              isActive ? "text-[#1a1a2e]" : "text-[#1a1a2e]/60"
                            }`}
                          >
                            {phase.title}
                          </h3>
                          <p
                            className={`text-base md:text-lg leading-relaxed font-light transition-colors duration-500 ${
                              isActive ? "text-[#1a1a2e]/65" : "text-[#1a1a2e]/35"
                            }`}
                          >
                            {phase.description}
                          </p>
                        </div>

                        {/* Bottom accent line */}
                        <div className="mt-8">
                          <div className="h-[2px] w-full bg-[#1a1a2e]/[0.04] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#0066FF] to-[#00B2FF] rounded-full transition-all duration-700 ease-out"
                              style={{
                                width: isActive ? "100%" : "0%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

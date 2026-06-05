"use client";

import { useRef, useEffect, useState } from "react";
import { SparklesText } from "@/components/ui/sparkles-text";
import { GradientText } from "@/components/ui/gradient-text";
import { motion } from "framer-motion";

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
  {
    id: "process-5",
    num: "05",
    title: "Achieve Your Goals",
    description:
      "Whether it's financial independence, retirement, your child's education, or legacy creation—we help you reach your goals with customized planning.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let lastActiveIndex = -1;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      const totalMultiplier = 8.0;
      const viewportHeight = rect.height / totalMultiplier;
      const totalScrollable = rect.height - viewportHeight;
      const scrolled = -rect.top;
      
      const progress = totalScrollable > 0 ? Math.min(Math.max(scrolled / totalScrollable, 0), 1) : 0;

      let idx = -1;
      if (rect.top <= 0) {
        if (progress < 0.2) {
          idx = 0;
        } else if (progress < 0.4) {
          idx = 1;
        } else if (progress < 0.6) {
          idx = 2;
        } else if (progress < 0.8) {
          idx = 3;
        } else {
          idx = 4;
        }
      }

      if (idx !== lastActiveIndex) {
        lastActiveIndex = idx;
        setActiveIndex(idx);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{ height: "800vh" }}
      className="relative w-full"
    >
      {/* This is the sticky viewport — it pins to the screen */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Light premium background */}
        <div className="absolute inset-0 bg-white" />

        {/* Subtle ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00B2FF]/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 xl:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
            {/* Left — sticky heading area */}
            <div>
              <SparklesText 
                text="Our Process" 
                colors={{ first: "#0066FF", second: "#00B2FF" }} 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-4"
              />
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-[#1a1a2e]">
                Planning your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF]">
                  financial
                </span>{" "}
                journey
              </h3>
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
            <div className="relative h-[450px] sm:h-[400px] md:h-[380px] lg:h-[360px]">
              {PROCESS_PHASES.map((phase, index) => {
                const isVisible = index <= activeIndex;
                const isActive = index === activeIndex;
                const stackOffset = isVisible
                  ? (activeIndex - index) * 12
                  : 0;
                const scale = isVisible
                  ? 1 - (activeIndex - index) * 0.03
                  : 1;

                return (
                  <motion.div
                    key={phase.id}
                    className="absolute inset-0"
                    initial={{ y: 80, scale: 0.95, opacity: 0 }}
                    animate={{
                      y: isVisible ? stackOffset : 100,
                      scale: isVisible ? scale : 0.95,
                      opacity: isVisible ? 1 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 18,
                      mass: 0.8
                    }}
                    style={{
                      zIndex: isVisible ? PROCESS_PHASES.length - (activeIndex - index) : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div
                      className={`
                        h-full rounded-3xl p-8 md:p-10 relative border backdrop-blur-xl
                        transition-all duration-300
                        ${isActive
                          ? "bg-white/90 border-[#0066FF]/20 shadow-[0_8px_40px_rgba(0,102,255,0.12)]"
                          : "bg-white/60 border-[#1a1a2e]/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                        }
                      `}
                    >
                      {/* Card content */}
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
                            <span
                              className={`text-6xl md:text-8xl font-black leading-none transition-colors duration-500 ${
                                isActive
                                  ? "text-[#0066FF]/[0.60]"
                                  : "text-[#1a1a2e]/[0.12]"
                              }`}
                            >
                              {phase.num}
                            </span>
                          </div>
                          <h3
                            className={`text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4 transition-colors duration-500 ${
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
                        <div className="mt-6 md:mt-8">
                          <div className="h-[2px] w-full bg-[#1a1a2e]/[0.04] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#0066FF] to-[#00B2FF] rounded-full transition-all duration-500 ease-out"
                              style={{
                                width: isActive ? "100%" : "0%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

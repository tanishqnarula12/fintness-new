import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";

export function ServicesHero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-white relative overflow-hidden">
      {/* Background glow effects matching the screenshot */}
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="absolute top-0 -left-1/4 w-[60%] h-[120%] bg-[#00B2FF]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 -right-1/4 w-[60%] h-[120%] bg-[#00B2FF]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col items-center justify-center px-4 max-w-5xl mx-auto text-center"
      >
        <SparklesText 
          text="OUR SERVICES" 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight" 
        />

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Strategic financial planning and long-term wealth creation designed for modern families, professionals, and business owners.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-[#0066FF] to-[#00B2FF] text-white rounded-full px-10 h-14 text-base w-full sm:w-auto shadow-lg shadow-blue-500/20 border-none transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0066FF]/20 active:scale-95">
            Get Started
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

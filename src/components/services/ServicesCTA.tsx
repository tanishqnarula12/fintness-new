import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ServicesCTA() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#15192C] rounded-[2rem] p-12 md:p-20 text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient glow in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl relative z-10">
            Start Your Financial<br className="hidden sm:block" /> Fitness Journey Today
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
            Build a financially secure future with structured planning and personalized financial guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <Button size="lg" className="bg-[#0099FF] hover:bg-[#0077CC] text-white rounded-xl px-8 h-14 text-base font-semibold w-full sm:w-auto shadow-lg shadow-blue-500/20">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-8 h-14 text-base font-semibold w-full sm:w-auto border-slate-600 bg-[#2A2E40] text-white hover:bg-[#34384C] hover:text-white border-none shadow-sm">
              Talk to an Expert
            </Button>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0066FF] rounded-full blur-[250px] opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00B2FF] rounded-full blur-[200px] opacity-[0.03]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(26,26,46,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,46,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#0066FF] text-sm font-medium tracking-[0.2em] uppercase mb-6">Take The First Step</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1a2e] tracking-tight leading-[1.1] mb-8">
            Ready to take control of your financial future?
          </h2>
          <p className="text-[#1a1a2e]/40 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Join thousands who have transformed their relationship with money. Your journey starts with a single conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold tracking-wide py-4 px-10 rounded-full text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.2)] flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="text-[#1a1a2e]/50 hover:text-[#1a1a2e] font-medium tracking-wide py-4 px-8 rounded-full text-lg transition-all duration-300 border border-[#1a1a2e]/[0.08] hover:border-[#1a1a2e]/[0.2] hover:bg-[#1a1a2e]/[0.03]">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

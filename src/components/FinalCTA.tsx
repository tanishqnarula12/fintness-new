"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 px-6 overflow-hidden">
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
          <SparklesText 
            text="Take The First Step" 
            colors={{ first: "#0066FF", second: "#00B2FF" }} 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-6"
          />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1a2e] tracking-tight leading-[1.2] mb-8 mt-2">
            Ready to take control of your financial future?
          </h3>
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
          <Link href="/contact" className="group bg-gradient-to-r from-[#0066FF] to-[#00B2FF] text-white font-semibold tracking-wide py-4 px-10 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 inline-flex items-center">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <button className="text-[#1a1a2e]/80 hover:text-[#1a1a2e] font-medium tracking-wide py-4 px-8 rounded-full text-lg transition-all duration-300 border border-[#1a1a2e]/30 hover:border-[#1a1a2e]/50 hover:bg-[#1a1a2e]/[0.05]">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

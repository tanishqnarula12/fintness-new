"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 px-6 mx-auto w-[calc(100%-2rem)] md:max-w-[85rem]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
      >
        {/* Centered Content */}
        <div className="w-full p-12 md:p-20 bg-[#141C2B] flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Start Your Journey with a Professional Blueprint.
            </h2>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12">
              Our advisors will contact you for a complimentary 30-minute discovery call to map out your primary financial goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#22C55E]" strokeWidth={2.5} />
                <span className="text-white/80 text-base font-medium">No-obligation initial consultation</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#22C55E]" strokeWidth={2.5} />
                <span className="text-white/80 text-base font-medium">Certified Financial Planners only</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

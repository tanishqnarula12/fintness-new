"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 mx-auto w-[calc(100%-2rem)] md:max-w-6xl">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
      >
        {/* Left Pane */}
        <div className="md:w-1/2 p-12 md:p-16 bg-[#0B1221] flex flex-col justify-center">
           <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
             Start Your Journey with a Professional Blueprint.
           </h2>
           <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
             Our advisors will contact you for a complimentary 30-minute discovery call to map out your primary financial goals.
           </p>
           <div className="space-y-5">
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
        
        {/* Right Pane */}
        <div className="md:w-1/2 p-12 md:p-16 bg-[#141C2B] flex flex-col justify-center">
          <form className="space-y-7">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/90">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-[#1F2937]/50 border border-transparent rounded-xl px-5 py-4 text-white text-base placeholder-white/30 focus:outline-none focus:border-white/10 focus:bg-white/10 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/90">Phone Number</label>
              <input 
                type="tel" 
                className="w-full bg-[#1F2937]/50 border border-transparent rounded-xl px-5 py-4 text-white text-base placeholder-white/30 focus:outline-none focus:border-white/10 focus:bg-white/10 transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/90">Primary Goal</label>
              <div className="relative">
                <select className="w-full bg-[#1F2937]/50 border border-transparent rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:border-white/10 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                  <option className="bg-[#141C2B]">Retirement Planning</option>
                  <option className="bg-[#141C2B]">Wealth Creation</option>
                  <option className="bg-[#141C2B]">Tax Optimization</option>
                  <option className="bg-[#141C2B]">Estate Planning</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
              </div>
            </div>
            
            <button 
              type="button"
              className="w-full mt-4 bg-gradient-to-r from-[#10B981] to-[#22C55E] text-white font-bold text-lg py-5 rounded-xl hover:shadow-xl hover:-translate-y-0.5 hover:shadow-[#22C55E]/20 transition-all duration-300"
            >
              Request My Plan
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

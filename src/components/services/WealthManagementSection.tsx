import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  "Consolidate and review your overall financial position",
  "Create a personalized wealth roadmap",
  "Align investments with life goals and cash flow needs",
  "Coordinate investment, tax, insurance, and estate considerations",
  "Monitor progress through regular reviews",
  "Adapt strategies as your life and financial priorities evolve",
];

export function WealthManagementSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="wealth-management">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What is Wealth Management?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Wealth Management
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Wealth management is more than selecting investments. It involves creating a coordinated financial strategy that integrates investments, risk management, tax planning, estate considerations, and cash flow management to help you achieve long-term financial security.
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">
                  ✓
                </span>
                How We Help
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Ambient Sparkles around the Main Image */}
            <motion.div animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8], rotate: [0, 90, 180] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5 }} className="absolute -top-8 -right-4 md:-top-12 md:-right-8 text-[#00B2FF] text-4xl z-0 pointer-events-none">✦</motion.div>
            <motion.div animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6], rotate: [0, -45, -90] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5 }} className="absolute top-1/4 -left-6 md:-left-10 text-emerald-400 text-2xl z-0 pointer-events-none">✨</motion.div>
            <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 45, 90] }} transition={{ repeat: Infinity, duration: 5, delay: 0.2 }} className="absolute -bottom-6 right-1/4 md:-bottom-10 md:right-1/3 text-amber-300 text-3xl z-0 pointer-events-none">✦</motion.div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative z-10">
              <div className="aspect-[4/3] relative bg-slate-50">
                <Image 
                  src="/wealth_management_real.png" 
                  alt="Wealth Management" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Small Floating Component Image in Absolute Corner */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 z-20 w-32 md:w-40"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative"
              >
                {/* Magical Sparkles */}
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 45, 90] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                  className="absolute -top-4 -right-2 text-[#00B2FF] text-lg z-0"
                >
                  ✦
                </motion.div>
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}
                  className="absolute -bottom-2 -left-2 text-emerald-400 text-sm z-0"
                >
                  ✨
                </motion.div>

                <Image 
                  src="/component-1.png" 
                  alt="Wealth Management Feature" 
                  width={200} 
                  height={200} 
                  className="w-full h-auto object-contain drop-shadow-xl relative z-10"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

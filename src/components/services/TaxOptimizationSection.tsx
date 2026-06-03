import React from "react";
import { motion } from "framer-motion";
import { FileText, PiggyBank, BarChart3, LineChart, ShieldCheck, CalendarClock } from "lucide-react";
import Image from "next/image";

const features = [
  { text: "Review current tax liabilities and opportunities", icon: <FileText className="w-5 h-5 text-emerald-500" /> },
  { text: "Identify suitable tax-saving investment options", icon: <PiggyBank className="w-5 h-5 text-emerald-500" /> },
  { text: "Optimize capital gains and redemption strategies", icon: <LineChart className="w-5 h-5 text-emerald-500" /> },
  { text: "Improve tax efficiency within investment portfolios", icon: <BarChart3 className="w-5 h-5 text-emerald-500" /> },
  { text: "Align tax planning with retirement and wealth goals", icon: <ShieldCheck className="w-5 h-5 text-emerald-500" /> },
  { text: "Conduct periodic tax reviews throughout the year", icon: <CalendarClock className="w-5 h-5 text-emerald-500" /> },
];

export function TaxOptimizationSection() {
  return (
    <section className="py-24 bg-emerald-50/30 relative overflow-hidden" id="tax-optimization">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <div className="aspect-[4/3] relative bg-slate-50">
                <Image 
                  src="/tax_planning_real.jpeg" 
                  alt="Tax Optimization" 
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
              className="absolute -bottom-8 -right-8 md:-bottom-10 md:-right-10 z-20 w-32 md:w-40"
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
                  className="absolute -top-4 -left-2 text-[#00B2FF] text-lg z-0"
                >
                  ✦
                </motion.div>
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}
                  className="absolute -bottom-2 -right-2 text-emerald-400 text-sm z-0"
                >
                  ✨
                </motion.div>

                <Image 
                  src="/component-4.png" 
                  alt="Tax Optimization Feature" 
                  width={200} 
                  height={200} 
                  className="w-full h-auto object-contain drop-shadow-xl relative z-10"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What is Tax Optimization?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Tax Optimization
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Tax optimization involves structuring investments and financial decisions to improve after-tax returns while remaining compliant with applicable regulations.
            </p>

            <div className="mb-8 bg-white p-8 rounded-2xl border border-emerald-50 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">How We Help</h4>
              <p className="text-slate-600 mb-6 text-sm">
                We help structure your finances and investments to improve tax efficiency while supporting long-term wealth creation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-2">
                    <div className="bg-emerald-50 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-tight">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

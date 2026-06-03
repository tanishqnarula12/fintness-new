import React from "react";
import { motion } from "framer-motion";
import { FileText, PiggyBank, BarChart3, LineChart, ShieldCheck, CalendarClock, IndianRupee } from "lucide-react";
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
          
          {/* Image Side - Only the new component with synced animations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-1 relative flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-4/5 max-w-sm mx-auto mt-8 md:mt-12"
            >
              {/* Magical Sparkles and Synced Elements */}
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 90, 180] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 text-[#00B2FF] text-3xl z-0"
              >
                ✦
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                className="absolute bottom-8 -right-6 text-emerald-400 text-2xl z-0"
              >
                ✨
              </motion.div>
              
              {/* Floating Rupee Icon */}
              <motion.div
                animate={{ opacity: [0.9, 1, 0.9], y: [0, -8, 0], rotate: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
                className="absolute top-1/4 -right-8 bg-white/90 p-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 backdrop-blur-md z-20"
              >
                <IndianRupee className="w-5 h-5 text-emerald-500" />
              </motion.div>

              {/* Ambient Glowing Circle behind the component */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl z-0"
              />

              {/* Main Component Image */}
              <Image 
                src="/tax_optimization_comp.png" 
                alt="Tax Optimization Component" 
                width={500} 
                height={500} 
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
              />
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Tax Optimization
            </h2>
            <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What is Tax Optimization?
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

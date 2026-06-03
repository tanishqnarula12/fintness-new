import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, LineChart, Map, Target, ShieldCheck, Activity, RefreshCw, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  { text: "Consolidate and review your overall financial position", icon: <LineChart className="w-5 h-5 text-blue-500" /> },
  { text: "Create a personalized wealth roadmap", icon: <Map className="w-5 h-5 text-blue-500" /> },
  { text: "Align investments with life goals and cash flow needs", icon: <Target className="w-5 h-5 text-blue-500" /> },
  { text: "Coordinate investment, tax, insurance, and estate considerations", icon: <ShieldCheck className="w-5 h-5 text-blue-500" /> },
  { text: "Monitor progress through regular reviews", icon: <Activity className="w-5 h-5 text-blue-500" /> },
  { text: "Adapt strategies as your life and financial priorities evolve", icon: <RefreshCw className="w-5 h-5 text-blue-500" /> },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Wealth Management
            </h2>
            <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What is Wealth Management?
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Wealth management is more than selecting investments. It involves creating a coordinated financial strategy that integrates investments, risk management, tax planning, estate considerations, and cash flow management to help you achieve long-term financial security.
            </p>

            <div className="mb-8 bg-white p-8 rounded-2xl border border-blue-50 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">How We Help</h4>
              <p className="text-slate-600 mb-6 text-sm">
                We design and execute comprehensive wealth strategies tailored to your unique financial landscape and long-term aspirations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-2">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-tight">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Side - Only the new component with synced animations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center items-center"
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
                className="absolute -top-4 -right-4 text-[#00B2FF] text-3xl z-0"
              >
                ✦
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                className="absolute bottom-8 -left-6 text-emerald-400 text-2xl z-0"
              >
                ✨
              </motion.div>
              

              {/* Ambient Glowing Circle behind the component */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl z-0"
              />

              {/* Main Component Image */}
              <Image 
                src="/wealth_management_comp.png" 
                alt="Wealth Management Component" 
                width={500} 
                height={500} 
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

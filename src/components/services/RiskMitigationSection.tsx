import React from "react";
import { motion } from "framer-motion";
import { Shield, Activity, Umbrella, AlertTriangle, LifeBuoy, HeartPulse, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  { text: "Assess existing insurance coverage and protection gaps", icon: <Shield className="w-5 h-5 text-indigo-500" /> },
  { text: "Evaluate life, health, and accident risk exposure", icon: <HeartPulse className="w-5 h-5 text-indigo-500" /> },
  { text: "Estimate protection requirements based on liabilities", icon: <AlertTriangle className="w-5 h-5 text-indigo-500" /> },
  { text: "Build emergency fund strategies", icon: <LifeBuoy className="w-5 h-5 text-indigo-500" /> },
  { text: "Recommend suitable risk management solutions", icon: <Umbrella className="w-5 h-5 text-indigo-500" /> },
  { text: "Review protection plans periodically", icon: <Activity className="w-5 h-5 text-indigo-500" /> },
];

export function RiskMitigationSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="risk-mitigation">
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
              Risk Mitigation
            </h2>
            <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What is Risk Mitigation?
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Risk mitigation focuses on protecting your family, income, assets, and financial goals from unexpected events such as illness, disability, accidents, or loss of income.
            </p>

            <div className="mb-8 bg-white p-8 rounded-2xl border border-indigo-50 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">How We Help</h4>
              <p className="text-slate-600 mb-6 text-sm">
                We identify financial risks that could derail your goals and implement strategies to reduce their impact.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-2">
                    <div className="bg-indigo-50 p-2 rounded-lg">
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
                className="absolute -top-4 -right-4 text-indigo-400 text-3xl z-0"
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
                className="absolute inset-0 bg-indigo-400/20 rounded-full blur-3xl z-0"
              />

              {/* Main Component Image */}
              <Image 
                src="/risk_mitigation_comp.png" 
                alt="Risk Mitigation Component" 
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

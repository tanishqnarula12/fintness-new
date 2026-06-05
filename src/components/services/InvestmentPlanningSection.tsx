import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, PieChart, RefreshCcw, LayoutList, Calculator, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  { text: "Identify and prioritize financial goals", icon: <Target className="w-5 h-5 text-blue-500" /> },
  { text: "Calculate investment requirements for each goal", icon: <Calculator className="w-5 h-5 text-blue-500" /> },
  { text: "Design suitable asset allocation strategies", icon: <PieChart className="w-5 h-5 text-blue-500" /> },
  { text: "Recommend SIP, STP, and lump sum investment approaches", icon: <TrendingUp className="w-5 h-5 text-blue-500" /> },
  { text: "Construct and monitor investment portfolios", icon: <LayoutList className="w-5 h-5 text-blue-500" /> },
  { text: "Rebalance portfolios to maintain target allocations", icon: <RefreshCcw className="w-5 h-5 text-blue-500" /> },
];

export function InvestmentPlanningSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="investment-planning">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Only the new component with synced animations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 relative flex justify-center items-center"
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
              

              {/* Ambient Glowing Circle behind the component */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute inset-0 bg-emerald-400/20 rounded-full blur-3xl z-0"
              />

              {/* Main Component Image */}
              <Image 
                src="/investment_planning_comp.png" 
                alt="Investment Planning Component" 
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
              Investment Planning
            </h2>
            <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What is Investment Planning?
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Investment planning helps you allocate your money efficiently to achieve financial goals such as retirement, education, home purchase, wealth creation, or financial independence.
            </p>

            <div className="mb-8 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">How We Help</h4>
              <p className="text-slate-600 mb-6 text-sm">
                We help you build an investment strategy that converts your financial goals into actionable investment decisions.
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

        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, PieChart, RefreshCcw, LayoutList, Calculator } from "lucide-react";
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
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-1 relative"
          >
            {/* Ambient Sparkles around the Main Image */}
            <motion.div animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8], rotate: [0, 90, 180] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5 }} className="absolute -top-8 -left-4 md:-top-12 md:-left-8 text-[#00B2FF] text-4xl z-0 pointer-events-none">✦</motion.div>
            <motion.div animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6], rotate: [0, -45, -90] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5 }} className="absolute top-1/4 -right-6 md:-right-10 text-emerald-400 text-2xl z-0 pointer-events-none">✨</motion.div>
            <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 45, 90] }} transition={{ repeat: Infinity, duration: 5, delay: 0.2 }} className="absolute -bottom-6 left-1/4 md:-bottom-10 md:left-1/3 text-amber-300 text-3xl z-0 pointer-events-none">✦</motion.div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative z-10">
              <div className="aspect-[4/3] relative bg-slate-50">
                <Image 
                  src="/investment_planning_real.jpeg" 
                  alt="Investment Planning" 
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
                  src="/component-2.png" 
                  alt="Investment Feature" 
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
              What is Investment Planning?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Investment Planning
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Investment planning helps you allocate your money efficiently to achieve financial goals such as retirement, education, home purchase, wealth creation, or financial independence.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">How We Help</h4>
              <p className="text-slate-600 mb-6">
                We help you build an investment strategy that converts your financial goals into actionable investment decisions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mt-1 mr-3 shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-slate-700 text-sm">{feature.text}</span>
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

import React from "react";
import { motion } from "framer-motion";
import { FileText, ClipboardList, Scroll, GitMerge, Search, Target, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  { text: "Organize and document assets and liabilities", icon: <FileText className="w-5 h-5 text-indigo-500" /> },
  { text: "Review nominations across financial assets", icon: <ClipboardList className="w-5 h-5 text-indigo-500" /> },
  { text: "Facilitate Will creation and updates", icon: <Scroll className="w-5 h-5 text-indigo-500" /> },
  { text: "Develop succession and inheritance strategies", icon: <GitMerge className="w-5 h-5 text-indigo-500" /> },
  { text: "Identify potential estate transfer challenges", icon: <Search className="w-5 h-5 text-indigo-500" /> },
  { text: "Coordinate estate planning with overall financial goals", icon: <Target className="w-5 h-5 text-indigo-500" /> },
];

export function EstatePlanningSection() {
  return (
    <section className="py-24 bg-indigo-50/30 relative overflow-hidden" id="estate-planning">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side - Left (Wait no, changing to Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Estate Planning
            </h2>
            <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              What is Estate Planning?
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Estate planning helps organize the transfer of assets, responsibilities, and financial intentions to beneficiaries while minimizing future complications.
            </p>

            <div className="mb-8 bg-white p-8 rounded-2xl border border-indigo-50 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">How We Help</h4>
              <p className="text-slate-600 mb-6 text-sm">
                We help ensure your assets are transferred smoothly and according to your wishes while reducing potential complications for your family.
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

          {/* Image Side - Right (Wait no, changing to Left) */}
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
                className="absolute -top-4 -left-4 text-indigo-400 text-3xl z-0"
              >
                ✦
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                className="absolute bottom-8 -right-6 text-amber-400 text-2xl z-0"
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
                src="/estate_planning_comp.png" 
                alt="Estate Planning Component" 
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

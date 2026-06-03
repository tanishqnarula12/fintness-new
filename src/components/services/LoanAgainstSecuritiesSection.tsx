import React from "react";
import { motion } from "framer-motion";
import { Landmark, ArrowRightLeft, Percent, Scale, FileSignature, Handshake, IndianRupee } from "lucide-react";
import Image from "next/image";

const features = [
  { text: "Evaluate eligible securities for loan availability", icon: <Scale className="w-5 h-5 text-amber-600" /> },
  { text: "Assess borrowing capacity and loan limits", icon: <Percent className="w-5 h-5 text-amber-600" /> },
  { text: "Compare available lending options", icon: <ArrowRightLeft className="w-5 h-5 text-amber-600" /> },
  { text: "Assist with documentation and application processes", icon: <FileSignature className="w-5 h-5 text-amber-600" /> },
  { text: "Coordinate with lending institutions", icon: <Landmark className="w-5 h-5 text-amber-600" /> },
  { text: "Support ongoing management of pledged securities", icon: <Handshake className="w-5 h-5 text-amber-600" /> },
];

export function LoanAgainstSecuritiesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="loan-against-securities">
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
              Loan Against Securities
            </h2>
            <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What is a Loan Against Securities?
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Loan Against Securities (LAS) allows you to borrow against eligible investments such as mutual funds, shares, bonds, and other approved securities without liquidating them.
            </p>

            <div className="mb-8 bg-white p-8 rounded-2xl border border-amber-50 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">How We Help</h4>
              <p className="text-slate-600 mb-6 text-sm">
                We help you access funds from your investment portfolio without disrupting your long-term investment strategy.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-2">
                    <div className="bg-amber-50 p-2 rounded-lg">
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
                className="absolute -top-4 -right-4 text-amber-400 text-3xl z-0"
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
              
              {/* Floating Rupee Icon */}
              <motion.div
                animate={{ opacity: [0.9, 1, 0.9], y: [0, -8, 0], rotate: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
                className="absolute top-1/4 -left-8 bg-white/90 p-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 backdrop-blur-md z-20"
              >
                <IndianRupee className="w-5 h-5 text-emerald-500" />
              </motion.div>

              {/* Ambient Glowing Circle behind the component */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl z-0"
              />

              {/* Main Component Image */}
              <Image 
                src="/loan_against_securities_comp.png" 
                alt="Loan Against Securities Component" 
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

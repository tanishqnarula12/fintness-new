import React from "react";
import { motion } from "framer-motion";
import { Landmark, ArrowRightLeft, Percent, Scale, FileSignature, Handshake } from "lucide-react";
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
            <h2 className="text-lg md:text-xl font-bold tracking-wide uppercase mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What is a Loan Against Securities?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Loan Against Securities
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Loan Against Securities (LAS) allows you to borrow against eligible investments such as mutual funds, shares, bonds, and other approved securities without liquidating them.
            </p>

            <div className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">How We Help</h4>
              <p className="text-slate-600 mb-6 text-sm">
                We help you access funds from your investment portfolio without disrupting your long-term investment strategy.
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center bg-white p-3 rounded-lg border border-amber-50 shadow-sm">
                    <div className="bg-amber-50 p-2 rounded-md mr-4 shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{feature.text}</span>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <div className="aspect-[4/3] relative bg-slate-50">
                <Image 
                  src="/business-owners.jpeg" 
                  alt="Loan Against Securities" 
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
                  src="/component-5.png" 
                  alt="Loan Against Securities Feature" 
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

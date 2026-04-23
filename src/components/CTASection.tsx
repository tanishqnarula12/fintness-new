"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B2FF] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <p className="text-[#0066FF] text-sm font-medium tracking-[0.2em] uppercase mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6 tracking-tight leading-[1.1]">
            Start Your Financial Transformation
          </h2>
          <p className="text-[#1a1a2e]/45 text-lg md:text-xl font-light mb-12 max-w-md leading-relaxed">
            Talk to an expert and build a smarter plan that adapts to your life.
          </p>
          
          <div className="flex flex-col gap-5">
            {[
              { text: "Personalized Strategy", sub: "Tailored to your goals and risk profile" },
              { text: "Expert Guidance", sub: "SEBI-registered advisors with 15+ years experience" },
              { text: "Long-term Planning", sub: "Sustainable wealth that grows over decades" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex items-start gap-4 group cursor-default"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0066FF] mt-1 shrink-0" strokeWidth={2} />
                <div>
                  <span className="text-[#1a1a2e] text-lg font-medium block">{item.text}</span>
                  <span className="text-[#1a1a2e]/35 text-sm font-light">{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side — Glassmorphic Form with animated border */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="gradient-border group">
            <div className="bg-white/85 backdrop-blur-xl border border-[#1a1a2e]/[0.06] group-hover:border-[#0066FF]/20 rounded-3xl p-8 md:p-10 relative overflow-hidden transition-colors duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
              {/* Shimmer overlay */}
              <div className="shimmer absolute inset-0 pointer-events-none rounded-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-2">Book a Consultation</h3>
                <p className="text-[#1a1a2e]/35 text-sm font-light mb-8">Free 30-minute strategy session</p>

                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="group">
                    <label className="block text-[#1a1a2e]/40 text-xs font-medium mb-2 tracking-wider uppercase group-focus-within:text-[#0066FF] transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#1a1a2e]/[0.03] border border-[#1a1a2e]/[0.08] rounded-xl px-5 py-3.5 text-[#1a1a2e] placeholder-[#1a1a2e]/25 focus:outline-none focus:border-[#0066FF]/30 focus:bg-white focus:shadow-[0_0_20px_rgba(0,102,255,0.05)] transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[#1a1a2e]/40 text-xs font-medium mb-2 tracking-wider uppercase group-focus-within:text-[#0066FF] transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-[#1a1a2e]/[0.03] border border-[#1a1a2e]/[0.08] rounded-xl px-5 py-3.5 text-[#1a1a2e] placeholder-[#1a1a2e]/25 focus:outline-none focus:border-[#0066FF]/30 focus:bg-white focus:shadow-[0_0_20px_rgba(0,102,255,0.05)] transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[#1a1a2e]/40 text-xs font-medium mb-2 tracking-wider uppercase group-focus-within:text-[#0066FF] transition-colors">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-[#1a1a2e]/[0.03] border border-[#1a1a2e]/[0.08] rounded-xl px-5 py-3.5 text-[#1a1a2e] placeholder-[#1a1a2e]/25 focus:outline-none focus:border-[#0066FF]/30 focus:bg-white focus:shadow-[0_0_20px_rgba(0,102,255,0.05)] transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[#1a1a2e]/40 text-xs font-medium mb-2 tracking-wider uppercase group-focus-within:text-[#0066FF] transition-colors">How can we help?</label>
                    <textarea 
                      className="w-full bg-[#1a1a2e]/[0.03] border border-[#1a1a2e]/[0.08] rounded-xl px-5 py-3.5 text-[#1a1a2e] placeholder-[#1a1a2e]/25 focus:outline-none focus:border-[#0066FF]/30 focus:bg-white focus:shadow-[0_0_20px_rgba(0,102,255,0.05)] transition-all duration-300 min-h-[100px] resize-none"
                      placeholder="Tell us about your financial goals..."
                    />
                  </div>
                  <button className="group/btn w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold tracking-wide py-4 rounded-xl mt-2 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,102,255,0.2)]">
                    Request Consultation
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

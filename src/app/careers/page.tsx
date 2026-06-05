"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  User, 
  Briefcase, 
  FileText,
  SearchX,
  Send
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function CareersPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      // Reset after a while
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 1500);
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Culture of Growth",
      desc: "Continuous learning is in our DNA. We provide extensive resources for certifications, workshops, and career mentoring."
    },
    {
      icon: Layers,
      title: "Architectural Precision",
      desc: "We value the detail. Our systems are built with structural integrity, and we empower you to design financial solutions that last."
    },
    {
      icon: ShieldCheck,
      title: "Unwavering Ethics",
      desc: "Integrity isn't a policy; it's our identity. We prioritize transparency and the client's long-term well-being above all else."
    }
  ];

  return (
    <main className="bg-white min-h-screen text-[#1a1a2e] font-sans pt-32 pb-24 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B2FF] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Why Join Us Section */}
        <section className="text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1a2e]">
              Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF]">Us</span>
            </h1>
            <p className="text-[#1a1a2e]/60 text-base md:text-lg">
              We build more than portfolios; we build legacies. Our culture is the bedrock of our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white border border-[#1a1a2e]/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8 rounded-3xl text-left hover:shadow-[0_16px_40px_rgba(0,102,255,0.12)] hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/5 flex items-center justify-center text-[#0066FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3 text-[#1a1a2e]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#1a1a2e]/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1a1a2e]/10 pb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a2e]">Current Openings</h2>
              <p className="text-[#1a1a2e]/50 mt-1">Find your place in our growing ecosystem.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 rounded-3xl p-12 text-center flex flex-col items-center justify-center space-y-5"
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-[#1a1a2e]/5 flex items-center justify-center text-[#1a1a2e]/30">
              <SearchX className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-[#1a1a2e]">No active openings right now</h3>
              <p className="text-sm text-[#1a1a2e]/60 leading-relaxed">
                We currently don't have any open positions that match our active recruitment cycle. However, Fintness Finserv is always evolving. 
              </p>
            </div>
          </motion.div>
        </section>

        {/* Start Your Journey Section */}
        <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#1a1a2e] overflow-hidden rounded-3xl p-10 md:p-16 shadow-2xl">
          {/* Background elements to match CTA */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#0066FF]/20 to-transparent opacity-50 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#00B2FF] rounded-full blur-[120px] opacity-30 pointer-events-none" />
          
          <div className="flex flex-col justify-center space-y-10 relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Start Your Journey
              </h2>
              <p className="text-[#a0aabf] text-lg leading-relaxed max-w-md">
                Don't see a role that fits? We are always looking for exceptional talent. Submit your credentials for our "Architect Talent Pool."
              </p>
            </div>

            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#00A3FF]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#a0aabf] font-bold mb-0.5">Email Us</p>
                  <a href="mailto:mail@fintness.in" className="text-sm font-semibold text-white hover:text-[#00A3FF] transition-colors">
                    mail@fintness.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#00A3FF]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#a0aabf] font-bold mb-0.5">Office</p>
                  <p className="text-sm font-semibold text-white">
                    House No. 164, Adarsh Nagar,<br />
                    Jaipur, Rajasthan – 302004
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0 lg:pl-16 relative z-10">
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#00A3FF]" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    required
                    readOnly
                    placeholder="John Doe" 
                    className="w-full bg-[#1A1F2D] border-none rounded-xl px-5 py-4 text-sm text-white placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#00A3FF] transition-all opacity-60 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#00A3FF]" /> Email Address
                  </label>
                  <input 
                    type="email" 
                    required
                    readOnly
                    placeholder="john@company.com" 
                    className="w-full bg-[#1A1F2D] border-none rounded-xl px-5 py-4 text-sm text-white placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#00A3FF] transition-all opacity-60 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-[#00A3FF]" /> Role of Interest
                </label>
                <select 
                  required
                  className="w-full bg-[#1A1F2D] border-none rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF] transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.2em' }}
                >
                  <option value="" disabled selected>Select an area of interest...</option>
                  <option value="wealth-advisor">Wealth Advisor</option>
                  <option value="financial-analyst">Financial Analyst</option>
                  <option value="compliance-officer">Compliance Officer</option>
                  <option value="institutional-growth">Institutional Growth</option>
                  <option value="other">Other / Spontaneous Application</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#00A3FF]" /> Professional Bio / Cover Note
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your approach to finance..." 
                  className="w-full bg-[#1A1F2D] border-none rounded-xl px-5 py-4 text-sm text-white placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#00A3FF] transition-all resize-none"
                />
              </div>

              <button
                type="button"
                disabled={true}
                className="w-full py-4 mt-2 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 bg-white/10 text-white/40 border border-white/5 cursor-not-allowed opacity-50"
              >
                Submit Application
                <Send className="w-4 h-4 ml-1" />
              </button>
            </motion.form>
          </div>
        </section>

      </div>
    </main>
  );
}

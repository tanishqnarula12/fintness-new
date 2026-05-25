"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, Clock, Building2, ShieldCheck, MapPin, ChevronDown, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Wealth Creation",
    message: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.agree) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "Wealth Creation",
          message: "",
          agree: false,
        });
      }, 3000);
    }
  };

  return (
    <main className="bg-white min-h-screen text-[#1a1a2e] font-sans pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B2FF] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

      {/* Hero Section */}
      <header className="mb-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] tracking-tight leading-[1.1] mb-6">
            Connected Precision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF]">
              Let&apos;s architecturalize
            </span>{" "}
            your future.
          </h1>
          <p className="text-[#1a1a2e]/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Our global advisors are ready to translate your financial goals into structural realities. Reach out through our secure channels or visit our Jaipur office.
          </p>
        </motion.div>
      </header>

      {/* Bento Grid Layout for Contact Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-7 bg-[#141C2B] border border-white/[0.05] rounded-3xl p-8 lg:p-12 shadow-2xl text-white"
        >
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Inquiry Registry</h2>
          
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#22C55E]/5 border border-[#22C55E]/20 text-[#22C55E] p-8 rounded-2xl text-center space-y-3"
            >
              <CheckCircle2 className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold">Inquiry Dispatched!</h3>
              <p className="text-sm text-[#22C55E]/80">Our financial architects will contact you shortly.</p>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/50 ml-1">Full Name</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1F2937]/50 border border-transparent text-white placeholder-white/30 focus:outline-none focus:border-white/10 focus:bg-white/10 transition-all duration-300 text-sm font-medium"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/50 ml-1">Corporate Email</label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1F2937]/50 border border-transparent text-white placeholder-white/30 focus:outline-none focus:border-white/10 focus:bg-white/10 transition-all duration-300 text-sm font-medium"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/50 ml-1">Subject of Inquiry</label>
                <div className="relative">
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1F2937]/50 border border-transparent text-white focus:outline-none focus:border-white/10 focus:bg-white/10 transition-all duration-300 text-sm font-medium appearance-none cursor-pointer"
                  >
                    <option className="bg-[#141C2B] text-white">Wealth Creation</option>
                    <option className="bg-[#141C2B] text-white">Retirement Planning</option>
                    <option className="bg-[#141C2B] text-white">Tax Optimization</option>
                    <option className="bg-[#141C2B] text-white">Investment Planning</option>
                    <option className="bg-[#141C2B] text-white">Risk Mitigation</option>
                    <option className="bg-[#141C2B] text-white">Estate Planning</option>
                    <option className="bg-[#141C2B] text-white">Asset Management</option>
                    <option className="bg-[#141C2B] text-white">General Support</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/50 ml-1">Detailed Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#1F2937]/50 border border-transparent text-white placeholder-white/30 focus:outline-none focus:border-white/10 focus:bg-white/10 transition-all duration-300 text-sm font-medium resize-none min-h-[120px]"
                  placeholder="How can our financial architects assist you today?"
                  rows={5}
                />
              </div>

              <div className="flex items-start space-x-3 mb-4">
                <input
                  required
                  id="agree-checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="mt-1 rounded border-white/20 bg-[#1F2937]/50 text-[#0066FF] focus:ring-[#0066FF] cursor-pointer"
                  type="checkbox"
                />
                <label htmlFor="agree-checkbox" className="text-sm text-white/60 cursor-pointer select-none">
                  I agree to the <a className="text-[#00B2FF] font-semibold hover:underline" href="/privacy-policy">Privacy Policy</a> regarding data handling.
                </label>
              </div>

              <button
                className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#0066FF] to-[#00B2FF] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#0066FF]/20 active:scale-95 hover:-translate-y-0.5 transition-all duration-300"
                type="submit"
              >
                Dispatch Inquiry
              </button>
            </form>
          )}
        </motion.div>

        {/* Side Information Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Communication Channels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-[#0066FF]/5 border border-[#0066FF]/10 rounded-3xl p-8 space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-white border border-[#1a1a2e]/5 p-3.5 rounded-2xl shadow-sm text-[#0066FF] shrink-0">
                <Phone className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a2e]/40 mb-1">Direct Line</p>
                <p className="text-xl font-bold text-[#1a1a2e]">+91 95096 08886</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white border border-[#1a1a2e]/5 p-3.5 rounded-2xl shadow-sm text-[#0066FF] shrink-0">
                <Mail className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a2e]/40 mb-1">Digital Ledger</p>
                <p className="text-xl font-bold text-[#1a1a2e]">mail@fintness.in</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white border border-[#1a1a2e]/5 p-3.5 rounded-2xl shadow-sm text-[#0066FF] shrink-0">
                <Clock className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a2e]/40 mb-1">Office Hours</p>
                <p className="text-[#1a1a2e] font-semibold">Mon — Fri: 10:00 - 18:00 IST</p>
                <p className="text-[#1a1a2e]/50 text-xs mt-0.5 italic">Saturday by prior appointment only.</p>
              </div>
            </div>
          </motion.div>

          {/* HQ Address Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-[#141C2B] border border-white/[0.05] text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-white pointer-events-none">
              <Building2 className="w-[120px] h-[120px]" />
            </div>
            
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#00B2FF] mb-4">Office</h3>
            <address className="not-italic text-lg font-bold mb-0 leading-relaxed max-w-[280px]">
              164, Frontier Colony, <br />
              Adarsh Nagar, <br />
              Jaipur, Rajasthan – 302004
            </address>
          </motion.div>
        </div>
      </div>

      {/* Map Section (Sleek Interactive Integration) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-20 relative group"
      >
        {/* Futuristic glowing backdrop */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0066FF] to-[#00B2FF] rounded-[2.2rem] blur-xl opacity-[0.08] group-hover:opacity-[0.15] transition duration-1000 group-hover:duration-300 pointer-events-none" />
        
        {/* Inner Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1a1a2e]/10 bg-white h-[480px] w-full">
          <iframe
            src="https://maps.google.com/maps?q=164,%20Frontier%20Colony,%20Adarsh%20Nagar,%20Jaipur,%20Rajasthan%20302004&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 transition-all duration-[1200ms] ease-out filter grayscale-[100%] contrast-[1.05] brightness-[0.92] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
            allowFullScreen
            loading="lazy"
            title="Fintness Finserv Office Map"
          />
          
          {/* Centered Glassmorphic floating card */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto p-6 md:p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl max-w-sm w-[320px] transition-all duration-700 group-hover:bg-white/95 group-hover:shadow-[0_25px_60px_-12px_rgba(0,102,255,0.25)]">
              <div className="flex flex-col items-center gap-4">
                {/* Animated MapPin wrapper */}
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                  <span className="absolute inset-0 rounded-full bg-[#0066FF]/20 animate-ping opacity-75" />
                  <div className="relative w-10 h-10 bg-gradient-to-tr from-[#0066FF] to-[#00B2FF] text-white rounded-full flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-1.5 tracking-tight">Visit our Office</h3>
                  <p className="text-[#1a1a2e]/60 text-xs md:text-sm mb-5 leading-relaxed">
                    164, Frontier Colony, Adarsh Nagar, <br />
                    Jaipur, Rajasthan – 302004
                  </p>
                  
                  <a
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 w-full bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl font-semibold text-xs tracking-wide shadow-md hover:shadow-lg hover:shadow-[#0066FF]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-300"
                    href="https://www.google.com/maps/place/164,+Frontier+Colony,+Adarsh+Nagar,+Jaipur,+Rajasthan+302004/@26.898986,75.8259343,17z/data=!3m1!4b1!4m6!3m5!1s0x396db69561b50927:0xafd01ffdd6135135!8m2!3d26.898986!4d75.8285092!16s%2Fg%2F11c1h40n3f?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

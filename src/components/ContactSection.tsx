"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 w-full bg-[#0B0B14] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF] rounded-full blur-[250px] opacity-[0.15] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00B2FF] rounded-full blur-[250px] opacity-[0.1] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[#0066FF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Let's map out your financial future.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md font-light">
              Whether you're looking to grow your wealth, plan for retirement, or optimize your portfolio, our advisors are here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <a href="mailto:contact@fintnessfinserv.com" className="text-white/60 hover:text-white transition-colors font-light">contact@fintnessfinserv.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <a href="tel:+919876543210" className="text-white/60 hover:text-white transition-colors font-light">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Visit Us</h4>
                  <p className="text-white/60 font-light">123 Financial District,<br />Mumbai, MH 400001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80" htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80" htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80" htmlFor="message">How can we help?</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all resize-none"
                    placeholder="Tell us about your financial goals..."
                  />
                </div>

                <button 
                  type="button"
                  className="w-full bg-gradient-to-r from-[#0066FF] to-[#00B2FF] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

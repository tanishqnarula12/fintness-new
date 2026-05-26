"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  Layers, 
  Clock, 
  Compass, 
  CheckCircle2, 
  XCircle,
  Sparkles
} from "lucide-react";
import { ShaderBackground } from "@/components/ui/shader-background";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen text-[#1a1a2e] font-sans w-full relative overflow-hidden">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF] rounded-full blur-[250px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-[40%] left-[-20%] w-[500px] h-[500px] bg-[#00B2FF] rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />
      
      {/* 1. HERO SECTION */}
      <ShaderBackground className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center z-10"
        >
          {/* Readability glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[80%] h-[150%] bg-white/90 blur-[60px] rounded-[100%] pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/10 text-[#0066FF] font-semibold text-sm mb-6 border border-[#0066FF]/20">
            <Sparkles className="w-4 h-4" />
            Our Mission
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1a1a2e] leading-[1.1]">
            Structured Planning for a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF]">Financially Fit Future</span>
          </h1>
          <p className="text-base md:text-xl text-[#1a1a2e]/60 font-light leading-relaxed max-w-3xl mx-auto pt-4">
            Our mission is to help individuals and families become financially fit through disciplined planning, structured financial solutions, and long-term guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-[#0066FF] text-white rounded-2xl font-bold text-sm tracking-wide hover:bg-[#0044BB] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Check Your Score <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/#services" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#0066FF] border-2 border-[#0066FF] rounded-2xl font-bold text-sm tracking-wide hover:bg-[#0066FF]/5 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </ShaderBackground>

      {/* 2. ABOUT COMPANY SECTION */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-[#1a1a2e]/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-[#0066FF] text-sm font-bold tracking-[0.2em] uppercase">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] tracking-tight leading-tight">
              Simplifying Finance for Real-Life Goals
            </h3>
            <div className="space-y-4 text-base md:text-lg text-[#1a1a2e]/65 font-light leading-relaxed pt-2">
              <p>
                Founded in 2024, Fintness Finserv Pvt. Ltd. was established with the vision of simplifying financial planning and helping individuals and families better understand finance through practical guidance and structured financial solutions.
              </p>
              <p>
                We believe financial planning should be simple, transparent, and aligned with real-life goals rather than short-term market noise. Our purpose is to make financial decision-making easier for clients through disciplined planning, personalized support, and long-term relationship-focused service.
              </p>
              <p>
                From investments and protection planning to wealth structuring and future financial security, we aim to help clients stay financially organized, confident, and prepared for every stage of life.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Experience", value: "12+ Years", desc: "Of Market Expertise" },
              { label: "Client Impact", value: "400+", desc: "Families Catered" },
              { label: "Approach", value: "Client-Focused", desc: "Structured Planning" },
              { label: "Vision", value: "Long-Term", desc: "Wealth Guidance" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#f0f4fa]/50 backdrop-blur-xl border border-[#1a1a2e]/5 p-6 rounded-3xl hover:bg-white hover:shadow-[0_8px_30px_rgba(0,102,255,0.06)] transition-all duration-300"
              >
                <p className="text-xs uppercase tracking-wider text-[#0066FF] font-bold mb-2">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-extrabold text-[#1a1a2e] mb-1">{stat.value}</p>
                <p className="text-sm text-[#1a1a2e]/50 font-medium">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 4. FINANCIAL HEALTH DASHBOARD SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a2e] tracking-tight mb-4">Financial Health Dashboard</h2>
            <p className="text-[#1a1a2e]/60 text-lg max-w-2xl mx-auto">Helping You Stay Financially Fit Through Structured Planning</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: TrendingUp, title: "Investment Health", desc: "Track and review your investment portfolio, SIP performance, asset allocation, and long-term wealth creation progress." },
            { icon: ShieldCheck, title: "Protection Planning", desc: "Evaluate insurance coverage, family protection needs, and financial security planning to ensure adequate risk management." },
            { icon: Target, title: "Goal Tracking", desc: "Monitor progress towards retirement planning, child education, wealth creation, and emergency funds." },
            { icon: Layers, title: "Financial Organization", desc: "Maintain visibility across investments, liabilities, savings, and long-term commitments." },
            { icon: Clock, title: "Regular Financial Reviews", desc: "Ensure financial strategy remains aligned with changing goals and responsibilities." },
            { icon: Compass, title: "Long-Term Discipline", desc: "Encourage informed and disciplined financial decisions instead of reacting to short-term market movements." }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col relative p-8 rounded-3xl bg-white border border-[#1a1a2e]/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_16px_40px_rgba(0,102,255,0.12)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066FF] to-[#00B2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/5 flex items-center justify-center text-[#0066FF] mb-6 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#0066FF] transition-colors">{item.title}</h3>
                <p className="text-[#1a1a2e]/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 5. VALUES SECTION */}
      <section className="bg-[#FAFAFC] py-24 px-6 md:px-12 border-y border-[#1a1a2e]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* What We Believe In */}
            <div className="space-y-8">
              <div className="border-b border-emerald-500/20 pb-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a1a2e] flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  What We Believe In
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  "Disciplined Financial Planning",
                  "Long-Term Wealth Creation",
                  "Goal-Oriented Strategies",
                  "Transparent Communication",
                  "Relationship-Focused Service",
                  "Structured Financial Decision-Making"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-emerald-500/10 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                    <span className="font-semibold text-[#1a1a2e]/80 group-hover:text-[#1a1a2e] transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What We Avoid */}
            <div className="space-y-8">
              <div className="border-b border-rose-500/20 pb-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a1a2e] flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                    <XCircle className="w-5 h-5" />
                  </span>
                  What We Avoid
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  "Unrealistic Return Expectations",
                  "Short-Term Speculation",
                  "Product-Driven Recommendations",
                  "One-Size-Fits-All Planning",
                  "Misleading Financial Commitments"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-rose-500/10 shadow-sm hover:shadow-md hover:border-rose-500/30 transition-all group"
                  >
                    <div className="w-2 h-2 rounded-full bg-rose-400 group-hover:scale-150 transition-transform" />
                    <span className="font-semibold text-[#1a1a2e]/70 group-hover:text-[#1a1a2e] transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FOUNDERS & TEAM SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#0066FF] text-sm font-bold tracking-[0.2em] uppercase mb-3">Our People</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#1a1a2e] tracking-tight">Meet the Experts Behind Fintness Finserv</h3>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            { 
              name: "Nitesh Luthra", 
              role: "Founder", 
              bio: "Qualified Certified Financial Planner and MBA (Finance) from SCMLD Pune. He has been educating and managing money for investors for 12 years. He covers investments, insurance, tax planning, goal planning and estate planning. He has taken 50+ sessions for companies like Hero and Summit Digital. His vision is to make people financially fit.", 
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
            },
            { 
              name: "Vaishali Choudhary", 
              role: "Co-Founder", 
              bio: "With over 6 years of experience in the financial services industry, Vaishali specializes in personal financial planning, client servicing, and operational management. She plays a key role in driving operations, client experience, and digital communication at Fintness Finserv Pvt. Ltd. Holding an MBA from Rajasthan University, her focus is on simplifying financial planning.", 
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            }
          ].map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-[#1a1a2e]/5 overflow-hidden group hover:shadow-[0_12px_40px_rgba(0,102,255,0.08)] transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/5] sm:aspect-square w-full bg-[#f0f4fa] overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">{member.name}</h4>
                <p className="text-[#0066FF] font-bold text-sm tracking-wider uppercase mb-4">{member.role}</p>
                <p className="text-[#1a1a2e]/70 leading-relaxed text-sm flex-grow">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              name: "Manish Sharma", 
              role: "Certified Financial Planner & Portfolio Manager", 
              bio: "Specializes in financial planning, investment advisory, and portfolio management, helping clients build disciplined, goal-based wealth strategies for long-term financial growth.", 
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
            },
            { 
              name: "Preksha Jain", 
              role: "Insurance & Estate Planning Consultant", 
              bio: "Focuses on insurance, estate planning, and financial protection solutions, while guiding clients on long-term financial products and policy planning.", 
              img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" 
            },
            { 
              name: "Mehul Khandelwal", 
              role: "Operations Head", 
              bio: "Leads operations, process management, and client coordination, ensuring efficient workflows and a seamless client experience.", 
              img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" 
            },
            { 
              name: "Vimla Parmanandani", 
              role: "Service Relationship Manager", 
              bio: "Handles client servicing and relationship support, ensuring smooth communication, timely assistance, and responsive query resolution.", 
              img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=600" 
            }
          ].map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-[#1a1a2e]/5 overflow-hidden group hover:shadow-[0_12px_40px_rgba(0,102,255,0.08)] transition-all duration-300 relative aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-[#f0f4fa]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white p-6 z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <h4 className="text-xl font-bold text-[#1a1a2e] mb-1">{member.name}</h4>
                <p className="text-[#0066FF] font-semibold text-xs tracking-wider uppercase min-h-[2rem] flex items-start">{member.role}</p>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 overflow-hidden">
                  <p className="text-[#1a1a2e]/60 text-sm leading-relaxed min-h-0 pt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="px-6 md:px-12 pb-12 max-w-7xl mx-auto">
        <div className="bg-[#1a1a2e] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#0066FF]/20 to-transparent opacity-50" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#00B2FF] rounded-full blur-[120px] opacity-30" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Start Your Financial Fitness Journey Today
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-light">
              Build a financially secure future with structured planning and personalized financial guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-[#0066FF] text-white rounded-2xl font-bold text-sm tracking-wide hover:bg-[#0044BB] hover:-translate-y-0.5 transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-sm tracking-wide hover:bg-white/20 transition-all duration-300"
              >
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}

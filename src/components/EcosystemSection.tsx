"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { 
  Wallet, LineChart, Shield, Landmark, PieChart, Coins,
  ArrowUpRight, TrendingUp, CheckCircle, Percent, Lock, DollarSign,
  Activity, Bell, Settings, Award
} from "lucide-react";

// Types for the dashboard modules
interface Stat {
  label: string;
  value: string;
  fill: string;
}

interface PanelDetails {
  subtitle: string;
  stats: Stat[];
  insight: string;
}

interface ServiceCard {
  id: number;
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
  accent: string;
  metric: string;
  change: string;
  chartPath: string; // SVG path coordinate
  panelDetails: PanelDetails;
}

const CARDS: ServiceCard[] = [
  { 
    id: 0,
    icon: Wallet, 
    title: "Wealth Management", 
    desc: "Holistic strategies to preserve and grow your capital over time.", 
    accent: "#0066FF",
    metric: "$2,489,120",
    change: "+14.8% YTD",
    chartPath: "M 0,80 Q 25,45 50,60 T 100,15",
    panelDetails: {
      subtitle: "Active Asset Allocation",
      stats: [
        { label: "Equities", value: "65%", fill: "#0066FF" },
        { label: "Fixed Income", value: "25%", fill: "#00B2FF" },
        { label: "Alternative Assets", value: "10%", fill: "#7C6BAA" }
      ],
      insight: "Asset balance optimized for long-term compound growth."
    }
  },
  { 
    id: 1,
    icon: LineChart, 
    title: "Investment Planning", 
    desc: "Data-driven portfolios tailored for maximum risk-adjusted returns.", 
    accent: "#00B2FF",
    metric: "Moderate-High Risk",
    change: "Optimized Beta",
    chartPath: "M 0,90 C 20,40 40,80 60,30 T 100,10",
    panelDetails: {
      subtitle: "Core Allocation Metrics",
      stats: [
        { label: "FINT Core Fund", value: "+18.2%", fill: "#10B981" },
        { label: "Global Tech ETF", value: "+12.4%", fill: "#00B2FF" },
        { label: "ESG Bond Yield", value: "+5.1%", fill: "#6366F1" }
      ],
      insight: "Smart-beta rebalancing executed 4 days ago."
    }
  },
  { 
    id: 2,
    icon: Shield, 
    title: "Risk Mitigation", 
    desc: "Advanced protection mechanisms for structured life security.", 
    accent: "#7C6BAA",
    metric: "99.8% Secured",
    change: "Capital Collared",
    chartPath: "M 0,65 Q 20,65 40,40 T 100,38",
    panelDetails: {
      subtitle: "Hedging & Protection Collars",
      stats: [
        { label: "Equity Downside", value: "90% Cap", fill: "#7C6BAA" },
        { label: "Treasury Hedges", value: "10% Alloc", fill: "#10B981" },
        { label: "Liquid Insured", value: "Full Cap", fill: "#FFB020" }
      ],
      insight: "Downside risk capped at 10% maximum annual drawdown."
    }
  },
  { 
    id: 3,
    icon: Landmark, 
    title: "Estate Planning", 
    desc: "Secure generational wealth transfer and legacy continuity.", 
    accent: "#C9852A",
    metric: "Trust Active",
    change: "Generational Plan",
    chartPath: "M 0,85 Q 35,80 60,50 T 100,20",
    panelDetails: {
      subtitle: "Legacy Continuity Assets",
      stats: [
        { label: "Dynasty Trust A", value: "Active", fill: "#C9852A" },
        { label: "Tax-Free Bequests", value: "Planned", fill: "#3B82F6" },
        { label: "Business Lock-In", value: "Secured", fill: "#10B981" }
      ],
      insight: "Estate structuring minimizes future federal transfer taxes."
    }
  },
  { 
    id: 4,
    icon: PieChart, 
    title: "Tax Optimization", 
    desc: "Strategic structuring to dynamically maximize your post-tax yield.", 
    accent: "#C94E7C",
    metric: "$32,450 Saved",
    change: "8.4% Net Increase",
    chartPath: "M 0,75 L 30,70 L 60,45 L 100,25",
    panelDetails: {
      subtitle: "Tax-Harvesting Deductions",
      stats: [
        { label: "Loss Harvested", value: "$18,400", fill: "#C94E7C" },
        { label: "Qualified Divs", value: "85% Asset", fill: "#6366F1" },
        { label: "Municipal Yields", value: "+4.2%", fill: "#10B981" }
      ],
      insight: "Loss-harvesting algorithms active. Tax alpha maximized."
    }
  },
  { 
    id: 5,
    icon: Coins, 
    title: "Retirement Strategy", 
    desc: "Reliable and structured cash flows for lasting financial independence.", 
    accent: "#1E8A9A",
    metric: "72% To Goal Target",
    change: "12 Years Ahead",
    chartPath: "M 0,95 Q 50,60 100,5",
    panelDetails: {
      subtitle: "Nest Egg Projection",
      stats: [
        { label: "Finserv Accumulate", value: "$1.4M", fill: "#1E8A9A" },
        { label: "Monthly Cash Flow", value: "$8,500", fill: "#10B981" },
        { label: "Target independence", value: "Age 55", fill: "#F59E0B" }
      ],
      insight: "Projected monthly payout exceeds target consumption by 15%."
    }
  }
];

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeCard = CARDS[activeTab];

  return (
    <section className="relative w-full bg-[#F5F0EB] py-10 md:py-2">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="px-4 py-1.5 rounded-full bg-[#0066FF]/8 text-[#0066FF] text-xs font-semibold tracking-[0.2em] uppercase mb-5 border border-[#0066FF]/10 shadow-[0_2px_10px_rgba(0,102,255,0.05)]"
            >
              Our Solutions Hub
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#1a1a2e] mb-5 tracking-tight leading-[1.05]"
            >
              A Complete <span className="text-[#0066FF]">Financial</span> Ecosystem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#1a1a2e]/60 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-6"
            >
              Everything you need to manage, grow, and protect your wealth. Drag or scroll to unveil the dynamic management portal.
            </motion.p>
          </div>
        }
      >
        {/* PREMIUM DASHBOARD CONTAINER */}
        <div className="w-full h-full bg-[#0A0B10] flex flex-col md:flex-row text-white text-left font-sans select-none relative overflow-hidden">
          
          {/* Subtle Cyber Grid Background Details */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#0066FF]/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#00B2FF]/10 blur-[100px] pointer-events-none" />

          {/* ============================================================== */}
          {/* DESKTOP VIEW LAYOUT (Hidden on mobile)                         */}
          {/* ============================================================== */}
          <div className="hidden md:flex flex-row w-full h-full relative z-10">
            
            {/* LEFT COLUMN: Sidebar & Quick Balance Insights (35%) */}
            <div className="w-[35%] h-full bg-[#0E101A]/90 border-r border-white/[0.08] flex flex-col justify-between p-6">
              
              {/* Sidebar Header */}
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-6 h-6 rounded bg-[#0066FF] flex items-center justify-center shadow-[0_0_12px_rgba(0,102,255,0.4)]">
                    <Activity className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-semibold text-xs tracking-[0.2em] text-[#0066FF] uppercase">Fintness Portal</span>
                  <div className="ml-auto flex items-center gap-1.5 text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/25">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </div>
                </div>

                {/* Portfolio Balance Display */}
                <div className="mb-8">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">Active Portfolio Yield</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                      {activeCard.metric}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                      {activeCard.change}
                    </span>
                  </div>
                  <span className="text-[11px] text-white/50 block mt-1.5 font-light">
                    Real-time valuation based on smart-rebalanced assets.
                  </span>
                </div>

                {/* Dynamic Left Column Analytics (Changes based on active tab) */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <h4 className="text-[11px] font-semibold tracking-wider uppercase text-white/35 mb-4">
                    {activeCard.panelDetails.subtitle}
                  </h4>
                  
                  <div className="space-y-4">
                    {activeCard.panelDetails.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium text-white/70">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: stat.fill }} />
                            {stat.label}
                          </span>
                          <span className="font-bold text-white">{stat.value}</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: stat.value.includes("%") ? stat.value : "100%" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="h-full rounded-full" 
                            style={{ backgroundColor: stat.fill }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Footer Insight */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3.5 mt-auto">
                <span className="text-[10px] text-white/35 font-bold uppercase tracking-wider block mb-1">Advisor Intelligence</span>
                <p className="text-xs text-white/75 font-light leading-relaxed">
                  &ldquo;{activeCard.panelDetails.insight}&rdquo;
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: Large Active Spark Chart & Navigation grid (65%) */}
            <div className="w-[65%] h-full flex flex-col justify-between p-6">
              
              {/* Dashboard Top Navigation bar */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-white/95">{activeCard.title}</h3>
                  <p className="text-xs text-white/40 font-light mt-0.5">Asset Quadrant Optimization Details</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center transition-colors">
                    <Bell className="w-3.5 h-3.5 text-white/60" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center transition-colors">
                    <Settings className="w-3.5 h-3.5 text-white/60" />
                  </button>
                </div>
              </div>

              {/* DYNAMIC LARGE CHART PANEL */}
              <div className="h-[42%] bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] to-transparent pointer-events-none opacity-80" />
                
                {/* Metric Readout overlay */}
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <span className="text-[9px] text-white/30 uppercase tracking-widest font-semibold block mb-0.5">Yield Trajectory</span>
                    <span className="text-xl font-bold tracking-tight text-white/90">Portfolio Growth Factor</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-bold text-white/80">
                    M12 Horizon
                  </div>
                </div>

                {/* Smooth Glowing Path Chart */}
                <div className="w-full h-24 relative mt-2">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`gradient-${activeTab}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={activeCard.accent} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={activeCard.accent} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Gradient Area under line */}
                    <motion.path
                      key={`area-${activeTab}`}
                      initial={{ d: activeCard.chartPath, opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      d={`${activeCard.chartPath} L 100,100 L 0,100 Z`}
                      fill={`url(#gradient-${activeTab})`}
                    />

                    {/* Animated Line */}
                    <motion.path
                      key={`path-${activeTab}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      d={activeCard.chartPath}
                      fill="none"
                      stroke={activeCard.accent}
                      strokeWidth="2.5"
                    />
                  </svg>
                  
                  {/* Glowing Pulse Circle at end of chart path */}
                  <motion.div 
                    key={`pulse-${activeTab}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="absolute right-0 top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    style={{ backgroundColor: activeCard.accent }}
                  />
                </div>
              </div>

              {/* Bento Grid Navigation (6 items) */}
              <div className="grid grid-cols-3 gap-3 h-[42%]">
                {CARDS.map((card) => {
                  const isActive = activeTab === card.id;
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.id}
                      onMouseEnter={() => setActiveTab(card.id)}
                      onClick={() => setActiveTab(card.id)}
                      className={`relative cursor-pointer rounded-xl p-3 border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                        isActive 
                          ? "bg-white/[0.04] border-white/[0.12] shadow-[0_0_20px_rgba(255,255,255,0.02)]" 
                          : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08]"
                      }`}
                    >
                      {/* Active Background Glow accent */}
                      <div 
                        className={`absolute -top-12 -right-12 w-20 h-20 rounded-full blur-[25px] transition-opacity duration-500 pointer-events-none ${
                          isActive ? "opacity-15" : "opacity-0 group-hover:opacity-10"
                        }`}
                        style={{ backgroundColor: card.accent }}
                      />

                      {/* Icon & Title row */}
                      <div className="flex items-start justify-between">
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-300"
                          style={{ 
                            backgroundColor: isActive ? `${card.accent}12` : 'rgba(255,255,255,0.02)',
                            borderColor: isActive ? `${card.accent}30` : 'rgba(255,255,255,0.06)'
                          }}
                        >
                          <Icon 
                            className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" 
                            style={{ color: isActive ? card.accent : "#A0A5B5" }}
                          />
                        </div>
                        <ArrowUpRight className={`w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isActive ? 'text-white/70' : ''}`} />
                      </div>

                      {/* Descriptive info */}
                      <div>
                        <h4 className={`text-xs font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white/90'}`}>
                          {card.title}
                        </h4>
                        <span className="text-[9px] text-white/35 block mt-0.5 font-light truncate">
                          {card.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* ============================================================== */}
          {/* MOBILE VIEW LAYOUT (Hidden on desktop)                         */}
          {/* ============================================================== */}
          <div className="flex md:hidden flex-col w-full h-full p-4 relative z-10 overflow-y-auto max-h-[35rem] sm:max-h-[45rem]">
            
            {/* Header branding */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded bg-[#0066FF] flex items-center justify-center shadow-lg">
                  <Activity className="w-3 h-3 text-white" />
                </div>
                <span className="font-semibold text-xs tracking-wider text-[#0066FF] uppercase">Fintness Portal</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE
              </div>
            </div>

            {/* Selection swipe slider indicator */}
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none mb-3">
              {CARDS.map((card) => {
                const isActive = activeTab === card.id;
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    onClick={() => setActiveTab(card.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                      isActive 
                        ? "bg-white/[0.08] border-white/[0.15] text-white shadow-md"
                        : "bg-white/[0.02] border-white/[0.04] text-white/50 hover:bg-white/[0.04]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: isActive ? card.accent : "#FFF" }} />
                    {card.title}
                  </button>
                );
              })}
            </div>

            {/* Mobile Active Dashboard Card info */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 space-y-4 mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-bold text-white/95">{activeCard.title}</h3>
                  <span className="text-[10px] text-white/40 block mt-0.5">{activeCard.desc}</span>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${activeCard.accent}15` }}>
                  {React.createElement(activeCard.icon, { className: "w-4 h-4", style: { color: activeCard.accent } })}
                </div>
              </div>

              {/* Metric Callout */}
              <div className="grid grid-cols-2 gap-4 py-3 px-3 bg-white/[0.01] border border-white/[0.04] rounded-xl">
                <div>
                  <span className="text-[9px] text-white/40 block uppercase tracking-wider">Metric Status</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">{activeCard.metric}</span>
                </div>
                <div>
                  <span className="text-[9px] text-white/40 block uppercase tracking-wider">Change/Type</span>
                  <span className="text-sm font-semibold text-emerald-400 mt-0.5 block">{activeCard.change}</span>
                </div>
              </div>

              {/* Sparkline svg */}
              <div className="h-16 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d={`${activeCard.chartPath} L 100,100 L 0,100 Z`}
                    fill={`url(#gradient-${activeTab})`}
                    opacity="0.3"
                  />
                  <path
                    d={activeCard.chartPath}
                    fill="none"
                    stroke={activeCard.accent}
                    strokeWidth="3.5"
                  />
                </svg>
              </div>

              {/* Allocation stats for mobile */}
              <div className="space-y-2 pt-2">
                <span className="text-[9px] text-white/40 uppercase font-bold tracking-wider block">
                  {activeCard.panelDetails.subtitle}
                </span>
                <div className="space-y-2">
                  {activeCard.panelDetails.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center text-xs">
                      <span className="flex items-center gap-1.5 text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stat.fill }} />
                        {stat.label}
                      </span>
                      <span className="font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Advisor Intelligence Callout */}
            <div className="bg-white/[0.02] border border-[#0066FF]/15 rounded-xl p-3 mt-auto">
              <span className="text-[9px] text-[#0066FF] font-bold uppercase tracking-wider block mb-0.5">Wealth Insight</span>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                &ldquo;{activeCard.panelDetails.insight}&rdquo;
              </p>
            </div>

          </div>

        </div>
      </ContainerScroll>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  HelpCircle,
  Award,
  ExternalLink,
  MessageSquare,
  FileSpreadsheet,
  Lock,
  ShieldCheck,
  Scale,
  RefreshCw,
  Compass,
  Clock
} from "lucide-react";
import { useEffect, useState } from "react";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "1. Introduction", icon: FileText },
    { id: "company-info", label: "2. Company Information", icon: Building2 },
    { id: "services-scope", label: "3. Scope of Services", icon: Compass },
    { id: "mutual-fund-disclosures", label: "4. Investment Disclosures", icon: Award },
    { id: "third-party", label: "5. Third-Party Platforms", icon: ExternalLink },
    { id: "client-communication", label: "6. Client Communication", icon: MessageSquare },
    { id: "accuracy", label: "7. Accuracy of Information", icon: FileSpreadsheet },
    { id: "intellectual-property", label: "8. Intellectual Property", icon: Lock },
    { id: "liability-limit", label: "9. Limitation of Liability", icon: ShieldCheck },
    { id: "modifications", label: "10. Modification of Terms", icon: RefreshCw },
    { id: "governing-law", label: "11. Governing Law", icon: Scale },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Accounts for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <main className="bg-white min-h-screen text-[#1a1a2e] font-sans pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B2FF] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

      {/* Hero Header */}
      <header className="mb-16 border-b border-[#1a1a2e]/10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/5 border border-[#0066FF]/10 text-[#0066FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            Terms of Service
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] tracking-tight leading-none mb-4">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF]">Conditions</span>
          </h1>
          <p className="text-[#1a1a2e]/50 text-sm md:text-base font-medium flex items-center gap-1.5 mt-2">
            <Clock className="w-4 h-4 text-[#1a1a2e]/40" />
            Last Updated: May 25, 2026 • Fintness Finserv Pvt. Ltd.
          </p>
        </motion.div>
      </header>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Sticky Table of Contents Sidebar */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-32 bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 rounded-2xl p-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#1a1a2e]/40 mb-4 px-2">Table of Contents</h2>
          <nav className="space-y-1">
            {sections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs font-semibold tracking-wide transition-all duration-200 group ${isActive
                      ? "bg-[#0066FF] text-white shadow-md shadow-[#0066FF]/10"
                      : "text-[#1a1a2e]/60 hover:text-[#1a1a2e] hover:bg-[#1a1a2e]/[0.04]"
                    }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-colors duration-200 ${isActive ? "text-white" : "text-[#1a1a2e]/30 group-hover:text-[#1a1a2e]/60"}`} />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Core Content */}
        <article className="lg:col-span-8 space-y-12 text-[#1a1a2e]/85 leading-relaxed text-sm md:text-base font-normal">

          {/* Section: Introduction */}
          <section id="introduction" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <FileText className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">1. Introduction</h2>
            </div>
            <div className="bg-[#0066FF]/[0.02] border-l-4 border-[#0066FF] p-5 rounded-r-xl space-y-3">
              <p>
                Welcome to the official website of <strong>Fintness Finserv Pvt. Ltd.</strong> By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agreed to be bound by the following Terms & Conditions. If you do not agree with any part of these terms, you are advised not to use this website.
              </p>
            </div>
          </section>

          {/* Section: Company Information */}
          <section id="company-info" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Building2 className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">2. Company Information</h2>
            </div>
            <div className="border border-[#1a1a2e]/10 p-5 rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.01)] max-w-md">
              <p className="text-xs uppercase tracking-wider text-[#1a1a2e]/40 font-bold mb-1">Registered Entity</p>
              <p className="font-semibold text-sm text-[#1a1a2e]/90">Nitesh Luthra</p>
              <p className="text-xs text-[#1a1a2e]/60 mt-1 leading-relaxed">
                House No. 164, Adarsh Nagar,<br />
                Jaipur, Rajasthan – 302004.
              </p>
            </div>
          </section>

          {/* Section: Scope of Services */}
          <section id="services-scope" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Compass className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">3. Scope of Services</h2>
            </div>
            <p>
              Nitesh Luthra provides financial distribution and support services related to Mutual Funds, Insurance Planning, Loans Against Securities, Goal Planning, Financial Planning, Tax Planning, and Will & Estate Planning.
            </p>
            <p className="text-xs font-semibold text-[#1a1a2e]/60 bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 p-4 rounded-xl">
              The content and information available on this website are intended solely for general informational and educational purposes and should not be construed as investment, legal, tax, or financial advice unless specifically provided by an authorized representative of the company.
            </p>
          </section>

          {/* Section: Mutual Fund & Investment Disclosure */}
          <section id="mutual-fund-disclosures" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Award className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">4. Mutual Fund & Investment Disclosure</h2>
            </div>
            <p>
              Nitesh Luthra is an AMFI Registered Sub Distributor and primarily deals in Regular Plans of Mutual Fund Schemes. The company may receive trail commissions from Asset Management Companies (AMCs), and such commission disclosures are communicated to clients at the time of investment.
            </p>
            <div className="bg-rose-500/[0.03] border border-rose-500/20 text-rose-800 p-5 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 mb-1.5">Market Risk Advisory</h4>
              <p className="text-xs leading-relaxed">
                Investments in Mutual Funds are subject to market risks. Investors are advised to read all scheme-related documents carefully before investing. Past performance of any scheme does not guarantee future performance, and there is no assurance that the investment objectives of any scheme will be achieved.
              </p>
            </div>
          </section>

          {/* Section: Third-Party Platforms & Transaction Processing */}
          <section id="third-party" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <ExternalLink className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">5. Third-Party Platforms & Transaction Processing</h2>
            </div>
            <p>
              Nitesh Luthra may facilitate client onboarding, portfolio access, transaction execution, and investment-related services through authorized third-party platforms, including **NSE NMF II** and **Investwell Mint**. Clients may be redirected to such platforms for registration, transaction processing, portfolio viewing, and related services.
            </p>
            <div className="bg-amber-500/[0.03] border border-amber-500/20 text-amber-800 p-5 rounded-2xl text-xs font-medium">
              All services availed through third-party platforms shall be governed by the respective platform’s terms, conditions, privacy policies, and operational guidelines. While reasonable care is taken in selecting such service providers, Nitesh Luthra shall not be responsible for any technical errors, system failures, delays, data inaccuracies, interruptions, or service disruptions arising from third-party platforms or external service providers.
            </div>
          </section>

          {/* Section: Client Communication */}
          <section id="client-communication" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <MessageSquare className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">6. Client Communication</h2>
            </div>
            <p>
              Clients may receive communication, updates, support, and service-related information through phone calls, WhatsApp, email, SMS, or authorized Relationship Managers (RMs). By sharing contact details with the company, users consent to receiving such communications for service, support, compliance, and relationship management purposes.
            </p>
          </section>

          {/* Section: Accuracy of Information */}
          <section id="accuracy" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <FileSpreadsheet className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">7. Accuracy of Information</h2>
            </div>
            <p>
              While reasonable efforts are made to ensure the accuracy and reliability of the information available on this website, Nitesh Luthra makes no warranties or representations regarding the completeness, accuracy, suitability, or reliability of any content, calculations, data, or information published on the website.
            </p>
            <p className="text-xs text-[#1a1a2e]/60 border-l-2 border-[#1a1a2e]/25 pl-3.5">
              Users are advised to independently verify information before making any financial or investment decisions.
            </p>
          </section>

          {/* Section: Third-Party Links & Intellectual Property Rights */}
          <section id="intellectual-property" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Lock className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">8. Intellectual Property Rights</h2>
            </div>
            <p>
              All content available on this website, including but not limited to text, graphics, logos, branding elements, designs, images, and website material, is the intellectual property of Fintness Finserv Pvt. Ltd. and is protected under applicable intellectual property laws.
            </p>
            <p className="bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 px-4 py-3 rounded-xl text-xs font-semibold text-[#1a1a2e]/60">
              ✓ No content from this website may be copied, reproduced, distributed, modified, or used without prior written permission from the company.
            </p>
          </section>

          {/* Section: Limitation of Liability */}
          <section id="liability-limit" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">9. Limitation of Liability</h2>
            </div>
            <p className="font-semibold text-rose-600">
              Nitesh Luthra, its directors, employees, representatives, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or financial loss arising from the use of this website, reliance on any information provided herein, or usage of third-party platforms linked through the website.
            </p>
          </section>

          {/* Section: Modification of Terms */}
          <section id="modifications" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <RefreshCw className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">10. Modification of Terms</h2>
            </div>
            <p>
              Nitesh Luthra reserves the right to modify, update, or revise these Terms & Conditions at any time without prior notice. Continued use of the website after such changes shall constitute acceptance of the revised terms.
            </p>
          </section>

          {/* Section: Governing Law & Jurisdiction */}
          <section id="governing-law" className="scroll-mt-32 space-y-4 border-t border-[#1a1a2e]/10 pt-8">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Scale className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">11. Governing Law & Jurisdiction</h2>
            </div>
            <p>
              These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising in connection with the use of this website shall be subject to the exclusive jurisdiction of the courts located in **Jaipur, Rajasthan**.
            </p>
            <div className="bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 p-5 rounded-2xl text-xs text-[#1a1a2e]/60 leading-relaxed mt-4">
              <strong>Contact Information:</strong> For any queries, concerns, or clarification regarding these Terms & Conditions, users may contact Nitesh Luthra through the official contact details provided on the website.
            </div>
          </section>

        </article>

      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Eye,
  Target,
  MessageSquare,
  Share2,
  Lock,
  Cookie,
  ExternalLink,
  Award,
  UserCheck,
  Clock,
  Ban,
  HelpCircle,
  Phone,
  Mail,
  FileText
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "1. Introduction", icon: Shield },
    { id: "company-info", label: "2. Company Information", icon: Building2 },
    { id: "information-collect", label: "3. Information We Collect", icon: Eye },
    { id: "purpose", label: "4. Purpose of Collection", icon: Target },
    { id: "communication", label: "5. Communication & Consent", icon: MessageSquare },
    { id: "third-party", label: "6. Third-Party Platforms", icon: ExternalLink },
    { id: "data-sharing", label: "7. Data Sharing & Disclosure", icon: Share2 },
    { id: "data-security", label: "8. Data Security", icon: Lock },
    { id: "cookies", label: "9. Cookies & Tracking", icon: Cookie },
    { id: "regulatory", label: "10. Regulatory & Distribution", icon: Award },
    { id: "responsibility", label: "11. Client Responsibility", icon: UserCheck },
    { id: "refund-cancellation", label: "12. Refund & Cancellation", icon: Ban },
    { id: "grievance", label: "13. Grievance & Support", icon: HelpCircle },
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
            <Shield className="w-3.5 h-3.5" />
            Compliance & Security
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] tracking-tight leading-none mb-4">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF]">Policy</span>
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
              <Shield className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">1. Introduction</h2>
            </div>
            <div className="bg-[#0066FF]/[0.02] border-l-4 border-[#0066FF] p-5 rounded-r-xl space-y-3">
              <p>
                <strong>Nitesh Luthra</strong> (“Company”, “we”, “our”, or “us”) is committed to protecting the privacy and confidentiality of user information. This Privacy Policy explains how we collect, use, store, process, and protect the information shared with us through our website, communication channels, and associated services.
              </p>
              <p className="text-xs font-semibold text-[#1a1a2e]/60">
                By accessing or using our website, you agree to the terms of this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section: Company Information */}
          <section id="company-info" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Building2 className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">2. Company Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-[#1a1a2e]/10 p-5 rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
                <p className="text-xs uppercase tracking-wider text-[#1a1a2e]/40 font-bold mb-1">Registered Address</p>
                <p className="font-semibold text-sm text-[#1a1a2e]/90">Nitesh Luthra</p>
                <p className="text-xs text-[#1a1a2e]/60 mt-1 leading-relaxed">
                  House No. 164, Adarsh Nagar,<br />
                  Jaipur, Rajasthan – 302004
                </p>
              </div>
              <div className="border border-[#1a1a2e]/10 p-5 rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#1a1a2e]/40 font-bold mb-1">Contact Channels</p>
                  <div className="space-y-2 mt-2">
                    <a href="mailto:mail@fintness.in" className="flex items-center gap-2 text-xs font-semibold text-[#0066FF] hover:underline">
                      <Mail className="w-3.5 h-3.5" />
                      mail@fintness.in
                    </a>
                    <a href="tel:+919509608886" className="flex items-center gap-2 text-xs font-semibold text-[#0066FF] hover:underline">
                      <Phone className="w-3.5 h-3.5" />
                      +91 9509608886
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Information We Collect */}
          <section id="information-collect" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Eye className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">3. Information We Collect</h2>
            </div>
            <p>
              We may collect personal information voluntarily shared by users, including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-1">
              {[
                "Name",
                "Mobile Number",
                "Email Address",
                "City/Location",
                "Financial service requirements",
                "Information submitted through contact forms, WhatsApp inquiries, phone calls, or direct communication"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-medium text-[#1a1a2e]/75 bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 px-3 py-2.5 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-amber-500/[0.03] border border-amber-500/20 text-amber-800 p-4 rounded-xl text-xs font-medium flex gap-3 items-start mt-4">
              <span className="bg-amber-500/10 p-1.5 rounded-lg text-amber-600 shrink-0">⚠️</span>
              <p className="leading-relaxed">
                <strong>Important Notice:</strong> We do not collect sensitive personal documents such as PAN, Aadhaar, bank statements, or payment information directly through this website.
              </p>
            </div>
          </section>

          {/* Section: Purpose of Information Collection */}
          <section id="purpose" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Target className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">4. Purpose of Information Collection</h2>
            </div>
            <p>
              The information collected may be utilized for the following operational purposes:
            </p>
            <ul className="space-y-2.5 pl-1">
              {[
                "Responding to inquiries and service requests",
                "Providing financial distribution and support services",
                "Client communication and relationship management",
                "Sharing service-related updates and promotional communication",
                "Sending SIP reminders and related notifications",
                "Providing investment-related assistance and support",
                "Improving customer support and service experience",
                "Compliance with applicable legal and regulatory requirements"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm font-medium text-[#1a1a2e]/75">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-[10px] shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Communication & Consent */}
          <section id="communication" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <MessageSquare className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">5. Communication & Consent</h2>
            </div>
            <div className="space-y-3">
              <p>
                By submitting your contact details through the website, forms, WhatsApp, phone calls, or any other communication channel, you authorize Nitesh Luthra to contact you through phone calls, WhatsApp, SMS, or email regarding financial services, support, promotional communication, SIP reminders, investment-related assistance, and related updates.
              </p>
              <p>
                Users may voluntarily share investment-related information and service requirements through WhatsApp or other communication channels for the purpose of financial service facilitation and support. Such information shall be handled with reasonable confidentiality and used only for servicing, support, compliance, and relationship management purposes.
              </p>
              <p className="text-xs bg-[#1a1a2e]/[0.03] px-3.5 py-2.5 rounded-lg inline-block border border-[#1a1a2e]/5 font-semibold text-[#1a1a2e]/60">
                ✓ Users may request to opt out of non-essential promotional communication at any time.
              </p>
            </div>
          </section>

          {/* Section: Third-Party Platforms */}
          <section id="third-party" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <ExternalLink className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">6. Third-Party Platforms</h2>
            </div>
            <p>
              Nitesh Luthra may facilitate onboarding, portfolio access, transaction-related services, and investment execution through authorized third-party platforms including **NSE NMF II** and **Investwell Mint**.
            </p>
            <p className="text-xs text-[#1a1a2e]/60 border-l-2 border-[#1a1a2e]/25 pl-3.5">
              Use of such platforms shall also be governed by their respective privacy policies, terms, and operational guidelines.
            </p>
          </section>

          {/* Section: Data Sharing & Disclosure */}
          <section id="data-sharing" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Share2 className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">7. Data Sharing & Disclosure</h2>
            </div>
            <p className="font-semibold text-sm text-[#0066FF]">
              We do not sell, rent, or trade user information to third parties.
            </p>
            <p>
              Information may be shared only under the following circumstances:
            </p>
            <ul className="space-y-3.5 pl-1">
              {[
                { title: "Authorized Transactions", desc: "With authorized financial institutions, Asset Management Companies (AMCs), insurers, or service providers for processing client requests." },
                { title: "Legal Obligations", desc: "When required under applicable laws, regulatory guidelines, or legal obligations." },
                { title: "Safety & Compliance", desc: "For compliance, audit, fraud prevention, or dispute resolution purposes." }
              ].map((item, idx) => (
                <li key={idx} className="bg-white border border-[#1a1a2e]/10 p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.005)]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a2e] mb-1">{item.title}</h4>
                  <p className="text-xs md:text-sm text-[#1a1a2e]/70">{item.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Data Security */}
          <section id="data-security" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Lock className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">8. Data Security</h2>
            </div>
            <p>
              Nitesh Luthra implements reasonable administrative and technical measures to safeguard user information against unauthorized access, misuse, disclosure, or loss.
            </p>
            <p className="text-xs font-medium text-amber-600 bg-amber-500/[0.05] p-3 rounded-lg border border-amber-500/10">
              Note: No method of electronic transmission or storage is completely secure, and absolute security cannot be guaranteed.
            </p>
          </section>

          {/* Section: Cookies & Tracking */}
          <section id="cookies" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Cookie className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">9. Cookies & Tracking</h2>
            </div>
            <p>
              Our website currently **does not** use Google Analytics, Facebook Pixel, or third-party advertising tracking tools for user profiling or behavioral advertising.
            </p>
            <p className="text-xs text-[#1a1a2e]/60">
              Basic website cookies or technical session-related functionality may still be used for website performance and user experience.
            </p>
          </section>

          {/* Section: External Links */}
          <section className="scroll-mt-32 space-y-3 border-t border-[#1a1a2e]/10 pt-6">
            <h3 className="text-sm font-bold text-[#1a1a2e] uppercase tracking-wider">External Links</h3>
            <p className="text-xs md:text-sm text-[#1a1a2e]/70 leading-relaxed">
              The website may contain links to external websites or third-party platforms for informational or service purposes. Nitesh Luthra is not responsible for the content, privacy practices, or security of external websites.
            </p>
          </section>

          {/* Section: Regulatory & Distribution Disclosure */}
          <section id="regulatory" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Award className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">10. Regulatory & Distribution Disclosure</h2>
            </div>
            <p>
              Nitesh Luthra is an **AMFI sub registered Mutual Fund Distributor**.
            </p>
            <div className="bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/10 p-5 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-3.5 rounded-xl border border-[#1a1a2e]/5 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                  <p className="text-[10px] uppercase tracking-wider text-[#1a1a2e]/45 font-bold mb-1">Euin no.</p>
                  <p className="text-sm font-extrabold text-[#1a1a2e]">Euin no. - 328688</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#1a1a2e]/5 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                  <p className="text-[10px] uppercase tracking-wider text-[#1a1a2e]/45 font-bold mb-1">Registration Date</p>
                  <p className="text-sm font-extrabold text-[#1a1a2e]">25 Oct 2025</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#1a1a2e]/5 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                  <p className="text-[10px] uppercase tracking-wider text-[#1a1a2e]/45 font-bold mb-1">Valid Till</p>
                  <p className="text-sm font-extrabold text-[#1a1a2e]">24 Oct 2028</p>
                </div>
              </div>
              <p className="text-xs text-[#1a1a2e]/60 mt-4 leading-relaxed">
                Nitesh Luthra operates as a Mutual Fund Distributor and facilitates financial distribution and support services. The company is **not** a SEBI Registered Investment Advisor (RIA) unless separately stated.
              </p>
              <p className="text-xs text-[#1a1a2e]/60 mt-2 leading-relaxed">
                All Mutual Fund investments are facilitated in compliance with applicable AMFI, SEBI, KYC, FATCA, AML, and other regulatory guidelines.
              </p>
              <p className="text-xs font-semibold text-rose-600 mt-3 leading-relaxed">
                * Investments in Mutual Funds are subject to market risks, and no assured or guaranteed returns are promised or implied.
              </p>
            </div>
          </section>

          {/* Section: Client Responsibility & Data Retention */}
          <section id="responsibility" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <UserCheck className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">11. Client Responsibility</h2>
            </div>
            <div className="space-y-4">
              <p>
                Clients are responsible for providing accurate, complete, and updated information regarding their identity, financial situation, investment objectives, and risk profile. Any investment decision taken by the client shall be based on their own evaluation, understanding, and financial requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 p-4.5 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a2e]/70">Data Retention</h4>
                  <p className="text-xs text-[#1a1a2e]/60 leading-relaxed">
                    Client information and communication records may be retained for operational, servicing, compliance, audit, dispute resolution, and regulatory purposes as required under applicable laws.
                  </p>
                </div>
                <div className="bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 p-4.5 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a2e]/70">No Direct Transactions</h4>
                  <p className="text-xs text-[#1a1a2e]/60 leading-relaxed">
                    Nitesh Luthra does not directly collect investment funds or execute transactions through this website. Transactions are facilitated through authorized third-party platforms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Refund & Cancellation */}
          <section id="refund-cancellation" className="scroll-mt-32 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <Ban className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">12. Refund & Cancellation</h2>
            </div>
            <p>
              Nitesh Luthra does not collect payments directly through the website. Accordingly, no online refund or cancellation policy is applicable through the website platform.
            </p>
            <div className="bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 p-4 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a2e]/70 mb-1">Testimonials Disclaimer</h4>
              <p className="text-xs text-[#1a1a2e]/60 leading-relaxed">
                Any testimonials, examples, or client experiences shared on the website or communication channels are for informational purposes only and should not be interpreted as guarantees of future performance, returns, or service outcomes.
              </p>
            </div>
            <div className="bg-[#1a1a2e]/[0.02] border border-[#1a1a2e]/5 p-4 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a2e]/70 mb-1">Policy Updates & Governing Law</h4>
              <p className="text-xs text-[#1a1a2e]/60 leading-relaxed">
                We reserve the right to modify this policy at any time. Governing laws of India apply, and disputes shall be subject to the jurisdiction of Jaipur, Rajasthan.
              </p>
            </div>
          </section>

          {/* Section: Grievance & Support */}
          <section id="grievance" className="scroll-mt-32 space-y-4 border-t border-[#1a1a2e]/10 pt-8">
            <div className="flex items-center gap-2.5 text-[#0066FF]">
              <HelpCircle className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">13. Grievance & Support</h2>
            </div>
            <p>
              For any queries, concerns, or grievances related to this Privacy Policy or data handling practices, please contact our support desk:
            </p>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f1524] text-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#0066FF] rounded-full blur-[80px] opacity-40 pointer-events-none" />
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#00B2FF] rounded-full blur-[80px] opacity-20 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#00B2FF] mb-2">Corporate Support</h4>
                  <h3 className="text-xl font-extrabold tracking-tight">Fintness Finserv Pvt. Ltd.</h3>
                  <p className="text-white/60 text-xs mt-1">House No. 164, Adarsh Nagar, Jaipur, Rajasthan – 302004</p>
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  <a href="mailto:mail@fintness.in" className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-xs font-semibold">
                    <Mail className="w-4 h-4 text-[#00B2FF]" />
                    <span>mail@fintness.in</span>
                  </a>
                  <a href="tel:+919509608886" className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-xs font-semibold">
                    <Phone className="w-4 h-4 text-[#00B2FF]" />
                    <span>+91 9509608886</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </article>

      </div>
    </main>
  );
}

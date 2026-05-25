"use client";

import Link from "next/link";
import { Shield, FileText } from "lucide-react";

// Inline Custom SVG Icons to avoid lucide version mismatches
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    {
      name: "Linkedin",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/company/team_fintness/",
      color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://www.instagram.com/fintness_finserv?igsh=djhhM2gyN2luOGZ1&utm_source=qr",
      color: "hover:text-[#E1306C] hover:bg-[#E1306C]/10",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "https://www.facebook.com/fintness.finserv",
      color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
    },
    {
      name: "Youtube",
      icon: YoutubeIcon,
      href: "https://www.youtube.com/@FINTNESSFINSERV",
      color: "hover:text-[#FF0000] hover:bg-[#FF0000]/10",
    },
  ];

  return (
    <footer className="bg-[#0B1221] border-t border-white/[0.05] w-full pt-10 pb-6 md:pt-12 md:pb-6 px-6 md:px-12 mt-auto relative z-10 text-white">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        
        {/* Top Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 pb-6 border-b border-white/[0.05]">
          
          {/* Logo & Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2">
              <Link href="/" className="font-bold text-xl text-white tracking-tight hover:opacity-90 block">
                FINTNESS FINSERV
              </Link>
            </div>

            {/* Social Links directly below it */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 ${social.color} hover:scale-105 shadow-sm hover:shadow-md`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            {/* AMFI Certification Details below socials (No background box) */}
            <div className="max-w-xs space-y-2 pt-1">
              <div className="flex items-center gap-1.5 text-[#00B2FF]">
                <Shield className="w-3.5 h-3.5" strokeWidth={2.5} />
                <span className="text-[10px] font-bold uppercase tracking-wider">AMFI Registered Distributor</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div>
                  <p className="text-white/60 mb-0.5">Reg. Date</p>
                  <p className="text-white/95 font-semibold">13 May 2025</p>
                </div>
                <div>
                  <p className="text-white/60 mb-0.5">Valid Till</p>
                  <p className="text-white/95 font-semibold">23 Aug 2028</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {/* Company Links */}
            <div>
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#careers" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/#events" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#process" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/#events" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Client Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Documents */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Compliance</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium flex items-center gap-1">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium flex items-center gap-1">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Regulatory Disclaimer (No background box) */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-1.5 text-white/95">
            <FileText className="w-3.5 h-3.5 text-[#00B2FF]" />
            <h4 className="text-[11px] font-bold uppercase tracking-wider">Regulatory Disclaimer</h4>
          </div>
          <p className="text-[10px] leading-relaxed text-white/60 font-medium">
            <strong>Disclaimer:</strong> Investments in Mutual Funds are subject to market risks. Please read all scheme-related documents carefully before investing. Mutual Fund investments do not offer guaranteed or assured returns, and past performance may or may not be sustained in the future. Investors are advised to consider the applicable exit loads, Total Expense Ratio (TER), and other related costs before making any investment decision. Fintness Finserv deals exclusively in Regular Plans of Mutual Fund Schemes and may receive trail commissions, which are disclosed to clients at the time of investment. Direct Plans, which carry lower expense ratios, are available separately; however, we do not facilitate investments in Direct Plans.
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-white/40 font-medium border-t border-white/[0.05] pt-4">
          <p>© {new Date().getFullYear()} Fintness Finserv. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-[10px] text-white/30 font-light">
            Architected for growth and precision.
          </p>
        </div>

      </div>
    </footer>
  );
}

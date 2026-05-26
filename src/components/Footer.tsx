"use client";

import Link from "next/link";
import { Shield, FileText, MapPin, Mail, Phone } from "lucide-react";

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

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "https://www.facebook.com/fintness.finserv",
      color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    },
    {
      name: "Linkedin",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/company/team_fintness/",
      color: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://www.instagram.com/fintness_finserv?igsh=djhhM2gyN2luOGZ1&utm_source=qr",
      color: "hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]",
    },
    {
      name: "Youtube",
      icon: YoutubeIcon,
      href: "https://www.youtube.com/@FINTNESSFINSERV",
      color: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
    },
  ];

  return (
    <footer className="bg-[#141C2B] border-t border-white/[0.05] w-full pt-10 pb-6 md:pt-12 md:pb-6 px-6 md:px-12 mt-auto relative z-10 text-white">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        
        {/* Top Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6">
          
          {/* Logo & Info */}
          <div className="lg:col-span-3 space-y-5">
            <div className="space-y-3">
              <Link href="/" className="font-extrabold text-2xl md:text-3xl text-white tracking-tight hover:opacity-90 block">
                FINTNESS FINSERV
              </Link>
              <div className="space-y-2 pt-2">
                <a href="tel:+919509608886" className="flex items-center gap-2 text-sm md:text-base font-semibold text-white/90 hover:text-[#00B2FF] transition-colors">
                  <Phone className="w-4 h-4 text-[#00B2FF] shrink-0" />
                  <span>+91 95096 08886</span>
                </a>
                <a href="mailto:mail@fintness.in" className="flex items-center gap-2 text-sm md:text-base font-semibold text-white/90 hover:text-[#00B2FF] transition-colors">
                  <Mail className="w-4 h-4 text-[#00B2FF] shrink-0" />
                  <span>mail@fintness.in</span>
                </a>
              </div>
            </div>

            {/* Social Links directly below it */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-md bg-[#24324D]/60 border border-white/[0.08] flex items-center justify-center text-white/80 transition-all duration-300 ${social.color} hover:scale-105 shadow-sm`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-6">
            
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

            {/* Advisory Links */}
            <div>
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Advisory</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#services" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Wealth Management
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Investment Planning
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Risk Mitigation
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Estate Planning
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Tax Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-xs text-white/75 hover:text-[#00B2FF] transition-colors font-medium">
                    Retirement Strategy
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

            <div className="col-span-2 sm:col-span-1 space-y-3">
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Registered Office</h3>
              <ul className="space-y-5 text-xs text-white/75 font-medium">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00B2FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    House No. 164, Adarsh Nagar, Jaipur, Rajasthan – 302004
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Centered Regulatory, AMFI & Copyright info */}
        <div className="text-center space-y-4 pt-6 border-t border-white text-white">
          <p className="text-xs md:text-sm leading-relaxed font-normal max-w-7xl mx-auto text-white/75">
            <strong className="text-white">Disclaimer:</strong> Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. All existing and prospective investors are advised to check and evaluate the Exit loads and other cost structure (TER) applicable at the time of making the investment before finalizing on any investment decision for Mutual Funds schemes. We deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure For Commission earnings is made to clients at the time of investments. Option of Direct Plan for every Mutual Fund Scheme is available to investors offering advantage of lower expense ratio. We are not entitled to earn any commission on Direct plans. Hence we do not deal in Direct Plans.
          </p>

          <p className="text-[10px] md:text-xs text-white/90 font-medium flex flex-wrap justify-center items-center gap-x-2 gap-y-1 pt-1">
            <span>{new Date().getFullYear()} © Copyright Reserved by Fintness Finserv Pvt. Ltd.</span>
            <span className="text-white/40">|</span>
            <span className="text-white font-semibold">AMFI Registered Sub Distributor</span>
            <span className="text-white/40">|</span>
            <span className="text-white font-semibold">EUIN No. - 328688</span>
            <span className="text-white/40">|</span>
            <span className="text-white font-semibold">Reg. Date: 25 Oct 2025</span>
            <span className="text-white/40">|</span>
            <span className="text-white font-semibold">Valid Till: 24 Oct 2028</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

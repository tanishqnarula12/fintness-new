"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(245, 240, 235, 0.4)", boxShadow: "none" }}
      animate={{ 
        backgroundColor: isScrolled ? "rgba(245, 240, 235, 0.7)" : "rgba(245, 240, 235, 0.4)",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[#1a1a2e]/10 px-6 py-3"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-[#1a1a2e]/90 font-semibold tracking-tight text-lg">
          FINTNESS FINSERV
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.href === pathname;
            const isHovered = hoveredPath === link.href;

            return (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <Link 
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-300 ${isActive ? 'text-[#1a1a2e]' : 'text-[#1a1a2e]/50 hover:text-[#1a1a2e]'}`}
                >
                  {link.name}
                </Link>
                {/* Animated Underline */}
                <motion.div
                  initial={false}
                  animate={{ scaleX: isActive || isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0066FF] origin-left"
                />
              </div>
            );
          })}
        </div>

        {/* Right Nav / CTA */}
        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden md:block text-sm text-[#1a1a2e]/50 hover:text-[#1a1a2e] transition-all duration-300 font-medium">
            Client Login
          </Link>
          <button className="bg-[#0066FF] text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#0052CC] hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,102,255,0.2)] hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]">
            Get Started
          </button>
        </div>
        
      </div>
    </motion.nav>
  );
}

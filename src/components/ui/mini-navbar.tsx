"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = 'text-[#1a1a2e]/60';
  const hoverTextColor = 'text-[#1a1a2e]';
  const textSizeClass = 'text-sm font-medium tracking-wide';

  return (
    <Link href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
      <div className="flex flex-col transition-transform duration-[400ms] ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </Link>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-2xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  // Modern minimal dot logo or FINTNESS text mapping
  const logoElement = (
    <div className="flex items-center gap-3">
      <img src="/logo.png" alt="Fintness Finserv Logo" className="w-8 h-8 object-contain" />
      <span className="text-[#1a1a2e] font-semibold tracking-tighter hidden lg:block">FINTNESS FINSERV</span>
    </div>
  );

  const navLinksData = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Events', href: '#events' },
  ];

  const loginButtonElement = (
    <button className="px-5 py-2.5 xl:px-4 xl:py-2 text-sm border border-[#1a1a2e]/10 bg-[#1a1a2e]/[0.03] text-[#1a1a2e]/60 rounded-full hover:border-[#0066FF]/40 hover:text-[#1a1a2e] transition-colors duration-200 w-full xl:w-auto font-medium">
      Client Login
    </button>
  );

  const signupButtonElement = (
    <div className="relative group w-full xl:w-auto">
       <button className="relative z-10 px-5 py-2.5 xl:px-4 xl:py-2 text-sm font-semibold text-white bg-[#0066FF] rounded-full hover:bg-[#0052CC] transition-all duration-300 w-full xl:w-auto shadow-md border border-transparent">
         Get Started
       </button>
    </div>
  );

  return (
    <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-md
                       ${headerShapeClass}
                       border border-[#1a1a2e]/10 bg-white/75 shadow-[0_4px_30px_rgba(0,0,0,0.06)]
                       w-[calc(100%-2rem)] xl:w-max max-w-[95vw] xl:max-w-7xl
                       transition-[border-radius] duration-300 ease-in-out`}>

      <div className="flex items-center justify-between w-full gap-x-6 xl:gap-x-10">
        <Link href="/" className="flex items-center shrink-0">
           {logoElement}
        </Link>

        <nav className="hidden xl:flex items-center space-x-6 text-sm shrink-0">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          {loginButtonElement}
          {signupButtonElement}
        </div>

        <button className="xl:hidden flex items-center justify-center w-8 h-8 text-[#1a1a2e]/60 focus:outline-none shrink-0 border border-[#1a1a2e]/10 rounded-full bg-[#1a1a2e]/[0.03]" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
          {isOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[500px] opacity-100 pt-6 pb-2' : 'max-h-0 opacity-0 pt-0 pb-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-5 text-base w-full">
          {navLinksData.map((link) => (
            <Link key={link.href} href={link.href} onClick={toggleMenu} className="text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-colors w-full text-center font-medium">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-3 mt-8 w-full border-t border-[#1a1a2e]/10 pt-6">
          {loginButtonElement}
          {signupButtonElement}
        </div>
      </div>
    </header>
  );
}

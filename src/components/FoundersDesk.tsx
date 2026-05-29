"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Quote, Award } from "lucide-react";
import { useRef, useCallback } from "react";
import { FloatingPaths } from "@/components/ui/background-paths";

export default function FoundersDesk() {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <section className="py-12 w-full bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      {/* Animated Background Lights */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#0066FF] rounded-full blur-[150px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#00B2FF] rounded-full blur-[120px] pointer-events-none z-0" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Founder's Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative [perspective:1000px]"
          >
            {/* Main Image Container */}
            <motion.div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full max-w-sm mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 group transition-shadow duration-500 hover:shadow-[0_30px_60px_rgba(0,102,255,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/20 to-transparent z-10" />
              
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                alt="Nitesh Luthra - Founder" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Text overlay on image bottom */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-white" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-3xl font-bold tracking-tight mb-2">Nitesh Luthra</h3>
                <p className="text-white/90 text-sm font-medium">Founder, Fintness Finserv</p>
              </div>
            </motion.div>

            {/* Floating Experience Badge (Moved to bottom) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white/90 backdrop-blur-xl border border-slate-100 p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,102,255,0.15)] z-30 max-w-[200px]"
            >
              <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center mb-3 text-[#0066FF]">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-4xl font-black text-[#1a1a2e] tracking-tighter mb-1">12+</h4>
              <p className="text-sm font-semibold text-[#1a1a2e]/70 leading-tight">
                Years of Financial Expertise
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Typography & Quote */}
          <div className="flex flex-col items-start text-left lg:py-10">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-[#0066FF] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">From The Founder&apos;s Desk</h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative py-4 px-8"
            >
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#0066FF]/20 rotate-180 z-0" />
              <h3 className="relative z-10 text-xl md:text-2xl lg:text-3xl font-serif italic text-slate-700 leading-[1.6]">
                We do <strong className="font-semibold text-[#1a1a2e] not-italic">not</strong> believe in selling financial products. We believe in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF] font-semibold not-italic">understanding your goals</span> and guiding you towards financial decisions that are right for you.
                <span className="inline-block ml-2"><Quote className="w-10 h-10 text-[#0066FF]/20 translate-y-3" /></span>
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mt-8 ml-6 md:ml-10"
            >
              <a href="#" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-[#1a1a2e]/60 hover:text-[#0066FF] hover:border-[#0066FF] hover:bg-[#0066FF]/5 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-[#1a1a2e]/60 hover:text-[#00B2FF] hover:border-[#00B2FF] hover:bg-[#00B2FF]/5 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook" className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-[#1a1a2e]/60 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-[#1a1a2e]/60 hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/5 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

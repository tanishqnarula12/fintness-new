"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah Jenkins",
    role: "Tech Executive · Bangalore",
    quote: "Fintness Finserv transformed how I view my wealth. Finally, a structured approach that matches my career trajectory and growth ambitions.",
    avatar: "SJ",
    rating: 5,
    accent: "#0066FF"
  },
  {
    name: "Dr. Rahul Sharma",
    role: "Physician · Mumbai",
    quote: "Their unbiased approach gave me immense clarity. I'm taking less risk with better tax-adjusted returns than I ever managed on my own.",
    avatar: "RS",
    rating: 5,
    accent: "#00B2FF"
  },
  {
    name: "Elena Rostova",
    role: "Startup Founder · Delhi",
    quote: "The personalized attention and deep understanding of complex financial dynamics are unparalleled. They truly understand founders.",
    avatar: "ER",
    rating: 5,
    accent: "#7c6baa"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF] rounded-full blur-[250px] opacity-[0.02] pointer-events-none" />

      <div className="mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[#7c6baa] text-sm font-medium tracking-[0.2em] uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>
      </div>

      {/* Featured testimonial (first one, large) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mb-6 group"
      >
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-[#1a1a2e]/[0.06] group-hover:border-[#1a1a2e]/[0.1] transition-all duration-500 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
          {/* Decorative quote marks */}
          <Quote className="absolute top-8 right-8 w-20 h-20 text-[#1a1a2e]/[0.04] rotate-180" strokeWidth={1} />
          
          {/* Accent glow */}
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-[100px] opacity-[0.05] pointer-events-none" style={{ background: REVIEWS[0].accent }} />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-14 items-start">
            <div className="flex-1">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: REVIEWS[0].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9852a] text-[#c9852a]" />
                ))}
              </div>
              <p className="text-[#1a1a2e]/75 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed md:leading-[1.6] tracking-tight">
                &ldquo;{REVIEWS[0].quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-4 md:flex-col md:items-end md:text-right shrink-0 md:pt-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-semibold border border-[#1a1a2e]/[0.06] shadow-[0_2px_10px_rgba(0,0,0,0.04)]" style={{ background: `${REVIEWS[0].accent}12`, color: REVIEWS[0].accent }}>
                {REVIEWS[0].avatar}
              </div>
              <div>
                <h4 className="text-[#1a1a2e] font-medium text-lg">{REVIEWS[0].name}</h4>
                <p className="text-[#1a1a2e]/35 text-sm font-light">{REVIEWS[0].role}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Smaller testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.slice(1).map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * idx, duration: 0.6, ease: "easeOut" }}
            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#1a1a2e]/[0.06] hover:border-[#1a1a2e]/[0.1] shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden"
          >
            {/* Corner accent */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[50px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ background: review.accent }} />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#c9852a] text-[#c9852a]" />
                ))}
              </div>
              <p className="text-[#1a1a2e]/60 text-base md:text-lg font-light leading-relaxed mb-8">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold border border-[#1a1a2e]/[0.06] shadow-[0_2px_10px_rgba(0,0,0,0.04)]" style={{ background: `${review.accent}12`, color: review.accent }}>
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-[#1a1a2e] font-medium">{review.name}</h4>
                  <p className="text-[#1a1a2e]/35 text-sm font-light">{review.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

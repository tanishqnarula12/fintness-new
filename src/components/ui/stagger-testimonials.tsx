"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const rawTestimonials = [
  { testimonial: "My favorite solution in the market. We work 5x faster with Fintness Finserv.", by: "Alex, CEO at TechCorp" },
  { testimonial: "I'm confident my wealth is safe with Fintness Finserv. I can't say that about other providers.", by: "Dan, CTO at SecureNet" },
  { testimonial: "I know it's cliche, but we were lost before we found Fintness Finserv. Can't thank you guys enough!", by: "Stephanie, COO at InnovateCo" },
  { testimonial: "Fintness Finserv's strategies make planning for the future seamless. Can't recommend them enough!", by: "Marie, CFO at FuturePlanning" },
  { testimonial: "If I could give 11 stars, I'd give 12.", by: "Andre, Head of Design at CreativeSolutions" },
  { testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.", by: "Jeremy, Product Manager at TimeWise" },
  { testimonial: "Took some convincing, but now that we're with Fintness Finserv, we're never going back.", by: "Pam, Marketing Director at BrandBuilders" },
  { testimonial: "I would be lost without Fintness Finserv's in-depth analytics. The ROI is EASILY 100X for us.", by: "Daniel, Data Scientist at AnalyticsPro" },
  { testimonial: "It's just the best. Period.", by: "Fernando, UX Designer at UserFirst" },
  { testimonial: "I switched 5 years ago and never looked back.", by: "Andy, DevOps Engineer at CloudMasters" },
  { testimonial: "I've been searching for a solution like Fintness Finserv for YEARS. So glad I finally found one!", by: "Pete, Sales Director at RevenueRockets" },
  { testimonial: "It's so simple and intuitive, we got the team up to speed in 10 minutes.", by: "Marina, HR Manager at TalentForge" },
  { testimonial: "Fintness Finserv's support is unparalleled. They're always there when we need them.", by: "Olivia, Customer Success Manager at ClientCare" },
  { testimonial: "The efficiency gains we've seen since partnering with Fintness Finserv are off the charts!", by: "Raj, Operations Manager at StreamlineSolutions" },
  { testimonial: "Fintness Finserv has revolutionized how we handle our portfolio. It's a game-changer!", by: "Lila, Workflow Specialist at ProcessPro" },
  { testimonial: "The scalability of Fintness Finserv's approach is impressive. It grows with our business seamlessly.", by: "Trevor, Scaling Officer at GrowthGurus" },
  { testimonial: "I appreciate how Fintness Finserv continually innovates. They're always one step ahead.", by: "Naomi, Innovation Lead at FutureTech" },
  { testimonial: "The ROI we've seen with Fintness Finserv is incredible. It's paid for itself many times over.", by: "Victor, Finance Analyst at ProfitPeak" },
  { testimonial: "Fintness Finserv's platform is so robust, yet easy to use. It's the perfect balance.", by: "Yuki, Tech Lead at BalancedTech" },
  { testimonial: "We've tried many advisors, but Fintness Finserv stands out in terms of reliability and performance.", by: "Zoe, Performance Manager at ReliableSystems" }
];

const testimonials = rawTestimonials.map((t, i) => ({
  ...t,
  tempId: i,
  imgSrc: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`
}));

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 border-2 p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isCenter 
          ? "z-10 bg-[#0066FF] text-white border-[#0066FF]" 
          : "z-0 bg-white text-[#1a1a2e] border-[#1a1a2e]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
          scale(${isCenter ? 1 : 0.95})
        `,
        boxShadow: isCenter ? "0px 12px 40px rgba(0,102,255,0.2)" : "none"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
          backgroundColor: isCenter ? "rgba(255,255,255,0.2)" : "rgba(26,26,46,0.1)"
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 object-cover object-top"
        style={{
          boxShadow: isCenter ? "3px 3px 0px rgba(255,255,255,0.2)" : "3px 3px 0px rgba(26,26,46,0.1)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-white" : "text-[#1a1a2e]"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/80" : "text-[#1a1a2e]/60"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = useCallback((steps: number) => {
    setTestimonialsList(prev => {
      const newList = [...prev];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) return prev;
          newList.push({ ...item, tempId: Math.random() });
        }
      }
      return newList;
    });
  }, []);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleMove(1);
    }, 3500); // Progress smoothly every 3.5 seconds
    
    return () => clearInterval(interval);
  }, [handleMove]);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 600 }}
    >
      {/* Container to handle the stagger mask */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-r from-white via-transparent to-white w-full" />
      
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
    </div>
  );
};

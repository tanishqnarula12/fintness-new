"use client";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "@/components/ui/testimonial";
import { SparklesText } from "@/components/ui/sparkles-text";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=11",
    description: "Amazing experience working with Fintness Finserv! The results exceeded my expectations."
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=5",
    description: "Highly recommended! Great service, goal-oriented strategies, and a professional approach."
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://i.pravatar.cc/150?img=8",
    description: "Exceptional quality and professionalism. I finally feel in control of my financial future."
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    avatar: "https://i.pravatar.cc/150?img=9",
    description: "Fintness Finserv transformed how I view my wealth. Finally, a structured approach that matches my career trajectory and growth ambitions."
  },
  {
    id: 5,
    name: "Dr. Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=12",
    description: "Their unbiased approach gave me immense clarity. I'm taking less risk with better tax-adjusted returns than I ever managed on my own."
  }
];

export default function Testimonials() {
  return (
    <section id="events" className="py-16 md:py-20 lg:py-24 px-6 max-w-7xl mx-auto w-full relative overflow-hidden bg-white">
      <div className="mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SparklesText 
            text="Testimonials" 
            colors={{ first: "#0066FF", second: "#00B2FF" }} 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-4"
          />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1a2e] tracking-tight mt-2">
            Voices of Success
          </h3>
        </motion.div>
      </div>

      <div className="w-full relative mt-10">
        <TestimonialCarousel 
          testimonials={TESTIMONIAL_DATA}
          className="max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
}

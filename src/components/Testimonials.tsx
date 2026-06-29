"use client";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "@/components/ui/testimonial";
import { SparklesText } from "@/components/ui/sparkles-text";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Vishal Agarwal",
    role: "Regional Collection Manager, SK Finance Limited, Jaipur",
    description: "Meeting Nitesh and his team in 2013 changed the way I looked at money and my future. I started with a SIP of just ₹7,500/month, and today, despite life's ups and downs, I've built a ₹62.5 lakh portfolio with complete confidence. They have been more than financial consultant, they have been family, guiding me at every step of my journey."
  },
  {
    id: 2,
    name: "Samresh Kumar",
    role: "ELV Lead, Sterling & Wilson Data Centre Pvt. Ltd.",
    description: "Thanks to Nitesh Luthra and the entire Team Fintness for being a constant source of guidance and support in my financial journey. Their advice and disciplined planning gave me the confidence to achieve financial stability and move closer to true financial freedom. I’m truly grateful for their unwavering support."
  },
  {
    id: 3,
    name: "S Sathish",
    role: "Insurance Client",
    description: "A big thank you to Team Fintness for your excellent support throughout my insurance journey. Your professionalism, product knowledge, and prompt assistance made the entire process smooth and hassle free. Highly recommended for anyone looking for reliable insurance guidance!"
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

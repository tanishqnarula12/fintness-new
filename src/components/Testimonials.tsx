"use client";
import { motion } from "framer-motion";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full relative overflow-hidden bg-white">
      <div className="mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[#0066FF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>
      </div>

      <div className="w-full relative mt-10">
        <StaggerTestimonials />
      </div>
    </section>
  );
}

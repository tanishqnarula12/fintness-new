"use client";
import { motion } from "framer-motion";

export default function TransitionSection() {
  return (
    <section className="relative w-full py-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center py-10"
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-white/50 font-extralight tracking-wide leading-relaxed">
          Now that you&apos;ve broken old habits…
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium mt-3 tracking-tight">
          here&apos;s what comes next.
        </p>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent mx-auto mt-8 origin-center"
        />
      </motion.div>
    </section>
  );
}

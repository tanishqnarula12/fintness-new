"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(0,102,255,${0.02 + i * 0.01})`,
        width: 0.5 + i * 0.02,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg
                className="w-full h-full text-[#0066FF]"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.02 + path.id * 0.003}
                        initial={{ pathLength: 0.3, opacity: 0.2 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.1, 0.3, 0.1],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + ((path.id * 7) % 11),
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Build a Fitter Financial Future",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-white">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className={`inline-block text-transparent bg-clip-text ${
                                            word === "Fitter" || word === "Financial" || word === "Future"
                                                ? "bg-gradient-to-r from-[#0066FF] to-[#00B2FF]"
                                                : "bg-gradient-to-r from-neutral-900 to-neutral-700/80"
                                        }`}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <Link
                        href="/contact"
                        className="inline-block group relative bg-gradient-to-b from-[#0066FF]/10 to-[#00B2FF]/10 
                        p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-[0_10px_30px_rgba(0,102,255,0.15)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.25)] transition-shadow duration-300"
                    >
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-10 py-6 text-lg font-bold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 
                            text-[#1a1a2e] transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-[#0066FF]/20"
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                Talk to Advisor
                            </span>
                            <span
                                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300 text-[#0066FF]"
                            >
                                →
                            </span>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

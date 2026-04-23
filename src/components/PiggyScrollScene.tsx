"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FRAME_COUNT = 209;

function preloadImages() {
  const images: HTMLImageElement[] = [];
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    img.src = `/frames/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
    images.push(img);
  }
  return images;
}

/** Clamp a value between min and max */
function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

/** Map a value from [inMin,inMax] → [outMin,outMax], clamped */
function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  const t = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return outMin + t * (outMax - outMin);
}

export default function PiggyScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // ── Refs for direct DOM manipulation (no React re-renders) ──
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bottomFadeRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  // ── Preload ─────────────────────────────────────
  useEffect(() => {
    const imgs = preloadImages();
    let count = 0;
    imgs.forEach((img) => {
      const done = () => {
        count++;
        if (count >= 15 && !loaded) {
          setImages(imgs);
          setLoaded(true);
        }
      };
      img.onload = done;
      img.onerror = done;
    });
  }, [loaded]);

  // ── Canvas Draw ─────────────────────────────────
  const drawFrame = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      canvas: HTMLCanvasElement,
      img: HTMLImageElement
    ) => {
      const cR = canvas.width / canvas.height;
      const iR = img.naturalWidth / img.naturalHeight;
      let dW: number, dH: number, oX: number, oY: number;
      if (cR > iR) {
        dW = canvas.width;
        dH = canvas.width / iR;
        oX = 0;
        oY = (canvas.height - dH) / 2;
      } else {
        dW = canvas.height * iR;
        dH = canvas.height;
        oX = (canvas.width - dW) / 2;
        oY = 0;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, oX, oY, dW, dH);
    },
    []
  );

  // ── Resize ──────────────────────────────────────
  useEffect(() => {
    const resize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // ─── MASTER SCROLL DRIVER ──────────────────────
  // This single RAF loop reads scroll position and drives
  // ALL animations: canvas frames, text opacity, overlays.
  // No framer-motion useScroll/useTransform needed.
  // ───────────────────────────────────────────────
  useEffect(() => {
    if (!loaded || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf: number;
    let lastFrameIdx = -1;

    const tick = () => {
      const container = containerRef.current;
      if (!container) {
        raf = requestAnimationFrame(tick);
        return;
      }

      // ── Calculate scroll progress 0→1 ──
      const rect = container.getBoundingClientRect();
      const scrollableDistance = container.scrollHeight - window.innerHeight;
      const progress = clamp(-rect.top / scrollableDistance, 0, 1);

      // ════════════════════════════════════════════════
      //  TIMELINE  (container = 500vh → ~2920px scroll)
      //
      //  0.00 → 0.70 : Piggy frames 1→209
      //  0.52 → 0.68 : CTA text fades in
      //  0.68 → 0.90 : CTA fully visible & clickable
      //  0.90 → 1.00 : CTA fades + bottom gradient blends
      // ════════════════════════════════════════════════

      // ── 1. Canvas frames — play over 70% of scroll ──
      const frameIdx = Math.round(mapRange(progress, 0, 0.70, 0, FRAME_COUNT - 1));
      if (frameIdx !== lastFrameIdx) {
        const img = images[frameIdx];
        if (img && img.complete && img.naturalWidth > 0) {
          drawFrame(ctx, canvas, img);
          lastFrameIdx = frameIdx;
        }
      }

      // ── 2. Canvas subtle zoom ──
      if (canvasWrapRef.current) {
        const scale = mapRange(progress, 0, 1, 1, 1.08);
        canvasWrapRef.current.style.transform = `scale(${scale})`;
      }

      // ── 3. CTA text — fades in at 52% ──
      if (ctaRef.current) {
        let ctaOpacity: number;
        if (progress < 0.52) {
          ctaOpacity = 0;
        } else if (progress < 0.68) {
          ctaOpacity = mapRange(progress, 0.52, 0.68, 0, 1);
        } else if (progress < 0.90) {
          ctaOpacity = 1;
        } else {
          ctaOpacity = mapRange(progress, 0.90, 1.0, 1, 0);
        }
        const ctaY = mapRange(progress, 0.52, 0.68, 35, 0);
        ctaRef.current.style.opacity = String(ctaOpacity);
        ctaRef.current.style.transform = `translateY(${ctaY}px)`;
        ctaRef.current.style.pointerEvents = ctaOpacity > 0.3 ? "auto" : "none";
      }

      // ── 4. Light overlay for text readability (warm tint) ──
      if (overlayRef.current) {
        let ov: number;
        if (progress < 0.52) {
          ov = mapRange(progress, 0.20, 0.45, 0.0, 0.3); 
        } else {
          ov = mapRange(progress, 0.52, 0.75, 0.3, 0.75); 
        }
        overlayRef.current.style.opacity = String(ov);
      }

      // ── 5. Bottom fade ──
      if (bottomFadeRef.current) {
        const btOpacity = mapRange(progress, 0.90, 1.0, 0, 1);
        bottomFadeRef.current.style.opacity = String(btOpacity);
      }

      // ── 6. Scroll hint ──
      if (scrollHintRef.current) {
        const hintOpacity = mapRange(progress, 0, 0.05, 1, 0);
        scrollHintRef.current.style.opacity = String(hintOpacity);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [loaded, images, drawFrame]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#F5F0EB] font-sans"
      style={{ position: "relative", height: "500vh" }}
    >
      <div
        className="w-full overflow-hidden bg-[#F5F0EB]"
        style={{ position: "sticky", top: 0, height: "100vh" }}
      >
        {/* Loader */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F5F0EB] text-[#0066FF] z-50">
            <div className="w-12 h-12 border-4 border-[#0066FF]/20 border-t-[#0066FF] rounded-full animate-spin mb-4" />
            <p className="text-[#3d3d3d]/50 text-sm tracking-widest uppercase font-medium">
              Loading Experience...
            </p>
          </div>
        )}

        {/* Canvas */}
        <div
          ref={canvasWrapRef}
          className="absolute inset-0 will-change-transform origin-center"
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>

        {/* Light overlay for readability */}
        <div
          ref={overlayRef}
          className="absolute inset-0 z-10 bg-[#F5F0EB] pointer-events-none"
          style={{ opacity: 0 }}
        />

        {/* Bottom fade gradient */}
        <div
          ref={bottomFadeRef}
          className="absolute bottom-0 left-0 right-0 h-[50%] z-[13] pointer-events-none bg-gradient-to-t from-[#F5F0EB] via-[#F5F0EB]/90 to-transparent"
          style={{ opacity: 0 }}
        />

        {/* ─── TEXT LAYERS ─── */}

        {/* CTA — appears after scroll animation */}
        <div
          ref={ctaRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center will-change-transform px-6 lg:px-12"
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          <h2
            className="text-[#1a1a2e] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black max-w-5xl tracking-tighter leading-[1.05] mb-6 drop-shadow-sm"
          >
            Let&apos;s Build a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00B2FF]">Fitter</span> Financial Future
            Together
          </h2>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-4 rounded-full bg-[#0066FF] px-10 py-5 font-bold text-lg text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-[#0052CC] hover:shadow-[#0066FF]/30 cursor-pointer"
          >
            <span className="tracking-wide">Talk to an Advisor</span>
            <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
          </motion.button>
        </div>


        {/* ─── SCROLL INDICATOR ─── */}
        <div
          ref={scrollHintRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          style={{ opacity: 1 }}
        >
          <p className="text-[#1a1a2e]/40 text-xs tracking-[0.3em] uppercase font-bold">
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-5 h-8 rounded-full border-2 border-[#1a1a2e]/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1.5 h-2.5 rounded-full bg-[#1a1a2e]/40" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

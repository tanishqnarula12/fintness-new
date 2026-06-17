"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Maximize2 
} from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";

interface EventItem {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  images: string[];
}

const eventsData: EventItem[] = [
  {
    id: "atharv-offshore",
    name: "Atharv Offshore Ahmedabad",
    date: "November 28, 2025",
    location: "Ahmedabad, Gujarat",
    description: "Conducted a Financial Awareness Session covering goal-based investing, financial planning, risk management, and wealth creation strategies for employees.",
    images: [
      "/events/atharv-2.jpeg",
    ]
  },
  {
    id: "bn-group",
    name: "BN Group India Summit",
    date: "May 30, 2024",
    location: "New Delhi",
    description: "An interactive financial wellness session focused on improving financial literacy, investment awareness, and long-term wealth-building habits.",
    images: [
      "/events/bn-group-1.jpeg",
      "/events/bn-group-2.jpeg",
      "/events/bn-group-3.jpeg",
      "/events/bn-group-4.jpeg",
    ]
  },
  {
    id: "mavericks",
    name: "Mavericks",
    date: "July 2, 2024",
    location: "Corporate Headquarters",
    description: "Educating employees on smart financial decision-making through discussions on investments, insurance, taxation, and retirement planning.",
    images: [
      "/events/mavericks-1.jpeg",
      "/events/mavericks-2.jpeg",
    ]
  },
  {
    id: "sq-fit",
    name: "SQ Fit Corporate Wellness",
    date: "May 30, 2024",
    location: "Wellness Arena",
    description: "Empowering employees with practical insights on budgeting, investing, risk protection, and financial independence.",
    images: [
      "/events/sq-fit-1.jpeg",
      "/events/sq-fit-2.jpeg",
    ]
  },
  {
    id: "sumit-digital",
    name: "Sumit Digital Integration",
    date: "June 3, 2024",
    location: "Digital HQ",
    description: "A corporate financial literacy program designed to help employees build stronger financial foundations and achieve their personal financial goals.",
    images: [
      "/events/sumit-1.jpeg",
      "/events/sumit-2.jpeg",
      "/events/sumit-3.jpeg",
    ]
  },
  {
    id: "hornblower",
    name: "Hornblower Corporate Session",
    date: "May 30, 2024",
    location: "Hornblower Yacht",
    description: "A knowledge-driven session aimed at helping employees understand personal finance, manage money effectively, and make informed investment decisions for their future.",
    images: [
      "/events/hornblower-1.jpeg",
      "/events/hornblower-2.jpeg",
    ]
  }
];

const videosData = [
  {
    id: "vid-sumit-1",
    src: "/events/sumit-1.mp4",
    title: "Sumit Digital Highlight",
  },
];

export default function EventsPage() {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: string[];
    index: number;
    eventName: string;
  }>({
    isOpen: false,
    images: [],
    index: 0,
    eventName: ""
  });

  const openLightbox = (images: string[], index: number, eventName: string) => {
    setLightbox({
      isOpen: true,
      images,
      index,
      eventName
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.isOpen]);

  return (
    <main className="bg-white min-h-screen text-[#1a1a2e] font-sans w-full relative overflow-hidden pb-24">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF] rounded-full blur-[250px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-[40%] left-[-20%] w-[500px] h-[500px] bg-[#00B2FF] rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[#0066FF] rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-3xl"
        >
          <SparklesText 
            text="OUR EVENTS" 
            colors={{ first: "#0066FF", second: "#00B2FF" }} 
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-[#1a1a2e]/80 tracking-tight leading-relaxed max-w-2xl mx-auto">
            Milestones, Moments, and Core Collaborations
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
            A visual journey through our workshops, client meets, wellness activities, and corporate celebrations.
          </p>
        </motion.div>
      </section>

      {/* EVENTS IMAGES SECTION */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-28 relative z-10">
        {eventsData.map((event, eventIdx) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-t border-slate-100 pt-16"
          >
            {/* Event Description (LHS on Desktop) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#0066FF] bg-[#0066FF]/5 uppercase">
                Event {eventIdx + 1}
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a1a2e] tracking-tight leading-tight">
                {event.name}
              </h3>
              
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-2xl border border-slate-100">
                  <Calendar className="w-4 h-4 text-[#0066FF]" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-2xl border border-slate-100">
                  <MapPin className="w-4 h-4 text-[#00B2FF]" />
                  {event.location}
                </span>
              </div>

              <p className="text-slate-600 font-light leading-relaxed text-base md:text-lg">
                {event.description}
              </p>
            </div>

            {/* Event Image Gallery Grid (RHS on Desktop) */}
            <div className="lg:col-span-7">
              <div className={`grid gap-4 ${
                event.images.length === 1 
                  ? "grid-cols-1" 
                  : event.images.length === 2 
                    ? "grid-cols-2" 
                    : event.images.length === 3
                      ? "grid-cols-1 sm:grid-cols-3"
                      : "grid-cols-2"
              }`}>
                {event.images.map((imgSrc, imgIdx) => (
                  <motion.div
                    key={imgSrc}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={() => openLightbox(event.images, imgIdx, event.name)}
                    className="relative overflow-hidden rounded-3xl border border-slate-100 bg-[#f8fafc] shadow-sm hover:shadow-[0_12px_30px_rgba(0,102,255,0.08)] cursor-pointer group aspect-[4/3]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={imgSrc} 
                      alt={`${event.name} photo ${imgIdx + 1}`} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover Zoom & Icon Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1 }}
                        animate={{ scale: [0.8, 1], opacity: [0, 1] }}
                        className="w-12 h-12 rounded-full bg-white text-[#1a1a2e] flex items-center justify-center shadow-lg"
                      >
                        <Maximize2 className="w-5 h-5 text-[#0066FF]" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* VIDEOS SECTION */}
      <section className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto mt-40 border-t border-slate-100 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#00B2FF] bg-[#00B2FF]/5 uppercase">
            Videos
          </span>
          <SparklesText 
            text="Moments in Motion" 
            colors={{ first: "#0066FF", second: "#00B2FF" }} 
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          />
          <p className="text-slate-600 font-light max-w-xl mx-auto leading-relaxed">
            Experience our events, energy, and corporate milestones through short video highlights.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[32px] border border-slate-100 p-3 shadow-md shadow-slate-100 hover:shadow-[0_16px_40px_rgba(0,102,255,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shrink-0">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video.src} />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0066FF]/5 flex items-center justify-center shrink-0">
                    <Play className="w-4 h-4 text-[#0066FF] fill-[#0066FF]" />
                  </div>
                  <div className="h-[2px] bg-slate-100 flex-grow" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Reel {idx + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL OVERLAY */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md px-4 py-8"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox content wrapper */}
            <div className="relative w-full max-w-5xl aspect-[4/3] max-h-[75vh] flex items-center justify-center">
              {/* Previous Button */}
              {lightbox.images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Central Image */}
              <motion.div
                key={lightbox.images[lightbox.index]}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightbox.images[lightbox.index]}
                  alt={`${lightbox.eventName} fullscreen view`}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>

              {/* Next Button */}
              {lightbox.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Caption & Counter */}
            <div className="text-center mt-6 space-y-2">
              <p className="text-white font-medium text-lg">{lightbox.eventName}</p>
              {lightbox.images.length > 1 && (
                <p className="text-white/50 text-xs tracking-wider font-semibold uppercase">
                  Image {lightbox.index + 1} of {lightbox.images.length}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

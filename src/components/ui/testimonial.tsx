import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface Testimonial {
  id: number | string
  name: string
  avatar?: string
  role?: string
  description: string
}

export interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

const getGradient = (index: number) => {
  const gradients = [
    "from-[#0066FF] to-[#00B2FF]", // Blue-Cyan
    "from-[#7C3AED] to-[#C084FC]", // Purple-Lavender
    "from-[#059669] to-[#34D399]", // Emerald-Mint
  ];
  return gradients[index % gradients.length];
};

export const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)
    const [slideDirection, setSlideDirection] = React.useState<number>(1)

    // Auto-play with alternating left/right animations
    React.useEffect(() => {
      const interval = setInterval(() => {
        setSlideDirection((prev) => {
          const newDirection = prev === 1 ? -1 : 1
          setExitX(200 * newDirection)
          setTimeout(() => {
            setCurrentIndex((curr) => (curr + 1) % testimonials.length)
            setExitX(0)
          }, 200)
          return newDirection
        })
      }, 5000) // Slightly longer auto-play since text is longer

      return () => clearInterval(interval)
    }, [testimonials.length])

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    const nextTestimonial = () => {
      setExitX(200)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setExitX(0)
      }, 200)
    }

    const prevTestimonial = () => {
      setExitX(-200)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setExitX(0)
      }, 200)
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-[420px] w-full flex items-center justify-center relative",
          className
        )}
        {...props}
      >
        {showArrows && (
          <button 
            onClick={prevTestimonial}
            className="absolute left-1 sm:left-4 lg:left-10 z-20 p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#0066FF] shadow-sm transition-all hover:scale-105 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        
        <div className="relative w-80 md:w-[500px] h-[340px]">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard =
              index === (currentIndex + 1) % testimonials.length
            const isNextCard =
              index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing border border-slate-100",
                  "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
              >
                <div className="p-5 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 text-center h-full justify-center">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md bg-gradient-to-br shrink-0",
                    getGradient(index)
                  )}>
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a2e]">
                      {testimonial.name}
                    </h3>
                    {testimonial.role && (
                      <p className="text-xs sm:text-sm text-[#0066FF] font-bold mt-1.5 uppercase tracking-wider">
                        {testimonial.role}
                      </p>
                    )}
                    <p className="text-sm sm:text-base text-slate-800 font-normal mt-4 leading-relaxed">
                      "{testimonial.description}"
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
          
          {showDots && (
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-6 bg-[#0066FF]"
                      : "w-2 bg-slate-300",
                  )}
                />
              ))}
            </div>
          )}
        </div>

        {showArrows && (
          <button 
            onClick={nextTestimonial}
            className="absolute right-1 sm:right-4 lg:right-10 z-20 p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#0066FF] shadow-sm transition-all hover:scale-105 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

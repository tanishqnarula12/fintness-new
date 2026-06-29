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
          "h-[480px] sm:h-[430px] md:h-[380px] w-full flex items-center justify-center relative",
          className
        )}
        {...props}
      >
        {showArrows && (
          <button 
            onClick={prevTestimonial}
            className="absolute left-1 sm:left-4 md:left-8 lg:left-12 z-20 p-2 sm:p-2.5 rounded-full bg-white/95 backdrop-blur-sm hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#0066FF] shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
        
        <div className="relative w-[265px] min-[375px]:w-[310px] sm:w-[420px] md:w-[600px] h-[395px] sm:h-[350px] md:h-[320px]">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex

            if (!isCurrentCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-3xl border border-slate-100",
                  "bg-white shadow-[0_15px_40px_rgba(0,102,255,0.06)]",
                )}
                style={{
                  zIndex: 3,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  x: slideDirection * 50
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: exitX
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
              >
                <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full justify-between relative">
                  {/* Initials Avatar */}
                  <div className={cn(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-md bg-gradient-to-br shrink-0 mt-2",
                    getGradient(index)
                  )}>
                    {getInitials(testimonial.name)}
                  </div>
                  
                  {/* Description */}
                  <div className="flex-1 flex items-center justify-center my-3 max-w-[240px] sm:max-w-md md:max-w-xl">
                    <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 font-normal leading-relaxed italic">
                      &quot;{testimonial.description}&quot;
                    </p>
                  </div>

                  {/* Name and Designation */}
                  <div className="mt-1 pb-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e]">
                      {testimonial.name}
                    </h3>
                    {testimonial.role && (
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 max-w-[220px] sm:max-w-md mx-auto">
                        {testimonial.role}
                      </p>
                    )}
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
            className="absolute right-1 sm:right-4 md:right-8 lg:right-12 z-20 p-2 sm:p-2.5 rounded-full bg-white/95 backdrop-blur-sm hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#0066FF] shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

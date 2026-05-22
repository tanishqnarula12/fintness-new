import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
}

export interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

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
      }, 5500)

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
          "h-80 w-full flex items-center justify-center relative",
          className
        )}
        {...props}
      >
        {showArrows && (
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 md:left-10 z-20 p-2 text-slate-400 hover:text-[#0066FF] transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}
        
        <div className="relative w-80 md:w-96 h-64">
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
                <div className="p-6 md:p-8 flex flex-col items-center gap-4 text-center h-full justify-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a1a2e]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#1a1a2e]/60 font-light mt-2 line-clamp-4">
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
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-[#0066FF]"
                      : "bg-slate-200",
                  )}
                />
              ))}
            </div>
          )}
        </div>

        {showArrows && (
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 md:right-10 z-20 p-2 text-slate-400 hover:text-[#0066FF] transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

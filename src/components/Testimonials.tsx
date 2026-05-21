import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll testimonials every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="relative py-20 bg-white border-t border-b border-neutral-100 overflow-hidden">
      {/* Decorative Grid overlays */}
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full blob-purple/15" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* Section title column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-violet-600 font-bold">
              Recommendations
            </span>
            <h3 className="font-display text-3xl font-bold text-neutral-900 leading-tight">
              Helps Us <br />
              Organized
            </h3>
            <p className="font-sans text-sm text-neutral-400">
              Verified customer feedback from direct collaborations on design systems and production code.
            </p>

            {/* Pagination Controls */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Quote Body Container Column */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl border border-neutral-100 bg-neutral-50/50 p-8 md:p-12 shadow-sm">
              
              {/* Massive beautiful decorative quote mark */}
              <div className="absolute top-6 right-8 text-violet-100/50">
                <Quote size={80} className="stroke-[1]" />
              </div>

              {/* Slider Content */}
              <div className="relative z-10 space-y-6">
                
                {/* 5-Star Rating block */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < current.rating ? "fill-amber-400" : "text-neutral-200"}
                    />
                  ))}
                </div>

                {/* Testimonial text quote */}
                <p className="font-sans text-lg md:text-xl font-medium text-neutral-800 leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Author Credentials */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                  <div className="flex-1">
                    <h4 className="font-display text-sm font-bold text-neutral-900">
                      {current.author}
                    </h4>
                    <p className="font-sans text-xs text-neutral-500">
                      {current.role} •{" "}
                      <span className="font-semibold text-neutral-700">
                        {current.company}
                      </span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Minimal Dot Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "w-6 bg-violet-600" : "w-1.5 bg-neutral-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

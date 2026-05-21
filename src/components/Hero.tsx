import { ArrowRight, Globe, Github, Linkedin, MessageSquare, Star } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onResumeClick: () => void;
}

export default function Hero({ onContactClick, onResumeClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 bg-white min-h-[90vh] flex flex-col justify-center">
      {/* Absolute Decorative Grid Pattern overlay */}
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />

      {/* Floating organic gradient blur blobs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-80 w-80 rounded-full blob-orange/45 animate-pulse" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[32rem] w-[32rem] rounded-full blob-cyan/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 w-full">
        {/* Giant Main Display Title */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-8xl leading-[0.95] max-w-4xl">
            Digital - Visual <br />
            <span className="relative bg-clip-text text-neutral-900">
              Designer
            </span>
          </h1>
        </div>

        {/* Responsive Grid-Cell Layout beneath Title */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 border-t border-neutral-100 pt-12">
          
          {/* Column 1: Core Specializations & Arrow */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="hidden sm:block">
              {/* Sleek line arrow pointing to text */}
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="h-[1px] w-24 bg-neutral-300" />
                <ArrowRight size={14} className="text-neutral-400" />
              </div>
            </div>
            <p className="font-sans text-base font-semibold text-neutral-800 leading-relaxed max-w-xs">
              Specialized in Web Design, UX /UI, Webflow, and Front End Development.
            </p>
          </div>

          {/* Column 2: Quantifiable metrics */}
          <div className="flex flex-col justify-between space-y-4">
            <p className="font-sans text-xs text-neutral-400 font-medium">
              Creative masterpieces delivered in the last 8 years
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl font-bold tracking-tight text-neutral-900 leading-none">
                50+
              </span>
            </div>
            {/* Social media icons matching the icons list */}
            <div className="flex items-center gap-4 text-neutral-500">
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600 transition-colors"
                aria-label="Behance profile"
              >
                <Globe size={16} />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600 transition-colors font-mono font-bold text-sm"
                aria-label="Behance tag"
              >
                Bē
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600 transition-colors"
                aria-label="Medium blog"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Column 3: Trustpilot and Rating */}
          <div className="flex flex-col justify-between space-y-6 lg:border-l lg:border-neutral-100 lg:pl-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-lg">★</span>
                <span className="font-display text-base font-bold text-neutral-900">4.8</span>
              </div>
              <p className="font-sans text-xs text-neutral-400">
                from 150,000+ Reviews
              </p>
            </div>

            {/* Trustpilot Branding Panel block */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <Star size={14} className="fill-emerald-500 text-emerald-500" />
                <span className="font-display text-sm font-bold text-neutral-900">Trustpilot</span>
              </div>
              {/* 5 Green square rating boxes */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="flex h-5 w-5 items-center justify-center star-green text-white rounded-[2px]"
                  >
                    <Star size={10} className="fill-white text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

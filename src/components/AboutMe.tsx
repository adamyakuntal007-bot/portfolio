interface AboutMeProps {
  onContactClick: () => void;
}

export default function AboutMe({ onContactClick }: AboutMeProps) {
  return (
    <section id="about" className="relative py-20 bg-neutral-50/50">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Header pill indicator column */}
          <div className="lg:col-span-3">
            <button
              onClick={onContactClick}
              className="rounded-full border border-neutral-300 bg-white px-5 py-2 font-display text-xs font-semibold text-neutral-800 transition-all hover:border-violet-600 hover:text-violet-600 shadow-sm"
            >
              About Me
            </button>
          </div>

          {/* Description fold column */}
          <div className="lg:col-span-9 space-y-8">
            <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl leading-tight">
              Driven – And <br className="hidden sm:inline" />
              Adaptable
            </h2>

            <div className="space-y-6 max-w-2xl font-sans">
              <p className="text-xl font-medium text-neutral-900 leading-relaxed">
                Passionate about creating seamless user experiences.{" "}
                <span className="text-neutral-400">
                  Over 8 years in the digital design world. Expert in UI design, custom component blueprints, and visual layout typography.
                </span>
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                My approach focuses on translating complex technical architectures into highly digestible, intuitive, and award-winning products. By designing rigorous UI token systems alongside playful, micro-animated client components, I help companies worldwide establish distinctive digital identities that outperform market peers or competitors.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

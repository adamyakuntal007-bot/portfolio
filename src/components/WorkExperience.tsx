import { useState } from "react";
import { WORK_HISTORY } from "../data";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface WorkExperienceProps {
  onResumeClick: () => void;
}

export default function WorkExperience({ onResumeClick }: WorkExperienceProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-20 bg-white border-t border-neutral-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Section Indicator Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-violet-600 font-bold">
              History
            </span>
            <h3 className="font-display text-2xl font-bold text-neutral-900 leading-tight">
              Selected <br /> Experience
            </h3>
            <p className="font-sans text-xs text-neutral-400">
              Interactive timeline. Hover elements to view system snapshots.
            </p>
          </div>

          {/* Core Timeline List Column */}
          <div className="lg:col-span-9 space-y-2">
            
            <div className="divide-y divide-neutral-100">
              {WORK_HISTORY.map((job) => (
                <div
                  key={job.id}
                  className="group relative grid grid-cols-1 gap-4 py-8 sm:grid-cols-12 items-center transition-all duration-300"
                  onMouseEnter={() => setHoveredId(job.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  
                  {/* Job Number Index */}
                  <div className="sm:col-span-1 font-mono text-xs text-violet-600 font-bold group-hover:translate-x-1 transition-transform">
                    {job.number}
                  </div>

                  {/* Role Title and Company */}
                  <div className="sm:col-span-6 space-y-1">
                    <h4 className="font-display text-lg font-bold text-neutral-900 group-hover:text-violet-600 transition-colors">
                      {job.role}
                    </h4>
                    <div className="flex items-center gap-1.5 font-sans text-xs text-neutral-400">
                      <span>{job.company}</span>
                      <span>•</span>
                      <a
                        href={job.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-violet-600 hover:text-violet-800 transition-colors"
                      >
                        Visit Website
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>

                  {/* Subtitle details */}
                  <div className="sm:col-span-3 font-mono text-xs text-neutral-500 sm:text-right">
                    {job.period}
                  </div>

                  {/* Link action arrow */}
                  <div className="sm:col-span-2 flex justify-end">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all group-hover:bg-violet-600 group-hover:border-violet-600 group-hover:text-white">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Floating Layout Snapshot Preview on Deskop Hover */}
                  {hoveredId === job.id && job.previewImage && (
                    <div className="pointer-events-none absolute left-[45%] top-1/2 z-50 hidden -translate-y-1/2 md:block">
                      <div className="overflow-hidden rounded-2xl border border-neutral-200/50 bg-white p-2 shadow-xl w-64 animate-in fade-in zoom-in-95 duration-200">
                        <img
                          src={job.previewImage}
                          alt={`${job.company} Preview`}
                          referrerPolicy="no-referrer"
                          className="rounded-xl w-full aspect-[4/3] object-cover"
                        />
                        <div className="mt-2 px-2 pb-1 text-left">
                          <p className="font-mono text-[9px] text-neutral-400">
                            {job.company} project case snapshot
                          </p>
                          <p className="font-sans text-[11px] font-semibold text-neutral-700 truncate">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>

            {/* Resume button link matching "About / resume ->" */}
            <div className="pt-8 flex">
              <button
                onClick={onResumeClick}
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 font-display text-xs font-bold text-neutral-800 transition-all hover:bg-neutral-900 hover:text-white"
              >
                <span>About / Resume</span>
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ArrowRight, Eye } from "lucide-react";

interface SelectedWorkProps {
  onProjectClick: (project: Project) => void;
}

export default function SelectedWork({ onProjectClick }: SelectedWorkProps) {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", "Web Design", "Mobile Design", "Branding"];

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Web Design") return project.category.includes("Web Design");
    if (filter === "Mobile Design") return project.category.includes("Mobile Design");
    if (filter === "Branding") return project.category.includes("Branding") || project.category.includes("Branding Strategy");
    return true;
  });

  return (
    <section id="work" className="relative py-20 bg-neutral-50/50">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header container */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-neutral-200 pb-8 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-violet-600 font-bold">
              Portfolio
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-900 mt-2 sm:text-5xl">
              Selected <br />
              Work 20 - 24
            </h2>
          </div>

          {/* Custom Filters for playfulness */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition-all ${
                  filter === cat
                    ? "bg-violet-600 text-white"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="group cursor-pointer flex flex-col justify-between bg-white rounded-3xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-50 border-b border-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                
                {/* Hover overlay stamp */}
                <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 font-display text-xs font-bold text-neutral-900 shadow-md">
                    <Eye size={12} className="text-violet-600" />
                    <span>Examine Case Study</span>
                  </div>
                </div>

                {/* Corner tags */}
                <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] text-white backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Content box */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-violet-600 uppercase tracking-widest font-semibold">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-violet-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Bottom line detail */}
                <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-xs font-semibold text-neutral-700">
                  <div className="flex gap-1">
                    {project.services.slice(0, 2).map((s) => (
                      <span key={s} className="text-[10px] text-neutral-400">
                        #{s.split(" ")[0]}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-violet-600 group-hover:translate-x-1.5 transition-transform">
                    <span>Explore</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

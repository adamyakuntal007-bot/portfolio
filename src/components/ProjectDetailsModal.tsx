import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Calendar, User, Eye, Layers, Compass } from "lucide-react";
import { Project } from "../types";

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-neutral-100 bg-white shadow-2xl"
          >
            {/* Grid overlay */}
            <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40 z-0" />

            {/* Glowing spot */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blob-orange/20 z-0" />
            <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full blob-cyan/20 z-0" />

            {/* Body wrapper */}
            <div className="relative z-10 p-6 md:p-10">
              {/* Close Button & Title Bar */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-violet-600 bg-violet-50 px-2 py-0.5 rounded">
                    Case Study Showcase
                  </span>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mt-1">
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Large Image Showcase */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-neutral-100 shadow-md bg-neutral-50">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                {/* Visual Label */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] text-white backdrop-blur-sm">
                    High Fidelity Preview
                  </span>
                </div>
              </div>

              {/* Stats & Meta Rows */}
              <div className="grid grid-cols-2 gap-4 border-b border-t border-neutral-100 py-6 my-6 sm:grid-cols-4 font-sans text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <User size={12} />
                    <span>Client Domain</span>
                  </div>
                  <p className="font-semibold text-neutral-800">{project.client}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Calendar size={12} />
                    <span>Project Year</span>
                  </div>
                  <p className="font-semibold text-neutral-800">{project.year}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Layers size={12} />
                    <span>Design Role</span>
                  </div>
                  <p className="font-semibold text-neutral-800">Lead Visual Architect</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Compass size={12} />
                    <span>Output Framework</span>
                  </div>
                  <p className="font-semibold text-neutral-800">Custom Dev / Webflow</p>
                </div>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Main details */}
                <div className="md:col-span-2 space-y-4">
                  <h4 className="font-display text-base font-bold text-neutral-900 flex items-center gap-1.5">
                    <Compass size={16} className="text-violet-600" />
                    Project Vision & Execution Strategy
                  </h4>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                    By crafting strict component tokens and responsive visual structures inside Figma, we were able to transition seamlessly into production handoff. The solution handles extensive responsive breakpoints, delivers stunning typographic rhythm, and leverages optimized SVG vectors to ensure zero load lag.
                  </p>

                  <div className="rounded-2xl bg-neutral-50 p-4 border border-neutral-100 mt-4">
                    <h5 className="font-display text-xs font-bold text-neutral-800">
                      Key Highlights & Core Achievements:
                    </h5>
                    <ul className="mt-2 space-y-1.5 font-sans text-xs text-neutral-500 list-disc list-inside">
                      <li>Designed 42+ reusable customized responsive blocks.</li>
                      <li>Halved load time values in client-render assets.</li>
                      <li>Achieved 98% positive score in public accessibility metrics.</li>
                    </ul>
                  </div>
                </div>

                {/* Scope details */}
                <div className="space-y-6">
                  {/* Delivered list */}
                  <div className="space-y-3">
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-2">
                      Delivered Services
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full bg-violet-50 px-3 py-1 font-sans text-[11px] font-semibold text-violet-700 border border-violet-100/50"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="space-y-3">
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-2">
                      Tools & Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Figma", "Webflow Engine", "TailwindCSS", "CSS Motion", "Lottie Animations", "A11y Standards"].map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-neutral-100 px-2.5 py-1 font-sans text-[11px] text-neutral-800 border border-neutral-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-3 font-display text-xs font-bold text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-200"
                    >
                      <Eye size={13} />
                      <span>Simulate Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

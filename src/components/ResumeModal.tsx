import { motion, AnimatePresence } from "motion/react";
import { X, Download, Briefcase, GraduationCap, Award, ShieldAlert, Cpu } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl md:p-10 print:m-0 print:p-0 print:shadow-none print:border-none"
          >
            {/* Grid background */}
            <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40 print:hidden" />

            {/* Float logo background decoration */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blob-cyan/40 print:hidden" />
            <div className="pointer-events-none absolute -bottom-24 -left-2a h-64 w-64 rounded-full blob-purple/20 print:hidden" />

            <div className="relative z-10 space-y-8">
              {/* Top Controls */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 print:hidden">
                <div className="flex items-center gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-violet-600 bg-violet-50 px-2 py-0.5 rounded">
                    Verified CV
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400">
                    Updated May 2026
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5 font-display text-xs font-semibold text-neutral-800 transition-all hover:bg-neutral-50"
                  >
                    <Download size={13} />
                    <span>Print / PDF</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Core Resume Paper */}
              <div className="space-y-8 print:p-6">
                {/* Visual Header */}
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end border-b border-neutral-100 pb-6">
                  <div>
                    <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-900 uppercase">
                      SD. Designer
                    </h2>
                    <p className="mt-1 font-sans text-lg font-medium text-violet-600">
                      Lead Digital & Visual Designer
                    </p>
                    <p className="mt-3 max-w-lg font-sans text-sm text-neutral-500 leading-relaxed">
                      Passionate about sculpting clean, award-winning visual identities, design systems, and Webflow ecosystems. Bridging structural engineering thinking with uncompromised artistic aesthetics.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-neutral-600 sm:flex-col sm:items-end sm:gap-2">
                    <span>✉ sd.designer@keffi.id</span>
                    <span>🌐 sd-design.github.io</span>
                    <span>📍 Remote / Southeast Asia</span>
                  </div>
                </div>

                {/* Sub Body Layout Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {/* Left Column (Main details of history) */}
                  <div className="md:col-span-2 space-y-8">
                    {/* Experience section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-neutral-900 border-b border-neutral-100 pb-2">
                        <Briefcase size={16} className="text-violet-600" />
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider">
                          Professional Work History
                        </h3>
                      </div>

                      <div className="space-y-6">
                        {/* Job 1 */}
                        <div className="group relative pl-4 border-l border-neutral-100 hover:border-violet-600 transition-colors">
                          <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-violet-600 group-hover:scale-125 transition-transform" />
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                            <span>Tabana.id</span>
                            <span>2020 - 2024</span>
                          </div>
                          <h4 className="mt-1 font-display text-base font-bold text-neutral-900">
                            Lead UI Designer
                          </h4>
                          <p className="mt-2 font-sans text-sm text-neutral-500 leading-relaxed">
                            Supervised a multidisciplinary team of 6 designers creating next-generation products. Authored the unified Tabana design system, boosting client-approval rate by 42%. Handled client scoping, design signoff, and Webflow engineering.
                          </p>
                        </div>

                        {/* Job 2 */}
                        <div className="group relative pl-4 border-l border-neutral-100 hover:border-violet-600 transition-colors">
                          <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-neutral-400 group-hover:bg-violet-600 group-hover:scale-125 transition-transform" />
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                            <span>InfoTechno Global</span>
                            <span>2017 - 2020</span>
                          </div>
                          <h4 className="mt-1 font-display text-base font-bold text-neutral-900">
                            Senior UI/UX Designer
                          </h4>
                          <p className="mt-2 font-sans text-sm text-neutral-500 leading-relaxed">
                            Executed high-fidelity visual mockups, wireframes, and creative prototypes for enterprise banking platforms. Handled user-research sprints, mapping user personas into seamless customer journeys and front-end architectures.
                          </p>
                        </div>

                        {/* Job 3 */}
                        <div className="group relative pl-4 border-l border-neutral-100 hover:border-violet-600 transition-colors">
                          <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-neutral-400 group-hover:bg-violet-600 group-hover:scale-125 transition-transform" />
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                            <span>Keffi.id</span>
                            <span>2016 - 2017</span>
                          </div>
                          <h4 className="mt-1 font-display text-base font-bold text-neutral-900">
                            Junior Visual Designer
                          </h4>
                          <p className="mt-2 font-sans text-sm text-neutral-500 leading-relaxed">
                            Assisted senior visual designers in assets preparation, custom style edits, and branding guidelines enforcement. Spearheaded daily mobile wireframe tasks and crafted high-fidelity vector illustrations.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-neutral-900 border-b border-neutral-100 pb-2">
                        <GraduationCap size={16} className="text-violet-600" />
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider">
                          Education Credentials
                        </h3>
                      </div>

                      <div className="space-y-2 pl-4 border-l border-neutral-100">
                        <div className="flex justify-between text-xs font-mono text-neutral-400">
                          <span>Auckland University of Technology</span>
                          <span>2012 - 2015</span>
                        </div>
                        <h4 className="font-display text-sm font-bold text-neutral-900">
                          Bachelor of Design (HCI & Communications)
                        </h4>
                        <p className="text-xs font-sans text-neutral-500">
                          Specialized in Human Computer Interface Dynamics, Digital Arts, and Interactive Media Layouts.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Skills & Meta) */}
                  <div className="space-y-8">
                    {/* Skills Checklist */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-neutral-900 border-b border-neutral-100 pb-2">
                        <Cpu size={16} className="text-violet-600" />
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider">
                          Core Skills
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Figma Expert", "Webflow Develop", "Visual Architecture", "Design Systems", "W3C Compliance", "Micro-Interactions", "Wireframing", "Tailwind CSS", "Front-end JS", "Grid Systems", "Typography Drafting", "Customer Journeys"].map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-neutral-100 px-3 py-1 font-sans text-[11px] font-semibold text-neutral-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tools checklist */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-neutral-900 border-b border-neutral-100 pb-2">
                        <Award size={16} className="text-violet-600" />
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider">
                          Tool Stack
                        </h3>
                      </div>
                      <ul className="space-y-2 font-sans text-xs text-neutral-600">
                        <li className="flex justify-between">
                          <span>Figma Enterprise</span>
                          <span className="font-semibold text-neutral-800">Advanced / Expert</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Webflow CMS & Logic</span>
                          <span className="font-semibold text-neutral-800">Advanced / Creator</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Adobe Creative Suite</span>
                          <span className="font-semibold text-neutral-800">Illustrator / Photoshop</span>
                        </li>
                        <li className="flex justify-between">
                          <span>React / TypeScript / Vite</span>
                          <span className="font-semibold text-neutral-800">Intermediate Code</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Git / GitHub Pages</span>
                          <span className="font-semibold text-neutral-800">Fully Certified</span>
                        </li>
                      </ul>
                    </div>

                    {/* Achievements/Awards */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-neutral-900 border-b border-neutral-100 pb-2">
                        <ShieldAlert size={16} className="text-violet-600" />
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider">
                          Awards / Audits
                        </h3>
                      </div>
                      <ul className="space-y-3 font-sans text-xs text-neutral-500">
                        <li className="border-l-2 border-amber-400 pl-2">
                          <p className="font-semibold text-neutral-800">CSS Design Awards (x3)</p>
                          <p className="text-[10px]">Best UI/UX & Innovation - UrbanNest Showcase (2024)</p>
                        </li>
                        <li className="border-l-2 border-violet-400 pl-2">
                          <p className="font-semibold text-neutral-800">Awwwards Honorable Mention</p>
                          <p className="text-[10px]">Tabana.id Interactive Design Re-branding (2022)</p>
                        </li>
                        <li className="border-l-2 border-emerald-400 pl-2">
                          <p className="font-semibold text-neutral-800">Trustpilot Verified Designer</p>
                          <p className="text-[10px]">Over 150,000+ satisfied clients and layout viewers (4.8 score)</p>
                        </li>
                      </ul>
                    </div>
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

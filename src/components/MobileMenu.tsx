import { motion, AnimatePresence } from "motion/react";
import { X, Phone, FileText, ChevronRight, Briefcase } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onWorkClick: () => void;
  onResumeClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onWorkClick,
  onResumeClick,
  onAboutClick,
  onContactClick,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-md"
          />

          {/* Core Panel */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full bg-white p-6 shadow-2xl rounded-b-[2.5rem] border-b border-neutral-100"
          >
            {/* Grid overlay */}
            <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />

            {/* Glowing spot decoration */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blob-orange/30" />

            <div className="relative z-10 space-y-8">
              {/* Header inside drawer */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <span className="font-display text-lg font-bold tracking-tight text-neutral-900">
                  SD. Menu
                </span>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-100 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Stack of Navigation items */}
              <nav className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    onWorkClick();
                    onClose();
                  }}
                  className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4 text-left hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-3 font-display font-bold text-neutral-900">
                    <Briefcase size={16} className="text-violet-600" />
                    <span>Portfolio Projects</span>
                  </div>
                  <ChevronRight size={14} className="text-neutral-400" />
                </button>

                <button
                  onClick={() => {
                    onResumeClick();
                    onClose();
                  }}
                  className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4 text-left hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-3 font-display font-bold text-neutral-900">
                    <FileText size={16} className="text-emerald-600" />
                    <span>Aesthetic Resume CV</span>
                  </div>
                  <ChevronRight size={14} className="text-neutral-400" />
                </button>

                <button
                  onClick={() => {
                    onAboutClick();
                    onClose();
                  }}
                  className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4 text-left hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-3 font-display font-bold text-neutral-900">
                    <ChevronRight size={16} className="text-orange-500" />
                    <span>About Designer Info</span>
                  </div>
                  <ChevronRight size={14} className="text-neutral-400" />
                </button>
              </nav>

              {/* Primary call action block */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    onContactClick();
                    onClose();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-4 font-display text-sm font-bold text-white shadow-lg shadow-violet-200"
                >
                  <Phone size={14} className="fill-white" />
                  <span>Connect With SD</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

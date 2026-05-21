import { Phone, Menu } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
  onResumeClick: () => void;
  onWorkClick: () => void;
  onMobileMenuClick: () => void;
}

export default function Header({
  onContactClick,
  onResumeClick,
  onWorkClick,
  onMobileMenuClick,
}: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 bg-white/70 backdrop-blur-md ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        
        {/* Brand Logo with Custom Geometric Squares icon */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="relative grid grid-cols-2 gap-1 h-8 w-8">
            <div className="h-3 w-3 rounded-full bg-violet-500 animate-pulse" />
            <div className="h-3 w-3 rounded-tr-lg rounded-bl-lg bg-orange-400 rotate-45" />
            <div className="h-3 w-3 rounded-tl-lg rounded-br-lg bg-emerald-400 -rotate-12" />
            <div className="h-3 w-3 rounded-full bg-pink-500" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-neutral-900">
            SD.
          </span>
        </a>

        {/* Center Nav Items (Work, Resume) */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={onWorkClick}
            className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-500 transition-colors hover:text-neutral-950"
          >
            Work
          </button>
          <button
            onClick={onResumeClick}
            className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-500 transition-colors hover:text-neutral-950"
          >
            Resume
          </button>
        </nav>

        {/* Right CTA Controls */}
        <div className="flex items-center gap-3">
          {/* Contact Button */}
          <button
            onClick={onContactClick}
            className="flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 font-display text-xs font-bold text-white transition-all hover:bg-violet-700 hover:scale-[1.02] shadow-md shadow-violet-200"
          >
            <Phone size={13} className="fill-white" />
            <span>Contact Us</span>
          </button>

          {/* Menu Button */}
          <button
            onClick={onMobileMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-all hover:bg-neutral-50"
            aria-label="Open menu drawer"
          >
            <Menu size={16} />
          </button>
        </div>

      </div>
    </header>
  );
}

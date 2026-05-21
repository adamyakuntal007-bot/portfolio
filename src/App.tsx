import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import SelectedWork from "./components/SelectedWork";
import Testimonials from "./components/Testimonials";
import ContactModal from "./components/ContactModal";
import ResumeModal from "./components/ResumeModal";
import ProjectDetailsModal from "./components/ProjectDetailsModal";
import MobileMenu from "./components/MobileMenu";
import { Project } from "./types";
import { ArrowUp, Mail, ExternalLink, ShieldCheck, Heart } from "lucide-react";

export default function App() {
  // Modal states
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  // UTC clock state for the footer
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsProjectOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 antialiased selection:bg-violet-100 selection:text-violet-900">
      
      {/* Dynamic Header navbar */}
      <Header
        onContactClick={() => setIsContactOpen(true)}
        onResumeClick={() => setIsResumeOpen(true)}
        onWorkClick={() => handleScrollTo("work")}
        onMobileMenuClick={() => setIsMobileMenuOpen(true)}
      />

      {/* Main Container Layout */}
      <main className="relative">
        
        {/* Hero Landing Section */}
        <div id="hero">
          <Hero
            onContactClick={() => setIsContactOpen(true)}
            onResumeClick={() => setIsResumeOpen(true)}
          />
        </div>

        {/* About Me Section */}
        <AboutMe onContactClick={() => setIsContactOpen(true)} />

        {/* Selected Work Portfolio Grid */}
        <SelectedWork onProjectClick={handleProjectClick} />

        {/* Work Timeline Experience info */}
        <WorkExperience onResumeClick={() => setIsResumeOpen(true)} />

        {/* Testimonials Review Section */}
        <Testimonials />

      </main>

      {/* Pristine Modern Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-16 px-6 border-t border-neutral-900 relative overflow-hidden">
        {/* Dark grid overlay */}
        <div className="dark-grid-overlay pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 border-b border-neutral-950 pb-12">
            
            {/* Branding Details */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative grid grid-cols-2 gap-0.5 h-6 w-6">
                  <div className="h-2 w-2 rounded-full bg-violet-500" />
                  <div className="h-2 w-2 rounded-tr bg-orange-400" />
                  <div className="h-2 w-2 rounded-bl bg-emerald-400" />
                  <div className="h-2 w-2 rounded-full bg-pink-500" />
                </div>
                <span className="font-display text-lg font-bold text-white tracking-widest uppercase">
                  SD. Designs
                </span>
              </div>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed max-w-sm">
                A pristine, award-winning portfolio system designed and engineered to showcase modern visual interactive architecture, standard components, and custom-styled grids.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-3 font-sans text-xs">
              <h4 className="font-display text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                Quick Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleScrollTo("hero")}
                    className="hover:text-white transition-colors"
                  >
                    Hero Area
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollTo("about")}
                    className="hover:text-white transition-colors"
                  >
                    About Core
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollTo("work")}
                    className="hover:text-white transition-colors"
                  >
                    Selected Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsResumeOpen(true)}
                    className="hover:text-white transition-colors"
                  >
                    Aesthetic Resume CV
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect block Column */}
            <div className="md:col-span-4 space-y-4 font-sans text-xs">
              <h4 className="font-display text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                Connect Directly
              </h4>
              <p className="text-neutral-500 max-w-xs leading-relaxed">
                Looking to elevate your layout? Reach out today to schedule a technical scoping call.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:sd.designer@keffi.id"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors font-mono"
                >
                  <Mail size={13} className="text-violet-500" />
                  <span>sd.designer@keffi.id</span>
                </a>
              </div>
            </div>

          </div>

          {/* Copyright and Metadata line */}
          <div className="flex flex-col gap-6 pt-12 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between font-mono">
            <div className="flex flex-wrap items-center gap-1.5">
              <span>&copy; {new Date().getFullYear()} SD. Portfolio Systems.</span>
              <span className="text-neutral-800">|</span>
              <div className="flex items-center gap-1 text-neutral-700">
                <ShieldCheck size={12} className="text-emerald-600" />
                <span>W3C Compliant</span>
              </div>
            </div>

            {/* Time Indicator Widget */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-neutral-900 px-3.5 py-1.5 rounded-full border border-neutral-900">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-bold text-neutral-400">
                  {currentTime || "fetching utc clock..."}
                </span>
              </div>

              {/* Back to top bullet */}
              <button
                onClick={handleScrollToTop}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-neutral-8 hover:bg-neutral-800 hover:text-white transition-all text-neutral-400"
                aria-label="Scroll back to top"
              >
                <ArrowUp size={13} />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Interactive Drawer / Dialog Elements */}

      {/* Contact Us Modal Overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Resume Modal Sheets */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Project Case Details Popup */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isProjectOpen}
        onClose={() => {
          setIsProjectOpen(false);
          setSelectedProject(null);
        }}
      />

      {/* Hover Hamburger Menu overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onWorkClick={() => handleScrollTo("work")}
        onResumeClick={() => setIsResumeOpen(true)}
        onAboutClick={() => handleScrollTo("about")}
        onContactClick={() => setIsContactOpen(true)}
      />

    </div>
  );
}

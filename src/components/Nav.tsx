import { useEffect, useState } from "react";
import { Download, Mail, Menu, X, Sparkles } from "lucide-react";
import { nav, profile } from "../data/site";
import { MagneticButton } from "./MagneticButton";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#07090e]/85 py-3 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white transition-all"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="flex items-center">
            <span className="text-white group-hover:text-cyan-400 transition-colors">Chiranj</span>
            <span className="text-cyan-400 font-mono">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-md lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-400 transition-all hover:bg-white/[0.06] hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.resumeUrl}
            download="Chiranj_Kakadiya_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-md transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
          >
            <Download size={14} className="transition-transform group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </a>

          <a href="#contact">
            <MagneticButton className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <Mail size={14} />
              <span>Hire Me</span>
            </MagneticButton>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-2 text-slate-200 transition-colors hover:border-cyan-500/40 hover:text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-white/[0.08] bg-[#07090e]/95 px-6 py-6 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2.5 border-t border-white/[0.08] pt-4">
              <a
                href={profile.resumeUrl}
                download="Chiranj_Kakadiya_Resume.pdf"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] py-2.5 text-xs font-medium text-slate-200"
              >
                <Download size={15} /> Download Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 py-2.5 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/20"
              >
                <Mail size={15} /> Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

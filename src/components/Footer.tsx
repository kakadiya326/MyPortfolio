import { ArrowUp, Download, Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { profile, social } from "../data/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05070a] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr]">
          {/* Brand Info */}
          <div>
            <a href="#hero" className="inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 text-xs font-bold text-white">
                {profile.initials}
              </span>
              <span>
                Chiranj<span className="text-cyan-400 font-mono">.dev</span>
              </span>
            </a>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              Full-Stack & Backend Engineer specializing in high-performance REST APIs, MERN stack, FastAPI, and clean system design. Open for opportunities across India and remote.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={profile.resumeUrl}
                download="Chiranj_Kakadiya_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-200 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
              >
                <Download size={14} /> Resume PDF
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-200 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
              >
                <Mail size={14} /> Send Email
              </a>
            </div>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex flex-col justify-between md:items-end">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Connect Online:</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/kakadiya326"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chiranj-kakadiya-b50817319"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Mail size={16} />
                </a>
                <button
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>

            <div className="mt-8 text-xs text-slate-500 md:text-right">
              <p>Amreli, Gujarat &bull; Sensedge Technologies, Pune</p>
              <p className="mt-1">Built with React 19, TypeScript, TailwindCSS & Vite</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart size={13} className="text-rose-500 fill-rose-500" /> for performance and security.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Check,
  CheckCircle2,
  Code,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";
import { FloatingShapes } from "../components/FloatingShapes";
import { Reveal, RevealGroup, revealItem } from "../components/Reveal";
import {
  profile,
  stats,
  experience,
  projects,
  certifications,
  training,
  education,
  skills,
  social,
} from "../data/site";

const codeSnippets: Record<string, { filename: string; language: string; code: string[] }> = {
  express: {
    filename: "server.js",
    language: "JavaScript (Node.js & Express)",
    code: [
      'const express = require("express");',
      'const mongoose = require("mongoose");',
      'const { authenticateJWT } = require("./middleware/auth");',
      "",
      "const app = express();",
      "app.use(express.json());",
      "",
      "// Connect MongoDB with connection pooling",
      "mongoose.connect(process.env.MONGO_URI, {",
      "  maxPoolSize: 10,",
      "  serverSelectionTimeoutMS: 5000,",
      '}).then(() => console.log("Database connected 🚀"));',
      "",
      '// 10+ RESTful APIs with RBAC',
      'app.use("/api/courses", authenticateJWT, courseRoutes);',
      'app.use("/api/auth", authRoutes);',
      "",
      "app.listen(5000, () => console.log('Server running on 5000'));",
    ],
  },
  fastapi: {
    filename: "main.py",
    language: "Python (FastAPI & Gemini AI)",
    code: [
      "from fastapi import FastAPI, Depends, Security",
      "from slowapi import Limiter, _rate_limit_exceeded_handler",
      "import google.generativeai as genai",
      "",
      "app = FastAPI(title='Trade Opportunity Analysis API')",
      "limiter = Limiter(key_func=get_remote_address)",
      "genai.configure(api_key=os.environ['GEMINI_API_KEY'])",
      "",
      "@app.post('/api/analyze', dependencies=[Security(verify_api_key)])",
      "@limiter.limit('20/minute')",
      "async def analyze_opportunity(data: OpportunitySchema):",
      "    model = genai.GenerativeModel('gemini-1.5-flash')",
      "    insights = await model.generate_content_async(data.prompt)",
      "    return {'status': 'success', 'analysis': insights.text}",
    ],
  },
  java: {
    filename: "SystemDesign.java",
    language: "Java (Clean Architecture & SOLID)",
    code: [
      "public interface CourseRepository {",
      "    Optional<Course> findById(String id);",
      "    Course save(Course course);",
      "}",
      "",
      "// Dependency Inversion & Single Responsibility",
      "public class CourseService {",
      "    private final CourseRepository repository;",
      "",
      "    public CourseService(CourseRepository repo) {",
      "        this.repository = repo;",
      "    }",
      "",
      "    public CourseResult enroll(String studentId, String courseId) {",
      "        Course course = repository.findById(courseId)",
      "            .orElseThrow(() -> new NotFoundException());",
      "        return course.processEnrollment(studentId);",
      "    }",
      "}",
    ],
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("express");
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>("all");
  const [activeSkillGroup, setActiveSkillGroup] = useState<string>(skills[0].group);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const filteredProjects =
    activeProjectFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeProjectFilter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyCode = () => {
    const text = codeSnippets[activeTab].code.join("\n");
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.open(mailtoUrl, "_blank");
    setContactSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Cyber Mesh & Aurora */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" aria-hidden="true" />
      <div className="fixed inset-0 bg-radial-spotlight pointer-events-none z-0" aria-hidden="true" />

      {/* Hero Section */}
      <section id="hero" className="relative z-10 overflow-hidden px-6 pt-32 pb-20 lg:px-10 lg:pt-40">
        <FloatingShapes />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          >
            {/* Status Badge */}
            <motion.div variants={revealItem} className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-xs font-semibold text-cyan-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Relocation</span>
              <span className="text-cyan-600">&bull;</span>
              <span className="text-slate-300">Pune / Gujarat / Remote</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={revealItem}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-white"
            >
              Architecting <span className="gradient-text-accent">Scalable Backend</span> Systems & Full-Stack Apps.
            </motion.h1>

            {/* Description */}
            <motion.p variants={revealItem} className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Hi, I'm <strong className="font-semibold text-white">Kakadiya Chiranj</strong>. A Software Engineer building high-throughput REST APIs, MERN stack web applications, FastAPI services, and clean, resilient architectures.
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={revealItem} className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a href="#projects">
                <MagneticButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                  <span>Explore Projects</span>
                  <ArrowRight size={15} />
                </MagneticButton>
              </a>

              <a
                href={profile.resumeUrl}
                download="Chiranj_Kakadiya_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-slate-200 backdrop-blur-md transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <Download size={15} className="text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-3.5 text-xs font-medium text-slate-400 transition-colors hover:text-cyan-400"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Quick Proof Pills */}
            <motion.div variants={revealItem} className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/[0.08] pt-6 text-xs text-slate-400">
              <span className="font-medium text-slate-300">Quick Connect:</span>
              <a
                href="https://github.com/kakadiya326"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-slate-300 transition-colors hover:text-cyan-400"
              >
                <Github size={14} /> GitHub
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href="https://www.linkedin.com/in/chiranj-kakadiya-b50817319"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-slate-300 transition-colors hover:text-cyan-400"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <span className="text-slate-600">&bull;</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Interactive Code Playground / Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0b0f19]/90 shadow-2xl backdrop-blur-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">chiranj-workspace</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 transition-colors hover:text-cyan-400"
                >
                  {copiedCode ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedCode ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Code File Tabs */}
              <div className="flex border-b border-white/[0.08] bg-white/[0.01] px-2">
                {[
                  { id: "express", name: "server.js", tag: "MERN" },
                  { id: "fastapi", name: "main.py", tag: "FastAPI + AI" },
                  { id: "java", name: "CourseService.java", tag: "SOLID" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex items-center gap-1.5 border-b-2 px-3.5 py-2 font-mono text-xs transition-all ${
                      activeTab === t.id
                        ? "border-cyan-400 bg-white/[0.04] text-cyan-300 font-medium"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>{t.name}</span>
                  </button>
                ))}
              </div>

              {/* Code View Body */}
              <div className="p-4 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto min-h-[290px] bg-[#070a11]">
                {codeSnippets[activeTab].code.map((line, idx) => (
                  <div key={idx} className="table-row">
                    <span className="table-cell pr-4 select-none text-slate-600 text-right w-8">{idx + 1}</span>
                    <span className="table-cell whitespace-pre">
                      {line.startsWith("//") ? (
                        <span className="text-slate-500 italic">{line}</span>
                      ) : line.includes("import ") || line.includes("const ") || line.includes("from ") || line.includes("public ") ? (
                        <span>
                          <span className="text-cyan-400">{line.split(" ")[0]}</span>{" "}
                          <span className="text-slate-200">{line.slice(line.indexOf(" ") + 1)}</span>
                        </span>
                      ) : (
                        line
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Terminal Footer Info */}
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Production Ready</span>
                </span>
                <span className="text-slate-500">{codeSnippets[activeTab].language}</span>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/[0.1] bg-[#0d1322]/95 p-3.5 shadow-xl backdrop-blur-md sm:-left-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Briefcase size={18} />
                </span>
                <div>
                  <p className="text-xs font-bold text-white">Software Engineer</p>
                  <p className="text-[11px] text-cyan-400">Sensedge Technologies, Pune</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-10 border-y border-white/[0.08] bg-[#0a0e17]/80 px-6 py-12 lg:px-10 backdrop-blur-md">
        <RevealGroup className="mx-auto grid max-w-7xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6" stagger={0.08}>
          {stats.map((s) => (
            <motion.div
              variants={revealItem}
              key={s.label}
              className="glass-panel-interactive rounded-2xl p-4 text-left"
            >
              <p className="font-display text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 sm:text-4xl">
                {s.number}
              </p>
              <p className="mt-1 text-xs font-medium leading-snug text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 scroll-mt-20 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr]">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Sparkles size={14} />
                <span>About Me</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Engineering Depth &amp; Architectural Focus.
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                I am a Full-Stack &amp; Backend Developer with practical experience delivering end-to-end web applications. My development philosophy is rooted in clean code, modular architecture, and verifiable system security.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={profile.resumeUrl}
                  download="Chiranj_Kakadiya_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/[0.05] border border-white/[0.1] px-4 py-2.5 text-xs font-medium text-slate-200 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  <Download size={14} /> Download Resume
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.1] px-4 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  <Copy size={13} /> {copiedEmail ? "Copied" : "Copy Email"}
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                {/* Vector India Training Card */}
                <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-cyan-400">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      <GraduationCap size={16} /> Specialized Full-Stack Training
                    </span>
                    <span className="rounded-md bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 font-mono text-[11px] text-cyan-300">
                      {training.period}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{training.title}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-400">{training.org}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">{training.text}</p>
                </div>

                {/* Core Philosophy Grid */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="glass-panel rounded-xl p-4">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                      <Server size={15} />
                      <span>REST &amp; API Design</span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                      Structured schemas, custom middleware, JWT authentication, and high-throughput query optimization.
                    </p>
                  </div>

                  <div className="glass-panel rounded-xl p-4">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                      <Layers size={15} />
                      <span>Clean Architecture</span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                      Applying SOLID principles, object-oriented design, and modular decoupling for long-term maintainability.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section id="skills" className="relative z-10 scroll-mt-20 border-t border-white/[0.08] bg-[#0a0e17]/70 px-6 py-24 lg:px-10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Cpu size={14} />
              <span>Technical Skills</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Technology Stack &amp; Toolkit.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-400">
              Comprehensive competencies spanning backend systems, reactive user interfaces, machine learning pipelines, and cloud deployment.
            </p>
          </Reveal>

          {/* Group Navigation Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-white/[0.08] pb-4">
            {skills.map((s) => (
              <button
                key={s.group}
                onClick={() => setActiveSkillGroup(s.group)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeSkillGroup === s.group
                    ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-950 shadow-md shadow-cyan-500/20"
                    : "border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/[0.15] hover:text-white"
                }`}
              >
                {s.group}
              </button>
            ))}
          </div>

          {/* Active Skills Display Grid */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {skills
                .filter((s) => s.group === activeSkillGroup)
                .map((group) => (
                  <motion.div
                    key={group.group}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                  >
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="glass-panel-interactive flex items-center gap-2.5 rounded-xl p-3.5"
                      >
                        <CheckCircle2 size={15} className="shrink-0 text-cyan-400" />
                        <span className="text-xs font-medium text-slate-200">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="relative z-10 scroll-mt-20 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Briefcase size={14} />
              <span>Career Timeline</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Professional Work Experience.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 space-y-8" stagger={0.1}>
            {experience.map((e) => (
              <motion.div
                variants={revealItem}
                key={e.role}
                className="glass-panel-interactive rounded-2xl p-7 lg:p-9"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center border-b border-white/[0.08] pb-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{e.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-cyan-400">{e.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 font-mono text-xs text-cyan-300">
                      {e.period}
                    </span>
                    <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] uppercase text-slate-400">
                      {e.type}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-300">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section id="projects" className="relative z-10 scroll-mt-20 border-t border-white/[0.08] bg-[#090d16]/90 px-6 py-24 text-slate-100 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Rocket size={14} />
                <span>Selected Portfolio Work</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Featured Applications.
              </h2>
            </Reveal>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All Projects", id: "all" },
                { label: "MERN Stack", id: "mern" },
                { label: "AI & ML", id: "ai-ml" },
                { label: "Architecture & Utilities", id: "utility" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveProjectFilter(f.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    activeProjectFilter === f.id
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-950 shadow-md shadow-cyan-500/20"
                      : "border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-cyan-500/30 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="glass-panel-interactive group flex flex-col justify-between rounded-2xl p-6"
                >
                  <div>
                    {/* SVG Graphic Banner */}
                    <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#070a12] p-4">
                      <img
                        src={p.image}
                        alt={`${p.title} architectural diagram`}
                        className="aspect-[16/9] w-full object-contain transition-transform duration-500 group-hover:scale-102"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 rounded-full border border-cyan-500/30 bg-cyan-950/70 px-2.5 py-0.5 font-mono text-[10px] uppercase text-cyan-300 backdrop-blur-md">
                        {p.category}
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase text-slate-500">{p.date}</span>
                      <span className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Production Deployed</span>
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-cyan-300">{p.subtitle}</p>

                    <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-300">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5">
                          <span className="text-cyan-400 font-bold">&bull;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-white/[0.08] pt-4">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white"
                      >
                        <span>{l.label}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Verified Certifications Section */}
      <section id="certifications" className="relative z-10 scroll-mt-20 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Award size={14} />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              HackerRank Certifications.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-400">
              Independently tested and verified technical proficiency in databases, algorithms, and scripting languages.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {certifications.map((c) => (
              <motion.div
                variants={revealItem}
                key={c.id}
                className="glass-panel-interactive flex flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-white/[0.1] text-amber-400">
                      <Award size={22} />
                    </span>
                    <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-slate-400">
                      {c.category}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-xs text-slate-400">{c.issuer} Certified</p>
                  <p className="mt-2 font-mono text-[11px] text-cyan-400">ID: {c.id}</p>
                </div>

                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={13} />
                </a>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative z-10 border-t border-white/[0.08] bg-[#0a0e17]/80 px-6 py-24 lg:px-10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <GraduationCap size={14} />
              <span>Academic Foundations</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Formal Education.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2" stagger={0.1}>
            {education.map((e) => (
              <motion.div
                variants={revealItem}
                key={e.degree}
                className="glass-panel-interactive rounded-2xl p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 font-mono text-xs text-cyan-300">
                    {e.period}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-amber-500/30 bg-amber-950/30 px-3 py-1 font-mono text-xs font-bold text-amber-300">
                    <Award size={13} />
                    {e.score}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-white">{e.degree}</h3>
                <p className="mt-1 text-sm font-medium text-slate-400">{e.school}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 scroll-mt-20 overflow-hidden bg-[#05070a] px-6 py-24 text-slate-100 lg:px-10">
        <FloatingShapes />
        <div className="relative mx-auto max-w-4xl">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Mail size={14} />
              <span>Direct Inquiries</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's Build Something Exceptional.
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              I am open to full-time Software Engineer, Backend Developer, or MERN Stack roles across India &amp; Remote.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.35fr]">
            {/* Contact details */}
            <div className="glass-panel flex flex-col justify-between space-y-6 rounded-2xl p-7">
              <div>
                <h3 className="font-display text-xl font-bold text-white">Contact Information</h3>
                <p className="mt-1 text-xs text-slate-400">Direct channels for recruiters and collaborators.</p>

                <div className="mt-6 space-y-4 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 text-slate-300 transition-colors hover:text-cyan-400"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Mail size={16} />
                    </span>
                    <span className="break-all">{profile.email}</span>
                  </a>

                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-slate-300 transition-colors hover:text-cyan-400"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Phone size={16} />
                    </span>
                    <span>{profile.phoneDisplay}</span>
                  </a>

                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <MapPin size={16} />
                    </span>
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/[0.08] pt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Social Profiles</p>
                <div className="mt-3 flex gap-4">
                  {social.slice(0, 2).map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
                    >
                      {s.label} <ArrowUpRight size={12} className="inline" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="glass-panel rounded-2xl p-7">
              {contactSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">Message Prepared!</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Your email client has been opened. I will respond to your inquiry promptly.
                  </p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="mt-6 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-2 text-xs font-semibold text-cyan-400 hover:border-cyan-400"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Jane Doe"
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#07090e]/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. jane@company.com"
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#07090e]/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Hi Chiranj, I would like to discuss an opportunity..."
                      className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#07090e]/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 py-3 text-sm font-bold text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:brightness-110"
                  >
                    <Send size={15} />
                    <span>Send Message via Email</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

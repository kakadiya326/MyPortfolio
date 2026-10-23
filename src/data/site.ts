export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  subtitle: string;
  category: "mern" | "ai-ml" | "utility";
  date: string;
  image: string;
  points: string[];
  stack: string[];
  links: ProjectLink[];
}

export interface Certification {
  title: string;
  issuer: string;
  id: string;
  verifyUrl: string;
  category: string;
}

export const profile = {
  name: "Kakadiya Chiranj",
  shortName: "Chiranj",
  initials: "CK",
  role: "Full-Stack & Backend Developer",
  badge: "Available for Relocation",
  location: "Amreli, Gujarat — Open to Relocation",
  workLocation: "Pune, Maharashtra",
  email: "kakadiyachiranj044@gmail.com",
  phone: "+91 9016291573",
  phoneDisplay: "+91 90162 91573",
  resumeUrl: "/Chiranj_Kakadiya_Resume.pdf",
  summary:
    "MERN Stack & Backend Developer with hands-on experience architecting scalable full-stack applications and enterprise services. Proficient in React.js, Node.js, Express.js, MongoDB, FastAPI, and Java, with a strong focus on secure authentication, clean REST API design, system performance, and modern responsive interfaces.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const social = [
  { label: "GitHub", href: "https://github.com/kakadiya326" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chiranj-kakadiya-b50817319" },
  { label: "Email", href: "mailto:kakadiyachiranj044@gmail.com" },
  { label: "Phone", href: "tel:+919016291573" },
];

export const stats = [
  { number: "8.47", label: "MCA CGPA at RK University" },
  { number: "8.51", label: "BCA CGPA at Saurashtra University" },
  { number: "150+", label: "DSA Problems Solved" },
  { number: "4★", label: "HackerRank Problem Solving" },
  { number: "10+", label: "Production REST APIs Designed" },
  { number: "7+", label: "End-to-End Deployed Projects" },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Sensedge Technologies, Pune",
    period: "Jun 2026 – Present",
    type: "Full-Time",
    points: [
      "Developed and maintained backend and full-stack modules using Node.js, Express.js, Flutter, and MongoDB.",
      "Designed and integrated REST APIs for CRM and business workflow enterprise applications.",
      "Built notification, chat, and automation modules to streamline operational efficiency.",
      "Integrated third-party APIs and handled secure API-based data exchange between distributed microservices.",
      "Debugged production workflows, refactored bottlenecks, and shipped reliability patches.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Krushki IT E-Commerce Pvt. Ltd., Rajkot",
    period: "Aug 2025 – Feb 2026",
    type: "Internship",
    points: [
      "Developed and optimized responsive web application features using React.js, improving UI performance and user experience.",
      "Integrated RESTful APIs for dynamic data retrieval, reducing payload lag and optimizing state updates.",
      "Identified and resolved edge-case runtime bugs, boosting overall system reliability.",
      "Collaborated across agile sprint cycles to deliver tested frontend features on schedule.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "StudentSphere",
    subtitle: "Learning Management System (MERN)",
    category: "mern",
    date: "Mar 2026",
    image: "/assets/studentsphere.svg",
    points: [
      "Full-stack LMS engineered with role-based access control for Admin, Instructor, and Student workflows.",
      "10+ RESTful APIs for course management, submissions, and grading, secured with JWT authentication.",
      "Optimized MongoDB data models and Mongoose aggregations designed for scalability and sub-100ms queries.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    links: [
      { label: "Live Demo", href: "https://student-sphere-lms.onrender.com/" },
      { label: "Server", href: "https://lms-apis-ht78.onrender.com/" },
      { label: "GitHub", href: "https://github.com/kakadiya326/student-sphere-lms" },
    ],
  },
  {
    title: "Shopper",
    subtitle: "E-Commerce Platform with Dual Dashboards",
    category: "mern",
    date: "Sep 2024",
    image: "/assets/shopper.svg",
    points: [
      "Full-stack store featuring product catalog, persistent shopping cart operations, and streamlined checkout.",
      "Distinct user experience and administrative panel with product CRUD operations and order lifecycle management.",
      "Secured with JWT authentication, custom middleware, and fast API responses.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    links: [
      { label: "User App", href: "https://shopper-user.onrender.com" },
      { label: "Admin Panel", href: "https://shopper-admin-sd3d.onrender.com" },
      { label: "Server", href: "https://shopper-backend-7udv.onrender.com" },
      { label: "GitHub", href: "https://github.com/kakadiya326/shopper-ecommerce-mern" },
    ],
  },
  {
    title: "AI Trade Opportunity API",
    subtitle: "Market Intelligence & Recommendations",
    category: "ai-ml",
    date: "2025",
    image: "/assets/tradeapi.svg",
    points: [
      "High-throughput FastAPI backend service integrating Google Gemini AI to generate financial insights and recommendations.",
      "API Key authentication, user session tracking, and SlowAPI rate limiting to safeguard endpoints against abuse.",
      "Structured Pydantic schemas with full interactive OpenAPI/Swagger documentation.",
    ],
    stack: ["FastAPI", "Python", "Google Gemini AI", "SlowAPI", "Pydantic"],
    links: [
      { label: "API Docs", href: "https://trade-opportunities-api-tbn4.onrender.com/docs" },
      { label: "GitHub", href: "https://github.com/kakadiya326/trade-opportunities-api" },
    ],
  },
  {
    title: "Weather Humidity Predictor",
    subtitle: "Machine Learning Regression Engine",
    category: "ai-ml",
    date: "2025",
    image: "/assets/weatherpredictor.svg",
    points: [
      "Predictive machine learning application that forecasts humidity based on real-time atmospheric metrics.",
      "Trained and compared Scikit-Learn models (Linear, Ridge, Lasso, Random Forest) with cross-validation.",
      "Automated preprocessing, scaling pipeline, and deployed via a lightweight Flask REST API.",
    ],
    stack: ["Python", "Scikit-Learn", "Flask", "NumPy", "Pandas", "Matplotlib"],
    links: [
      { label: "Frontend", href: "https://weather-prediction-app-sigma.vercel.app/" },
      { label: "Server", href: "https://machine-learning-lshy.onrender.com" },
      { label: "GitHub", href: "https://github.com/kakadiya326/Machine-Learning" },
    ],
  },
  {
    title: "System Design & SOLID Principles",
    subtitle: "Clean Architecture & OOP Case Studies",
    category: "utility",
    date: "2026",
    image: "/assets/systemdesign.svg",
    points: [
      "Architectural reference implementations focused on SOLID principles, design patterns, and low-level design (LLD).",
      "Modular microservice structure analyzing backend trade-offs, caching, and horizontal scalability.",
      "Java-based file handling, concurrency modeling, and clean code paradigms.",
    ],
    stack: ["Java", "System Design", "SOLID Principles", "OOP", "Architecture"],
    links: [
      { label: "Live Project", href: "https://system-design-solid-principles.kakadiyachiranj044.workers.dev/" },
    ],
  },
  {
    title: "Hostel Finder",
    subtitle: "Accommodation Discovery & Management",
    category: "utility",
    date: "2024",
    image: "/assets/hostelfinder.svg",
    points: [
      "Responsive web application enabling students to search, filter by location/pricing, and view hostel facilities.",
      "Integrated JSON-Server REST API for persistent listings and inquiry management.",
      "Dedicated manager administration portal for real-time room availability updates.",
    ],
    stack: ["React.js", "JSON-Server", "CSS Grid", "REST APIs"],
    links: [
      { label: "Frontend", href: "https://hostel-finders.netlify.app/" },
      { label: "Admin Panel", href: "https://managers-panel.netlify.app/login.html" },
      { label: "Server", href: "https://hostelfinder-backend-1t13.onrender.com" },
      { label: "GitHub", href: "https://github.com/kakadiya326/hostel-finder-app" },
    ],
  },
  {
    title: "Voice-to-Text WebApp",
    subtitle: "Real-Time Browser Speech Recognition",
    category: "utility",
    date: "2024",
    image: "/assets/voiceapp.svg",
    points: [
      "Interactive audio processing utility converting speech to text in real-time using the native Web Speech API.",
      "Instant copy-to-clipboard actions, speech synthesis settings, and zero external network latency.",
      "Client-side processing ensuring complete user voice privacy without server telemetry.",
    ],
    stack: ["JavaScript (ES6+)", "Web Speech API", "HTML5", "CSS3"],
    links: [
      { label: "Live Demo", href: "https://kakadiya326.github.io/Voice-to-Text/" },
      { label: "GitHub", href: "https://github.com/kakadiya326/voice-to-text-webapp" },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    id: "f65731dc9a72",
    verifyUrl: "https://www.hackerrank.com/certificates/f65731dc9a72",
    category: "Database",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    id: "35a405f8c8fd",
    verifyUrl: "https://www.hackerrank.com/certificates/35a405f8c8fd",
    category: "Database",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    id: "2d8be1b55eec",
    verifyUrl: "https://www.hackerrank.com/certificates/2d8be1b55eec",
    category: "Database",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    id: "5e7371e31f8f",
    verifyUrl: "https://www.hackerrank.com/certificates/5e7371e31f8f",
    category: "Languages",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    id: "93db4c105a76",
    verifyUrl: "https://www.hackerrank.com/certificates/93db4c105a76",
    category: "Frontend",
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    id: "14b47cd9d77f",
    verifyUrl: "https://www.hackerrank.com/certificates/14b47cd9d77f",
    category: "Frontend",
  },
];

export const training = {
  title: "Full Stack Development (MERN Stack)",
  org: "Vector India Pvt. Ltd., Hyderabad",
  period: "July 2025 – Mar 2026",
  text: "Comprehensive engineering curriculum covering Python, Core Java, HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, and MySQL, with StudentSphere LMS as the flagship capstone.",
};

export const education = [
  {
    school: "RK University, Rajkot, Gujarat",
    degree: "Master of Computer Applications (MCA)",
    period: "2024 – Present",
    score: "CGPA: 8.47 / 10",
  },
  {
    school: "Saurashtra University, Rajkot, Gujarat",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2021 – 2023",
    score: "CGPA: 8.51 / 10",
  },
];

export const skills = [
  {
    group: "Backend & Databases",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "API Design", "MongoDB", "Mongoose", "MySQL", "PostgreSQL", "CRUD", "MVC"],
  },
  {
    group: "Frontend Development",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "TailwindCSS", "HTML5", "CSS3", "React Hooks", "Responsive Design", "Axios"],
  },
  {
    group: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    group: "AI & Machine Learning",
    items: ["Google Gemini AI", "Scikit-Learn", "Flask", "NumPy", "Pandas", "Model Evaluation", "Regression"],
  },
  {
    group: "Architecture & Security",
    items: ["JWT Auth", "RBAC", "System Design", "SOLID Principles", "OOP & LLD", "DSA", "Java File Handling"],
  },
  {
    group: "DevOps & Tools",
    items: ["Git & GitHub", "Docker", "Postman", "Vite", "Linux", "Render", "Cloudflare Workers", "Vercel"],
  },
];

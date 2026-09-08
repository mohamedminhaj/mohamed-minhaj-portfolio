"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  ExternalLink,
  Code2,
  Database,
  Cpu,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    no: "01",
    title: "Face Recognition-Based Smart Attendance System",
    description:
      "Real-time face recognition attendance using Python and KNN, with automatic CSV storage and a Streamlit dashboard. Designed to work without cloud dependencies.",
    stack: ["Python", "KNN", "OpenCV", "Streamlit"],
    link: "https://github.com/mohamedminhaj/Face_Recognition-Based_Smart_Attendance_System"
  },
  {
    no: "02",
    title: "Hand Tracking & Gesture-Controlled Systems",
    description:
      "Touchless human-computer interaction using hand tracking for virtual mouse control and gesture-based system volume control.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    link: "https://github.com/mohamedminhaj/Hand-Tracking-and-Gesture-Controlled-Systems"
  },
  {
    no: "03",
    title: "Object Detection & Tracking Systems",
    description:
      "YOLO-based detection and tracking applications including image detection, vehicle counting, virtual-line crossing, escalator people counting, poker-card detection and spatial analysis.",
    stack: ["YOLOv5", "Python", "OpenCV"],
    link: "https://github.com/mohamedminhaj/Object-Detection-and-Tracking-Systems-using-YOLO"
  },
  {
    no: "04",
    title: "Mental Health Support Chatbot Using Gen-AI",
    description:
      "A conversational support system built with LangChain and generative AI, using trusted web sources and user context to provide personalized responses.",
    stack: ["LangChain", "Gen-AI", "Web Scraping"],
    link: "https://github.com/mohamedminhaj/Mental-Health-Support-Chatbot-Using-Gen-AI"
  },
  {
    no: "05",
    title: "Smart Parking System with LPR",
    description:
      "IoT parking solution combining a line-following robot with license plate recognition for automated entry/exit, parking optimization and duration-based fee calculation.",
    stack: ["IoT", "LPR", "AWS", "Computer Vision"],
    link: "https://github.com/mohamedminhaj/Smart-Parking-System-with-LPR"
  },
  {
    no: "06",
    title: "AI-Based Traffic Surveillance System",
    description:
      "Ongoing system using ESP32-CAM and YOLO for real-time number plate detection, with a backend database for license and emission expiry information and OLED display output.",
    stack: ["ESP32-CAM", "YOLO", "Python", "Database"],
    link: "https://github.com/mohamedminhaj/AI-Based-Traffic-Surveillance-System",
    ongoing: true
  }
];

const skills = [
  ["Programming", "Python", "Java", "C++", "HTML", "CSS", "JavaScript", "PHP", "R"],
  ["AI / ML", "TensorFlow", "Keras", "PyTorch", "OpenCV", "YOLO", "Scikit-learn"],
  ["Platforms", "Streamlit", "ESP32-CAM", "AWS", "Microsoft Azure AI", "LangChain"],
  ["Data / Tools", "MySQL", "MongoDB", "Git"]
];

const certifications = [
  "Microsoft Azure AI Fundamentals — AI Overview",
  "Microsoft Azure AI Fundamentals — Computer Vision",
  "Microsoft Azure AI Fundamentals — Generative AI",
  "Microsoft Azure AI Fundamentals — Natural Language Processing",
  "Microsoft Azure AI Fundamentals — Document Intelligence & Knowledge Mining"
];

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [menu, setMenu] = useState(false);

  const nav = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"]
  ];

  return (
    <main>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="container-width flex h-16 items-center justify-between">
          <a href="#" className="font-bold tracking-tight" aria-label="Mohamed Minhaj home">
            M.Minhaj<span className="text-[var(--accent)]">.</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-neutral-400 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-white">{label}</a>
            ))}
          </nav>

          <a
            href="mailto:minhajmanaf8@gmail.com"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-[var(--accent)] md:block"
          >
            Let&apos;s talk
          </a>

          <button
            className="md:hidden"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Close menu" : "Open menu"}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        {menu && (
          <div className="border-t border-white/10 bg-black px-7 py-5 md:hidden">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenu(false)}
                className="block border-b border-white/10 py-4 text-lg"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="relative min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -right-32 top-28 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[100px]" />

        <div className="container-width relative grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, ease: [0.22,1,.36,1] }}
          >
            <p className="eyebrow mb-7">AI / ML Engineer · Computer Science with AI</p>
            <h1 className="display max-w-4xl">
              Building
              <br />
              <span className="text-neutral-500">intelligent</span>
              <br />
              systems<span className="text-[var(--accent)]">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-neutral-400 md:text-lg">
              I&apos;m Mohamed Minhaj, an AI/ML Engineer in training focused on
              computer vision, generative AI, object detection, NLP and
              intelligent automation.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent)]"
              >
                View projects <ArrowDownRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-white/50"
              >
                Let&apos;s connect <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-2"><MapPin size={15}/> Sri Lanka</span>
              <a className="inline-flex items-center gap-2 hover:text-white" href="https://github.com/mohamedminhaj" target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>
              <a className="inline-flex items-center gap-2 hover:text-white" href="https://www.linkedin.com/in/mohamed-minhaj-8936b9298/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: .15 }}
            className="relative mx-auto aspect-square w-full max-w-[570px]"
            aria-label="Mohamed Minhaj profile visualization"
          >
            <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[.02] backdrop-blur-sm" />
            <motion.div
              className="absolute inset-[12%] rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[24%] rounded-full border border-[var(--accent)]/30 glow" />

            <motion.div
              className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-2 ring-[var(--accent)]/60"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Mohamed Minhaj"
                fill
                sizes="(max-width: 768px) 260px, 340px"
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent)]"
              animate={{ scale: [1, 1.4, 1], opacity: [1, .6, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <div className="absolute right-[16%] top-[34%] h-2 w-2 rounded-full bg-white" />
            <div className="absolute bottom-[20%] left-[22%] h-2 w-2 rounded-full bg-white/70" />
            <motion.div
              className="absolute bottom-[16%] right-[24%] h-3 w-3 rounded-full bg-[var(--accent)]/80"
              animate={{ scale: [1, 1.4, 1], opacity: [1, .6, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: 1.2 }}
            />
            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-4 text-xs uppercase tracking-[.16em] text-neutral-500">
              <span>Vision</span><span>Gen-AI</span><span>Automation</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container-width grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Fade><p className="eyebrow">01 / About</p></Fade>
          <Fade delay={.1}>
            <div>
              <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Turning AI concepts into practical systems that can see, understand and automate.
              </h2>
              <p className="mt-7 max-w-3xl text-base leading-8 text-neutral-400">
                I am currently pursuing a B.Sc. in Computer Science with AI at
                NIBM Kandy Innovation Center. My work combines machine learning,
                computer vision, generative AI and IoT to build hands-on
                intelligent applications.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container-width">
          <Fade><p className="eyebrow">02 / Skills</p></Fade>
          <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(([category, ...items], i) => (
              <Fade key={category} delay={i * .05}>
                <div className="min-h-[250px] border-b border-r border-white/10 p-7">
                  <div className="mb-7 flex items-center gap-3">
                    {[<Code2 key="1"/>, <Cpu key="2"/>, <Sparkles key="3"/>, <Database key="4"/>][i]}
                    <h3 className="font-semibold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-xs text-neutral-400">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container-width">
          <div className="flex items-end justify-between gap-5">
            <Fade><div><p className="eyebrow">03 / Projects</p><h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Selected work.</h2></div></Fade>
            <span className="hidden text-sm text-neutral-500 md:block">06 projects · AI / ML / IoT</span>
          </div>

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {projects.map((project, i) => (
              <Fade key={project.no} delay={i * .035}>
                <motion.article
                  whileHover={{ x: 6 }}
                  transition={{ duration: .25, ease: "easeOut" }}
                  className="group grid gap-6 py-9 md:grid-cols-[70px_1fr_1.1fr_170px] md:items-center"
                >
                  <span className="text-sm text-neutral-600">{project.no}</span>
                  <h3 className="text-xl font-semibold leading-tight md:text-2xl">{project.title}</h3>
                  <div>
                    <p className="text-sm leading-6 text-neutral-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((s) => <span key={s} className="text-xs text-neutral-500">#{s.replaceAll(" ", "-")}</span>)}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    onClick={(e) => project.link === "#" && e.preventDefault()}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 transition group-hover:text-[var(--accent)]"
                  >
                    {project.ongoing ? "Ongoing" : "View project"} <ChevronRight size={17}/>
                  </a>
                </motion.article>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container-width">
          <Fade><p className="eyebrow">04 / Experience</p></Fade>
          <Fade delay={.1}>
            <div className="mt-10 grid gap-7 rounded-3xl border border-white/10 bg-white/[.02] p-7 md:grid-cols-[1fr_2fr] md:p-10">
              <div>
                <p className="text-sm text-neutral-500">Timeline</p>
                <p className="mt-2 text-sm text-neutral-600">Add exact dates here</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">AI/ML Engineer in Training</h2>
                <p className="mt-1 text-neutral-500">Independent / Academic Projects</p>
                <p className="mt-5 max-w-2xl leading-7 text-neutral-400">
                  Hands-on development across computer vision, YOLO object
                  detection, generative AI, NLP, IoT and intelligent automation.
                  This section is intentionally editable so your formal
                  employment/internship history can be added without inventing
                  information.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container-width grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <Fade><p className="eyebrow">05 / Education</p></Fade>
          <Fade delay={.1}>
            <div className="border-t border-white/10">
              <div className="grid gap-3 border-b border-white/10 py-7 md:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="text-xl font-semibold">B.Sc. in Computer Science with AI</h2>
                  <p className="mt-1 text-neutral-500">NIBM Kandy Innovation Center</p>
                </div>
                <span className="text-sm text-neutral-500">Ongoing</span>
              </div>
              <div className="grid gap-3 border-b border-white/10 py-7 md:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="text-xl font-semibold">G.C.E. Advanced Level — Combined Mathematics</h2>
                  <p className="mt-1 text-neutral-500">Jaffna Central College</p>
                </div>
                <span className="text-sm text-neutral-500">2022</span>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="container-width">
          <Fade><p className="eyebrow">06 / Certifications</p></Fade>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {certifications.map((cert, i) => (
              <Fade key={cert} delay={i * .04}>
                <div className="flex gap-4 rounded-2xl border border-white/10 p-5">
                  <span className="text-[var(--accent)]">0{i + 1}</span>
                  <p className="text-sm leading-6 text-neutral-300">{cert}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container-width">
          <Fade>
            <p className="eyebrow">07 / Contact</p>
            <h2 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight md:text-8xl">
              Have an idea?
              <br />
              <span className="text-neutral-500">Let&apos;s build it.</span>
            </h2>
          </Fade>

          <Fade delay={.1}>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.7fr]">
              <form action="mailto:minhajmanaf8@gmail.com" method="post" encType="text/plain" className="space-y-4">
                <input name="name" required placeholder="Your name" aria-label="Your name" className="w-full rounded-xl border border-white/10 bg-white/[.03] px-5 py-4 outline-none placeholder:text-neutral-600 focus:border-white/30" />
                <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className="w-full rounded-xl border border-white/10 bg-white/[.03] px-5 py-4 outline-none placeholder:text-neutral-600 focus:border-white/30" />
                <textarea name="message" required rows={6} placeholder="Tell me about your project..." aria-label="Your message" className="w-full resize-none rounded-xl border border-white/10 bg-white/[.03] px-5 py-4 outline-none placeholder:text-neutral-600 focus:border-white/30" />
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-[var(--accent)]">
                  Send message <Mail size={17}/>
                </button>
              </form>

              <div className="rounded-3xl border border-white/10 bg-white/[.02] p-7">
                <p className="text-sm leading-7 text-neutral-400">
                  For project collaborations, internships, AI/ML opportunities
                  or technical conversations, feel free to reach out.
                </p>
                <a href="mailto:minhajmanaf8@gmail.com" className="mt-7 flex items-center gap-3 text-sm hover:text-[var(--accent)]">
                  <Mail size={17}/> minhajmanaf8@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/mohamed-minhaj-8936b9298/" target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-3 text-sm hover:text-[var(--accent)]">
                  <Linkedin size={17}/> LinkedIn <ExternalLink size={14}/>
                </a>
                <a href="https://github.com/mohamedminhaj" target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-3 text-sm hover:text-[var(--accent)]">
                  <Github size={17}/> GitHub <ExternalLink size={14}/>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container-width flex flex-col justify-between gap-5 text-sm text-neutral-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Mohamed Minhaj. Built with Next.js.</p>
          <div className="flex gap-5">
            <a href="https://github.com/mohamedminhaj" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
            <a href="https://www.linkedin.com/in/mohamed-minhaj-8936b9298/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="mailto:minhajmanaf8@gmail.com" aria-label="Email"><Mail size={18}/></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
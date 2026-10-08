import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X,
  Code2, Database, Cloud, Layers3, ExternalLink, MapPin
} from "lucide-react";
import "./index.css";

type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  number: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Gestion de sites",
    type: "Application web",
    description: "Application de gestion développée pour Crédit Agricole, avec des espaces back-office et front-office.",
    stack: ["Node.js", "React", "MongoDB"]
  },
  {
    number: "02",
    title: "Espace client Nexecur",
    type: "Plateforme web",
    description: "Développement et évolution de l'espace client avec une approche moderne orientée expérience utilisateur.",
    stack: ["Angular", "TypeScript"]
  },
  {
    number: "03",
    title: "Système de livraison",
    type: "Projet — Ahla Media",
    description: "Application de livraison avec frontend React/Tailwind et backend Express/MongoDB, intégrée à une chaîne CI/CD.",
    stack: ["React", "Tailwind", "Express", "MongoDB", "AWS"]
  },
  {
    number: "04",
    title: "Gestion de restaurant",
    type: "Desktop application",
    description: "Application desktop pour la gestion de restaurant : facturation, réservations et commandes.",
    stack: ["Java", "JavaFX", "MySQL"]
  }
];

const skills = [
  { icon: Code2, title: "Frontend", items: ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "Redux", "React Native"] },
  { icon: Layers3, title: "Backend", items: ["Node.js", "Express", "NestJS", "Spring Boot", "WebSocket", "Socket.IO", "BullMQ"] },
  { icon: Database, title: "Data", items: ["MongoDB", "PostgreSQL", "MySQL", "MariaDB", "GridFS"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Oracle OCI", "Linux", "Zabbix", "Grafana"] }
];

const experiences = [
  {
    date: "Déc. 2025 — Aujourd’hui",
    company: "LOGIGROUP",
    role: "Ingénieure d’études et développement",
    points: [
      "Participation à la refonte et à la modification du site officiel avec Joomla.",
      "Développement d’une application de gestion de site pour Crédit Agricole.",
      "Développement de l’espace client de Nexecur avec Angular."
    ]
  },
  {
    date: "Mars 2024 — Juil. 2025",
    company: "MARS IT",
    role: "Ingénieure génie logiciel",
    points: [
      "Conception et définition de l’architecture des projets.",
      "Développement frontend React avec Redux et backend Node.js / Express.",
      "Authentification avec Keycloak et gestion MongoDB avec Replication & GridFS.",
      "Déploiements AWS, Docker et environnements serveurs privés.",
      "Tests unitaires avec Jest et supervision avec Zabbix / Grafana."
    ]
  },
  {
    date: "Fév. 2023 — Juin 2023",
    company: "AHLA MEDIA",
    role: "Stage — Développement d’une application de livraison",
    points: [
      "Frontend avec React, Tailwind CSS et TypeScript.",
      "Backend avec Express et MongoDB.",
      "Mise en place d’une CI/CD avec GitHub Actions et S3 AWS."
    ]
  },
  {
    date: "Août 2022",
    company: "NADO WEB",
    role: "Développement d’une application desktop",
    points: [
      "Application de gestion de restaurant avec Java & JavaFX.",
      "MySQL pour le stockage des données.",
      "Fonctionnalités de facturation, réservation et commandes."
    ]
  }
];

function App() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="min-h-screen bg-[#fffdf9] text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#fffdf9]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="text-lg font-extrabold tracking-tight">
            REHABE<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-accent">À propos</a>
            <a href="#projects" className="hover:text-accent">Projets</a>
            <a href="#experience" className="hover:text-accent">Expérience</a>
            <a href="#skills" className="hover:text-accent">Compétences</a>
            <a href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-white hover:bg-accent">Contact</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-black/5 bg-[#fffdf9] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm font-semibold">
              {[
                ["À propos", "#about"], ["Projets", "#projects"], ["Expérience", "#experience"],
                ["Compétences", "#skills"], ["Contact", "#contact"]
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu}>{label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="noise grid-bg relative flex min-h-screen items-center overflow-hidden pt-24">
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
            <div className="reveal flex flex-col justify-center">
              <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Disponible pour de nouvelles opportunités
              </div>

              <p className="mono mb-5 text-xs uppercase tracking-[.25em] text-accent">
                Ingénieure développeuse · Casablanca
              </p>

              <h1 className="max-w-5xl text-5xl font-extrabold leading-[.95] tracking-[-.05em] sm:text-7xl lg:text-[92px]">
                Je transforme
                <span className="block text-accent">des idées</span>
                en produits web.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
                Ingénieure développeuse full-stack spécialisée en MERN, avec une expérience
                en React, Angular, Node.js, MongoDB, AWS et DevOps.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent">
                  Voir mes projets <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a href="/CV-Essabaouni-Rehabe-updated(1).pdf" download className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-bold hover:border-black/30">
                  <Download size={17} /> Télécharger mon CV
                </a>
              </div>
            </div>

            <div className="relative hidden min-h-[520px] items-center justify-center lg:flex">
              <div className="float relative h-80 w-80 rounded-[4rem] bg-ink shadow-soft">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-accent/30 bg-orange-100"></div>
                <div className="absolute -bottom-8 -left-12 h-24 w-24 rounded-3xl bg-accent"></div>
                <div className="absolute inset-8 rounded-[3rem] border border-white/15"></div>
                <div className="absolute left-12 top-14 mono text-xs text-white/50">FULL_STACK</div>
                <div className="absolute bottom-14 left-12 right-12">
                  <div className="mb-3 h-1 w-16 bg-accent"></div>
                  <div className="text-5xl font-extrabold tracking-tight text-white">RE.</div>
                  <p className="mt-3 max-w-[190px] text-sm leading-6 text-white/55">
                    Build. Ship. Improve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-black/5 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
            <div>
              <p className="mono text-xs uppercase tracking-[.25em] text-accent">01 / À propos</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Une développeuse<br />orientée solution.</h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-black/70">
                Je suis <strong className="text-ink">Rehabe Essabaouni</strong>, ingénieure développeuse
                full-stack. Diplômée de Mundiapolis, je conçois et développe des applications web
                de bout en bout, du frontend jusqu’aux services backend et à l’infrastructure.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["2+", "ans d’expérience"],
                  ["MERN", "spécialisation"],
                  ["AWS", "cloud & déploiement"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-[#fff7ed] p-5">
                    <div className="text-3xl font-extrabold">{value}</div>
                    <div className="mt-1 text-sm text-black/50">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-black/50">
                <MapPin size={16} /> Casablanca, Maroc
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mono text-xs uppercase tracking-[.25em] text-accent">02 / Projets</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Ce que j’ai construit.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-black/50">
              Une sélection de projets professionnels et académiques représentatifs de mon expérience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.number} className="group rounded-[2rem] border border-black/8 bg-white p-7 shadow-[0_8px_40px_rgba(0,0,0,.035)] transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="mono text-xs text-black/35">{project.number}</span>
                  <ExternalLink size={18} className="text-black/25 transition group-hover:text-accent" />
                </div>
                <p className="mt-12 text-xs font-bold uppercase tracking-[.18em] text-accent">{project.type}</p>
                <h3 className="mt-2 text-2xl font-extrabold">{project.title}</h3>
                <p className="mt-4 min-h-20 text-sm leading-7 text-black/55">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-black/[.045] px-3 py-1.5 text-xs font-semibold">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="mb-14">
              <p className="mono text-xs uppercase tracking-[.25em] text-orange-300">03 / Expérience</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Mon parcours professionnel.</h2>
            </div>

            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <article key={exp.company} className="grid gap-5 border-t border-white/10 py-9 lg:grid-cols-[.3fr_.7fr]">
                  <div className="mono text-xs text-white/40">{exp.date}</div>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.company}</h3>
                        <p className="mt-1 text-orange-300">{exp.role}</p>
                      </div>
                      <span className="mono text-xs text-white/20">0{index + 1}</span>
                    </div>
                    <ul className="mt-5 grid gap-2 text-sm leading-7 text-white/55">
                      {exp.points.map((point) => <li key={point}>— {point}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-[#fff7ed]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="mb-12">
              <p className="mono text-xs uppercase tracking-[.25em] text-accent">04 / Stack</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Mes outils.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {skills.map(({ icon: Icon, title, items }) => (
                <div key={title} className="rounded-[2rem] border border-black/8 bg-white p-7">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-ink p-2.5 text-white"><Icon size={20} /></div>
                    <h3 className="text-xl font-bold">{title}</h3>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {items.map(item => (
                      <span key={item} className="rounded-full border border-black/8 px-3 py-2 text-xs font-semibold">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-accent p-8 text-white sm:p-14">
            <p className="mono text-xs uppercase tracking-[.25em] text-white/60">05 / Contact</p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Un projet ?<br />Construisons-le ensemble.
                </h2>
                <p className="mt-6 max-w-xl leading-7 text-white/70">
                  Je suis ouverte aux opportunités de développement web et aux projets qui demandent
                  une approche full-stack.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="mailto:rehabe.essabaouni@gmail.com" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink hover:bg-orange-50">
                  <Mail size={18} /> Me contacter
                </a>
                <a href="https://linkedin.com/in/essabaouni-rehabe-090732245" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold hover:bg-white/10">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Rehabe Essabaouni</span>
          <span>Full-Stack Developer · Casablanca</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);

import {
  basics,
  about,
  projects,
  skills,
  experience,
  achievements,
  education,
  languages,
  resume,
  contact,
} from '../data/portfolioData.js';
import Reveal from '../components/Reveal.jsx';
import { NAV_LINKS, derivedStats, useMenu, MenuIcon, Sprig } from './shared.jsx';

/* ============================================================
   VARIANT · JOURNAL
   Pastel photography journal — candy-stripe pink, butter
   cream, Marcellus tall serif, script accents, olive
   buttons, powder-blue footer, photo strip.
   All text comes from src/data/portfolioData.js.
   ============================================================ */

const BUTTER = '#fbf6e3';
const STRIPE_A = '#fce9ef';
const STRIPE_B = '#f7cfdd';
const BLUE = '#93aad1';
const BLUE_DEEP = '#7b93bd';
const OLIVE = '#6b7a41';
const GREEN_SOFT = '#cfe0a8';
const INK = '#57564a';

const STRIPES = {
  backgroundImage: `repeating-linear-gradient(90deg, ${STRIPE_A} 0 44px, ${STRIPE_B} 44px 88px)`,
};

function Caps({ children, className = '' }) {
  return (
    <p className={`font-jost text-[11px] font-medium uppercase tracking-[0.3em] ${className}`}>{children}</p>
  );
}

function OliveButton({ href, children, disabled = false, blue = false }) {
  const base =
    'inline-block px-6 py-2.5 font-jost text-[11px] font-medium uppercase tracking-[0.25em] transition-colors';
  if (disabled) {
    return (
      <span className={`${base} cursor-not-allowed border border-dashed border-[#6b7a41]/50 text-[#6b7a41]/60`}>
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      className={`${base} ${
        blue
          ? 'bg-[#dfe9f6] text-[#57564a] hover:bg-white'
          : 'bg-[#6b7a41] text-[#fbf6e3] hover:bg-[#57662f]'
      }`}
    >
      {children}
    </a>
  );
}

/* Little watercolor-ish flower */
function Flower({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <g opacity="0.85">
        <circle cx="30" cy="18" r="10" fill="#f3c3d5" />
        <circle cx="41" cy="27" r="10" fill="#f7cfdd" />
        <circle cx="36" cy="40" r="10" fill="#f3c3d5" />
        <circle cx="23" cy="40" r="10" fill="#fce0ea" />
        <circle cx="19" cy="27" r="10" fill="#f7cfdd" />
        <circle cx="30" cy="30" r="6" fill="#e8a7be" />
      </g>
      <path d="M30 42c-2 8-2 12 0 16" stroke="#8d9a68" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function Journal() {
  const menu = useMenu();
  const stats = derivedStats();

  return (
    <div id="home" className="min-h-screen" style={{ backgroundColor: BUTTER, color: INK }}>
      {/* ---------- Navbar ---------- */}
      <header className="sticky top-0 z-40 border-b border-[#57564a]/15 bg-[#fbf6e3]/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main navigation">
          <a href="#home" className="leading-none">
            <span className="block font-marcellus text-xl uppercase tracking-[0.25em]">
              {basics.name.split(' ')[0]}
            </span>
            <span className="-mt-0.5 block font-script text-lg text-[#7b93bd]">
              {basics.name.split(' ').slice(1).join(' ')}
            </span>
          </a>
          <ul className="hidden items-center gap-5 xl:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-jost text-[10px] font-medium uppercase tracking-[0.25em] text-[#57564a]/70 hover:text-[#6b7a41]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="p-2 xl:hidden"
            aria-expanded={menu.open}
            aria-label={menu.open ? 'Close menu' : 'Open menu'}
            onClick={menu.toggle}
          >
            <MenuIcon open={menu.open} />
          </button>
        </nav>
        {menu.open && (
          <ul className="grid grid-cols-2 gap-1 border-t border-[#57564a]/15 px-5 py-4 xl:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={menu.close} className="block py-2 font-jost text-[11px] uppercase tracking-[0.25em] text-[#57564a]/80">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* ---------- Hero (striped left / cream right) ---------- */}
      <section className="grid lg:grid-cols-2">
        <div className="relative flex items-center justify-center px-6 py-16" style={STRIPES}>
          <Reveal>
            {/* Photo placeholder card — swap for a real photo later */}
            <div className="relative w-72 bg-[#fdf9ec] p-4 pb-8 shadow-xl">
              <div className="relative flex h-80 items-end justify-center bg-gradient-to-b from-[#d8e2c4] to-[#a9b787]">
                <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-script text-4xl text-white/90">
                  hello there
                </p>
                <Caps className="mb-4 text-white/80">Your photo here</Caps>
              </div>
              <p className="mt-4 text-center font-jost text-[10px] font-semibold uppercase tracking-[0.2em] text-[#57564a]">
                {basics.title} · {basics.location}
              </p>
              <span className="absolute -right-4 -top-4 flex h-16 w-16 rotate-12 items-center justify-center rounded-full bg-[#c9d8ee] text-center font-jost text-[8px] font-semibold uppercase tracking-[0.15em] text-[#57564a]">
                est.
                <br />
                {stats.gradYear ?? 'soon'}
              </span>
              <Flower className="absolute -bottom-5 -left-6 h-16 w-16" />
            </div>
          </Reveal>
        </div>
        <div className="flex items-center px-6 py-16 lg:px-14">
          <Reveal delay={120}>
            <p className="font-script text-4xl text-[#7b93bd]">welcome, I’m</p>
            <h1 className="mt-2 font-marcellus text-5xl leading-tight sm:text-6xl">{basics.name}</h1>
            {/* EDIT: basics.headline / basics.intro in portfolioData.js */}
            <p className="mt-5 max-w-md font-jost text-sm font-light uppercase tracking-[0.18em] text-[#6b7a41]">
              {basics.headline}
            </p>
            <p className="mt-4 max-w-md font-jost text-sm font-light leading-loose text-[#57564a]/80">
              {basics.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <OliveButton href="#experience">View Experience</OliveButton>
              <OliveButton href="#achievements">View Achievements</OliveButton>
              <OliveButton href="#contact" blue>
                Contact Me
              </OliveButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- About (green band) ---------- */}
      <section id="about" style={{ backgroundColor: GREEN_SOFT }}>
        <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:py-16">
          <Reveal>
            <p className="font-script text-4xl text-[#57662f]">a little note</p>
            <h2 className="mt-2 font-marcellus text-3xl sm:text-4xl">About me</h2>
            {/* EDIT: about.text in portfolioData.js */}
            <p className="mt-5 font-jost text-sm font-light leading-loose text-[#57564a]/85">{about.text}</p>
            {/* EDIT: about.facts in portfolioData.js */}
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.label} className="bg-[#fbf6e3]/80 px-4 py-4">
                  <Caps className="text-[#6b7a41]">{fact.label}</Caps>
                  <p className="mt-1.5 font-marcellus text-base">{fact.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Projects (journal entries) ---------- */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <Reveal>
          <Caps className="text-center text-[#93aad1]">Stories from behind the scenes</Caps>
          <h2 className="mt-3 text-center font-marcellus text-3xl sm:text-4xl">The project journal</h2>
        </Reveal>
        {/* EDIT: projects in portfolioData.js */}
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <article className="flex h-full flex-col bg-[#fdf9ec] p-4 pb-6 shadow-md transition hover:-translate-y-1">
                <div
                  className="relative flex h-40 items-center justify-center"
                  style={i % 2 === 0 ? STRIPES : { backgroundColor: '#dfe9f6' }}
                >
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover" />
                  ) : (
                    <p className="font-script text-3xl text-[#57564a]/50">coming soon</p>
                  )}
                </div>
                <h3 className="mt-5 text-center font-marcellus text-lg leading-snug">{project.title}</h3>
                <Caps className="mt-1 text-center text-[#93aad1]">{project.category}</Caps>
                <p className="mt-3 flex-1 text-center font-jost text-xs font-light leading-relaxed text-[#57564a]/70">
                  {project.description}
                </p>
                <Caps className="mt-3 text-center text-[#6b7a41]">{project.tools.join(' · ')}</Caps>
                <div className="mt-4 text-center">
                  {project.link ? (
                    <OliveButton href={project.link}>The full story</OliveButton>
                  ) : (
                    <OliveButton disabled>{project.status}</OliveButton>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Skills (striped band) ---------- */}
      <section id="skills" style={STRIPES}>
        <div className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
          <Reveal>
            <div className="bg-[#fbf6e3]/95 px-6 py-10 sm:px-12">
              <h2 className="text-center font-marcellus text-3xl">What I’m good at</h2>
              {/* EDIT: skills in portfolioData.js */}
              <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {skills.map((skill, i) => (
                  <div
                    key={`${skill.name}-${i}`}
                    className={`border-b border-[#57564a]/20 pb-4 ${skill.placeholder ? 'opacity-45' : ''}`}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-marcellus text-lg">{skill.name}</h3>
                      <Flower className="h-6 w-6 shrink-0" />
                    </div>
                    <p className="mt-1 font-jost text-xs font-light leading-relaxed text-[#57564a]/70">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section id="experience" className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
        <Reveal>
          <Caps className="text-center text-[#93aad1]">{stats.totalHours} volunteer hours and counting</Caps>
          <h2 className="mt-3 text-center font-marcellus text-3xl sm:text-4xl">Volunteer stories</h2>
        </Reveal>
        {/* EDIT: experience in portfolioData.js */}
        <div className="mt-10 space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.organization} delay={i * 120}>
              <article className="grid gap-6 bg-[#fdf9ec] p-8 shadow-md sm:grid-cols-[11rem_1fr]">
                <div
                  className="flex flex-col items-center justify-center gap-1 px-4 py-6 text-center"
                  style={i % 2 === 0 ? STRIPES : { backgroundColor: '#dfe9f6' }}
                >
                  <p className="font-marcellus text-3xl text-[#57564a]">{job.hours.split(' ')[0]}</p>
                  <Caps className="text-[#57564a]/70">hours</Caps>
                </div>
                <div>
                  <h3 className="font-marcellus text-2xl">{job.role}</h3>
                  <Caps className="mt-1 text-[#6b7a41]">
                    {job.organization} · {job.period}
                  </Caps>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 font-jost text-sm font-light leading-relaxed text-[#57564a]/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#93aad1]" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Achievements (blue band) ---------- */}
      <section id="achievements" style={{ backgroundColor: BLUE }}>
        <div className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
          <Reveal>
            <p className="text-center font-script text-4xl text-[#fbf6e3]">proud moments</p>
            <h2 className="mt-1 text-center font-marcellus text-3xl text-white sm:text-4xl">Achievements</h2>
          </Reveal>
          {/* EDIT: achievements in portfolioData.js */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {achievements.map((item, i) => (
              <Reveal key={`${item.title}-${i}`} delay={i * 80}>
                <div
                  className={`h-full p-6 ${
                    item.placeholder
                      ? 'border border-dashed border-white/50 text-white/70'
                      : 'bg-[#fbf6e3] text-[#57564a]'
                  }`}
                >
                  <h3 className="font-marcellus text-lg leading-snug">{item.title}</h3>
                  <Caps className={`mt-1.5 ${item.placeholder ? 'text-white/60' : 'text-[#6b7a41]'}`}>
                    {item.issuer}
                  </Caps>
                  <p className={`mt-2 font-jost text-xs font-light ${item.placeholder ? '' : 'text-[#57564a]/70'}`}>
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Education & Languages ---------- */}
      <section id="education" className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-marcellus text-3xl">Education</h2>
            </Reveal>
            {/* EDIT: education in portfolioData.js */}
            <div className="mt-6 space-y-5">
              {education.map((school) => (
                <Reveal key={school.school}>
                  <div className="border-l-2 border-[#93aad1] bg-[#fdf9ec] p-6 shadow-sm">
                    <h3 className="font-marcellus text-xl leading-snug">{school.school}</h3>
                    <Caps className="mt-1.5 text-[#6b7a41]">{school.detail}</Caps>
                    <p className="mt-2 font-jost text-xs font-light text-[#57564a]/60">{school.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div id="languages">
            <Reveal>
              <h2 className="font-marcellus text-3xl">Languages</h2>
            </Reveal>
            {/* EDIT: languages in portfolioData.js */}
            <div className="mt-6 space-y-5">
              {languages.map((lang) => (
                <Reveal key={lang.name}>
                  <div className="bg-[#fdf9ec] p-6 shadow-sm">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-marcellus text-xl">{lang.name}</h3>
                      <p className="font-script text-xl text-[#7b93bd]">{lang.proficiency.toLowerCase()}</p>
                    </div>
                    <div className="mt-3 flex gap-1.5" role="img" aria-label={`${lang.name}: ${lang.proficiency}`}>
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className={`h-1.5 flex-1 ${dot < lang.level ? 'bg-[#6b7a41]' : 'bg-[#57564a]/10'}`}
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Resume (striped band) ---------- */}
      <section id="resume" style={STRIPES}>
        <div className="mx-auto max-w-2xl px-5 py-14 sm:py-16">
          <Reveal>
            <div className="bg-[#fbf6e3]/95 px-8 py-12 text-center">
              <Flower className="mx-auto h-12 w-12" />
              {/* EDIT: resume in portfolioData.js — set resume.url to enable the button */}
              <h2 className="mt-3 font-marcellus text-3xl">
                {resume.url ? 'My resume is ready' : resume.comingSoonText}
              </h2>
              <div className="mt-6">
                {resume.url ? (
                  <OliveButton href={resume.url}>Download resume</OliveButton>
                ) : (
                  <OliveButton disabled>Download resume</OliveButton>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact + Footer (powder blue) ---------- */}
      <section id="contact" style={{ backgroundColor: BLUE }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-3">
          <Reveal>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 6).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-jost text-[11px] font-medium uppercase tracking-[0.3em] text-white/85 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center">
              <p className="font-marcellus text-4xl uppercase leading-tight tracking-[0.15em] text-[#eaf0f9]">
                {basics.name.split(' ')[0]}
                <br />
                {basics.name.split(' ').slice(1).join(' ')}
              </p>
              <p className="mt-1 font-script text-2xl text-[#dfe9f6]">{basics.title.toLowerCase()}</p>
              <div className="mt-6">
                <OliveButton href={`mailto:${contact.email}`} blue>
                  Send an email
                </OliveButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            {/* EDIT: contact in portfolioData.js */}
            <div className="text-sm">
              <p className="font-script text-2xl text-[#eaf0f9]">let’s keep in touch!</p>
              <p className="mt-3 font-jost text-xs font-light leading-loose text-white/85">{contact.message}</p>
              <div className="mt-4 space-y-1.5 font-jost text-xs text-white/90">
                <p>✉ {contact.email}</p>
                <p className="opacity-75">in {contact.linkedin ?? '[Add your LinkedIn URL]'}</p>
                <p className="opacity-75">gh {contact.github ?? '[Add your GitHub URL]'}</p>
                <p className="opacity-75">⌂ {basics.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
        {/* Photo strip — replace these tinted tiles with real photos later */}
        <div className="grid grid-cols-3 gap-1 border-t border-white/30 pt-1 sm:grid-cols-6">
          {['#d8e2c4', '#f7cfdd', '#dfe9f6', '#e8d9b8', '#cfe0a8', '#f3c3d5'].map((tone, i) => (
            <div key={i} className="flex h-24 items-center justify-center sm:h-28" style={{ backgroundColor: tone }}>
              <Caps className="text-[#57564a]/40">photo</Caps>
            </div>
          ))}
        </div>
        <p className="py-4 text-center font-jost text-[10px] uppercase tracking-[0.3em] text-white/70">
          © {new Date().getFullYear()} {basics.name}
        </p>
      </section>
    </div>
  );
}

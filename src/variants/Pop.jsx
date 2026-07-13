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
import { NAV_LINKS, derivedStats, useMenu, MenuIcon, Starburst } from './shared.jsx';

/* ============================================================
   VARIANT · POP
   Retro bold — warm cream, tomato orange, bubblegum pink,
   huge Anton display type with script accents, starbursts,
   chunky rounded cards.
   All text comes from src/data/portfolioData.js.
   ============================================================ */

const CREAM = '#fdf1e3';
const ORANGE = '#f04e23';
const RED = '#d43214';
const PINK = '#f7a8c4';
const PINK_SOFT = '#fbdccb';
const INK = '#3c2415';

function Chip({ children, dark = false }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 font-jost text-[10px] font-semibold uppercase tracking-[0.15em] ${
        dark ? 'bg-[#3c2415] text-[#fdf1e3]' : 'bg-[#fdf1e3] text-[#d43214]'
      }`}
    >
      {children}
    </span>
  );
}

function PopButton({ href, children, disabled = false, outline = false }) {
  const base =
    'inline-block rounded-full px-7 py-3 font-jost text-xs font-semibold uppercase tracking-[0.15em] transition';
  if (disabled) {
    return (
      <span className={`${base} cursor-not-allowed border-2 border-dashed border-[#d43214]/50 text-[#d43214]/60`}>
        {children}
      </span>
    );
  }
  if (outline) {
    return (
      <a href={href} className={`${base} border-2 border-[#3c2415] text-[#3c2415] hover:bg-[#3c2415] hover:text-[#fdf1e3]`}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={`${base} bg-[#f04e23] text-[#fdf1e3] shadow-[4px_4px_0_#3c2415] hover:-translate-y-0.5 hover:bg-[#d43214]`}
    >
      {children}
    </a>
  );
}

function BigTitle({ children, script, light = false }) {
  return (
    <h2 className={`font-anton text-4xl uppercase leading-none sm:text-5xl ${light ? 'text-[#fdf1e3]' : 'text-[#d43214]'}`}>
      {children}{' '}
      {script && (
        <span className={`font-script text-4xl normal-case sm:text-5xl ${light ? 'text-[#f7a8c4]' : 'text-[#f04e23]'}`}>
          {script}
        </span>
      )}
    </h2>
  );
}

export default function Pop() {
  const menu = useMenu();
  const stats = derivedStats();

  return (
    <div id="home" className="min-h-screen" style={{ backgroundColor: CREAM, color: INK }}>
      {/* ---------- Navbar ---------- */}
      <header className="sticky top-0 z-40 border-b-2 border-[#3c2415]/10 bg-[#fdf1e3]/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main navigation">
          <a href="#home" className="font-anton text-lg uppercase leading-none tracking-wide text-[#d43214]">
            {basics.name.split(' ')[0]}
            <br />
            <span className="text-[#3c2415]">{basics.name.split(' ').slice(1).join(' ')}</span>
          </a>
          <ul className="hidden items-center gap-5 xl:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-jost text-[11px] font-semibold uppercase tracking-[0.15em] text-[#3c2415]/75 hover:text-[#f04e23]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border-2 border-[#f04e23] px-5 py-2 font-jost text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f04e23] hover:bg-[#f04e23] hover:text-[#fdf1e3] sm:inline-block"
            >
              Let’s connect
            </a>
            <button
              type="button"
              className="p-2 text-[#d43214] xl:hidden"
              aria-expanded={menu.open}
              aria-label={menu.open ? 'Close menu' : 'Open menu'}
              onClick={menu.toggle}
            >
              <MenuIcon open={menu.open} />
            </button>
          </div>
        </nav>
        {menu.open && (
          <ul className="grid grid-cols-2 gap-1 border-t-2 border-[#3c2415]/10 px-5 py-4 xl:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={menu.close} className="block py-2 font-jost text-xs font-semibold uppercase tracking-[0.15em] text-[#3c2415]/80">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <Starburst className="absolute left-6 top-16 h-8 w-8 text-[#f04e23]" />
        <Starburst className="absolute right-10 top-40 h-5 w-5 text-[#f7a8c4]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h1 className="font-anton text-6xl uppercase leading-[0.92] text-[#d43214] sm:text-8xl">
              Hi, I’m
              <br />
              {basics.name.split(' ')[0]}{' '}
              <span className="font-script text-5xl normal-case text-[#f04e23] sm:text-7xl">
                {basics.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            {/* EDIT: basics.headline / basics.intro in portfolioData.js */}
            <p className="mt-6 max-w-md font-jost text-sm font-semibold uppercase tracking-[0.1em] text-[#3c2415]">
              {basics.headline}
            </p>
            <p className="mt-3 max-w-md font-jost text-sm leading-relaxed text-[#3c2415]/75">{basics.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PopButton href="#experience">View Experience</PopButton>
              <PopButton href="#achievements" outline>
                View Achievements
              </PopButton>
              <PopButton href="#contact" outline>
                Contact Me
              </PopButton>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative mx-auto w-fit">
              {/* Photo placeholder — swap for a real photo later */}
              <div className="h-80 w-64 rounded-t-full bg-gradient-to-b from-[#f7a8c4] to-[#f04e23]/70 sm:h-96 sm:w-72" />
              <div className="absolute -bottom-4 -left-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#f04e23] text-center">
                <p className="font-jost text-[9px] font-bold uppercase tracking-[0.2em] text-[#fdf1e3]">
                  {basics.title}
                </p>
              </div>
              <Starburst className="absolute -right-4 top-6 h-9 w-9 text-[#fdf1e3]" />
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-jost text-[10px] uppercase tracking-[0.3em] text-[#fdf1e3]/80">
                Your photo here
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="mx-auto max-w-6xl px-5 pb-16 sm:pb-20">
        <Reveal>
          <div className="grid gap-8 rounded-[2.5rem] bg-[#fbdccb] p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <BigTitle script="me.">About</BigTitle>
              {/* EDIT: about.text in portfolioData.js */}
              <p className="mt-5 font-jost text-sm leading-relaxed text-[#3c2415]/80">{about.text}</p>
              <p className="mt-5 font-script text-4xl text-[#d43214]">{basics.name.split(' ')[0]} ♥</p>
            </div>
            {/* EDIT: about.facts in portfolioData.js */}
            <ul className="flex flex-col justify-center gap-4 border-[#3c2415]/15 lg:border-l-2 lg:pl-10">
              {about.facts.map((fact) => (
                <li key={fact.label} className="flex items-center gap-4">
                  <Starburst className="h-6 w-6 shrink-0 text-[#f04e23]" />
                  <div>
                    <p className="font-jost text-[10px] font-bold uppercase tracking-[0.2em] text-[#d43214]">
                      {fact.label}
                    </p>
                    <p className="font-jost text-sm text-[#3c2415]/85">{fact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ---------- Projects (orange band) ---------- */}
      <section id="projects" style={{ backgroundColor: ORANGE }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <BigTitle light>Selected works</BigTitle>
              <Chip>3 slots waiting</Chip>
            </div>
          </Reveal>
          {/* EDIT: projects in portfolioData.js */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 120}>
                <article className="flex h-full flex-col rounded-[2rem] bg-[#fdf1e3] p-6 transition hover:-translate-y-1">
                  <Chip dark>{project.category}</Chip>
                  <div className="mt-4 flex h-32 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#fbdccb] to-[#f7a8c4]">
                    {project.image ? (
                      <img src={project.image} alt={`${project.title} preview`} className="h-full w-full rounded-[1.4rem] object-cover" />
                    ) : (
                      <Starburst className="h-10 w-10 text-[#f04e23]/60" />
                    )}
                  </div>
                  <h3 className="mt-4 font-anton text-xl uppercase text-[#d43214]">{project.title}</h3>
                  <p className="mt-2 flex-1 font-jost text-xs leading-relaxed text-[#3c2415]/75">
                    {project.description}
                  </p>
                  <p className="mt-3 font-jost text-[10px] font-bold uppercase tracking-[0.15em] text-[#f04e23]">
                    {project.tools.join(' • ')}
                  </p>
                  <div className="mt-4">
                    {project.link ? (
                      <PopButton href={project.link}>View project</PopButton>
                    ) : (
                      <PopButton disabled>{project.status}</PopButton>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Skills + Stats ---------- */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <BigTitle>My skills</BigTitle>
            </Reveal>
            {/* EDIT: skills in portfolioData.js */}
            <ul className="mt-8 space-y-5">
              {skills.map((skill, i) => (
                <Reveal key={`${skill.name}-${i}`} delay={i * 70}>
                  <li className={`flex items-start gap-4 ${skill.placeholder ? 'opacity-45' : ''}`}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7a8c4]">
                      <Starburst className="h-5 w-5 text-[#d43214]" />
                    </span>
                    <div>
                      <h3 className="font-jost text-sm font-bold uppercase tracking-[0.1em]">{skill.name}</h3>
                      <p className="mt-0.5 font-jost text-xs leading-relaxed text-[#3c2415]/70">{skill.detail}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal delay={100}>
              <BigTitle script="numbers">By the</BigTitle>
            </Reveal>
            {/* These stats are computed from your resume data — nothing made up */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: `${stats.totalHours}`, label: 'volunteer hours', bg: '#fbdccb' },
                { n: `${stats.certCount}`, label: 'achievements & certifications', bg: '#f7a8c4' },
                { n: `${stats.languageCount}`, label: 'languages spoken', bg: '#f7a8c4' },
                { n: stats.gradYear ?? '—', label: 'graduating class', bg: '#fbdccb' },
              ].map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="rounded-[1.6rem] p-6" style={{ backgroundColor: s.bg }}>
                    <p className="font-anton text-4xl text-[#d43214]">{s.n}</p>
                    <p className="mt-1 font-jost text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3c2415]/75">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section id="experience" style={{ backgroundColor: PINK_SOFT }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <Reveal>
            <BigTitle script="story">My volunteer</BigTitle>
          </Reveal>
          {/* EDIT: experience in portfolioData.js */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experience.map((job, i) => (
              <Reveal key={job.organization} delay={i * 120}>
                <article className="h-full rounded-[2rem] bg-[#fdf1e3] p-8 shadow-[6px_6px_0_rgba(240,78,35,0.35)]">
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip dark>{job.hours}</Chip>
                    <Chip>{job.period}</Chip>
                  </div>
                  <h3 className="mt-4 font-anton text-2xl uppercase text-[#d43214]">{job.role}</h3>
                  <p className="font-jost text-xs font-bold uppercase tracking-[0.15em] text-[#3c2415]/60">
                    {job.organization}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 font-jost text-sm leading-relaxed text-[#3c2415]/80">
                        <span className="mt-1 text-[#f04e23]" aria-hidden="true">✳</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Achievements ---------- */}
      <section id="achievements" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <BigTitle script="shelf">The trophy</BigTitle>
        </Reveal>
        {/* EDIT: achievements in portfolioData.js */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={`${item.title}-${i}`} delay={i * 80}>
              <div
                className={`h-full rounded-[1.8rem] p-6 ${
                  item.placeholder
                    ? 'border-2 border-dashed border-[#d43214]/40 text-[#3c2415]/50'
                    : i % 2 === 0
                      ? 'bg-[#f04e23] text-[#fdf1e3]'
                      : 'bg-[#3c2415] text-[#fdf1e3]'
                }`}
              >
                <Starburst className={`h-7 w-7 ${item.placeholder ? 'text-[#d43214]/40' : 'text-[#f7a8c4]'}`} />
                <h3 className="mt-3 font-anton text-lg uppercase leading-tight">{item.title}</h3>
                <p className={`mt-2 font-jost text-[11px] font-semibold uppercase tracking-[0.12em] ${item.placeholder ? '' : 'text-[#fdf1e3]/70'}`}>
                  {item.issuer}
                </p>
                <p className={`mt-1 font-jost text-xs ${item.placeholder ? '' : 'text-[#fdf1e3]/85'}`}>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Education + Languages ---------- */}
      <section id="education" style={{ backgroundColor: PINK_SOFT }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <BigTitle>School days</BigTitle>
              </Reveal>
              {/* EDIT: education in portfolioData.js */}
              <div className="mt-8 space-y-5">
                {education.map((school) => (
                  <Reveal key={school.school}>
                    <div className="rounded-[1.8rem] bg-[#fdf1e3] p-7">
                      <h3 className="font-anton text-xl uppercase text-[#d43214]">{school.school}</h3>
                      <p className="mt-1 font-jost text-[11px] font-bold uppercase tracking-[0.15em] text-[#3c2415]/60">
                        {school.detail}
                      </p>
                      <p className="mt-2 font-jost text-xs text-[#3c2415]/70">{school.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div id="languages">
              <Reveal>
                <BigTitle script="speak">How I</BigTitle>
              </Reveal>
              {/* EDIT: languages in portfolioData.js */}
              <div className="mt-8 space-y-5">
                {languages.map((lang) => (
                  <Reveal key={lang.name}>
                    <div className="rounded-[1.8rem] bg-[#fdf1e3] p-7">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-anton text-xl uppercase">{lang.name}</h3>
                        <Chip dark>{lang.proficiency}</Chip>
                      </div>
                      <div className="mt-4 flex gap-2" role="img" aria-label={`${lang.name}: ${lang.proficiency}`}>
                        {[0, 1, 2].map((dot) => (
                          <span
                            key={dot}
                            className={`h-3 flex-1 rounded-full ${dot < lang.level ? 'bg-[#f04e23]' : 'bg-[#3c2415]/10'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" style={{ backgroundColor: ORANGE }}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h2 className="font-anton text-5xl uppercase leading-[0.95] text-[#fdf1e3] sm:text-7xl">
              Let’s <span className="text-[#3c2415]">say</span>
              <br />
              <span className="font-script text-5xl normal-case text-[#f7a8c4] sm:text-7xl">hello!</span>
            </h2>
            <div className="mt-6 space-y-2 font-jost text-sm text-[#fdf1e3]">
              <p>✉ {contact.email}</p>
              <p className="opacity-75">in {contact.linkedin ?? '[Add your LinkedIn URL]'}</p>
              <p className="opacity-75">gh {contact.github ?? '[Add your GitHub URL]'}</p>
              <p className="opacity-75">⌂ {basics.location}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-[2rem] bg-[#f7a8c4] p-8">
              <p className="font-jost text-[11px] font-bold uppercase tracking-[0.2em] text-[#d43214]">
                Want to reach out?
              </p>
              {/* EDIT: contact.message in portfolioData.js */}
              <p className="mt-3 font-jost text-sm leading-relaxed text-[#3c2415]/85">{contact.message}</p>
              <div className="mt-5">
                <PopButton href={`mailto:${contact.email}`}>Get in touch</PopButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-[#3c2415] py-8 text-center">
        <p className="font-anton text-lg uppercase tracking-wide text-[#fdf1e3]">{basics.name}</p>
        <p className="mt-1 font-jost text-[10px] uppercase tracking-[0.2em] text-[#fdf1e3]/50">
          © {new Date().getFullYear()} · {basics.title}
        </p>
      </footer>
    </div>
  );
}

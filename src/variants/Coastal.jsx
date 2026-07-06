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
import { NAV_LINKS, derivedStats, useMenu, MenuIcon } from './shared.jsx';

/* ============================================================
   VARIANT · COASTAL
   Quiet spa editorial — pale sage panels, Cormorant serif,
   square-cornered bordered cards, deep olive buttons,
   centered composition, tilde dividers.
   All text comes from src/data/portfolioData.js.
   ============================================================ */

const PAPER = '#f4f2ea';
const PANEL = '#dfe3d2';
const OLIVE = '#565a3a';
const INK = '#43463a';

function Tilde() {
  return <p className="text-center font-cormorant text-2xl text-[#565a3a]/60">~</p>;
}

function Caps({ children, className = '' }) {
  return (
    <p className={`font-jost text-[10px] font-medium uppercase tracking-[0.35em] ${className}`}>
      {children}
    </p>
  );
}

function OliveButton({ href, children, disabled = false, ghost = false }) {
  const base =
    'inline-block px-6 py-2.5 text-center font-jost text-[10px] font-medium uppercase tracking-[0.3em] transition-colors';
  if (disabled) {
    return (
      <span className={`${base} cursor-not-allowed border border-dashed border-[#565a3a]/40 text-[#565a3a]/50`}>
        {children}
      </span>
    );
  }
  if (ghost) {
    return (
      <a href={href} className={`${base} border border-[#565a3a]/50 text-[#565a3a] hover:bg-[#565a3a] hover:text-[#f4f2ea]`}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={`${base} bg-[#565a3a] text-[#eef0e3] hover:bg-[#43462c]`}>
      {children}
    </a>
  );
}

function Palm() {
  return (
    <svg viewBox="0 0 48 48" className="mx-auto h-9 w-9 text-[#565a3a]" fill="none" aria-hidden="true">
      <path d="M24 44V22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M24 22c-2-8-8-12-16-11 5 6 11 9 16 11zM24 22c2-8 8-12 16-11-5 6-11 9-16 11zM24 22c-6-5-8-12-5-19 5 5 7 13 5 19zM24 22c6-5 8-12 5-19-5 5-7 13-5 19z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Coastal() {
  const menu = useMenu();
  const stats = derivedStats();

  return (
    <div id="home" className="min-h-screen" style={{ backgroundColor: PAPER, color: INK }}>
      {/* ---------- Announcement bar ---------- */}
      {/* EDIT: change this line to any note you like, or delete the <div> */}
      <div className="bg-[#43462c] py-1.5 text-center">
        <Caps className="text-[#eef0e3]/80">[Announcement bar — add a short note or link here]</Caps>
      </div>

      {/* ---------- Navbar ---------- */}
      <header className="sticky top-0 z-40 border-b border-[#565a3a]/15 bg-[#f4f2ea]/95 backdrop-blur">
        <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5" aria-label="Main navigation">
          <ul className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.slice(0, 5).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-jost text-[10px] uppercase tracking-[0.28em] text-[#43463a]/70 hover:text-[#565a3a]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#home" className="col-start-2 text-center">
            <span className="block font-cormorant text-2xl uppercase tracking-[0.2em]">
              {basics.name.split(' ')[0]}
            </span>
            <span className="-mt-1 block font-script text-lg text-[#565a3a]">
              {basics.name.split(' ').slice(1).join(' ')}
            </span>
          </a>
          <div className="flex items-center justify-end gap-6">
            <ul className="hidden items-center gap-6 xl:flex">
              {NAV_LINKS.slice(5).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-jost text-[10px] uppercase tracking-[0.28em] text-[#43463a]/70 hover:text-[#565a3a]">
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
          </div>
        </nav>
        {menu.open && (
          <ul className="grid grid-cols-2 gap-1 border-t border-[#565a3a]/15 px-5 py-4 xl:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={menu.close} className="block py-2 font-jost text-[11px] uppercase tracking-[0.25em] text-[#43463a]/80">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* ---------- Hero (split) ---------- */}
      <section className="grid lg:grid-cols-2">
        {/* Photo placeholder — swap for a real image later */}
        <div className="relative flex min-h-72 items-end bg-gradient-to-b from-[#c9cdb9] via-[#b3b9a0] to-[#9aa287] lg:min-h-[34rem]">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                'repeating-linear-gradient(115deg, rgba(244,242,234,0.5) 0 2px, transparent 2px 26px)',
            }}
            aria-hidden="true"
          />
          <Caps className="relative m-6 text-[#f4f2ea]/80">Your photo here</Caps>
        </div>
        <div className="flex items-center justify-center px-6 py-16 lg:py-0" style={{ backgroundColor: PANEL }}>
          <Reveal className="max-w-md text-center">
            <Palm />
            <Caps className="mt-4 text-[#565a3a]">{basics.title} &nbsp;|&nbsp; {basics.location}</Caps>
            <h1 className="mt-5 font-cormorant text-5xl leading-tight sm:text-6xl">{basics.name}</h1>
            {/* EDIT: basics.headline / basics.intro in portfolioData.js */}
            <p className="mt-4 font-cormorant text-xl italic text-[#565a3a]">{basics.headline}</p>
            <p className="mt-3 font-jost text-sm font-light leading-relaxed text-[#43463a]/75">{basics.intro}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <OliveButton href="#experience">View Experience</OliveButton>
              <OliveButton href="#achievements">View Achievements</OliveButton>
              <OliveButton href="#contact" ghost>
                Contact Me
              </OliveButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="mx-auto max-w-2xl px-5 py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="font-cormorant text-4xl">A little about me</h2>
          <p className="mt-1 font-cormorant text-lg italic text-[#565a3a]">get to know me</p>
          <div className="mt-4">
            <Tilde />
          </div>
          {/* EDIT: about.text in portfolioData.js */}
          <p className="mt-4 font-cormorant text-xl leading-relaxed text-[#43463a]/85">{about.text}</p>
          {/* EDIT: about.facts in portfolioData.js */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {about.facts.map((fact) => (
              <div key={fact.label} className="border border-[#565a3a]/25 px-4 py-5">
                <Caps className="text-[#565a3a]">{fact.label}</Caps>
                <p className="mt-2 font-cormorant text-lg leading-snug">{fact.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- Projects ---------- */}
      <section id="projects" style={{ backgroundColor: PANEL }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-center font-cormorant text-4xl">Three projects to come</h2>
            <p className="mt-1 text-center font-cormorant text-lg italic text-[#565a3a]">one growing portfolio</p>
            <div className="mt-4">
              <Tilde />
            </div>
          </Reveal>
          {/* EDIT: projects in portfolioData.js */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 120}>
                <article className="flex h-full flex-col border border-[#565a3a]/30 bg-[#f4f2ea] p-7 text-center shadow-[0_1px_0_rgba(86,90,58,0.25)]">
                  <Caps className="text-[#565a3a]/70">{project.category}</Caps>
                  <h3 className="mt-3 font-cormorant text-2xl leading-snug">{project.title}</h3>
                  <p className="mt-3 flex-1 font-jost text-xs font-light leading-relaxed text-[#43463a]/70">
                    {project.description}
                  </p>
                  <p className="mt-4 font-cormorant text-base italic text-[#565a3a]">
                    {project.tools.join(' · ')}
                  </p>
                  <div className="mt-5 space-y-2">
                    {project.link ? (
                      <OliveButton href={project.link}>View project</OliveButton>
                    ) : (
                      <OliveButton disabled>{project.status}</OliveButton>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-center font-cormorant text-4xl">What I bring</h2>
          <div className="mt-4">
            <Tilde />
          </div>
        </Reveal>
        {/* EDIT: skills in portfolioData.js */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-x-12 gap-y-8 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <Reveal key={`${skill.name}-${i}`} delay={i * 80}>
              <div
                className={`border-b pb-5 text-center ${
                  skill.placeholder ? 'border-dashed border-[#565a3a]/30 opacity-50' : 'border-[#565a3a]/30'
                }`}
              >
                <h3 className="font-cormorant text-2xl">{skill.name}</h3>
                <p className="mt-1.5 font-jost text-xs font-light leading-relaxed text-[#43463a]/70">
                  {skill.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section id="experience" style={{ backgroundColor: PANEL }}>
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-center font-cormorant text-4xl">Volunteer experience</h2>
            <p className="mt-1 text-center font-cormorant text-lg italic text-[#565a3a]">
              {stats.totalHours} hours of community service
            </p>
            <div className="mt-4">
              <Tilde />
            </div>
          </Reveal>
          {/* EDIT: experience in portfolioData.js */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experience.map((job, i) => (
              <Reveal key={job.organization} delay={i * 120}>
                <article className="flex h-full flex-col border border-[#565a3a]/30 bg-[#f4f2ea] p-8">
                  <Caps className="text-[#565a3a]/70">{job.period} · {job.hours}</Caps>
                  <h3 className="mt-3 font-cormorant text-2xl leading-snug">{job.role}</h3>
                  <p className="font-cormorant text-lg italic text-[#565a3a]">{job.organization}</p>
                  <ul className="mt-4 space-y-2.5 text-left">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 font-jost text-xs font-light leading-relaxed text-[#43463a]/80">
                        <span className="mt-1.5 font-cormorant leading-none text-[#565a3a]" aria-hidden="true">~</span>
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
      <section id="achievements" className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-center font-cormorant text-4xl">Certifications &amp; achievements</h2>
          <div className="mt-4">
            <Tilde />
          </div>
        </Reveal>
        {/* EDIT: achievements in portfolioData.js */}
        <div className="mt-10 space-y-4">
          {achievements.map((item, i) => (
            <Reveal key={`${item.title}-${i}`} delay={i * 70}>
              <div
                className={`grid gap-2 border px-6 py-5 sm:grid-cols-[1.2fr_1fr_0.8fr] sm:items-center ${
                  item.placeholder
                    ? 'border-dashed border-[#565a3a]/30 opacity-50'
                    : 'border-[#565a3a]/30 bg-[#faf9f2]'
                }`}
              >
                <h3 className="font-cormorant text-xl leading-snug">{item.title}</h3>
                <Caps className="text-[#565a3a]/80">{item.issuer}</Caps>
                <p className="font-cormorant text-base italic text-[#43463a]/70 sm:text-right">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Education & Languages ---------- */}
      <section id="education" style={{ backgroundColor: PANEL }}>
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-center font-cormorant text-4xl">Education</h2>
            <div className="mt-4">
              <Tilde />
            </div>
          </Reveal>
          {/* EDIT: education in portfolioData.js */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {education.map((school, i) => (
              <Reveal key={school.school} delay={i * 120}>
                <div className="h-full border border-[#565a3a]/30 bg-[#f4f2ea] p-8 text-center">
                  <Palm />
                  <h3 className="mt-3 font-cormorant text-2xl leading-snug">{school.school}</h3>
                  <Caps className="mt-2 text-[#565a3a]">{school.detail}</Caps>
                  <p className="mt-3 font-cormorant text-base italic text-[#43463a]/60">{school.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="languages" className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-center font-cormorant text-4xl">Languages</h2>
          <div className="mt-4">
            <Tilde />
          </div>
        </Reveal>
        {/* EDIT: languages in portfolioData.js */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {languages.map((lang, i) => (
            <Reveal key={lang.name} delay={i * 100}>
              <div className="border border-[#565a3a]/30 p-7 text-center">
                <h3 className="font-cormorant text-2xl">{lang.name}</h3>
                <p className="mt-1 font-cormorant text-base italic text-[#565a3a]">{lang.proficiency}</p>
                <div className="mt-4 flex justify-center gap-2" role="img" aria-label={`${lang.name}: ${lang.proficiency}`}>
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className={`h-1.5 w-6 ${dot < lang.level ? 'bg-[#565a3a]' : 'bg-[#565a3a]/20'}`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Resume ---------- */}
      <section id="resume" className="bg-[#43462c]">
        <div className="mx-auto max-w-2xl px-5 py-16 text-center sm:py-20">
          <Reveal>
            <Caps className="text-[#eef0e3]/70">On paper</Caps>
            {/* EDIT: resume in portfolioData.js — set resume.url to enable the button */}
            <h2 className="mt-4 font-cormorant text-4xl text-[#eef0e3]">
              {resume.url ? 'My resume is ready to download.' : resume.comingSoonText}
            </h2>
            <div className="mt-8">
              {resume.url ? (
                <a
                  href={resume.url}
                  className="inline-block bg-[#eef0e3] px-6 py-2.5 font-jost text-[10px] font-medium uppercase tracking-[0.3em] text-[#43462c] hover:bg-white"
                >
                  Download resume
                </a>
              ) : (
                <span className="inline-block cursor-not-allowed border border-dashed border-[#eef0e3]/50 px-6 py-2.5 font-jost text-[10px] uppercase tracking-[0.3em] text-[#eef0e3]/60">
                  Download resume
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="mx-auto max-w-2xl px-5 py-16 text-center sm:py-20">
        <Reveal>
          <Palm />
          <h2 className="mt-4 font-cormorant text-4xl">Say hello</h2>
          {/* EDIT: contact in portfolioData.js */}
          <p className="mt-4 font-cormorant text-xl leading-relaxed text-[#43463a]/85">{contact.message}</p>
          <div className="mt-8 space-y-3">
            {[
              { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
              { label: 'LinkedIn', value: contact.linkedin ?? '[Add your LinkedIn URL]', href: contact.linkedin },
              { label: 'GitHub', value: contact.github ?? '[Add your GitHub URL]', href: contact.github },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-center gap-4">
                <Caps className="w-20 text-right text-[#565a3a]">{row.label}</Caps>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="font-cormorant text-lg hover:text-[#565a3a]"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="font-cormorant text-lg text-[#43463a]/60">{row.value}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <OliveButton href={`mailto:${contact.email}`}>Send me an email</OliveButton>
          </div>
        </Reveal>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-[#565a3a]/20 py-8 text-center">
        <p className="font-cormorant text-xl uppercase tracking-[0.2em]">{basics.name}</p>
        <Caps className="mt-1 text-[#43463a]/50">
          © {new Date().getFullYear()} · {basics.title}
        </Caps>
      </footer>
    </div>
  );
}

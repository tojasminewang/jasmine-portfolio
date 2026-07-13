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
   VARIANT · PETAL
   Pink & sage scrapbook — soft pink bands, dotted "lace"
   borders, tilted polaroid cards, italic Fraunces serif,
   little diamonds and hearts.
   All text comes from src/data/portfolioData.js.
   ============================================================ */

const CREAM = '#fdf6ee';
const PINK_SOFT = '#f9dce7';
const PINK = '#e0447c';
const SAGE_SOFT = '#eef1e0';
const SAGE = '#8d9a68';
const INK = '#5c4450';

function Diamond({ children }) {
  return (
    <p className="text-center font-fraunces text-xl italic" style={{ color: INK }}>
      <span className="mr-2 text-sm text-[#e0447c]" aria-hidden="true">✦</span>
      {children}
      <span className="ml-2 text-sm text-[#e0447c]" aria-hidden="true">✦</span>
    </p>
  );
}

function PillButton({ href, children, disabled = false, sage = false }) {
  const base =
    'inline-block rounded-full px-6 py-2.5 font-jost text-[11px] font-medium uppercase tracking-[0.2em] transition';
  if (disabled) {
    return (
      <span className={`${base} cursor-not-allowed border border-dashed border-[#e0447c]/50 text-[#e0447c]/60`}>
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      className={`${base} ${
        sage
          ? 'bg-[#8d9a68] text-[#fdf6ee] hover:bg-[#76824f]'
          : 'bg-[#e0447c] text-[#fdf6ee] shadow-[0_4px_0_rgba(224,68,124,0.25)] hover:-translate-y-0.5 hover:bg-[#c92e67]'
      }`}
    >
      {children}
    </a>
  );
}

/* Dotted "lace" edge */
function Lace() {
  return <div className="h-2 border-y-2 border-dotted border-[#e0447c]/30" aria-hidden="true" />;
}

export default function Petal() {
  const menu = useMenu();
  const stats = derivedStats();

  return (
    <div id="home" className="min-h-screen" style={{ backgroundColor: CREAM, color: INK }}>
      {/* ---------- Navbar ---------- */}
      <header className="sticky top-0 z-40 border-b-2 border-dotted border-[#e0447c]/30 bg-[#fdf6ee]/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main navigation">
          <a href="#home">
            <span className="font-script text-3xl text-[#e0447c]">
              {basics.name.split(' ')[0]}
            </span>
            <span className="ml-1.5 font-fraunces text-lg italic">{basics.name.split(' ').slice(1).join(' ')}</span>
          </a>
          <ul className="hidden items-center gap-5 xl:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-jost text-[11px] lowercase tracking-[0.15em] text-[#5c4450]/75 hover:text-[#e0447c]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="p-2 text-[#e0447c] xl:hidden"
            aria-expanded={menu.open}
            aria-label={menu.open ? 'Close menu' : 'Open menu'}
            onClick={menu.toggle}
          >
            <MenuIcon open={menu.open} />
          </button>
        </nav>
        {menu.open && (
          <ul className="grid grid-cols-2 gap-1 border-t-2 border-dotted border-[#e0447c]/30 px-5 py-4 xl:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={menu.close} className="block py-2 font-jost text-xs lowercase tracking-[0.15em] text-[#5c4450]/80">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* ---------- Hero (pink band) ---------- */}
      <section style={{ backgroundColor: PINK_SOFT }}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="font-jost text-[11px] uppercase tracking-[0.3em] text-[#e0447c]">
              {basics.title} · {basics.location}
            </p>
            <h1 className="mt-4 font-fraunces text-5xl leading-tight sm:text-6xl">
              Hi, I’m <em className="text-[#e0447c]">{basics.name.split(' ')[0]}</em>{' '}
              {basics.name.split(' ').slice(1).join(' ')}
            </h1>
            {/* EDIT: basics.headline / basics.intro in portfolioData.js */}
            <p className="mt-4 max-w-lg font-fraunces text-xl italic text-[#5c4450]/85">{basics.headline}</p>
            <p className="mt-3 max-w-lg font-jost text-sm font-light leading-relaxed text-[#5c4450]/75">
              {basics.intro}
            </p>
            <div className="mt-4 inline-block rounded-full border border-[#e0447c]/40 bg-[#fdf6ee] px-4 py-1 font-jost text-[10px] uppercase tracking-[0.25em] text-[#e0447c]">
              ♡ {basics.title.toLowerCase()} portfolio ♡
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <PillButton href="#experience">View Experience</PillButton>
              <PillButton href="#achievements" sage>
                View Achievements
              </PillButton>
              <PillButton href="#contact">Contact Me</PillButton>
            </div>
          </Reveal>
          <Reveal delay={150}>
            {/* Photo placeholder — swap for real photos later */}
            <div className="relative mx-auto h-72 w-64">
              <div className="absolute left-0 top-6 h-56 w-44 -rotate-6 border-8 border-b-[2.5rem] border-white bg-[#f3c3d5] shadow-lg" />
              <div className="absolute right-0 top-0 h-56 w-44 rotate-3 border-8 border-b-[2.5rem] border-white bg-[#dfe5c8] shadow-lg">
                <p className="mt-20 text-center font-jost text-[10px] uppercase tracking-[0.25em] text-[#5c4450]/50">
                  Your photo
                </p>
              </div>
              <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-script text-3xl text-[#e0447c]">
                {basics.name.split(' ')[0]}
              </p>
            </div>
          </Reveal>
        </div>
        <Lace />
      </section>

      {/* ---------- Stats strip (all numbers derive from your resume data) ---------- */}
      <section className="mx-auto max-w-4xl px-5 py-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { n: stats.totalHours, label: 'volunteer hours' },
              { n: stats.certCount, label: 'achievements' },
              { n: stats.languageCount, label: 'languages' },
              { n: stats.gradYear ?? '—', label: 'graduating class' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-fraunces text-4xl italic text-[#e0447c]">{s.n}</p>
                <p className="mt-1 font-jost text-[10px] uppercase tracking-[0.25em] text-[#5c4450]/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- About (sage band) ---------- */}
      <section id="about" style={{ backgroundColor: SAGE_SOFT }}>
        <Lace />
        <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:py-16">
          <Reveal>
            <Diamond>About me</Diamond>
            {/* EDIT: about.text in portfolioData.js */}
            <p className="mt-5 font-fraunces text-2xl italic leading-relaxed text-[#5c4450]/90">
              “{about.text}”
            </p>
            {/* EDIT: about.facts in portfolioData.js */}
            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {about.facts.map((fact) => (
                <span
                  key={fact.label}
                  className="rounded-full border border-[#8d9a68]/50 bg-[#fdf6ee] px-4 py-1.5 font-jost text-[11px] tracking-wide text-[#5c4450]/80"
                >
                  <span className="text-[#8d9a68]">♡</span> {fact.label}: {fact.value}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Lace />
      </section>

      {/* ---------- Projects ---------- */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <Reveal>
          <Diamond>Project portfolio</Diamond>
        </Reveal>
        {/* EDIT: projects in portfolioData.js */}
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <article
                className={`flex h-full flex-col rounded-[2rem] border-2 p-6 text-center transition hover:-translate-y-1 ${
                  i % 2 === 0 ? 'border-[#f3c3d5] bg-[#fbe9f0]' : 'border-[#dfe5c8] bg-[#f4f6e9]'
                }`}
              >
                <div className="mx-auto flex h-36 w-full items-center justify-center rounded-[1.4rem] border-4 border-white bg-white/60 shadow-inner">
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} preview`} className="h-full w-full rounded-[1.1rem] object-cover" />
                  ) : (
                    <p className="font-jost text-[10px] uppercase tracking-[0.25em] text-[#5c4450]/40">
                      image coming soon
                    </p>
                  )}
                </div>
                <p className="mt-4 font-jost text-[10px] uppercase tracking-[0.25em] text-[#e0447c]">
                  {project.category}
                </p>
                <h3 className="mt-1 font-fraunces text-xl italic">{project.title}</h3>
                <p className="mt-2 flex-1 font-jost text-xs font-light leading-relaxed text-[#5c4450]/70">
                  {project.description}
                </p>
                <p className="mt-3 font-jost text-[10px] tracking-[0.15em] text-[#8d9a68]">
                  {project.tools.join(' ♡ ')}
                </p>
                <div className="mt-4">
                  {project.link ? (
                    <PillButton href={project.link}>View project</PillButton>
                  ) : (
                    <PillButton disabled>{project.status}</PillButton>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Skills (niche cards) ---------- */}
      <section id="skills" style={{ backgroundColor: PINK_SOFT }}>
        <Lace />
        <div className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
          <Reveal>
            <Diamond>My skills</Diamond>
          </Reveal>
          {/* EDIT: skills in portfolioData.js */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {skills.map((skill, i) => (
              <Reveal key={`${skill.name}-${i}`} delay={i * 80}>
                <div
                  className={`h-full rounded-2xl p-5 text-center ${
                    skill.placeholder
                      ? 'border-2 border-dashed border-[#e0447c]/40 text-[#5c4450]/50'
                      : i % 2 === 0
                        ? 'bg-[#e0447c] text-[#fdf6ee]'
                        : 'bg-[#8d9a68] text-[#fdf6ee]'
                  }`}
                >
                  <h3 className="font-fraunces text-lg italic leading-snug">{skill.name}</h3>
                  <p className={`mt-2 font-jost text-xs font-light leading-relaxed ${skill.placeholder ? '' : 'opacity-85'}`}>
                    {skill.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Lace />
      </section>

      {/* ---------- Experience ---------- */}
      <section id="experience" className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
        <Reveal>
          <Diamond>Volunteer experience</Diamond>
        </Reveal>
        {/* EDIT: experience in portfolioData.js */}
        <div className="mt-10 space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.organization} delay={i * 120}>
              <article className="grid gap-6 rounded-[2rem] border-2 border-[#f3c3d5] bg-white/70 p-8 sm:grid-cols-[10rem_1fr]">
                <div className="text-center sm:border-r-2 sm:border-dotted sm:border-[#e0447c]/30 sm:pr-6 sm:text-left">
                  <p className="font-fraunces text-3xl italic text-[#e0447c]">{job.hours}</p>
                  <p className="mt-1 font-jost text-[10px] uppercase tracking-[0.2em] text-[#5c4450]/60">
                    {job.period}
                  </p>
                </div>
                <div>
                  <h3 className="font-fraunces text-2xl italic">{job.role}</h3>
                  <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-[#8d9a68]">
                    {job.organization}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 font-jost text-sm font-light leading-relaxed text-[#5c4450]/80">
                        <span className="text-[#e0447c]" aria-hidden="true">♡</span>
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

      {/* ---------- Achievements ---------- */}
      <section id="achievements" style={{ backgroundColor: SAGE_SOFT }}>
        <Lace />
        <div className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
          <Reveal>
            <Diamond>What I’m proud of</Diamond>
          </Reveal>
          {/* EDIT: achievements in portfolioData.js */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {achievements.map((item, i) => (
              <Reveal key={`${item.title}-${i}`} delay={i * 80}>
                <div
                  className={`h-full rounded-2xl p-6 ${
                    item.placeholder
                      ? 'border-2 border-dashed border-[#8d9a68]/50 text-[#5c4450]/50'
                      : 'border-2 border-white bg-[#fdf6ee] shadow-[0_3px_0_rgba(141,154,104,0.3)]'
                  }`}
                >
                  <p className="font-jost text-[10px] uppercase tracking-[0.25em] text-[#e0447c]">
                    ✦ {item.placeholder ? 'future' : 'achievement'}
                  </p>
                  <h3 className="mt-2 font-fraunces text-lg italic leading-snug">{item.title}</h3>
                  <p className="mt-1 font-jost text-xs tracking-wide text-[#8d9a68]">{item.issuer}</p>
                  <p className="mt-2 font-jost text-xs font-light text-[#5c4450]/70">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Lace />
      </section>

      {/* ---------- Education & Languages ---------- */}
      <section id="education" className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
        <Reveal>
          <Diamond>Education</Diamond>
        </Reveal>
        {/* EDIT: education in portfolioData.js */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {education.map((school, i) => (
            <Reveal key={school.school} delay={i * 120}>
              <div className="h-full rounded-[2rem] border-2 border-[#f3c3d5] bg-[#fbe9f0] p-8 text-center">
                <p className="font-script text-3xl text-[#e0447c]">{i === 0 ? 'now' : 'then'}</p>
                <h3 className="mt-2 font-fraunces text-xl italic leading-snug">{school.school}</h3>
                <p className="mt-2 font-jost text-[11px] uppercase tracking-[0.25em] text-[#8d9a68]">
                  {school.detail}
                </p>
                <p className="mt-2 font-jost text-xs font-light text-[#5c4450]/60">{school.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="languages" style={{ backgroundColor: PINK_SOFT }}>
        <Lace />
        <div className="mx-auto max-w-4xl px-5 py-14 sm:py-16">
          <Reveal>
            <Diamond>Languages I speak</Diamond>
          </Reveal>
          {/* EDIT: languages in portfolioData.js */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {languages.map((lang, i) => (
              <Reveal key={lang.name} delay={i * 100}>
                <div className="rounded-2xl border-2 border-white bg-[#fdf6ee] p-6 text-center shadow-[0_3px_0_rgba(224,68,124,0.2)]">
                  <h3 className="font-fraunces text-xl italic">{lang.name}</h3>
                  <p className="mt-1 font-jost text-[10px] uppercase tracking-[0.25em] text-[#e0447c]">
                    {lang.proficiency}
                  </p>
                  <p className="mt-3 text-sm tracking-[0.4em] text-[#e0447c]" role="img" aria-label={`${lang.name}: ${lang.proficiency}`}>
                    {'♥'.repeat(lang.level)}
                    <span className="text-[#f3c3d5]">{'♥'.repeat(3 - lang.level)}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Lace />
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" style={{ backgroundColor: SAGE_SOFT }}>
        <Lace />
        <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:py-16">
          <Reveal>
            <p className="font-script text-4xl text-[#e0447c]">let’s connect</p>
            <h2 className="mt-2 font-fraunces text-3xl italic">Ready to say hi?</h2>
            {/* EDIT: contact in portfolioData.js */}
            <p className="mx-auto mt-4 max-w-md font-jost text-sm font-light leading-relaxed text-[#5c4450]/75">
              {contact.message}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full border border-[#e0447c]/40 bg-[#fdf6ee] px-4 py-1.5 font-jost text-[11px] tracking-wide hover:border-[#e0447c]"
              >
                ✉ {contact.email}
              </a>
              <span className="rounded-full border border-dashed border-[#8d9a68]/60 px-4 py-1.5 font-jost text-[11px] tracking-wide text-[#5c4450]/60">
                in {contact.linkedin ?? '[LinkedIn URL]'}
              </span>
              <span className="rounded-full border border-dashed border-[#8d9a68]/60 px-4 py-1.5 font-jost text-[11px] tracking-wide text-[#5c4450]/60">
                gh {contact.github ?? '[GitHub URL]'}
              </span>
            </div>
            <div className="mt-7">
              <PillButton href={`mailto:${contact.email}`}>Send me a note ♡</PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="py-8 text-center" style={{ backgroundColor: PINK_SOFT }}>
        <p className="font-script text-3xl text-[#e0447c]">{basics.name}</p>
        <p className="mt-1 font-jost text-[10px] uppercase tracking-[0.25em] text-[#5c4450]/50">
          © {new Date().getFullYear()} · made with ♡
        </p>
      </footer>
    </div>
  );
}

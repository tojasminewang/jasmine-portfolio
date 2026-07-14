import { useEffect, useRef, useState } from 'react';
import {
  basics,
  about,
  projects,
  skills,
  experience,
  achievements,
  education,
  languages,
  availability,
  references,
  contact,
} from '../data/portfolioData.js';
import Reveal from '../components/Reveal.jsx';
import { NAV_LINKS, derivedStats, useMenu, MenuIcon, Sprig } from './shared.jsx';

/* ============================================================
   VARIANT · ATELIER
   Organic editorial — warm cream, sage green, terracotta,
   Cormorant serif, botanical line art, tracked small caps.
   (Colors: INK ink text · CREAM page bg · OLIVE band bg ·
   TERRA accent · BLUSH soft tint — edit the hex values below
   to re-theme this variant.)
   All text comes from src/data/portfolioData.js.
   ============================================================ */

const INK = '#414a3d';
const CREAM = '#f7f3ec';
const OLIVE = '#77815f';
const TERRA = '#b0714a';
const BLUSH = '#eee3d3';

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`font-jost text-xs font-semibold uppercase tracking-[0.3em] ${
        light ? 'text-[#f0ece0]' : 'text-[#9c5f3a]'
      }`}
    >
      {children}
    </p>
  );
}

function OutlineButton({ href, children, light = false, disabled = false }) {
  const base =
    'inline-block border px-7 py-3 font-jost text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:tracking-[0.3em]';
  const tone = light
    ? 'border-[#e8e3d2]/70 text-[#f4f0e4] hover:bg-[#f4f0e4] hover:text-[#5c6547]'
    : 'border-[#414a3d]/50 text-[#414a3d] hover:bg-[#414a3d] hover:text-[#f7f3ec]';
  if (disabled) {
    return (
      <span className={`${base} cursor-not-allowed border-dashed opacity-50 ${tone}`}>{children}</span>
    );
  }
  return (
    <a href={href} className={`${base} ${tone}`}>
      {children}
    </a>
  );
}

/* Thin terracotta reading-progress line pinned to the very top */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px]" aria-hidden="true">
      <div className="h-full bg-[#b0714a]" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

/* Tracks which section is on screen so the navbar can highlight it */
function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return active;
}

/* Number that counts up from 0 when it scrolls into view */
function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      // Skip the animation for reduced-motion users and hidden tabs (rAF is paused there)
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.visibilityState === 'hidden') {
        setN(value);
        return;
      }
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / duration);
        setN(Math.round(value * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    const fallback = setTimeout(start, 2500); // safety net if the observer never fires
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);
  return <span ref={ref}>{n}</span>;
}

/* Slow infinite text strip below the hero (pauses on hover) */
function Marquee() {
  const stats = derivedStats();
  const items = [basics.name, basics.title, basics.location, availability.headline];
  if (stats.gradYear) items.push(`Class of ${stats.gradYear}`);
  const copy = (hidden) => (
    <p
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center font-jost text-xs font-medium uppercase tracking-[0.3em] text-[#414a3d]/75"
    >
      {items.map((it) => (
        <span key={it} className="flex items-center">
          <span className="px-6">{it}</span>
          <span className="text-[#b0714a]" aria-hidden="true">✳</span>
        </span>
      ))}
    </p>
  );
  return (
    <div className="overflow-hidden border-y border-[#414a3d]/15 py-3">
      <div className="anim-marquee flex w-max">
        {copy(false)}
        {copy(true)}
      </div>
    </div>
  );
}

/* Floating back-to-top button, appears after scrolling a bit */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#414a3d]/30 bg-[#f7f3ec]/90 text-[#414a3d] shadow-md backdrop-blur transition-all duration-300 hover:border-[#b0714a] hover:text-[#b0714a] ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19V5m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/* True when the visitor prefers reduced motion — switches off the playful bits */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/* Card that tilts gently toward the cursor (skipped for reduced-motion users) */
function Tilt({ children, max = 7, className = '' }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const onMove = (e) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) scale(1.015)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: 'transform 300ms ease', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

/* Petal confetti — a soft burst wherever the visitor clicks the signature */
const PETAL_COLORS = ['#b0714a', '#77815f', '#cbb197', '#eee3d3'];

function usePetals() {
  const [petals, setPetals] = useState([]);
  const reduced = usePrefersReducedMotion();
  const idRef = useRef(0);
  const burst = (e) => {
    if (reduced) return;
    const { clientX: x, clientY: y } = e;
    const batch = Array.from({ length: 14 }, () => ({
      id: ++idRef.current,
      x,
      y,
      dx: (Math.random() - 0.5) * 260,
      dy: 120 + Math.random() * 260,
      rot: (Math.random() - 0.5) * 540,
      dur: 900 + Math.random() * 900,
      size: 9 + Math.random() * 8,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    }));
    setPetals((p) => [...p, ...batch]);
    const ids = new Set(batch.map((b) => b.id));
    setTimeout(() => setPetals((p) => p.filter((pt) => !ids.has(pt.id))), 2100);
  };
  const layer = (
    <div aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size * 0.72,
            backgroundColor: p.color,
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            '--rot': `${p.rot}deg`,
            '--dur': `${p.dur}ms`,
          }}
        />
      ))}
    </div>
  );
  return { burst, layer };
}

export default function Atelier() {
  const menu = useMenu();
  const stats = derivedStats();
  const active = useActiveSection();
  const petals = usePetals();
  const reduced = usePrefersReducedMotion();

  /* Gentle parallax: the hero art drifts toward the cursor */
  const heroRef = useRef(null);
  const [par, setPar] = useState({ x: 0, y: 0 });
  const onHeroMove = (e) => {
    if (reduced) return;
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    setPar({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  };
  const resetPar = () => setPar({ x: 0, y: 0 });

  return (
    <div id="home" className="min-h-screen" style={{ backgroundColor: CREAM, color: INK }}>
      <ScrollProgress />
      <BackToTop />
      {petals.layer}
      {/* ---------- Navbar ---------- */}
      <header className="sticky top-0 z-40 border-b border-[#414a3d]/10 bg-[#f7f3ec]/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#414a3d]/40">
              <Sprig className="h-6 w-5" stroke={INK} />
            </span>
            <span className="font-cormorant text-xl">{basics.name}</span>
          </a>
          <ul className="hidden items-center gap-5 xl:flex">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative font-jost text-xs font-semibold uppercase tracking-[0.14em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-[#9c5f3a] after:transition-transform after:duration-300 hover:text-[#9c5f3a] hover:after:scale-x-100 ${
                      isActive
                        ? 'text-[#9c5f3a] after:scale-x-100'
                        : 'text-[#414a3d] after:scale-x-0'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="hidden font-jost text-[10px] uppercase tracking-[0.3em] text-[#414a3d]/50 lg:block xl:hidden">
            Student portfolio
          </p>
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
          <ul className="grid grid-cols-2 gap-1 border-t border-[#414a3d]/10 px-5 py-4 xl:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={menu.close}
                  className="block py-2.5 font-jost text-sm font-medium uppercase tracking-[0.18em] text-[#414a3d]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* ---------- Hero ---------- */}
      <section
        ref={heroRef}
        onMouseMove={onHeroMove}
        onMouseLeave={resetPar}
        className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-8 sm:py-10 lg:grid-cols-2"
      >
        <Reveal>
          <h1 className="font-cormorant text-5xl leading-[0.95] sm:text-6xl xl:text-7xl">
            {basics.name.split(' ')[0]}
            <br />
            {basics.name.split(' ').slice(1).join(' ')}
          </h1>
          {/* EDIT: basics.headline in portfolioData.js */}
          <p className="mt-4 max-w-lg font-jost text-base font-semibold uppercase leading-relaxed tracking-[0.18em] text-[#9c5f3a]">
            {basics.headline}
          </p>
          {/* EDIT: basics.intro in portfolioData.js */}
          <p className="mt-3 max-w-lg font-jost text-lg leading-relaxed text-[#414a3d]">
            {basics.intro}
          </p>
          {/* Availability badge — EDIT: availability.headline / availability.summary in portfolioData.js */}
          <a
            href="#contact"
            className="mt-4 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-[#77815f]/50 bg-[#77815f]/10 px-5 py-2 transition-colors duration-300 hover:border-[#77815f] hover:bg-[#77815f]/15"
          >
            <span className="anim-pulse-dot h-2 w-2 rounded-full bg-[#77815f]" aria-hidden="true" />
            <span className="font-jost text-[11px] font-bold uppercase tracking-[0.18em] text-[#414a3d]">
              {availability.headline}
            </span>
            <span className="hidden font-jost text-[11px] font-medium uppercase tracking-[0.12em] text-[#414a3d]/65 sm:inline">
              · {availability.summary}
            </span>
          </a>
          {/* Signature — clicking it releases a quiet petal flourish */}
          <button
            type="button"
            onClick={petals.burst}
            aria-label={basics.name}
            className="mt-4 block cursor-pointer font-script text-3xl text-[#b0714a] transition-transform duration-300 hover:-rotate-2 hover:scale-105"
          >
            {basics.name}
          </button>
          <div className="mt-5 flex flex-wrap gap-3">
            <OutlineButton href="#experience">View Experience</OutlineButton>
            <OutlineButton href="#achievements">View Achievements</OutlineButton>
            <OutlineButton href="#contact">Contact Me</OutlineButton>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mx-auto w-fit">
            {/* EDIT: basics.heroImage in portfolioData.js — swap the illustration for a real portrait anytime */}
            {/* Height-capped so the whole hero fits the first screen without scrolling */}
            <div
              className="anim-blob relative overflow-hidden bg-[#eee3d3]"
              style={{
                height: 'min(62vh, 33rem)',
                aspectRatio: '4 / 5',
                borderRadius: '58% 42% 55% 45% / 48% 55% 45% 52%',
                transform: `translate3d(${par.x * 14}px, ${par.y * 14}px, 0)`,
                transition: 'transform 250ms ease-out',
              }}
            >
              <img
                src={basics.heroImage}
                alt="Illustration of a sunlit study desk with books and plants"
                className="h-full w-full object-cover"
                style={{
                  transform: `scale(1.08) translate3d(${par.x * -10}px, ${par.y * -10}px, 0)`,
                  transition: 'transform 250ms ease-out',
                }}
              />
            </div>
            <svg viewBox="0 0 200 80" className="anim-draw absolute -bottom-6 -left-10 h-20 w-52 text-[#b0714a]/60" aria-hidden="true">
              <path d="M4 70C60 70 90 8 196 22" pathLength="1" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </Reveal>
      </section>

      {/* ---------- Scrolling strip ---------- */}
      <Marquee />

      {/* ---------- About (olive band) ---------- */}
      <section id="about" style={{ backgroundColor: OLIVE }}>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1fr_1.4fr_1fr]">
          <Reveal>
            <figure className="mx-auto w-fit">
              {/* EDIT: about.image / about.imageCaption in portfolioData.js */}
              <div
                className="group h-72 w-56 overflow-hidden bg-[#eee3d3]"
                style={{ borderRadius: '999px 999px 8px 8px' }}
              >
                <img
                  src={about.image}
                  alt="Illustration of rock climbing gear"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:rotate-2 group-hover:scale-110"
                />
              </div>
              {about.imageCaption && (
                <figcaption className="mt-3 text-center font-jost text-[10px] uppercase tracking-[0.3em] text-[#f0ece0]">
                  {about.imageCaption}
                </figcaption>
              )}
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-[#e8e3d2]/40 lg:border-l lg:pl-12">
              <Eyebrow light>About me</Eyebrow>
              <h2 className="mt-4 font-cormorant text-4xl sm:text-5xl text-[#f4f0e4]">A little about me.</h2>
              {/* EDIT: about.text in portfolioData.js */}
              <p className="mt-5 max-w-lg font-jost text-lg leading-relaxed text-[#faf7ef]">
                {about.text}
              </p>
              <div className="mt-8">
                <OutlineButton href="#contact" light>
                  Get in touch
                </OutlineButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            {/* EDIT: about.facts in portfolioData.js */}
            <ul className="flex flex-col justify-center gap-7">
              {about.facts.map((fact) => (
                <li key={fact.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e8e3d2]/50">
                    <Sprig className="h-5 w-4" stroke="#f4f0e4" />
                  </span>
                  <div>
                    <p className="font-jost text-xs font-semibold uppercase tracking-[0.22em] text-[#f0ece0]">
                      {fact.label}
                    </p>
                    <p className="mt-1 font-jost text-base text-[#faf7ef]">{fact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <div className="flex items-end justify-between border-b border-[#414a3d]/20 pb-4">
            <Eyebrow>Featured work</Eyebrow>
            <p className="font-jost text-xs font-medium uppercase tracking-[0.22em] text-[#414a3d]/70">
              Personal projects
            </p>
          </div>
        </Reveal>
        {/* EDIT: projects in portfolioData.js */}
        <div className="mt-12 space-y-16">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <Tilt max={4}>
                <article
                  className={`group grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                    i % 2 === 1 ? '' : ''
                  }`}
                >
                  <div
                    className={`flex items-center justify-center overflow-hidden border border-[#414a3d]/15 bg-[#f9f6ee] p-8 sm:p-12 ${
                      i % 2 === 1 ? 'md:order-2' : ''
                    }`}
                    style={{ borderRadius: '999px 999px 14px 14px' }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} logo`}
                        className="aspect-square w-full max-w-xs object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    ) : (
                      <span className="border border-[#414a3d]/25 px-5 py-4 font-cormorant text-lg tracking-wide text-[#414a3d]/70">
                        {project.title}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-[#9c5f3a]">
                      {String(i + 1).padStart(2, '0')} · {project.category}
                    </p>
                    <h3 className="mt-3 font-cormorant text-4xl sm:text-5xl">{project.title}</h3>
                    <p className="mt-4 max-w-md font-jost text-lg leading-relaxed text-[#414a3d]/90">
                      {project.description}
                    </p>
                    {project.tools.length > 0 && (
                      <p className="mt-4 font-jost text-xs font-medium uppercase tracking-[0.18em] text-[#9c5f3a]">
                        {project.tools.join(' · ')}
                      </p>
                    )}
                    <div className="mt-7">
                      {project.link ? (
                        <OutlineButton href={project.link}>View project</OutlineButton>
                      ) : (
                        <OutlineButton disabled>{project.status}</OutlineButton>
                      )}
                    </div>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section id="skills" style={{ backgroundColor: BLUSH }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <Reveal>
            <Eyebrow>What I bring</Eyebrow>
            <h2 className="mt-3 font-cormorant text-4xl sm:text-5xl">Skills</h2>
          </Reveal>
          {/* EDIT: skills in portfolioData.js */}
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {skills.map((skill, i) => (
              <Reveal key={`${skill.name}-${i}`} delay={i * 90}>
                <div
                  className={`group border-t pt-5 transition-colors duration-500 ${
                    skill.placeholder
                      ? 'border-dashed border-[#414a3d]/25 opacity-50'
                      : 'border-[#414a3d]/30 hover:border-[#b0714a]'
                  }`}
                >
                  <p className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-[#9c5f3a] transition-transform duration-500 group-hover:translate-x-2">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-cormorant text-3xl leading-snug">{skill.name}</h3>
                  <p className="mt-2.5 font-jost text-base leading-relaxed text-[#414a3d]/85">
                    {skill.detail}
                  </p>
                  {skill.tags?.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#9c5f3a]/35 px-3 py-1 font-jost text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9c5f3a] transition-colors duration-300 group-hover:border-[#9c5f3a]/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_16rem]">
          <div>
            <Reveal>
              <Eyebrow>Where I’ve contributed</Eyebrow>
              <h2 className="mt-3 font-cormorant text-4xl sm:text-5xl">Experience</h2>
            </Reveal>
            {/* EDIT: experience in portfolioData.js */}
            <div className="mt-10 space-y-12">
              {experience.map((job, i) => (
                <Reveal key={job.organization} delay={i * 120}>
                  <article className="grid gap-5 border-t border-[#414a3d]/20 pt-6 sm:grid-cols-[4rem_1fr] lg:grid-cols-[4rem_1fr_10rem]">
                    <p className="font-cormorant text-4xl sm:text-5xl text-[#b0714a]">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <div>
                      <h3 className="font-cormorant text-3xl">{job.role}</h3>
                      <p className="mt-1.5 font-jost text-xs font-medium uppercase tracking-[0.18em] text-[#414a3d]/75">
                        {job.organization} · {job.period} · {job.hours}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {job.bullets.map((b) => (
                          <li key={b} className="flex gap-3 font-jost text-base leading-relaxed text-[#414a3d]/90">
                            <span className="mt-3 h-px w-4 shrink-0 bg-[#9c5f3a]" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* EDIT: experience[].image in portfolioData.js */}
                    {job.image && (
                      <div
                        className="group h-52 w-full overflow-hidden sm:col-start-2 lg:col-start-3 lg:h-44"
                        style={{ borderRadius: '999px 999px 10px 10px' }}
                      >
                        <img
                          src={job.image}
                          alt={`${job.role} illustration`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:-rotate-2 group-hover:scale-110"
                        />
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={200}>
            <div
              className="relative flex h-full min-h-64 flex-col items-center justify-center gap-2 overflow-hidden px-8 py-12 text-center text-[#f4f0e4]"
              style={{
                background: 'radial-gradient(130% 100% at 50% 0%, #c48a5e 0%, #b0714a 55%, #9a5f3d 100%)',
                borderRadius: '999px 999px 12px 12px',
              }}
            >
              <div
                className="pointer-events-none absolute inset-4 border border-[#f4f0e4]/25"
                style={{ borderRadius: '999px 999px 8px 8px' }}
                aria-hidden="true"
              />
              <Sprig className="anim-sway h-9 w-7" stroke="#f4f0e4" />
              <p className="font-cormorant text-6xl leading-none">
                <CountUp value={stats.totalHours} />
              </p>
              <p className="font-jost text-[11px] font-semibold uppercase tracking-[0.22em]">
                volunteer hours
              </p>
              {/* Per-camp breakdown, computed from the experience data */}
              <div className="mt-3 w-full max-w-52 space-y-2 border-t border-[#f4f0e4]/30 pt-3">
                {experience.map((job) => (
                  <div
                    key={job.organization}
                    className="flex items-baseline justify-between gap-3 font-jost text-[10px] uppercase tracking-[0.1em] text-[#f4f0e4]/90"
                  >
                    <span className="truncate">{job.organization}</span>
                    <span className="shrink-0 font-semibold">{parseInt(job.hours, 10)}h</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Achievements ---------- */}
      <section id="achievements" style={{ backgroundColor: OLIVE }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <Reveal>
            <Eyebrow light>Milestones</Eyebrow>
            <h2 className="mt-3 font-cormorant text-4xl sm:text-5xl text-[#f4f0e4]">Achievements</h2>
          </Reveal>
          {/* EDIT: achievements in portfolioData.js */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {achievements.map((item, i) => (
              <Reveal key={`${item.title}-${i}`} delay={i * 90} className="h-full">
                <div
                  className={`group flex h-full gap-5 rounded-2xl bg-[#f7f3ec] p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg ${
                    item.placeholder ? 'opacity-60' : ''
                  }`}
                >
                  {/* EDIT: achievements[].image in portfolioData.js */}
                  {item.image && (
                    <span className="mt-0.5 block h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#414a3d]/15 bg-[#eee3d3] sm:h-20 sm:w-20">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                      />
                    </span>
                  )}
                  <div>
                    <h3 className="font-cormorant text-2xl leading-snug text-[#414a3d] sm:text-3xl">
                      {item.title}
                    </h3>
                    {item.issuer && (
                      <p className="mt-1.5 font-jost text-xs font-semibold uppercase tracking-[0.16em] text-[#9c5f3a]">
                        {item.issuer}
                      </p>
                    )}
                    {item.detail && (
                      <p className="mt-2 font-jost text-sm italic leading-relaxed text-[#414a3d]/80">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section id="education" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <Eyebrow>Where I study</Eyebrow>
          <h2 className="mt-3 font-cormorant text-4xl sm:text-5xl">Education</h2>
        </Reveal>
        {/* EDIT: education in portfolioData.js */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {education.map((school, i) => (
            <Reveal key={school.school} delay={i * 120}>
              <Tilt max={5} className="h-full">
              <div
                className="flex h-full flex-col items-center px-10 py-12 text-center"
                style={{ backgroundColor: BLUSH, borderRadius: '999px 999px 12px 12px' }}
              >
                <Sprig className="anim-sway h-10 w-8 text-[#77815f]" stroke="#77815f" />
                <h3 className="mt-4 font-cormorant text-3xl leading-snug">{school.school}</h3>
                <p className="mt-2 font-jost text-xs font-semibold uppercase tracking-[0.2em] text-[#9c5f3a]">
                  {school.detail}
                </p>
                {school.note && (
                  <p className="mt-3 font-jost text-sm italic text-[#414a3d]/75">{school.note}</p>
                )}
              </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Languages ---------- */}
      <section id="languages" className="border-t border-[#414a3d]/15">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <Reveal>
            <Eyebrow>How I communicate</Eyebrow>
            <h2 className="mt-3 font-cormorant text-4xl sm:text-5xl">Languages</h2>
          </Reveal>
          {/* EDIT: languages in portfolioData.js */}
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {languages.map((lang, i) => (
              <Reveal key={lang.name} delay={i * 100}>
                <div className="group border-t border-[#414a3d]/30 pt-5 transition-colors duration-500 hover:border-[#b0714a]">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-cormorant text-3xl">{lang.name}</h3>
                    <p className="font-cormorant text-xl italic text-[#9c5f3a]">{lang.proficiency}</p>
                  </div>
                  <div className="mt-4 flex gap-2" role="img" aria-label={`${lang.name}: ${lang.proficiency}`}>
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className={`h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${
                          dot < lang.level ? 'bg-[#77815f]' : 'border border-[#414a3d]/30'
                        }`}
                        style={{ transitionDelay: `${dot * 80}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- References ---------- */}
      <section id="references" style={{ backgroundColor: BLUSH }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <Reveal>
            <Eyebrow>Don’t just take my word for it</Eyebrow>
            <h2 className="mt-3 font-cormorant text-4xl sm:text-5xl">References</h2>
            {/* EDIT: references in portfolioData.js */}
            <p className="mt-4 max-w-2xl font-jost text-base leading-relaxed text-[#414a3d]/85">
              {references.intro}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <Reveal delay={100}>
              <h3 className="font-jost text-xs font-semibold uppercase tracking-[0.22em] text-[#9c5f3a]">
                Volunteer supervisors
              </h3>
              <ul className="mt-5 space-y-6">
                {references.volunteer.map((ref) => (
                  <li
                    key={ref.organization}
                    className="border-t border-[#414a3d]/25 pt-4 transition-all duration-500 hover:border-[#b0714a] hover:pl-2"
                  >
                    <p className="font-cormorant text-2xl sm:text-3xl">{ref.organization}</p>
                    <p className="mt-1 font-jost text-xs font-medium uppercase tracking-[0.16em] text-[#414a3d]/70">
                      {ref.role} · {ref.location}
                    </p>
                    <a
                      href={`tel:${ref.phone.replace(/[^0-9+]/g, '')}`}
                      className="mt-1.5 inline-block font-jost text-base font-semibold text-[#9c5f3a] hover:underline"
                    >
                      {ref.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <h3 className="font-jost text-xs font-semibold uppercase tracking-[0.22em] text-[#9c5f3a]">
                Certification verification
              </h3>
              <ul className="mt-5 space-y-6">
                {references.certifications.map((ref) => (
                  <li
                    key={ref.name}
                    className="border-t border-[#414a3d]/25 pt-4 transition-all duration-500 hover:border-[#b0714a] hover:pl-2"
                  >
                    <p className="font-cormorant text-2xl sm:text-3xl">{ref.name}</p>
                    <p className="mt-1 font-jost text-xs font-medium uppercase tracking-[0.16em] text-[#414a3d]/70">
                      {ref.credential} · {ref.location}
                    </p>
                    <a
                      href={`tel:${ref.phone.replace(/[^0-9+]/g, '')}`}
                      className="mt-1.5 inline-block font-jost text-base font-semibold text-[#9c5f3a] hover:underline"
                    >
                      {ref.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div
              className="relative flex h-full flex-col items-center justify-center gap-5 overflow-hidden px-10 py-16 text-center text-[#f4f0e4]"
              style={{
                background: 'radial-gradient(140% 110% at 50% 0%, #838d6a 0%, #77815f 55%, #697353 100%)',
                borderRadius: '999px 999px 16px 16px',
              }}
            >
              <div
                className="pointer-events-none absolute inset-4 border border-[#f4f0e4]/20"
                style={{ borderRadius: '999px 999px 12px 12px' }}
                aria-hidden="true"
              />
              <Sprig className="h-10 w-8" stroke="#f4f0e4" />
              <h2 className="font-cormorant text-4xl sm:text-5xl leading-tight">Let’s get in touch.</h2>
              {/* EDIT: contact.message in portfolioData.js */}
              <p className="max-w-sm font-jost text-base leading-relaxed text-[#faf7ef]/95">
                {contact.message}
              </p>
              <OutlineButton href={`mailto:${contact.email}`} light>
                Email me
              </OutlineButton>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex h-full flex-col justify-center">
              {/* EDIT: contact in portfolioData.js */}
              <ul className="flex flex-col gap-6">
                {[
                  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
                  contact.linkedin && { label: 'LinkedIn', value: contact.linkedin, href: contact.linkedin },
                  contact.github && { label: 'GitHub', value: contact.github, href: contact.github },
                  { label: 'Based in', value: basics.location, href: null },
                ]
                  .filter(Boolean)
                  .map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center gap-5 border-b border-[#414a3d]/15 pb-4 transition-all duration-500 hover:border-[#b0714a]/50 hover:pl-2"
                  >
                    <span className="w-24 shrink-0 font-jost text-xs font-semibold uppercase tracking-[0.2em] text-[#9c5f3a]">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noreferrer"
                        className="truncate font-cormorant text-2xl hover:text-[#9c5f3a]"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="truncate font-cormorant text-2xl text-[#414a3d]/80">{row.value}</p>
                    )}
                  </li>
                ))}
              </ul>

              {/* ---------- Availability ---------- */}
              {/* EDIT: availability in portfolioData.js */}
              <div className="mt-10">
                <Eyebrow>Availability</Eyebrow>
                <div className="mt-4 flex flex-wrap items-start gap-2.5" role="img" aria-label="Weekly availability">
                  {availability.week.map((d, i) => (
                    <span key={`${d.day}-${i}`} className="flex flex-col items-center gap-1.5">
                      <span
                        className={`h-3.5 w-3.5 rounded-full ${
                          d.status === 'all-day'
                            ? 'bg-[#77815f]'
                            : d.status === 'after-school'
                              ? 'border border-[#77815f]'
                              : 'border border-[#414a3d]/25'
                        }`}
                        style={
                          d.status === 'after-school'
                            ? { background: 'linear-gradient(to top, #77815f 50%, transparent 50%)' }
                            : undefined
                        }
                      />
                      <span className="font-jost text-[10px] font-medium uppercase tracking-[0.1em] text-[#414a3d]/60">
                        {d.day}
                      </span>
                    </span>
                  ))}
                  <span className="ml-4 flex flex-col gap-1.5 font-jost text-[9px] font-medium uppercase tracking-[0.14em] text-[#414a3d]/55">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full border border-[#77815f]"
                        style={{ background: 'linear-gradient(to top, #77815f 50%, transparent 50%)' }}
                      />
                      after school
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#77815f]" />
                      all day
                    </span>
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {availability.details.map((slot) => (
                    <li key={slot.label} className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                      <span className="w-48 shrink-0 font-jost text-xs font-semibold uppercase tracking-[0.16em] text-[#9c5f3a]">
                        {slot.label}
                      </span>
                      <span className="font-cormorant text-xl text-[#414a3d]/90">{slot.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-[#414a3d]/15 py-8 text-center">
        <button
          type="button"
          onClick={petals.burst}
          className="cursor-pointer font-script text-2xl text-[#b0714a] transition-transform duration-300 hover:scale-110"
        >
          {basics.name}
        </button>
        <p className="mt-1 font-jost text-xs font-medium uppercase tracking-[0.25em] text-[#414a3d]/60">
          © {new Date().getFullYear()} · {basics.title}
        </p>
      </footer>
    </div>
  );
}

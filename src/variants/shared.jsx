import { useEffect, useState } from 'react';
import { achievements, education, experience, languages } from '../data/portfolioData.js';

/* Shared bits used by all five design variants.
   Content still lives in src/data/portfolioData.js — nothing to edit here. */

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact', href: '#contact' },
];

/* Small true-to-resume numbers some variants show as stat blocks.
   Everything is derived from portfolioData.js — no made-up figures. */
export function derivedStats() {
  const totalHours = experience.reduce((sum, job) => sum + (parseInt(job.hours, 10) || 0), 0);
  const certCount = achievements.filter((a) => !a.placeholder).length;
  const gradMatch = education
    .map((school) => /\b(20\d\d)\b/.exec(school.detail || ''))
    .find(Boolean);
  return {
    totalHours,
    certCount,
    languageCount: languages.length,
    gradYear: gradMatch ? gradMatch[1] : null,
  };
}

/* Tiny state hook for each variant's mobile menu */
export function useMenu() {
  const [open, setOpen] = useState(false);
  return { open, toggle: () => setOpen((o) => !o), close: () => setOpen(false) };
}

/* Hamburger / close glyph used by all variant navbars */
export function MenuIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  );
}

/* Simple botanical sprig — decorative line art used by the softer variants */
export function Sprig({ className = '', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 60 80" fill="none" className={className} aria-hidden="true">
      <path d="M30 76C30 50 30 28 30 6" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M30 20c-8-2-13-8-14-16 8 1 13 7 14 16zM30 20c8-2 13-8 14-16-8 1-13 7-14 16z" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M30 40c-9-2-15-8-16-17 9 1 15 8 16 17zM30 40c9-2 15-8 16-17-9 1-15 8-16 17z" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M30 60c-9-2-15-8-16-17 9 1 15 8 16 17zM30 60c9-2 15-8 16-17-9 1-15 8-16 17z" stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

/* Retro starburst used by the Pop variant */
export function Starburst({ className = '', fill = 'currentColor' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 0l3 13 11-7-7 11 13 3-13 3 7 11-11-7-3 13-3-13-11 7 7-11L0 20l13-3-7-11 11 7z"
        fill={fill}
      />
    </svg>
  );
}

/* Scrolled-state hook for sticky navbars that gain a border/shadow */
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

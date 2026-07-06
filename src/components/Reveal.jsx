import { useEffect, useRef } from 'react';

/**
 * Wraps content in a fade-in-on-scroll animation.
 * Usage: <Reveal delay={100}> ...content... </Reveal>
 *
 * Falls back to showing content immediately if IntersectionObserver
 * is unavailable or doesn't fire (e.g. prerendering, very old browsers),
 * so content is never stuck invisible.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add('is-visible');

    if (typeof IntersectionObserver === 'undefined') {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);

    // Safety net: if the observer hasn't judged the element within 2s
    // (hidden/prerendered tab), reveal anything already inside the viewport.
    const fallback = setTimeout(() => {
      if (!el.classList.contains('is-visible')) {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const rect = el.getBoundingClientRect();
        // If the viewport size is unknowable, reveal rather than risk hiding content
        if (!vh || (rect.top < vh && rect.bottom > 0)) show();
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

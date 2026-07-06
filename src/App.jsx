import { useEffect, useState } from 'react';
import Atelier from './variants/Atelier.jsx';
import Coastal from './variants/Coastal.jsx';
import Petal from './variants/Petal.jsx';
import Pop from './variants/Pop.jsx';
import Journal from './variants/Journal.jsx';

/* ============================================================
   Five design variants of the same portfolio. All content
   comes from src/data/portfolioData.js — switching styles
   never changes your info.

   Use the "Style" switcher (bottom-right) to preview each one.
   When you've picked a favourite:
     1. set DEFAULT_VARIANT below to its id, and
     2. (optional) set SHOW_SWITCHER to false to hide the picker.
   ============================================================ */

const VARIANTS = [
  { id: 'atelier', name: 'Atelier', component: Atelier },
  { id: 'coastal', name: 'Coastal', component: Coastal },
  { id: 'petal', name: 'Petal', component: Petal },
  { id: 'pop', name: 'Pop', component: Pop },
  { id: 'journal', name: 'Journal', component: Journal },
];

const DEFAULT_VARIANT = 'atelier'; // EDIT: your favourite variant id
const SHOW_SWITCHER = true; // EDIT: false to hide the style picker

function initialVariant() {
  const fromUrl = new URLSearchParams(window.location.search).get('v');
  if (VARIANTS.some((v) => v.id === fromUrl)) return fromUrl;
  const saved = localStorage.getItem('portfolio-variant');
  if (VARIANTS.some((v) => v.id === saved)) return saved;
  return DEFAULT_VARIANT;
}

export default function App() {
  const [variantId, setVariantId] = useState(initialVariant);

  useEffect(() => {
    localStorage.setItem('portfolio-variant', variantId);
  }, [variantId]);

  const Active = VARIANTS.find((v) => v.id === variantId).component;

  return (
    <>
      <Active key={variantId} />

      {SHOW_SWITCHER && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full bg-neutral-900/90 px-2 py-1.5 shadow-xl backdrop-blur">
          <span className="px-2 font-jost text-[10px] uppercase tracking-[0.2em] text-white/60">
            Style
          </span>
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVariantId(v.id)}
              className={`rounded-full px-2.5 py-1 font-jost text-[11px] transition ${
                v.id === variantId
                  ? 'bg-white text-neutral-900'
                  : 'text-white/75 hover:bg-white/15 hover:text-white'
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const THEMES = [
  { id: 'ink',       label: 'Ink',       note: 'Paper',    swatch: '#111111', ground: '#f4f1ea' },
  { id: 'void',      label: 'Void',      note: 'Inverted', swatch: '#f4f1ea', ground: '#0b0b0c' },
  { id: 'blueprint', label: 'Blueprint', note: 'Drafting', swatch: '#ffb000', ground: '#0a1a2f' },
  { id: 'riso',      label: 'Riso',      note: 'Duotone',  swatch: '#ff2d95', ground: '#fdf6e3' },
];

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const current = THEMES.find(t => t.id === theme) || THEMES[0];

  return (
    <div className="fixed bottom-0 right-0 z-[9999] m-4 sm:m-6 text-right">
      {open && (
        <ul
          className="mb-2"
          style={{ background: 'var(--ground)', border: '1px solid var(--ink)', boxShadow: 'var(--offset)' }}
        >
          {THEMES.map(({ id, label, note, swatch, ground }) => (
            <li key={id}>
              <button
                onClick={() => { setTheme(id); setOpen(false); }}
                className="invert-row w-full flex items-center gap-3 px-3 py-2 text-left"
                aria-current={theme === id}
              >
                <span
                  className="w-3 h-3 shrink-0"
                  style={{ background: ground, border: `2px solid ${swatch}` }}
                  aria-hidden
                />
                <span className="meta meta-ink w-16">{label}</span>
                <span className="meta">{note}</span>
                <span className="meta meta-ink w-3">{theme === id ? '●' : ''}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="flex items-center gap-2 px-3 py-2"
        style={{ background: 'var(--ground)', border: '1px solid var(--ink)', boxShadow: 'var(--offset)' }}
      >
        <span
          className="w-3 h-3"
          style={{ background: current.ground, border: `2px solid ${current.swatch}` }}
          aria-hidden
        />
        <span className="meta meta-ink">Theme — {current.label}</span>
        <span className="meta meta-ink" aria-hidden>{open ? '▾' : '▴'}</span>
      </button>
    </div>
  );
}

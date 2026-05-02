import { useTheme } from '../../hooks/useTheme';
import { Glass } from './Glass';

const THEMES = [
  { id: 'cyber',   label: 'Cyber',   swatch: '#00ffe0' },
  { id: 'aurora',  label: 'Aurora',  swatch: '#b47aff' },
  { id: 'solaris', label: 'Solaris', swatch: '#e07b00' },
];

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <Glass intensity="lg" className="px-3 py-2 flex items-center gap-2">
        {THEMES.map(({ id, label, swatch }) => (
          <button
            key={id}
            onClick={() => setTheme(id)}
            aria-label={`Switch to ${label} theme`}
            title={label}
            className="relative w-7 h-7 rounded-full transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2"
            style={{
              backgroundColor: swatch,
              boxShadow: theme === id ? `0 0 0 2px var(--bg-primary), 0 0 0 4px ${swatch}` : 'none',
              transform: theme === id ? 'scale(1.15)' : 'scale(1)',
            }}
          />
        ))}
      </Glass>
    </div>
  );
}

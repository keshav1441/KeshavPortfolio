import { useLenis } from '../context/LenisContext';

export default function Footer() {
  const lenis = useLenis();
  const toTop = () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 md:mt-32 pt-6 pb-12" style={{ borderTop: '1px solid var(--rule-strong)' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-baseline">
        <span className="meta">© {new Date().getFullYear()} Keshav Sharma</span>

        <span className="meta md:text-center">
          Set in Archivo &amp; JetBrains Mono · React + Vite
        </span>

        <button onClick={toTop} className="meta meta-ink link-draw md:justify-self-end">
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

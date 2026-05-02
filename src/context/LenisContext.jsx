import { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisCtx = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <LenisCtx.Provider value={lenisRef}>{children}</LenisCtx.Provider>;
}

export function useLenis() {
  return useContext(LenisCtx);
}

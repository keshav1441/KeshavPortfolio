import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Lenis from 'lenis';

const LenisCtx = createContext(null);

export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Smooth scroll is a desktop-pointer affordance. On touch devices Lenis has
    // to intercept every touchmove and re-drive scroll from rAF, which is the
    // single biggest source of jank on phones — native scrolling is smoother.
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (coarse || reduced) return;

    const instance = new Lenis({ lerp: 0.12, syncTouch: false });
    setLenis(instance);

    let rafId;
    function raf(time) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisCtx.Provider value={lenis}>{children}</LenisCtx.Provider>;
}

LenisProvider.propTypes = { children: PropTypes.node };

export function useLenis() {
  return useContext(LenisCtx);
}

/** Scroll to an element, deferring to Lenis when it is driving the page. */
export function scrollToElement(lenis, el, offset = -88) {
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset });
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

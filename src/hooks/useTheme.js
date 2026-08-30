import { useState, useEffect } from 'react';

const THEMES = ['ink', 'void', 'blueprint', 'riso'];
const LEGACY = { cyber: 'void', aurora: 'void', solaris: 'ink' };

function initial() {
  const stored = localStorage.getItem('kv-theme');
  if (THEMES.includes(stored)) return stored;
  if (stored && LEGACY[stored]) return LEGACY[stored];
  // First visit: honour the OS preference rather than flashing paper at
  // someone browsing at night. Ink and Void are the same design inverted.
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'void' : 'ink';
}

export function useTheme() {
  const [theme, setTheme] = useState(initial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kv-theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

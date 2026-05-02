export default function Footer() {
  return (
    <footer className="mt-20 py-10" style={{ borderTop: '1px solid var(--border-glass)' }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Keshav Sharma
        </span>
        <span
          className="text-sm font-mono"
          style={{ color: 'var(--text-muted)' }}
        >
          Built with{' '}
          <span className="accent-text font-semibold">React</span>
          {' '}
          <span style={{ color: 'var(--accent-1)' }}>·</span>
          {' '}☕
        </span>
      </div>
    </footer>
  );
}

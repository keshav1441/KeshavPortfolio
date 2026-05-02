const blurMap = { sm: 'backdrop-blur-sm', md: 'backdrop-blur-md', lg: 'backdrop-blur-xl' };

export function Glass({ children, className = '', intensity = 'md', style = {} }) {
  return (
    <div
      className={`rounded-2xl border ${blurMap[intensity]} ${className}`}
      style={{
        background: 'var(--bg-glass)',
        borderColor: 'var(--border-glass)',
        boxShadow: 'var(--glow)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

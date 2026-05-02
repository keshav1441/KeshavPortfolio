import { motion } from 'framer-motion';
import { Glass } from './ui/Glass';

const SOCIALS = [
  {
    href: 'https://github.com/keshav1441',
    label: 'GitHub',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10C22 6.486 17.514 2 12 2zm0 1.5c4.703 0 8.5 3.797 8.5 8.5 0 3.833-2.521 7.061-6 8.126V17.568c0-.955-.55-1.774-1.346-2.181.773-.148 1.491-.44 2.094-.856.603-.414 1.074-.938 1.374-1.527.3-.589.419-1.227.349-1.861-.07-.633-.328-1.244-.753-1.782.222-.682.47-1.879-.119-2.822-1.135 0-1.867.778-2.217 1.262C13.285 8.601 12.646 8.5 12 8.5s-1.286.1-1.885.295C9.765 8.278 9.033 7.5 7.9 7.5c-.675 1.081-.258 2.243-.033 2.719A4.54 4.54 0 0 0 7.04 11.52c-.09.643.005 1.293.297 1.896.293.603.764 1.127 1.373 1.552.609.424 1.327.716 2.113.868C10.19 16.262 9.7 16.87 9.55 17.613H8.892c-.649 0-.897-.264-1.247-.708-.346-.444-.718-.742-1.165-.866-.24-.025-.402.159-.192.32.71.483.759 1.274 1.043 1.79.259.466.79.886 1.39.886H9.5v1.626C6.022 20.06 3.5 16.832 3.5 13c0-4.703 3.797-8.5 8.5-8.5z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/keshav-sharma-40284b253/',
    label: 'LinkedIn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3H5.75zm2 3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM7 10.5h1.5V17H7v-6.5zm3.5 0H12v.77c.305-.466.938-.92 1.75-.92C15.045 10.35 16 11.305 16 13v4h-1.5v-3.75c0-1.04-.543-1.5-1.25-1.5-.74 0-1.25.49-1.25 1.5V17H10.5v-6.5z"/>
      </svg>
    ),
  },
  {
    href: 'https://x.com/Keshav84172494',
    label: 'Twitter / X',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm.664 4L10.782 12.5 6.91 17h1.022l3.302-3.824L13.91 17h3.219L13.013 11.117 16.568 7H15.57l-2.997 3.472L10.133 7H6.914z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/its_keshav46/',
    label: 'Instagram',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.75 2.5h6.5A6.25 6.25 0 0 1 21.5 8.75v6.5a6.25 6.25 0 0 1-6.25 6.25h-6.5A6.25 6.25 0 0 1 2.5 15.25v-6.5A6.25 6.25 0 0 1 8.75 2.5zM8.75 4A4.75 4.75 0 0 0 4 8.75v6.5A4.75 4.75 0 0 0 8.75 20h6.5A4.75 4.75 0 0 0 20 15.25v-6.5A4.75 4.75 0 0 0 15.25 4h-6.5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12.5 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="Contact" className="pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        Get in <span className="accent-text">Touch</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center max-w-xl mx-auto mb-16 text-sm"
        style={{ color: 'var(--text-muted)' }}
      >
        Reach out for collaborations or just to say hello
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-8"
        >
          <div>
            <h3
              className="text-2xl font-display font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Let&apos;s build something.
            </h3>
            <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: 'var(--text-muted)' }}>
              I&apos;m always open to new opportunities and challenges. Reach out to discuss your project needs
              and let&apos;s start collaborating on something amazing.
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map(({ href, label, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-muted)',
                    boxShadow: 'var(--glow)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-1)'; e.currentTarget.style.borderColor = 'var(--accent-1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-glass)'; }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quote */}
          <Glass className="p-6 hidden lg:block">
            <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              &quot;I&apos;m passionate about creating innovative solutions that make a difference.
              Let&apos;s build something amazing together!&quot;
            </p>
            <p className="text-right text-sm mt-4 font-medium" style={{ color: 'var(--accent-1)' }}>
              — Keshav Sharma
            </p>
          </Glass>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <Glass className="p-8">
            <form action="https://getform.io/f/bzyypgza" method="post">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'Your email', autoComplete: 'email' },
                ].map(({ id, label, type, placeholder, autoComplete }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      autoComplete={autoComplete}
                      required
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-200"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-primary)',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent-1)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border-glass)'; }}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-y transition-colors duration-200"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent-1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'var(--border-glass)'; }}
                />
              </div>

              <button type="submit" className="btn-accent w-full justify-center">
                Send Message
              </button>
            </form>
          </Glass>
        </motion.div>
      </div>
    </section>
  );
}

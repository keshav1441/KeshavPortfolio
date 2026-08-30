import { RunningHead, MaskLine, Fade } from './ui/Editorial';

const CHANNELS = [
  { label: 'Email',     value: 'keshavsharma1441@gmail.com', href: 'mailto:keshavsharma1441@gmail.com' },
  { label: 'GitHub',    value: 'keshav1441',                 href: 'https://github.com/keshav1441' },
  { label: 'LinkedIn',  value: 'keshav-sharma',              href: 'https://www.linkedin.com/in/keshav-sharma-40284b253/' },
  { label: 'X',         value: '@Keshav84172494',            href: 'https://x.com/Keshav84172494' },
  { label: 'Instagram', value: 'its_keshav46',               href: 'https://www.instagram.com/its_keshav46/' },
];

const FIELD_STYLE = {
  background: 'transparent',
  borderBottom: '1px solid var(--rule-strong)',
  color: 'var(--ink)',
};

export default function Contact() {
  return (
    <section id="Contact" className="pt-24 md:pt-32">
      <RunningHead index="06" title="Contact" meta="Open to work" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Statement + channels */}
        <div className="lg:col-span-6">
          <h2 className="display display-lg mb-8">
            <MaskLine>Let&apos;s</MaskLine>
            <MaskLine delay={0.08}>build it<span style={{ color: 'var(--signal)' }}>.</span></MaskLine>
          </h2>

          <Fade delay={0.1}>
            <p className="lead mb-10" style={{ maxWidth: '38ch' }}>
              Hiring, contracting, or just want to argue about agent architectures —
              the inbox is open and I answer.
            </p>
          </Fade>

          <Fade delay={0.15} as="dl" style={{ borderTop: '1px solid var(--rule)' }}>
            {CHANNELS.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="invert-row grid grid-cols-[6rem_1fr_auto] gap-4 items-baseline py-3.5 px-3 -mx-3 border-b"
              >
                <dt className="meta">{label}</dt>
                <dd className="text-sm truncate">{value}</dd>
                <span className="meta" aria-hidden>↗</span>
              </a>
            ))}
          </Fade>
        </div>

        {/* Form */}
        <Fade delay={0.1} className="lg:col-span-6">
          <form action="https://getform.io/f/bzyypgza" method="post" className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { id: 'name',  label: '01 — Name',  type: 'text',  autoComplete: 'name' },
                { id: 'email', label: '02 — Email', type: 'email', autoComplete: 'email' },
              ].map(({ id, label, type, autoComplete }) => (
                <div key={id} className="flex flex-col gap-2">
                  <label htmlFor={id} className="meta">{label}</label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    autoComplete={autoComplete}
                    required
                    className="w-full py-2 text-base outline-none focus:border-current"
                    style={FIELD_STYLE}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="meta">03 — Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full py-2 text-base outline-none resize-y focus:border-current"
                style={FIELD_STYLE}
              />
            </div>

            <button type="submit" className="btn-fill self-start">
              Send message <span aria-hidden>→</span>
            </button>
          </form>
        </Fade>
      </div>
    </section>
  );
}

import aboutImg from '../assets/aboutkeshav.jpg';
import { RunningHead, Fade, MaskLine } from './ui/Editorial';

const PROFILE = [
  ['Education', 'B.Tech Computer Science — IIIT Pune'],
  ['Current',   'Software Engineer, AI Assistant'],
  ['Location',  'Pune, Maharashtra, India'],
  ['Working',   'Agentic AI, RAG, multi-tenant platforms'],
  ['Also',      'Computer vision, PyTorch, data pipelines'],
];

const PRACTICE = [
  {
    num: '01',
    title: 'Frontend',
    desc: 'React, Next.js and React Native interfaces built to a design system rather than a template.',
  },
  {
    num: '02',
    title: 'Backend',
    desc: 'FastAPI, Node and .NET services — auth, schema design, and APIs that hold up under real traffic.',
  },
  {
    num: '03',
    title: 'AI Systems',
    desc: 'Agent orchestration, retrieval pipelines, evaluation loops. Models wired into products, not notebooks.',
  },
  {
    num: '04',
    title: 'Data',
    desc: 'Postgres, MongoDB and vector stores; scrapers and ETL that keep the index fresh.',
  },
];

export default function About() {
  return (
    <section id="About_me" className="pt-24 md:pt-32">
      <RunningHead index="02" title="Profile" meta="Who is writing this" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Lead statement */}
        <div className="lg:col-span-7">
          <h2 className="display display-lg mb-8">
            <MaskLine>Ships</MaskLine>
            <MaskLine delay={0.08}>the whole</MaskLine>
            <MaskLine delay={0.16}>system<span style={{ color: 'var(--signal)' }}>.</span></MaskLine>
          </h2>

          <Fade delay={0.1}>
            <p className="lead mb-6" style={{ maxWidth: '52ch' }}>
              I&apos;m a software engineer at AI Assistant, where I ship production features
              for a multi-tenant medicine commerce platform and build the AI tooling around
              it — resume ranking, voice interviews, a job index scraped from a thousand
              career pages.
            </p>
            <p className="mb-6" style={{ color: 'var(--ink-soft)', maxWidth: '58ch' }}>
              Before that: three years of building things end to end while finishing a
              computer science degree at IIIT Pune. The pattern hasn&apos;t changed — I like
              the part where a model or an API stops being a demo and starts being something
              people depend on.
            </p>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '58ch' }}>
              Twenty-odd projects sit in the index below. The ones I&apos;m proudest of are
              the ones where the hard part was never the model.
            </p>
          </Fade>

          <Fade delay={0.2} className="mt-10">
            <a href="#Contact" className="btn-line">
              Get in touch <span aria-hidden>→</span>
            </a>
          </Fade>
        </div>

        {/* Portrait + ledger */}
        <div className="lg:col-span-5">
          <Fade>
            <img
              src={aboutImg}
              alt="Keshav Sharma"
              loading="lazy"
              decoding="async"
              className="media-tone w-full h-[280px] sm:h-[340px] object-cover object-[50%_25%] mb-6"
              style={{ border: '1px solid var(--ink)' }}
            />
          </Fade>

          <Fade delay={0.1} as="dl">
            {PROFILE.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[7rem_1fr] gap-4 py-2.5 border-t"
                style={{ borderColor: 'var(--rule)' }}
              >
                <dt className="meta">{label}</dt>
                <dd className="text-sm" style={{ color: 'var(--ink)' }}>{value}</dd>
              </div>
            ))}
          </Fade>
        </div>
      </div>

      {/* Practice areas */}
      <div className="mt-20 md:mt-28">
        <div className="flex items-baseline gap-4 pb-3 mb-0 border-b" style={{ borderColor: 'var(--rule-strong)' }}>
          <span className="meta meta-ink">Practice</span>
          <span className="flex-1 h-px translate-y-[-3px]" style={{ background: 'var(--rule)' }} aria-hidden />
          <span className="meta">04 areas</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {PRACTICE.map(({ num, title, desc }, i) => (
            <Fade
              key={title}
              delay={i * 0.06}
              className="invert-row p-6 border-b lg:border-r"
              style={{
                borderColor: 'var(--rule)',
                ...(i === PRACTICE.length - 1 ? { borderRightWidth: 0 } : {}),
              }}
            >
              <span className="meta block mb-6" style={{ color: 'var(--signal)' }}>{num}</span>
              <h3 className="display text-xl md:text-2xl mb-3">{title}</h3>
              <p className="text-sm soft">{desc}</p>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

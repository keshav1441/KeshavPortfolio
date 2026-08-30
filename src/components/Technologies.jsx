import { RunningHead, Fade } from './ui/Editorial';

/**
 * Specimen table. No icon tiles — the stack reads as a typeset index,
 * which is both denser and faster to scan than four rows of logos.
 */
const STACK = [
  {
    num: '01',
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C#', 'SQL'],
  },
  {
    num: '02',
    label: 'Frontend',
    items: ['React', 'Next.js', 'React Native / Expo', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
  },
  {
    num: '03',
    label: 'Backend',
    items: ['FastAPI', 'Node.js', 'Express', '.NET Core', 'Flask', 'REST', 'WebSockets'],
  },
  {
    num: '04',
    label: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Neon', 'Prisma', 'Drizzle', 'ChromaDB'],
  },
  {
    num: '05',
    label: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'LangChain', 'RAG', 'Mistral', 'Gemini', 'Agent orchestration', 'Coqui STT/TTS'],
  },
  {
    num: '06',
    label: 'Platform',
    items: ['Vercel', 'AWS Amplify', 'Docker', 'Git', 'Zoho Catalyst', 'CI/CD'],
  },
];

export default function Technologies() {
  return (
    <section id="Technologies" className="pt-24 md:pt-32">
      <RunningHead index="03" title="Stack" meta={`${STACK.length} categories`} />

      <div style={{ borderTop: '1px solid var(--rule)' }}>
        {STACK.map(({ num, label, items }, i) => (
          <Fade
            key={label}
            delay={i * 0.04}
            className="invert-row grid grid-cols-1 md:grid-cols-[4rem_11rem_1fr] gap-y-2 md:gap-6 items-baseline py-5 px-3 -mx-3 border-b"
          >
            <span className="meta" style={{ color: 'var(--signal)' }}>{num}</span>
            <h3 className="display text-xl md:text-2xl">{label}</h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
              {items.map(item => (
                <li key={item} className="text-sm soft">
                  {item}
                </li>
              ))}
            </ul>
          </Fade>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Running head — the label that opens every section.
 * [ 03 ]  SELECTED WORK ───────────────────── 20 ENTRIES
 */
export function RunningHead({ index, title, meta, id }) {
  return (
    <div className="flex items-baseline gap-4 pb-3 mb-10 md:mb-14 border-b" style={{ borderColor: 'var(--rule-strong)' }}>
      <span className="meta meta-ink" id={id}>[ {index} ]</span>
      <span className="meta meta-ink">{title}</span>
      <span className="flex-1 h-px translate-y-[-3px]" style={{ background: 'var(--rule)' }} aria-hidden />
      {meta && <span className="meta hidden sm:block">{meta}</span>}
    </div>
  );
}

RunningHead.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  id: PropTypes.string,
};

/**
 * Mask reveal — a line of type sliding up out of a clipped box.
 * Used for headlines only; body copy just fades.
 */
export function MaskLine({ children, delay = 0, className = '' }) {
  // The observer must live on the *wrapper*: the inner line starts translated
  // fully outside the overflow-hidden box, so it would never report as visible
  // and the reveal would deadlock.
  return (
    <motion.span
      className="mask-line"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.span
        className={`block ${className}`}
        variants={{ hidden: { y: '105%' }, shown: { y: 0 } }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

MaskLine.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  className: PropTypes.string,
};

/** Body copy / block fade — subtle, no scale, no blur. */
export function Fade({ children, delay = 0, className = '', style, as: Tag = 'div' }) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

Fade.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  as: PropTypes.string,
};

/** Infinite keyword strip. Content is duplicated so the loop is seamless. */
export function Marquee({ items, separator = '✦' }) {
  const run = [...items, ...items];
  return (
    <div className="overflow-hidden py-4 border-y" style={{ borderColor: 'var(--rule)' }}>
      <div className="marquee-track">
        {run.map((item, i) => (
          <span key={`${item}-${i}`} className="meta meta-ink flex items-center">
            <span className="px-6">{item}</span>
            <span style={{ color: 'var(--signal)' }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

Marquee.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  separator: PropTypes.string,
};

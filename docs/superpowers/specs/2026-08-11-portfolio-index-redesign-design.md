# Portfolio Redesign — "Index" (Swiss Editorial)

Date: 2026-08-11
Status: Implemented

## Delivered beyond the original spec

- **Asset squeeze** — `scripts/optimize-images.mjs` (sharp). Image payload went
  from ~5.6 MB to ~0.9 MB; the hero portrait alone was 2.8 MB. Sources were also
  read-only on disk, which had to be cleared first.
- **Asset renames** — `FA[1].png` → `financial-advisory.png`, `image.png` →
  `food-chatbot.png`, `project-1.png` → `diabetic-retinopathy.png`. Unused
  `about.jpg` and `project-2/3/4.jpg` deleted.
- **Dependency prune** — removed FontAwesome (5 packages), react-icons,
  heroicons, material-tailwind, radix switch, clsx, and the duplicate `motion`
  package; added the `prop-types` that was only resolving transitively.
- **Head** — real title/description, OG tags, and a pre-paint inline script that
  resolves the stored or OS-preferred theme so dark-mode visitors never see a
  flash of the paper theme.

### Bugs found and fixed during implementation

1. `MaskLine` deadlocked: the observed element started translated fully outside
   its own `overflow: hidden` wrapper, so `whileInView` could never fire. The
   observer now sits on the wrapper and drives the child through variants.
2. `overflow-x: hidden` on the app wrapper silently broke `position: sticky` for
   the project preview panel. Switched to `overflow-x: clip` on body.
3. `AnimatePresence mode="wait"` stalled the preview panel when hover changed the
   key faster than the exit animation could finish. Replaced with a keyed remount.
4. Tailwind preflight was painting every `border-*` gray-200; the hairline token
   is now the default border color.

## Problem

The portfolio is a stock 2023 dev-portfolio template: dark glassmorphism cards, neon
cyan accent, gradient text, drifting mesh blob, zig-zag timeline, filter pills, icon
grids. Every structural choice is a default, so the site reads as generic regardless
of content quality. Audience is recruiters, engineering interviewers, and client
leads simultaneously — so it must be both scannable in 30 seconds and evidence of
craft.

## Direction

Swiss editorial / brutalist. The site becomes a **printed index of work**: structure
and typography carry the design instead of effects. No glass, no glow, no gradient
text, no blob, no rounded corners, no shadows.

## Design system

**Type**
- Display: Archivo (variable `wdth` + `wght`). Headlines `clamp(3.5rem, 13vw, 12rem)`,
  uppercase, `line-height: .85`, `letter-spacing: -.035em`.
- Body: Inter.
- Meta / labels / numerals: JetBrains Mono, uppercase, `letter-spacing: .12em`.

**Layout**
- 12-column grid, max width 1440, wide outer margins.
- Hairline (1px) rules as the only separator. Zero border radius, zero box shadow.
- Every section opens with a running head:
  `[ 03 ]  SELECTED WORK ————————————— 20 ENTRIES`

**Tokens** (identical names across all four themes)

| Token | Role |
|---|---|
| `--ground` | page background |
| `--ground-2` | recessed background (rare) |
| `--ink` | primary text and rules |
| `--ink-soft` | muted text |
| `--rule` | hairline color |
| `--signal` | single accent |
| `--signal-ink` | text on signal fill |
| `--invert-bg` / `--invert-fg` | row-inversion hover pair |
| `--grid` | blueprint grid overlay (transparent elsewhere) |
| `--ink-2` | riso second ink (falls back to signal) |
| `--offset` | riso offset shadow (none elsewhere) |

**Themes** — selector lists all four by name, persisted to `localStorage`.
1. `ink` (default) — bone `#F4F1EA`, ink `#111`, signal `#FF3B14`
2. `void` — inverted: ground `#0B0B0C`, paper `#F4F1EA`, same signal
3. `blueprint` — navy `#0A1A2F`, chalk `#D6E6F5`, amber `#FFB000`, hairline grid overlay
4. `riso` — cream `#FDF6E3`, blue `#0033FF` × pink `#FF2D95`, offset shadow on hover

## Section rebuilds

| Section | Replaced with |
|---|---|
| Navbar | hairline top bar; name left, mono numbered links right; 1px scroll-progress rule; full-screen mono mobile menu |
| Hero | full-bleed `SOFTWARE ENGINEER` type block; right meta column (status / location / year); portrait as hard-edged duotone rectangle; CTAs as underline-draw text links |
| About | editorial lead paragraph + hairline definition list of facts |
| Skills | specimen table — category rows, mono item lists, rules between. Icon tiles deleted |
| Experience | ledger rows: `2026—NOW │ ROLE │ COMPANY │ +`, click to expand detail |
| Projects | numbered index 01–20 (title / category / stack / year / →) with a sticky hover-preview panel on desktop; filters as mono text links; show-more removed |
| Contact | oversized `LET'S TALK`; underline-only inputs on the same getform.io endpoint; socials as text links |
| Footer | colophon line + back-to-top |

## Motion

Restrained — Swiss is not bouncy.
- Headline reveal by clip-path mask, line by line.
- Row hover inverts the entire row (ink fill, paper text), instant, no easing.
- Project screenshots render desaturated, going full color on hover; this also
  unifies mismatched screenshot palettes and makes generated monogram tiles look
  deliberate.
- One marquee strip of stack keywords.
- All of it behind `MotionConfig reducedMotion="user"`.

## Unchanged

Content data (project and experience arrays), resume link, getform.io endpoint,
Lenis smooth scroll, section ids and anchors, Vite/Tailwind setup. No new
dependencies.

## Removed

`ui/Glass.jsx`, `bg-mesh`, all `--bg-glass` / `--border-glass` / `--glow` tokens,
`accent-text` gradient, tailwind blob/float keyframes, react-icons tech grid,
FontAwesome key-area cards.

## Success criteria

- No glass, glow, gradient text, or rounded corners remain.
- All four themes readable; contrast >= 4.5:1 for body text in each.
- Production build passes; every section verified in-browser at desktop and mobile widths.

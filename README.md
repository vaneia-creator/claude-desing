# Jack — 3D Creator Portfolio

A dark-themed 3D creator portfolio landing page built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for scroll-driven and reveal animations
- **Kanit** typeface (Google Fonts, weights 300–900)

## Sections

1. **Hero** — navbar, gradient headline, magnetic mouse-following portrait
2. **Marquee** — two rows of GIF tiles that scroll horizontally with page scroll
3. **About** — character-by-character scroll reveal text with decorative 3D corner art
4. **Services** — five-item service list on a white panel
5. **Projects** — sticky-stacking cards that scale down as you scroll past them

## Reusable Components

- `FadeIn` — viewport-triggered fade/slide wrapper
- `Magnet` — cursor-following magnetic hover effect
- `AnimatedText` — scroll-linked per-character opacity reveal
- `ContactButton` — gradient pill CTA
- `LiveProjectButton` — ghost/outline pill button

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

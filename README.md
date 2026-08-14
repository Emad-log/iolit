# Iolit

Your AI subscription should pay you back.

Iolit is a waitlist site for an open-source agent that captures metadata from
your AI coding sessions (Claude, Cursor, Codex) and pays you for it. Local
capture, consent before anything leaves, one audited network call.

## Tech

- React + Vite + TypeScript
- Tailwind CSS
- Self-hosted fonts (Inter + Fraunces)
- No dependencies beyond the framework

## Structure

```
src/
  App.tsx          page composition + scroll observer
  App.css          all styles (theme tokens, components, animations)
  main.tsx         entry point
  components/
    GemMark.tsx    logo (SVG)
    Navbar.tsx     fixed nav
    Hero.tsx       hero with waitlist form + install command
    HowItWorks.tsx 3-step explanation
    Features.tsx   dark privacy section (inverted, full-bleed)
    Newsletter.tsx CTA with second waitlist form
    Footer.tsx     footer with watermark
public/
  favicon.svg
  fonts/           self-hosted woff2
  install.sh       curl install script
  llms.txt         AI-readable site description
  robots.txt
  sitemap.xml
  terms.html
  privacy.html
  og-image.png
```

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Output is static files in `dist/`. Deployed at [iolit.dev](https://iolit.dev).

## License

MIT

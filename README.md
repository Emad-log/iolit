# Iolit

Your AI subscription should pay you back.

Iolit is a waitlist site for a desktop agent that turns your Claude, Cursor,
and Codex sessions into income. Session metadata is captured locally, shown
to you for approval, then sold to vetted buyers. You own your data; you
decide what leaves your machine.

Live at [iolit.dev](https://iolit.dev).

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Nginx + Let's Encrypt on AWS (this box)

## The client

The agent itself lives in [iolit-client](https://github.com/Emad-log/iolit-client).
One audited network call, consent-gated, open source.

## Run locally

```sh
npm install
npm run dev
```

## Deploy

```sh
npm run build
# copy dist/ to /var/www/iolit.dev
```

## License

MIT

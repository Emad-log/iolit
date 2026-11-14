# Iolit

[![CI](https://github.com/Emad-log/iolit/actions/workflows/ci.yml/badge.svg)](https://github.com/Emad-log/iolit/actions/workflows/ci.yml)

Your AI subscription should pay you back.

Iolit is a waitlist site for an open-source agent that captures AI coding
sessions (Claude, Cursor, Codex). You pick pulse, trace, or raw
before anything leaves. One audited network call.

The site is plain static HTML. No framework, no build-time bundle, no
runtime dependencies. The homepage is a playable cave game written in a
single inline script.

## Structure

```
index.html         homepage (waitlist form, install command, cave game)
public/
  preview.html     earlier standalone build of the cave game
  install.sh       curl install script, served at iolit.dev/install.sh
  llms.txt         AI-readable site description
  privacy.html     privacy policy
  terms.html       terms
  robots.txt
  sitemap.xml
  favicon.svg
  og-image.png
  fonts/           self-hosted woff2 (Inter + Fraunces)
test/
  preview.test.js  headless game tests (world gen, mining, snakes, routing)
  site.test.js     guards the install URL and shipped copy strings
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

## Test

```sh
npm test
```

## Install command

The installer is served at `iolit.dev/install.sh`. Do not link to
`iolit.dev/install`: the server answers unknown paths with the homepage,
so that URL would pipe HTML into sh.

```sh
curl -fsSL iolit.dev/install.sh | sh
```

## Related

- [iolit-client](https://github.com/Emad-log/iolit-client): the agent the installer sets up
- [iolit-api](https://github.com/Emad-log/iolit-api): the API it sends approved batches to

## Status

Shelved. Iolit was a waitlist for an idea that did not take off. The site
stays up and the code stays here for anyone who wants to read it.

## License

[MIT](LICENSE)

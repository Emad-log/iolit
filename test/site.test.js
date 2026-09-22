// Guards the primary install CTA and the shipped game hint copy.
// The site serves the homepage for unknown paths, so a bare
// iolit.dev/install URL downloads HTML, not the installer. Every
// reference must point at iolit.dev/install.sh.

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const withInstallCta = [
  "index.html",
  "public/preview.html",
  "public/install.sh",
  "public/llms.txt",
];

for (const f of withInstallCta) {
  test(`${f} points installs at /install.sh`, () => {
    const body = readFileSync(new URL("../" + f, import.meta.url), "utf8");
    assert.match(body, /iolit\.dev\/install\.sh/, "no install.sh URL found");
    assert.doesNotMatch(
      body,
      /iolit\.dev\/install(?!\.sh)/,
      "bare /install URL would serve the homepage instead of the installer"
    );
  });
}

for (const f of ["index.html", "public/preview.html"]) {
  test(`${f} shows the shipped hint copy`, () => {
    const body = readFileSync(new URL("../" + f, import.meta.url), "utf8");
    assert.match(body, /USE ARROW KEYS TO DIG/, "hint copy drifted from the shipped site");
  });
}

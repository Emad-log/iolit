// Runs the preview game headless and checks it keeps working.
// The game froze once because ore state drifted from the grid, so the
// important test here is that the miner never stops moving.

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const noop = () => {};

// Any property not set returns a no-op, which covers the whole canvas API.
function stub(extra = {}) {
  return new Proxy({ ...extra }, {
    get: (t, k) => (k in t ? t[k] : noop),
    set: (t, k, v) => { t[k] = v; return true; },
  });
}

function makeGame() {
  const html = readFileSync(new URL("../public/preview.html", import.meta.url), "utf8");
  const src = html.match(/<script>([\s\S]*?)<\/script>/)[1];

  const ctx = stub({
    createLinearGradient: () => ({ addColorStop: noop }),
    createRadialGradient: () => ({ addColorStop: noop }),
  });
  const el = stub({
    getContext: () => ctx,
    style: stub(),
    classList: stub({ contains: () => false }),
    children: [stub(), stub(), stub()],
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 800, height: 300 }),
  });

  const sandbox = {
    document: stub({
      getElementById: () => el,
      documentElement: stub({ style: stub() }),
      activeElement: null,
      hidden: false,
    }),
    window: stub({
      innerWidth: 1200,
      innerHeight: 800,
      devicePixelRatio: 1,
      matchMedia: () => ({ matches: false }),
    }),
    performance: { now: () => Date.now() },
    requestAnimationFrame: noop,   // frames are driven by hand below
    setTimeout: noop,
    clearTimeout: noop,
    Date, Math, JSON, Uint8Array, Int32Array, Object, Array, String, Number, Boolean,
    isNaN, parseInt, parseFloat, Proxy, Set, Map, Promise, Error, TextDecoder,
  };
  sandbox.globalThis = sandbox;

  // Hand back the internals. This is appended by the test, so the shipped
  // page carries no test hooks.
  const handle = `;({
    step, generate, at, route, miner, forge, lairs, spawnSnake, goDown,
    W: () => W, H: () => H, grid: () => grid,
    gold: () => gold, mined: () => mined, hp: () => hp,
    snakes: () => snakes, downed: () => downed,
    setGold: (v) => { gold = v; }, setMined: (v) => { mined = v; },
    setHp: (v) => { hp = v; },
    SKY, TUNNEL, DIRT, ROCK, BEDROCK, FORGE, ORE,
  })`;

  return runInNewContext(src + handle, sandbox);
}

function run(g, frames) {
  for (let i = 0; i < frames; i++) g.step();
}

test("world is framed by bedrock with sky on top", () => {
  const g = makeGame();
  const W = g.W(), H = g.H();
  for (let ty = 1; ty < H; ty++) {
    assert.equal(g.at(0, ty), g.BEDROCK);
    assert.equal(g.at(W - 1, ty), g.BEDROCK);
  }
  for (let tx = 0; tx < W; tx++) assert.equal(g.at(tx, H - 1), g.BEDROCK);
  assert.equal(g.at(g.forge.tx, g.forge.ty), g.FORGE);
});

test("ore only sits inside the diggable area", () => {
  const g = makeGame();
  const W = g.W(), H = g.H(), grid = g.grid();
  let ore = 0;
  for (let ty = 0; ty < H; ty++) {
    for (let tx = 0; tx < W; tx++) {
      if (grid[ty * W + tx] !== g.ORE) continue;
      ore += 1;
      assert.ok(ty >= 1 && ty <= H - 2, `ore at row ${ty}`);
      assert.ok(tx >= 1 && tx <= W - 2, `ore at col ${tx}`);
    }
  }
  assert.ok(ore > 0, "world should start with ore");
});

test("miner keeps moving and never freezes", () => {
  const g = makeGame();
  const seen = new Set();
  for (let i = 0; i < 4000; i++) {
    g.step();
    if (i % 10 === 0) seen.add(g.miner.tx + "," + g.miner.ty);
  }
  assert.ok(seen.size > 20, `miner only saw ${seen.size} tiles, it is stuck`);
});

test("mining a full run pays out gold", () => {
  const g = makeGame();
  run(g, 6000);
  assert.ok(g.mined() > 0, "no ore was mined");
  assert.ok(g.gold() > 0, "ore never reached the forge");
});

test("ore is replaced so the cave never runs dry", () => {
  const g = makeGame();
  run(g, 6000);
  const W = g.W(), grid = g.grid();
  let ore = 0;
  for (let i = 0; i < grid.length; i++) if (grid[i] === g.ORE) ore += 1;
  assert.ok(ore > 0, "ore ran out");
});

test("running out of health wipes the run", () => {
  const g = makeGame();
  run(g, 2000);
  g.setGold(500);
  g.setMined(99);
  g.setHp(0);
  g.goDown();
  run(g, 72);                    // long enough for the reset, short enough to earn nothing
  assert.equal(g.gold(), 0);
  assert.equal(g.mined(), 0);
  assert.ok(g.hp() > 0, "health should come back");
});

test("route refuses to path through bedrock", () => {
  const g = makeGame();
  assert.equal(g.at(0, 2), g.BEDROCK);
  const p = g.route(g.miner.tx, g.miner.ty, (x, y) => x === 0 && y === 2);
  assert.equal(p, null);
});

test("a snake wakes when the miner digs near a lair", () => {
  const g = makeGame();
  g.lairs.length = 0;
  g.lairs.push({ tx: g.miner.tx + 2, ty: Math.max(2, g.miner.ty + 1) });
  run(g, 60);
  assert.equal(g.snakes().length, 1);
  assert.equal(g.lairs.length, 0);
});

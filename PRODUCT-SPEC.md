# Iolit — Product Spec v1

**One-liner:** Iolit is a client that turns your AI coding sessions into income — you own the data, you approve what's sold, you get paid.

---

## The model (why this works legally)

- Users **own their session data** (Anthropic / OpenAI / Cursor ToS all assign Inputs + Outputs to the user)
- Iolit is a **marketplace with consent**: the user sells *their own* data, not anyone else's
- Open-source client = the receipt. The repo proves capture is local and the network boundary is one audited call

## Architecture

```
capture (local, any code)  →  payload builder (THE audited module)  →  user preview/consent  →  send()  →  marketplace
```

**Trust rule:** all network calls go through exactly **one module** — `send()`.
- The payload schema is public, tiny, field-by-field
- CI enforces: a test fails if a second network call site is ever added
- "Audit the one call" is the pitch

## The audited module (the only code that must be boring)

- `buildPayload(session) -> JSON` — pure function, no side effects, no IO
- Schema: `model, duration, tokens_in, tokens_out, task_type, success, tools_used, hour_of_day`
- Never raw content, no file paths, no prompts — unless the user explicitly approves a batch with content
- Exhaustively unit-tested (it's the trust surface)

## Consent flow (the product feature)

1. Client detects sessions locally (Claude/Cursor/Codex local files)
2. Builds the payload preview **on-device**
3. Shows the user exactly what will be sent: "This batch: 12 sessions, 2.1 MB, $0.42"
4. User approves / edits / rejects per batch
5. Only approved batches ever leave the machine

## Buyer rules (ToS compliance)

- Personal accounts only — enterprise/work sessions belong to the employer
- No selling to labs training models that compete with Claude/Cursor/Codex (competitive-model clauses)
- Buyers sign contracts: no re-identification, no resale

## Client v1 scope (YAGNI — nothing else)

- [ ] Local session detection (Claude + Cursor first)
- [ ] `buildPayload()` — pure, typed, tested
- [ ] One `send()` — the only network call
- [ ] Preview/consent screen (CLI for v1)
- [ ] CI test: exactly one network call site
- [ ] README: "here is the one call"

## Engineering rules (Ed's standing rules)

- Simplest code that works; fewer concepts > more lines
- No premature abstraction — add the second provider when the second provider exists
- Stdlib-first, zero deps unless proven necessary
- Types over comments
- Errors are data — fail loudly, structured
- The `send()` module is the most boring code in the repo — that's the point

## Non-goals (v1)

- No web dashboard, no plugin system, no multi-provider abstraction
- No "anonymization engine" — transparency + consent replaces scrubbing
- No enterprise/team features

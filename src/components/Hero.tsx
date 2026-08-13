import { useState } from "react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError(false);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero" }),
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    }
  };

  const copyInstall = () => {
    navigator.clipboard?.writeText("curl -fsSL iolit.dev/install | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-20 pb-10 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Stats bar */}
        <div className="rise d1 mb-8 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60 font-mono">
          3 tools · 1 audited call · MIT licensed
        </div>

        <h1 className="rise d2 font-serif text-[44px] sm:text-[56px] md:text-[64px] leading-[1.04] tracking-[-0.025em] font-500 mb-6">
          Your AI subscription
          <br />
          should <span className="accent-text italic" style={{ paddingRight: '0.3em' }}>pay you back.</span>
        </h1>

        <p className="rise d3 text-[17px] text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          A silent agent watches your Claude, Cursor, and Codex sessions,
          packs the metadata, and pays you every month.
        </p>

        {submitted ? (
          <div className="rise d4 flex items-center justify-center gap-3 py-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="text-[15px] font-medium">
              You're on the list. We'll email you when it's time to install.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rise d4 flex items-center gap-2 max-w-md w-full mx-auto">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-5 text-[14px] rounded-full border border-border bg-card/80 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted-foreground/50"
            />
            <button type="submit" className="btn-pill">
              Join waitlist
            </button>
          </form>
        )}

        {error && (
          <p className="rise text-[12px] text-destructive mt-3">
            Something went wrong. Try again, or email us directly.
          </p>
        )}

        <p className="rise d5 text-[12px] text-muted-foreground/60 mt-4">
          No spam. We email once.
        </p>

        {/* Install command with copy button */}
        <div className="rise d5 mt-12 flex flex-col items-center gap-4">
          <button onClick={copyInstall} className="code-block group" style={{ cursor: "pointer" }}>
            <span className="dollar">$</span>
            <span className="cmd">curl -fsSL iolit.dev/install | sh</span>
            <span className="ml-2 text-[11px] uppercase tracking-wider opacity-50 group-hover:opacity-100 transition-opacity">
              {copied ? "copied" : "copy"}
            </span>
          </button>
          <a
            href="https://github.com/Emad-log/iolit"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 012.5-.34c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
            Read the open-source client
          </a>
        </div>
      </div>

      {/* bottom strip */}
      <div className="relative z-10 mt-12 w-full max-w-6xl mx-auto px-0 pb-2">
        <div className="flex items-center justify-between text-[11px] text-muted-foreground/50 font-mono">
          <span className="uppercase tracking-[0.14em]">Claude · Cursor · Codex</span>
          <span className="hidden sm:inline h-px flex-1 mx-6 bg-border/40" />
          <span className="uppercase tracking-[0.14em]">macOS + Linux</span>
        </div>
      </div>
    </section>
  );
};

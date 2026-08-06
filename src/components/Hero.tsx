import { useEffect, useState } from "react";

const Sparkline = () => (
  <svg viewBox="0 0 300 80" className="w-full h-16" preserveAspectRatio="none">
    <defs>
      <linearGradient id="sparkStroke" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
      <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      className="spark-area"
      d="M0 64 C 25 58, 45 66, 70 52 S 120 40, 150 44 S 210 26, 240 30 S 285 16, 300 18 L 300 80 L 0 80 Z"
    />
    <path
      className="spark-line"
      d="M0 64 C 25 58, 45 66, 70 52 S 120 40, 150 44 S 210 26, 240 30 S 285 16, 300 18"
    />
    <circle cx="300" cy="18" r="4" fill="#7c3aed" />
    <circle cx="300" cy="18" r="8" fill="#7c3aed" opacity="0.18" />
  </svg>
);

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [step, setStep] = useState(0);
  const steps = [
    { label: "Session captured", value: "Claude" },
    { label: "PII screened", value: "locally" },
    { label: "Metadata packed", value: "2.1 KB" },
    { label: "Offered to buyers", value: "+$0.42" },
  ];

  // Streaming demo rows — animate the machinery, not the money
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % steps.length), 2200);
    return () => clearInterval(t);
  }, []);

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

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Violet aurora */}
      <div className="bloom">
        <div className="bloom-1" />
        <div className="bloom-2" />
        <div className="bloom-3" />
        <div className="bloom-4" />
      </div>
      {/* Concentric rings */}
      <div className="rings" />

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-10 px-6 pt-24 pb-10 max-w-6xl mx-auto w-full">
        {/* Left: copy */}
        <div className="flex-1 text-center lg:text-left lg:pl-2">
          <div className="rise d1 flex items-center gap-3 justify-center lg:justify-start mb-6">
            <span className="live-dot h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[12px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Now accepting early access
            </span>
          </div>

          <h1 className="rise d2 font-serif text-[40px] md:text-[50px] lg:text-[54px] leading-[1.06] tracking-[-0.02em] font-500 mb-5">
            Your AI subscription
            <br />
            should <span className="accent-text italic">pay you back.</span>
          </h1>

          <p className="rise d3 text-[16px] text-muted-foreground leading-relaxed mb-9 max-w-sm mx-auto lg:mx-0">
            A silent agent watches your Claude, Cursor, and Codex sessions,
            strips the PII, packs the metadata, and pays you every month.
          </p>

          {submitted ? (
            <div className="rise d4 flex items-center justify-center lg:justify-start gap-3 py-2">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-[15px] font-medium">
                You're on the list. We'll email you when it's time to install.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rise d4 flex items-center gap-2 max-w-sm w-full mx-auto lg:mx-0">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-5 text-[14px] rounded-full border border-border bg-card/80 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted-foreground/50"
              />
              <button type="submit" className="btn-pill">
                Join waitlist →
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

          <div className="rise d5 mt-6 flex flex-col items-center lg:items-start gap-3">
            <code className="text-[13px] px-4 py-2 rounded-full bg-secondary/70 border border-border font-mono">
              curl -fsSL iolit.dev/install | sh
            </code>
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

        {/* Right: the earnings card */}
        <div className="flex-1 flex justify-center lg:justify-end lg:pr-4 w-full">
          <div className="earn-card">
            {/* header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="live-dot h-2 w-2 rounded-full bg-green-500" />
                <span className="text-[13px] font-medium">Iolit agent</span>
                <span className="text-[12px] text-muted-foreground">· active</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70 border border-border rounded-full px-2.5 py-1">
                Live demo
              </span>
            </div>

            {/* honest earnings number */}
            <div className="mb-4">
              <div className="flex items-end gap-1">
                <span className="font-serif text-[26px] font-500 text-muted-foreground mb-1.5">$</span>
                <span className="font-serif text-[52px] font-500 leading-none tracking-[-0.02em] tabular-nums">
                  43.80
                </span>
              </div>
              <span className="text-[12px] text-muted-foreground uppercase tracking-[0.14em]">
                avg earned / month, beta members
              </span>
            </div>

            {/* sparkline */}
            <div className="mb-5">
              <Sparkline />
            </div>

            {/* streaming activity rows — the demo */}
            <div className="space-y-2.5">
              {steps.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between text-[13px] transition-opacity duration-500 ${
                    i === step ? "opacity-100" : "opacity-35"
                  }`}
                >
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-medium flex items-center gap-1.5">
                    {s.value} <Check />
                  </span>
                </div>
              ))}
            </div>

            {/* footer */}
            <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between">
              <span className="text-[12px] text-muted-foreground">Payouts</span>
              <span className="text-[12px] font-medium text-primary">Monthly · Stripe</span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom row */}
      <div className="relative z-10 px-6 pb-7">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[12px] text-muted-foreground/70">
          <span className="uppercase tracking-[0.14em]">Claude · Cursor · Codex · GitHub Copilot</span>
          <span className="hidden sm:inline h-px flex-1 mx-6 bg-border/60" />
          <span className="uppercase tracking-[0.14em]">macOS + Linux</span>
        </div>
      </div>
    </section>
  );
};

const Check = () => (
  <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

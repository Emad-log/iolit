import { useState } from "react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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
    <section className="relative px-6 pt-16 pb-24 overflow-hidden">
      {/* Violet light bloom */}
      <div className="bloom">
        <div className="bloom-1" />
        <div className="bloom-2" />
        <div className="bloom-3" />
      </div>
      {/* Composition grid — concentric rings */}
      <div className="rings" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-5 mb-8">
          <span className="h-px w-12 bg-border" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
            Privacy first · Open source
          </span>
          <span className="h-px w-12 bg-border" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[42px] md:text-[54px] leading-[1.06] tracking-[-0.02em] font-500 mb-6">
          Your AI subscription
          <br />
          should <span className="accent-text italic">pay you back.</span>
        </h1>

        {/* Subline */}
        <p className="text-[16px] text-muted-foreground leading-relaxed mb-10 max-w-sm mx-auto">
          Install a lightweight agent. It captures anonymized data from your
          Claude, Cursor, and Codex sessions. You earn monthly.
        </p>

        {/* Waitlist */}
        {submitted ? (
          <div className="flex items-center justify-center gap-3 py-3">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="text-[15px] font-medium">
              You're on the list. We'll email you when it's time to install.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 max-w-sm mx-auto">
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
          <p className="text-[12px] text-destructive mt-3">
            Something went wrong. Try again, or email us directly.
          </p>
        )}

        <p className="text-[12px] text-muted-foreground/60 mt-4">
          No spam. We email once.
        </p>
      </div>
    </section>
  );
};

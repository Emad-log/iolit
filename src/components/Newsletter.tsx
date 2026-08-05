import { useState } from "react";

export const Newsletter = () => {
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
        body: JSON.stringify({ email, source: "bottom" }),
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    }
  };

  return (
    <section id="waitlist" className="relative px-6 py-24 overflow-hidden">
      <div className="bloom">
        <div className="bloom-1" style={{ top: "10%" }} />
        <div className="bloom-2" style={{ top: "15%" }} />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h2 className="font-serif text-[36px] tracking-[-0.02em] font-500 leading-[1.1] mb-3">
          Ready to start <span className="accent-text italic">earning?</span>
        </h2>

        <p className="text-[15px] text-muted-foreground mb-8 max-w-sm mx-auto">
          Early waitlist members get a{" "}
          <span className="text-primary font-medium">2× earnings bonus</span>{" "}
          for the first three months.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3">
            <svg className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="text-[15px] font-medium">
              You're on the list. We'll email once.
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
              Claim my spot →
            </button>
          </form>
        )}

        {error && (
          <p className="text-[12px] text-destructive mt-3">
            Something went wrong. Try again, or email us directly.
          </p>
        )}
      </div>
    </section>
  );
};

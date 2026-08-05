import { useState } from "react";

export const Cta = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="earnings" className="px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left — Earnings estimate */}
          <div>
            <h2 className="font-serif text-[36px] tracking-[-0.02em] font-500 mb-2 leading-tight">
              Your subscription,
              <br />
              subsidized.
            </h2>
            <p className="text-[15px] text-muted-foreground mb-10 max-w-xs">
              Based on current market rates for anonymized AI session data.
            </p>

            <div>
              <div className="flex items-center justify-between py-4 border-t border-border">
                <span className="text-[14px] text-muted-foreground">
                  Your AI subscription
                </span>
                <span className="font-serif text-[18px] font-500 tabular-nums">
                  $20/mo
                </span>
              </div>
              <div className="flex items-center justify-between py-4 border-t border-border">
                <span className="text-[14px] text-muted-foreground">
                  Avg. sessions / month
                </span>
                <span className="font-serif text-[18px] font-500 tabular-nums">
                  ~500
                </span>
              </div>
              <div className="flex items-center justify-between py-4 border-t border-b border-border">
                <span className="text-[14px] text-muted-foreground">
                  Your estimated earnings
                </span>
                <span className="font-serif text-[18px] font-500 text-primary tabular-nums">
                  $35–$55/mo
                </span>
              </div>
            </div>
          </div>

          {/* Right — Waitlist card */}
          <div id="waitlist" className="p-8 rounded-3xl bg-card border border-border">
            <h3 className="font-serif text-[22px] font-500 mb-2">
              Join the waitlist
            </h3>
            <p className="text-[14px] text-muted-foreground mb-6">
              Be first in line. Get a{" "}
              <span className="text-primary font-medium">2x earnings bonus</span>{" "}
              for the first 3 months.
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 py-3">
                <svg
                  className="h-5 w-5 text-primary flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-[15px] font-medium">
                  You're on the list.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 px-5 text-[15px] rounded-full border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-muted-foreground/50"
                />
                <button type="submit" className="btn-pill btn-pill-primary w-full">
                  Claim early access →
                </button>
                <p className="text-[13px] text-muted-foreground/60 text-center mt-1">
                  Join 2,000+ developers already on the list
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

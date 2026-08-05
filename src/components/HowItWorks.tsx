export const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Install", desc: "Download for macOS or Linux. Runs silently. No config." },
    { num: "02", title: "Capture", desc: "Detects your Claude, Cursor, and Codex sessions automatically." },
    { num: "03", title: "Strip", desc: "All PII removed locally before anything leaves your machine." },
    { num: "04", title: "Earn", desc: "Monthly payouts via Stripe. Based on session quality and volume." },
  ];

  return (
    <section id="how" className="px-6 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-[28px] tracking-[-0.02em] font-500 mb-10">
          How it works
        </h2>

        <div>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid grid-cols-[32px_1fr] gap-6 py-5 ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              <span className="font-serif text-[14px] font-500 text-primary/40 tabular-nums pt-0.5">
                {step.num}
              </span>
              <div>
                <h3 className="font-serif text-[17px] font-500 mb-0.5">
                  {step.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

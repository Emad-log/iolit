export const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Install", desc: "A tiny agent for macOS or Linux. Sixty seconds, silent in the background." },
    { num: "02", title: "Capture", desc: "It notices your Claude, Cursor, and Codex sessions and logs them as anonymized metadata — never your code." },
    { num: "03", title: "Earn", desc: "Monthly payouts via Stripe, sized by session quality and volume. Enough to cover your subscription, then some." },
  ];

  return (
    <section id="how" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-[30px] md:text-[32px] tracking-[-0.02em] font-500 mb-12 text-center">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.num} className="text-center md:text-left">
              <span className="font-serif text-[13px] font-500 text-primary/40 tabular-nums block mb-3">
                {step.num}
              </span>
              <h3 className="font-serif text-[20px] font-500 mb-2">{step.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

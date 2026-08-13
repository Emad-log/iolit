export const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Install", desc: "A tiny agent for macOS or Linux. Sixty seconds, silent in the background." },
    { num: "02", title: "Capture", desc: "It notices your Claude, Cursor, and Codex sessions and logs them as metadata, never your code." },
    { num: "03", title: "Earn", desc: "Monthly payouts via Stripe, sized by session quality and volume. Enough to cover your subscription, then some." },
  ];

  return (
    <section id="how" className="px-6 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Asymmetric: heading left-aligned, not centered */}
        <h2 className="font-serif text-[28px] md:text-[36px] tracking-[-0.025em] font-500 mb-16">
          How it works
        </h2>

        {/* Vertical stack, not grid. Numbers are large serif. */}
        <div className="space-y-16 max-w-2xl">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-8 ${i === 1 ? "md:pl-20" : ""} ${i === 2 ? "md:pl-40" : ""}`}
            >
              <span className="step-num flex-shrink-0">{step.num}</span>
              <div className="pt-2">
                <h3 className="font-serif text-[22px] md:text-[24px] font-500 mb-2">{step.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

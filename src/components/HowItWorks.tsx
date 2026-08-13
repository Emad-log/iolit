export const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Install",
      desc: "A tiny agent for macOS or Linux. Sixty seconds, silent in the background.",
      meta: "npm i -g iolit",
    },
    {
      num: "02",
      title: "Capture",
      desc: "Detects Claude, Cursor, and Codex sessions. Extracts metadata only, never your code.",
      meta: "10 fields · no prompts · no paths",
    },
    {
      num: "03",
      title: "Earn",
      desc: "Monthly payouts via Stripe, sized by session quality and volume.",
      meta: "~~$20/mo subscription~~ paid by your data",
    },
  ];

  return (
    <section id="how" className="px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-[28px] md:text-[36px] tracking-[-0.025em] font-500 mb-16">
          How it works
        </h2>

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
                <p className="text-[12px] text-muted-foreground/60 mt-3 font-mono">
                  {step.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

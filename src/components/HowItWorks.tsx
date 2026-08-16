import { GemMark } from "./GemMark";

export const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Install",
      desc: "A tiny agent for macOS or Linux. Sixty seconds, silent in the background.",
      meta: "curl -fsSL iolit.dev/install | sh",
    },
    {
      num: "02",
      title: "Pick a tier",
      desc: "Pulse is loop stats. Trace adds redacted tool args and results. Raw also includes prompts. You choose every batch.",
      meta: "pulse · trace · raw",
    },
    {
      num: "03",
      title: "Earn",
      desc: "Approve the preview. One audited network call. More you share, more you get paid.",
      meta: "more data = more $",
    },
  ];

  const cuts = [
    { tone: "pulse" as const, name: "pulse", line: "stats only" },
    { tone: "trace" as const, name: "trace", line: "tool args, paths scrubbed" },
    { tone: "raw" as const, name: "raw", line: "also prompts" },
  ];

  return (
    <section id="how" className="px-6 pt-8 pb-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-[28px] md:text-[36px] tracking-[-0.025em] font-500 mb-16">
          How it works
        </h2>

        <div className="space-y-16 max-w-2xl">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-8">
              <span className="step-num flex-shrink-0">{step.num}</span>
              <div className="pt-2">
                <h3 className="font-serif text-[22px] md:text-[24px] font-500 mb-2">{step.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">{step.desc}</p>
                {step.num === "02" ? (
                  <div className="mt-6 flex gap-8">
                    {cuts.map((c) => (
                      <div key={c.name} className="text-left">
                        <GemMark tone={c.tone} className="w-6 h-6" />
                        <p className="text-[11px] uppercase tracking-[0.12em] font-mono mt-2">{c.name}</p>
                        <p className="text-[12px] text-muted-foreground/70 mt-1">{c.line}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[12px] text-muted-foreground/60 mt-3 font-mono">
                    {step.meta}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

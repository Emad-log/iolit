export const About = () => {
  const tools = ["Claude", "Cursor", "Codex", "GitHub Copilot"];

  return (
    <section className="px-6 py-10">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5 font-medium">
          Works with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {tools.map((tool, i) => (
            <span key={tool} className="flex items-center gap-x-8">
              <span className="font-serif text-[20px] font-500 text-foreground/70">
                {tool}
              </span>
              {i < tools.length - 1 && (
                <span className="text-muted-foreground/30 text-[16px]">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

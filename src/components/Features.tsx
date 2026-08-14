export const Features = () => {
  const guarantees = [
    { text: "No source code uploaded", icon: "code" },
    { text: "No personal identifiers transmitted", icon: "id" },
    { text: "No keystroke logging or screenshots", icon: "eye" },
    { text: "Pause or delete anytime", icon: "power" },
  ];

  const icons: Record<string, string> = {
    code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    id: "M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
    eye: "M3 3l18 18M10.5 10.5a3 3 0 014.2 4.2M9.9 5.1A9.5 9.5 0 0112 5c5 0 9 4 10 7a13 13 0 01-2.2 3.3M6.1 6.1A13 13 0 002 12c1 3 5 7 10 7a9.5 9.5 0 004.9-1.3",
    power: "M12 3v9M7.5 6.5a7 7 0 109 0",
  };

  return (
    <section id="privacy" className="full-bleed-inverted">
      <div className="px-6 py-32" style={{ background: "hsl(30 22% 8%)" }}>
        <div className="max-w-3xl mx-auto">
          {/* Asymmetric: heading left, copy right */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-[12px] uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(262 30% 65%)" }}>
                The ledger
              </p>
              <h2 className="font-serif text-[36px] md:text-[44px] tracking-[-0.025em] font-500 leading-[1.08]" style={{ color: "hsl(38 40% 96%)" }}>
                Privacy is architecture,
                <br />
                not a promise.
              </h2>
            </div>
            <div className="md:pt-4">
              <p className="text-[16px] leading-relaxed" style={{ color: "hsl(38 20% 65%)" }}>
                The client is MIT-licensed and on GitHub. Read every line.
                Verify there are no hidden calls home. The only network call
                is the one you approve.
              </p>
            </div>
          </div>

          {/* Ledger entries: stamp + text */}
          <div className="max-w-2xl mx-auto">
            {guarantees.map((g) => (
              <div key={g.text} className="ledger-row">
                <div className="ledger-stamp">
                  <svg viewBox="0 0 24 24">
                    <path d={icons[g.icon]} />
                  </svg>
                </div>
                <span className="text-[15px]" style={{ color: "hsl(38 30% 88%)" }}>
                  {g.text}
                </span>
              </div>
            ))}
          </div>

          {/* GitHub link at bottom */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/Emad-log/iolit-client"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] transition-colors"
              style={{ color: "hsl(262 30% 65%)" }}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 012.5-.34c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
              Audit the source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

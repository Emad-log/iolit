export const Features = () => {
  const guarantees = [
    "No source code uploaded",
    "No personal identifiers transmitted",
    "No keystroke logging or screenshots",
    "Pause or delete anytime",
  ];

  return (
    <section id="privacy" className="px-6 py-24 bg-secondary/40">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-[30px] md:text-[32px] tracking-[-0.02em] font-500 mb-4 leading-tight">
          Privacy is architecture,
          <br />
          not a promise.
        </h2>
        <p className="text-[15px] text-muted-foreground mb-10 max-w-md mx-auto">
          The client is MIT-licensed and on GitHub. Read every line. Verify
          there are no hidden calls home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 max-w-md mx-auto text-left">
          {guarantees.map((g) => (
            <div key={g} className="flex items-center gap-2.5">
              <svg className="h-3.5 w-3.5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.4 7.4L12 17.2 5.6 21.4 8 14 2 9.4h7.6z" />
              </svg>
              <span className="text-[14px]">{g}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

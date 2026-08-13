import { GemMark } from "./GemMark";

export const Footer = () => {
  return (
    <footer className="relative px-6 py-10 border-t border-border overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      >
        <span className="font-serif text-[120px] md:text-[200px] font-500 tracking-tight">
          iolit
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GemMark className="w-4 h-4" />
            <span className="font-serif text-[15px] font-500">Iolit</span>
            <span className="text-[12px] text-muted-foreground/70 font-mono">
              © 2026 · open source
            </span>
          </div>
          <div className="flex items-center gap-5 text-[13px] text-muted-foreground font-mono">
            <a href="/llms.txt" className="hover:text-foreground transition-colors">llms.txt</a>
            <a href="https://github.com/Emad-log/iolit" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="mailto:hello@iolit.dev" className="hover:text-foreground transition-colors">Email</a>
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

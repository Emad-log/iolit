import { GemMark } from "./GemMark";

export const Footer = () => {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GemMark className="w-4 h-4" />
            <span className="font-serif text-[15px] font-500">Iolit</span>
            <span className="text-[12px] text-muted-foreground/70">
              © 2026 · Privacy by design
            </span>
          </div>
          <div className="flex items-center gap-5 text-[13px] text-muted-foreground">
            <a href="https://github.com/Emad-log/Lolit" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="mailto:hello@iolit.dev" className="hover:text-foreground transition-colors">Email</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

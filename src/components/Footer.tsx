export const Footer = () => {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-6">
          <span className="font-serif text-[15px] font-500">Iolit</span>
          <span className="text-[12px] text-muted-foreground/70">
            © 2026 · Privacy by design
          </span>
        </div>
        <div className="flex items-center gap-5 text-[13px] text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors">X</a>
          <a href="#" className="hover:text-foreground transition-colors">Email</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

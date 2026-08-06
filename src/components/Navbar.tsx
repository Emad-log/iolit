import { useState } from "react";
import { GemMark } from "./GemMark";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-5 pt-4">
      <nav className="max-w-6xl mx-auto h-12 px-5 flex items-center justify-between rounded-full bg-card/70 backdrop-blur-md border border-border shadow-[0_1px_2px_rgba(30,20,10,0.04)]">
        <a href="/" className="flex items-center gap-2">
          <GemMark />
          <span className="font-serif text-[16px] font-500 tracking-tight">Iolit</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {["How", "Privacy", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#waitlist"
            className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Join waitlist →
          </a>
        </div>

        <button
          className="md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <nav className="md:hidden max-w-6xl mx-auto mt-2 px-6 py-4 rounded-2xl bg-card border border-border flex flex-col gap-2">
          {["How", "Privacy", "FAQ"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)}
              className="text-[14px] text-muted-foreground py-1.5">
              {item}
            </a>
          ))}
          <a href="#waitlist" onClick={() => setMobileOpen(false)} className="text-[14px] font-medium text-primary py-1.5">
            Join waitlist →
          </a>
        </nav>
      )}
    </header>
  );
};

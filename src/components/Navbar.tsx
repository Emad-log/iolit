import { useState } from "react";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 px-6 pt-6">
      <nav className="max-w-xl mx-auto flex items-center justify-between">
        <a href="/" className="font-serif text-[17px] font-500 tracking-tight">
          Iolit
        </a>

        <div className="hidden md:flex items-center gap-7">
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

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <nav className="md:hidden max-w-xl mx-auto mt-4 px-6 py-4 rounded-2xl bg-card border border-border flex flex-col gap-2">
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

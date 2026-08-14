export const GemMark = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="iolit-gem" x1="0" y1="0" x2="24" y2="24">
        <stop stopColor="#a78bfa" />
        <stop offset="1" stopColor="#6d28d9" />
      </linearGradient>
    </defs>
    <path d="M12 3 L19 9 L12 21 L5 9 Z" fill="url(#iolit-gem)" />
    <path d="M12 3 L12 12 L5 9 Z" fill="rgba(255,255,255,0.25)" />
    <path d="M12 3 L12 12 L19 9 Z" fill="rgba(255,255,255,0.1)" />
    <path d="M12 12 L5 9 L12 21 Z" fill="rgba(0,0,0,0.08)" />
    <path d="M12 12 L19 9 L12 21 Z" fill="rgba(0,0,0,0.03)" />
  </svg>
);

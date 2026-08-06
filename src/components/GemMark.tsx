export const GemMark = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="iolit-gem" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="50%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#5b21b6" />
      </linearGradient>
    </defs>
    <path
      d="M12 2.5 L20.5 8.5 L17.5 21 L6.5 21 L3.5 8.5 Z"
      fill="url(#iolit-gem)"
      strokeLinejoin="round"
    />
    <path d="M12 2.5 L12 21" stroke="rgba(255,255,255,0.4)" strokeWidth="0.9" />
    <path d="M12 2.5 L20.5 8.5 L12 12 Z" fill="rgba(255,255,255,0.18)" />
    <path d="M12 2.5 L3.5 8.5 L12 12 Z" fill="rgba(255,255,255,0.08)" />
  </svg>
);

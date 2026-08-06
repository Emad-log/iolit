export const Crystal = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="cr-base" x1="100" y1="10" x2="100" y2="250" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="40%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#3b0764" />
      </linearGradient>
      <linearGradient id="cr-left" x1="0" y1="0" x2="100" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#4c1d95" />
      </linearGradient>
      <linearGradient id="cr-right" x1="200" y1="0" x2="100" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#c4b5fd" />
        <stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
      <linearGradient id="cr-hi" x1="100" y1="0" x2="100" y2="130" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>

    <ellipse cx="100" cy="245" rx="55" ry="10" fill="#7c3aed" opacity="0.12" filter="blur(8px)" />

    <g>
      <path
        d="M100 15 L155 60 L145 220 L100 250 L55 220 L45 60 Z"
        fill="url(#cr-base)"
        stroke="rgba(76,29,149,0.3)"
        strokeWidth="1"
      />
      <path d="M100 15 L45 60 L55 220 L100 250 L100 15" fill="url(#cr-left)" opacity="0.9" />
      <path d="M100 15 L155 60 L145 220 L100 250 L100 15" fill="url(#cr-right)" opacity="0.85" />
      <path d="M100 15 L45 60 L100 85 Z" fill="rgba(255,255,255,0.14)" />
      <path d="M100 15 L155 60 L100 85 Z" fill="rgba(255,255,255,0.28)" />
      <path d="M100 15 L100 250" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <path d="M100 15 L155 60 L145 220 L100 250" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M100 15 L45 60 L55 220 L100 250" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
      <path d="M45 60 L155 60" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <ellipse cx="100" cy="55" rx="28" ry="14" fill="url(#cr-hi)" opacity="0.5" filter="blur(6px)" />
      <path d="M100 85 L125 105 L100 125 Z" fill="rgba(255,255,255,0.1)" />
      <path d="M100 125 L115 140 L100 160 Z" fill="rgba(255,255,255,0.06)" />
      <path d="M100 85 L75 105 L100 125 Z" fill="rgba(255,255,255,0.04)" />
    </g>

    <g opacity="0.9">
      <path d="M100 4 L102 14 L112 16 L102 18 L100 28 L98 18 L88 16 L98 14 Z" fill="#e9d5ff" />
      <circle cx="100" cy="16" r="3" fill="#fff" opacity="0.9" />
    </g>
  </svg>
);

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Icon = {
  bolt: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M13 2 4.5 13.5H11l-1 8.5 9-12H12.5l.5-8Z" />
    </svg>
  ),
  drop: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z" />
    </svg>
  ),
  target: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  ),
  hospital: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 21V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15" />
      <path d="M3 21h18" />
      <path d="M12 7v4M10 9h4" />
      <path d="M9 21v-4h6v4" />
    </svg>
  ),
  hand: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M8 13V5a1.5 1.5 0 0 1 3 0v6" />
      <path d="M11 11V4.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M14 11V6a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-1.5a4 4 0 0 1-3.1-1.5L4 16.5A1.6 1.6 0 0 1 6.3 14.3L8 16" />
    </svg>
  ),
  database: (p: IconProps) => (
    <svg {...base(p)}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
      <path d="M5 5.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6" />
      <path d="M5 11.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  ),
  arrow: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  truck: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </svg>
  ),
  pharmacy: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 8v6M9 11h6" />
    </svg>
  ),
  home: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="m4 11 8-6 8 6" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </svg>
  ),
  clinic: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M8 21V8l4-4 4 4v13" />
      <path d="M4 21h16" />
      <path d="M12 11v4M10 13h4" />
    </svg>
  ),
  scale: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3v18M5 7h14" />
      <path d="M5 7 2.5 13a3 3 0 0 0 5 0L5 7ZM19 7l-2.5 6a3 3 0 0 0 5 0L19 7Z" />
    </svg>
  ),
  doc: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v4h4" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  ),
  cog: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  ),
  globe: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  pin: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  ),
};

export type IconName = keyof typeof Icon;

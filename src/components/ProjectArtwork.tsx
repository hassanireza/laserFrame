import type { ProjectArt } from "../types";

interface ProjectArtworkProps {
  art: ProjectArt;
}

export function ProjectArtwork({ art }: ProjectArtworkProps) {
  const [start, end] = art.stops;

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={art.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset={start.offset} stopColor={start.color} stopOpacity={1} />
          <stop offset={end.offset} stopColor={end.color} stopOpacity={1} />
        </linearGradient>
      </defs>

      {art.variant === "wave" && (
        <>
          <circle cx="100" cy="100" r="80" fill={`url(#${art.gradientId})`} opacity="0.2" />
          <path
            d="M50 150 Q100 50 150 150"
            stroke={start.color}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            className="wave-path"
          />
          <circle cx="100" cy="150" r="10" fill="#fff" className="wave-ball" />
          <rect x="80" y="120" width="40" height="10" rx="5" fill="#fff" opacity="0.5" className="wave-rect" />
        </>
      )}

      {art.variant === "cyber" && (
        <>
          <rect x="60" y="60" width="80" height="80" rx="10" fill={`url(#${art.gradientId})`} opacity="0.2" />
          <circle cx="100" cy="100" r="20" fill={start.color} className="cyber-core" />
          <circle cx="100" cy="100" r="30" stroke={start.color} strokeWidth="2" fill="none" className="cyber-ring" />
          <circle
            cx="100"
            cy="100"
            r="40"
            stroke={end.color}
            strokeWidth="1"
            fill="none"
            className="cyber-ring-slow"
          />
          <path d="M100 40 L100 20" stroke="#fff" strokeWidth="2" className="cyber-line" />
          <path d="M100 160 L100 180" stroke="#fff" strokeWidth="2" className="cyber-line" />
        </>
      )}

      {art.variant === "urban" && (
        <>
          <rect x="50" y="50" width="100" height="100" rx="15" fill={`url(#${art.gradientId})`} opacity="0.2" />
          <path
            d="M60 140 L100 100 L140 140"
            stroke={start.color}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="urban-shape"
          />
          <circle cx="100" cy="100" r="15" fill={end.color} className="urban-dot" />
          <rect x="85" y="145" width="30" height="5" rx="2" fill="#fff" opacity="0.6" className="urban-shadow" />
        </>
      )}

      {art.variant === "void" && (
        <>
          <circle cx="100" cy="100" r="70" fill={`url(#${art.gradientId})`} opacity="0.15" />
          <path d="M100 30 L130 90 L70 90 Z" fill={start.color} className="void-triangle" />
          <circle cx="100" cy="100" r="10" fill="#fff" className="void-star" />
          <circle cx="100" cy="100" r="20" stroke={end.color} strokeWidth="2" fill="none" className="void-orbit" />
          <circle
            cx="100"
            cy="100"
            r="30"
            stroke={start.color}
            strokeWidth="1"
            fill="none"
            className="void-orbit-slow"
          />
        </>
      )}
    </svg>
  );
}

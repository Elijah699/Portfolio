import React from 'react';

// The "dC" (devCreed) hexagon mark.
const Logo = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
    <defs>
      <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#b77bff" />
        <stop offset="100%" stopColor="#ff7ad9" />
      </linearGradient>
    </defs>
    <path
      d="M20 2.5 35.2 11.25v17.5L20 37.5 4.8 28.75v-17.5Z"
      fill="none"
      stroke="url(#logo-gradient)"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <text
      x="20"
      y="25"
      textAnchor="middle"
      fontFamily="'Space Grotesk', sans-serif"
      fontWeight="700"
      fontSize="13"
      fill="#eeeaf6"
    >
      dC
    </text>
  </svg>
);

export default Logo;


import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 60"
      className={className}
      fill="none"
      aria-label="MegaPlus CO. LTD Logo"
    >
      {/* Icon Graphic: A stylized arrow/box combination */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
      </defs>
      
      {/* Abstract Shape: Represents movement and stability (Container/Arrow) */}
      <path 
        d="M25 10 L45 20 L45 45 L25 55 L5 45 L5 20 Z" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        fill="none"
      />
      
      {/* Inner Arrow (Orange) - Represents Speed/Forward Motion */}
      <path 
        d="M25 18 L38 25 L38 40 L25 47 L12 40 L12 25 Z" 
        fill="#F97316"
      />
      
      {/* Decorative lines suggesting speed */}
      <path d="M50 15 H60" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 25 H65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Text Group */}
      <g transform="translate(75, 0)">
        {/* 'Mega' - Uses currentColor to adapt to header/footer text colors */}
        <text 
          x="0" 
          y="38" 
          fontFamily="Arial, sans-serif" 
          fontWeight="800" 
          fontSize="32" 
          fill="currentColor"
          style={{ letterSpacing: '-0.02em' }}
        >
          MEGA
        </text>
        
        {/* 'Plus' - Always Orange */}
        <text 
          x="98" 
          y="38" 
          fontFamily="Arial, sans-serif" 
          fontWeight="800" 
          fontSize="32" 
          fill="#F97316"
          style={{ letterSpacing: '-0.02em' }}
        >
          PLUS
        </text>

        {/* 'CO. LTD' - Smaller subtext */}
        <text 
          x="2" 
          y="54" 
          fontFamily="Arial, sans-serif" 
          fontWeight="600" 
          fontSize="10" 
          fill="currentColor" 
          opacity="0.8"
          letterSpacing="4"
        >
          CO. LTD
        </text>
      </g>
    </svg>
  );
};

export default Logo;

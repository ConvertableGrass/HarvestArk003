import React from 'react';

interface DigitalFingerprintLogoProps {
  size?: number;
  className?: string;
}

export const DigitalFingerprintLogo: React.FC<DigitalFingerprintLogoProps> = ({ 
  size = 80, 
  className = '' 
}) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="drop-shadow-2xl"
      >
        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="1" />
            <stop offset="50%" stopColor="#0891b2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4338ca" stopOpacity="0.8" />
          </radialGradient>
          
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer Tech Rings */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="0.5"
          strokeDasharray="2,3"
          opacity="0.6"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 50;360 50 50"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="0.3"
          strokeDasharray="1,2"
          opacity="0.4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="360 50 50;0 50 50"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Fingerprint Swirl Pattern */}
        <g filter="url(#glow)">
          {/* Outer fingerprint ridges */}
          <path
            d="M 20 50 Q 30 30, 50 35 Q 70 30, 80 50 Q 70 70, 50 65 Q 30 70, 20 50"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1.5"
            opacity="0.8"
          />
          
          <path
            d="M 25 50 Q 32 35, 50 38 Q 68 35, 75 50 Q 68 65, 50 62 Q 32 65, 25 50"
            fill="none"
            stroke="#0891b2"
            strokeWidth="1.2"
            opacity="0.7"
          />
          
          <path
            d="M 30 50 Q 35 40, 50 42 Q 65 40, 70 50 Q 65 60, 50 58 Q 35 60, 30 50"
            fill="none"
            stroke="#0e7490"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Inner swirl leading to core */}
          <path
            d="M 35 50 Q 38 45, 50 46 Q 62 45, 65 50 Q 62 55, 50 54 Q 38 55, 35 50"
            fill="none"
            stroke="#155e75"
            strokeWidth="0.8"
            opacity="0.5"
          />

          {/* Biometric detail lines */}
          <path
            d="M 40 48 Q 45 46, 50 48 Q 55 46, 60 48"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="0.5"
            opacity="0.6"
          />
          
          <path
            d="M 40 52 Q 45 54, 50 52 Q 55 54, 60 52"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="0.5"
            opacity="0.6"
          />
        </g>

        {/* Central Core Nucleus */}
        <circle
          cx="50"
          cy="50"
          r="8"
          fill="url(#coreGradient)"
          filter="url(#glow)"
        >
          <animate
            attributeName="r"
            values="8;10;8"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Core inner detail */}
        <circle
          cx="50"
          cy="50"
          r="4"
          fill="#00d4ff"
          opacity="0.8"
        >
          <animate
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Tech accent dots */}
        <circle cx="50" cy="30" r="1" fill="#06b6d4" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="50" r="1" fill="#3b82f6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="70" r="1" fill="#6366f1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="50" r="1" fill="#0891b2" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};
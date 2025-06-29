import { ImageWithFallback } from './figma/ImageWithFallback';
import sheetzLogoImage from 'figma:asset/62da46d1dddc125c843d942c9275d7bd1262b8d7.png';

export function SheetzLogo({ size = 48, className = "" }: { size?: number; className?: string }) {
  // Calculate width based on the logo's aspect ratio (approximately 4:1 for the high-res logo)
  const width = size * 2.5;
  const height = size;

  // SVG fallback that matches the actual Sheetz logo design
  const SheetzLogoSVG = () => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Red oval banner background */}
      <ellipse
        cx="60"
        cy="24"
        rx="58"
        ry="22"
        fill="#E31837"
      />
      
      {/* Subtle shadow/depth */}
      <ellipse
        cx="60"
        cy="25"
        rx="56"
        ry="20"
        fill="none"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1"
      />
      
      {/* White SHEETZ text */}
      <text
        x="60"
        y="30"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="900"
        fontFamily="Arial Black, Arial, sans-serif"
        letterSpacing="1"
      >
        SHEETZ
      </text>
      
      {/* Highlight for depth */}
      <ellipse
        cx="60"
        cy="18"
        rx="48"
        ry="5"
        fill="rgba(255,255,255,0.15)"
      />
    </svg>
  );

  return (
    <div style={{ width, height }} className={className}>
      <ImageWithFallback
        src={sheetzLogoImage}
        alt="Sheetz Logo"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain'
        }}
        fallback={<SheetzLogoSVG />}
      />
    </div>
  );
}
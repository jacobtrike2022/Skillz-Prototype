import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

interface ConfettiAnimationProps {
  isActive: boolean;
  onComplete?: () => void;
}

export function ConfettiAnimation({ isActive, onComplete }: ConfettiAnimationProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const colors = ['#E31837', '#FF1E42', '#038FC7', '#8BB501', '#FBBF24', '#F59E0B'];

  useEffect(() => {
    if (!isActive) {
      setConfetti([]);
      return;
    }

    // Create initial confetti pieces
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 60; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    setConfetti(pieces);

    // Animation loop
    const animate = () => {
      setConfetti(prev => prev.map(piece => ({
        ...piece,
        x: piece.x + piece.vx,
        y: piece.y + piece.vy,
        rotation: piece.rotation + piece.rotationSpeed,
        vy: piece.vy + 0.1, // gravity
      })).filter(piece => piece.y < window.innerHeight + 50));
    };

    const interval = setInterval(animate, 16); // ~60fps

    // Clean up after 3 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setConfetti([]);
      onComplete?.();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isActive, onComplete]);

  if (!isActive || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 opacity-90"
          style={{
            left: piece.x,
            top: piece.y,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
}
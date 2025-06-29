import { ReactNode } from 'react';
import { cn } from './ui/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export function GlassCard({ 
  children, 
  className, 
  hover = false, 
  glow = false, 
  gradient = false,
  onClick 
}: GlassCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-4",
        hover && "glass-hover cursor-pointer",
        glow && "glow-accent",
        gradient && "gradient-accent",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
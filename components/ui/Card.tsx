import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  glow = false 
}) => {
  const baseClasses = 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6';
  const hoverClasses = hover ? 'transition-all duration-300 hover:scale-105 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20' : '';
  const glowClasses = glow ? 'animate-glow' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}>
      {children}
    </div>
  );
};

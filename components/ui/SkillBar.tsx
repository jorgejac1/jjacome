import React from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  yearsOfExperience?: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, yearsOfExperience }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-200 font-medium">{name}</span>
        <div className="flex items-center gap-3">
          {yearsOfExperience != null && (
            <span className="text-xs text-slate-400">{yearsOfExperience} yrs</span>
          )}
          <span className="text-primary-400 font-semibold">{level}%</span>
        </div>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { SkillBar } from '../ui/SkillBar';
import skillsData from '@/data/skills.json';

const iconMap: { [key: string]: string } = {
  'Code2': '💻',
  'Palette': '🎨',
  'Server': '🖥️',
  'Database': '🗄️',
  'Cloud': '☁️',
  'CheckCircle': '✅',
  'Wrench': '🔧',
  'Code': '⚡',
};

export const Skills: React.FC = () => {
  const { skillCategories, languages } = skillsData;

  return (
    <Section 
      id="skills" 
      title="Technical Skills"
      subtitle="Technologies and tools I use to build exceptional products"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category) => (
          <Card key={category.id} hover className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{iconMap[category.icon]}</span>
              <h3 className="text-xl font-bold text-white">{category.name}</h3>
            </div>
            <div className="space-y-3 flex-1">
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  yearsOfExperience={skill.yearsOfExperience}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Languages */}
      <Card className="bg-gradient-to-r from-primary-900/20 to-blue-900/20 border-primary-500/30">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {languages.map((lang) => (
            <div key={lang.language} className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <div className="text-white font-semibold">{lang.language}</div>
              <div className="text-slate-400 text-sm">{lang.proficiency}</div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
};

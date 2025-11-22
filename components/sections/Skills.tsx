'use client';

import React, { useState } from 'react';
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
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <Section 
      id="skills" 
      title="Technical Skills"
      subtitle="Technologies and tools I use to build exceptional products"
    >
      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

      {/* Mobile: Accordion layout */}
      <div className="md:hidden space-y-4 mb-12">
        {skillCategories.map((category) => {
          const isExpanded = expandedCategories.has(category.id);
          return (
            <Card key={category.id} className="overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between gap-3 py-1"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{iconMap[category.icon]}</span>
                  <h3 className="text-lg font-bold text-white">{category.name}</h3>
                </div>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isExpanded && (
                <div className="space-y-3 mt-4 pt-4 border-t border-slate-700">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      yearsOfExperience={skill.yearsOfExperience}
                    />
                  ))}
                </div>
              )}
            </Card>
          );
        })}
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
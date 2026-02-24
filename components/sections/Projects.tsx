'use client';

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import projectsData from '@/data/projects.json';

export const Projects: React.FC = () => {
  const { projects } = projectsData;
  const [filter, setFilter] = useState<string>('all');
  const [showAllOnMobile, setShowAllOnMobile] = useState<boolean>(false);

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Show only first 4 projects on mobile initially
  const displayedProjects = filteredProjects;

  return (
    <Section 
      id="projects" 
      title="Featured Projects"
      subtitle="A selection of my work showcasing different technologies and domains"
      className="bg-slate-900/50"
    >
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              filter === category
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects grid - Desktop shows all, Mobile shows 4 initially */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <Card 
            key={project.id} 
            hover 
            className={`flex flex-col h-full ${
              index >= 4 ? 'hidden md:flex' : ''
            } ${
              showAllOnMobile ? '!flex' : ''
            }`}
          >
            {/* Project header */}
            <div className="mb-4 flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white flex-1 leading-tight">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="ml-2 px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-400 text-xs font-semibold flex-shrink-0">
                    ⭐ Featured
                  </span>
                )}
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-700/50 border border-slate-600 rounded text-slate-300 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="mb-4 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                <div className="text-sm space-y-1">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-primary-400">📊</span>
                    <span className="text-xs">{project.metrics.impact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-primary-400">🚀</span>
                    <span className="text-xs">{project.metrics.scale}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Links */}
            <div className="mt-auto flex gap-3">
              <Button 
                href={project.githubUrl} 
                variant="outline" 
                size="sm" 
                external
                className="flex-1 text-xs"
              >
                <span className="mr-1">📂</span>
                GitHub
              </Button>
              {project.liveUrl && (
                <Button 
                  href={project.liveUrl} 
                  variant="primary" 
                  size="sm" 
                  external
                  className="flex-1 text-xs"
                >
                  <span className="mr-1">🔗</span>
                  Live
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Show More button for mobile */}
      {!showAllOnMobile && filteredProjects.length > 4 && (
        <div className="text-center mt-8 md:hidden">
          <Button 
            onClick={() => setShowAllOnMobile(true)}
            variant="outline" 
            size="lg"
          >
            View All {filteredProjects.length} Projects
          </Button>
        </div>
      )}

      {/* View all projects on GitHub */}
      <div className="text-center mt-12">
        <Button 
          href="https://github.com/jorgejac1?tab=repositories" 
          variant="secondary" 
          size="lg"
          external
        >
          View All Projects on GitHub →
        </Button>
      </div>
    </Section>
  );
};
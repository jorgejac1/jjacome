'use client';

import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import experienceData from '@/data/experience.json';

export const Experience: React.FC = () => {
  const { experiences, awards } = experienceData;

  return (
    <Section 
      id="experience" 
      title="Professional Experience"
      subtitle="Building high-impact solutions at leading tech companies"
      className="bg-slate-900/50"
    >
      {/* Download Resume Button */}
      <div className="flex justify-center mb-12">
        <a
          href="/resume.docx"
          download
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-blue-700 transition-all hover:scale-105 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="relative">
          {/* Timeline line - centered - only for experience items */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-blue-500 to-purple-500 transform -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, expIndex) => (
              <div key={exp.id}>
                {exp.positions.map((position, posIndex) => (
                  <div 
                    key={`${exp.id}-${posIndex}`}
                    className="relative"
                  >
                    {/* Desktop: Alternating layout */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
                      {/* Left side */}
                      <div className={expIndex % 2 === 0 ? 'text-right pr-8' : 'order-2 pl-8'}>
                        <Card hover className="h-full">
                          {/* Header */}
                          <div className="mb-4">
                            <div className="flex flex-col gap-2 mb-2">
                              <h3 className="text-2xl font-bold text-white">
                                {position.title}
                              </h3>
                              <p className="text-primary-400 font-semibold text-lg">
                                {exp.company}
                              </p>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-slate-400">
                              <span>📅 {position.period}</span>
                              <span>📍 {exp.location}</span>
                            </div>
                            {'current' in position && position.current && (
                              <span className="inline-block mt-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-semibold">
                                Current Position
                              </span>
                            )}
                          </div>

                          {/* Highlights */}
                          <ul className="space-y-2 mb-4 text-left">
                            {position.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-300">
                                <span className="text-primary-400 mt-1 flex-shrink-0">▹</span>
                                <span className="text-sm leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {position.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-lg text-primary-300 text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </Card>
                      </div>

                      {/* Right side (empty for spacing) */}
                      <div className={expIndex % 2 === 0 ? 'order-2' : ''} />

                      {/* Timeline dot - centered */}
                      <div className="absolute left-1/2 top-8 w-5 h-5 bg-primary-500 rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10 shadow-lg shadow-primary-500/50 animate-pulse" />
                    </div>

                    {/* Mobile: Simple stacked layout with only 3 highlights */}
                    <div className="md:hidden">
                      <Card hover>
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                {position.title}
                              </h3>
                              <p className="text-primary-400 font-semibold">
                                {exp.company}
                              </p>
                            </div>
                            {'current' in position && position.current && (
                              <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-semibold whitespace-nowrap">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col gap-1 text-sm text-slate-400">
                            <span>📅 {position.period}</span>
                            <span>📍 {exp.location}</span>
                          </div>
                        </div>

                        {/* Highlights - Only first 3 on mobile */}
                        <ul className="space-y-2 mb-4">
                          {position.highlights.slice(0, 3).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300">
                              <span className="text-primary-400 mt-1 flex-shrink-0">▹</span>
                              <span className="text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies - Smaller badges on mobile */}
                        <div className="flex flex-wrap gap-1.5">
                          {position.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-primary-500/10 border border-primary-500/20 rounded text-primary-300 text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Awards - Separate section outside timeline */}
        {awards && awards.length > 0 && (
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Awards & Recognition
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {awards.map((award, idx) => (
                  <Card key={idx} glow className="text-center">
                    <div className="text-5xl mb-4">🏆</div>
                    <h4 className="text-2xl font-bold text-white mb-3">{award.title}</h4>
                    <p className="text-primary-400 font-semibold text-lg mb-3">{award.organization}</p>
                    <p className="text-slate-300 mb-3 text-base">{award.description}</p>
                    <p className="text-slate-400">{award.date}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};
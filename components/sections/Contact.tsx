'use client';

import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import profileData from '@/data/profile.json';

export const Contact: React.FC = () => {
  const { profile, social } = profileData;

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: social.github, 
      color: 'hover:border-purple-500',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: social.linkedin, 
      color: 'hover:border-blue-500',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: `mailto:${social.email}`, 
      color: 'hover:border-green-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: 'Website', 
      url: profile.website, 
      color: 'hover:border-primary-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
  ];

  return (
    <Section 
      id="contact" 
      title="Let's Connect"
      subtitle="Interested in discussing innovative projects and technical challenges"
    >
      <div className="max-w-4xl mx-auto">
        <Card className="text-center bg-gradient-to-br from-primary-900/20 to-blue-900/20 border-primary-500/30">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's build something great
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Whether you have an interesting project, want to discuss technology, or just connect with fellow engineers — I'm always happy to chat.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="mb-8">
            <Button 
              href={`mailto:${profile.email}`}
              variant="primary"
              size="lg"
              external
            >
              Get in Touch →
            </Button>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 bg-slate-800/50 border border-slate-700 rounded-xl transition-all hover:scale-105 ${link.color} hover:shadow-xl`}
              >
                <div className="text-slate-300 group-hover:text-white transition-colors mb-3 flex justify-center">
                  {link.icon}
                </div>
                <div className="text-white font-semibold">{link.name}</div>
              </a>
            ))}
          </div>
        </Card>

        {/* Quick Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="text-3xl mb-2">📍</div>
            <div className="text-white font-semibold">Location</div>
            <div className="text-slate-400">{profile.location}</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-white font-semibold">Current Role</div>
            <div className="text-slate-400">{profile.title} @ {profile.currentCompany}</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-white font-semibold">Interests</div>
            <div className="text-primary-400">Innovative Projects</div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
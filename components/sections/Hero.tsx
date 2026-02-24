import React from 'react';
import { Button } from '../ui/Button';
import profileData from '@/data/profile.json';

export const Hero: React.FC = () => {
  const { profile } = profileData;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(100,116,139,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Greeting - Hidden on mobile */}
        <div className="mb-6 animate-slide-up hidden sm:block">
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-semibold">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-white">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-primary-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl md:text-3xl text-primary-400 font-semibold mb-3 sm:mb-4 animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
          {profile.title} @ {profile.currentCompany}
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-12 px-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {profile.tagline}
        </p>

        {/* CTA Buttons - Row on desktop, column on mobile. Only 2 on mobile, 3 on desktop */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4 max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
          <Button href="#experience" variant="primary" size="lg" className="w-full sm:w-auto">
            View Experience
          </Button>
          <Button href="#projects" variant="outline" size="lg" className="w-full sm:w-auto">
            See Projects
          </Button>
          <Button href={profile.github} variant="secondary" size="lg" external className="w-full sm:w-auto hidden sm:inline-flex">
            GitHub Profile
          </Button>
        </div>

        {/* Stats - Only 2 on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-20 animate-fade-in px-4" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">15+</div>
            <div className="text-slate-400 text-xs sm:text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">1M+</div>
            <div className="text-slate-400 text-xs sm:text-sm">Daily Users Served</div>
          </div>
          <div className="text-center hidden sm:block">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">30+</div>
            <div className="text-slate-400 text-xs sm:text-sm">Components Built</div>
          </div>
          <div className="text-center hidden sm:block">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">10+</div>
            <div className="text-slate-400 text-xs sm:text-sm">Engineers Mentored</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
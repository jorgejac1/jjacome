import React from 'react';
import profileData from '@/data/profile.json';

export const Footer: React.FC = () => {
  const { profile, social } = profileData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Jorge Jacome</h3>
            <p className="text-slate-400 text-sm mb-4">
              Lead Software Engineer building scalable web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <a 
                href={social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                GitHub
              </a>
              <a 
                href={social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#experience" className="block text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Experience
              </a>
              <a href="#skills" className="block text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Skills
              </a>
              <a href="#projects" className="block text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <a 
                href={`mailto:${profile.email}`}
                className="block text-slate-400 hover:text-primary-400 transition-colors"
              >
                {profile.email}
              </a>
              <p className="text-slate-400">{profile.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Jorge Jacome. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

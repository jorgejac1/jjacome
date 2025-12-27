import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  className = '',
  title,
  subtitle 
}) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {title.split(' ').map((word, index) => (
                  <span key={index}>
                    {index === title.split(' ').length - 1 ? (
                      <span className="bg-gradient-to-r from-primary-400 to-blue-500 bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      <span className="text-white">{word} </span>
                    )}
                  </span>
                ))}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

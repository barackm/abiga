'use client';

import React from "react";

interface HeroSectionProps {
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  particles?: number;
  extraContent?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  subtitle,
  title,
  titleHighlight,
  description,
  particles = 25,
  extraContent,
}) => {
  return (
    <section className="relative py-28 w-full min-h-screen bg-[url('/new/bg.png')] bg-cover bg-center bg-fixed flex items-center justify-center px-4 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(particles)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#93C7F3] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-white relative z-10 text-center">
        {subtitle && (
          <div data-aos="fade-down" data-aos-delay="100" className="animate-fade-in-up">
            <h4 className="text-[#93C7F3] uppercase tracking-wide text-sm mb-4 font-semibold">
              {subtitle}
            </h4>
          </div>
        )}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          {title} {titleHighlight && <span className="text-[#93C7F3]">{titleHighlight}</span>}
        </h1>
        {extraContent}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {description}
        </p>
        
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto animate-pulse-glow"
        />
      </div>
    </section>
  );
};


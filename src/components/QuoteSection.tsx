'use client';

import React from "react";

interface QuoteSectionProps {
  quote: string;
  author?: string;
  className?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ quote, author, className = "" }) => {
  return (
    <section className={`relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div data-aos="zoom-in" data-aos-delay="200">
          <blockquote className="text-3xl md:text-4xl text-gray-200 italic leading-relaxed mb-8 relative">
            <span className="text-6xl text-[#93C7F3] opacity-50 absolute -top-4 -left-4">&ldquo;</span>
            <span className="relative z-10">{quote}</span>
            <span className="text-6xl text-[#93C7F3] opacity-50 absolute -bottom-8 -right-4">&rdquo;</span>
          </blockquote>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto animate-pulse-glow"
        />
        {author && (
          <p className="text-[#93C7F3] text-lg mt-8 font-semibold">{author}</p>
        )}
      </div>
    </section>
  );
};


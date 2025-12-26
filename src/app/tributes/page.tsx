'use client';

import React, { useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialForm from "@/components/TestimonialForm";
import { fetchTestimonials } from "@/actions/testimonies";
import AOS from "aos";
import { useState } from "react";
import type { Testimonial } from "@/types/testimonials";

export default function TributesPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTestimonials = async () => {
    try {
      const data = await fetchTestimonials();
      const sortedData = data?.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      setTestimonials(sortedData || []);
      } catch (error) {
        console.error("Erreur lors du chargement des témoignages:", error);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });

    loadTestimonials();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-28 w-full min-h-screen bg-[url('/new/bg.png')] bg-cover bg-center bg-fixed flex items-center justify-center px-4 md:px-10 overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
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
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="animate-fade-in-up"
          >
            <h4 className="text-[#93C7F3] uppercase tracking-wide text-sm mb-4 font-semibold">
              Témoignages
            </h4>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            Paroles du <span className="text-[#93C7F3]">Cœur</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Les mots de ceux qui ont connu et aimé Abigaël, partagés avec amour et gratitude.
          </p>
          
          {/* Decorative Line */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto animate-pulse-glow"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Add Testimonial CTA */}
          <div
            data-aos="fade-up"
            className="text-center mb-12"
          >
            <p className="text-gray-300 text-lg mb-4">
              Partagez vos souvenirs et votre amour pour Abigaël
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto"></div>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Chargement des témoignages...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-6">Aucun témoignage disponible pour le moment.</p>
              <p className="text-gray-500 text-sm">Soyez le premier à partager un témoignage.</p>
            </div>
          ) : (
            <div className='max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6'>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className='mb-6 break-inside-avoid'
                >
                  <div className="transform transition-all duration-500 hover:scale-105">
                    <TestimonialCard {...testimonial} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonial Form Component */}
      <TestimonialForm onSuccess={loadTestimonials} />

      {/* Quote Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div data-aos="zoom-in" data-aos-delay="200">
            <blockquote className="text-3xl md:text-4xl text-gray-200 italic leading-relaxed mb-8 relative">
              <span className="text-6xl text-[#93C7F3] opacity-50 absolute -top-4 -left-4">&ldquo;</span>
              <span className="relative z-10">
                Les souvenirs que nous créons ensemble restent à jamais gravés dans nos cœurs.
              </span>
              <span className="text-6xl text-[#93C7F3] opacity-50 absolute -bottom-8 -right-4">&rdquo;</span>
            </blockquote>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto animate-pulse-glow"
          />
        </div>
      </section>
    </div>
  );
}

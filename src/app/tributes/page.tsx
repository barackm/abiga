import React from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import TestimonialCard from "@/components/TestimonialCard";
import { fetchTestimonials } from "@/actions/testimonies";

export default async function TributesPage() {
  const testimonials = await fetchTestimonials();

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Header />
      <Navigation />

      <main className='container mx-auto px-4 py-12'>
        <h2 className='text-3xl font-serif text-center text-gray-800 mb-12'>Témoignages</h2>
        <div className='max-w-5xl mx-auto grid gap-8 md:grid-cols-2'>
          {testimonials?.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </main>
    </div>
  );
}

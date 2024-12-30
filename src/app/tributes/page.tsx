import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { fetchTestimonials } from "@/actions/testimonies";

export default async function TributesPage() {
  const testimonials = await fetchTestimonials();

  return (
    <div>
      <h2 className='text-3xl font-serif text-center text-gray-800 mb-12'>Témoignages</h2>
      <div className='max-w-5xl mx-auto grid gap-8 md:grid-cols-2'>
        {testimonials?.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

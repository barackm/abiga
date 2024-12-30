import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { fetchTestimonials } from "@/actions/testimonies";

export default async function TributesPage() {
  const testimonials = await fetchTestimonials();
  const sortedTestimonials = testimonials?.sort((a, b) => a.order - b.order);

  return (
    <div>
      <h2 className='text-3xl font-serif text-center text-gray-800 mb-12'>Témoignages</h2>
      <div className='max-w-5xl mx-auto columns-1 md:columns-2 gap-4'>
        {sortedTestimonials?.map((testimonial) => (
          <div key={testimonial.id} className='mb-4 break-inside-avoid'>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ text, author, relation, image }: Testimonial) {
  return (
    <div className='bg-white rounded-xl shadow-md p-8 px-1 pt-1 hover:shadow-lg transition-shadow border border-gray-100 h-fit'>
      <div className='flex flex-col items-center text-center mb-6'>
        <div className='relative w-full h-52 mb-4'>
          <div className='absolute inset-0 overflow-hidden border border-gray-200 rounded-lg'>
            <Image src={image} alt={author} fill className='object-cover' sizes='(max-width: 768px) 100vw, 768px' />
          </div>
        </div>
        <div className='space-y-1'>
          <h3 className='font-serif text-xl font-medium text-gray-900'>{author}</h3>
          <p className='text-sm text-gray-500 font-light'>{relation}</p>
        </div>
      </div>
      <blockquote className='text-gray-600 px-8 text-lg leading-relaxed text-center font-serif italic'>
        <span className='text-4xl text-gray-300 font-serif leading-none block mb-2'>&ldquo;</span>
        <p className='mb-2'>{text}</p>
        <span className='text-4xl text-gray-300 font-serif leading-none block'>&rdquo;</span>
      </blockquote>
    </div>
  );
}

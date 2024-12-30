import Image from "next/image";
import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ text, author, relation, image }: Testimonial) {
  return (
    <div className='bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100'>
      <div className='flex flex-col items-center text-center mb-6'>
        <div className='relative w-32 h-32 mb-4'>
          <div className='absolute inset-0 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner'>
            <Image src={image} alt={author} fill className='object-cover' sizes='128px' />
          </div>
        </div>
        <div className='space-y-1'>
          <h3 className='font-serif text-xl font-medium text-gray-900'>{author}</h3>
          <p className='text-sm text-gray-500 font-light'>{relation}</p>
        </div>
      </div>
      <blockquote className='text-gray-600 text-lg leading-relaxed text-center font-serif italic'>
        <span className='text-4xl text-gray-300 font-serif leading-none block mb-2'>&ldquo;</span>
        <p className='mb-2'>{text}</p>
        <span className='text-4xl text-gray-300 font-serif leading-none block'>&rdquo;</span>
      </blockquote>
    </div>
  );
}
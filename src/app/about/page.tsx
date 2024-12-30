import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos - Abigaël Mapendo Buyana",
  description: "En savoir plus sur la vie d'Abigaël Mapendo Buyana",
};

const AboutPage = () => {
  return (
    <div>
      <section className='mb-16' data-aos='fade-up'>
        <h1 className='font-serif text-4xl text-center mb-8'>À propos d&apos;Abigaël</h1>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className='relative h-[300px] rounded-lg overflow-hidden shadow-lg' data-aos='fade-right'>
            <Image
              src='https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/IMG_4079.JPG'
              alt='Abigaël Mapendo Buyana'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
          <div className='space-y-4' data-aos='fade-left'>
            <p className='text-gray-600 leading-relaxed'>
              Abigaël Mapendo Buyana est née le 22 février 2009 à Goma. Elle était une jeune fille rayonnante, pleine de
              vie et d&apos;amour pour sa famille et ses amis.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              Élève brillante et passionnée, elle excellait particulièrement en mathématiques et adorait la musique. Son
              rêve était de devenir médecin pour aider les autres.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              Sa joie de vivre et son sourire contagieux ont touché tous ceux qui ont eu la chance de la connaître.
            </p>
          </div>
        </div>
      </section>

      <section className='mb-16' data-aos='fade-up'>
        <h2 className='font-serif text-3xl text-center mb-8'>Moments Précieux</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/471780943_1075563971250575_7018799193028159953_n.jpg",
            "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/tontonbob%20%20IMG_2126.jpg",
            "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/696357e7-0ffd-4038-8870-19a07ab56db6.jpg",
          ].map((image, i) => (
            <div
              key={i}
              className='relative h-[200px] rounded-lg overflow-hidden shadow-lg'
              data-aos='zoom-in'
              data-aos-delay={i * 100}
            >
              <Image
                src={image}
                alt={`Souvenir ${i}`}
                fill
                className='object-cover hover:scale-105 transition-transform duration-300'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
          ))}
        </div>
        <div className='text-center mt-8'>
          <Link
            href='/photos'
            className='inline-block px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-300'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            Voir plus de photos
          </Link>
        </div>
      </section>

      <section className='text-center max-w-2xl mx-auto' data-aos='fade-up'>
        <blockquote className='font-serif text-2xl text-gray-600 italic leading-relaxed mb-6'>
          &ldquo;Elle restera à jamais dans nos cœurs comme un exemple de joie, d&apos;amour et de courage.&rdquo;
        </blockquote>
        <div className='w-16 h-1 bg-gray-200 mx-auto'></div>
      </section>
    </div>
  );
};

export default AboutPage;

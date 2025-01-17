import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "In Memoriam - Abigaël Mapendo Buyana",
  description: "Programme des obsèques d'Abigaël Mapendo Buyana (22 Février 2009 - 27 Décembre 2024)",
  openGraph: {
    title: "In Memoriam - Abigaël Mapendo Buyana",
    description: "Programme des obsèques d'Abigaël Mapendo Buyana",
    images: ["/funeral-photo.jpg"],
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <section className='text-center mb-16' data-aos='fade-up'>
        <div className='relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto mb-8'>
          {/* Base photo layer */}
          <div className='absolute inset-[15%] rounded-full overflow-hidden'>
            <Image
              src='/abiga.jpg'
              alt='Abigaël Mapendo Buyana'
              fill
              className='object-cover'
              priority
              sizes='(max-width: 640px) 280px, (max-width: 1024px) 400px, 500px'
            />
          </div>
          {/* Frame overlay */}
          <Image
            src='/photo-frame.png'
            alt='Photo Frame'
            fill
            className='absolute inset-0 z-10'
            priority
            sizes='(max-width: 640px) 280px, (max-width: 1024px) 400px, 500px'
          />
        </div>
        <h2 className='font-serif text-4xl font-light mb-3' data-aos='fade-up' data-aos-delay='200'>
          Abigaël Mapendo Buyana
        </h2>
        <p className='text-gray-600 text-lg font-light tracking-wider' data-aos='fade-up' data-aos-delay='400'>
          22 Février 2009 - 27 Décembre 2024
        </p>
      </section>

      <section className='bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16' data-aos='fade-up'>
        <h3 className='font-serif text-2xl text-center mb-8 text-gray-800'>Programme des Cérémonies</h3>
        <div className='space-y-8'>
          <div className='border-l-4 border-gray-200 pl-6' data-aos='fade-left' data-aos-delay='200'>
            <h4 className='font-semibold text-lg mb-2'>Du vendredi 27 au dimanche 29 décembre 2024</h4>
            <p className='text-gray-600 leading-relaxed'>
              Recueillement au domicile familial
              <br />
              <span className='text-sm'>
                Entrée Président, N°36, av. Bikukwe, Q. Katoyi,
                <br />
                commune de Karisimbi. réf. église CECA 20 Shaba
              </span>
            </p>
          </div>

          <div className='border-l-4 border-gray-200 pl-6' data-aos='fade-left' data-aos-delay='400'>
            <h4 className='font-semibold text-lg mb-2'>Lundi 30 décembre 2024</h4>
            <p className='text-gray-600'>À partir de 18h30 : Culte d&apos;actions de grâces et veillée mortuaire</p>
          </div>

          <div className='border-l-4 border-gray-200 pl-6' data-aos='fade-left' data-aos-delay='600'>
            <h4 className='font-semibold text-lg mb-2'>Mardi 31 décembre 2024</h4>
            <ul className='text-gray-600 space-y-2'>
              <li>9h00 : Sortie du corps de la morgue de l&apos;hôpital Général</li>
              <li>9h30 : Départ pour les cimetières de Chemin du Ciel</li>
              <li>10h30 : Enterrement et témoignage aux cimetières</li>
              <li>11h30 : Retour au domicile familial</li>
              <li>12h30 : Bain de consolation et levée de deuil</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='text-center max-w-2xl mx-auto mb-16' data-aos='fade-up'>
        <blockquote className='font-serif text-xl text-gray-600 italic leading-relaxed'>
          &ldquo;Ta lumière et ton impact resteront gravés dans nos mémoires.
          <br />
          Que ton âme repose en paix éternellement.&rdquo;
        </blockquote>
        <p className='mt-6 text-gray-700 font-light'>Signé la famille Paul Buyana</p>
      </section>
    </div>
  );
}

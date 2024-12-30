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
          
            <section>
    <h1>Biographie</h1>
    <p>La biographie de notre chère enfant, sœur, fille, et amie <strong>MAPENDO BUYANA Abigaël</strong>, communément appelée <strong>ABBY</strong>, née le 22 février 2009 et décédée le 27 décembre 2024.</p>
    <p>Dont le père s'appelle <strong>PAUL BUYANA</strong> et maman <strong>SOLANGE KAGENYI</strong>.</p>

    <h2>Famille</h2>
    <p>Elle a eu 3 sœurs et 3 frères biologiques.</p>

    <h2>Éducation</h2>
    <ul>
        <li><strong>2011-2012:</strong> Études maternelles au COMPLEXE SCOLAIRE LA JOIE.</li>
        <li><strong>2013-2019:</strong> Certificat d’études primaires au COMPLEXE SCOLAIRE LA JOIE.</li>
        <li><strong>2020-2024:</strong> Études secondaires au LYCEE SAINTE URSULE en 5ème année industrie agricole.</li>
    </ul>

    <h2>Passions et talents</h2>
    <p>Abigaël a captivé par sa vivacité et son sourire contagieux. Passionnée par la musique chrétienne et les arts, elle exprimait sa créativité à travers le chant, la danse, le dessin, et le style de mode.</p>

    <h2>Formations</h2>
    <ul>
        <li>Anglais au Brotherly Training Center (BTC) pendant les vacances.</li>
        <li>Conduite automobile en 2022 à BTC.</li>
        <li>Créatrice et CEO de son entreprise <strong>Zoe entreprise</strong>.</li>
    </ul>

    <h2>Vie spirituelle</h2>
    <p>Abigaël a fait l'éco-dîme à CECA 20 Shabaaa. À 6 ans, elle a commencé la danse gospel avec le groupe chrétien Effective Joy (EJO). En mars 2020, elle a reçu Christ comme son Seigneur et Sauveur et, fin 2024, elle a décidé de suivre la classe de baptême à Arche de l’Alliance Goma pour témoigner de son salut.</p>

    <h2>Rêves et ambitions</h2>
    <p>Elle souhaitait continuer avec son entreprise Zoe en produisant plusieurs produits pour répondre aux besoins de la population congolaise. Elle rêvait aussi d’étudier dans un pays anglophone pour se spécialiser en agroalimentaire et chimie industrielle et promouvoir l’agriculture au Congo.</p>

    <h2>Vie sociale</h2>
    <p>Abigaël a touché les cœurs par son engagement communautaire et son altruisme. Elle s’impliquait souvent dans des activités pour aider les enfants défavorisés, montrant compassion et service. Son amour pour les enfants et son don pour le partage, l’amour, et la bienveillance étaient remarquables.</p>

    <h2>Hommage</h2>
    <p>Malheureusement, Abigaël est décédée tragiquement le 27 décembre 2024 à l'âge de 15 ans, laissant un vide immense. Elle est célébrée pour ses talents artistiques et la lumière qu'elle a apportée. Nous espérons qu'elle danse maintenant avec les anges au ciel auprès du Père.</p>

    <p><strong>Répos doux à notre Abigaël Buyana !</strong></p>
</section>
        </div>
      </section>

      <section className='mb-16' data-aos='fade-up'>
        <h2 className='font-serif text-3xl text-center mb-8'>Moments Précieux</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
          {[
            "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/471780943_1075563971250575_7018799193028159953_n.jpg",
            "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/tontonbob%20%20IMG_2126.jpg",
            "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/696357e7-0ffd-4038-8870-19a07ab56db6.jpg",
          ].map((image, i) => (
            <div
              key={i}
              className='relative w-full pb-[75%] rounded-lg overflow-hidden shadow-lg'
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

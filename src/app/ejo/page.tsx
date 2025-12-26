'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { fetchTGalery } from "@/actions/galery";
import { Galery } from "@/types/galery";

interface MediaItemProps {
  photo: Galery;
  index: number;
  onPhotoClick: (index: number) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ photo, index, onPhotoClick }) => {
  return (
    <div
      className='relative mb-6 break-inside-avoid cursor-pointer rounded-lg overflow-hidden shadow-2xl group'
      data-aos='zoom-in'
      data-aos-delay={index * 100}
      onClick={() => onPhotoClick(index)}
    >
      {photo.is_video ? (
        <div className='relative w-full pt-[75%]'>
          <video 
            src={photo.src} 
            className='absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
            preload='metadata' 
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-16 h-16 rounded-full bg-[#93C7F3]/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M8 5v14l11-7z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="relative w-full overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={600}
              className='w-full h-auto transition-transform duration-700 group-hover:scale-110'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          </div>
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20 pointer-events-none"></div>
        </>
      )}
      <div className='absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
        <p className='text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300'>
          {photo.title}
        </p>
      </div>
    </div>
  );
};

const EJOPage = () => {
  const [photos, setPhotos] = useState<Galery[]>([]);
  const [slides, setSlides] = useState<any[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await fetchTGalery();
        const sortedData = [...data].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        setPhotos(sortedData);

        const slides = sortedData.map((photo) =>
          photo.is_video
            ? {
                type: "video" as const,
                alt: photo.alt,
                sources: [
                  {
                    src: photo.src,
                    type: "video/mp4",
                  },
                ],
                autoPlay: true,
                controls: true,
              }
            : {
                type: "image" as const,
                src: photo.src,
                alt: photo.alt,
              },
        );

        setSlides(slides);
      } catch (error) {
        console.error("Erreur lors du chargement des photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  // Filtrer les photos liées à EJO (vous pouvez personnaliser cela selon votre structure de données)
  const ejoPhotos = photos.filter(photo => 
    photo.title?.toLowerCase().includes('ejo') || 
    photo.title?.toLowerCase().includes('effective joy') ||
    photo.title?.toLowerCase().includes('gospel') ||
    photo.title?.toLowerCase().includes('danse')
  );

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-28 w-full min-h-screen bg-[url('/new/bg.png')] bg-cover bg-center bg-fixed flex items-center justify-center px-4 md:px-10 overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
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

        {/* Animated Music Notes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[#93C7F3] opacity-20 text-4xl animate-float"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            >
              ♪
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-white relative z-10 text-center">
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="animate-fade-in-up"
          >
            <h4 className="text-[#93C7F3] uppercase tracking-wide text-sm mb-4 font-semibold">
              Effective Joy
            </h4>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            E<span className="text-[#93C7F3]">J</span>O
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl md:text-3xl text-[#93C7F3] font-bold mb-6"
          >
            Groupe de Danse Gospel
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            À 6 ans, Abigaël a commencé la danse Gospel avec le groupe chrétien Effective Joy (EJO en sigle) 
            et jusqu&apos;à nos jours voir dans les cieux.
          </p>
          
          {/* Decorative Line */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto animate-pulse-glow"
          />
        </div>
      </section>

      {/* About EJO Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div
            data-aos="fade-down"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              À propos d&apos;<span className="text-[#93C7F3]">EJO</span>
            </h2>
            <div className="w-24 h-1 bg-[#93C7F3] mx-auto mt-6"></div>
          </div>

          <div className="text-white space-y-8">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#93C7F3]/20 hover:border-[#93C7F3]/40 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-[#93C7F3] mb-4 flex items-center">
                <span className="text-3xl mr-3">🎵</span>
                Notre Mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Effective Joy (EJO) est un groupe de danse Gospel dédié à glorifier Dieu à travers 
                l&apos;art de la danse. Fondé sur les principes de la joie authentique et de l&apos;excellence, 
                EJO rassemble des jeunes passionnés qui expriment leur foi et leur amour pour le Seigneur 
                à travers des chorégraphies inspirantes et puissantes.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#93C7F3]/20 hover:border-[#93C7F3]/40 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-[#93C7F3] mb-4 flex items-center">
                <span className="text-3xl mr-3">💃</span>
                La Passion d&apos;Abigaël
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Abigaël Mapendo Buyana a rejoint Effective Joy à l&apos;âge de 6 ans, découvrant très tôt 
                sa passion pour la danse Gospel. Pendant près de 10 ans, elle a fait partie intégrante du groupe, 
                apportant sa joie contagieuse, son énergie débordante et son dévouement à chaque performance.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Sa présence sur scène était toujours marquée par un sourire radieux et une connexion profonde 
                avec la musique et le message qu&apos;elle portait. Abigaël dansait avec son cœur, exprimant 
                sa foi et sa joie à travers chaque mouvement, touchant les cœurs de tous ceux qui la regardaient.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#93C7F3]/20 hover:border-[#93C7F3]/40 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-[#93C7F3] mb-4 flex items-center">
                <span className="text-3xl mr-3">✨</span>
                L&apos;Héritage
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Même si Abigaël nous a quittés, son esprit continue de vivre à travers les performances d&apos;EJO. 
                Chaque danse, chaque mouvement rappelle sa passion et son amour pour le Seigneur. Elle danse maintenant 
                avec les anges dans les cieux, mais son impact sur le groupe et tous ceux qui l&apos;ont connue 
                reste éternel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div
            data-aos="fade-down"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Le <span className="text-[#93C7F3]">Parcours</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une décennie de danse, de foi et de joie
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto mt-6"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#93C7F3]/30 transform md:-translate-x-1/2"></div>

            {[
              {
                year: "2015",
                age: "6 ans",
                title: "Début du Voyage",
                description: "Abigaël rejoint Effective Joy à l'âge de 6 ans, découvrant sa passion pour la danse Gospel.",
                icon: "🌟",
              },
              {
                year: "2017-2019",
                age: "8-10 ans",
                title: "Croissance et Développement",
                description: "Elle développe ses compétences et devient une membre essentielle du groupe, participant à de nombreuses performances.",
                icon: "💫",
              },
              {
                year: "2020",
                age: "11 ans",
                title: "Engagement Spirituel",
                description: "En mars 2020, elle reçoit Christ comme son Seigneur et Sauveur, approfondissant sa connexion avec la danse comme expression de foi.",
                icon: "🙏",
              },
              {
                year: "2021-2024",
                age: "12-15 ans",
                title: "Excellence et Leadership",
                description: "Abigaël continue d'exceller dans la danse, inspirant les autres membres du groupe par sa joie et son dévouement.",
                icon: "⭐",
              },
              {
                year: "2024",
                age: "15 ans",
                title: "Danse Éternelle",
                description: "Elle continue de danser avec les anges dans les cieux, laissant un héritage de joie et de foi.",
                icon: "👼",
              },
            ].map((milestone, i) => (
              <div
                key={i}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 100}
                className={`relative mb-12 flex items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#93C7F3] rounded-full transform md:-translate-x-1/2 z-10 animate-pulse"></div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[45%] ${
                    i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  } bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#93C7F3]/20 hover:border-[#93C7F3]/40 transition-all duration-500 hover:scale-105`}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">{milestone.icon}</span>
                    <div>
                      <span className="text-[#93C7F3] font-bold text-lg">{milestone.year}</span>
                      <span className="text-gray-400 text-sm ml-2">({milestone.age})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            data-aos="fade-down"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Moments <span className="text-[#93C7F3]">Mémorables</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Captures de performances, répétitions et moments partagés avec EJO
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto mt-6"></div>
          </div>

          {ejoPhotos.length > 0 ? (
            <div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6'>
              {ejoPhotos.map((photo, i) => (
                <MediaItem
                  key={photo.id}
                  photo={photo}
                  index={i}
                  onPhotoClick={(idx) => {
                    const globalIndex = photos.findIndex(p => p.id === photo.id);
                    setIndex(globalIndex >= 0 ? globalIndex : idx);
                  }}
                />
              ))}
            </div>
          ) : photos.length > 0 ? (
            <div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6'>
              {photos.slice(0, 12).map((photo, i) => (
                <MediaItem
                  key={photo.id}
                  photo={photo}
                  index={i}
                  onPhotoClick={setIndex}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Chargement des photos...</p>
            </div>
          )}
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div data-aos="zoom-in" data-aos-delay="200">
            <blockquote className="text-3xl md:text-4xl text-gray-200 italic leading-relaxed mb-8 relative">
              <span className="text-6xl text-[#93C7F3] opacity-50 absolute -top-4 -left-4">&ldquo;</span>
              <span className="relative z-10">
                La danse est une prière en mouvement, une adoration avec le corps tout entier.
              </span>
              <span className="text-6xl text-[#93C7F3] opacity-50 absolute -bottom-8 -right-4">&rdquo;</span>
            </blockquote>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto animate-pulse-glow"
          />
          <p className="text-[#93C7F3] text-lg mt-8 font-semibold">
            - Effective Joy (EJO)
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        plugins={[Zoom, Thumbnails, Video]}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default EJOPage;


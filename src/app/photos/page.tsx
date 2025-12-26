'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
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

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Galery[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
              Galerie
            </h4>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            Galerie <span className="text-[#93C7F3]">Photos</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Une collection complète de tous nos souvenirs précieux avec Abigaël
          </p>
          
          {/* Decorative Line */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto animate-pulse-glow"
          />
        </div>
      </section>

      {/* Photos Gallery Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {photos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Les photos seront ajoutées prochainement</p>
            </div>
          ) : (
            <div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6'>
              {photos.map((photo, i) => (
                <MediaItem
                  key={photo.id}
                  photo={photo}
                  index={i}
                  onPhotoClick={setIndex}
                />
              ))}
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
                Chaque photo raconte une histoire, chaque moment est un trésor précieux.
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
}

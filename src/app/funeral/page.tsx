'use client';

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { usePhotos } from "@/hooks/usePhotos";
import { useAOS } from "@/hooks/useAOS";
import { HeroSection } from "@/components/HeroSection";
import { GallerySection } from "@/components/GallerySection";
import { QuoteSection } from "@/components/QuoteSection";
import { MediaItem } from "@/components/MediaItem";
import { Galery } from "@/types/galery";

const FuneralPage = () => {
  const [index, setIndex] = useState(-1);
  const { photos, slides } = usePhotos((photo: Galery) => 
    photo.title?.toLowerCase().includes('funeral') || 
    photo.title?.toLowerCase().includes('funéraille') ||
    photo.title?.toLowerCase().includes('burial') ||
    photo.title?.toLowerCase().includes('enterrement') ||
    photo.alt?.toLowerCase().includes('funeral') ||
    photo.alt?.toLowerCase().includes('funéraille')
  );
  useAOS();

  const funeralSections = [
    {
      title: "Cérémonie",
      description: "Les moments de la cérémonie d'adieu",
      images: photos.slice(0, 4),
    },
    {
      title: "Famille et Amis",
      description: "Ceux qui étaient présents pour lui rendre hommage",
      images: photos.slice(4, 8),
    },
    {
      title: "Dernier Adieu",
      description: "Les moments de recueillement et de prière",
      images: photos.slice(8, 12),
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection
        subtitle="27 Décembre 2024"
        title="Jour d'"
        titleHighlight="Adieu"
        description="Un dernier hommage, des moments de recueillement et d'amour partagés en mémoire d'Abigaël."
        particles={20}
        extraContent={
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute text-yellow-300 opacity-30 text-2xl animate-float"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${30 + Math.random() * 40}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                🕯️
              </div>
            ))}
          </div>
        }
      />

      {funeralSections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div data-aos="fade-down" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-[#93C7F3]">{section.title}</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">{section.description}</p>
              <div className="w-24 h-1 bg-[#93C7F3] mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.images.length > 0 ? (
                section.images.map((photo, i) => (
                  <MediaItem
                    key={photo.id}
                    photo={photo}
                    index={sectionIndex * 10 + i}
                    onPhotoClick={(idx) => {
                      const globalIndex = photos.findIndex(p => p.id === photo.id);
                      setIndex(globalIndex >= 0 ? globalIndex : idx);
                    }}
                  />
                ))
              ) : (
                [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                    className="relative h-[300px] rounded-lg overflow-hidden shadow-2xl bg-gray-800/50 flex items-center justify-center border-2 border-[#93C7F3]/20"
                  >
                    <p className="text-gray-400">Photo à venir</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      ))}

      <GallerySection
        photos={photos}
        title="Galerie Complète"
        description="Tous les moments de ce jour mémorable"
        onPhotoClick={setIndex}
        showTitle={true}
      />

      <QuoteSection 
        quote="Bien que nous soyons séparés, ton esprit vit à jamais dans nos cœurs et dans nos souvenirs."
        author="Repose en paix, chère Abigaël"
      />

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

export default FuneralPage;

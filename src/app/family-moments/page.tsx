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

const FamilyMomentsPage = () => {
  const [index, setIndex] = useState(-1);
  const { photos, slides } = usePhotos();
  useAOS();

  const familyMoments = [
    {
      title: "Moments en famille",
      description: "Des souvenirs précieux partagés avec ceux qui comptent le plus",
      images: photos.slice(0, 3),
    },
    {
      title: "Célébrations",
      description: "Les moments de joie et de célébration ensemble",
      images: photos.slice(3, 6),
    },
    {
      title: "Aventures",
      description: "Les voyages et découvertes partagés en famille",
      images: photos.slice(6, 9),
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection
        subtitle="Souvenirs précieux"
        title="Moments"
        titleHighlight="en Famille"
        description="Chaque instant partagé avec ceux qu'on aime reste gravé dans nos cœurs pour toujours. Ces souvenirs précieux témoignent de l'amour et de la joie qui nous unissent."
      />

      {familyMoments.map((moment, sectionIndex) => (
        <section
          key={sectionIndex}
          className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div data-aos="fade-down" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-[#93C7F3]">{moment.title}</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">{moment.description}</p>
              <div className="w-24 h-1 bg-[#93C7F3] mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moment.images.length > 0 ? (
                moment.images.map((photo, i) => (
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
                [...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                    className="relative h-[300px] rounded-lg overflow-hidden shadow-2xl bg-gray-800/50 flex items-center justify-center"
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
        description="Tous nos souvenirs précieux réunis en un seul endroit"
        onPhotoClick={setIndex}
        showTitle={true}
      />

      <QuoteSection quote="La famille n'est pas une chose importante. C'est tout." />

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

export default FamilyMomentsPage;

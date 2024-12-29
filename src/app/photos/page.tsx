"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "aos/dist/aos.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { fetchTGalery } from "@/actions/galery";
import { Galery } from "@/types/galery";

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Galery[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const data = await fetchTGalery();
    setPhotos(data);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Header />
      <Navigation />

      <main className='container mx-auto px-4 py-12'>
        <h2 className='text-3xl font-serif text-center text-gray-800 mb-12' data-aos='fade-down'>
          Galerie Photos
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              className='relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow'
              data-aos='fade-up'
              data-aos-delay={i * 100}
              onClick={() => setIndex(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className='object-cover transition-transform duration-300 hover:scale-110'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <div className='absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='absolute bottom-4 left-4 text-white text-lg font-light'>{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Lightbox
        slides={photos.map((photo) => ({ src: photo.src, alt: photo.alt }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom, Thumbnails]}
      />
    </div>
  );
}

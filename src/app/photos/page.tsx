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
    <div>
      <h2 className='text-3xl font-serif text-center text-gray-800 mb-12' data-aos='fade-down'>
        Galerie Photos
      </h2>

      <div className='columns-1 md:columns-2 lg:columns-3 gap-1 mx-auto'>
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className='relative mb-1 break-inside-avoid cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
            data-aos='fade-up'
            data-aos-delay={i * 100}
            onClick={() => setIndex(i)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={600}
              className='w-full h-auto hover:brightness-90 transition-all duration-300'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300'>
              <p className='absolute bottom-4 left-4 text-white text-sm font-medium'>{photo.title}</p>
            </div>
          </div>
        ))}
      </div>

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

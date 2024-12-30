/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import "aos/dist/aos.css";
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
      className='relative mb-1 break-inside-avoid cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
      data-aos='fade-up'
      data-aos-delay={index * 100}
      onClick={() => onPhotoClick(index)}
    >
      {photo.is_video ? (
        <div className='relative w-full pt-[75%]'>
          {" "}
          {/* 4:3 aspect ratio container */}
          <video src={photo.src} className='absolute top-0 left-0 w-full h-full object-cover' preload='metadata' />
          <div className='absolute inset-0 bg-black/10 flex items-center justify-center'>
            <div className='w-12 h-12 rounded-full bg-white/80 flex items-center justify-center'>
              <svg className='w-6 h-6 text-gray-800' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M8 5v14l11-7z' />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <Image
          src={photo.src}
          alt={photo.alt}
          width={800}
          height={600}
          className='w-full h-auto hover:brightness-90 transition-all duration-300'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      )}
      <div className='absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300'>
        <p className='absolute bottom-4 left-4 text-white text-sm font-medium'>{photo.title}</p>
      </div>
    </div>
  );
};

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Galery[]>([]);
  const [slides, setSlides] = useState<any[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h2 className='text-3xl font-serif text-center text-gray-800 mb-12' data-aos='fade-down'>
        Galerie Photos
      </h2>

      <div className='columns-1 md:columns-2 lg:columns-3 gap-1 mx-auto'>
        {photos.map((photo, i) => (
          <MediaItem key={photo.id} photo={photo} index={i} onPhotoClick={setIndex} />
        ))}
      </div>

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

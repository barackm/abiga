'use client';

import React from "react";
import Image from "next/image";
import { Galery } from "@/types/galery";

interface MediaItemProps {
  photo: Galery;
  index: number;
  onPhotoClick: (index: number) => void;
}

export const MediaItem: React.FC<MediaItemProps> = ({ photo, index, onPhotoClick }) => {
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


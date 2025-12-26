'use client';

import React from "react";
import { Galery } from "@/types/galery";
import { MediaItem } from "./MediaItem";

interface GallerySectionProps {
  photos: Galery[];
  title?: string;
  description?: string;
  onPhotoClick: (index: number) => void;
  columns?: string;
  showTitle?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  photos,
  title,
  description,
  onPhotoClick,
  columns = "columns-1 md:columns-2 lg:columns-3 xl:columns-4",
  showTitle = false,
}) => {
  return (
    <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {showTitle && (title || description) && (
          <div data-aos="fade-down" className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {title.split(' ').map((word, i, arr) => 
                  i === arr.length - 1 ? (
                    <span key={i}><span className="text-[#93C7F3]">{word}</span></span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </h2>
            )}
            {description && (
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">{description}</p>
            )}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto mt-6"></div>
          </div>
        )}

        {photos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Les photos seront ajoutées prochainement</p>
          </div>
        ) : (
          <div className={`${columns} gap-6`}>
            {photos.map((photo, i) => (
              <MediaItem
                key={photo.id}
                photo={photo}
                index={i}
                onPhotoClick={onPhotoClick}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};


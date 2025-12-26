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

export default function PhotosPage() {
  const [index, setIndex] = useState(-1);
  const { photos, slides } = usePhotos();
  useAOS();

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection
        subtitle="Galerie"
        title="Galerie"
        titleHighlight="Photos"
        description="Une collection complète de tous nos souvenirs précieux avec Abigaël"
      />

      <GallerySection
        photos={photos}
        onPhotoClick={setIndex}
      />

      <QuoteSection quote="Chaque photo raconte une histoire, chaque moment est un trésor précieux." />

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

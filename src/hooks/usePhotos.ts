import { useEffect, useState } from "react";
import { fetchTGalery } from "@/actions/galery";
import { Galery } from "@/types/galery";

export function usePhotos(filterFn?: (photo: Galery) => boolean) {
  const [photos, setPhotos] = useState<Galery[]>([]);
  const [slides, setSlides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const data = await fetchTGalery();
        const filteredData = filterFn ? data.filter(filterFn) : data;
        
        const sortedData = [...filteredData].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
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
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [filterFn]);

  return { photos, slides, loading };
}


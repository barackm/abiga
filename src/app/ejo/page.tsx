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
import { Galery } from "@/types/galery";

const EJOPage = () => {
  const [index, setIndex] = useState(-1);
  const { photos, slides } = usePhotos((photo: Galery) => 
    photo.title?.toLowerCase().includes('ejo') || 
    photo.title?.toLowerCase().includes('effective joy') ||
    photo.title?.toLowerCase().includes('gospel') ||
    photo.title?.toLowerCase().includes('danse')
  );
  useAOS();

  const ejoPhotos = photos.filter(photo => 
    photo.title?.toLowerCase().includes('ejo') || 
    photo.title?.toLowerCase().includes('effective joy') ||
    photo.title?.toLowerCase().includes('gospel') ||
    photo.title?.toLowerCase().includes('danse')
  );

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection
        subtitle="Effective Joy"
        title="E"
        titleHighlight="JO"
        description="À 6 ans, Abigaël a commencé la danse Gospel avec le groupe chrétien Effective Joy (EJO en sigle) et jusqu'à nos jours voir dans les cieux."
        particles={30}
        extraContent={
          <>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-2xl md:text-3xl text-[#93C7F3] font-bold mb-6"
            >
              Groupe de Danse Gospel
            </p>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-[#93C7F3] opacity-20 text-4xl animate-float"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${4 + Math.random() * 3}s`,
                  }}
                >
                  ♪
                </div>
              ))}
            </div>
          </>
        }
      />

      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div data-aos="fade-down" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              À propos d&apos;<span className="text-[#93C7F3]">EJO</span>
            </h2>
            <div className="w-24 h-1 bg-[#93C7F3] mx-auto mt-6"></div>
          </div>
          <div className="text-white space-y-8">
            {[
              {
                icon: "🎵",
                title: "Notre Mission",
                text: "Effective Joy (EJO) est un groupe de danse Gospel dédié à glorifier Dieu à travers l'art de la danse. Fondé sur les principes de la joie authentique et de l'excellence, EJO rassemble des jeunes passionnés qui expriment leur foi et leur amour pour le Seigneur à travers des chorégraphies inspirantes et puissantes.",
              },
              {
                icon: "💃",
                title: "La Passion d'Abigaël",
                text: "Abigaël Mapendo Buyana a rejoint Effective Joy à l'âge de 6 ans, découvrant très tôt sa passion pour la danse Gospel. Pendant près de 10 ans, elle a fait partie intégrante du groupe, apportant sa joie contagieuse, son énergie débordante et son dévouement à chaque performance. Sa présence sur scène était toujours marquée par un sourire radieux et une connexion profonde avec la musique et le message qu'elle portait. Abigaël dansait avec son cœur, exprimant sa foi et sa joie à travers chaque mouvement, touchant les cœurs de tous ceux qui la regardaient.",
              },
              {
                icon: "✨",
                title: "L'Héritage",
                text: "Même si Abigaël nous a quittés, son esprit continue de vivre à travers les performances d'EJO. Chaque danse, chaque mouvement rappelle sa passion et son amour pour le Seigneur. Elle danse maintenant avec les anges dans les cieux, mais son impact sur le groupe et tous ceux qui l'ont connue reste éternel.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i + 2) * 100}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#93C7F3]/20 hover:border-[#93C7F3]/40 transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold text-[#93C7F3] mb-4 flex items-center">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div data-aos="fade-down" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Le <span className="text-[#93C7F3]">Parcours</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Une décennie de danse, de foi et de joie</p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto mt-6"></div>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#93C7F3]/30 transform md:-translate-x-1/2"></div>
            {[
              { year: "2015", age: "6 ans", title: "Début du Voyage", description: "Abigaël rejoint Effective Joy à l'âge de 6 ans, découvrant sa passion pour la danse Gospel.", icon: "🌟" },
              { year: "2017-2019", age: "8-10 ans", title: "Croissance et Développement", description: "Elle développe ses compétences et devient une membre essentielle du groupe, participant à de nombreuses performances.", icon: "💫" },
              { year: "2020", age: "11 ans", title: "Engagement Spirituel", description: "En mars 2020, elle reçoit Christ comme son Seigneur et Sauveur, approfondissant sa connexion avec la danse comme expression de foi.", icon: "🙏" },
              { year: "2021-2024", age: "12-15 ans", title: "Excellence et Leadership", description: "Abigaël continue d'exceller dans la danse, inspirant les autres membres du groupe par sa joie et son dévouement.", icon: "⭐" },
              { year: "2024", age: "15 ans", title: "Danse Éternelle", description: "Elle continue de danser avec les anges dans les cieux, laissant un héritage de joie et de foi.", icon: "👼" },
            ].map((milestone, i) => (
              <div
                key={i}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 100}
                className={`relative mb-12 flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#93C7F3] rounded-full transform md:-translate-x-1/2 z-10 animate-pulse"></div>
                <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"} bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#93C7F3]/20 hover:border-[#93C7F3]/40 transition-all duration-500 hover:scale-105`}>
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">{milestone.icon}</span>
                    <div>
                      <span className="text-[#93C7F3] font-bold text-lg">{milestone.year}</span>
                      <span className="text-gray-400 text-sm ml-2">({milestone.age})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection
        photos={ejoPhotos.length > 0 ? ejoPhotos : photos.slice(0, 12)}
        title="Moments Mémorables"
        description="Captures de performances, répétitions et moments partagés avec EJO"
        onPhotoClick={setIndex}
        showTitle={true}
      />

      <QuoteSection 
        quote="La danse est une prière en mouvement, une adoration avec le corps tout entier."
        author="- Effective Joy (EJO)"
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

export default EJOPage;

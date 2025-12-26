'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

const AboutPage = () => {
  // Données des membres de la famille - Mettez à jour les noms et les chemins d'images ici
  const familyMembers = {
    parents: [
      {
        name: "PAUL BUYANA",
        relation: "Père",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "SOLANGE KAGENYI",
        relation: "Mère",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
    ],
    sisters: [
      {
        name: "Sœur 1", // Remplacer par le nom réel
        relation: "Sœur",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Sœur 2", // Replace with actual name
        relation: "Sœur",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Sœur 3", // Replace with actual name
        relation: "Sœur",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
    ],
    brothers: [
      {
        name: "Frère 1", // Remplacer par le nom réel
        relation: "Frère",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Frère 2", // Replace with actual name
        relation: "Frère",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Frère 3", // Replace with actual name
        relation: "Frère",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
    ],
    friends: [
      {
        name: "Ami(e) 1", // Remplacer par le nom réel
        relation: "Ami(e)",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Ami(e) 2", // Replace with actual name
        relation: "Ami(e)",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Ami(e) 3", // Replace with actual name
        relation: "Ami(e)",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Ami(e) 4", // Replace with actual name
        relation: "Ami(e)",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Ami(e) 5", // Replace with actual name
        relation: "Ami(e)",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Ami(e) 6", // Replace with actual name
        relation: "Ami(e)",
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
    ],
    others: [
      {
        name: "Personne 1", // Remplacer par le nom réel (ex: Tante, Oncle, Cousin(e), etc.)
        relation: "Relation", // Remplacer par la relation réelle
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Personne 2", // Replace with actual name
        relation: "Relation", // Replace with actual relation
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Personne 3", // Replace with actual name
        relation: "Relation", // Replace with actual relation
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
      {
        name: "Personne 4", // Replace with actual name
        relation: "Relation", // Replace with actual relation
        image: "/placeholder-family.jpg", // Remplacer par le chemin d'image réel
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative py-28 w-full min-h-screen bg-[url('/new/bg.png')] bg-cover bg-center bg-fixed flex items-center justify-center px-4 md:px-10 overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#93C7F3] rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-white relative z-10">
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="animate-fade-in-up"
          >
            <h4 className="text-[#93C7F3] uppercase tracking-wide text-sm mb-4 font-semibold">
              À propos
            </h4>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            <span className="inline-block animate-fade-in-up">Abigaël</span>{' '}
            <span className="text-[#93C7F3] inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Mapendo Buyana
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Ta lumière et ton impact resteront gravés dans nos mémoires. Que ton
            âme repose en paix éternellement.
          </p>
          
          {/* Decorative Line */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent animate-pulse-glow"
          />
        </div>
      </section>

      {/* Biography Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Image with Reveal Effect */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl group image-reveal"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/IMG_4079.JPG"
                alt="Abigaël Mapendo Buyana"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                  Abigaël Mapendo Buyana
                </p>
              </div>
            </div>

            {/* Content */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#93C7F3] mb-6 relative inline-block">
                Biographie
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#93C7F3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  La biographie de notre chère enfant, sœur, fille, et amie{" "}
                  <span className="font-semibold text-white relative group">
                    MAPENDO BUYANA Abigaël
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#93C7F3] group-hover:w-full transition-all duration-300"></span>
                  </span>, communément appelée{" "}
                  <span className="font-semibold text-[#93C7F3]">ABBY</span>, née le{" "}
                  <span className="font-semibold text-white">22 février 2009</span> et décédée le{" "}
                  <span className="font-semibold text-white">27 décembre 2024</span>.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  Dont le père s&apos;appelle <span className="font-semibold text-white">PAUL BUYANA</span> et maman{" "}
                  <span className="font-semibold text-white">SOLANGE KAGENYI</span>.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div data-aos="fade-up" data-aos-delay="400">
                  <h3 className="text-xl font-semibold text-[#93C7F3] mb-3 flex items-center">
                    <span className="w-2 h-2 bg-[#93C7F3] rounded-full mr-3 animate-pulse"></span>
                    Famille
                  </h3>
                  <p className="text-gray-300">Elle a eu 3 sœurs et 3 frères biologiques.</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="500">
                  <h3 className="text-xl font-semibold text-[#93C7F3] mb-3 flex items-center">
                    <span className="w-2 h-2 bg-[#93C7F3] rounded-full mr-3 animate-pulse"></span>
                    Éducation
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li className="hover:text-white transition-colors duration-300">
                      <span className="font-medium text-white">2011-2012:</span> Études maternelles au COMPLEXE SCOLAIRE LA JOIE.
                    </li>
                    <li className="hover:text-white transition-colors duration-300">
                      <span className="font-medium text-white">2013-2019:</span> Certificat d&apos;études primaires au COMPLEXE SCOLAIRE LA JOIE.
                    </li>
                    <li className="hover:text-white transition-colors duration-300">
                      <span className="font-medium text-white">2020-2024:</span> Études secondaires au LYCEE SAINTE URSULE en 5ème année industrie agricole.
                    </li>
                  </ul>
                </div>

                <div data-aos="fade-up" data-aos-delay="600">
                  <h3 className="text-xl font-semibold text-[#93C7F3] mb-3 flex items-center">
                    <span className="w-2 h-2 bg-[#93C7F3] rounded-full mr-3 animate-pulse"></span>
                    Passions et talents
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Abigaël a captivé par sa vivacité et son sourire contagieux. Passionnée par la musique chrétienne et les
                    arts, elle exprimait sa créativité à travers le chant, la danse, le dessin, et le style de mode.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Relationship Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            data-aos="fade-down"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ceux qui <span className="text-[#93C7F3]">Comptent</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              La famille, les amis et tous ceux qui ont partagé sa vie et portent son amour dans leurs cœurs
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto mt-6 animate-pulse-glow"></div>
          </div>

          {/* Parents Section */}
          <div className="mb-20">
            <h3
              data-aos="fade-up"
              className="text-2xl md:text-3xl font-semibold text-[#93C7F3] mb-10 text-center flex items-center justify-center"
            >
              <span className="mr-3 text-3xl">👨‍👩</span>
              Parents
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {familyMembers.parents.map((parent, i) => (
                <div
                  key={i}
                  data-aos={i === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={(i + 1) * 100}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border-2 border-[#93C7F3]/30 hover:border-[#93C7F3]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#93C7F3]/20"
                >
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#93C7F3]/20 rounded-tl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#93C7F3]/20 rounded-br-2xl"></div>
                  
                  <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#93C7F3]/40 group-hover:ring-[#93C7F3]/70 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(147,199,243,0.5)]">
                    <Image
                      src={parent.image}
                      alt={parent.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="144px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.style.background = 'linear-gradient(135deg, #93C7F3 0%, #1f4261 100%)';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-2 group-hover:text-[#93C7F3] transition-colors duration-300">{parent.name}</h4>
                  <p className="text-[#93C7F3] text-center font-semibold text-lg">{parent.relation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Siblings Section */}
          <div className="mb-20">
            <h3
              data-aos="fade-up"
              className="text-2xl md:text-3xl font-semibold text-[#93C7F3] mb-10 text-center flex items-center justify-center"
            >
              <span className="mr-3 text-3xl">👨‍👧‍👦</span>
              Frères et Sœurs
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Sisters */}
              {familyMembers.sisters.map((sibling, i) => (
                <div
                  key={`sister-${i}`}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-5 border-2 border-[#93C7F3]/20 hover:border-[#93C7F3]/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-[#93C7F3]/20"
                >
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden shadow-xl ring-2 ring-[#93C7F3]/40 group-hover:ring-[#93C7F3]/70 transition-all duration-500">
                    <Image
                      src={sibling.image}
                      alt={sibling.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="112px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.style.background = 'linear-gradient(135deg, #93C7F3 0%, #1f4261 100%)';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white text-center mb-1 group-hover:text-[#93C7F3] transition-colors duration-300">{sibling.name}</h4>
                  <p className="text-[#93C7F3] text-xs md:text-sm text-center font-semibold">{sibling.relation}</p>
                </div>
              ))}

              {/* Brothers */}
              {familyMembers.brothers.map((sibling, i) => (
                <div
                  key={`brother-${i}`}
                  data-aos="zoom-in"
                  data-aos-delay={(i + familyMembers.sisters.length) * 100}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-5 border-2 border-[#93C7F3]/20 hover:border-[#93C7F3]/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-[#93C7F3]/20"
                >
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden shadow-xl ring-2 ring-[#93C7F3]/40 group-hover:ring-[#93C7F3]/70 transition-all duration-500">
                    <Image
                      src={sibling.image}
                      alt={sibling.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="112px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.style.background = 'linear-gradient(135deg, #93C7F3 0%, #1f4261 100%)';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white text-center mb-1 group-hover:text-[#93C7F3] transition-colors duration-300">{sibling.name}</h4>
                  <p className="text-[#93C7F3] text-xs md:text-sm text-center font-semibold">{sibling.relation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Friends Section */}
          <div className="mb-20">
            <h3
              data-aos="fade-up"
              className="text-2xl md:text-3xl font-semibold text-[#93C7F3] mb-10 text-center flex items-center justify-center"
            >
              <span className="mr-3 text-3xl">👫</span>
              Amis Proches
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {familyMembers.friends.map((friend, i) => (
                <div
                  key={`friend-${i}`}
                  data-aos="zoom-in"
                  data-aos-delay={i * 80}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-5 border-2 border-[#93C7F3]/20 hover:border-[#93C7F3]/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-[#93C7F3]/20"
                >
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden shadow-xl ring-2 ring-[#93C7F3]/40 group-hover:ring-[#93C7F3]/70 transition-all duration-500">
                    <Image
                      src={friend.image}
                      alt={friend.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="112px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.style.background = 'linear-gradient(135deg, #93C7F3 0%, #1f4261 100%)';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white text-center mb-1 group-hover:text-[#93C7F3] transition-colors duration-300">{friend.name}</h4>
                  <p className="text-[#93C7F3] text-xs md:text-sm text-center font-semibold">{friend.relation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Others Section */}
          <div className="mb-12">
            <h3
              data-aos="fade-up"
              className="text-2xl md:text-3xl font-semibold text-[#93C7F3] mb-10 text-center flex items-center justify-center"
            >
              <span className="mr-3 text-3xl">💝</span>
              Autres Proches
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {familyMembers.others.map((person, i) => (
                <div
                  key={`other-${i}`}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-5 border-2 border-[#93C7F3]/20 hover:border-[#93C7F3]/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-[#93C7F3]/20"
                >
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden shadow-xl ring-2 ring-[#93C7F3]/40 group-hover:ring-[#93C7F3]/70 transition-all duration-500">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="112px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.style.background = 'linear-gradient(135deg, #93C7F3 0%, #1f4261 100%)';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white text-center mb-1 group-hover:text-[#93C7F3] transition-colors duration-300">{person.name}</h4>
                  <p className="text-[#93C7F3] text-xs md:text-sm text-center font-semibold">{person.relation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Note for adding images */}
          <div
            data-aos="fade-up"
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm italic">
              Les photos seront ajoutées prochainement
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto text-white space-y-16 relative z-10">
          {[
            {
              title: "Identité",
              content: (
                <>
                  <p className="mb-4">
                    La biographie de notre chère enfant, sœur, fille, et amie{" "}
                    <span className="font-semibold text-white">MAPENDO BUYANA Abigaël</span>, communément appelée{" "}
                    <span className="font-semibold text-white">ABBY</span>, née le{" "}
                    <span className="font-semibold text-white">22 février 2009</span> et décédée le{" "}
                    <span className="font-semibold text-white">27 décembre 2024</span>.
                  </p>
                  <p className="mb-4">
                    Dont le père s&apos;appelle <span className="font-semibold text-white">PAUL BUYANA</span> et maman{" "}
                    <span className="font-semibold text-white">SOLANGE KAGENYI</span>.
                  </p>
                  <p className="mb-4">Elle a eu 3 sœurs et 3 frères biologiques.</p>
                </>
              ),
            },
            {
              title: "Parcours Scolaire",
              content: (
                <>
                  <p className="mb-4">
                    Elle a commencé ses études maternelles au COMPLEXE SCOLAIRE LA JOIE de 2011 à 2012,
                    et de 2013 à 2019 où elle a obtenu son certificat d&apos;études primaires toujours au COMPLEXE SCOLAIRE LA JOIE.
                  </p>
                  <p className="mb-4">
                    En 2020, elle a commencé ses études secondaires au LYCEE SAINTE URSULE et malheureusement en 5ème année industrie agricole, elle nous a quittés.
                  </p>
                </>
              ),
            },
            {
              title: "Personnalité",
              content: (
                <p className="mb-4">
                  Abigaël est née le 22 février 2009, dans cette ville de Goma où elle a rapidement captivé l&apos;attention des gens par sa vivacité et son sourire contagieux. Passionnée par la musique chrétienne et les arts dès son jeune âge, Abigaël a su exprimer sa créativité à travers diverses disciplines, notamment le chant, la danse, le dessin, et le style de mode.
                </p>
              ),
            },
            {
              title: "Formations",
              content: (
                <>
                  <p className="mb-4">
                    Elle faisait de l&apos;anglais à chaque vacance au BTC (Brotherly Training Center).
                  </p>
                  <p className="mb-4">
                    Elle a fait la conduite automobile en 2022 toujours à l&apos;école de langue BTC.
                  </p>
                  <p className="mb-4">
                    Elle a aussi créé son entreprise où elle était CEO, nommée Zoe entreprise.
                  </p>
                </>
              ),
            },
            {
              title: "Vie spirituelle",
              content: (
                <>
                  <p className="mb-4">
                    Elle a fait l&apos;éco-dime à CECA 20 Shabaaa.
                  </p>
                  <p className="mb-4">
                    À 6 ans, elle a commencé la danse Gospel avec le groupe chrétien Effective Joy (EJO en sigle) et jusqu&apos;à nos jours voir dans les cieux.
                  </p>
                  <p className="mb-4">
                    En mars 2020, elle a reçu Christ comme son seigneur et sauveur et s&apos;est décidée alors en fin 2024 de commencer à suivre la classe de baptême à Arche de l&apos;alliance Goma pour enfin témoigner son SALUT.
                  </p>
                </>
              ),
            },
            {
              title: "Rêves et ambitions",
              content: (
                <>
                  <p className="mb-4">
                    Elle voulait vraiment continuer avec son entreprise ZOE en produisant plusieurs produits et en répondant aux besoins et problèmes de la population congolaise, elle était sa source de motivation.
                  </p>
                  <p className="mb-4">
                    Elle rêvait aussi, comme ses frères et sœurs, d&apos;étudier dans un pays anglophone pour faire l&apos;agroalimentaire et la chimie industrielle afin de promouvoir l&apos;agriculture dans notre pays.
                  </p>
                </>
              ),
            },
            {
              title: "Vie sociale",
              content: (
                <>
                  <p className="mb-4">
                    Au cours de sa vie, Abigaël a réussi à toucher les cœurs de nombreuses personnes par son engagement communautaire et son altruisme. Elle s&apos;est souvent impliquée dans des activités destinées à aider les enfants défavorisés, montrant ainsi un sens aigu de la compassion et du service en travaillant pour le Christ. Son amour pour les enfants qu&apos;elle rencontrait, inconnus soient-ils, était doté d&apos;un don de soumission, d&apos;un esprit de partage, d&apos;amour du prochain, de pardon, de bienveillance, et de satisfaction.
                  </p>
                  <p className="mb-4">
                    Malheureusement, la vie d&apos;Abigaël a été tragiquement écourtée lorsqu&apos;elle est décédée le 27 décembre 2024, à l&apos;âge de 15 ans. Son décès a laissé un vide immense dans la vie de sa famille, de ses amis et de sa communauté. Sa mémoire perdure à travers les nombreux impacts qu&apos;elle a laissés et les souvenirs joyeux qu&apos;elle a créés.
                  </p>
                  <p className="mb-4">
                    Abigaël est célébrée non seulement pour ses talents artistiques mais aussi pour la lumière qu&apos;elle a apportée à ceux qui l&apos;entouraient. Son héritage continue d&apos;inspirer et de rappeler l&apos;importance de vivre pleinement en Christ et d&apos;apporter de la joie aux autres.
                  </p>
                </>
              ),
            },
            {
              title: "Message Final",
              content: (
                <>
                  <p className="mb-4">
                    Hélas! Dieu a aimé ses œuvres plus que nous, et nous espérons qu&apos;à ce moment elle danse avec les anges au cieux auprès du père comme elle le faisait avec nous quand elle était encore vivante!
                  </p>
                  <p className="mb-4 text-[#93C7F3] font-semibold text-xl animate-pulse">
                    Repose en paix, notre chère Abigaël Buyana!
                  </p>
                </>
              ),
            },
          ].map((section, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#93C7F3] mb-6 relative inline-block">
                {section.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#93C7F3] group-hover:w-full transition-all duration-500"></span>
              </h3>
              <div className="text-gray-300 leading-relaxed text-lg space-y-4">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parcours Section (timeline) */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div
            data-aos="fade-down"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Son <span className="text-[#93C7F3]">Parcours</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Les étapes marquantes d&apos;Abigaël, de son enfance à sa danse éternelle.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto mt-6"></div>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#93C7F3]/30 transform md:-translate-x-1/2"></div>

            {[
              {
                year: "2009",
                age: "Naissance",
                title: "Bienvenue, Abigaël",
                description: "Née le 22 février 2009 à Goma, rayonnante dès ses premiers jours.",
                icon: "👶",
              },
              {
                year: "2011-2012",
                age: "Petite section",
                title: "Premiers pas scolaires",
                description: "Études maternelles au COMPLEXE SCOLAIRE LA JOIE.",
                icon: "🎒",
              },
              {
                year: "2013-2019",
                age: "Enfance",
                title: "Certificat primaire",
                description: "Obtention du certificat d&apos;études primaires au COMPLEXE SCOLAIRE LA JOIE.",
                icon: "📚",
              },
              {
                year: "2020-2024",
                age: "Adolescence",
                title: "Secondaire & passion",
                description: "Études au LYCEE SAINTE URSULE (industrie agricole) et passion pour la danse Gospel avec EJO.",
                icon: "💃",
              },
              {
                year: "2022",
                age: "14 ans",
                title: "Audace & leadership",
                description: "Formation à la conduite et création de son entreprise Zoe.",
                icon: "🚗",
              },
              {
                year: "2024",
                age: "15 ans",
                title: "Héritage éternel",
                description: "Rejoignant les cieux le 27 décembre 2024, elle continue d&apos;inspirer par sa joie et sa foi.",
                icon: "✨",
              },
            ].map((milestone, i) => (
              <div
                key={i}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 100}
                className={`relative mb-12 flex items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#93C7F3] rounded-full transform md:-translate-x-1/2 z-10 animate-pulse"></div>

                <div
                  className={`ml-16 md:ml-0 md:w-[45%] ${
                    i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  } bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#93C7F3]/20 hover:border-[#93C7F3]/40 transition-all duration-500 hover:scale-105`}
                >
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

      {/* Moments Précieux Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Moments <span className="text-[#93C7F3]">Précieux</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/471780943_1075563971250575_7018799193028159953_n.jpg",
              "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/tontonbob%20%20IMG_2126.jpg",
              "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/696357e7-0ffd-4038-8870-19a07ab56db6.jpg",
            ].map((image, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
                className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src={image}
                  alt={`Souvenir ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    Souvenir {i + 1}
                  </p>
                </div>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"></div>
              </div>
            ))}
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="600">
            <Link
              href="/photos"
              className="inline-block px-8 py-4 bg-[#93C7F3] text-white rounded-lg hover:bg-[#7ab3e0] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Voir plus de photos
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20 w-full bg-[url('/new/bg.png')] bg-cover bg-center px-4 md:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div data-aos="zoom-in" data-aos-delay="200">
            <blockquote className="text-3xl md:text-4xl text-gray-200 italic leading-relaxed mb-8 relative">
              <span className="text-6xl text-[#93C7F3] opacity-50 absolute -top-4 -left-4">&ldquo;</span>
              <span className="relative z-10">
                Elle restera à jamais dans nos cœurs comme un exemple de joie, d&apos;amour et de courage.
              </span>
              <span className="text-6xl text-[#93C7F3] opacity-50 absolute -bottom-8 -right-4">&rdquo;</span>
            </blockquote>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#93C7F3] to-transparent mx-auto animate-pulse-glow"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

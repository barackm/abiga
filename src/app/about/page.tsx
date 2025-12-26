'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

const AboutPage = () => {
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

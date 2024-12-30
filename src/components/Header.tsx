"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getHeaderContent = () => {
    switch (pathname) {
      case "/about":
        return {
          subtitle: "Biographie",
          title: "Son Histoire",
          description: "Un parcours de vie inspirant",
        };
      case "/photos":
        return {
          subtitle: "Souvenirs",
          title: "Moments Précieux",
          description: "Une collection de moments inoubliables",
        };
      case "/tributes":
        return {
          subtitle: "Hommages",
          title: "Messages",
          description: "Témoignages et messages de sympathie",
        };
      default:
        return {
          subtitle: "In Memoriam",
          title: "À la Mémoire",
          description: "Programme des Obsèques",
        };
    }
  };

  const content = getHeaderContent();

  return (
    <header className='relative bg-gray-900 text-white py-10'>
      <div
        className='absolute inset-0 bg-[url("/subtle-pattern.png")] opacity-10'
        style={{ backgroundSize: "40px 40px" }}
      />
      <div className='relative container mx-auto px-4 text-center'>
        <p className='text-gray-400 font-serif mb-2 tracking-widest text-sm' data-aos='fade-down'>
          {content.subtitle}
        </p>
        <h1
          className='font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-3'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          {content.title}
        </h1>
        <div
          className='w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-3'
          data-aos='fade-up'
          data-aos-delay='200'
        />
        <p
          className='text-base sm:text-lg font-light tracking-wide text-gray-300'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          {content.description}
        </p>
      </div>
    </header>
  );
}

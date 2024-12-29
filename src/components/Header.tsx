import React from "react";

export default function Header() {
  return (
    <header className='relative bg-gray-900 text-white py-10'>
      <div
        className='absolute inset-0 bg-[url("/subtle-pattern.png")] opacity-10'
        style={{ backgroundSize: "40px 40px" }}
      />
      <div className='relative container mx-auto px-4 text-center'>
        <p className='text-gray-400 font-serif mb-2 tracking-widest text-sm'>In Memoriam</p>
        <h1 className='font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-3'>À la Mémoire</h1>
        <div className='w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-3' />
        <p className='text-base sm:text-lg font-light tracking-wide text-gray-300'>Programme des Obsèques</p>
      </div>
    </header>
  );
}

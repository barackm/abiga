'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-teal-400"   data-aos='zoom-in'>
         <Image src="/new/log02.jpeg" width={200} height={300} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-thin"   data-aos='fade-up'>
          <li><Link href="/" className="hover:text-teal-400 text-[#93C7F3]">Home</Link></li>
          <li><Link href="/biography" className="hover:text-teal-400">Biography</Link></li>
          <li><Link href="/about" className="hover:text-teal-400">About</Link></li>
          <li><Link href="/family-moments" className="hover:text-teal-400">Family Moments</Link></li>
          <li><Link href="/photos" className="hover:text-teal-400">Photos</Link></li>
          <li><Link href="/tributes" className="hover:text-teal-400">Tributes</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black text-white p-4 space-y-4 text-center">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/family-moments" onClick={() => setIsOpen(false)}>Family Moments</Link></li>
          <li><Link href="/photos" onClick={() => setIsOpen(false)}>Photos</Link></li>
          <li><Link href="/tributes" onClick={() => setIsOpen(false)}>Tributes</Link></li>
        </ul>
      )}
    </nav>
  );
}

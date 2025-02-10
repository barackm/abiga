'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-teal-400">
         <Image src="/new/log02.jpeg" width={200} height={300} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-teal-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-teal-400">About Us</Link></li>
          <li><Link href="/services" className="hover:text-teal-400">Services</Link></li>
          <li><Link href="/portfolio" className="hover:text-teal-400">Portfolio</Link></li>
          <li><Link href="/pages" className="hover:text-teal-400">Pages</Link></li>
          <li><Link href="/contact" className="hover:text-teal-400">Contact Us</Link></li>
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
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
          <li><Link href="/pages" onClick={() => setIsOpen(false)}>Pages</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}

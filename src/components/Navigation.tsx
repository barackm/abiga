import Link from "next/link";
import React from "react";
import { mainNavLinks } from "@/config/routes";

export default function Navigation() {
  return (
    <nav className='bg-white border-b border-gray-100 shadow-sm'>
      <div className='container mx-auto px-2 py-2'>
        <ul className='flex justify-center space-x-4 md:space-x-8'>
          {mainNavLinks.map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <Link
                href={href}
                className='flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors group'
              >
                <Icon className='text-xl mb-0.5 group-hover:scale-110 transition-transform' />
                <span className='text-xs font-semibold tracking-wide'>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

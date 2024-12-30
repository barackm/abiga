"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { mainNavLinks } from "@/config/routes";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className='bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm'>
      <div className='container mx-auto px-4 py-2'>
        <ul className='flex justify-center space-x-6 md:space-x-12'>
          {mainNavLinks.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex flex-col items-center transition-colors duration-200 relative group
                    ${isActive ? "text-green-600" : "text-gray-500 hover:text-gray-900"}`}
                >
                  <Icon className='text-lg mb-1' />
                  <span className='text-sm font-medium tracking-wide'>{label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-200 group-hover:w-full
                    ${isActive ? "w-full bg-green-600" : "bg-gray-900"}`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

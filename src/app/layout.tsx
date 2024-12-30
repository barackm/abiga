"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 flex flex-col overflow-x-hidden'>
          <Header />
          <Navigation />
          <main className='container flex-1 mx-auto px-4 py-12 max-w-3xl'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

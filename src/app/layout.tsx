"use client";
import "./globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPage from "@/components/contact";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
      <body className={`${roboto.variable} antialiased`}>
          <Header />
          <main className='w-full flex flex-col font-sans justify-center'>
            {children}
          </main>
          <ContactPage />
          <Footer />
      </body>
    </html> 
  );
}

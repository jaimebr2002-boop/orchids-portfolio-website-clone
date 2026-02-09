"use client";

import { Suspense } from 'react';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/sections/footer';
import { useScrollColor } from '@/hooks/use-scroll-color';

export default function Home() {
  const scrollColor = useScrollColor([
    { color: '#ffffff', position: 0 },      // Blanco - Hero
    { color: '#f0f9ff', position: 0.2 },    // Azul muy claro - About
    { color: '#faf5ff', position: 0.4 },    // Violeta muy claro - Services
    { color: '#fff7ed', position: 0.6 },    // Naranja muy claro - Portfolio
    { color: '#ecfdf5', position: 0.8 },    // Verde muy claro - Contact
    { color: '#f5f5f5', position: 1 },      // Gris claro - Footer
  ]);

  return (
    <main 
      className="min-h-screen transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: scrollColor }}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <Suspense fallback={<div className="py-24" />}>
        <ContactSection />
      </Suspense>
      <Footer />
    </main>
  );
}
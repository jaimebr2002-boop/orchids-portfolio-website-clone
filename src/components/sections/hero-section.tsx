"use client";

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import TiltedCard from '@/components/ui/tilted-card';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="inline-block"
              >
                Jaime
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-accent inline-block"
              >
                Bernaldez
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="inline-block"
              >
                Reina
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="text-xl lg:text-2xl text-muted-foreground mb-8 font-light"
            >
              Optimizando negocios para impulsar ventas, ahorrar tiempo y lograr resultados reales
            </motion.p>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
              href="#contact"
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_10px_30px_-5px_rgba(0,229,255,0.3)] transition-all duration-300 hover:scale-105"
            >
              Trabajemos juntos
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <TiltedCard
              imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/749d15a1-642f-4874-8096-1f7da3d06e6a-portfoliojb-lovable-app/assets/images/jaime-profile-Bx0Wy3VD-1.png"
              altText="Jaime Bernaldez Reina"
              containerHeight="28rem"
              containerWidth="28rem"
              imageHeight="611"
              imageWidth="448"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </motion.div>
        </div>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors"
      >
        <span className="animate-bounce block">
          <ArrowDown className="w-8 h-8" />
        </span>
      </motion.a>
    </section>
  );
};

export default HeroSection;
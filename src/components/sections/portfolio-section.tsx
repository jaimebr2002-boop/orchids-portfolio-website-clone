"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  alt: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Salvatore Restaurant",
    description: "Sitio web completo para restaurante italiano con sistema de reservas, menú interactivo y galería de imágenes.",
    category: "Desarrollo Web",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764262708823.png",
    alt: "Salvatore Restaurant",
    link: "https://elsalvatore.vercel.app/"
  },
  {
    title: "Teikito Oviedo",
    description: "Sitio web elegante para restaurante japonés con menú digital, galería de platos y experiencia visual moderna.",
    category: "Desarrollo Web",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764262555001.png",
    alt: "Teikito Oviedo",
    link: "https://teikitoviedo.vercel.app/"
  },
  {
    title: "Talleres MGA",
    description: "Página web profesional para taller mecánico con servicios detallados, portfolio de trabajos y contacto directo.",
    category: "Desarrollo Web",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764262688897.png",
    alt: "Talleres MGA",
    link: "https://talleresmga.figma.site/"
  },
  {
    title: "Barbería del Cristo",
    description: "Plataforma web moderna para barbería con sistema de citas online, galería de servicios y perfil profesional.",
    category: "Desarrollo Web",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764262654443.png",
    alt: "Barbería del Cristo",
    link: "https://barberiadelcristo.lovable.app/"
  },
  {
    title: "JG Suplementación",
    description: "Tienda online de suplementos deportivos con catálogo de productos, carrito de compras y gestión de pedidos.",
    category: "E-Commerce",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764262619067.png",
    alt: "JG Suplementación",
    link: "https://jgsuplementacion.lovable.app/"
  },
  {
    title: "Asistente Virtual IA",
    description: "Asistente virtual inteligente desarrollado para Barbería del 32, automatizando atención al cliente y gestión de citas 24/7.",
    category: "Caso de Éxito",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/749d15a1-642f-4874-8096-1f7da3d06e6a/generated_images/modern-virtual-assistant-ai-interface-sc-3165abd4-20251127165955.jpg",
    alt: "Asistente Virtual IA"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="text-5xl lg:text-6xl font-black text-foreground mb-4"
          >
            Proyectos <span className="text-accent">destacados</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
              },
            }}
            className="text-xl text-muted-foreground mb-16"
          >
            Una selección de trabajos que definen mi experiencia
          </motion.p>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] ${project.link ? 'cursor-pointer' : ''}`}
                variants={itemVariants}
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                  {project.link && (
                    <div className="absolute top-4 right-4 w-12 h-12 bg-accent/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2 group-hover:scale-105 transition-transform duration-300 inline-block">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
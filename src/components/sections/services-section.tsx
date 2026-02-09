"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Palette,
  TrendingUp,
  Globe,
  Bot,
  Headphones,
} from "lucide-react";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Settings,
    title: "Automatización y Productividad",
    description:
      "Implementación de soluciones que automatizan tareas repetitivas (como el envío de correos o la gestión de datos) para liberar tiempo valioso de tu equipo.",
  },
  {
    icon: Palette,
    title: "Identidad Visual y Diseño",
    description:
      "Diseño profesional de logotipos y material gráfico para reforzar la identidad de tu marca y proyectar una imagen coherente y memorable.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital y Contenido",
    description:
      "Estrategias de creación de contenido (redes sociales, blogs, campañas) enfocadas en aumentar el alcance y la interacción con tu audiencia.",
  },
  {
    icon: Globe,
    title: "Presencia Web Profesional",
    description:
      "Diseño y desarrollo de páginas web corporativas eficientes o soluciones de hostelería como cartas digitales y menús interactivos.",
  },
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description:
      "Implementación de chatbots conversacionales que atienden consultas, resuelven dudas frecuentes y guían a tus clientes de forma autónoma (24/7).",
  },
  {
    icon: Headphones,
    title: "Agentes Telefónicos IA",
    description:
      "Sistemas de voz inteligentes que gestionan llamadas, agendan citas y brindan atención personalizada sin intervención humana.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-black text-foreground mb-4"
          >
            Lo que <span className="text-accent">ofrezco</span>
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
            Servicios profesionales adaptados a tus necesidades
          </motion.p>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all duration-500 hover:shadow-lg hover:-translate-y-3"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
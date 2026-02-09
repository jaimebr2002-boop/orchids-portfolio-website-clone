"use client";

import React from 'react';
import { motion } from 'framer-motion';

const missionPoints = [
  "Impulsar la eficiencia y la rentabilidad de los negocios.",
  "Ahorrar tiempo eliminando tareas manuales y repetitivas.",
  "Diseñar sistemas prácticos y duraderos que permitan centrarse en lo importante: crecer.",
];

const stats = [
  { value: "10+", label: "Proyectos en fase beta" },
  { value: "15+", label: "Herramientas dominadas" },
  { value: "500+", label: "Horas de práctica real" },
  { value: "100%", label: "Compromiso" },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-black text-foreground mb-12"
          >
            Sobre <span className="text-accent">mí</span>
          </motion.h2>

          <div className="space-y-6 text-lg text-foreground/80">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
                },
              }}
              className="leading-relaxed"
            >
              Soy <strong className="text-foreground font-semibold">Jaime Bernáldez Reina</strong>, un profesional enfocado en ayudar a empresas y emprendedores a optimizar sus procesos, automatizar tareas y mejorar sus resultados mediante soluciones digitales claras y efectivas.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                },
              }}
              className="bg-card border border-border rounded-xl p-6 my-8 hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">Mi misión principal</h3>
              <ul className="space-y-3 text-foreground/80">
                {missionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.1 },
                      },
                    }}
                    className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <span className="text-accent text-xl">•</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
                },
              }}
              className="leading-relaxed"
            >
              A través de herramientas digitales modernas, IA y estrategias personalizadas, diseño e implemento soluciones que mejoran la atención al cliente, fortalecen la presencia online y optimizan el flujo de trabajo.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
                },
              }}
              className="leading-relaxed"
            >
              He desarrollado diversos proyectos en fase beta que me han permitido adquirir experiencia real, entender las necesidades de cada negocio y ofrecer resultados funcionales desde el primer día.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
                },
              }}
              className="leading-relaxed font-semibold text-foreground"
            >
              Mi compromiso: dedicación total, aprendizaje constante y una clara orientación a resultados.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-card rounded-xl border border-border hover:border-accent hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-4xl lg:text-5xl font-black text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
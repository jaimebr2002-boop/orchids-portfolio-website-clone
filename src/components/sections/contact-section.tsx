"use client";

import { Mail, Phone, Send } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'sonner';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

// Separate component for search params to properly handle Suspense
const SuccessToast = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Mostrar mensaje de éxito si viene de FormSubmit
    if (searchParams.get('submitted') === 'true') {
      toast.success('¡Mensaje enviado con éxito! Te contactaré pronto.');
    }
  }, [searchParams]);

  return null;
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

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Validación básica del lado del cliente
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    if (!name?.trim()) {
      e.preventDefault();
      toast.error('Por favor, ingresa tu nombre');
      return;
    }
    
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.preventDefault();
      toast.error('Por favor, ingresa un email válido');
      return;
    }
    
    if (!message?.trim()) {
      e.preventDefault();
      toast.error('Por favor, escribe un mensaje');
      return;
    }

    setIsSubmitting(true);
    // El formulario se enviará normalmente a FormSubmit.co
  };

  return (
    <section id="contact" className="py-24">
      <Suspense fallback={null}>
        <SuccessToast />
      </Suspense>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-black text-foreground mb-4 text-center"
          >
            Hablemos de tu <span className="text-accent">proyecto</span>
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
            className="text-xl text-muted-foreground mb-16 text-center"
          >
            Estoy disponible para nuevas oportunidades y colaboraciones
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
                },
              }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
                    },
                  }}
                  href="mailto:jaimebernaldezimpulsa@gmail.com"
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent transition-all duration-500 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    jaimebernaldezimpulsa@gmail.com
                  </span>
                </motion.a>
                <motion.a
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut", delay: 0.5 },
                    },
                  }}
                  href="tel:722785142"
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent transition-all duration-500 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    722 785 142
                  </span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
                },
              }}
            >
              <form 
                action="https://formsubmit.co/jaimebernaldezimpulsa@gmail.com" 
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Campos ocultos de FormSubmit.co */}
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/?submitted=true#contact` : '/?submitted=true#contact'} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-foreground/80 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                      placeholder="Tu nombre"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-foreground/80 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                      placeholder="tu@email.com"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-foreground/80 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                    placeholder="Cuéntame sobre tu proyecto..."
                    disabled={isSubmitting}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
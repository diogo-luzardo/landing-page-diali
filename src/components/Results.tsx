import React from 'react';
import { motion } from 'motion/react';

export default function Results() {
  const images = [
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80"
  ];

  return (
    <section id="resultados" className="py-24 bg-gradient-to-b from-diali-dark via-diali-dark to-diali-cream relative text-diali-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h3 className="font-sans text-diali-gold font-semibold tracking-widest uppercase text-sm mb-4">Galeria</h3>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Resultados que Inspiram Confiança</h2>
            <div className="w-20 h-1 bg-diali-olive"></div>
          </div>
          <p className="font-sans text-diali-sand font-light max-w-sm">
            Nossa abordagem visa realçar a sua beleza natural, respeitando seus traços 
            com protocolos personalizados de alta tecnologia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${
                index === 0 || index === 3 ? 'aspect-square' : 'aspect-[4/5]'
              }`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={src} 
                alt="Resultado de procedimento estético" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

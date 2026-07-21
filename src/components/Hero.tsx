import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" 
          alt="Estética Avançada" 
          className="w-full h-full object-cover opacity-30 object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-diali-cream via-diali-cream/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-diali-gold font-semibold tracking-widest uppercase text-sm mb-4">
              Beleza Lapidada Pelo Tempo
            </h2>
            <h1 className="font-serif text-5xl lg:text-7xl text-diali-dark leading-tight mb-6">
              Sua essência, <br />
              elevada com <span className="italic text-diali-brown">sofisticação</span>.
            </h1>
            <p className="font-sans text-lg text-diali-brown mb-10 leading-relaxed max-w-xl font-light">
              Na Diali, unimos precisão arquitetônica e segurança clínica para revelar 
              a sua melhor versão. Especialistas em procedimentos faciais e corporais 
              focados no conceito de <em>pro-aging</em>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#agendamento"
                className="inline-flex justify-center items-center bg-diali-dark text-diali-cream px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-diali-gold hover:text-white transition-all duration-300"
              >
                Agende sua Avaliação
              </a>
              <a 
                href="#procedimentos"
                className="inline-flex justify-center items-center border border-diali-brown text-diali-brown px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-diali-sand transition-all duration-300"
              >
                Conheça os Tratamentos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

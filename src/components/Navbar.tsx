import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed w-full z-50 bg-diali-cream/90 backdrop-blur-md border-b border-diali-sand"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/logo-icon.png" alt="Diali Logo" className="hidden md:block h-20 w-auto object-contain" />
            <div className="flex flex-col items-center justify-center pt-1">
              <span className="font-serif text-4xl tracking-widest text-diali-dark leading-none">DIALI</span>
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-diali-brown uppercase mt-1.5">Estética Avançada</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#conceito" className="font-sans text-sm font-medium text-diali-brown hover:text-diali-gold transition-colors">Conceito</a>
            <a href="#procedimentos" className="font-sans text-sm font-medium text-diali-brown hover:text-diali-gold transition-colors">Procedimentos</a>
            <a href="#resultados" className="font-sans text-sm font-medium text-diali-brown hover:text-diali-gold transition-colors">Resultados</a>
            <a href="#depoimentos" className="font-sans text-sm font-medium text-diali-brown hover:text-diali-gold transition-colors">Depoimentos</a>
            <a 
              href="#agendamento" 
              className="bg-diali-dark text-diali-cream px-6 py-3 font-sans text-sm uppercase tracking-wider hover:bg-diali-gold transition-colors duration-300"
            >
              Agendar Consulta
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-diali-dark hover:text-diali-gold">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-diali-cream border-b border-diali-sand">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <a href="#conceito" onClick={() => setIsOpen(false)} className="block px-3 py-2 font-sans text-base font-medium text-diali-brown hover:text-diali-gold">Conceito</a>
            <a href="#procedimentos" onClick={() => setIsOpen(false)} className="block px-3 py-2 font-sans text-base font-medium text-diali-brown hover:text-diali-gold">Procedimentos</a>
            <a href="#resultados" onClick={() => setIsOpen(false)} className="block px-3 py-2 font-sans text-base font-medium text-diali-brown hover:text-diali-gold">Resultados</a>
            <a href="#depoimentos" onClick={() => setIsOpen(false)} className="block px-3 py-2 font-sans text-base font-medium text-diali-brown hover:text-diali-gold">Depoimentos</a>
            <a 
              href="#agendamento"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-diali-dark text-diali-cream px-6 py-3 font-sans text-sm uppercase tracking-wider hover:bg-diali-gold transition-colors"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="agendamento" className="bg-diali-dark text-diali-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-16 mb-16 border-b border-diali-brown/40 pb-16"
        >
          
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-4xl tracking-widest text-diali-cream">DIALI</span>
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-diali-gold uppercase mt-1">Estética Avançada</span>
            </div>
            <p className="font-sans text-diali-sand font-light text-sm max-w-xs mb-8">
              Acolhimento, técnica e sofisticação para revelar sua melhor versão através do conceito pro-aging.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/dialiestetica/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-diali-brown flex items-center justify-center rounded-full hover:bg-diali-gold hover:border-diali-gold hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-diali-brown flex items-center justify-center rounded-full hover:bg-diali-gold hover:border-diali-gold hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm tracking-widest uppercase text-diali-gold mb-6 font-semibold">Contato & Endereço</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-diali-sand mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-diali-sand font-light">
                  Atendimentos em salas especializadas<br />
                  Santana, Zona Norte - São Paulo, SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-diali-sand flex-shrink-0" />
                <span className="font-sans text-sm text-diali-sand font-light">
                  (21) 99999-9999
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-diali-sand flex-shrink-0" />
                <span className="font-sans text-sm text-diali-sand font-light">
                  contato@dialiestetica.com.br
                </span>
              </li>
            </ul>
          </div>

          {/* Booking CTA */}
          <div>
            <h4 className="font-sans text-sm tracking-widest uppercase text-diali-gold mb-6 font-semibold">Agende sua Consulta</h4>
            <p className="font-sans text-sm text-diali-sand font-light mb-6">
              Pronta para lapidar sua beleza natural? Entre em contato via WhatsApp e nossa equipe de concierge irá agendar o seu momento.
            </p>
            <a 
              href="https://wa.me/5521999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-diali-gold text-white px-6 py-4 font-sans text-sm uppercase tracking-widest hover:bg-diali-sand hover:text-diali-dark transition-all duration-300"
            >
              Falar no WhatsApp
            </a>
          </div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-sans text-xs text-diali-brown font-light">
            &copy; {new Date().getFullYear()} Diali Estética Avançada. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-sans text-xs text-diali-brown hover:text-diali-sand transition-colors">Termos de Uso</a>
            <a href="#" className="font-sans text-xs text-diali-brown hover:text-diali-sand transition-colors">Privacidade</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}

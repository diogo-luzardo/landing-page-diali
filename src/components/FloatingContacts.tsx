import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Instagram, X } from 'lucide-react';

export default function FloatingContacts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/dialiestetica/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
              aria-label="Acesse nosso Instagram"
            >
              <Instagram size={24} />
              <span className="absolute right-full mr-4 bg-white text-diali-dark text-xs font-sans font-medium px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Nosso Instagram
              </span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
              aria-label="Atendimento via WhatsApp"
            >
              <MessageCircle size={24} />
              <span className="absolute right-full mr-4 bg-white text-diali-dark text-xs font-sans font-medium px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Agende sua avaliação
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        className="bg-diali-gold text-white p-4 rounded-full shadow-xl hover:bg-opacity-90 hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Contatos"
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle size={28} />
        </motion.div>
      </motion.button>
    </div>
  );
}

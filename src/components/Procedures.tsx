import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Flower2, Gem } from 'lucide-react';

export default function Procedures() {
  const facialProcedures = [
    "Harmonização Facial",
    "Toxina Botulínica (Botox)",
    "Preenchimento com Ácido Hialurônico",
    "Fios de PDO (Sustentação e Colágeno)",
    "Bioestimuladores de Colágeno",
    "Peeling Químico Avançado",
    "Microagulhamento Robótico",
    "Skinbooster"
  ];

  const bodyProcedures = [
    "Drenagem Linfática Método Exclusivo",
    "Tratamento para Flacidez e Celulite",
    "Criolipólise Avançada",
    "Enzimas Lipolíticas (Lipo Enzimática)",
    "Radiofrequência Corporal",
    "Massagem Modeladora",
    "Protocolo Pós-Operatório",
    "Tratamento para Estrias"
  ];

  const gluteoProcedures = [
    "Preenchimento com Ácido Hialurônico",
    "Bioestimuladores de Colágeno (Firmeza)",
    "Remodelação e Contorno Glúteo",
    "Tratamento Avançado para Celulite",
    "Fios de PDO (Lifting e Sustentação)",
    "Protocolo de Combate à Flacidez"
  ];

  return (
    <section id="procedimentos" className="pt-24 pb-32 bg-gradient-to-b from-[#ECE8DE] via-[#ECE8DE] to-diali-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="font-sans text-diali-olive font-semibold tracking-widest uppercase text-sm mb-4">Portfólio de Cuidados</h3>
          <h2 className="font-serif text-4xl lg:text-5xl text-diali-dark mb-6">Nossos Procedimentos</h2>
          <div className="w-20 h-1 bg-diali-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Facial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-diali-cream p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-8 text-diali-sand opacity-20">
              <Sparkles size={100} strokeWidth={0.5} />
            </div>
            
            <h3 className="font-serif text-2xl text-diali-dark mb-8 relative z-10 flex items-center gap-4">
              Estética Facial
            </h3>
            
            <ul className="space-y-4 relative z-10 flex-grow">
              {facialProcedures.map((proc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-diali-gold mt-2 flex-shrink-0"></div>
                  <span className="font-sans text-sm text-diali-brown font-light">{proc}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 relative z-10">
              <a 
                href="#agendamento" 
                className="inline-block border-b border-diali-brown text-diali-brown font-sans text-xs lg:text-sm uppercase tracking-widest pb-1 hover:text-diali-gold hover:border-diali-gold transition-colors"
              >
                Agendar Avaliação Facial
              </a>
            </div>
          </motion.div>

          {/* Corporal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-diali-cream p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-8 text-diali-sand opacity-20">
              <Flower2 size={100} strokeWidth={0.5} />
            </div>
            
            <h3 className="font-serif text-2xl text-diali-dark mb-8 relative z-10 flex items-center gap-4">
              Estética Corporal
            </h3>
            
            <ul className="space-y-4 relative z-10 flex-grow">
              {bodyProcedures.map((proc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-diali-olive mt-2 flex-shrink-0"></div>
                  <span className="font-sans text-sm text-diali-brown font-light">{proc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 relative z-10">
              <a 
                href="#agendamento" 
                className="inline-block border-b border-diali-brown text-diali-brown font-sans text-xs lg:text-sm uppercase tracking-widest pb-1 hover:text-diali-olive hover:border-diali-olive transition-colors"
              >
                Agendar Avaliação Corporal
              </a>
            </div>
          </motion.div>

          {/* Glúteos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-diali-cream p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-8 text-diali-sand opacity-20">
              <Gem size={100} strokeWidth={0.5} />
            </div>
            
            <h3 className="font-serif text-2xl text-diali-dark mb-8 relative z-10 flex items-center gap-4">
              Harmonização de Glúteos
            </h3>
            
            <ul className="space-y-4 relative z-10 flex-grow">
              {gluteoProcedures.map((proc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-diali-brown mt-2 flex-shrink-0"></div>
                  <span className="font-sans text-sm text-diali-brown font-light">{proc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 relative z-10">
              <a 
                href="#agendamento" 
                className="inline-block border-b border-diali-brown text-diali-brown font-sans text-xs lg:text-sm uppercase tracking-widest pb-1 hover:text-diali-sand hover:border-diali-sand transition-colors"
              >
                Agendar Avaliação Glútea
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

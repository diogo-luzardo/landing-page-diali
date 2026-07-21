import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana S.",
      text: "A experiência na Diali foi transformadora. O cuidado e a atenção aos detalhes me passaram muita segurança. O resultado do meu preenchimento ficou extremamente natural, exatamente como eu queria."
    },
    {
      name: "Camila V.",
      text: "Frequento a clínica há mais de um ano para tratamentos corporais e faciais. O conceito de pro-aging delas mudou minha visão sobre estética. Ambiente sofisticado e profissionais impecáveis."
    },
    {
      name: "Juliana T.",
      text: "Desde a avaliação até o pós-procedimento, me senti acolhida. Fiz os fios de PDO e os resultados superaram minhas expectativas. É um investimento real na nossa autoestima."
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-diali-cream via-diali-cream to-diali-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="font-sans text-diali-olive font-semibold tracking-widest uppercase text-sm mb-4">Experiência Diali</h3>
          <h2 className="font-serif text-4xl lg:text-5xl text-diali-dark mb-6">O Que Dizem Nossas Pacientes</h2>
          <div className="w-20 h-1 bg-diali-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-10 border border-diali-sand/50 relative"
            >
              <Quote className="w-10 h-10 text-diali-gold/20 absolute top-6 right-6" />
              
              <div className="flex text-diali-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="font-sans text-diali-brown font-light leading-relaxed mb-8 italic">
                "{test.text}"
              </p>
              
              <p className="font-sans font-medium text-diali-dark tracking-wide uppercase text-sm">
                — {test.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

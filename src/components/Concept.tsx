import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Droplet, Ruler, ArrowUpRight } from 'lucide-react';

export default function Concept() {
  const concepts = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-diali-gold" strokeWidth={1.5} />,
      title: "Concha",
      desc: "Proteção, cuidado e preservação da sua beleza natural."
    },
    {
      icon: <Droplet className="w-8 h-8 text-diali-gold" strokeWidth={1.5} />,
      title: "Pérola",
      desc: "Essência, transformação contínua e sofisticação."
    },
    {
      icon: <Ruler className="w-8 h-8 text-diali-gold" strokeWidth={1.5} />,
      title: "Traços Arquitetônicos",
      desc: "Precisão absoluta, técnica avançada e segurança clínica."
    },
    {
      icon: <ArrowUpRight className="w-8 h-8 text-diali-gold" strokeWidth={1.5} />,
      title: "Elevação",
      desc: "Expansão, renovação e resultados que transcendem expectativas."
    }
  ];

  return (
    <section id="conceito" className="py-24 bg-gradient-to-b from-diali-cream via-diali-cream to-[#ECE8DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-sans text-diali-olive font-semibold tracking-widest uppercase text-sm mb-4">A Metáfora do Tempo</h3>
            <h2 className="font-serif text-4xl lg:text-5xl text-diali-dark mb-6">O Conceito Concha e Pérola</h2>
            <div className="w-20 h-1 bg-diali-gold mb-8"></div>
            
            <p className="font-sans text-diali-brown mb-6 leading-relaxed font-light">
              A concha e a pérola foram escolhidas para representar a jornada do <strong>pro-aging</strong>. 
              A pérola não nasce pronta; ela é lapidada pelo tempo, camada por camada, 
              tornando-se sinônimo de preciosidade e maturidade. 
            </p>
            <p className="font-sans text-diali-brown mb-10 leading-relaxed font-light">
              A concha simboliza o acolhimento e a proteção clínica. O cuidado e a técnica 
              que envolvem você com segurança, promovendo resultados elegantes para homens e mulheres.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {concepts.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-diali-dark uppercase tracking-wider text-sm mb-2">{item.title}</h4>
                    <p className="font-sans text-sm text-diali-brown font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-t-full">
              <img 
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80" 
                alt="Detalhe Estético" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-diali-dark/10"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-diali-gold rounded-full -z-10"></div>
            <div className="absolute top-1/2 -right-12 w-64 h-64 bg-diali-sand/30 rounded-full -z-10 blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

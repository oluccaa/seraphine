import React from 'react';
import { Section, Container, FadeIn, ParallaxImage } from '../components/Layout';
import { SERVICES } from '../constants';
import { ASSETS } from '../assets';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const Services = () => {
  const getServiceImage = (id: string) => {
    const images: Record<string, string> = {
      'ginecologia-geral': ASSETS.images.services['ginecologia-geral'],
      'obstetricia': ASSETS.images.services['obstetricia'],
      'cirurgia-minimamente-invasiva': ASSETS.images.services['cirurgia-minimamente-invasiva'],
      'menopausa': ASSETS.images.services['menopausa'],
    };
    return images[id] || ASSETS.images.services.default;
  };

  return (
    <div className="pt-20">
      <Section className="bg-brand-secondary">
        <Container>
          <FadeIn>
            <div className="max-w-3xl space-y-8 mb-20">
              <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-primary/50">Especialidades</p>
              <h1 className="text-7xl md:text-8xl font-light leading-[0.9] tracking-tighter">
                Cuidados em cada <span className="italic">fase</span>.
              </h1>
              <p className="text-xl text-brand-text/60 leading-relaxed font-light">
                Da adolescência à maturidade, oferecemos soluções médicas avançadas com um olhar sensível e personalizado.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-12">
            {SERVICES.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.1}>
                <div className={cn(
                  "bg-white rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-sm hover:shadow-xl transition-all duration-700 group",
                  idx % 2 !== 0 && "lg:flex-row-reverse"
                )}>
                  <div className="lg:w-1/2 overflow-hidden">
                    <img 
                      src={getServiceImage(service.id)} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center space-y-8">
                    <div className="w-16 h-16 rounded-2xl bg-brand-secondary flex items-center justify-center text-brand-primary">
                      <service.icon size={32} />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-serif">{service.title}</h2>
                      <p className="text-brand-text/60 leading-relaxed">{service.description}</p>
                    </div>
                    <ul className="space-y-3">
                      {["Protocolos Personalizados", "Tecnologia de Ponta", "Acompanhamento Integral"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-brand-text/70">
                          <CheckCircle2 size={16} className="text-brand-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contato" 
                      className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase self-start hover:scale-105 transition-transform inline-block"
                    >
                      Agendar Consulta
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

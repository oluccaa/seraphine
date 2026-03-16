import React from 'react';
import { Section, Container, FadeIn, Magnetic } from '../components/Layout';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { ConciergeForm } from '../components/ConciergeForm';

export const Contact = () => {
  return (
    <div className="pt-20">
      <Section className="bg-white">
        <Container className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-16">
            <FadeIn>
              <div className="space-y-8">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-primary/50">Contato</p>
                <h1 className="text-7xl md:text-8xl font-light leading-[0.9] tracking-tighter">
                  Seu <span className="italic">Concierge</span> de Saúde.
                </h1>
                <p className="text-xl text-brand-text/60 leading-relaxed font-light">
                  Estamos prontos para oferecer um atendimento exclusivo e personalizado. Escolha o canal de sua preferência.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-12">
              {[
                { icon: Phone, title: "Telefone", info: "(11) 99999-9999", sub: "Atendimento 24h" },
                { icon: MessageSquare, title: "WhatsApp", info: "(11) 98888-8888", sub: "Agendamento Rápido" },
                { icon: Mail, title: "E-mail", info: "contato@seraphina.com", sub: "Dúvidas e Protocolos" },
                { icon: Clock, title: "Horários", info: "Seg — Sex", sub: "08:00 às 20:00" }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-secondary flex items-center justify-center text-brand-primary">
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-lg font-serif">{item.title}</h3>
                    <p className="text-brand-text font-medium">{item.info}</p>
                    <p className="text-xs text-brand-text/40 uppercase tracking-widest">{item.sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-brand-primary/5">
              <ConciergeForm />
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="p-0 h-[500px] bg-brand-secondary overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1973413170445!2d-46.65867842366634!3d-23.56134966118671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709400000000!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Section>
    </div>
  );
};

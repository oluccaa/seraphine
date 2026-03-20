import React from 'react';
import { Section, Container, FadeIn, ParallaxImage, Magnetic } from '../components/Layout';
import { ASSETS } from '../assets';
import { Quote, ArrowRight, Award, Heart, Shield, Microscope, Sparkles, Fingerprint } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-20">
      <Section className="bg-white">
        <Container className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-12">
            <FadeIn>
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-primary/50">A Filosofia</p>
                <h1 className="text-7xl md:text-8xl font-light leading-[0.9] tracking-tighter">
                  Ciência com <span className="italic">Alma</span>.
                </h1>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-8 text-xl text-brand-text/70 leading-relaxed font-light">
                <p>
                  O Dr. Henrique Seraphina acredita que a medicina de excelência nasce do equilíbrio entre o rigor científico e a sensibilidade humana.
                </p>
                <p>
                  Formado pelas instituições mais prestigiadas do país e com especializações internacionais, ele traz para o consultório o que há de mais moderno em protocolos de saúde feminina.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-6">
            <FadeIn delay={0.3}>
              <ParallaxImage 
                src={ASSETS.images.drHenrique} 
                alt="Dr. Henrique Seraphina" 
                className="aspect-square rounded-[4rem] shadow-2xl"
              />
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-secondary">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Microscope, title: "Rigor Científico", desc: "Protocolos baseados em evidências e tecnologia diagnóstica de última geração." },
              { icon: Sparkles, title: "Estética Funcional", desc: "O equilíbrio perfeito entre saúde biológica e bem-estar estético." },
              { icon: Fingerprint, title: "Exclusividade", desc: "Cada paciente é única. Seu plano de cuidado é desenhado sob medida." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-primary mx-auto shadow-sm">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-serif">{item.title}</h3>
                  <p className="text-sm text-brand-text/60 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <ParallaxImage 
              src={ASSETS.images.atmosphere.main} 
              alt="Ambiente Clínico Seraphina" 
              className="aspect-[16/9] rounded-[3rem] shadow-xl"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <h2 className="text-5xl font-light tracking-tighter">Um Santuário de Saúde</h2>
              <p className="text-lg text-brand-text/60 leading-relaxed">
                Nossa clínica foi planejada em cada detalhe — da iluminação à acústica — para proporcionar uma experiência de calma e dignidade. Localizada no coração dos Jardins, oferecemos o máximo em privacidade e conforto.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-4xl font-serif text-brand-primary">15+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Anos de Prática</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-serif text-brand-primary">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Foco na Paciente</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
};

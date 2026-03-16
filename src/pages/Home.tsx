import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Section, Container, FadeIn, TextReveal, Magnetic, ParallaxImage } from '../components/Layout';
import { SERVICES, TESTIMONIALS } from '../constants';
import { ArrowRight, Sparkles, ChevronDown, Quote, Star, MessageCircle, Coffee, Stethoscope, HeartPulse, Instagram, Youtube, Facebook, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

import { InteractiveJourney } from '../components/InteractiveJourney';

export const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: y1, opacity }}
            className="absolute inset-0 scale-110"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=727f715ad5905604ccd4b948d7b571685c1a45e0&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-[20vw] md:text-[30vw] font-serif font-bold text-white leading-none tracking-tighter select-none"
          >
            SERAPHINA
          </motion.h2>
        </div>

        <Container className="text-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/80 text-[10px] font-bold tracking-[0.3em] uppercase"
            >
              <Sparkles size={12} className="text-brand-accent" />
              A Nova Era da Ginecologia
            </motion.div>

            <TextReveal 
              text="O CUIDADO QUE TRANSCENDE" 
              className="text-5xl md:text-9xl font-light text-white leading-[0.9] tracking-tighter max-w-5xl mx-auto"
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <Link to="/contato" className="group relative bg-white text-black px-10 py-5 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  AGENDAR EXPERIÊNCIA <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </Container>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Summary About - Editorial Split */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-brand-primary/30" />
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-primary/50">A Autoridade</p>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-[0.9]">
                    Dr. Henrique <br />
                    <span className="italic font-serif text-brand-primary">Seraphina</span>
                  </h2>
                  <div className="space-y-6 text-lg text-brand-text/60 leading-relaxed font-light">
                    <p>
                      Com uma trajetória marcada pela excelência acadêmica e dedicação clínica, o Dr. Henrique Seraphina fundou a clínica com um propósito claro: elevar o padrão da saúde feminina no Brasil.
                    </p>
                    <p>
                      Sua abordagem une a precisão cirúrgica à sensibilidade humana, criando um ambiente onde cada paciente é tratada como única.
                    </p>
                  </div>
                  <Link to="/sobre" className="inline-flex items-center gap-6 group">
                    <div className="relative w-16 h-16 rounded-full border border-brand-primary/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-brand-primary">
                      <ArrowRight size={24} className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" />
                      <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.3em] uppercase group-hover:text-brand-primary transition-colors">Conheça a Filosofia</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 relative">
              <FadeIn delay={0.2}>
                <div className="relative">
                  <ParallaxImage 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200" 
                    alt="Dr. Henrique Seraphina" 
                    className="aspect-[4/5] rounded-[4rem] shadow-2xl"
                  />
                  <motion.div 
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl"
                  >
                    <p className="text-[10px] font-bold tracking-widest uppercase">Referência em Ginecologia Regenerativa</p>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Summary Services */}
      <Section className="bg-brand-secondary">
        <Container>
          <div className="flex justify-between items-end mb-16">
            <FadeIn>
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-primary/50">Serviços</p>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Especialidades</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/servicos" className="text-sm font-bold tracking-widest uppercase text-brand-primary hover:underline underline-offset-8">Ver Todos</Link>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.1}>
                <div className="group bg-white p-10 rounded-[2.5rem] space-y-6 border border-brand-primary/5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(90,90,64,0.1)] hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-brand-secondary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif">{service.title}</h3>
                  <p className="text-sm text-brand-text/60 leading-relaxed">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Atmosphere Gallery - Bento Grid */}
      <Section className="bg-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <FadeIn>
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-primary/50">Atmosfera</p>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Onde o Luxo Encontra a Cura</h2>
              </div>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 h-auto md:h-[800px]">
            <FadeIn className="md:col-span-2 md:row-span-2" delay={0.1}>
              <div className="relative h-full w-full group overflow-hidden rounded-[2.5rem]">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                  alt="Ambiente de Luxo Seraphina" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-10 left-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Ambiente</p>
                  <h3 className="text-3xl font-serif">Sinfonia de Calma</h3>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn className="md:col-span-2 md:row-span-1" delay={0.2}>
              <div className="relative h-full w-full group overflow-hidden rounded-[2.5rem]">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                  alt="Tecnologia Médica Avançada" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>
            </FadeIn>
            
            <FadeIn className="md:col-span-1 md:row-span-1" delay={0.3}>
              <div className="relative h-full w-full group overflow-hidden rounded-[2.5rem]">
                <img 
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200" 
                  alt="Bem-estar e Vitalidade" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>
            </FadeIn>
            
            <FadeIn className="md:col-span-1 md:row-span-1" delay={0.4}>
              <div className="relative h-full w-full group overflow-hidden rounded-[2.5rem]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                  alt="Atendimento Personalizado" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* The Journey Section - Interactive */}
      <Section className="bg-brand-secondary overflow-hidden">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <FadeIn>
              <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-primary/50">The Journey</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Escolha seu Caminho</h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <InteractiveJourney />
          </FadeIn>
        </Container>
      </Section>

      {/* Social Media Section */}
      <Section className="bg-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <FadeIn>
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-primary/50">Conecte-se</p>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Seraphina na Mídia</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* YouTube Highlight */}
            <FadeIn delay={0.1}>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="group relative block h-[400px] rounded-[2.5rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=1200" 
                  alt="YouTube Video" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Play size={32} className="ml-2 text-white" fill="currentColor" />
                  </div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2">Novo Episódio</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-center px-6">A Ciência da Longevidade Feminina</h3>
                </div>
              </a>
            </FadeIn>

            {/* Instagram Grid */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4 h-[400px]">
                {[
                  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600",
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
                  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
                ].map((src, idx) => (
                  <a key={idx} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative block rounded-3xl overflow-hidden">
                    <img 
                      src={src} 
                      alt="Instagram Post" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/40 transition-colors duration-500 flex items-center justify-center">
                      <Instagram size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Testimonials Summary */}
      <Section className="bg-[#0a0a0a] text-white">
        <Container>
          <div className="text-center space-y-12">
            <Quote size={48} className="text-brand-accent mx-auto opacity-50" />
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter max-w-3xl mx-auto">
              "Um atendimento que redefine o conceito de <span className="italic">dignidade</span> na saúde feminina."
            </h2>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-brand-accent" />)}
            </div>
            <p className="text-xs font-bold tracking-widest uppercase opacity-40">Mais de 5.000 vidas transformadas</p>
          </div>
        </Container>
      </Section>
    </div>
  );
};

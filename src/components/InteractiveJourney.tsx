import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

type Node = {
  id: string;
  title: string;
  description: string;
  video: string;
  choices: {
    text: string;
    nextNode: string;
  }[];
  isFinal?: boolean;
};

const STORY_NODES: Record<string, Node> = {
  start: {
    id: 'start',
    title: 'Sua Jornada Começa Aqui',
    description: 'Cada mulher é um universo único. O que você busca transformar em sua vida hoje?',
    video: 'https://player.vimeo.com/external/494252666.sd.mp4?s=727f715ad5905604ccd4b948d7b571685c1a45e0&profile_id=165&oauth2_token_id=57447761',
    choices: [
      { text: 'Recuperar minha confiança íntima', nextNode: 'confidence' },
      { text: 'Viver uma nova fase com plenitude', nextNode: 'new_phase' },
      { text: 'Prevenção e longevidade ativa', nextNode: 'longevity' },
    ],
  },
  confidence: {
    id: 'confidence',
    title: 'A Ciência da Autoestima',
    description: 'Através da Ginecologia Regenerativa, devolvemos não apenas a função, mas a liberdade e o prazer de ser você mesma.',
    video: 'https://player.vimeo.com/external/370331493.sd.mp4?s=33d548605e6183a34617448f4c9f47677c29d7ed&profile_id=164&oauth2_token_id=57447761',
    choices: [],
    isFinal: true,
  },
  new_phase: {
    id: 'new_phase',
    title: 'Acompanhamento em Cada Ciclo',
    description: 'Seja na doçura da maternidade ou na potência da maturidade, estamos aqui para garantir que cada transição seja vivida com dignidade e saúde.',
    video: 'https://player.vimeo.com/external/494252666.sd.mp4?s=727f715ad5905604ccd4b948d7b571685c1a45e0&profile_id=165&oauth2_token_id=57447761',
    choices: [],
    isFinal: true,
  },
  longevity: {
    id: 'longevity',
    title: 'O Futuro da sua Saúde',
    description: 'Protocolos preventivos personalizados e tecnologia diagnóstica de ponta para que você viva mais e, acima de tudo, melhor.',
    video: 'https://player.vimeo.com/external/517090028.sd.mp4?s=696996603a129033320391d3744383a1290333203&profile_id=164&oauth2_token_id=57447761',
    choices: [],
    isFinal: true,
  },
};

export const InteractiveJourney = () => {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const currentNode = STORY_NODES[currentNodeId];

  return (
    <div className="relative w-full h-[600px] md:h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-black group">
      {/* Background Video */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentNode.video}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={currentNode.video} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-20 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNodeId}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-brand-accent">
              <Sparkles size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Experiência Imersiva</span>
            </div>

            <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              {currentNode.title}
            </h3>

            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
              {currentNode.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              {currentNode.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentNodeId(choice.nextNode)}
                  className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
                >
                  {choice.text}
                </button>
              ))}

              {currentNode.isFinal && (
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    to="/contato"
                    state={{ interest: currentNode.title }}
                    className="group bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-3 hover:scale-105 transition-all"
                  >
                    Agendar Minha Experiência <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => setCurrentNodeId('start')}
                    className="flex items-center gap-2 text-white/50 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors"
                  >
                    <RefreshCcw size={14} /> Recomeçar Jornada
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {Object.keys(STORY_NODES).map((nodeId) => (
          <div
            key={nodeId}
            className={`h-1 rounded-full transition-all duration-500 ${
              currentNodeId === nodeId ? 'w-8 bg-brand-accent' : 'w-2 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

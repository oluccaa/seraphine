import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, ChevronLeft, Send, Sparkles, Loader2 } from 'lucide-react';
import { Magnetic } from './Layout';
import { useLocation } from 'react-router-dom';

type FormData = {
  name: string;
  whatsapp: string;
  interest: string;
  preference: string;
  message: string;
};

const STEPS = [
  {
    id: 'welcome',
    title: 'Bem-vinda à Experiência Seraphina',
    subtitle: 'Para iniciarmos seu atendimento exclusivo, como podemos te chamar?',
  },
  {
    id: 'interest',
    title: 'Qual seu principal interesse hoje?',
    subtitle: 'Isso nos ajuda a direcionar você para o especialista ideal.',
  },
  {
    id: 'contact',
    title: 'Como prefere ser contatada?',
    subtitle: 'Respeitamos seu tempo e sua privacidade.',
  },
  {
    id: 'final',
    title: 'Algum detalhe adicional?',
    subtitle: 'Sinta-se à vontade para compartilhar o que desejar.',
  },
];

const INTEREST_OPTIONS = [
  'Ginecologia Regenerativa',
  'Obstetrícia de Alto Nível',
  'Check-up Seraphina',
  'Cirurgia Minimamente Invasiva',
  'Outros Procedimentos',
];

const CONTACT_PREFERENCES = [
  'WhatsApp (Mensagem)',
  'Ligação Telefônica',
  'E-mail',
];

export const ConciergeForm = () => {
  const location = useLocation();
  const [step, setStep] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    interest: '',
    preference: '',
    message: '',
  });

  useEffect(() => {
    if (location.state?.interest) {
      const interestMap: Record<string, string> = {
        'A Ciência da Autoestima': 'Ginecologia Regenerativa',
        'Acompanhamento em Cada Ciclo': 'Obstetrícia de Alto Nível',
        'O Futuro da sua Saúde': 'Check-up Seraphina'
      };
      
      const mappedInterest = interestMap[location.state.interest] || location.state.interest;
      setFormData(prev => ({ ...prev, interest: mappedInterest }));
    }
  }, [location.state]);

  const nextStep = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else handleSubmit();
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSending(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSending(false);
    setIsSubmitted(true);
    // In a real app, send data to backend here
    console.log('Form Submitted:', formData);
  };

  const progress = ((step + 1) / STEPS.length) * 100;

  if (isSending) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-24 space-y-6"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="text-brand-primary"
        >
          <Loader2 size={48} />
        </motion.div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-serif">Processando sua solicitação</h3>
          <p className="text-brand-text/40 text-sm uppercase tracking-[0.2em]">Aguarde um momento...</p>
        </div>
      </motion.div>
    );
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-8 py-20"
      >
        <div className="w-24 h-24 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
          <Check size={40} />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-serif">Solicitação Recebida</h2>
          <p className="text-brand-text/60 max-w-md mx-auto">
            Nossa equipe de concierge entrará em contato em breve para confirmar os detalhes do seu agendamento exclusivo.
          </p>
        </div>
        <button 
          onClick={() => { setIsSubmitted(false); setStep(0); }}
          className="text-xs font-bold tracking-widest uppercase text-brand-primary hover:underline"
        >
          Enviar outra solicitação
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative min-h-[500px] flex flex-col">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-brand-primary"
        />
      </div>

      <div className="pt-12 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-accent">
                <Sparkles size={16} />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Passo {step + 1} de {STEPS.length}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">{STEPS[step].title}</h2>
              <p className="text-brand-text/60 text-lg font-light">{STEPS[step].subtitle}</p>
            </div>

            <div className="space-y-6">
              {step === 0 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Nome Completo</label>
                    <input
                      autoFocus
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-brand-primary/20 py-6 text-2xl focus:border-brand-primary outline-none transition-colors"
                      placeholder="Ex: Maria Seraphina"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">WhatsApp / Telefone</label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-transparent border-b border-brand-primary/20 py-6 text-2xl focus:border-brand-primary outline-none transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="grid gap-3">
                  {INTEREST_OPTIONS.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setFormData({ ...formData, interest: option });
                        setTimeout(nextStep, 300);
                      }}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                        formData.interest === option
                          ? 'border-brand-primary bg-brand-primary text-white'
                          : 'border-brand-primary/10 hover:border-brand-primary/40 bg-white'
                      }`}
                    >
                      <span className="font-medium">{option}</span>
                      <ArrowRight size={18} className={`transition-transform ${formData.interest === option ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-3">
                  {CONTACT_PREFERENCES.map((pref) => (
                    <button
                      key={pref}
                      onClick={() => {
                        setFormData({ ...formData, preference: pref });
                        setTimeout(nextStep, 300);
                      }}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                        formData.preference === pref
                          ? 'border-brand-primary bg-brand-primary text-white'
                          : 'border-brand-primary/10 hover:border-brand-primary/40 bg-white'
                      }`}
                    >
                      <span className="font-medium">{pref}</span>
                      <ArrowRight size={18} className={`transition-transform ${formData.preference === pref ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Sua Mensagem</label>
                  <textarea
                    autoFocus
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-brand-primary/20 py-6 text-xl focus:border-brand-primary outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Conte-nos um pouco mais sobre sua necessidade..."
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Actions */}
      <div className="mt-12 flex items-center justify-between pt-8 border-t border-brand-primary/5">
        <button
          onClick={prevStep}
          disabled={step === 0}
          className={`flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all ${
            step === 0 ? 'opacity-0 pointer-events-none' : 'opacity-40 hover:opacity-100'
          }`}
        >
          <ChevronLeft size={16} /> Voltar
        </button>

        <Magnetic>
          <button
            onClick={nextStep}
            disabled={
              (step === 0 && (!formData.name || !formData.whatsapp)) ||
              (step === 1 && !formData.interest) ||
              (step === 2 && !formData.preference)
            }
            className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-primary/90 transition-all flex items-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {step === STEPS.length - 1 ? (
              <>Finalizar Solicitação <Send size={16} /></>
            ) : (
              <>Próximo Passo <ArrowRight size={16} /></>
            )}
          </button>
        </Magnetic>
      </div>
    </div>
  );
};

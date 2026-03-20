import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const WhatsAppButton = () => {
  // Replace with the actual phone number
  const phoneNumber = "5511999999999"; 
  const message = encodeURIComponent("Olá Dr. Henrique, gostaria de agendar uma consulta.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 100, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3"
      aria-label="Contato via WhatsApp"
      id="whatsapp-floating-button"
    >
      {/* Label that appears on hover */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden md:block bg-black/80 backdrop-blur-xl border border-white/10 text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase pointer-events-none shadow-2xl"
      >
        Falar com Especialista
      </motion.div>

      {/* The Button itself */}
      <div className="relative">
        <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-xl group-hover:bg-brand-accent/40 transition-colors" />
        <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 p-4 rounded-full shadow-2xl flex items-center justify-center group-hover:border-brand-accent/50 transition-all duration-500">
          <MessageCircle size={28} className="text-brand-accent group-hover:scale-110 transition-transform duration-500" />
          
          {/* Subtle notification dot */}
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
          </span>
        </div>
      </div>
    </motion.a>
  );
};

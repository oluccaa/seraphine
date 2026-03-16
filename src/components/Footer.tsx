import React from 'react';
import { Container } from './Layout';

export const Footer = () => (
  <footer className="py-12 px-6 md:px-12 border-t border-brand-primary/10 bg-brand-secondary">
    <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-serif font-bold tracking-tight text-brand-primary">
        SERAPHINA
      </div>
      <p className="text-sm text-brand-text/40">
        © 2026 Clínica Seraphina. Todos os direitos reservados. CRM-SP 123456
      </p>
      <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-50">
        <a href="#" className="hover:text-brand-primary transition-colors">Privacidade</a>
        <a href="#" className="hover:text-brand-primary transition-colors">Termos</a>
      </div>
    </Container>
  </footer>
);

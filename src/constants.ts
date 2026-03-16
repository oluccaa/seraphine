import { LucideIcon, Heart, Shield, Star, Calendar, MapPin, Phone, Instagram, Facebook, Mail, Sparkles, User, Activity, Clock, Stethoscope, Baby, Microscope, Flower2, Sparkle } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    id: 'ginecologia-geral',
    title: 'Ginecologia de Precisão',
    description: 'Abordagem diagnóstica avançada e preventiva, focada na longevidade e equilíbrio hormonal feminino.',
    icon: Stethoscope,
  },
  {
    id: 'obstetricia',
    title: 'Maternidade de Elite',
    description: 'Acompanhamento gestacional premium, unindo segurança hospitalar ao conforto de um atendimento concierge.',
    icon: Baby,
  },
  {
    id: 'cirurgia-minimamente-invasiva',
    title: 'Ginecologia Regenerativa',
    description: 'Tecnologias laser e procedimentos minimamente invasivos para restauração da saúde e estética íntima.',
    icon: Sparkle,
  },
  {
    id: 'menopausa',
    title: 'Gestão da Maturidade',
    description: 'Protocolos exclusivos de reposição hormonal bioidêntica e suporte integral ao climatério.',
    icon: Flower2,
  },
];

export const TESTIMONIALS = [
  {
    author: 'Mariana Silva',
    text: 'O atendimento na Clínica Seraphina superou todas as minhas expectativas. O Dr. Henrique é extremamente atencioso e humano.',
    role: 'Empresária',
  },
  {
    author: 'Beatriz Oliveira',
    text: 'Um ambiente que transmite paz e segurança. Sinto que minha saúde está em ótimas mãos desde o primeiro dia.',
    role: 'Arquiteta',
  },
  {
    author: 'Clara Mendes',
    text: 'A precisão no diagnóstico e o cuidado no pós-operatório foram fundamentais para minha recuperação plena.',
    role: 'Advogada',
  },
];

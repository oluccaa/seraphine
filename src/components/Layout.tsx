import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden", className)}>
    {children}
  </section>
);

export const Container = ({ children, className }: SectionProps) => (
  <div className={cn("max-w-7xl mx-auto relative z-10", className)}>
    {children}
  </div>
);

export const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.215, 0.61, 0.355, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    ref.current!.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    ref.current!.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div 
      ref={ref} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  );
};

export const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={cn("overflow-hidden relative", className)}>
      <motion.img 
        style={{ y, scale: 1.2 }}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const TextReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] pb-[0.1em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
};

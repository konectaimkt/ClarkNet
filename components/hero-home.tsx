'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/components/floating-whatsapp";
import { motion, AnimatePresence } from "motion/react";
import { Wifi, Play, Heart, Zap, ChevronLeft, ChevronRight, Tv, Film, Clock, Rocket, ShieldCheck } from "lucide-react";
import { useState } from "react";

const plans = [
  { 
    name: "PLANO ULTRA", 
    speed: "800", 
    price: "179,90", 
    features: [
      { text: "Clark Play incluso", icon: Play },
      { text: "Mais de 100 canais de TV", icon: Tv },
      { text: "4 mil filmes e séries", icon: Film }
    ] 
  },
  { 
    name: "PLANO CONECTA", 
    speed: "500", 
    price: "99,90", 
    features: [
      { text: "Conexão estável", icon: Wifi },
      { text: "Suporte 24h", icon: Clock },
      { text: "Instalação rápida", icon: Rocket }
    ] 
  },
];

function PlanCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full max-w-sm rounded-[24px] overflow-hidden border border-brand-yellow shadow-2xl shadow-brand-navy-dark bg-brand-navy flex flex-col plan-card-hover">
      <div className="bg-brand-yellow py-3 text-center font-heading font-bold text-brand-navy uppercase tracking-widest">
        Ultra Velocidade
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="p-8 flex flex-col flex-1"
        >
          <h3 className="text-white font-heading text-xl tracking-wider mb-2">{plans[index].name}</h3>
          <div className="flex items-baseline text-white mb-6">
            <span className="text-6xl font-bold font-heading">{plans[index].speed}</span>
            <span className="text-brand-yellow text-2xl font-bold ml-2">MEGA</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">Por apenas</p>
          <div className="flex items-baseline text-white mb-8">
            <span className="text-xl mr-1">R$</span>
            <span className="text-5xl font-bold font-heading">{plans[index].price}</span>
            <span className="text-sm ml-1 text-gray-400">/MÊS</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {plans[index].features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                    className="shrink-0 text-brand-yellow"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  {feature.text}
                </li>
              );
            })}
          </ul>
          <a href="#" className="w-full py-4 rounded-[8px] bg-brand-yellow text-brand-navy font-bold text-center hover:bg-brand-yellow-light transition-colors">
            QUERO O {plans[index].name}
          </a>
          <p className="text-gray-500 text-[10px] text-center mt-4">Sujeito a disponibilidade técnica no endereço.</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={() => setIndex((i) => (i - 1 + plans.length) % plans.length)} className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"><ChevronLeft /></button>
      <button onClick={() => setIndex((i) => (i + 1) % plans.length)} className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"><ChevronRight /></button>
    </div>
  );
}

export function HeroHome() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-navy">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-navy opacity-90"></div>
        {/* Abstract 3D/Tech Elements (CSS simulated) */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-3xl opacity-40 -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-yellow-light text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="h-4 w-4" />
              Internet 100% Fibra Óptica
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 uppercase tracking-tight text-balance">
              Internet que conecta você ao que <span className="text-brand-yellow">realmente importa</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Estabilidade, entretenimento e atendimento próximo para residências e empresas de Deodápolis e região.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={getWhatsAppLink("Olá! Gostaria de assinar um plano da ClarkNet.")} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-yellow-light-border"
              >
                <span>ASSINAR PELO WHATSAPP</span>
              </a>
              <Button asChild size="lg" variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                <Link href="#planos">NOSSOS PLANOS</Link>
              </Button>
            </div>

            {/* Highlights */}
            <div className="mt-12 grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-[12px] bg-brand-blue/20 flex items-center justify-center shrink-0">
                  <Heart className="h-5 w-5 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Mais de 15 anos</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Atendimento próximo e de confiança.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-[12px] bg-brand-blue/20 flex items-center justify-center shrink-0">
                  <Play className="h-5 w-5 text-brand-yellow fill-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Clark Play Incluso</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Milhares de filmes e séries.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <PlanCarousel />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

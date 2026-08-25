import { siteConfig } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { PlanCard } from "@/components/ui/plan-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Tv, ShieldCheck, Zap, Users, MonitorPlay, ArrowRight, Play, Wifi, Clock } from "lucide-react";

export function HomeSections() {
  return (
    <>
      {/* SEÇÃO 1 — DESTAQUES */}
      <Section className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: Zap, title: "Velocidade de verdade", desc: "Desempenho para navegar, assistir e jogar." },
            { icon: Clock, title: "Suporte técnico local", desc: "Atendimento próximo, rápido e humanizado." },
            { icon: Wifi, title: "Wi-Fi grátis", desc: "Incluso em todos os planos contratados." },
            { icon: ShieldCheck, title: "Conexão estável", desc: "Mais segurança e constância no dia a dia." },
            { icon: Users, title: "Atendimento humanizado", desc: "Pessoas de verdade cuidando da sua conexão." },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-[16px] bg-brand-gray border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-[12px] bg-brand-blue/10 flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-brand-navy" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-brand-navy">{item.title}</h4>
                <p className="text-[10px] text-gray-600 leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SEÇÃO 2 — CONFIANÇA REGIONAL */}
      <Section className="bg-brand-gray text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-brand-navy">
            Há mais de 15 anos conectando nossa região.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A ClarkNet nasceu em Porto Vilma e cresceu ao lado da comunidade. Hoje, oferece tecnologia, atendimento próximo e conexão de qualidade para diferentes localidades da região.
          </p>
          
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="space-y-2">
              <div className="text-brand-blue font-bold text-lg">Início</div>
              <p className="text-sm text-gray-600">Porto Vilma, via rádio.</p>
            </div>
            <div className="space-y-2">
              <div className="text-brand-blue font-bold text-lg">Evolução</div>
              <p className="text-sm text-gray-600">100% fibra óptica.</p>
            </div>
            <div className="space-y-2">
              <div className="text-brand-blue font-bold text-lg">Sede</div>
              <p className="text-sm text-gray-600">Estabelecida em Deodápolis.</p>
            </div>
            <div className="space-y-2">
              <div className="text-brand-blue font-bold text-lg">Hoje</div>
              <p className="text-sm text-gray-600">Presente em 6 localidades.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SEÇÃO 3 — PLANOS */}
      <Section id="planos" className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-brand-navy mb-4">
            Escolha a velocidade ideal para sua conexão.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Planos de internet fibra óptica pensados para a sua necessidade, sempre com entretenimento incluso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {siteConfig.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="link">
            <Link href="/planos">
              Ver todos os detalhes dos planos <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* SEÇÃO 4 — CLARK PLAY */}
      <Section className="bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/20 to-transparent"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
             <div className="order-2 md:order-1 relative h-[400px] rounded-[24px] overflow-hidden shadow-2xl bg-brand-navy">
                <img 
                   src="/clarkplay-logo.jpg" 
                   alt="Clark Play Entretenimento" 
                   className="object-contain w-full h-full"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
             </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">
              Internet e entretenimento no mesmo plano.
            </h2>
            <p className="text-gray-300 text-lg">
              Com o <strong className="text-brand-yellow">Clark Play</strong>, você aproveita canais, filmes e séries em uma experiência de entretenimento incluída nos planos ClarkNet.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-center gap-3">
                <Tv className="h-6 w-6 text-brand-yellow" />
                <span className="font-bold">Mais de 100 canais de TV e áudio</span>
              </li>
              <li className="flex items-center gap-3">
                <MonitorPlay className="h-6 w-6 text-brand-yellow" />
                <span className="font-bold">Mais de 4 mil filmes e séries</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild variant="default">
                <Link href="/clark-play">Conheça o Clark Play</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* SEÇÃO 5 — DIFERENCIAIS */}
      <Section className="bg-brand-gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-brand-navy">
            Conexão de qualidade com atendimento próximo.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Tecnologia Fibra", desc: "Rede 100% fibra óptica até a sua casa." },
            { icon: Users, title: "Atendimento Próximo", desc: "Equipe local, pronta para ajudar você." },
            { icon: MapPin, title: "Experiência Regional", desc: "Conhecemos a região há mais de 15 anos." },
            { icon: MonitorPlay, title: "Entretenimento Incluso", desc: "Clark Play nos planos apresentados." },
            { icon: ShieldCheck, title: "Suporte Técnico", desc: "Assistência especializada quando precisar." },
            { icon: Wifi, title: "Para Pessoas e Empresas", desc: "Soluções conectando toda a comunidade." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[16px] shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
              <div className="h-12 w-12 bg-brand-navy rounded-[12px] flex items-center justify-center mb-6">
                <item.icon className="h-6 w-6 text-brand-yellow" />
              </div>
              <h3 className="font-bold text-xl text-brand-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SEÇÃO 6 — COBERTURA */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-brand-navy">
              ClarkNet perto de você.
            </h2>
            <p className="text-gray-600 text-lg">
              Estamos presentes em diversas localidades para garantir a melhor experiência de conexão.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {siteConfig.cities.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                  <span className="font-bold text-brand-navy">{city}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Button asChild variant="primary">
                <Link href="/cobertura">Consultar meu endereço</Link>
              </Button>
              <p className="text-xs text-gray-500 mt-3">A disponibilidade pode variar conforme o endereço.</p>
            </div>
          </div>
          <div className="bg-brand-gray rounded-[24px] flex items-end justify-center md:justify-start aspect-square md:aspect-video lg:aspect-square relative overflow-hidden group">
             {/* Office Image */}
             <div className="absolute inset-0 bg-brand-navy">
               <img 
                 src="/sede.jpg" 
                 alt="Sede ClarkNet em Deodápolis" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent"></div>
             </div>
             
             {/* Info Card */}
             <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-[16px] shadow-2xl text-center md:text-left max-w-[280px] m-6 border border-white/40 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-1">Nossa Sede</div>
                <div className="text-2xl font-heading font-bold text-brand-navy mb-2">Deodápolis</div>
                <div className="text-xs text-brand-navy/80 font-medium flex items-center justify-center md:justify-start gap-1.5">
                  <MapPin className="h-4 w-4 text-brand-yellow shrink-0" />
                  Avenida Genário da Costa Mattos, 955
                </div>
             </div>
          </div>
        </div>
      </Section>

    </>
  );
}

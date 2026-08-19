import { siteConfig } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/cta-section";
import { Tv, MonitorPlay, Film, Radio } from "lucide-react";

export const metadata = {
  title: "Clark Play",
  description: "Conheça o Clark Play: entretenimento incluso no seu plano de internet.",
};

export default function ClarkPlayPage() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Hero Interno */}
      <section className="bg-brand-navy pt-32 pb-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-navy"></div>
        {/* Abstract streaming graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-3xl mix-blend-screen"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold uppercase tracking-widest mb-8">
            <MonitorPlay className="h-5 w-5" />
            Incluso nos Planos
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold uppercase tracking-tight text-white mb-6">
            Sua internet também virou <span className="text-brand-yellow">entretenimento.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Com o Clark Play, você aproveita canais, filmes e séries em uma experiência de entretenimento incluída nos planos ClarkNet.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-brand-navy">
              Conteúdo para diferentes momentos
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              O Clark Play foi pensado para levar diversão e informação para toda a família, sem custo adicional nos planos compatíveis.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="mt-1 h-12 w-12 rounded-[12px] bg-brand-gray flex items-center justify-center shrink-0">
                  <Tv className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-navy">Mais de 100 canais</h3>
                  <p className="text-gray-600 mt-1">Programação de TV e áudio para você não perder nada.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 h-12 w-12 rounded-[12px] bg-brand-gray flex items-center justify-center shrink-0">
                  <Film className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-navy">Catálogo Gigante</h3>
                  <p className="text-gray-600 mt-1">Mais de 4 mil filmes e séries disponíveis no streaming.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 h-12 w-12 rounded-[12px] bg-brand-gray flex items-center justify-center shrink-0">
                  <Radio className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-navy">Entretenimento Integrado</h3>
                  <p className="text-gray-600 mt-1">Tudo isso já incluído na sua mensalidade, sem surpresas.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl relative border-8 border-brand-gray">
                <img 
                  src="https://picsum.photos/seed/streaming2/800/600" 
                  alt="Interface de Streaming genérica" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -left-6 bg-brand-yellow text-brand-navy p-6 rounded-[16px] shadow-xl font-bold max-w-[200px]">
               Acesso fácil para toda a família.
             </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}

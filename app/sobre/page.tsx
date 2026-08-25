import { siteConfig } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/cta-section";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Nossa História",
  description: "Conheça a história da ClarkNet Telecom.",
};

export default function SobrePage() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Hero Interno */}
      <section className="bg-brand-navy pt-32 pb-24 text-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-navy"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight text-white mb-6">
            Nossa <span className="text-brand-yellow">História</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Há mais de 15 anos conectando nossa região com confiança, inovação e excelência.
          </p>
        </div>
      </section>

      <Section className="bg-white pb-0">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:uppercase prose-headings:text-brand-navy prose-p:text-gray-600 prose-p:leading-relaxed">
          <p className="text-2xl text-brand-navy font-bold text-center mb-12">
            Há mais de 15 anos, nasceu um sonho: levar internet de qualidade para a nossa região e conectar pessoas, famílias e empresas com um atendimento próximo, confiável e comprometido.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p>
                Foi no distrito de Porto Vilma que a ClarkNet iniciou sua trajetória, oferecendo internet via rádio em uma época em que o acesso à conectividade ainda era um desafio para muitas pessoas.
              </p>
              <p>
                Com dedicação, trabalho sério e foco na satisfação dos clientes, a empresa conquistou a confiança da comunidade e começou a expandir sua atuação.
              </p>
            </div>
            <div className="aspect-square rounded-[24px] overflow-hidden bg-brand-gray border border-gray-100">
               <img src="https://picsum.photos/seed/historia1/800/800" alt="Sede ClarkNet" className="object-cover w-full h-full opacity-90" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 aspect-[4/5] rounded-[24px] overflow-hidden border border-gray-100 shadow-lg">
               <img src="/sede.jpg" alt="Sede ClarkNet em Deodápolis" className="object-cover object-top w-full h-full hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="order-1 md:order-2">
              <p>
                Sempre olhando para o futuro, a ClarkNet deu mais um importante passo em sua história e tornou-se a primeira empresa a implantar internet 100% fibra óptica na região, levando mais velocidade, estabilidade e tecnologia para seus clientes.
              </p>
              <p>
                Com o crescimento da empresa, a ClarkNet estabeleceu sua sede em Deodápolis, ampliando sua estrutura para oferecer um atendimento ainda mais ágil, eficiente e preparado para os desafios do futuro.
              </p>
            </div>
          </div>
          
          <div className="text-center bg-brand-gray p-12 rounded-[24px]">
            <p className="text-xl font-bold text-brand-navy mb-0">
              Mais do que fornecer internet, a ClarkNet conecta pessoas, aproxima famílias, fortalece empresas e impulsiona oportunidades. Sua história foi construída com trabalho, confiança e parceria com cada cliente que acreditou em seu propósito.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white pt-24">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-brand-navy">Princípios Institucionais</h2>
          <p className="text-gray-500 mt-2 text-sm">* Redação institucional proposta com base em nossa história.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-brand-navy text-white p-8 rounded-[24px] shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-bl-full"></div>
            <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-brand-yellow mb-4 relative z-10">Missão</h3>
            <p className="text-gray-300 relative z-10 leading-relaxed">Conectar pessoas, famílias e empresas com internet de qualidade, tecnologia e atendimento próximo, contribuindo para o desenvolvimento da região.</p>
          </div>
          <div className="bg-white p-8 rounded-[24px] shadow-xl border border-gray-100 text-center relative overflow-hidden">
            <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-brand-blue mb-4">Visão</h3>
            <p className="text-gray-600 leading-relaxed">Continuar evoluindo como uma empresa regional de telecomunicações reconhecida pela confiança, inovação e qualidade no atendimento.</p>
          </div>
          <div className="bg-brand-gray p-8 rounded-[24px] shadow-sm text-left">
            <h3 className="font-heading font-bold text-2xl uppercase tracking-wider text-brand-navy mb-6 text-center">Valores</h3>
            <ul className="space-y-3 max-w-[200px] mx-auto">
              {['Confiança', 'Proximidade', 'Compromisso', 'Inovação', 'Qualidade', 'Respeito à comunidade'].map(valor => (
                <li key={valor} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue shrink-0" />
                  <span className="font-bold text-brand-navy">{valor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}

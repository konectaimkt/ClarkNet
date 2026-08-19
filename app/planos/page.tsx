import { siteConfig } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { PlanCard } from "@/components/ui/plan-card";
import { CTASection } from "@/components/cta-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: "Planos de Internet",
  description: "Conheça os planos de internet fibra óptica da ClarkNet.",
};

const faqs = [
  {
    q: "Quais planos estão disponíveis?",
    a: "Atualmente oferecemos o Plano Turbo (500 Mega) e o Plano Ultra (800 Mega). Ambos são ideais para diferentes perfis de uso, desde navegação básica até alta demanda de streaming e downloads."
  },
  {
    q: "O Clark Play está incluído?",
    a: "Sim! O Clark Play está incluso nos planos apresentados, oferecendo mais de 100 canais de TV e áudio, além de um catálogo com mais de 4 mil filmes e séries."
  },
  {
    q: "Em quais cidades a ClarkNet atende?",
    a: "Nossa rede atende Deodápolis, Lagoa Bonita, Presidente Castelo, Vila União, Porto Vilma e Ipezal. A disponibilidade pode variar conforme o endereço."
  },
  {
    q: "Como consultar disponibilidade?",
    a: "Você pode consultar a disponibilidade entrando em contato com nossa equipe pelo WhatsApp ou acessando a página de Cobertura no nosso site."
  },
  {
    q: "Como contratar um plano?",
    a: "Basta escolher o plano desejado e clicar em 'Quero o Plano'. Você será redirecionado para o nosso WhatsApp, onde nossa equipe finalizará o atendimento de forma rápida e segura."
  },
  {
    q: "Posso falar com a equipe pelo WhatsApp?",
    a: "Com certeza! Nosso atendimento via WhatsApp é rápido e estamos prontos para tirar todas as suas dúvidas."
  }
];

export default function PlanosPage() {
  return (
    <div className="flex flex-col flex-1 bg-brand-gray">
      {/* Hero Interno */}
      <section className="bg-brand-navy py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight text-white mb-6">
          Nossos <span className="text-brand-yellow">Planos</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Velocidade, estabilidade e entretenimento incluídos. Escolha a conexão ideal para você.
        </p>
      </section>

      {/* Plans Section */}
      <Section className="-mt-16 bg-transparent relative z-10" containerClassName="max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {siteConfig.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold uppercase text-brand-navy mb-8 text-center">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-bold text-brand-navy hover:text-brand-blue">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}

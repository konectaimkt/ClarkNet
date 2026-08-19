import { siteConfig } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MessageCircle, Wrench, FileSearch, MapPin, Phone, Send } from "lucide-react";
import { getWhatsAppLink } from "@/components/floating-whatsapp";
import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export const metadata = {
  title: "Atendimento",
  description: "Entre em contato com a equipe ClarkNet.",
};

export default function AtendimentoPage() {
  const cards = [
    {
      title: "Quero contratar",
      desc: "Escolha o plano ideal e fale com vendas.",
      icon: Send,
      link: getWhatsAppLink("Olá! Gostaria de assinar um plano da ClarkNet."),
      btn: "Falar com Vendas",
      primary: true
    },
    {
      title: "Consultar Cobertura",
      desc: "Verifique se atendemos seu endereço.",
      icon: FileSearch,
      link: "/cobertura",
      btn: "Consultar Agora",
      isInternal: true
    },
    {
      title: "Suporte Técnico",
      desc: "Precisa de ajuda com sua conexão?",
      icon: Wrench,
      link: getWhatsAppLink("Olá! Preciso de suporte técnico para minha conexão."),
      btn: "Solicitar Suporte"
    },
    {
      title: "Já sou cliente",
      desc: "Dúvidas sobre faturas ou seu plano.",
      icon: MessageCircle,
      link: getWhatsAppLink("Olá! Sou cliente e gostaria de tirar uma dúvida."),
      btn: "Atendimento ao Cliente"
    }
  ];

  return (
    <div className="flex flex-col flex-1 bg-brand-gray">
      <section className="bg-brand-navy pt-32 pb-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-navy"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight text-white mb-6">
            Como podemos <span className="text-brand-yellow">ajudar?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Atendimento próximo e de qualidade. Escolha o canal desejado abaixo.
          </p>
        </div>
      </section>

      <Section className="-mt-16 relative z-10" containerClassName="max-w-5xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className={`rounded-[24px] p-8 flex flex-col h-full shadow-xl transition-transform hover:-translate-y-2 ${card.primary ? 'bg-brand-yellow text-brand-navy' : 'bg-white text-brand-navy'}`}>
              <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-6 ${card.primary ? 'bg-brand-navy text-brand-yellow' : 'bg-brand-blue/10 text-brand-blue'}`}>
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-xl uppercase mb-2">{card.title}</h3>
              <p className={`text-sm mb-8 flex-grow ${card.primary ? 'text-brand-navy/80' : 'text-gray-500'}`}>{card.desc}</p>
              
              {card.isInternal ? (
                 <Button asChild variant={card.primary ? "navy" : "outline"} className="w-full">
                   <Link href={card.link}>{card.btn}</Link>
                 </Button>
              ) : (
                 <Button asChild variant={card.primary ? "navy" : "outline"} className="w-full">
                   <a href={card.link} target="_blank" rel="noopener noreferrer">{card.btn}</a>
                 </Button>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto bg-brand-navy rounded-[24px] p-8 md:p-12 shadow-2xl text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold uppercase tracking-wide">Fale Conosco</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy shrink-0">
                    <Phone className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-blue-light font-bold uppercase tracking-wider">WhatsApp / Telefone</div>
                    <div className="font-bold text-xl">{siteConfig.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-blue-light font-bold uppercase tracking-wider">Sede Deodápolis</div>
                    <div className="font-bold">{siteConfig.address.street}, {siteConfig.address.number}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy shrink-0">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-blue-light font-bold uppercase tracking-wider">Instagram</div>
                    <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-brand-yellow transition-colors">@clarknet.telecom</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[200px] rounded-[16px] overflow-hidden">
               {/* Map graphic representation */}
               <div className="absolute inset-0 bg-brand-gray flex flex-col items-center justify-center text-brand-navy text-center p-6">
                  <MapPin className="h-12 w-12 text-brand-blue mb-4" />
                  <span className="font-heading font-bold uppercase tracking-wider text-xl mb-1">Visite nossa sede</span>
                  <span className="text-sm">Atendimento presencial em Deodápolis/MS.</span>
               </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

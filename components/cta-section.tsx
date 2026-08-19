import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { getWhatsAppLink } from "@/components/floating-whatsapp";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <Section className="bg-brand-yellow text-brand-navy text-center py-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">
          Pronto para viver uma conexão de verdade?
        </h2>
        <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-90">
          Consulte a disponibilidade da ClarkNet para seu endereço e encontre o plano ideal.
        </p>
        <div className="pt-4">
          <a 
            href={getWhatsAppLink("Olá! Gostaria de consultar a disponibilidade dos planos ClarkNet para o meu endereço.")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-light-border gap-3"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Falar com a ClarkNet</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

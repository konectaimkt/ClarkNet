import { Check, Info, Play, Tv, Film, Wifi, Clock, Rocket } from "lucide-react";
import { Button } from "./button";
import { getWhatsAppLink } from "../floating-whatsapp";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

type Plan = typeof siteConfig.plans[0];

const getIconForBenefit = (benefit: string) => {
  if (benefit.includes("Clark Play")) return Play;
  if (benefit.includes("canais de TV")) return Tv;
  if (benefit.includes("filmes e séries")) return Film;
  if (benefit.includes("Conexão")) return Wifi;
  if (benefit.includes("Suporte")) return Clock;
  if (benefit.includes("Instalação")) return Rocket;
  return Check;
};

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div 
      className={cn(
        "relative rounded-[16px] overflow-hidden flex flex-col h-full bg-brand-navy transition-transform duration-300 hover:-translate-y-2",
        plan.featured ? "ring-2 ring-brand-yellow shadow-2xl shadow-brand-blue/20" : "border border-brand-border/10 shadow-lg"
      )}
    >
      {plan.featured && (
        <div className="absolute top-0 left-0 w-full bg-brand-yellow text-brand-navy text-xs font-bold uppercase tracking-widest text-center py-1.5">
          Ultra Velocidade
        </div>
      )}
      
      <div className={cn("p-8", plan.featured ? "pt-12" : "pt-8")}>
        <h3 className="text-white text-xl font-heading uppercase tracking-wide mb-2">{plan.name}</h3>
        <div className="flex items-baseline gap-1 text-white mb-6">
          <span className="text-5xl font-heading font-bold">{plan.speed}</span>
          <span className="text-brand-yellow font-bold uppercase tracking-wider">{plan.speedUnit}</span>
        </div>
        
        <div className="mb-8">
          <span className="text-gray-400 text-sm">Por apenas</span>
          <div className="flex items-start gap-1 mt-1 text-white">
            <span className="text-lg font-bold mt-1">R$</span>
            <span className="text-4xl font-heading font-bold">{plan.price.split(',')[0]}</span>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold">,{plan.price.split(',')[1]}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">/mês</span>
            </div>
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {plan.benefits.map((benefit, i) => {
            const Icon = getIconForBenefit(benefit);
            return (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <div className="shrink-0">
                  <Icon className="h-5 w-5 text-brand-yellow" />
                </div>
                <span dangerouslySetInnerHTML={{ __html: benefit.replace('Clark Play', '<strong class="text-white">Clark Play</strong>') }} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-8 pt-0 mt-auto">
        <Button asChild variant={plan.featured ? "default" : "outlineLight"} className="w-full">
          <a href={getWhatsAppLink(plan.whatsappMessage)} target="_blank" rel="noopener noreferrer">
            Quero o {plan.name}
          </a>
        </Button>
        <p className="text-center text-[10px] text-gray-500 mt-4 flex items-center justify-center gap-1">
          <Info className="h-3 w-3" />
          Sujeito a disponibilidade técnica no endereço.
        </p>
      </div>
    </div>
  );
}

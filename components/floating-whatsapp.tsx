import { siteConfig } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export function getWhatsAppLink(message?: string) {
  const base = siteConfig.whatsapp;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink("Olá, ClarkNet! Gostaria de tirar algumas dúvidas.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-navy shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
      aria-label="Falar com a ClarkNet no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { MapPin, Send } from "lucide-react";
import { getWhatsAppLink } from "@/components/floating-whatsapp";

export default function CoberturaPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cidade: "",
    bairro: "",
    endereco: "",
    numero: "",
    plano: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Olá, ClarkNet! Quero consultar a disponibilidade de internet no meu endereço.

Nome: ${formData.nome}
Telefone: ${formData.telefone}
Cidade: ${formData.cidade}
Bairro ou distrito: ${formData.bairro}
Endereço: ${formData.endereco}
Número: ${formData.numero}
Plano de interesse: ${formData.plano}`;

    window.open(getWhatsAppLink(mensagem), '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col flex-1 bg-brand-gray">
      {/* Hero Interno */}
      <section className="bg-brand-navy py-16 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-navy"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight text-white mb-6">
            Consulta de <span className="text-brand-yellow">Cobertura</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Verifique a disponibilidade dos nossos planos 100% fibra óptica para o seu endereço.
          </p>
        </div>
      </section>

      <Section className="-mt-16 relative z-10" containerClassName="max-w-5xl">
        <div className="grid md:grid-cols-5 gap-8">
          
          <div className="md:col-span-2 space-y-6 bg-brand-navy text-white p-8 rounded-[24px] shadow-2xl">
            <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-brand-yellow">Cidades Atendidas</h3>
            <p className="text-gray-300">A ClarkNet leva tecnologia de ponta para as seguintes localidades:</p>
            <ul className="space-y-4 pt-4">
              {siteConfig.cities.map(city => (
                <li key={city} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-brand-yellow" />
                  </div>
                  <span className="font-bold">{city}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-white/10 mt-8">
              <p className="text-sm text-brand-blue-light font-bold">Aviso importante</p>
              <p className="text-xs text-gray-400 mt-2">A disponibilidade final depende de viabilidade técnica no momento da instalação. Preencha o formulário para analisarmos o seu caso específico.</p>
            </div>
          </div>

          <div className="md:col-span-3 bg-white p-8 md:p-10 rounded-[24px] shadow-xl border border-gray-100">
            <h2 className="font-heading font-bold text-3xl uppercase tracking-wide text-brand-navy mb-8">
              Verificar meu endereço
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Nome completo</label>
                  <input required name="nome" value={formData.nome} onChange={handleChange} className="w-full h-12 px-4 rounded-[10px] border border-gray-200 bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-shadow" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Telefone / WhatsApp</label>
                  <input required name="telefone" value={formData.telefone} onChange={handleChange} className="w-full h-12 px-4 rounded-[10px] border border-gray-200 bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-shadow" placeholder="(67) 99999-9999" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Cidade</label>
                  <select required name="cidade" value={formData.cidade} onChange={handleChange} className="w-full h-12 px-4 rounded-[10px] border border-gray-200 bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-shadow text-brand-graphite">
                    <option value="">Selecione a cidade</option>
                    {siteConfig.cities.map(c => <option key={c} value={c}>{c}</option>)}
                    <option value="Outra">Outra</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Bairro / Distrito</label>
                  <input required name="bairro" value={formData.bairro} onChange={handleChange} className="w-full h-12 px-4 rounded-[10px] border border-gray-200 bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-shadow" placeholder="Seu bairro" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Endereço (Rua/Avenida)</label>
                  <input required name="endereco" value={formData.endereco} onChange={handleChange} className="w-full h-12 px-4 rounded-[10px] border border-gray-200 bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-shadow" placeholder="Sua rua" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Número</label>
                  <input required name="numero" value={formData.numero} onChange={handleChange} className="w-full h-12 px-4 rounded-[10px] border border-gray-200 bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-shadow" placeholder="Ex: 955" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy">Plano de interesse</label>
                <select name="plano" value={formData.plano} onChange={handleChange} className="w-full h-12 px-4 rounded-[10px] border border-gray-200 bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-shadow text-brand-graphite">
                  <option value="Ainda não sei">Ainda não sei, quero recomendação</option>
                  {siteConfig.plans.map(p => <option key={p.id} value={p.name}>{p.name} - {p.speed} {p.speedUnit}</option>)}
                </select>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full gap-2 text-lg h-14">
                  Consultar Disponibilidade via WhatsApp
                  <Send className="h-5 w-5" />
                </Button>
                <p className="text-[11px] text-gray-500 text-center mt-4">
                  Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
                  Seus dados são usados apenas para esta consulta.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

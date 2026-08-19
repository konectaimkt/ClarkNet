import { HeroHome } from "@/components/hero-home";
import { HomeSections } from "@/components/home-sections";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroHome />
      <HomeSections />
      
      {/* SEÇÃO 8 — NOSSA HISTÓRIA (Brief) */}
      <section className="py-24 bg-brand-navy text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase">
            Conheça nossa história
          </h2>
          <p className="text-lg text-gray-300">
            Sua história foi construída com trabalho, confiança e parceria com cada cliente que acreditou em seu propósito. Mais do que fornecer internet, a ClarkNet conecta pessoas.
          </p>
          <div className="pt-4">
            <a href="/sobre" className="inline-block text-brand-yellow font-bold uppercase tracking-wide hover:underline underline-offset-8">
              Conheça a história da ClarkNet &rarr;
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

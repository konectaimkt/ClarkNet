import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Termos de Uso",
};

export default function TermosPage() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <section className="bg-brand-navy pt-32 pb-12 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white mb-4">
          Termos de Uso
        </h1>
      </section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto prose prose-brand prose-headings:font-heading prose-headings:uppercase prose-a:text-brand-blue">
           <div className="bg-brand-yellow/20 text-brand-navy p-4 rounded-[12px] text-sm font-bold mb-8">
            * Este é um documento legal inicial sugerido e deve passar por revisão jurídica da empresa antes da sua utilização definitiva.
          </div>

          <p>Bem-vindo ao site da <strong>Clark Net Telecom LTDA</strong>. Ao acessar e utilizar este site, você concorda em cumprir e ficar vinculado aos seguintes Termos de Uso.</p>

          <h3>1. Natureza do Site</h3>
          <p>Este é um site institucional com o objetivo de apresentar a empresa, seus planos de internet, serviços (como o Clark Play), localidades de cobertura e canais de contato. As informações contidas aqui possuem caráter informativo e comercial.</p>

          <h3>2. Disponibilidade e Condições</h3>
          <p>As ofertas, velocidades e preços dos planos apresentados (Plano Turbo e Plano Ultra) são referências comerciais. A contratação efetiva de qualquer serviço está sujeita à <strong>disponibilidade técnica no endereço do cliente</strong> e à assinatura do contrato de prestação de serviços específico, o qual conterá todas as regras, fidelidades (se houverem) e obrigações detalhadas.</p>

          <h3>3. Uso do Formulário de Cobertura</h3>
          <p>Ao utilizar nosso formulário de &quot;Consulta de Cobertura&quot;, você compreende que a mensagem gerada é apenas uma intenção de contato. O simples preenchimento não garante a viabilidade de instalação nem configura um contrato ativo.</p>

          <h3>4. Propriedade Intelectual</h3>
          <p>Todo o conteúdo deste site (textos, logotipos, identidade visual) é de propriedade da ClarkNet Telecom. O uso não autorizado destes materiais é estritamente proibido.</p>

          <h3>5. Limitação de Responsabilidade</h3>
          <p>A ClarkNet se esforça para manter as informações do site sempre precisas e atualizadas, mas não garante que o site estará livre de erros ou interrupções temporárias decorrentes de manutenção técnica.</p>

          <h3>6. Contato</h3>
          <p>Para dúvidas sobre estes termos ou nossos serviços, utilize a página de Atendimento para falar com nossa equipe.</p>
        </div>
      </Section>
    </div>
  );
}

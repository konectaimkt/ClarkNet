import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Política de Privacidade",
};

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <section className="bg-brand-navy pt-32 pb-12 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-heading font-bold uppercase text-white mb-4">
          Política de Privacidade
        </h1>
      </section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto prose prose-brand prose-headings:font-heading prose-headings:uppercase prose-a:text-brand-blue">
          <div className="bg-brand-yellow/20 text-brand-navy p-4 rounded-[12px] text-sm font-bold mb-8">
            * Este é um documento legal inicial sugerido e deve passar por revisão jurídica da empresa antes da sua utilização definitiva.
          </div>
          
          <p>A <strong>Clark Net Telecom LTDA</strong> valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta política descreve como coletamos, usamos e protegemos as informações que você nos fornece ao utilizar nosso site institucional.</p>

          <h3>1. Coleta de Dados</h3>
          <p>O nosso site possui foco institucional. Nós coletamos informações pessoais (como Nome, Telefone e Endereço) apenas quando você preenche ativamente o nosso formulário de &quot;Consulta de Cobertura&quot;.</p>
          <p>Estes dados não são salvos em nosso banco de dados no site; eles são utilizados exclusivamente para formatar uma mensagem que será enviada diretamente pelo seu próprio WhatsApp para a nossa equipe de atendimento.</p>

          <h3>2. Uso das Informações</h3>
          <p>As informações fornecidas via formulário são utilizadas única e exclusivamente para:</p>
          <ul>
            <li>Analisar a viabilidade técnica de instalação no seu endereço.</li>
            <li>Entrar em contato com você via WhatsApp ou telefone para apresentar os planos disponíveis.</li>
            <li>Melhorar nosso atendimento ao cliente.</li>
          </ul>

          <h3>3. Cookies e Tecnologias de Rastreamento</h3>
          <p>Nosso site prioriza a sua privacidade. Não instalamos cookies de rastreamento de marketing de terceiros de forma automática sem o seu consentimento. Podemos utilizar cookies essenciais de sessão apenas para garantir o funcionamento correto e seguro da página (se aplicável).</p>

          <h3>4. Compartilhamento de Dados</h3>
          <p>A ClarkNet Telecom não vende, não aluga e não compartilha seus dados pessoais com terceiros para fins de marketing. O acesso às suas informações é restrito à nossa equipe interna de atendimento e viabilidade.</p>

          <h3>5. Seus Direitos (LGPD)</h3>
          <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:</p>
          <ul>
            <li>Confirmar a existência de tratamento de seus dados.</li>
            <li>Acessar seus dados.</li>
            <li>Solicitar a correção de dados incompletos ou desatualizados.</li>
            <li>Solicitar a eliminação dos dados tratados com seu consentimento.</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato através dos nossos canais oficiais de atendimento disponíveis na página de Contato.</p>

          <h3>6. Atualizações desta Política</h3>
          <p>Reservamo-nos o direito de atualizar esta política a qualquer momento. Recomendamos a leitura periódica desta página.</p>
          
          <p className="mt-8 text-sm text-gray-500">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>
      </Section>
    </div>
  );
}

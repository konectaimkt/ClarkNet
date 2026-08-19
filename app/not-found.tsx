export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-4xl font-bold font-heading text-brand-navy mb-4">Página não encontrada</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <a href="/" className="inline-flex h-10 items-center justify-center rounded-md bg-brand-yellow px-8 text-sm font-medium text-brand-navy shadow transition-colors hover:bg-brand-yellow/90">
        Voltar para a página inicial
      </a>
    </div>
  );
}

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Logo } from "@/components/ui/logo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div>
              <Logo className="mb-2" />
              <p className="text-brand-blue-light text-sm font-bold uppercase tracking-widest mt-1">
                {siteConfig.slogan}
              </p>
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              Há mais de 15 anos conectando nossa região com confiança, inovação e excelência em serviços de internet fibra óptica.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-brand-navy flex items-center justify-center hover:bg-brand-blue transition-colors" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-brand-navy flex items-center justify-center hover:bg-brand-blue transition-colors" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-white">Navegação</h4>
            <ul className="space-y-3">
              {siteConfig.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-white">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/planos" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">
                  Planos de Internet
                </Link>
              </li>
              <li>
                <Link href="/clark-play" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">
                  Clark Play (Streaming)
                </Link>
              </li>
              <li>
                <Link href="/cobertura" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">
                  Consultar Cobertura
                </Link>
              </li>
              <li>
                <Link href="/atendimento" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">
                  Suporte Técnico
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  {siteConfig.address.street}, {siteConfig.address.number}<br />
                  {siteConfig.address.city} - {siteConfig.address.state}<br />
                  CEP: {siteConfig.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-yellow shrink-0" />
                <span className="text-gray-300 text-sm">{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>{siteConfig.officeHours.weekdays}</p>
                  <p>{siteConfig.officeHours.saturday}</p>
                  <p>{siteConfig.officeHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {currentYear} Clark Net Telecom LTDA — CNPJ 27.568.048/0001-57. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

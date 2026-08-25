import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ClarkNet Telecom | Conectando você ao mundo',
    template: '%s | ClarkNet Telecom',
  },
  description: 'Internet 100% fibra óptica em Deodápolis, Porto Vilma, Vila União, Presidente Castelo, Ipezal e Lagoa Bonita. Estabilidade, entretenimento e atendimento próximo.',
  keywords: ['Internet em Deodápolis', 'Internet fibra óptica em Deodápolis', 'Provedor de internet em Deodápolis', 'Internet em Porto Vilma', 'Planos de internet'],
  authors: [{ name: 'ClarkNet Telecom' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://clarknet.com.br', // Placeholder URL
    title: 'ClarkNet Telecom | Conectando você ao mundo',
    description: 'Internet 100% fibra óptica em Deodápolis e região.',
    siteName: 'ClarkNet Telecom',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClarkNet Telecom | Conectando você ao mundo',
    description: 'Internet 100% fibra óptica em Deodápolis e região.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable} scroll-smooth overflow-x-hidden`}>
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden" suppressHydrationWarning>
        <Header />
        <main className="flex-1 flex flex-col pt-[72px] lg:pt-[88px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

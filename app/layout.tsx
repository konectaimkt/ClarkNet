import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

const oswald = localFont({
  src: './fonts/oswald-latin-wght-normal.woff2',
  variable: '--font-oswald',
  display: 'swap',
  weight: '200 700',
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

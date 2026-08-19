'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import { getWhatsAppLink } from '@/components/floating-whatsapp';


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Only register logic for mobile menu closing if it exists and dependencies change
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 z-40 w-full transition-all duration-300',
        isScrolled ? 'bg-brand-navy shadow-md py-3' : 'bg-brand-navy shadow-sm py-4 lg:py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between rounded-[20px]">
          
          {/* Logo */}
          <Link href="/" className="z-50 shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {siteConfig.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-yellow',
                      pathname === link.href ? 'text-brand-yellow' : 'text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a 
              href={getWhatsAppLink("Olá! Gostaria de assinar um plano da ClarkNet.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-light-border"
            >
              <span>Assine pelo WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-brand-navy transition-transform duration-300 ease-in-out lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <ul className="flex flex-col items-center gap-6 text-center">
            {siteConfig.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-xl font-heading tracking-wider uppercase transition-colors',
                    pathname === link.href ? 'text-brand-yellow' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a 
            href={getWhatsAppLink("Olá! Gostaria de assinar um plano da ClarkNet.")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-light-border w-full max-w-xs mt-4"
          >
            <span>Assine pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

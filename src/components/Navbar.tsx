import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { isDefaultTelegramUsername } from '../config';

interface NavbarProps {
  telegramUsername: string;
  onOpenTelegramSettings: () => void;
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  telegramUsername,
  onOpenTelegramSettings,
  onOpenOrder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Bosh sahifa", href: "#hero" },
    { name: "Xizmatlar", href: "#xizmatlar" },
    { name: "Namunalar", href: "#namunalar" },
    { name: "Tariflar", href: "#tariflar" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isConfigured = !isDefaultTelegramUsername(telegramUsername);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-lg md:text-xl font-bold font-display tracking-tight text-[#121316] hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-md"
          >
            PostPack Studio
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Telegram Contact affordance */}
            <button
              onClick={onOpenTelegramSettings}
              type="button"
              title="Telegram orqali aloqa"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
              <span>{isConfigured ? `@${telegramUsername.replace('@', '')}` : 'Telegram'}</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenOrder}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs md:text-sm shadow-xs transition active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            >
              Buyurtma berish
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-200/60 transition md:hidden focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div 
          role="dialog" 
          aria-modal="true" 
          className="md:hidden border-b border-neutral-200 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-fade-in"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded-xl text-base font-medium text-neutral-800 hover:bg-neutral-200/60 hover:text-blue-600 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTelegramSettings();
              }}
              type="button"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-xs font-medium text-neutral-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Murojaat kanali:</span>
              </div>
              <span className="font-mono text-blue-600">
                {isConfigured ? `@${telegramUsername.replace('@', '')}` : 'Sozlash'}
              </span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              type="button"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
            >
              <span>Buyurtma berish</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

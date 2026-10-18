/**
 * PostPack Studio — Oylik ijtimoiy tarmoq dizayn xizmati
 * Professional Subscription Design Landing Page
 */

import React, { useState, useEffect } from 'react';
import { TELEGRAM_USERNAME, buildTelegramUrl, isDefaultTelegramUsername } from './config';
import { PRICING_PLANS, PORTFOLIO_ITEMS } from './data/content';
import { PricingPlan, PortfolioItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { PlanCalculator } from './components/PlanCalculator';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { TelegramModal } from './components/TelegramModal';
import { PortfolioModal } from './components/PortfolioModal';

export default function App() {
  // Store Telegram username in state, initialized from config or localStorage
  const [telegramUsername, setTelegramUsername] = useState<string>(() => {
    const saved = localStorage.getItem('postpack_tg_username');
    return saved || TELEGRAM_USERNAME;
  });

  // Telegram modal state
  const [isTelegramModalOpen, setIsTelegramModalOpen] = useState(false);
  const [prefilledMessage, setPrefilledMessage] = useState(
    'Salom, PostPack Studio! Ijtimoiy tarmoqlarimiz uchun oylik dizayn xizmati bo‘yicha maslahat olmoqchi edim.'
  );
  const [selectedPlanName, setSelectedPlanName] = useState<string | undefined>(undefined);

  // Portfolio detail modal
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  const handleUpdateTelegramUsername = (newUsername: string) => {
    setTelegramUsername(newUsername);
    localStorage.setItem('postpack_tg_username', newUsername);
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    const message = plan.telegramMessage;
    setPrefilledMessage(message);
    setSelectedPlanName(plan.name);

    // If still the default placeholder, show the helpful setup modal
    if (isDefaultTelegramUsername(telegramUsername)) {
      setIsTelegramModalOpen(true);
    } else {
      // Direct open with prefilled text
      const url = buildTelegramUrl(telegramUsername, message);
      window.open(url, '_blank', 'noopener,noreferrer');
      // Also open modal so user has the copy text fallback in case popup blocked
      setIsTelegramModalOpen(true);
    }
  };

  const handleOpenGeneralContact = (customMessage?: string, planName?: string) => {
    setPrefilledMessage(
      customMessage ||
        'Salom, PostPack Studio! Ijtimoiy tarmoqlarimiz uchun oylik dizayn xizmati bo‘yicha maslahat olmoqchi edim.'
    );
    setSelectedPlanName(planName);
    setIsTelegramModalOpen(true);
  };

  const handleOrderStyleFromPortfolio = (item: PortfolioItem) => {
    const message = `Salom, PostPack Studio! Saytingizdagi "${item.title}" (${item.categoryLabel}) demo namunasi uslubida biznesim uchun dizayn buyurtma bermoqchiman. Tafsilotlarni kelishsak bo‘ladimi?`;
    setSelectedPortfolioItem(null);
    handleOpenGeneralContact(message, item.title);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#121316] selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Top Banner: Informational Studio Notice */}
      <div className="bg-[#121316] text-white py-2 px-4 text-center text-[11px] sm:text-xs font-medium border-b border-neutral-800">
        <span className="text-amber-400 font-semibold mr-1.5">✦ Tanishtiruv taklifi:</span>
        <span>Kichik bizneslar uchun oyiga 149 000 UZS dan boshlanuvchi dizayn to‘plamlari. Barcha tariflar shaxsiy kelishuv asosida.</span>
      </div>

      {/* Main Navigation */}
      <Navbar
        telegramUsername={telegramUsername}
        onOpenTelegramSettings={() => handleOpenGeneralContact()}
        onOpenOrder={() => scrollToSection('tariflar')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onViewPricing={() => scrollToSection('tariflar')}
          onViewPortfolio={() => scrollToSection('namunalar')}
          onOpenDesignDetail={(designId: string) => {
            const found = PORTFOLIO_ITEMS.find((item) => item.id === designId);
            if (found) {
              setSelectedPortfolioItem(found);
            }
          }}
        />

        {/* 2. Services Section */}
        <Services onSelectServiceCTA={() => scrollToSection('tariflar')} />

        {/* 3. Portfolio Showcase (6 Original CSS/SVG/HTML Designs) */}
        <Portfolio onSelectItem={(item) => setSelectedPortfolioItem(item)} />

        {/* 4. Interactive Plan Calculator */}
        <PlanCalculator
          onSelectRecommendedPlan={(plan) => {
            scrollToSection('tariflar');
            handleSelectPlan(plan);
          }}
        />

        {/* 5. How It Works (4 Clear Steps) */}
        <HowItWorks />

        {/* 6. Pricing Packages (START, GROW, PRO) */}
        <Pricing
          telegramUsername={telegramUsername}
          onSelectPlan={handleSelectPlan}
        />

        {/* 7. FAQ Section */}
        <FAQ />

        {/* 8. Final Call to Action */}
        <FinalCTA onOpenContact={() => handleOpenGeneralContact()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => handleOpenGeneralContact()}
        telegramUsername={
          isDefaultTelegramUsername(telegramUsername)
            ? 'postpack_studio'
            : `@${telegramUsername.replace('@', '')}`
        }
      />

      {/* Modals */}
      <TelegramModal
        isOpen={isTelegramModalOpen}
        onClose={() => setIsTelegramModalOpen(false)}
        currentUsername={telegramUsername}
        onUpdateUsername={handleUpdateTelegramUsername}
        prefilledMessage={prefilledMessage}
        selectedPlanName={selectedPlanName}
      />

      <PortfolioModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onOrderStyle={handleOrderStyleFromPortfolio}
      />
    </div>
  );
}

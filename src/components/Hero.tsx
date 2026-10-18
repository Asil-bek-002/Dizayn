import React, { useState } from 'react';
import { ArrowRight, Eye, CalendarCheck, ShieldCheck, Zap, Sparkles, Layers, Maximize2 } from 'lucide-react';
import { CafeDesign, ClothingDesign, EducationDesign, StoryDesign } from './OriginalDesigns';

interface HeroProps {
  onViewPricing: () => void;
  onViewPortfolio: () => void;
  onOpenDesignDetail?: (designId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewPricing, onViewPortfolio, onOpenDesignDetail }) => {
  const [activeTab, setActiveTab] = useState<'collage' | 'cafe' | 'story' | 'clothing'>('collage');

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-22 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-br from-blue-100/40 via-amber-50/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Proposition & Action */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Unboxed Editorial Kicker (no pills) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700">
              <span>PostPack Studio</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Oylik Dizayn Obunasi</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>O‘zbekiston</span>
            </div>

            {/* Main Bold Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold font-display text-[#121316] tracking-tight leading-[1.12] [text-wrap:balance]">
              Instagram sahifangizni <span className="text-blue-600">professional</span> ko‘rinishga olib chiqing.
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Brendingizga mos postlar, storylar va reklama dizaynlari — har oy, bitta qulay xizmatda. Ortiqcha shtat xarajatlarisiz, doimiy va o‘z vaqtida.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onViewPricing}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                <span>Tariflarni ko‘rish</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewPortfolio}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-800 font-medium text-sm border border-neutral-300 shadow-2xs transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                <Eye className="w-4 h-4 text-neutral-500" />
                <span>Namunalarni ko‘rish</span>
              </button>
            </div>

            {/* Micro Metadata Info (No pill boxes, clean unboxed text) */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-neutral-500">
              <span>Boshlang‘ich narx: 149 000 UZS/oy</span>
              <span aria-hidden="true">·</span>
              <span>Karta bog‘lash talab qilinmaydi</span>
            </div>
          </div>

          {/* Right Column: Original Design Previews Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Interactive Showcase Mode Switcher (Clean Segmented Control) */}
            <div className="flex items-center justify-center lg:justify-end gap-1 mb-4">
              <span className="text-[11px] font-medium text-neutral-400 mr-2 hidden sm:inline">
                Namunani tanlang:
              </span>
              <div className="inline-flex p-1 bg-neutral-200/60 rounded-xl border border-neutral-300/60">
                <button
                  type="button"
                  onClick={() => setActiveTab('collage')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    activeTab === 'collage'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Kollaj
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('cafe')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    activeTab === 'cafe'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Qahvaxona
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('story')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    activeTab === 'story'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Story (9:16)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('clothing')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    activeTab === 'clothing'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Moda
                </button>
              </div>
            </div>

            {/* Showcase Stage */}
            <div className="relative mx-auto max-w-[420px] lg:max-w-none flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
              {activeTab === 'collage' && (
                <div className="relative w-full max-w-[420px] mx-auto">
                  {/* Back Left: Fashion Post */}
                  <div className="absolute -top-4 -left-6 w-56 md:w-64 transform -rotate-6 hover:-rotate-1 transition-transform duration-300 z-10 hidden sm:block opacity-90 hover:opacity-100">
                    <ClothingDesign 
                      id="hero-clothing-card" 
                      onSelect={() => onOpenDesignDetail?.('clothing-post')}
                      className="shadow-lg" 
                    />
                  </div>

                  {/* Back Right: Vertical Story Mockup standing tall */}
                  <div className="absolute -top-6 -right-6 w-44 md:w-48 transform rotate-6 hover:rotate-1 transition-transform duration-300 z-10 hidden sm:block opacity-90 hover:opacity-100">
                    <StoryDesign 
                      id="hero-story-card" 
                      onSelect={() => onOpenDesignDetail?.('story-post')}
                      className="shadow-xl" 
                    />
                  </div>

                  {/* Center Marquee: Cafe Post (Primary focal anchor) */}
                  <div className="relative z-20 w-full max-w-[320px] sm:max-w-[340px] mx-auto shadow-2xl rounded-2xl transform hover:-translate-y-1 transition-transform duration-300">
                    <CafeDesign 
                      id="hero-cafe-card" 
                      onSelect={() => onOpenDesignDetail?.('cafe-post')}
                    />

                    {/* Quality Spec Overlay */}
                    <div className="absolute -bottom-3.5 -left-3 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl px-3 py-2 shadow-md flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] font-bold text-neutral-900 leading-tight">1080×1080 px</p>
                        <p className="text-[9px] text-neutral-500">Nashrga tayyor yuqori aniqlik</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cafe' && (
                <div className="w-full max-w-[340px] sm:max-w-[380px] mx-auto animate-fade-in shadow-2xl rounded-2xl">
                  <CafeDesign 
                    id="hero-cafe-single" 
                    onSelect={() => onOpenDesignDetail?.('cafe-post')}
                  />
                </div>
              )}

              {activeTab === 'story' && (
                <div className="w-full max-w-[280px] mx-auto animate-fade-in shadow-2xl rounded-[26px]">
                  <StoryDesign 
                    id="hero-story-single" 
                    onSelect={() => onOpenDesignDetail?.('story-post')}
                  />
                </div>
              )}

              {activeTab === 'clothing' && (
                <div className="w-full max-w-[340px] sm:max-w-[380px] mx-auto animate-fade-in shadow-2xl rounded-2xl">
                  <ClothingDesign 
                    id="hero-clothing-single" 
                    onSelect={() => onOpenDesignDetail?.('clothing-post')}
                  />
                </div>
              )}
            </div>

            <p className="text-center text-[11px] text-neutral-400 mt-6">
              Namunani bosib batafsil dizayn parametrlarini ko‘rishingiz mumkin
            </p>
          </div>
        </div>

        {/* 3-Column Trust / Capability Strip Below the Hero Split */}
        <div className="mt-14 pt-8 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">Aniq oylik topshirish grafigi</h3>
              <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                Kechikishlarsiz, tasdiqlangan reja asosida doimiy yangi post va storylar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">Shtatsiz shaxsiy dizayn bo‘limi</h3>
              <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                Ortiqcha ish haqi, soliq va ish o‘rnisiz bitta qulay obuna orqali xizmat.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900">149 000 UZS dan boshlanuvchi paketlar</h3>
              <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                Kichik va o‘rta bizneslar uchun qulay boshlang‘ich shartlar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

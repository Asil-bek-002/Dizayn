import React, { useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';
import { PricingPlan } from '../types';

interface PlanCalculatorProps {
  onSelectRecommendedPlan: (plan: PricingPlan) => void;
}

export const PlanCalculator: React.FC<PlanCalculatorProps> = ({ onSelectRecommendedPlan }) => {
  const [postFreq, setPostFreq] = useState<'low' | 'med' | 'high'>('med');
  const [storyNeed, setStoryNeed] = useState<'low' | 'med' | 'high'>('med');
  const [adsNeed, setAdsNeed] = useState<boolean>(true);

  // Recommendation logic
  let recommendedId = 'grow';
  let reasoning = "Haftasiga 3 ta post va doimiy storylar uchun 'GROW' eng muvozanatli va qulay yechim.";

  if (postFreq === 'low' && storyNeed === 'low' && !adsNeed) {
    recommendedId = 'start';
    reasoning = "Boshlang‘ich faoliyat va minimal tartib uchun 'START' tarifi ayni muddao.";
  } else if (postFreq === 'high' || storyNeed === 'high' || (adsNeed && postFreq === 'med')) {
    recommendedId = 'pro';
    reasoning = "Yuqori faollik, intensiv marketing va aksiyalar uchun 'PRO' tarifi eng to‘liq imkoniyatlarni beradi.";
  }

  const recommendedPlan = PRICING_PLANS.find((p) => p.id === recommendedId) || PRICING_PLANS[1];

  return (
    <section className="py-14 bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative subtle blue glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-neutral-950/90 rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl">
          <div className="text-center space-y-2 mb-8">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interaktiv vosita</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Reja hisoblagich</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display [text-wrap:balance]">
              Biznesingizga qaysi tarif ko‘proq mos keladi?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
              Uchta oddiy savolga javob bering va oylik kontent ehtiyojingiz uchun eng optimal paketni aniqlang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Question 1: Posts */}
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                1. Haftasiga nechta post kerak?
              </label>
              <div className="space-y-2">
                {[
                  { id: 'low', label: '2 ta post', sub: 'Oyiga 8 ta' },
                  { id: 'med', label: '3 ta post', sub: 'Oyiga 12 ta' },
                  { id: 'high', label: '4+ ta post', sub: 'Oyiga 16 ta' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPostFreq(item.id as any)}
                    className={`w-full p-3 rounded-xl border text-left text-xs transition flex items-center justify-between focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                      postFreq === item.id
                        ? 'border-blue-500 bg-blue-500/15 text-white'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-[10px] text-neutral-400">{item.sub}</p>
                    </div>
                    {postFreq === item.id && <Check className="w-4 h-4 text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Stories */}
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                2. Storylar faolligi darajasi?
              </label>
              <div className="space-y-2">
                {[
                  { id: 'low', label: 'Minimal', sub: 'Haftada 2 ta (8 ta/oy)' },
                  { id: 'med', label: 'Muntazam', sub: 'Haftada 3 ta (12 ta/oy)' },
                  { id: 'high', label: 'Yuqori', sub: 'Haftada 4+ ta (16 ta/oy)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStoryNeed(item.id as any)}
                    className={`w-full p-3 rounded-xl border text-left text-xs transition flex items-center justify-between focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                      storyNeed === item.id
                        ? 'border-blue-500 bg-blue-500/15 text-white'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-[10px] text-neutral-400">{item.sub}</p>
                    </div>
                    {storyNeed === item.id && <Check className="w-4 h-4 text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Ads */}
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                3. Pullik target reklama berasizmi?
              </label>
              <div className="space-y-2">
                {[
                  { val: false, label: 'Hozircha yo‘q', sub: 'Faqat organik lenta' },
                  { val: true, label: 'Ha, aksiyalar bor', sub: 'Promo bannerlar zarur' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setAdsNeed(item.val)}
                    className={`w-full p-3 rounded-xl border text-left text-xs transition flex items-center justify-between focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                      adsNeed === item.val
                        ? 'border-blue-500 bg-blue-500/15 text-white'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-[10px] text-neutral-400">{item.sub}</p>
                    </div>
                    {adsNeed === item.val && <Check className="w-4 h-4 text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendation Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs text-neutral-400">Tavsiya etilgan paket:</span>
                <span className="text-xs font-bold text-blue-400">
                  {recommendedPlan.name} ({recommendedPlan.priceFormatted} UZS/oy)
                </span>
              </div>
              <p className="text-xs text-neutral-300 max-w-xl">
                {reasoning}
              </p>
            </div>

            <button
              onClick={() => onSelectRecommendedPlan(recommendedPlan)}
              type="button"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 shrink-0 shadow-md transition active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
            >
              <span>Ushbu tarifni tanlash</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

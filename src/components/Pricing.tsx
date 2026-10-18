import React, { useState } from 'react';
import { Check, Send, Sparkles, AlertCircle, Shield, Table, ChevronDown, ChevronUp } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';
import { PricingPlan } from '../types';

interface PricingProps {
  telegramUsername: string;
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ telegramUsername, onSelectPlan }) => {
  const [showComparison, setShowComparison] = useState(false);

  const comparisonRows = [
    { label: "Oylik postlar soni (Feed)", start: "8 ta post", grow: "12 ta post", pro: "16 ta post" },
    { label: "Oylik storylar soni (9:16)", start: "8 ta story", grow: "12 ta story", pro: "16 ta story" },
    { label: "Target reklama promo-bannerlari", start: "Mavjud emas", grow: "2 ta banner", pro: "4 ta banner" },
    { label: "Vizual yo‘nalish va ranglar uslubi", start: "Bitta yagona uslub", grow: "Kengaytirilgan uslub", pro: "To‘liq brendbuk uslubi" },
    { label: "Topshirish tezligi", start: "3-4 ish kuni", grow: "2-3 ish kuni (Ustuvor)", pro: "24-48 soat (Maksimal)" },
    { label: "Tahrirlash va sayqallash bosqichi", start: "1 martalik bosqich", grow: "2 martalik bosqich", pro: "2 martalik + tezkor aloqa" },
    { label: "Instagram highlights muqovalari", start: "Mavjud emas", grow: "5 ta ikonka muqovasi", pro: "To‘liq to‘plam" },
    { label: "Fayl formatlari", start: "PNG / JPG (1080px)", grow: "PNG / JPG (Yuqori sifat)", pro: "PNG / JPG + Figma manbasi" },
  ];

  return (
    <section id="tariflar" className="py-16 md:py-24 bg-white border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700">
            <span>Shaffof obuna</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Kichik bizneslarga mos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#121316] tracking-tight [text-wrap:balance]">
            Oylik obuna paketlari
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Biznesingizning hozirgi ehtiyojiga mos paketni tanlang. Har bir tarifda dizaynlar belgilangan muddatda va professional darajada tayyorlanadi.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#FAF8F5] border-2 border-blue-600 shadow-xl ring-1 ring-blue-600/20'
                    : 'bg-white border border-neutral-200/90 shadow-2xs hover:shadow-md'
                }`}
              >
                {/* Visual Highlight Badge for GROW */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white font-bold text-xs tracking-wider uppercase shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Eng maqbul tanlov</span>
                  </div>
                )}

                {/* Top Section */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold font-display text-[#121316]">
                        {plan.name}
                      </h3>
                      {!isPopular && plan.badge && (
                        <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-md">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-neutral-600 leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price display with tabular figures */}
                  <div className="pt-2 border-t border-neutral-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#121316] tabular-nums">
                        {plan.priceFormatted}
                      </span>
                      <span className="text-xs font-semibold uppercase text-neutral-500">
                        UZS / {plan.period}
                      </span>
                    </div>
                    <span className="inline-block mt-1 text-[11px] font-mono text-blue-700 font-medium">
                      {plan.deliverablesSummary}
                    </span>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="space-y-3 pt-4 border-t border-neutral-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Paket tarkibi:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPopular ? 'text-blue-600' : 'text-neutral-500'
                            }`}
                          />
                          <span className="text-neutral-700 leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    type="button"
                    className={`w-full py-3.5 px-6 rounded-xl font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                        : 'bg-[#121316] hover:bg-neutral-800 text-white'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram orqali tanlash</span>
                  </button>
                  <p className="text-center text-[10px] text-neutral-400 mt-2">
                    Xabarda «{plan.name}» tarifi oldindan kiritilgan bo‘ladi
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table Toggle Button */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold transition shadow-2xs"
          >
            <Table className="w-4 h-4 text-blue-600" />
            <span>{showComparison ? "Solishtirish jadvalini yopish" : "Tariflarni to‘liq solishtirish jadvali"}</span>
            {showComparison ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
          </button>
        </div>

        {/* Expandable Comparison Matrix */}
        {showComparison && (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm animate-fade-in">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-800 font-bold">
                  <th className="p-4 md:w-1/3">Xususiyat &amp; Imkoniyat</th>
                  <th className="p-4 text-center">START (149k)</th>
                  <th className="p-4 text-center bg-blue-50/40 text-blue-900">GROW (299k)</th>
                  <th className="p-4 text-center">PRO (499k)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-700">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-neutral-50/40' : ''}>
                    <td className="p-4 font-medium text-neutral-900">{row.label}</td>
                    <td className="p-4 text-center">{row.start}</td>
                    <td className="p-4 text-center font-semibold text-blue-900 bg-blue-50/20">{row.grow}</td>
                    <td className="p-4 text-center font-semibold text-neutral-900">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Mandatory Transparency Disclaimer Box */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FAF8F5] border border-neutral-300 text-neutral-700 text-xs leading-relaxed space-y-2.5 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 font-bold text-sm text-neutral-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Mijozlar uchun muhim shartlar va ochiq tushuntirish:</span>
          </div>
          <p className="text-neutral-600">
            Yuqoridagi narxlar <strong>tanishtiruv boshlang‘ich tariflari</strong> hisoblanadi. Yakuniy ish hajmi, tahrirlar soni, topshirish muddatlari va to‘lov shartlari har bir mijoz bilan shaxsiy tartibda Telegram orqali kelishiladi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Avtomatik to‘lov yechilmaydi — shaxsiy kelishuv va to‘liq nazorat</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Barcha dizaynlar tayyor bo‘lgach, sifatli PNG/JPG formatda topshiriladi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { FAQ_LIST } from '../data/content';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700">
            <span>Savollar va javoblar</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Ochiq ma’lumot</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#121316] tracking-tight [text-wrap:balance]">
            Ko‘p beriladigan savollar
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Dizayn jarayoni, to‘lovlar, tahrirlash qoidalari va hamkorlik shartlari haqida ochiq va samimiy javoblar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/60 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h3 className="text-xs font-bold text-neutral-900">Boshqa savollaringiz bormi?</h3>
            <p className="text-xs text-neutral-500">
              Biz bilan to‘g‘ridan-to‘g‘ri Telegram orqali bog‘laning, mamnuniyat bilan javob beramiz.
            </p>
          </div>
          <a
            href="#final-cta"
            className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          >
            Aloqaga chiqish
          </a>
        </div>
      </div>
    </section>
  );
};

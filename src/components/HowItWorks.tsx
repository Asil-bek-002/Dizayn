import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import { WORK_STEPS } from '../data/content';

export const HowItWorks: React.FC = () => {
  return (
    <section id="qanday-ishlaydi" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700">
            <span>Hamkorlik bosqichlari</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>4 oddiy qadam</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#121316] tracking-tight [text-wrap:balance]">
            Xizmat qanday ishlaydi?
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Ortiqcha byurokratiyasiz, 4 ta oson qadamda Instagram sahifangiz uchun yangi dizaynlarga ega bo‘lasiz.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-6 border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Step Number Top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-display text-blue-600">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                    <Clock className="w-3 h-3 text-neutral-500" />
                    <span>{step.timeline}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold font-display text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-semibold text-blue-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{idx === 3 ? "Muntazam nashr" : "Navbatdagi qadam"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

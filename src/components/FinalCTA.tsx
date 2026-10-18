import React from 'react';
import { Send, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { STUDIO_CONFIG } from '../config';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section id="final-cta" className="py-20 md:py-28 relative overflow-hidden bg-[#121316] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-700/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Unboxed editorial kicker */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
          <span>PostPack Studio</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Yangi Boshlanish</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl mx-auto leading-tight [text-wrap:balance]">
          Brendingiz uchun yangi dizaynlar boshlansin.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Kichik biznesingizni yangi bosqichga olib chiqadigan chiroyli, tushunarli va professional dizaynlarni birgalikda yaratamiz.
        </p>

        {/* Main CTA button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm md:text-base shadow-lg shadow-blue-600/25 transition active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          >
            <Send className="w-5 h-5" />
            <span>Telegram orqali bog‘lanish</span>
            <ArrowUpRight className="w-4 h-4 opacity-75" />
          </button>
        </div>

        {/* Reassurance notes */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>{STUDIO_CONFIG.supportHours}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>{STUDIO_CONFIG.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Send, ArrowUp, MessageSquare } from 'lucide-react';
import { STUDIO_CONFIG } from '../config';

interface FooterProps {
  onOpenContact: () => void;
  telegramUsername: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, telegramUsername }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-neutral-300 text-neutral-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-display font-bold text-xl tracking-tight text-[#121316] block">
              PostPack Studio
            </span>

            <p className="text-sm font-medium text-neutral-800">
              {STUDIO_CONFIG.tagline}
            </p>

            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              O‘zbekistondagi kafelar, kiyim do‘konlari, go‘zallik salonlari, ta’lim markazlari va online do‘konlar uchun har oylik sifatli ijtimoiy tarmoq dizayn xizmati.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenContact}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121316] hover:bg-neutral-800 text-white font-semibold text-xs shadow-2xs transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram: {telegramUsername}</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-bold text-neutral-900 uppercase tracking-wider text-xs">
              Bo‘limlar
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-blue-600 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs">Bosh sahifa</a>
              </li>
              <li>
                <a href="#xizmatlar" className="hover:text-blue-600 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs">Xizmatlar</a>
              </li>
              <li>
                <a href="#namunalar" className="hover:text-blue-600 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs">Namunalar</a>
              </li>
              <li>
                <a href="#qanday-ishlaydi" className="hover:text-blue-600 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs">Qanday ishlaydi</a>
              </li>
              <li>
                <a href="#tariflar" className="hover:text-blue-600 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs">Tariflar</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Services summary */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-neutral-900 uppercase tracking-wider text-xs">
              Xizmat yo‘nalishlari
            </p>
            <ul className="space-y-2 text-neutral-500">
              <li>Instagram post dizayni (1:1 va 4:5 format)</li>
              <li>Instagram story dizayni (9:16 vertikal)</li>
              <li>Meta Ads target reklama bannerlari</li>
              <li>Oylik kontent dizayn to‘plamlari</li>
              <li>Yagona brend vizual uslubi</li>
            </ul>
          </div>

          {/* Contact and Back to top */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <p className="font-bold text-neutral-900 uppercase tracking-wider text-xs">
                Aloqa vaqti
              </p>
              <p className="text-neutral-500 leading-normal">
                {STUDIO_CONFIG.supportHours}
              </p>
              <p className="text-neutral-500">
                {STUDIO_CONFIG.location}
              </p>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-blue-600 transition pt-2 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs"
            >
              <span>Yuqoriga qaytish</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>
            © {new Date().getFullYear()} {STUDIO_CONFIG.name}. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-center sm:text-right">
            Saytdagi barcha tariflar boshlang‘ich taklif bo‘lib, kelishuv asosida taqdim etiladi. Avtomatik to‘lov tizimi mavjud emas.
          </p>
        </div>
      </div>
    </footer>
  );
};

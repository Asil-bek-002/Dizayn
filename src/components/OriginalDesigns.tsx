import React, { useState } from 'react';
import { 
  Coffee, Sparkles, GraduationCap, Flame, ArrowUpRight, Check, Heart, 
  Share2, Clock, MapPin, Tag, Calendar, Layers, ShieldCheck, 
  HelpCircle, ChevronRight, Award
} from 'lucide-react';

interface DesignCardProps {
  id: string;
  onSelect?: () => void;
  className?: string;
  isInteractive?: boolean;
}

/**
 * 1. Cafe Promotional Post: "Kuzgi issiq qahva & yangi kruassanlar"
 * Visual Identity: Warm artisanal coffee shop with rich espresso, cinnamon, and cream tones.
 */
export const CafeDesign: React.FC<DesignCardProps> = ({ onSelect, className = "", isInteractive = true }) => {
  return (
    <div
      onClick={isInteractive ? onSelect : undefined}
      className={`relative aspect-square w-full bg-[#1A110B] text-[#F7F2EC] rounded-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-md border border-[#382317] select-none ${
        isInteractive ? 'cursor-pointer group hover:shadow-xl transition-all duration-300' : ''
      } ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#A85A2A]/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#D4935A]/15 blur-3xl pointer-events-none" />
      
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#2A1B12] border border-[#523625] flex items-center justify-center text-[#E6A36E]">
            <Coffee className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#E6A36E] font-display">
              DILKASH ROASTERS
            </p>
            <p className="text-[9px] text-neutral-400">Toshkent • 2026</p>
          </div>
        </div>

        <span className="text-[10px] font-medium tracking-wide text-[#E6A36E] bg-[#2A1B12] px-2.5 py-0.5 rounded-full border border-[#523625]">
          100% Arabica
        </span>
      </div>

      {/* Centerpiece Vector & Typographic Composition */}
      <div className="relative z-10 my-auto py-2 text-center flex flex-col items-center">
        {/* Stylized Ceramic Cup & Steam SVG */}
        <div className="relative mb-3 group-hover:scale-105 transition-transform duration-300">
          <svg width="104" height="74" viewBox="0 0 104 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
            {/* Gentle steam trails */}
            <path d="M40 18C40 12 46 8 44 2" stroke="#E6A36E" strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
            <path d="M52 16C52 10 58 6 56 0" stroke="#E6A36E" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>
            <path d="M64 18C64 12 70 8 68 2" stroke="#E6A36E" strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
            {/* Cup body with espresso gradient */}
            <path d="M24 24H80V48C80 60 68 66 52 66C36 66 24 60 24 48V24Z" fill="#2E1C12" stroke="#C88550" strokeWidth="2"/>
            {/* Cup handle */}
            <path d="M80 30H86C90 30 93 33 93 37C93 41 90 44 86 44H80" stroke="#C88550" strokeWidth="2" strokeLinecap="round"/>
            {/* Saucer */}
            <path d="M14 66H90C92 66 94 68 92 70H12C10 70 12 66 14 66Z" fill="#C88550"/>
            {/* Latte art heart foam */}
            <ellipse cx="52" cy="27" rx="25" ry="4.5" fill="#F7F2EC" opacity="0.9"/>
            <path d="M48 26C48 24 50 23 52 25C54 23 56 24 56 26C56 28 52 30 52 30C52 30 48 28 48 26Z" fill="#C88550" opacity="0.8"/>
          </svg>
        </div>

        <p className="text-[10px] tracking-widest text-[#E6A36E] uppercase font-semibold mb-1">
          Mavsumiy iliq menyu
        </p>

        <h3 className="text-xl md:text-2xl font-bold font-serif tracking-tight text-white leading-tight">
          Yangi Qovurilgan Qahva &amp;<br />
          <span className="text-[#E6A36E] italic">Issiq Kruassanlar</span>
        </h3>
        
        <p className="mt-1.5 text-xs text-neutral-300 max-w-[250px] leading-relaxed">
          Har tong 08:00 dan boshlab Efiopiya donlaridan tayyorlangan xushbo‘y kapuchino va frantsuz pishiriqlari.
        </p>
      </div>

      {/* Bottom Bar: Hours & Offer */}
      <div className="relative z-10 pt-3 border-t border-[#382317] flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5 text-neutral-400">
          <Clock className="w-3.5 h-3.5 text-[#E6A36E]" />
          <span>Har kuni: 08:00 – 23:00</span>
        </div>
        <div className="font-semibold text-white bg-[#8F4E24] px-2.5 py-1 rounded-lg">
          24 000 UZS dan
        </div>
      </div>

      {/* Demo concept badge */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm text-[9px] text-neutral-300 px-2 py-0.5 rounded pointer-events-none">
        Demo konsept
      </div>
    </div>
  );
};

/**
 * 2. Clothing Collection Announcement: "Bahor / Yoz 2026 Yangi To‘plami"
 * Visual Identity: Minimalist luxury fashion, warm travertine canvas, delicate editorial rules.
 */
export const ClothingDesign: React.FC<DesignCardProps> = ({ onSelect, className = "", isInteractive = true }) => {
  return (
    <div
      onClick={isInteractive ? onSelect : undefined}
      className={`relative aspect-square w-full bg-[#EFECE6] text-[#161618] rounded-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-md border border-[#D8D2C7] select-none ${
        isInteractive ? 'cursor-pointer group hover:shadow-xl transition-all duration-300' : ''
      } ${className}`}
    >
      {/* Editorial grid hairline dividers */}
      <div className="absolute inset-x-6 top-16 h-[1px] bg-neutral-300/60" />
      <div className="absolute inset-y-6 left-16 w-[1px] bg-neutral-300/60" />

      {/* Top Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <span className="text-[10px] tracking-[0.22em] font-semibold uppercase text-neutral-500 block font-display">
            ZAMON STUDIOS • TASHKENT
          </span>
          <h4 className="text-xs font-semibold tracking-wide text-neutral-900 mt-0.5">
            SPRING / SUMMER 2026
          </h4>
        </div>

        <div className="text-right">
          <span className="inline-block px-2 py-0.5 bg-[#252824] text-[#EFECE6] text-[9px] font-mono tracking-widest uppercase rounded">
            LIMITED N° 06
          </span>
        </div>
      </div>

      {/* Visual Composition: Tailored silhouette line art & Typography */}
      <div className="relative z-10 my-auto py-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Tailored Coat SVG */}
        <div className="relative w-28 h-32 flex items-center justify-center shrink-0">
          <svg width="108" height="118" viewBox="0 0 108 118" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform duration-300">
            {/* Wooden hanger & hook */}
            <path d="M54 12C54 8 49 6 47 10C45 14 54 18 54 24" stroke="#161618" strokeWidth="2" strokeLinecap="round"/>
            <path d="M18 36L54 24L90 36" stroke="#161618" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Trench Coat silhouette */}
            <path d="M22 38L14 65L30 68L34 110H74L78 68L94 65L86 38L54 30L22 38Z" fill="#D7D0C5" stroke="#161618" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M54 30V75" stroke="#161618" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M28 72H80" stroke="#252824" strokeWidth="3"/>
            <circle cx="54" cy="72" r="3" fill="#EFECE6" stroke="#161618" strokeWidth="1.5"/>
          </svg>
          <div className="absolute -bottom-1 -right-1 bg-white/95 border border-neutral-300 px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider text-neutral-800 shadow-2xs">
            100% Zig‘ir &amp; Paxta
          </div>
        </div>

        {/* Editorial Text */}
        <div className="text-left max-w-[190px]">
          <p className="text-[10px] tracking-widest text-[#824F3A] font-semibold uppercase mb-1">
            Yangi to‘plam
          </p>
          <h3 className="text-xl font-bold font-serif text-[#161618] leading-tight tracking-tight">
            Nafis Minimalizm &amp;<br />Tabiiy Matolar
          </h3>
          <p className="mt-1.5 text-[11px] text-neutral-600 leading-snug">
            Yengil bichim, nafas oluvchi tabiiy tola va zamonaviy shahar qulayligi.
          </p>
        </div>
      </div>

      {/* Bottom Bar: Showroom & Barcode */}
      <div className="relative z-10 pt-2.5 border-t border-neutral-300/80 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] text-neutral-700">
          <MapPin className="w-3 h-3 text-[#824F3A]" />
          <span>Shourum: Toshkent City Mall, 2-qavat</span>
        </div>

        {/* Clean CSS Barcode */}
        <div className="flex items-center gap-0.5 h-3.5 opacity-70">
          <div className="w-[1px] h-full bg-neutral-900" />
          <div className="w-[3px] h-full bg-neutral-900" />
          <div className="w-[1px] h-full bg-neutral-900" />
          <div className="w-[2px] h-full bg-neutral-900" />
          <div className="w-[4px] h-full bg-neutral-900" />
          <div className="w-[1px] h-full bg-neutral-900" />
        </div>
      </div>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm text-[9px] text-neutral-300 px-2 py-0.5 rounded pointer-events-none">
        Demo konsept
      </div>
    </div>
  );
};

/**
 * 3. Education Center Course Advertisement: "IELTS 7.5+ & Intensiv Ingliz Tili"
 * Visual Identity: Confident royal cobalt blue, bright gold accent, clean academic trust pillars.
 */
export const EducationDesign: React.FC<DesignCardProps> = ({ onSelect, className = "", isInteractive = true }) => {
  return (
    <div
      onClick={isInteractive ? onSelect : undefined}
      className={`relative aspect-square w-full bg-[#0F2338] text-white rounded-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-md border border-[#1E3B5C] select-none ${
        isInteractive ? 'cursor-pointer group hover:shadow-xl transition-all duration-300' : ''
      } ${className}`}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-500/25 border border-blue-400/40 flex items-center justify-center text-amber-400">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-wider text-white font-display">ZUKKO ACADEMY</span>
            <p className="text-[9px] text-blue-200">Zamonaviy Ta’lim Markazi</p>
          </div>
        </div>

        <div className="bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded-full text-[10px] tracking-wide flex items-center gap-1 shadow-xs">
          <span>Qabul Ochiq</span>
        </div>
      </div>

      {/* Main Educational Proposition */}
      <div className="relative z-10 my-auto py-1">
        <div className="inline-block px-2.5 py-0.5 rounded bg-blue-600/35 border border-blue-400/30 text-blue-200 text-[10px] font-medium uppercase tracking-wider mb-2">
          3 oylik intensiv natija
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold font-display leading-[1.15] text-white">
          IELTS <span className="text-amber-400">7.5+</span> &amp;<br />
          Intensiv Ingliz Tili
        </h3>

        {/* 3 Pillars */}
        <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
            <p className="text-amber-300 font-bold text-xs">8-10</p>
            <p className="text-[9px] text-neutral-300">Kichik guruh</p>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
            <p className="text-amber-300 font-bold text-xs">Haftalik</p>
            <p className="text-[9px] text-neutral-300">Mock imtihon</p>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
            <p className="text-amber-300 font-bold text-xs">1-dars</p>
            <p className="text-[9px] text-neutral-300">Mutlaqo bepul</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="relative z-10 pt-2.5 border-t border-white/10 flex items-center justify-between">
        <div>
          <p className="text-[9px] text-neutral-300">Darslar boshlanishi:</p>
          <p className="text-[11px] font-semibold text-white">Kelayotgan dushanbadan</p>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold tracking-wide flex items-center gap-1 shadow-xs">
          <span>Yozilish</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm text-[9px] text-neutral-300 px-2 py-0.5 rounded pointer-events-none">
        Demo konsept
      </div>
    </div>
  );
};

/**
 * 4. Beauty Salon Promotion: "Gidro-peeling & Soch tiklash spa parvarishi"
 * Visual Identity: Organic soft rose, alabaster, deep warm forest slate, delicate botanical lines.
 */
export const BeautyDesign: React.FC<DesignCardProps> = ({ onSelect, className = "", isInteractive = true }) => {
  return (
    <div
      onClick={isInteractive ? onSelect : undefined}
      className={`relative aspect-square w-full bg-[#FBF6F3] text-[#292421] rounded-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-md border border-[#E9DFD8] select-none ${
        isInteractive ? 'cursor-pointer group hover:shadow-xl transition-all duration-300' : ''
      } ${className}`}
    >
      {/* Background soft glow */}
      <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-[#F4D9D2]/35 blur-xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#E9DFD8]/60 blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-[#8F7466] block font-display">
            NAFOSAT BEAUTY &amp; SPA
          </span>
          <p className="text-[9px] text-neutral-400">Est. 2024 • Toshkent</p>
        </div>

        <span className="px-2.5 py-0.5 rounded-full bg-[#F2DDD5] text-[#7A4537] text-[10px] font-semibold">
          Bahorgi taklif
        </span>
      </div>

      {/* Centerpiece Vector Dropper & Typography */}
      <div className="relative z-10 my-auto py-2 text-center flex flex-col items-center">
        {/* Botanical Dropper Vector */}
        <div className="w-10 h-10 rounded-full bg-[#F4E3DC] border border-[#DDC1B5] flex items-center justify-center text-[#995E4D] mb-2 group-hover:rotate-6 transition-transform duration-300">
          <Sparkles className="w-4 h-4" />
        </div>

        <p className="text-[10px] tracking-widest uppercase font-medium text-[#A66654]">
          Terini chuqur yangilash
        </p>

        <h3 className="text-xl md:text-2xl font-serif text-[#292421] font-normal leading-snug mt-0.5">
          Gidro-Peeling &amp;<br />
          <span className="italic font-bold text-[#7A4537]">Soch Tiklash Parvarishi</span>
        </h3>

        <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 bg-white/90 rounded-full border border-[#DDC1B5] text-xs text-[#4F4139] shadow-2xs">
          <span className="font-bold text-[#995E4D]">-20% chegirma</span>
          <span className="text-neutral-300">•</span>
          <span>Birinchi tashrif uchun</span>
        </div>
      </div>

      {/* Bottom Bar: Duration & Booking */}
      <div className="relative z-10 pt-2.5 border-t border-[#E9DFD8] flex items-center justify-between text-[10px] text-[#705E54]">
        <div>
          <p className="font-semibold text-[#292421]">Davomiyligi: 60 daqiqa</p>
          <p className="text-[9px] text-neutral-500">Sertifikatlangan mutaxassislar</p>
        </div>
        <div className="px-2.5 py-1 rounded-lg bg-[#292421] text-white font-medium">
          Joy band qilish
        </div>
      </div>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm text-[9px] text-neutral-300 px-2 py-0.5 rounded pointer-events-none">
        Demo konsept
      </div>
    </div>
  );
};

/**
 * 5. Product Sale Banner: "Weekend Sale: -25% Chegirma"
 * Visual Identity: Dynamic midnight indigo, precision mechanical chronograph dial vector, bold crimson tag.
 */
export const ProductSaleDesign: React.FC<DesignCardProps> = ({ onSelect, className = "", isInteractive = true }) => {
  return (
    <div
      onClick={isInteractive ? onSelect : undefined}
      className={`relative aspect-square w-full bg-[#091024] text-white rounded-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-md border border-[#192445] select-none ${
        isInteractive ? 'cursor-pointer group hover:shadow-xl transition-all duration-300' : ''
      } ${className}`}
    >
      {/* Background glow */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-600/25 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold tracking-widest uppercase text-blue-300 font-display">
            VAQT &amp; USLUB • UZ
          </span>
        </div>

        <div className="px-2 py-0.5 rounded bg-red-500/20 border border-red-500/40 text-red-400 font-bold text-[10px] tracking-wider uppercase flex items-center gap-1">
          <Flame className="w-3 h-3 text-red-500" />
          <span>Faqat 3 kun</span>
        </div>
      </div>

      {/* Center Impact Badge */}
      <div className="relative z-10 my-auto py-1">
        <div className="inline-block px-2 py-0.5 rounded bg-white text-slate-900 font-black text-[11px] uppercase tracking-widest mb-1.5 shadow-xs">
          WEEKEND SAVDOSI
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-4xl md:text-5xl font-black font-display text-white tracking-tighter">
            -25%
          </span>
          <span className="text-sm md:text-base font-bold uppercase tracking-wider text-amber-400">
            Katta Chegirma
          </span>
        </div>

        <h4 className="mt-1 text-sm md:text-base font-semibold text-slate-200">
          Klassik va zamonaviy qo‘l soatlari
        </h4>

        {/* Feature Badges */}
        <div className="mt-2.5 flex flex-wrap gap-1.5 text-[9px] text-slate-300">
          <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10">✓ 1 yil rasmiy kafolat</span>
          <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10">✓ Bepul yetkazib berish</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 pt-2.5 border-t border-white/10 flex items-center justify-between">
        <div className="text-[10px]">
          <p className="text-slate-400">Aksiya muddati:</p>
          <p className="font-semibold text-white">Juma – Yakshanba</p>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-xs flex items-center gap-1">
          <Tag className="w-3.5 h-3.5" />
          <span>Buyurtma berish</span>
        </div>
      </div>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm text-[9px] text-neutral-300 px-2 py-0.5 rounded pointer-events-none">
        Demo konsept
      </div>
    </div>
  );
};

/**
 * 6. Instagram Story Design (9:16 vertical proportion)
 * Visual Identity: Realistic Instagram story interface with interactive poll voting, avatar, timestamps, and reply drawer.
 */
export const StoryDesign: React.FC<DesignCardProps> = ({ onSelect, className = "", isInteractive = true }) => {
  const [selectedVote, setSelectedVote] = useState<'a' | 'b' | null>('a');

  return (
    <div
      onClick={isInteractive ? onSelect : undefined}
      className={`relative aspect-[9/16] max-w-[270px] mx-auto w-full bg-[#161619] text-white rounded-[26px] p-4 flex flex-col justify-between overflow-hidden shadow-xl border-4 border-neutral-800 select-none ${
        isInteractive ? 'cursor-pointer group hover:scale-[1.01] transition-transform duration-300' : ''
      } ${className}`}
    >
      {/* Top Instagram Story Progress Bars */}
      <div className="relative z-20 space-y-2">
        <div className="flex gap-1">
          <div className="h-0.5 flex-1 bg-white rounded-full" />
          <div className="h-0.5 flex-1 bg-white/40 rounded-full" />
          <div className="h-0.5 flex-1 bg-white/40 rounded-full" />
        </div>

        {/* Profile Info */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[1.5px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-white">
                PP
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-white leading-tight">postpack_studio</p>
              <p className="text-[9px] text-neutral-400">14 daqiqa avval</p>
            </div>
          </div>
          <div className="text-neutral-400 text-xs hover:text-white">✕</div>
        </div>
      </div>

      {/* Center Story Content Area */}
      <div className="relative z-10 my-auto py-3 text-center">
        <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400 text-black font-extrabold text-[10px] uppercase tracking-wider mb-2.5 shadow-sm">
          BUGUNGI TUSHLIK MENYUSI 🍲
        </div>

        <h3 className="text-xl font-extrabold font-display leading-tight text-white">
          Qaysi taomni<br />
          <span className="text-amber-300">tanlaysiz?</span>
        </h3>

        <p className="mt-1 text-[11px] text-neutral-300">
          Soat 12:00 dan 15:00 gacha maxsus narxda
        </p>

        {/* Interactive Poll Sticker */}
        <div 
          onClick={(e) => isInteractive && e.stopPropagation()} 
          className="mt-4 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg text-left space-y-2 max-w-[210px] mx-auto"
        >
          <p className="text-[10px] font-semibold text-neutral-200 text-center">Ovoz bering:</p>
          
          <button
            type="button"
            onClick={() => setSelectedVote('a')}
            className={`w-full p-2 rounded-xl border flex items-center justify-between text-xs font-medium transition ${
              selectedVote === 'a'
                ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                : 'bg-white/10 hover:bg-white/20 border-white/10 text-white'
            }`}
          >
            <span>🥗 Qizil baliq salati</span>
            <span className="font-bold text-[11px]">68%</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedVote('b')}
            className={`w-full p-2 rounded-xl border flex items-center justify-between text-xs font-medium transition ${
              selectedVote === 'b'
                ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                : 'bg-white/10 hover:bg-white/20 border-white/10 text-white'
            }`}
          >
            <span>🥩 Tillar panjasi</span>
            <span className="font-bold text-[11px]">32%</span>
          </button>
        </div>

        {/* Link Sticker */}
        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-semibold shadow-xs">
          <span>Menyuni ko‘rish</span>
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>

      {/* Story Bottom Reply Strip */}
      <div className="relative z-20 pt-2 flex items-center gap-2">
        <div className="flex-1 py-1.5 px-3 rounded-full border border-white/30 text-white/60 text-[11px] font-light">
          Xabar yuborish...
        </div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white">
          <Heart className="w-4 h-4" />
        </div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white">
          <Share2 className="w-4 h-4" />
        </div>
      </div>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm text-[9px] text-neutral-300 px-2 py-0.5 rounded pointer-events-none">
        Demo konsept
      </div>
    </div>
  );
};

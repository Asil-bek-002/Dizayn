import React, { useState } from 'react';
import { Eye, Info, Sparkles, Filter, CheckCircle2, Maximize2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioItem } from '../types';
import {
  CafeDesign,
  ClothingDesign,
  EducationDesign,
  BeautyDesign,
  ProductSaleDesign,
  StoryDesign,
} from './OriginalDesigns';

interface PortfolioProps {
  onSelectItem: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectItem }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'Barchasi (6 ta konsept)' },
    { id: 'cafe', label: 'Qahvaxonalar' },
    { id: 'clothing', label: 'Kiyim & Moda' },
    { id: 'education', label: 'Ta’lim' },
    { id: 'beauty', label: 'Go‘zallik' },
    { id: 'ecommerce', label: 'Online-do‘kon' },
    { id: 'story', label: 'Story (9:16)' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedFilter);

  const renderCardVisual = (item: PortfolioItem) => {
    switch (item.id) {
      case 'cafe-post':
        return <CafeDesign id={item.id} onSelect={() => onSelectItem(item)} />;
      case 'clothing-post':
        return <ClothingDesign id={item.id} onSelect={() => onSelectItem(item)} />;
      case 'education-post':
        return <EducationDesign id={item.id} onSelect={() => onSelectItem(item)} />;
      case 'beauty-post':
        return <BeautyDesign id={item.id} onSelect={() => onSelectItem(item)} />;
      case 'ecommerce-post':
        return <ProductSaleDesign id={item.id} onSelect={() => onSelectItem(item)} />;
      case 'story-post':
        return <StoryDesign id={item.id} onSelect={() => onSelectItem(item)} />;
      default:
        return null;
    }
  };

  return (
    <section id="namunalar" className="py-16 md:py-24 bg-white border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700">
              <span>Original ishlar</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Dizayn portfeli</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#121316] tracking-tight [text-wrap:balance]">
              Biznesingiz uchun original dizayn namunalari
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Har bir post va story sohaga xos ranglar, tipografik iyerarxiya va e’tibor tortuvchi kompozitsiyada yaratiladi. Quyidagi namunalar toza vektor va HTML asosida tayyorlangan demo konseptlardir.
            </p>
          </div>

          {/* Mandatory Demo Label Banner */}
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-neutral-300 text-xs text-neutral-600 space-y-1 shrink-0 max-w-sm">
            <div className="flex items-center gap-1.5 font-bold text-neutral-900">
              <Info className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Namoyish konseptlari</span>
            </div>
            <p className="text-[11px] leading-relaxed text-neutral-500">
              Barcha namunalar PostPack Studio uslubi va sifatini namoyish qilish uchun yaratilgan demo namunalardir, haqiqiy mijoz buyurtmalari emas.
            </p>
          </div>
        </div>

        {/* Filter Categories as clean segmented buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                selectedFilter === opt.id
                  ? 'bg-[#121316] text-white shadow-2xs'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FAF8F5] rounded-3xl p-4 sm:p-5 border border-neutral-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual Card Wrapper with Zoom Button */}
              <div className="relative overflow-hidden rounded-2xl">
                {renderCardVisual(item)}

                {/* Hover overlay hint */}
                <button
                  onClick={() => onSelectItem(item)}
                  type="button"
                  aria-label={`${item.title} tafsilotlarini ko‘rish`}
                  className="absolute inset-0 bg-black/40 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs p-4 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span className="px-3 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Tafsilotlarni ko‘rish</span>
                  </span>
                </button>
              </div>

              {/* Information below card */}
              <div className="pt-4 space-y-2">
                {/* Unboxed Metadata (no pill badge sandwiches) */}
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-semibold text-blue-700">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Format: {item.aspectRatio}
                  </span>
                </div>

                <h3 className="font-bold text-base text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Color swatches preview */}
                <div className="pt-2 flex items-center justify-between border-t border-neutral-200/70 text-xs">
                  <div className="flex items-center gap-1.5">
                    {item.colorPalette.map((col, idx) => (
                      <span
                        key={idx}
                        title={`${col.name}: ${col.hex}`}
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs"
                        style={{ backgroundColor: col.hex }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    type="button"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs"
                  >
                    <span>Ko‘rish</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-500 max-w-xl mx-auto">
            Sizning biznesingiz uchun brendingiz, ranglaringiz va fotosuratlaringizga moslashtirilgan original uslub yaratiladi.
          </p>
        </div>
      </div>
    </section>
  );
};

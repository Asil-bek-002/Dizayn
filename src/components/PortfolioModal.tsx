import React from 'react';
import { X, Check, Layers, Palette, Type, Users, Send, ExternalLink, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';
import { CafeDesign, ClothingDesign, EducationDesign, BeautyDesign, ProductSaleDesign, StoryDesign } from './OriginalDesigns';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOrderStyle: (item: PortfolioItem) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose, onOrderStyle }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const renderVisual = () => {
    switch (item.id) {
      case 'cafe-post':
        return <CafeDesign id={item.id} isInteractive={false} className="max-w-md mx-auto shadow-2xl" />;
      case 'clothing-post':
        return <ClothingDesign id={item.id} isInteractive={false} className="max-w-md mx-auto shadow-2xl" />;
      case 'education-post':
        return <EducationDesign id={item.id} isInteractive={false} className="max-w-md mx-auto shadow-2xl" />;
      case 'beauty-post':
        return <BeautyDesign id={item.id} isInteractive={false} className="max-w-md mx-auto shadow-2xl" />;
      case 'ecommerce-post':
        return <ProductSaleDesign id={item.id} isInteractive={false} className="max-w-md mx-auto shadow-2xl" />;
      case 'story-post':
        return <StoryDesign id={item.id} isInteractive={false} className="shadow-2xl" />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-neutral-300 overflow-hidden my-auto text-[#121316]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide border border-blue-200">
              {item.categoryLabel}
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Format: {item.aspectRatio}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Yopish"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8">
          {/* Left Preview */}
          <div className="lg:col-span-6 flex items-center justify-center bg-neutral-100 rounded-2xl p-4 md:p-6 border border-neutral-200/60">
            {renderVisual()}
          </div>

          {/* Right Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Demo konsept — haqiqiy mijoz ishi emas</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-[#121316]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Target Audience */}
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Kimlar uchun mo‘ljallangan:</span>
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  {item.targetAudience}
                </p>
              </div>

              {/* Color Palette */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  <Palette className="w-4 h-4 text-blue-600" />
                  <span>Vizual ranglar palitrasi:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {item.colorPalette.map((c, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-white border border-neutral-200 flex items-center gap-2">
                      <span
                        className="w-5 h-5 rounded-md border border-black/10 shrink-0 shadow-xs"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div className="overflow-hidden">
                        <p className="text-[11px] font-semibold text-neutral-800 truncate">{c.name}</p>
                        <p className="text-[10px] font-mono text-neutral-400">{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography & Composition */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  <Type className="w-4 h-4 text-blue-600" />
                  <span>Tipografika va tuzilma:</span>
                </div>
                <p className="text-xs text-neutral-600 bg-white p-3 rounded-xl border border-neutral-200">
                  {item.typography}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>Dizayndagi asosiy urg‘ular:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.keyElements.map((el, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-xs">
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>{el}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => onOrderStyle(item)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Ushbu uslubda buyurtma berish</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-3 rounded-xl bg-neutral-200/70 hover:bg-neutral-300 text-neutral-700 font-medium text-sm transition"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

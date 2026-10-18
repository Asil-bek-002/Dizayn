import React from 'react';
import { LayoutGrid, Smartphone, Megaphone, Package, Palette, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesProps {
  onSelectServiceCTA: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceCTA }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-600" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-blue-600" />;
      case 'Package':
        return <Package className="w-5 h-5 text-blue-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-600" />;
      default:
        return <LayoutGrid className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="xizmatlar" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700">
            <span>Dizayn xizmatlari</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Aniqlik va sifat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#121316] tracking-tight [text-wrap:balance]">
            Ijtimoiy tarmoqlar uchun to‘liq vizual yechimlar
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Biznesingizning mahsuloti yoki xizmatini aniq ifodalovchi, e’tibor tortuvchi va lentangizni professional ko‘rsatuvchi formatlar to‘plami.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Number & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-xs font-mono font-medium text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-display text-[#121316]">
                    {srv.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-blue-600">
                    {srv.shortDesc}
                  </p>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {srv.longDesc}
                </p>

                {/* Concrete Deliverables Checklist */}
                <div className="pt-2 space-y-2 border-t border-neutral-100">
                  <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Mijoz qabul qiladigan natija:
                  </p>
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Ideal Target */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="truncate max-w-[210px]">{srv.idealFor}</span>
                <button
                  onClick={onSelectServiceCTA}
                  type="button"
                  className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-xs"
                >
                  <span>Tariflar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

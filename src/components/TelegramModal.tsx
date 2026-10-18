import React, { useState } from 'react';
import { Send, Copy, Check, ExternalLink, X, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { buildTelegramUrl, isDefaultTelegramUsername } from '../config';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUsername: string;
  onUpdateUsername: (newUsername: string) => void;
  prefilledMessage: string;
  selectedPlanName?: string;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({
  isOpen,
  onClose,
  currentUsername,
  onUpdateUsername,
  prefilledMessage,
  selectedPlanName,
}) => {
  const [inputVal, setInputVal] = useState(
    isDefaultTelegramUsername(currentUsername) ? '' : currentUsername.replace('@', '')
  );
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isConfigPlaceholder = isDefaultTelegramUsername(currentUsername);
  const targetUsername = inputVal.trim() || (isConfigPlaceholder ? 'postpack_studio' : currentUsername.replace('@', ''));
  const finalTelegramUrl = buildTelegramUrl(targetUsername, prefilledMessage);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(prefilledMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSaveAndOpen = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onUpdateUsername(inputVal.trim().replace('@', ''));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    }
    window.open(finalTelegramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden text-[#121316]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#121316] text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium tracking-wide">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Telegram orqali bog‘lanish</span>
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              {selectedPlanName ? `"${selectedPlanName}" tarifi bo‘yicha buyurtma` : "PostPack Studio bilan aloqa"}
            </h3>
            <p className="text-xs text-neutral-300">
              Biznesingiz haqida ma’lumotlarni yuborish va dizayn paketini tasdiqlash
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Yopish"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Status info box */}
          {isConfigPlaceholder && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-950">Telegram manzil sozlamasi</p>
                <p className="mt-0.5 text-amber-800 leading-relaxed">
                  Konfiguratsiyada Telegram username vaqtincha belgilangan. O‘zingizning yoki studiya Telegram loginini quyida ko‘rsatib, to‘g‘ridan-to‘g‘ri sinab ko‘rishingiz mumkin.
                </p>
              </div>
            </div>
          )}

          {/* Form for custom telegram username */}
          <form onSubmit={handleSaveAndOpen} className="space-y-3">
            <div>
              <label htmlFor="tg-username" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                Murojaat uchun Telegram Username
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-neutral-400 font-medium text-sm">@</span>
                <input
                  id="tg-username"
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="postpack_studio yoki o‘z usernameingiz"
                  className="w-full pl-8 pr-24 py-2.5 bg-white border border-neutral-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (inputVal.trim()) {
                      onUpdateUsername(inputVal.trim().replace('@', ''));
                      setSavedSuccess(true);
                      setTimeout(() => setSavedSuccess(false), 2000);
                    }
                  }}
                  className="absolute right-1.5 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium rounded-lg transition"
                >
                  {savedSuccess ? "Saqlandi!" : "Saqlash"}
                </button>
              </div>
            </div>

            {/* Prefilled message preview */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                  Tayyor xabar matni:
                </label>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Nusxalandi!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Matnni nusxalash</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-700 leading-relaxed font-mono select-all">
                {prefilledMessage}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Telegram’da ochish</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium text-sm transition"
              >
                Bekor qilish
              </button>
            </div>
          </form>

          {/* Quick guidance note */}
          <div className="pt-3 border-t border-neutral-200 text-[11px] text-neutral-500 leading-normal flex items-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
            <span>
              Telegram ochilganda tayyor xabar avtomatik kiritiladi. Siz faqat o‘z biznesingiz yo‘nalishini qo‘shib yuborishingiz kifoya.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

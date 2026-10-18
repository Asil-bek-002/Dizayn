/**
 * PostPack Studio — Konfiguratsiya
 * 
 * Ushbu faylda Telegram foydalanuvchi nomi va asosiy sozlamalar belgilangan.
 * O'zingizning Telegram username'ingizni kiritish uchun quyidagi TELEGRAM_USERNAME o'zgaruvchisini almashtiring.
 */

// Agar "YOUR_TELEGRAM_USERNAME" holatida qolsa, sayt chiroyli sozlash modalini ko'rsatadi
// va foydalanuvchiga to'g'ridan-to'g'ri o'z username'ini kiritish yoki xabarni nusxalash imkonini beradi.
export const TELEGRAM_USERNAME = "YOUR_TELEGRAM_USERNAME";

export const STUDIO_CONFIG = {
  name: "PostPack Studio",
  tagline: "Har oy yangi dizayn. Biznesingiz uchun professional ko‘rinish.",
  shortDescription: "O‘zbekiston kichik bizneslari uchun har oylik ijtimoiy tarmoq dizayn xizmati.",
  defaultTelegramUsername: "YOUR_TELEGRAM_USERNAME",
  channelUsername: "postpack_studio",
  supportHours: "Dushanba - Shanba: 09:00 - 19:00",
  location: "Toshkent, O‘zbekiston",
  currency: "UZS",
};

/**
 * Telegram havolasini yaratish uchun yordamchi funksiya
 */
export function buildTelegramUrl(username: string, message: string): string {
  const cleanUsername = username.replace(/^@/, '').trim();
  const encodedText = encodeURIComponent(message);
  return `https://t.me/${cleanUsername}?text=${encodedText}`;
}

export function isDefaultTelegramUsername(username: string): boolean {
  return !username || username === "YOUR_TELEGRAM_USERNAME" || username.trim() === "";
}

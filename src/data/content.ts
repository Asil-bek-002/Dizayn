import { PricingPlan, PortfolioItem, ServiceItem, StepItem, FAQItem } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "start",
    name: "START",
    priceFormatted: "149 000",
    priceRaw: 149000,
    period: "oyiga",
    description: "Ijtimoiy tarmoqda endi faoliyat boshlayotgan yoki minimal vizual tartib talab qiladigan kichik bizneslar uchun.",
    features: [
      "8 ta post dizayni (Feed uchun)",
      "8 ta story dizayni (Kunlik faollik)",
      "Bitta yagona vizual yo‘nalish (Ranglar va shriftlar)",
      "2-3 ish kunida birinchi eskizlar",
      "PNG va JPG formatdagi yuqori sifatli fayllar",
      "Har bir post uchun 1 martalik tahrir bosqichi"
    ],
    deliverablesSummary: "8 post + 8 story / oy",
    telegramMessage: "Salom, PostPack Studio! Men kichik biznesim uchun \"START\" (149 000 UZS/oy) tarifi bo‘yicha xizmatga buyurtma bermoqchiman. Tafsilotlarni muhokama qilsak bo‘ladimi?"
  },
  {
    id: "grow",
    name: "GROW",
    priceFormatted: "299 000",
    priceRaw: 299000,
    period: "oyiga",
    badge: "Eng ommabop",
    popular: true,
    description: "Doimiy savdoga ega bo‘lgan kiyim do‘konlari, kafelar va xizmat ko‘rsatish markazlari uchun eng qulay tanlov.",
    features: [
      "12 ta post dizayni (Karusel va yagona postlar)",
      "12 ta story dizayni (E’lon va interaktiv)",
      "2 ta promo-kampaniya dizayni (Target reklama uchun)",
      "Navbatda ustuvorlik (Priority scheduling)",
      "2 martalik tahrir va sayqallash bosqichi",
      "Instagram highlights (Aktualnoe) muqovalari (5 dona)",
      "Tavsiya etiladigan vizual tartib (Grid planning)"
    ],
    deliverablesSummary: "12 post + 12 story + 2 promo / oy",
    telegramMessage: "Salom, PostPack Studio! Biznesim uchun \"GROW\" (299 000 UZS/oy) tarifi qiziqdi. Loyihamizni ko‘rib chiqib, qachondan boshlashimiz mumkinligini ayta olasizmi?"
  },
  {
    id: "pro",
    name: "PRO",
    priceFormatted: "499 000",
    priceRaw: 499000,
    period: "oyiga",
    badge: "Kengaytirilgan",
    description: "Faol marketing olib borayotgan o‘quv markazlari, yirik do‘konlar va bir nechta aksiyalarga ega brendlar uchun.",
    features: [
      "16 ta post dizayni (Kengaytirilgan format)",
      "16 ta story dizayni (Brendlangan shablonlar)",
      "4 ta promo-kampaniya dizayni (Maxsus chegirma/aksiyalar)",
      "Oylik vizual rejalashtirish (Grid mockup)",
      "Shaxsiy dizayner muloqoti va tezkor aloqa",
      "Maksimal ustuvorlik bilan 24-48 soatda topshirish",
      "Manba fayllari (Figma loyihasi talabga ko‘ra)"
    ],
    deliverablesSummary: "16 post + 16 story + 4 promo / oy",
    telegramMessage: "Salom, PostPack Studio! Bizning brendimiz uchun \"PRO\" (499 000 UZS/oy) to‘liq oylik tarifiga buyurtma bermoqchimiz. Ish jarayoni va shartlarni kelishib olsak."
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "cafe-post",
    title: "Kuzgi issiq qahva & desertlar",
    category: "cafe",
    categoryLabel: "Kofe xonalar & Restoranlar",
    aspectRatio: "1:1",
    targetAudience: "Shinam kafelar, qahvaxonalar, novvoyxona va artisan desert do‘konlari",
    description: "Issiq dolchin, qahva donalari va pishiriqlar kayfiyatini uyg‘otuvchi jozibali, iliq ranglardagi reklama posti.",
    colorPalette: [
      { name: "Espresso", hex: "#2C1810" },
      { name: "Sutli ko'pik", hex: "#F5EBE1" },
      { name: "Oltin dolchin", hex: "#C88A58" },
      { name: "Karamel", hex: "#9E5A2A" }
    ],
    typography: "Klassik serif sarlavhalar va qulay sans-serif narx ko‘rsatkichlari",
    keyElements: ["Minimalist kompozitsiya", "Iliq kontrast", "Ish vaqti va taklif ko‘rsatkichi"]
  },
  {
    id: "clothing-post",
    title: "Yangi mavsum: Bahor/Yoz kolleksiyasi",
    category: "clothing",
    categoryLabel: "Kiyim & Moda do‘konlari",
    aspectRatio: "1:1",
    targetAudience: "Ayollar va erkaklar kiyimi shourumlari, zamonaviy butiklar",
    description: "Tabiiy matolar, havodor bo‘shliq va yuqori moda jurnallari estetikasida tayyorlangan yangi to‘plam anonsi.",
    colorPalette: [
      { name: "Zaytun yashil", hex: "#3A4436" },
      { name: "Tabiiy zig'ir", hex: "#F3EFEA" },
      { name: "Terrakota", hex: "#C16E50" },
      { name: "Grafit", hex: "#1C1C1E" }
    ],
    typography: "Katta elegant sarlavha, nozik chiziqlar va aniq o‘lcham detallari",
    keyElements: ["Editorial tipografika", "Toza havodor fon", "Brend etiketi va chegirma burchagi"]
  },
  {
    id: "education-post",
    title: "IELTS 7.5+ & General English intensiv kursi",
    category: "education",
    categoryLabel: "O‘quv markazlari & Kurslar",
    aspectRatio: "1:1",
    targetAudience: "Xorijiy tillar, IT-akademiyalar, abituriyentlar va kasbiy ta’lim markazlari",
    description: "O‘quvchilar e’tiborini jalb qiluvchi, ishonch uyg‘otuvchi professional akademik reklama posti.",
    colorPalette: [
      { name: "Kobalt ko'k", hex: "#1E40AF" },
      { name: "Sariq urg'u", hex: "#FBBF24" },
      { name: "Toza oq", hex: "#FFFFFF" },
      { name: "To'q ko'k matn", hex: "#0F172A" }
    ],
    typography: "Aniq geometrik sans-serif va kontrast raqamli natijalar",
    keyElements: ["3 ta aniq ustunlik", "1-bepul dars tegi", "Boshlanish sanasi va joylar soni"]
  },
  {
    id: "beauty-post",
    title: "Gidro-peeling & Soch tiklash parvarishi",
    category: "beauty",
    categoryLabel: "Go‘zallik salonlari & Spa",
    aspectRatio: "1:1",
    targetAudience: "Kosmetologiya klinikalari, go‘zallik salonlari, lazer va massaj studiyalari",
    description: "Nafis, xotirjam va toza estetika orqali mijozlarda parvarishga bo‘lgan istakni uyg‘otuvchi vizual yechim.",
    colorPalette: [
      { name: "Pudrali atirgul", hex: "#F2DCD6" },
      { name: "Marvarid oq", hex: "#FDFBF9" },
      { name: "Bronza oltin", hex: "#B88E5E" },
      { name: "To'q zumrad", hex: "#1B3B36" }
    ],
    typography: "Nafis nozik yozuvlar, premium salon hissi",
    keyElements: ["Estetik ramka", "Muolaja davomiyligi", "Oldindan yozilish tugmasi"]
  },
  {
    id: "ecommerce-post",
    title: "Weekend Sale: -25% Chegirma aksiyasi",
    category: "ecommerce",
    categoryLabel: "Online-do‘konlar & Savdo",
    aspectRatio: "1:1",
    targetAudience: "Elektronika, soatlar, parfyumeriya va uy jihozlari sotuvchi internet-do‘konlar",
    description: "Lenta bo‘ylab harakatlanayotgan foydalanuvchini darhol to‘xtatuvchi yorqin, aniq va xaridga undovchi promo-banner.",
    colorPalette: [
      { name: "To'q ultramarin", hex: "#172554" },
      { name: "Elektr qizil", hex: "#EF4444" },
      { name: "Muz oq", hex: "#F8FAFC" },
      { name: "Neon sariq", hex: "#FACC15" }
    ],
    typography: "Kuchli qalin raqamlar, qat’iy harakatga chorlovchi matn",
    keyElements: ["Katta foiz ko'rsatkichi", "Muddati cheklangan soat belgisi", "Tezkor yetkazib berish belgisi"]
  },
  {
    id: "story-post",
    title: "Instagram Story: Bugungi maxsus taomnoma",
    category: "story",
    categoryLabel: "Instagram Story Formati",
    aspectRatio: "9:16",
    targetAudience: "Har kungi faollikni ushlab turuvchi kafelar, do‘konlar va xizmatlar",
    description: "9:16 vertikal ekranga moslashtirilgan, interaktiv stiker va ovoz berish uchun mo‘ljallangan zamonaviy story shabloni.",
    colorPalette: [
      { name: "Tungi ko'mir", hex: "#18181B" },
      { name: "Limon sariq", hex: "#EAB308" },
      { name: "Yumshoq kulrang", hex: "#F4F4F5" },
      { name: "Ko'k urg'u", hex: "#2563EB" }
    ],
    typography: "Mobil ekranda 1 soniyada o‘qiladigan dinamik harflar",
    keyElements: ["9:16 vertikal format", "Interaktiv so'rovnoma maydoni", "Yuqoriga surish (Swipe up) ishorasi"]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "feed-posts",
    title: "Instagram post dizayni",
    shortDesc: "Yagona vizual uslub, karusel va axborot postlari.",
    longDesc: "Har bir post biznesingizning qadr-qimmati, mahsuloti yoki xizmatini aniq ifodalaydi. Lenta chiroyli va tartibli ko‘rinishga ega bo‘ladi.",
    deliverables: ["1:1 va 4:5 nisbatdagi postlar", "Ko‘p sahifali karusel dizaynlari", "Typografik va infografik formatlar"],
    idealFor: "Muntazam ravishda yangilik chiqaradigan barcha bizneslar",
    iconName: "LayoutGrid"
  },
  {
    id: "stories",
    title: "Instagram story dizayni",
    shortDesc: "Kunlik jonli e’lonlar, aksiyalar va interaktiv shablonlar.",
    longDesc: "Storylar orqali mijozlar bilan tezkor aloqa o‘rnating. 9:16 formatda tayyorlangan qulay va ko‘zni charchatmaydigan vertikal dizaynlar.",
    deliverables: ["Kunlik menyu va aksiyalar", "Savol-javob va viktorina fonlari", "Mijoz fikrlari uchun ramkalar"],
    idealFor: "Kafelar, kiyim do‘konlari va go‘zallik studiyalari",
    iconName: "Smartphone"
  },
  {
    id: "promo-banners",
    title: "Reklama & promo bannerlar",
    shortDesc: "Meta Ads (Instagram/Facebook) target reklamalari uchun konversiyali dizayn.",
    longDesc: "Reklama byudjetingiz behuda ketmasligi uchun e’tiborni tortadigan, sarlavhasi aniq o‘qiladigan va xarid qilishga undovchi vizual yechimlar.",
    deliverables: ["Target reklama o‘lchamlari", "Mavsumiy chegirma bannerlari", "A/B test uchun vizual variantlar"],
    idealFor: "Pullik reklama yoqayotgan savdo va ta’lim markazlari",
    iconName: "Megaphone"
  },
  {
    id: "monthly-packs",
    title: "Oylik kontent-paketlar",
    shortDesc: "Har oy bir xil muddatda taqdim etiladigan tizimli dizayn to‘plamlari.",
    longDesc: "Har safar alohida dizayner qidirib ovora bo‘lmaysiz. Har oy boshida reja tuziladi va kelishilgan grafik asosida barcha materiallar topshiriladi.",
    deliverables: ["Oylik kontent-rejaga mos grafik", "Belgilangan topshirish muddatlari", "Tizimli fayllar arxivi"],
    idealFor: "Doimiy vizual tartibni istagan tadbirkorlar",
    iconName: "Package"
  },
  {
    id: "brand-identity",
    title: "Yagona brend vizual yo‘nalishi",
    shortDesc: "Ranglar palitrasi, shriftlar uyg‘unligi va vizual iyerarxiya.",
    longDesc: "Sahifangiz havaskorlikdan xoli bo‘lishi uchun ranglar kodi, shrift qoidalari va elementlar mutanosibligini yaratib beramiz.",
    deliverables: ["Ranglar palitrasi (Hex kodlari bilan)", "Shrift juftliklari tavsiyasi", "Logotipdan to‘g‘ri foydalanish qoidalari"],
    idealFor: "O‘z brendini professional ko‘rsatmoqchi bo‘lganlar",
    iconName: "Palette"
  }
];

export const WORK_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Tarifni tanlang",
    description: "Biznesingizning oylik postlar ehtiyojiga mos paketni (START, GROW yoki PRO) tanlang va Telegram orqali biz bilan bog‘laning.",
    timeline: "5 daqiqa"
  },
  {
    number: "02",
    title: "Ma’lumot va namunalarni yuboring",
    description: "Logotipingiz, mahsulot fotosuratlari, post matnlari va o‘zingiz yoqtirgan vizual uslublar (referenslar)ni Telegram orqali yuborasiz.",
    timeline: "1-kun"
  },
  {
    number: "03",
    title: "Vizual yo‘nalishni tasdiqlang",
    description: "Dizaynerimiz birinchi 1-2 ta post konseptini tayyorlab sizga ko‘rsatadi. Uslub sizga ma’qul bo‘lgach, qolgan dizaynlarga o‘tiladi.",
    timeline: "2-kun"
  },
  {
    number: "04",
    title: "Tayyor dizaynlarni qabul qiling",
    description: "Belgilangan muddatda yuqori sifatli (PNG/JPG) fayllar to‘plami Telegram orqali topshiriladi. Siz faqat sahifangizga joylaysiz.",
    timeline: "Kelishilgan jadval asosida"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "muddat",
    question: "Dizaynlar qancha vaqt ichida tayyorlanadi?",
    answer: "Odatda birinchi vizual konsept ma’lumotlar to‘liq qabul qilingandan so‘ng 2-3 ish kuni ichida taqdim etiladi. Tasdiqlangach, qolgan post va storylar hafta davomida reja bo‘yicha yoki oylik to‘plam holida kelishilgan sanalarda bosqichma-bosqich yuboriladi."
  },
  {
    id: "faq-2",
    category: "tahrir",
    question: "O‘zgartirish (pravka)lar qanday kiritiladi?",
    answer: "Har bir tarifda matndagi xatolar, rasm almashtirish yoki rang urg‘usini sozlash bo‘yicha tahrirlash bosqichlari belgilangan (START tarifida 1 marta, GROW va PRO tariflarida 2 martagacha). Biz cheksiz tahrirlar va’da qilmaymiz, chunki dastlabki bosqichdayoq vizual yo‘nalishni aniq kelishib olamiz."
  },
  {
    id: "faq-3",
    category: "material",
    question: "Ish boshlash uchun mendan nimalar talab etiladi?",
    answer: "Sizdan biznesingiz logotipi (PNG yoki vektor formatida), agar mavjud bo‘lsa mahsulotlarning sifatli fotosuratlari, postlarda yozilishi kerak bo‘lgan asosiy matnlar (aksiyalar, narxlar, shartlar) va o‘zingizga ma’qul bo‘lgan 2-3 ta referens namunalari talab qilinadi."
  },
  {
    id: "faq-4",
    category: "material",
    question: "Agar mahsulotlarimizning professional fotosuratlari bo‘lmasa-chi?",
    answer: "Xavotirlanmang. Biz litsenziyalangan neytral foto-banklardan foydalanamiz, matnli (tipografik) kuchli kompozitsiyalar quramiz yoki grafik illyustratsiyalar va formalar yordamida zamonaviy dizayn yaratamiz. Shuningdek, telefon orqali to‘g‘ri suratga olish bo‘yicha qisqa tavsiyalar beramiz."
  },
  {
    id: "faq-5",
    category: "tolov",
    question: "To‘lov qanday amalga oshiriladi va u avtomatik yechiladimi?",
    answer: "Yo‘q, saytda kartani bog‘lash yoki avtomatik obuna to‘lovi yechish mavjud emas! Barcha to‘lovlar har bir oy boshida shaxsiy kelishuv asosida (Payme, Click yoki hisob raqami orqali) amalga oshiriladi. Siz har oy xizmatni davom ettirish yoki to‘xtatishni o‘zingiz erkin hal qilasiz."
  },
  {
    id: "faq-6",
    category: "jarayon",
    question: "Oylik xizmatni xohlagan payt to‘xtatsam bo‘ladimi?",
    answer: "Ha, albatta. Siz qandaydir uzoq muddatli qat’iy shartnomaga bog‘lanmaysiz. Joriy oy yakunlangach, keyingi oy uchun buyurtma bermaslik yoki xizmatni keyinroq qayta faollashtirish huquqiga egasiz."
  },
  {
    id: "faq-7",
    category: "jarayon",
    question: "Professional dizayn sotuvlarim oshishiga kafolat beradimi?",
    answer: "Dizayn — bu sahifangizning yuzi. U mijozda ishonch uyg‘otadi, e’tiborni tortadi va mahsulotni chiroyli taqdim etadi. Biroq sotuvlar mahsulot sifati, narxlar siyosati, operatorlarning javob berish tezligi va xizmat darajasiga ham bog‘liq. Biz o‘z zimmamizdagi vizual qismni eng yuqori darajada bajarishga mas’ulmiz."
  }
];

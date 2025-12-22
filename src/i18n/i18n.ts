export const LANGS = ["tr", "sr", "en"] as const;
export type Lang = (typeof LANGS)[number];

// Default lang (bazı dosyalarda import edilse bile patlamasın)
export const DEFAULT_LANG: Lang = "tr";

type Dict = Record<string, string>;
type All = Record<Lang, Dict>;

const DICT: All = {
  tr: {
    "nav.menu": "Menü",
    "nav.about": "Hakkımızda",
    "nav.contact": "İletişim",

    "cta.call": "Ara",
    "cta.route": "Yol Tarifi",
    "cta.menu": "Menüye git",

    "home.kicker": "Belgrad’ın kalbinde sıcak bir mola.",
    "home.title": "Latife Belgrade",
    "home.subtitle": "Kahve, tatlılar ve şehrin ritmi — turkuaz bir kapının ardında.",
    "home.hours": "Çalışma saatleri",
    "home.where": "Neredeyiz?",
    "home.menuTeaser": "Menüden Seçmeler",

    "menu.title": "Menü",
    "menu.note": "Fiyatlar RSD cinsindendir. Menüler mevsime göre değişebilir.",
    "menu.search": "Menüde ara...",
    "menu.searchInCategory": "Menüde ara...",
    "menu.empty": "Sonuç bulunamadı.",

    // Menü kategori sayfası UI
    "menu.categoriesKicker": "Kategorilerden seç ve menüyü keşfet.",
    "menu.category": "Kategori",
    "menu.openCategory": "Menüye gir",
    "menu.back": "Menü",

    // 4 kategori
    "menu.cat.breakfast": "Kahvaltı",
    "menu.cat.hot": "Sıcak İçecekler",
    "menu.cat.cold": "Soğuk İçecekler",
    "menu.cat.desserts": "Tatlılar",

    "menu.cat.breakfastDesc": "Güne iyi bir başlangıç.",
    "menu.cat.hotDesc": "Kahve & sıcak içecekler.",
    "menu.cat.coldDesc": "Soğuk kahveler ve ferahlatan seçenekler.",
    "menu.cat.dessertsDesc": "Tatlı molası için favoriler.",

    // Alkol başlığı
    "menu.alcohol": "Alkollü içecekler",

    // ✅ Menü item etiketleri (tags)
    "menu.tag.combo": "Combo",
    "menu.tag.snack": "Atıştırmalık",
    "menu.tag.breakfast": "Kahvaltı",
    "menu.tag.soft": "Soft drink",
    "menu.tag.lemonade": "Limonata",
    "menu.tag.frozen": "Frozen",
    "menu.tag.alcohol": "Alkollü",
    "menu.tag.cocktail": "Kokteyl",

    // ✅ Para birimi
    "currency.rsd": "RSD",

    "about.title": "Hakkımızda",
    "about.p1":
      "Latife Belgrade, Zmaj Jovina’nın kalbinde küçük ama özenli bir mola noktası. Turkuaz kapının ardında iyi kahve, taze tatlılar ve sıcak bir atmosfer var.",
    "about.p2":
      "Gün boyu sakin bir buluşma, kısa bir kahve molası ya da şehir yürüyüşünün ardından tatlı bir durak için buradayız.",

    "contact.title": "İletişim",
    "contact.subtitle": "Adres, telefon ve sosyal medya bağlantıları.",
    "contact.address": "Adres",
    "contact.phone": "Telefon",
    "contact.social": "Sosyal medya",

    "day.mon": "Pzt",
    "day.tue": "Sal",
    "day.wed": "Çar",
    "day.thu": "Per",
    "day.fri": "Cum",
    "day.sat": "Cmt",
    "day.sun": "Paz",

    "fab.contact": "Bize ulaşın",

    "floating.contact.title": "Bize ulaşın",
"floating.contact.tooltip": "Bize ulaşın",

  },

  sr: {
    "nav.menu": "Meni",
    "nav.about": "O nama",
    "nav.contact": "Kontakt",

    "cta.call": "Pozovi",
    "cta.route": "Ruta",
    "cta.menu": "Idi na meni",

    "home.kicker": "Topla pauza u srcu Beograda.",
    "home.title": "Latife Belgrade",
    "home.subtitle": "Kafa, deserti i ritam grada — iza tirkiznih vrata.",
    "home.hours": "Radno vreme",
    "home.where": "Gde se nalazimo?",
    "home.menuTeaser": "Izdvojeno iz menija",

    "menu.title": "Meni",
    "menu.note": "Cene su u RSD. Meni se može menjati sezonski.",
    "menu.search": "Pretraži meni...",
    "menu.searchInCategory": "Pretraži meni...",
    "menu.empty": "Nema rezultata.",

    // Menü kategori sayfası UI
    "menu.categoriesKicker": "Izaberite kategoriju i istražite meni.",
    "menu.category": "Kategorija",
    "menu.openCategory": "Otvori meni",
    "menu.back": "Meni",

    // 4 kategori
    "menu.cat.breakfast": "Doručak",
    "menu.cat.hot": "Topli napici",
    "menu.cat.cold": "Hladni napici",
    "menu.cat.desserts": "Dezerti",

    "menu.cat.breakfastDesc": "Udoban početak dana.",
    "menu.cat.hotDesc": "Kafa i topli favoriti.",
    "menu.cat.coldDesc": "Ledene kafe i osvežavajući izbor.",
    "menu.cat.dessertsDesc": "Slatke poslastice koje ćete voleti.",

    // Alkol başlığı
    "menu.alcohol": "Alkoholna pića",

    // ✅ Menü item etiketleri (tags)
    "menu.tag.combo": "Kombinacija",
    "menu.tag.snack": "Grickalice",
    "menu.tag.breakfast": "Doručak",
    "menu.tag.soft": "Bezalkoholno",
    "menu.tag.lemonade": "Limunada",
    "menu.tag.frozen": "Frozen",
    "menu.tag.alcohol": "Alkohol",
    "menu.tag.cocktail": "Koktel",

    // ✅ Para birimi
    "currency.rsd": "RSD",

    "about.title": "O nama",
    "about.p1":
      "Latife Belgrade je malo, pažljivo uređeno mesto u srcu ulice Zmaj Jovina. Iza tirkiznih vrata čekaju dobra kafa, sveži deserti i topla atmosfera.",
    "about.p2":
      "Tu smo za miran susret tokom dana, kratku pauzu uz kafu ili slatko zaustavljanje posle šetnje gradom.",

    "contact.title": "Kontakt",
    "contact.subtitle": "Adresa, telefon i društvene mreže.",
    "contact.address": "Adresa",
    "contact.phone": "Telefon",
    "contact.social": "Društvene mreže",

    "day.mon": "Pon",
    "day.tue": "Uto",
    "day.wed": "Sre",
    "day.thu": "Čet",
    "day.fri": "Pet",
    "day.sat": "Sub",
    "day.sun": "Ned",

    "fab.contact": "Kontaktirajte nas",

    "floating.contact.title": "Kontaktirajte nas",
"floating.contact.tooltip": "Kontaktirajte nas",

  },

  en: {
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.contact": "Contact",

    "cta.call": "Call",
    "cta.route": "Directions",
    "cta.menu": "Go to menu",

    "home.kicker": "A warm break in the heart of Belgrade.",
    "home.title": "Latife Belgrade",
    "home.subtitle": "Coffee, desserts, and the city’s rhythm — behind a turquoise door.",
    "home.hours": "Opening hours",
    "home.where": "Where to find us",
    "home.menuTeaser": "From the Menu",

    "menu.title": "Menu",
    "menu.note": "Prices are in RSD. Menu items may change seasonally.",
    "menu.search": "Search the menu...",
    "menu.searchInCategory": "Search the menu...",
    "menu.empty": "No results found.",

    // Menu category page UI
    "menu.categoriesKicker": "Choose a category and explore the menu.",
    "menu.category": "Category",
    "menu.openCategory": "Open menu",
    "menu.back": "Menu",

    // 4 categories
    "menu.cat.breakfast": "Breakfast",
    "menu.cat.hot": "Hot drinks",
    "menu.cat.cold": "Cold drinks",
    "menu.cat.desserts": "Desserts",

    "menu.cat.breakfastDesc": "A cozy start to the day.",
    "menu.cat.hotDesc": "Coffee & hot favorites.",
    "menu.cat.coldDesc": "Iced coffees and refreshing picks.",
    "menu.cat.dessertsDesc": "Sweet treats you’ll love.",

    // Alcohol section title
    "menu.alcohol": "Alcoholic drinks",

    // ✅ Menu item tags
    "menu.tag.combo": "Combo",
    "menu.tag.snack": "Snack",
    "menu.tag.breakfast": "Breakfast",
    "menu.tag.soft": "Soft drink",
    "menu.tag.lemonade": "Lemonade",
    "menu.tag.frozen": "Frozen",
    "menu.tag.alcohol": "Alcohol",
    "menu.tag.cocktail": "Cocktail",

    // ✅ Currency
    "currency.rsd": "RSD",

    "about.title": "About",
    "about.p1":
      "Latife Belgrade is a small, curated stop in the heart of Zmaj Jovina. Behind the turquoise door you’ll find great coffee, fresh desserts, and a warm atmosphere.",
    "about.p2":
      "Perfect for a calm meet-up, a quick coffee break, or a sweet stop after a walk through the city.",

    "contact.title": "Contact",
    "contact.subtitle": "Address, phone, and social links.",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.social": "Social",

    "day.mon": "Mon",
    "day.tue": "Tue",
    "day.wed": "Wed",
    "day.thu": "Thu",
    "day.fri": "Fri",
    "day.sat": "Sat",
    "day.sun": "Sun",

    "fab.contact": "Contact us",

    "floating.contact.title": "Contact us",
"floating.contact.tooltip": "Contact us",

  },
};

export function t(lang: Lang, key: string): string {
  return DICT[lang]?.[key] ?? DICT.en[key] ?? key;
}

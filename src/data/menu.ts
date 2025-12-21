export type Price =
  | number
  | { single: number; double?: number }
  | { size: string; price: number };

export type MenuCategoryKey = "breakfast" | "hot" | "cold" | "desserts";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string; // ✅ zorunlu
  price: Price;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  key: MenuCategoryKey;
  items: MenuItem[];
};

const img = (id: string) => `/images/items/${id}.jpg`;

export const menu: MenuCategory[] = [
  // =========================
  // BREAKFAST
  // =========================
  {
    id: "breakfast",
    key: "breakfast",
    items: [
      {
        id: "breakfast-plate",
        name: "Breakfast plate",
        description: "Güne iyi bir başlangıç için zengin kahvaltı tabağı.",
        image: img("breakfast-plate"),
        price: 650,
        tags: ["breakfast"],
      },
      {
        id: "croissant",
        name: "Croissant",
        description: "Tereyağlı klasik kruvasan.",
        image: img("croissant"),
        price: 250,
      },
      {
        id: "choco-croissant",
        name: "Chocolate croissant",
        description: "Çikolata dolgulu kruvasan.",
        image: img("choco-croissant"),
        price: 330,
      },
      {
        id: "ham-cheese-croissant",
        name: "Ham and cheese croissant",
        description: "Jambon & peynirli kruvasan.",
        image: img("ham-cheese-croissant"),
        price: 380,
      },
      {
        id: "combo-croissant",
        name: "Combo croissant",
        description: "Kruvasan eşliğinde pratik bir kombin.",
        image: img("combo-croissant"),
        price: 550,
        tags: ["combo"],
      },
      {
        id: "tuna-sandwich",
        name: "Tuna sandwich",
        description: "Ton balıklı sandviç.",
        image: img("tuna-sandwich"),
        price: 600,
      },
      {
        id: "mozarella-sandwich",
        name: "Mozarella sandwich",
        description: "Mozzarella peynirli sandviç.",
        image: img("mozarella-sandwich"),
        price: 600,
      },
      {
        id: "combo-sandwich",
        name: "Combo sandwich",
        description: "Sandviç + içecek kombin.",
        image: img("combo-sandwich"),
        price: 700,
        tags: ["combo"],
      },
      {
        id: "avocado-toast",
        name: "Avocado mash toast",
        description: "Avokado ezmesi ile tost.",
        image: img("avocado-toast"),
        price: 600,
      },
      {
        id: "snack-fries",
        name: "French fries",
        description: "Kıtır patates kızartması.",
        image: img("snack-fries"),
        price: 450,
        tags: ["snack"],
      },
      {
        id: "snack-chips",
        name: "Chips",
        description: "Cips.",
        image: img("snack-chips"),
        price: 270,
        tags: ["snack"],
      },
      {
        id: "snack-popcorn",
        name: "Popcorn",
        description: "Patlamış mısır.",
        image: img("snack-popcorn"),
        price: 270,
        tags: ["snack"],
      },
      {
        id: "snack-peanuts",
        name: "Peanuts",
        description: "Fıstık.",
        image: img("snack-peanuts"),
        price: 300,
        tags: ["snack"],
      },
      {
        id: "cigkofte-wrap",
        name: "Çiğ Köfte Wrap",
        description: "Dürüm şeklinde çiğ köfte.",
        image: img("cigkofte-wrap"),
       price: 700,
      },
      {
        id: "cigkofte-portion",
        name: "Çiğ Köfte Portion",
        description: "Porsiyon çiğ köfte.",
        image: img("cigkofte-portion"),
        price: 1000,
      },
      {
        id: "combo-tea-sandwich",
        name: "Turkish Tea + Sandwich",
        description: "Türk çayı ile sandviç kombin.",
        image: img("combo-tea-sandwich"),
        price: 800,
        tags: ["combo"],
      },
    ],
  },

  // =========================
  // HOT DRINKS (Coffee + Tea)
  // =========================
  {
    id: "hot",
    key: "hot",
    items: [
      // Combos (coffee + dessert)
      {
        id: "combo-cheesecake",
        name: "Coffee + Cheesecake",
        description: "Kahve yanında cheesecake ile kombin.",
        image: img("combo-cheesecake"),
        price: 850,
        tags: ["combo"],
      },
      {
        id: "combo-sanseb",
        name: "Coffee + San Sebastian",
        description: "Kahve yanında San Sebastian ile kombin.",
        image: img("combo-sanseb"),
        price: 900,
        tags: ["combo"],
      },
      {
        id: "combo-carrot",
        name: "Coffee + Carrot Cake",
        description: "Kahve yanında havuçlu kek ile kombin.",
        image: img("combo-carrot"),
        price: 800,
        tags: ["combo"],
      },
      {
        id: "combo-tiramisu",
        name: "Coffee + Tiramisu",
        description: "Kahve yanında tiramisu ile kombin.",
        image: img("combo-tiramisu"),
        price: 900,
        tags: ["combo"],
      },
      {
        id: "combo-cookie",
        name: "Coffee + Cookie",
        description: "Kahve yanında cookie ile kombin.",
        image: img("combo-cookie"),
        price: 750,
        tags: ["combo"],
      },
      {
        id: "combo-eclair",
        name: "Coffee + Eclair",
        description: "Kahve yanında eclair ile kombin.",
        image: img("combo-eclair"),
        price: 750,
        tags: ["combo"],
      },
      {
        id: "combo-mosaic",
        name: "Coffee + Mosaic Cake",
        description: "Kahve yanında mozaik kek ile kombin.",
        image: img("combo-mosaic"),
        price: 800,
        tags: ["combo"],
      },
      {
        id: "combo-magnolia",
        name: "Coffee + Magnolia",
        description: "Kahve yanında magnolia ile kombin.",
        image: img("combo-magnolia"),
        price: 800,
        tags: ["combo"],
      },

      // Hot coffees
      {
        id: "turkish-coffee",
        name: "Turkish coffee",
        description: "Geleneksel Türk kahvesi.",
        image: img("turkish-coffee"),
        price: { single: 320, double: 440 },
      },
      {
        id: "cavalry-turkish",
        name: "Cavalry Turkish Coffee",
        description: "Özel Türk kahvesi sunumu.",
        image: img("cavalry-turkish"),
        price: 330,
      },
      {
        id: "espresso",
        name: "Espresso",
        description: "Klasik espresso shot.",
        image: img("espresso"),
        price: { single: 270, double: 350 },
      },
      {
        id: "espresso-macchiato",
        name: "Espresso Macchiato",
        description: "Bir dokunuş süt köpüğü ile espresso.",
        image: img("espresso-macchiato"),
        price: { single: 310, double: 420 },
      },
      {
        id: "espresso-con-panna",
        name: "Espresso Con Panna",
        description: "Kremalı espresso.",
        image: img("espresso-con-panna"),
        price: 330,
      },
      {
        id: "espresso-cubana",
        name: "Espresso Cubana",
        description: "Aromalı espresso çeşidi.",
        image: img("espresso-cubana"),
        price: 310,
      },
      {
        id: "americano",
        name: "Americano",
        description: "Espresso + sıcak su ile hafif içim.",
        image: img("americano"),
        price: 330,
      },
      {
        id: "mocha-cocostar",
        name: "Mocha Cocostar",
        description: "Çikolata & kahve uyumu.",
        image: img("mocha-cocostar"),
        price: 460,
      },
      {
        id: "cappucino",
        name: "Cappucino",
        description: "Süt köpüğü ile dengeli kahve.",
        image: img("cappucino"),
        price: 350,
      },
      {
        id: "swiss-orange-mocha",
        name: "Swiss Orange Mocha",
        description: "Portakal dokunuşlu mocha.",
        image: img("swiss-orange-mocha"),
        price: 460,
      },
      {
        id: "flat-white",
        name: "Flat White",
        description: "Yoğun espresso, ipeksi süt.",
        image: img("flat-white"),
        price: 400,
      },
      {
        id: "cookies-latte",
        name: "Cookies Latte",
        description: "Cookie aromalı latte.",
        image: img("cookies-latte"),
        price: 430,
      },
      {
        id: "cortado",
        name: "Cortado",
        description: "Dengeli sütlü espresso.",
        image: img("cortado"),
        price: 320,
      },
      {
        id: "caramel-macchiato",
        name: "Caramel Macchiato",
        description: "Karamel aromalı macchiato.",
        image: img("caramel-macchiato"),
        price: 390,
      },
      {
        id: "latte-macchiato",
        name: "Latte Macchiato",
        description: "Katmanlı sütlü kahve.",
        image: img("latte-macchiato"),
        price: 400,
      },
      {
        id: "latte",
        name: "Latte",
        description: "Yumuşak içimli sütlü kahve.",
        image: img("latte"),
        price: 350,
      },
      {
        id: "mocha",
        name: "Mocha",
        description: "Çikolata & espresso karışımı.",
        image: img("mocha"),
        price: 400,
      },

      // Hot teas
      {
        id: "turkish-tea",
        name: "Turkish Tea",
        description: "Klasik Türk çayı.",
        image: img("turkish-tea"),
        price: { single: 250, double: 380 },
      },
      { id: "rose-bouquet", name: "Rose Bouquet Tea", description: "Gül aromalı bitki çayı.", image: img("rose-bouquet"), price: 420 },
      { id: "orange-tea", name: "Orange Tea", description: "Portakal aromalı çay.", image: img("orange-tea"), price: 420 },
      { id: "earl-grey", name: "Early Grey Tea", description: "Bergamot aromalı klasik çay.", image: img("earl-grey"), price: 420 },
      { id: "lemon-ginger", name: "Lemon Ginger Tea", description: "Limon & zencefil çayı.", image: img("lemon-ginger"), price: 420 },
      { id: "rooibos", name: "Rooibos tea", description: "Rooibos bitki çayı.", image: img("rooibos"), price: 420 },
      { id: "green-tea", name: "Green Tea", description: "Yeşil çay.", image: img("green-tea"), price: 420 },
      { id: "sage-tea", name: "Sage Tea", description: "Adaçayı.", image: img("sage-tea"), price: 420 },
      { id: "winter-tea", name: "Winter tea", description: "Kış çayı karışımı.", image: img("winter-tea"), price: 420 },
      { id: "echinacea", name: "Echinacea Tea", description: "Ekinezya çayı.", image: img("echinacea"), price: 420 },
      { id: "chamomile", name: "Chamomile Tea", description: "Papatya çayı.", image: img("chamomile"), price: 420 },
      { id: "fennel", name: "Fennel Tea", description: "Rezene çayı.", image: img("fennel"), price: 420 },
      { id: "lemon-balm", name: "Lemon Balm Tea", description: "Oğul otu (melisa) çayı.", image: img("lemon-balm"), price: 420 },
    ],
  },

  // =========================
  // COLD DRINKS (Iced + Soft + Frozen + Alcohol)
  // =========================
  {
    id: "cold",
    key: "cold",
    items: [
      // Iced coffees & frappes
      { id: "iced-espresso", name: "Iced Espresso", description: "Buz üzerinde espresso.", image: img("iced-espresso"), price: 290 },
      { id: "iced-americano", name: "Iced Americano", description: "Buzlu americano.", image: img("iced-americano"), price: 370 },
      { id: "iced-latte", name: "Iced Latte", description: "Buzlu latte.", image: img("iced-latte"), price: 370 },
      { id: "iced-mocha", name: "Iced Mocha", description: "Buzlu mocha.", image: img("iced-mocha"), price: 390 },
      { id: "frappucino", name: "Frappucino", description: "Buzlu, yoğun kıvamlı kahve.", image: img("frappucino"), price: 420 },
      { id: "frappe", name: "Frappe", description: "Klasik frappe.", image: img("frappe"), price: 420 },
      { id: "oreo-frappe", name: "Oreo Frappe", description: "Oreo dokunuşlu frappe.", image: img("oreo-frappe"), price: 420 },

      // Frozen (listed under tea previously)
      { id: "frozen-green-apple", name: "Frozen Green apple", description: "Frozen yeşil elma.", image: img("frozen-green-apple"), price: 470, tags: ["frozen"] },
      { id: "frozen-mint-lemon", name: "Frozen Mint-Lemon", description: "Nane & limon frozen.", image: img("frozen-mint-lemon"), price: 470, tags: ["frozen"] },
      { id: "frozen-kiwi-green-apple", name: "Frozen Kiwi-Green Apple", description: "Kivi & yeşil elma frozen.", image: img("frozen-kiwi-green-apple"), price: 470, tags: ["frozen"] },
      { id: "frozen-strawberry-lemon", name: "Frozen Strawberry-Lemon", description: "Çilek & limon frozen.", image: img("frozen-strawberry-lemon"), price: 470, tags: ["frozen"] },
      { id: "frozen-watermelon-strawberry", name: "Frozen Watermelon-Strawberry", description: "Karpuz & çilek frozen.", image: img("frozen-watermelon-strawberry"), price: 470, tags: ["frozen"] },
      { id: "frozen-passion-fruit", name: "Frozen Passion Fruit", description: "Çarkıfelek frozen.", image: img("frozen-passion-fruit"), price: 470, tags: ["frozen"] },
      { id: "frozen-strawberry", name: "Frozen Strawberry", description: "Çilek frozen.", image: img("frozen-strawberry"), price: 470, tags: ["frozen"] },
      { id: "frozen-forest-fruits", name: "Frozen Forest Fruits", description: "Orman meyveleri frozen.", image: img("frozen-forest-fruits"), price: 470, tags: ["frozen"] },
      { id: "frozen-tropical-mix", name: "Frozen Tropical Mix", description: "Tropik mix frozen.", image: img("frozen-tropical-mix"), price: 470, tags: ["frozen"] },
      { id: "frozen-peach-mango", name: "Frozen Peach Mango", description: "Şeftali & mango frozen.", image: img("frozen-peach-mango"), price: 470, tags: ["frozen"] },
      { id: "frozen-watermelon", name: "Frozen Watermelon", description: "Karpuz frozen.", image: img("frozen-watermelon"), price: 470, tags: ["frozen"] },

      // Soft drinks
      { id: "water", name: "Water", description: "Su.", image: img("water"), price: 200, tags: ["soft"] },
      { id: "coca-cola", name: "Coca Cola", description: "Coca Cola.", image: img("coca-cola"), price: 270, tags: ["soft"] },
      { id: "churchill", name: "Churchill", description: "Churchill.", image: img("churchill"), price: 330, tags: ["soft"] },
      { id: "soda", name: "Soda", description: "Soda.", image: img("soda"), price: 250, tags: ["soft"] },
      { id: "schweppes", name: "Schweppes", description: "Schweppes.", image: img("schweppes"), price: 270, tags: ["soft"] },
      { id: "schweppes-tonic", name: "Schweppes Tonic", description: "Schweppes Tonic.", image: img("schweppes-tonic"), price: 300, tags: ["soft"] },
      { id: "sprite", name: "Sprite", description: "Sprite.", image: img("sprite"), price: 270, tags: ["soft"] },
      { id: "next-apple", name: "Next apple", description: "Elma suyu.", image: img("next-apple"), price: 250, tags: ["soft"] },
      { id: "orange-juice", name: "Orange juice", description: "Portakal suyu.", image: img("orange-juice"), price: 400, tags: ["soft"] },

      // Lemonades
      { id: "lemonade", name: "Lemonade", description: "Ev yapımı limonata.", image: img("lemonade"), price: 380, tags: ["lemonade"] },
      { id: "lemonade-green-apple", name: "Lemonade – green apple", description: "Yeşil elmalı limonata.", image: img("lemonade-green-apple"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-strawberry", name: "Lemonade – strawberry", description: "Çilekli limonata.", image: img("lemonade-strawberry"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-ginger", name: "Lemonade – ginger", description: "Zencefilli limonata.", image: img("lemonade-ginger"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-mint", name: "Lemonade – mint", description: "Naneli limonata.", image: img("lemonade-mint"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-elder", name: "Lemonade – elder flower", description: "Mürver çiçeği aromalı limonata.", image: img("lemonade-elder"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-watermelon", name: "Lemonade – watermelon", description: "Karpuzlu limonata.", image: img("lemonade-watermelon"), price: 400, tags: ["lemonade"] },

      // Alcohol (şimdilik cold içinde; istemiyorsan tamamen kaldırırım)
      { id: "beer-heineken", name: "Heineken (0.25)", description: "Bira.", image: img("beer-heineken"), price: 380, tags: ["alcohol"] },
      { id: "beer-zajecarsko", name: "Zajecarsko (0.33)", description: "Bira.", image: img("beer-zajecarsko"), price: 380, tags: ["alcohol"] },
      { id: "beer-moretti", name: "Birra moretti bottle (0.33)", description: "Bira.", image: img("beer-moretti"), price: 380, tags: ["alcohol"] },

      { id: "wine-rose", name: "Plazente rose (0.18)", description: "Rose şarap.", image: img("wine-rose"), price: 450, tags: ["alcohol"] },
      { id: "wine-chardonnay", name: "Plazente chardonnay (0.18)", description: "Chardonnay şarap.", image: img("wine-chardonnay"), price: 450, tags: ["alcohol"] },
      { id: "wine-vranac", name: "Plazente vranac (0.18)", description: "Vranac şarap.", image: img("wine-vranac"), price: 450, tags: ["alcohol"] },

      { id: "rakija-pear", name: "Rakija – Pear (0.03)", description: "Armut rakija.", image: img("rakija-pear"), price: 400, tags: ["alcohol"] },
      { id: "rakija-peach", name: "Rakija – Peach (0.03)", description: "Şeftali rakija.", image: img("rakija-peach"), price: 400, tags: ["alcohol"] },
      { id: "rakija-sliva", name: "Rakija – Sliva brandy (0.03)", description: "Sliva rakija.", image: img("rakija-sliva"), price: 400, tags: ["alcohol"] },

      { id: "shot-jameson", name: "Jameson (0.03)", description: "Jameson shot.", image: img("shot-jameson"), price: 700, tags: ["alcohol"] },
      { id: "shot-gin", name: "Gin (0.03)", description: "Gin shot.", image: img("shot-gin"), price: 400, tags: ["alcohol"] },
      { id: "shot-tekila", name: "Tekila (0.03)", description: "Tekila shot.", image: img("shot-tekila"), price: 300, tags: ["alcohol"] },
      { id: "shot-jager", name: "Jagermeister (0.03)", description: "Jagermeister shot.", image: img("shot-jager"), price: 350, tags: ["alcohol"] },

      { id: "cocktail-sex", name: "Sex on the beach", description: "Kokteyl.", image: img("cocktail-sex"), price: 500, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-cuba", name: "Cuba libre", description: "Kokteyl.", image: img("cocktail-cuba"), price: 509, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-longisland", name: "Long island ice tea", description: "Kokteyl.", image: img("cocktail-longisland"), price: 600, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-cosmo", name: "Cosmopolitan", description: "Kokteyl.", image: img("cocktail-cosmo"), price: 500, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-maitai", name: "Mai tai", description: "Kokteyl.", image: img("cocktail-maitai"), price: 400, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-white-russian", name: "White russian", description: "Kokteyl.", image: img("cocktail-white-russian"), price: 500, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-black-russian", name: "Black russian", description: "Kokteyl.", image: img("cocktail-black-russian"), price: 500, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-mojito", name: "Mojito", description: "Kokteyl.", image: img("cocktail-mojito"), price: 450, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-gintonic", name: "Gin tonic", description: "Kokteyl.", image: img("cocktail-gintonic"), price: 450, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-devils", name: "Devils ice tea", description: "Kokteyl.", image: img("cocktail-devils"), price: 600, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-oldfashion", name: "Old fashion", description: "Kokteyl.", image: img("cocktail-oldfashion"), price: 450, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-martini", name: "Martini", description: "Kokteyl.", image: img("cocktail-martini"), price: 500, tags: ["alcohol", "cocktail"] },

      { id: "combo-beer-fries", name: "Beer + French Fries", description: "Bira + patates kombin.", image: img("combo-beer-fries"), price: 850, tags: ["combo", "alcohol"] },
    ],
  },

  // =========================
  // DESSERTS
  // =========================
  {
    id: "desserts",
    key: "desserts",
    items: [
      { id: "dessert-san-sebastian", name: "San sebastian", description: "Kremamsı, yoğun tatlı lezzet.", image: img("dessert-san-sebastian"), price: 600 },
      { id: "dessert-cheesecake", name: "Cheesecake", description: "Klasik cheesecake.", image: img("dessert-cheesecake"), price: 550 },
      { id: "dessert-carrot", name: "Carrot cake", description: "Havuçlu kek.", image: img("dessert-carrot"), price: 500 },
      { id: "dessert-muffin", name: "Muffin", description: "Günlük taze muffin.", image: img("dessert-muffin"), price: 430 },
      { id: "dessert-magnolia", name: "Magnolia", description: "Magnolia tatlısı.", image: img("dessert-magnolia"), price: 550 },
      { id: "dessert-mosaic", name: "Mosaic cake", description: "Mozaik kek.", image: img("dessert-mosaic"), price: 500 },
      { id: "dessert-tiramisu", name: "Tiramisu", description: "Kahve aromalı tiramisu.", image: img("dessert-tiramisu"), price: 550 },
      { id: "dessert-rice-pudding", name: "Rice pudding", description: "Sütlaç.", image: img("dessert-rice-pudding"), price: 450 },
      { id: "dessert-eclair", name: "Eclair", description: "Eclair.", image: img("dessert-eclair"), price: 450 },
      { id: "dessert-cookie", name: "Cookie", description: "Taze cookie.", image: img("dessert-cookie"), price: 430 },
    ],
  },
];

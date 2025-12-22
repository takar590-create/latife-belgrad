// src/data/menu.ts

export type Price =
  | number
  | { single: number; double?: number }
  | { size: string; price: number };

export type MenuCategoryKey = "breakfast" | "hot" | "cold" | "desserts";

/**
 * Ürün isim/açıklama alanı:
 * - string => tek dil
 * - object => çok dilli (TR/SR/EN)
 */
export type LocalizedText =
  | string
  | {
      tr?: string;
      en?: string;
      sr?: string;
    };

/**
 * Menü metinlerini lang'e göre döndürür.
 * - obje ise lang öncelikli
 * - yoksa fallback sırası: en -> tr -> sr -> ilk bulunan -> ""
 * - string ise direkt döndürür
 */
export function getText(
  lang: "tr" | "en" | "sr",
  value: LocalizedText | undefined
): string {
  if (!value) return "";
  if (typeof value === "string") return value;

  return (
    value[lang] ??
    value.en ??
    value.tr ??
    value.sr ??
    Object.values(value).find(Boolean) ??
    ""
  );
}

export type MenuItem = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  price: Price;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  key: MenuCategoryKey;
  items: MenuItem[];
};

const img = (id: string) => `/images/items/${id}.jpg`;

// ✅ hızlı güncelleme için helper
const L = (tr: string, en: string, sr: string): LocalizedText => ({ tr, en, sr });

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
        name: L("Kahvaltı tabağı", "Breakfast plate", "Doručak tanjir"),
        description: L(
          "Güne iyi bir başlangıç için zengin kahvaltı tabağı.",
          "A rich breakfast plate for a great start to the day.",
          "Bogat doručak tanjir za odličan početak dana."
        ),
        image: img("breakfast-plate"),
        price: 650,
        tags: ["breakfast"],
      },
      {
        id: "croissant",
        name: L("Kruvasan", "Croissant", "Kroasan"),
        description: L(
          "Tereyağlı klasik kruvasan.",
          "Classic buttery croissant.",
          "Klasičan kroasan sa puterom."
        ),
        image: img("croissant"),
        price: 250,
      },
      {
        id: "choco-croissant",
        name: L("Çikolatalı kruvasan", "Chocolate croissant", "Čokoladni kroasan"),
        description: L(
          "Çikolata dolgulu kruvasan.",
          "Croissant filled with chocolate.",
          "Kroasan punjen čokoladom."
        ),
        image: img("choco-croissant"),
        price: 330,
      },
      {
        id: "ham-cheese-croissant",
        name: L("Jambon & peynirli kruvasan", "Ham and cheese croissant", "Kroasan sa šunkom i sirom"),
        description: L(
          "Jambon & peynirli kruvasan.",
          "Croissant with ham and cheese.",
          "Kroasan sa šunkom i sirom."
        ),
        image: img("ham-cheese-croissant"),
        price: 380,
      },
      {
        id: "combo-croissant",
        name: L("Kruvasan combo", "Combo croissant", "Kroasan combo"),
        description: L(
          "Kruvasan eşliğinde pratik bir kombin.",
          "A practical combo served with a croissant.",
          "Praktičan combo uz kroasan."
        ),
        image: img("combo-croissant"),
        price: 550,
        tags: ["combo"],
      },
      {
        id: "tuna-sandwich",
        name: L("Ton balıklı sandviç", "Tuna sandwich", "Sendvič sa tunjevinom"),
        description: L(
          "Ton balıklı sandviç.",
          "Tuna sandwich.",
          "Sendvič sa tunjevinom."
        ),
        image: img("tuna-sandwich"),
        price: 600,
      },
      {
        id: "mozarella-sandwich",
        name: L("Mozzarellalı sandviç", "Mozzarella sandwich", "Sendvič sa mocarelom"),
        description: L(
          "Mozzarella peynirli sandviç.",
          "Sandwich with mozzarella cheese.",
          "Sendvič sa mocarelom."
        ),
        image: img("mozarella-sandwich"),
        price: 600,
      },
      {
        id: "combo-sandwich",
        name: L("Sandviç combo", "Combo sandwich", "Sendvič combo"),
        description: L(
          "Sandviç + içecek kombin.",
          "Sandwich + drink combo.",
          "Sendvič + piće combo."
        ),
        image: img("combo-sandwich"),
        price: 700,
        tags: ["combo"],
      },
      {
        id: "avocado-toast",
        name: L("Avokadolu tost", "Avocado mash toast", "Tost sa avokadom"),
        description: L(
          "Avokado ezmesi ile tost.",
          "Toast with avocado mash.",
          "Tost sa avokado namazom."
        ),
        image: img("avocado-toast"),
        price: 600,
      },
      {
        id: "snack-fries",
        name: L("Patates kızartması", "French fries", "Pomfrit"),
        description: L("Kıtır patates kızartması.", "Crispy french fries.", "Hrskavi pomfrit."),
        image: img("snack-fries"),
        price: 450,
        tags: ["snack"],
      },
      {
        id: "snack-chips",
        name: L("Cips", "Chips", "Čips"),
        description: L("Cips.", "Chips.", "Čips."),
        image: img("snack-chips"),
        price: 270,
        tags: ["snack"],
      },
      {
        id: "snack-popcorn",
        name: L("Patlamış mısır", "Popcorn", "Kokice"),
        description: L("Patlamış mısır.", "Popcorn.", "Kokice."),
        image: img("snack-popcorn"),
        price: 270,
        tags: ["snack"],
      },
      {
        id: "snack-peanuts",
        name: L("Yer fıstığı", "Peanuts", "Kikiriki"),
        description: L("Fıstık.", "Peanuts.", "Kikiriki."),
        image: img("snack-peanuts"),
        price: 300,
        tags: ["snack"],
      },
      {
        id: "cigkofte-wrap",
        name: L("Çiğ köfte dürüm", "Cig kofte wrap", "Či kofte rolnica"),
        description: L(
          "Dürüm şeklinde çiğ köfte.",
          "Cig kofte served as a wrap.",
          "Či kofte u rolnici."
        ),
        image: img("cigkofte-wrap"),
        price: 700,
      },
      {
        id: "cigkofte-portion",
        name: L("Çiğ köfte porsiyon", "Cig kofte portion", "Či kofte porcija"),
        description: L(
          "Porsiyon çiğ köfte.",
          "Cig kofte served as a portion.",
          "Či kofte porcija."
        ),
        image: img("cigkofte-portion"),
        price: 1000,
      },
      {
        id: "combo-tea-sandwich",
        name: L("Türk çayı + sandviç", "Turkish tea + sandwich", "Turski čaj + sendvič"),
        description: L(
          "Türk çayı ile sandviç kombin.",
          "Turkish tea with a sandwich combo.",
          "Combo: turski čaj i sendvič."
        ),
        image: img("combo-tea-sandwich"),
        price: 800,
        tags: ["combo"],
      },
    ],
  },

  // =========================
  // HOT
  // =========================
  {
    id: "hot",
    key: "hot",
    items: [
      {
        id: "combo-cheesecake",
        name: L("Kahve + cheesecake", "Coffee + cheesecake", "Kafa + čizkejk"),
        description: L(
          "Kahve yanında cheesecake ile kombin.",
          "Combo: coffee with cheesecake.",
          "Combo: kafa uz čizkejk."
        ),
        image: img("combo-cheesecake"),
        price: 850,
        tags: ["combo"],
      },
      {
        id: "combo-sanseb",
        name: L("Kahve + San Sebastian", "Coffee + San Sebastian", "Kafa + San Sebastijan"),
        description: L(
          "Kahve yanında San Sebastian ile kombin.",
          "Combo: coffee with San Sebastian cheesecake.",
          "Combo: kafa uz San Sebastijan."
        ),
        image: img("combo-sanseb"),
        price: 900,
        tags: ["combo"],
      },
      {
        id: "combo-carrot",
        name: L("Kahve + havuçlu kek", "Coffee + carrot cake", "Kafa + šargarepa torta"),
        description: L(
          "Kahve yanında havuçlu kek ile kombin.",
          "Combo: coffee with carrot cake.",
          "Combo: kafa uz tortu od šargarepe."
        ),
        image: img("combo-carrot"),
        price: 800,
        tags: ["combo"],
      },
      {
        id: "combo-tiramisu",
        name: L("Kahve + tiramisu", "Coffee + tiramisu", "Kafa + tiramisu"),
        description: L(
          "Kahve yanında tiramisu ile kombin.",
          "Combo: coffee with tiramisu.",
          "Combo: kafa uz tiramisu."
        ),
        image: img("combo-tiramisu"),
        price: 900,
        tags: ["combo"],
      },
      {
        id: "combo-cookie",
        name: L("Kahve + cookie", "Coffee + cookie", "Kafa + keks"),
        description: L(
          "Kahve yanında cookie ile kombin.",
          "Combo: coffee with a cookie.",
          "Combo: kafa uz keks."
        ),
        image: img("combo-cookie"),
        price: 750,
        tags: ["combo"],
      },
      {
        id: "combo-eclair",
        name: L("Kahve + ekler", "Coffee + eclair", "Kafa + ekler"),
        description: L(
          "Kahve yanında eclair ile kombin.",
          "Combo: coffee with an eclair.",
          "Combo: kafa uz ekler."
        ),
        image: img("combo-eclair"),
        price: 750,
        tags: ["combo"],
      },
      {
        id: "combo-mosaic",
        name: L("Kahve + mozaik kek", "Coffee + mosaic cake", "Kafa + mozaik torta"),
        description: L(
          "Kahve yanında mozaik kek ile kombin.",
          "Combo: coffee with mosaic cake.",
          "Combo: kafa uz mozaik tortu."
        ),
        image: img("combo-mosaic"),
        price: 800,
        tags: ["combo"],
      },
      {
        id: "combo-magnolia",
        name: L("Kahve + magnolia", "Coffee + magnolia", "Kafa + magnolija"),
        description: L(
          "Kahve yanında magnolia ile kombin.",
          "Combo: coffee with magnolia dessert.",
          "Combo: kafa uz magnoliju."
        ),
        image: img("combo-magnolia"),
        price: 800,
        tags: ["combo"],
      },

      {
        id: "turkish-coffee",
        name: L("Türk kahvesi", "Turkish coffee", "Turska kafa"),
        description: L("Geleneksel Türk kahvesi.", "Traditional Turkish coffee.", "Tradicionalna turska kafa."),
        image: img("turkish-coffee"),
        price: { single: 320, double: 440 },
      },
      {
        id: "cavalry-turkish",
        name: L("Özel Türk kahvesi", "Cavalry Turkish coffee", "Specijalna turska kafa"),
        description: L("Özel Türk kahvesi sunumu.", "Special Turkish coffee presentation.", "Specijalno servirana turska kafa."),
        image: img("cavalry-turkish"),
        price: 330,
      },
      {
        id: "espresso",
        name: L("Espresso", "Espresso", "Espreso"),
        description: L("Klasik espresso shot.", "Classic espresso shot.", "Klasičan espreso."),
        image: img("espresso"),
        price: { single: 270, double: 350 },
      },
      {
        id: "espresso-macchiato",
        name: L("Espresso macchiato", "Espresso macchiato", "Espreso makijato"),
        description: L(
          "Bir dokunuş süt köpüğü ile espresso.",
          "Espresso with a touch of milk foam.",
          "Espreso sa malo mlečne pene."
        ),
        image: img("espresso-macchiato"),
        price: { single: 310, double: 420 },
      },
      {
        id: "espresso-con-panna",
        name: L("Espresso con panna", "Espresso con panna", "Espreso sa šlagom"),
        description: L("Kremalı espresso.", "Espresso with cream.", "Espreso sa kremom."),
        image: img("espresso-con-panna"),
        price: 330,
      },
      {
        id: "espresso-cubana",
        name: L("Espresso cubana", "Espresso cubana", "Kubana espreso"),
        description: L("Aromalı espresso çeşidi.", "Flavored espresso style.", "Aromatizovani espreso."),
        image: img("espresso-cubana"),
        price: 310,
      },
      {
        id: "americano",
        name: L("Americano", "Americano", "Amerikano"),
        description: L(
          "Espresso + sıcak su ile hafif içim.",
          "Espresso with hot water, light and smooth.",
          "Espreso sa vrućom vodom, lagan ukus."
        ),
        image: img("americano"),
        price: 330,
      },
      {
        id: "mocha-cocostar",
        name: L("Mocha Cocostar", "Mocha Cocostar", "Moča Kokostar"),
        description: L("Çikolata & kahve uyumu.", "Chocolate & coffee harmony.", "Spoj čokolade i kafe."),
        image: img("mocha-cocostar"),
        price: 460,
      },
      {
        id: "cappucino",
        name: L("Cappuccino", "Cappuccino", "Kapučino"),
        description: L("Süt köpüğü ile dengeli kahve.", "Balanced coffee with milk foam.", "Balansirana kafa sa penom."),
        image: img("cappucino"),
        price: 350,
      },
      {
        id: "swiss-orange-mocha",
        name: L("Swiss Orange Mocha", "Swiss Orange Mocha", "Švajcarska pomorandža mocha"),
        description: L("Portakal dokunuşlu mocha.", "Mocha with an orange twist.", "Moča sa notom pomorandže."),
        image: img("swiss-orange-mocha"),
        price: 460,
      },
      {
        id: "flat-white",
        name: L("Flat white", "Flat white", "Flat white"),
        description: L("Yoğun espresso, ipeksi süt.", "Strong espresso with silky milk.", "Jak espreso sa svilenkastim mlekom."),
        image: img("flat-white"),
        price: 400,
      },
      {
        id: "cookies-latte",
        name: L("Cookies latte", "Cookies latte", "Latte sa keksom"),
        description: L("Cookie aromalı latte.", "Latte with cookie flavor.", "Latte sa ukusom keksa."),
        image: img("cookies-latte"),
        price: 430,
      },
      {
        id: "cortado",
        name: L("Cortado", "Cortado", "Kortado"),
        description: L("Dengeli sütlü espresso.", "Balanced espresso with milk.", "Balansiran espreso sa mlekom."),
        image: img("cortado"),
        price: 320,
      },
      {
        id: "caramel-macchiato",
        name: L("Karamel macchiato", "Caramel macchiato", "Karamel makijato"),
        description: L("Karamel aromalı macchiato.", "Caramel-flavored macchiato.", "Makijato sa karamelom."),
        image: img("caramel-macchiato"),
        price: 390,
      },
      {
        id: "latte-macchiato",
        name: L("Latte macchiato", "Latte macchiato", "Latte makijato"),
        description: L("Katmanlı sütlü kahve.", "Layered milky coffee.", "Slojevita kafa sa mlekom."),
        image: img("latte-macchiato"),
        price: 400,
      },
      {
        id: "latte",
        name: L("Latte", "Latte", "Latte"),
        description: L("Yumuşak içimli sütlü kahve.", "Smooth milky coffee.", "Blaga kafa sa mlekom."),
        image: img("latte"),
        price: 350,
      },
      {
        id: "mocha",
        name: L("Mocha", "Mocha", "Moča"),
        description: L("Çikolata & espresso karışımı.", "Chocolate and espresso blend.", "Mešavina čokolade i espresa."),
        image: img("mocha"),
        price: 400,
      },

      {
        id: "turkish-tea",
        name: L("Türk çayı", "Turkish tea", "Turski čaj"),
        description: L("Klasik Türk çayı.", "Classic Turkish tea.", "Klasičan turski čaj."),
        image: img("turkish-tea"),
        price: { single: 250, double: 380 },
      },

      { id: "rose-bouquet", name: L("Gül buketi çayı", "Rose bouquet tea", "Čaj ruže"), description: L("Gül aromalı bitki çayı.", "Herbal tea with rose flavor.", "Biljni čaj sa ukusom ruže."), image: img("rose-bouquet"), price: 420 },
      { id: "orange-tea", name: L("Portakal çayı", "Orange tea", "Čaj od pomorandže"), description: L("Portakal aromalı çay.", "Tea with orange flavor.", "Čaj sa ukusom pomorandže."), image: img("orange-tea"), price: 420 },
      { id: "earl-grey", name: L("Earl Grey çayı", "Earl Grey tea", "Erl Grej čaj"), description: L("Bergamot aromalı klasik çay.", "Classic bergamot-flavored tea.", "Klasičan čaj sa bergamotom."), image: img("earl-grey"), price: 420 },
      { id: "lemon-ginger", name: L("Limon zencefil çayı", "Lemon ginger tea", "Čaj limun-đumbir"), description: L("Limon & zencefil çayı.", "Lemon & ginger tea.", "Čaj sa limunom i đumbirom."), image: img("lemon-ginger"), price: 420 },
      { id: "rooibos", name: L("Rooibos çayı", "Rooibos tea", "Rooibos čaj"), description: L("Rooibos bitki çayı.", "Rooibos herbal tea.", "Rooibos biljni čaj."), image: img("rooibos"), price: 420 },
      { id: "green-tea", name: L("Yeşil çay", "Green tea", "Zeleni čaj"), description: L("Yeşil çay.", "Green tea.", "Zeleni čaj."), image: img("green-tea"), price: 420 },
      { id: "sage-tea", name: L("Adaçayı", "Sage tea", "Žalfija čaj"), description: L("Adaçayı.", "Sage tea.", "Čaj od žalfije."), image: img("sage-tea"), price: 420 },
      { id: "winter-tea", name: L("Kış çayı", "Winter tea", "Zimski čaj"), description: L("Kış çayı karışımı.", "Winter tea blend.", "Mešavina zimskog čaja."), image: img("winter-tea"), price: 420 },
      { id: "echinacea", name: L("Ekinezya çayı", "Echinacea tea", "Ehinacea čaj"), description: L("Ekinezya çayı.", "Echinacea tea.", "Ehinacea čaj."), image: img("echinacea"), price: 420 },
      { id: "chamomile", name: L("Papatya çayı", "Chamomile tea", "Kamilica čaj"), description: L("Papatya çayı.", "Chamomile tea.", "Čaj od kamilice."), image: img("chamomile"), price: 420 },
      { id: "fennel", name: L("Rezene çayı", "Fennel tea", "Mirođija/Komorač čaj"), description: L("Rezene çayı.", "Fennel tea.", "Čaj od komorača."), image: img("fennel"), price: 420 },
      { id: "lemon-balm", name: L("Melisa çayı", "Lemon balm tea", "Matičnjak čaj"), description: L("Oğul otu (melisa) çayı.", "Lemon balm herbal tea.", "Čaj od matičnjaka."), image: img("lemon-balm"), price: 420 },
    ],
  },

  // =========================
  // COLD
  // =========================
  {
    id: "cold",
    key: "cold",
    items: [
      { id: "iced-espresso", name: L("Buzlu espresso", "Iced espresso", "Ledeni espreso"), description: L("Buz üzerinde espresso.", "Espresso over ice.", "Espreso preko leda."), image: img("iced-espresso"), price: 290 },
      { id: "iced-americano", name: L("Buzlu americano", "Iced americano", "Ledeni amerikano"), description: L("Buzlu americano.", "Iced americano.", "Ledeni amerikano."), image: img("iced-americano"), price: 370 },
      { id: "iced-latte", name: L("Buzlu latte", "Iced latte", "Ledeni latte"), description: L("Buzlu latte.", "Iced latte.", "Ledeni latte."), image: img("iced-latte"), price: 370 },
      { id: "iced-mocha", name: L("Buzlu mocha", "Iced mocha", "Ledena moča"), description: L("Buzlu mocha.", "Iced mocha.", "Ledena moča."), image: img("iced-mocha"), price: 390 },
      { id: "frappucino", name: L("Frappuccino", "Frappuccino", "Frappuccino"), description: L("Buzlu, yoğun kıvamlı kahve.", "Iced, rich blended coffee.", "Ledena, kremasta blend kafa."), image: img("frappucino"), price: 420 },
      { id: "frappe", name: L("Frappe", "Frappe", "Frape"), description: L("Klasik frappe.", "Classic frappe.", "Klasičan frape."), image: img("frappe"), price: 420 },
      { id: "oreo-frappe", name: L("Oreo frappe", "Oreo frappe", "Oreo frape"), description: L("Oreo dokunuşlu frappe.", "Frappe with Oreo twist.", "Frape sa Oreo notom."), image: img("oreo-frappe"), price: 420 },

      { id: "frozen-green-apple", name: L("Frozen yeşil elma", "Frozen green apple", "Frozen zelena jabuka"), description: L("Frozen yeşil elma.", "Frozen green apple.", "Frozen zelena jabuka."), image: img("frozen-green-apple"), price: 470, tags: ["frozen"] },
      { id: "frozen-mint-lemon", name: L("Frozen nane-limon", "Frozen mint-lemon", "Frozen menta-limun"), description: L("Nane & limon frozen.", "Mint & lemon frozen.", "Frozen menta i limun."), image: img("frozen-mint-lemon"), price: 470, tags: ["frozen"] },
      { id: "frozen-kiwi-green-apple", name: L("Frozen kivi-yeşil elma", "Frozen kiwi-green apple", "Frozen kivi-zelena jabuka"), description: L("Kivi & yeşil elma frozen.", "Kiwi & green apple frozen.", "Frozen kivi i zelena jabuka."), image: img("frozen-kiwi-green-apple"), price: 470, tags: ["frozen"] },
      { id: "frozen-strawberry-lemon", name: L("Frozen çilek-limon", "Frozen strawberry-lemon", "Frozen jagoda-limun"), description: L("Çilek & limon frozen.", "Strawberry & lemon frozen.", "Frozen jagoda i limun."), image: img("frozen-strawberry-lemon"), price: 470, tags: ["frozen"] },
      { id: "frozen-watermelon-strawberry", name: L("Frozen karpuz-çilek", "Frozen watermelon-strawberry", "Frozen lubenica-jagoda"), description: L("Karpuz & çilek frozen.", "Watermelon & strawberry frozen.", "Frozen lubenica i jagoda."), image: img("frozen-watermelon-strawberry"), price: 470, tags: ["frozen"] },
      { id: "frozen-passion-fruit", name: L("Frozen çarkıfelek", "Frozen passion fruit", "Frozen marakuja"), description: L("Çarkıfelek frozen.", "Passion fruit frozen.", "Frozen marakuja."), image: img("frozen-passion-fruit"), price: 470, tags: ["frozen"] },
      { id: "frozen-strawberry", name: L("Frozen çilek", "Frozen strawberry", "Frozen jagoda"), description: L("Çilek frozen.", "Strawberry frozen.", "Frozen jagoda."), image: img("frozen-strawberry"), price: 470, tags: ["frozen"] },
      { id: "frozen-forest-fruits", name: L("Frozen orman meyveleri", "Frozen forest fruits", "Frozen šumsko voće"), description: L("Orman meyveleri frozen.", "Forest fruits frozen.", "Frozen šumsko voće."), image: img("frozen-forest-fruits"), price: 470, tags: ["frozen"] },
      { id: "frozen-tropical-mix", name: L("Frozen tropik mix", "Frozen tropical mix", "Frozen tropski miks"), description: L("Tropik mix frozen.", "Tropical mix frozen.", "Frozen tropski miks."), image: img("frozen-tropical-mix"), price: 470, tags: ["frozen"] },
      { id: "frozen-peach-mango", name: L("Frozen şeftali-mango", "Frozen peach-mango", "Frozen breskva-mango"), description: L("Şeftali & mango frozen.", "Peach & mango frozen.", "Frozen breskva i mango."), image: img("frozen-peach-mango"), price: 470, tags: ["frozen"] },
      { id: "frozen-watermelon", name: L("Frozen karpuz", "Frozen watermelon", "Frozen lubenica"), description: L("Karpuz frozen.", "Watermelon frozen.", "Frozen lubenica."), image: img("frozen-watermelon"), price: 470, tags: ["frozen"] },

      { id: "water", name: L("Su", "Water", "Voda"), description: L("Su.", "Water.", "Voda."), image: img("water"), price: 200, tags: ["soft"] },
      { id: "coca-cola", name: L("Coca Cola", "Coca Cola", "Coca Cola"), description: L("Coca Cola.", "Coca Cola.", "Coca Cola."), image: img("coca-cola"), price: 270, tags: ["soft"] },
      { id: "churchill", name: L("Churchill", "Churchill", "Churchill"), description: L("Churchill.", "Churchill.", "Churchill."), image: img("churchill"), price: 330, tags: ["soft"] },
      { id: "soda", name: L("Soda", "Soda", "Soda"), description: L("Soda.", "Soda.", "Soda."), image: img("soda"), price: 250, tags: ["soft"] },
      { id: "schweppes", name: L("Schweppes", "Schweppes", "Schweppes"), description: L("Schweppes.", "Schweppes.", "Schweppes."), image: img("schweppes"), price: 270, tags: ["soft"] },
      { id: "schweppes-tonic", name: L("Schweppes Tonic", "Schweppes Tonic", "Schweppes Tonic"), description: L("Schweppes Tonic.", "Schweppes Tonic.", "Schweppes Tonic."), image: img("schweppes-tonic"), price: 300, tags: ["soft"] },
      { id: "sprite", name: L("Sprite", "Sprite", "Sprite"), description: L("Sprite.", "Sprite.", "Sprite."), image: img("sprite"), price: 270, tags: ["soft"] },
      { id: "next-apple", name: L("Next elma", "Next apple", "Next jabuka"), description: L("Elma suyu.", "Apple juice.", "Sok od jabuke."), image: img("next-apple"), price: 250, tags: ["soft"] },
      { id: "orange-juice", name: L("Portakal suyu", "Orange juice", "Sok od pomorandže"), description: L("Portakal suyu.", "Orange juice.", "Sok od pomorandže."), image: img("orange-juice"), price: 400, tags: ["soft"] },

      { id: "lemonade", name: L("Limonata", "Lemonade", "Limunada"), description: L("Ev yapımı limonata.", "Homemade lemonade.", "Domaća limunada."), image: img("lemonade"), price: 380, tags: ["lemonade"] },
      { id: "lemonade-green-apple", name: L("Yeşil elmalı limonata", "Lemonade – green apple", "Limunada – zelena jabuka"), description: L("Yeşil elmalı limonata.", "Green apple lemonade.", "Limunada sa zelenom jabukom."), image: img("lemonade-green-apple"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-strawberry", name: L("Çilekli limonata", "Lemonade – strawberry", "Limunada – jagoda"), description: L("Çilekli limonata.", "Strawberry lemonade.", "Limunada sa jagodom."), image: img("lemonade-strawberry"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-ginger", name: L("Zencefilli limonata", "Lemonade – ginger", "Limunada – đumbir"), description: L("Zencefilli limonata.", "Ginger lemonade.", "Limunada sa đumbirom."), image: img("lemonade-ginger"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-mint", name: L("Naneli limonata", "Lemonade – mint", "Limunada – menta"), description: L("Naneli limonata.", "Mint lemonade.", "Limunada sa mentom."), image: img("lemonade-mint"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-elder", name: L("Mürver çiçekli limonata", "Lemonade – elder flower", "Limunada – zova"), description: L("Mürver çiçeği aromalı limonata.", "Elderflower lemonade.", "Limunada sa ukusom zove."), image: img("lemonade-elder"), price: 400, tags: ["lemonade"] },
      { id: "lemonade-watermelon", name: L("Karpuzlu limonata", "Lemonade – watermelon", "Limunada – lubenica"), description: L("Karpuzlu limonata.", "Watermelon lemonade.", "Limunada sa lubenicom."), image: img("lemonade-watermelon"), price: 400, tags: ["lemonade"] },

      { id: "beer-heineken", name: L("Heineken (0.25)", "Heineken (0.25)", "Heineken (0.25)"), description: L("Bira.", "Beer.", "Pivo."), image: img("beer-heineken"), price: 380, tags: ["alcohol"] },
      { id: "beer-zajecarsko", name: L("Zaječarsko (0.33)", "Zajecarsko (0.33)", "Zaječarsko (0.33)"), description: L("Bira.", "Beer.", "Pivo."), image: img("beer-zajecarsko"), price: 380, tags: ["alcohol"] },
      { id: "beer-moretti", name: L("Birra Moretti (0.33)", "Birra Moretti (0.33)", "Birra Moretti (0.33)"), description: L("Bira.", "Beer.", "Pivo."), image: img("beer-moretti"), price: 380, tags: ["alcohol"] },

      { id: "wine-rose", name: L("Plazente rosé (0.18)", "Plazente rosé (0.18)", "Plazente rosé (0.18)"), description: L("Rosé şarap.", "Rosé wine.", "Roze vino."), image: img("wine-rose"), price: 450, tags: ["alcohol"] },
      { id: "wine-chardonnay", name: L("Plazente chardonnay (0.18)", "Plazente chardonnay (0.18)", "Plazente chardonnay (0.18)"), description: L("Chardonnay şarap.", "Chardonnay wine.", "Šardone vino."), image: img("wine-chardonnay"), price: 450, tags: ["alcohol"] },
      { id: "wine-vranac", name: L("Plazente vranac (0.18)", "Plazente vranac (0.18)", "Plazente vranac (0.18)"), description: L("Vranac şarap.", "Vranac wine.", "Vranac vino."), image: img("wine-vranac"), price: 450, tags: ["alcohol"] },

      { id: "rakija-pear", name: L("Rakija – armut (0.03)", "Rakija – pear (0.03)", "Rakija – kruška (0.03)"), description: L("Armut rakija.", "Pear rakija.", "Rakija od kruške."), image: img("rakija-pear"), price: 400, tags: ["alcohol"] },
      { id: "rakija-peach", name: L("Rakija – şeftali (0.03)", "Rakija – peach (0.03)", "Rakija – breskva (0.03)"), description: L("Şeftali rakija.", "Peach rakija.", "Rakija od breskve."), image: img("rakija-peach"), price: 400, tags: ["alcohol"] },
      { id: "rakija-sliva", name: L("Rakija – šljiva (0.03)", "Rakija – sliva brandy (0.03)", "Rakija – šljiva (0.03)"), description: L("Sliva rakija.", "Plum rakija.", "Šljivovica."), image: img("rakija-sliva"), price: 400, tags: ["alcohol"] },

      { id: "shot-jameson", name: L("Jameson (0.03)", "Jameson (0.03)", "Jameson (0.03)"), description: L("Jameson shot.", "Jameson shot.", "Jameson shot."), image: img("shot-jameson"), price: 700, tags: ["alcohol"] },
      { id: "shot-gin", name: L("Gin (0.03)", "Gin (0.03)", "Džin (0.03)"), description: L("Gin shot.", "Gin shot.", "Džin shot."), image: img("shot-gin"), price: 400, tags: ["alcohol"] },
      { id: "shot-tekila", name: L("Tekila (0.03)", "Tequila (0.03)", "Tekila (0.03)"), description: L("Tekila shot.", "Tequila shot.", "Tekila shot."), image: img("shot-tekila"), price: 300, tags: ["alcohol"] },
      { id: "shot-jager", name: L("Jägermeister (0.03)", "Jägermeister (0.03)", "Jägermeister (0.03)"), description: L("Jägermeister shot.", "Jägermeister shot.", "Jägermeister shot."), image: img("shot-jager"), price: 350, tags: ["alcohol"] },

      { id: "cocktail-sex", name: L("Sex on the beach", "Sex on the beach", "Sex on the beach"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-sex"), price: 500, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-cuba", name: L("Cuba libre", "Cuba libre", "Cuba libre"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-cuba"), price: 509, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-longisland", name: L("Long island ice tea", "Long island iced tea", "Long island iced tea"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-longisland"), price: 600, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-cosmo", name: L("Cosmopolitan", "Cosmopolitan", "Cosmopolitan"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-cosmo"), price: 500, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-maitai", name: L("Mai tai", "Mai tai", "Mai tai"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-maitai"), price: 400, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-white-russian", name: L("White russian", "White russian", "White russian"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-white-russian"), price: 500, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-black-russian", name: L("Black russian", "Black russian", "Black russian"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-black-russian"), price: 500, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-mojito", name: L("Mojito", "Mojito", "Mojito"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-mojito"), price: 450, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-gintonic", name: L("Gin tonic", "Gin tonic", "Džin tonik"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-gintonic"), price: 450, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-devils", name: L("Devils ice tea", "Devils iced tea", "Devils iced tea"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-devils"), price: 600, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-oldfashion", name: L("Old fashion", "Old fashioned", "Old fashioned"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-oldfashion"), price: 450, tags: ["alcohol", "cocktail"] },
      { id: "cocktail-martini", name: L("Martini", "Martini", "Martini"), description: L("Kokteyl.", "Cocktail.", "Koktel."), image: img("cocktail-martini"), price: 500, tags: ["alcohol", "cocktail"] },

      { id: "combo-beer-fries", name: L("Bira + patates", "Beer + french fries", "Pivo + pomfrit"), description: L("Bira + patates kombin.", "Combo: beer and fries.", "Combo: pivo i pomfrit."), image: img("combo-beer-fries"), price: 850, tags: ["combo", "alcohol"] },
    ],
  },

  // =========================
  // DESSERTS
  // =========================
  {
    id: "desserts",
    key: "desserts",
    items: [
      { id: "dessert-san-sebastian", name: L("San Sebastian", "San Sebastian", "San Sebastijan"), description: L("Kremamsı, yoğun tatlı lezzet.", "Creamy, rich dessert.", "Kremasti, bogat desert."), image: img("dessert-san-sebastian"), price: 600 },
      { id: "dessert-cheesecake", name: L("Cheesecake", "Cheesecake", "Čizkejk"), description: L("Klasik cheesecake.", "Classic cheesecake.", "Klasičan čizkejk."), image: img("dessert-cheesecake"), price: 550 },
      { id: "dessert-carrot", name: L("Havuçlu kek", "Carrot cake", "Torta od šargarepe"), description: L("Havuçlu kek.", "Carrot cake.", "Torta od šargarepe."), image: img("dessert-carrot"), price: 500 },
      { id: "dessert-muffin", name: L("Muffin", "Muffin", "Mafin"), description: L("Günlük taze muffin.", "Fresh daily muffin.", "Svakodnevno svež mafin."), image: img("dessert-muffin"), price: 430 },
      { id: "dessert-magnolia", name: L("Magnolia", "Magnolia", "Magnolija"), description: L("Magnolia tatlısı.", "Magnolia dessert.", "Magnolija desert."), image: img("dessert-magnolia"), price: 550 },
      { id: "dessert-mosaic", name: L("Mozaik kek", "Mosaic cake", "Mozaik torta"), description: L("Mozaik kek.", "Mosaic cake.", "Mozaik torta."), image: img("dessert-mosaic"), price: 500 },
      { id: "dessert-tiramisu", name: L("Tiramisu", "Tiramisu", "Tiramisu"), description: L("Kahve aromalı tiramisu.", "Coffee-flavored tiramisu.", "Tiramisu sa aromom kafe."), image: img("dessert-tiramisu"), price: 550 },
      { id: "dessert-rice-pudding", name: L("Sütlaç", "Rice pudding", "Sutlijaš"), description: L("Sütlaç.", "Rice pudding.", "Sutlijaš."), image: img("dessert-rice-pudding"), price: 450 },
      { id: "dessert-eclair", name: L("Ekler", "Eclair", "Ekler"), description: L("Ekler.", "Eclair.", "Ekler."), image: img("dessert-eclair"), price: 450 },
      { id: "dessert-cookie", name: L("Cookie", "Cookie", "Keks"), description: L("Taze cookie.", "Fresh cookie.", "Svež keks."), image: img("dessert-cookie"), price: 430 },
    ],
  },
];

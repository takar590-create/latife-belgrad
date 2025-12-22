export const site = {
  name: "Latife Belgrade",
  shortName: "Latife",
  address: "Zmaj Jovina 7, lokal 1, 11000, Beograd",

  // tel: için local formatı kullanıyoruz
  phoneLocal: "0611435845",

  // WhatsApp için E.164 formatı (BAŞINDA + YOK)
  // 061 143 5845 -> +381 61 143 5845 -> 381611435845
  whatsappE164: "381611435845" as string | null,

  instagram: "https://www.instagram.com/latifebelgrade?igsh=MWVjdHg1Y3p2cnpjcA==",
  tiktok: "https://www.tiktok.com/@latifebelgrade?_r=1&_t=ZS-92KMJ6PsG3k",

  mapsUrl:
    "https://www.google.com/maps/place/latife+belgrad/data=!4m2!3m1!1s0x475a7b49b62bfc4f:0x8cc2c0ae0f219cea?sa=X&ved=1t:242&ictx=111",

  // Embed uses address query to avoid needing a special pb code
  mapsEmbedUrl:
    "https://www.google.com/maps?q=LATIFE%20BELGRAD%20Zmaj%20Jovina%207%20Beograd&output=embed",

  hours: {
    mon: "08:30–22:30",
    tue: "08:30–22:30",
    wed: "08:30–22:30",
    thu: "08:30–22:30",
    fri: "08:30–22:30",
    sat: "08:30–22:30",
    sun: "08:30–22:30",
  },
};

export function phoneHref(local: string) {
  // Serbian local numbers typically start with 0. We'll keep tel: with local form.
  return `tel:${local}`;
}

export function whatsappHref(e164: string, text?: string) {
  const encoded = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${String(e164).replace(/[^\d]/g, "")}${encoded}`;
}

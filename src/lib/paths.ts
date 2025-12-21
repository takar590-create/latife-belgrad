import type { Lang } from "@/i18n";

export function withLang(lang: Lang, path: string) {
  const p = (path || "").trim();
  const clean = p.startsWith("/") ? p : `/${p}`;

  // çift slash vs. normalize
  const normalized = clean.replace(/\/{2,}/g, "/");

  // "/" ise sadece "/tr" gibi dön
  return `/${lang}${normalized === "/" ? "" : normalized}`;
}

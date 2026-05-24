// The one place that defines which languages the site supports.
// To add a language later (e.g. Japanese), add its code here and add the
// matching keys throughout the data/UI files. Nothing else structural changes.

export const languages = ['en', 'zh'] as const;

export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'en';

// How each language labels itself in the toggle (endonyms).
export const langNames: Record<Lang, string> = {
  en: 'English',
  zh: '繁體中文',
  // ja: '日本語',   // ← uncomment when adding Japanese
};

// URL prefix for each language. The default language lives at the root
// (no prefix); others live under /<code>/.
//   en → ''            →  /research/
//   zh → 'zh'          →  /zh/research/
export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : lang;
}
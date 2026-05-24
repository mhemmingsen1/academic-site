import { type Lang, defaultLang } from './config';

// A translatable field: English required, other languages optional.
// e.g. { en: 'Ethics', zh: '倫理學' }
// During build-out, zh may be missing or empty — t() falls back to en.
export type Translatable = {
  en: string;
  zh?: string;
  ja?: string;
};

// Read a translatable field in the requested language, falling back to
// English if that language is empty or absent. This fallback is what lets
// you populate translations incrementally without anything breaking.
export function t(field: Translatable | string | undefined, lang: Lang): string {
  if (field == null) return '';
  if (typeof field === 'string') return field;        // plain English-only string
  const value = field[lang];
  if (value && value.trim() !== '') return value;
  return field.en ?? '';
}

// For optional translatable fields that may be entirely absent (e.g. a note
// that not every entry has). Returns '' if the field doesn't exist at all.
export function tOpt(field: Translatable | string | undefined, lang: Lang): string {
  if (field == null) return '';
  return t(field, lang);
}
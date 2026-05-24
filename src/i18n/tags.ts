// Keyed tag system. Each tag has a stable key (used for filtering and matching)
// and per-language display labels (shown on filter chips). The key never
// changes; only the labels are language-specific. Add a `ja` to any label
// for Japanese later.
//
// Data files reference tags by KEY (e.g. tags: ['ethics']), not by label.

import type { Translatable } from './t';
import type { Lang } from './config';

export const tagLabels = {
  ethics:        { en: 'Ethics',                            zh: '倫理學' },
  philtech:      { en: 'Philosophy of Technology',          zh: '科技哲學' },
  sportgames:    { en: 'Philosophy of Sport & Games',       zh: '運動與遊戲哲學' },
  religion:      { en: 'Philosophy of Religion',            zh: '宗教哲學' },
  nonwestern:    { en: 'Non-Western & Comparative Philosophy', zh: '非西方哲學與比較哲學' },
  sociopolitical:{ en: 'Social & Political Philosophy',     zh: '社會與政治哲學' },
  environmental: { en: 'Environmental Philosophy',          zh: '環境哲學' },
  freewill:      { en: 'Free Will',                        zh: '自由意志' },
  gened:         { en: 'General Education',                           zh: '通識教育' },
  honors:        { en: 'Honors',                                      zh: '榮譽教育' },
  political:     { en: 'Political Philosophy & International Relations', zh: '政治哲學與國際關係' },
  ai:            { en: 'Artificial Intelligence',                     zh: '人工智慧' },
  media:         { en: 'Media Theory',                                zh: '媒介理論' },
} satisfies Record<string, Translatable>;

export type TagKey = keyof typeof tagLabels;

// Convenience: the label for a tag key in a given language (English fallback).
import { t } from './t';
export function tagLabel(key: TagKey, lang: Lang): string {
  return t(tagLabels[key], lang);
}
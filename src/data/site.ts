// Site-wide configuration. Edit this file rather than chasing strings
// through individual pages.
//
// Translatable fields are written as { en: '...', zh: '...' } objects.
// Leave a `zh` value empty ('') and it falls back to English automatically,
// so the site works fully before any translation is done. Add a `ja` key
// to any of these objects later for Japanese; nothing else changes.
//
// Fields that are NOT translated (emails, URLs, the ORCID id, photo paths,
// the GA id) stay as plain strings.

import type { Translatable } from '../i18n/t';
import type { Lang } from '../i18n/config';

type Edu = {
  degree: Translatable;
  institution: Translatable;
  year?: string;
};

type Involvement = {
  label: Translatable;
  url: string;
};

export const site = {
  // Name: the English form is constant. `nameLocal` holds the local-script
  // rendering per language; on a language whose nameLocal is empty, only the
  // English name shows. English first in the layout, local rendering following.
  name: 'Michael Hemmingsen',
  nameLocal: {
    en: '',                       // English page shows English name only
    zh: '海明森邁克',
    // ja: 'ヘミングセンマイケル',  // ← add with Japanese
  } as Record<Lang, string>,

  role: { en: 'Associate Professor of Philosophy', zh: '哲學副教授' } as Translatable,
  affiliation: {
    en: 'International College & Tunghai Honors Program, Tunghai University',
    zh: '東海大學國際學院暨東海榮譽學程',
  } as Translatable,
  location: { en: 'Taichung, Taiwan', zh: '臺中，臺灣' } as Translatable,

  // One or two short lines shown in the Position section on the home page.
  // Each line is its own translatable object. Empty array = nothing shown.
  positionDescription: [] as Translatable[],

  // Education — listed most-recent first on the home page.
  education: [
    { degree: { en: 'Ph.D., Philosophy', zh: '哲學博士' }, institution: { en: 'McMaster University', zh: '麥馬士達大學' } },
    { degree: { en: 'M.A., Philosophy', zh: '哲學碩士' }, institution: { en: 'Victoria University of Wellington', zh: '威靈頓維多利亞大學' } },
    { degree: { en: 'Master of International Relations', zh: '國際關係碩士' }, institution: { en: 'Victoria University of Wellington', zh: '威靈頓維多利亞大學' } },
  ] as Edu[],

  // Contact / external profiles — not translated.
  email: 'mhemmingsen@thu.edu.tw',
  philpeople: 'https://philpeople.org/profiles/michael-hemmingsen',
  orcid: 'https://orcid.org/0000-0001-9436-139X',

  // Optional extras — leave blank to hide:
  googleScholar: '',
  philpapers: '',

  // Involvements: the label is translatable, the URL is not.
  involvements: [
    { label: { en: 'Tunghai Honors Program', zh: '東海大學榮譽學程' }, url: 'https://honors.thu.edu.tw/' },
    { label: { en: 'ICIC 2026', zh: 'ICIC 2026' }, url: 'https://icic.thu.edu.tw/' },
  ] as Involvement[],

  // Photo — not translated.
  photo: '/images/photo.png',
  photoAlt: 'Portrait of Michael Hemmingsen',

  // Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX). Empty = disabled.
  gaMeasurementId: '',
};
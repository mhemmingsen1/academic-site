// Site-wide configuration. Edit this file rather than chasing strings
// through individual pages.

export const site = {
  name: 'Michael Hemmingsen',
  role: 'Associate Professor',
affiliation: 'International College, Tunghai University',
location: 'Taichung, Taiwan',

// One or two short lines describing what you do, shown in the Position
// section on the home page below the formal title.
positionDescription: [
  'Philosopher working in the International College at Tunghai University,',
  'and in the Tunghai Honors Program.',
],

  // Education — listed most-recent first on the home page.
  education: [
    { degree: 'Ph.D., Philosophy', institution: 'McMaster University' },
    { degree: 'M.A., Philosophy', institution: 'Victoria University of Wellington' },
    { degree: 'Master of International Relations', institution: 'Victoria University of Wellington' },
  ] as { degree: string; institution: string; year?: string }[],

  // Contact / external profiles
  email: 'mhemmingsen@thu.edu.tw',
  philpeople: 'https://philpeople.org/profiles/michael-hemmingsen',
  orcid: 'https://orcid.org/0000-0001-9436-139X',

  // Optional extras — leave blank to hide:
  googleScholar: '',
  philpapers: '',
  involvements: [
  { label: 'Tunghai Honors Program', url: 'https://honors.thu.edu.tw/' },
  { label: 'ICIC 2026', url: 'https://icic.thu.edu.tw/' },
],

  // Photo — drop a file into /public (e.g. /public/photo.jpg) and set the
  // path here. Square or near-square crops work best. Leave blank to hide.
  photo: '/images/photo.png',                             // e.g. '/photo.jpg'
  photoAlt: 'Portrait of Michael Hemmingsen',                          // e.g. 'Portrait of Michael Hemmingsen'

  // Google Analytics 4 — paste your Measurement ID (format: G-XXXXXXXXXX).
  // Leave as empty string to disable analytics.
  gaMeasurementId: '',
};
// Add new publications by appending to the array.
// `tags` are used for the topic filter on the research page — keep them
// short and consistent (the filter bar shows every unique tag found here).
// `link` should be the PhilPapers (or other) URL.
// `venue` is the journal, edited volume, or conference name.
// `year` is used for chronological sorting.
//
// `note` is an optional editorial annotation rendered in a quieter style
// below the entry. Useful for things like:
//   "For an extension to <a href='...'>international monetary policy</a>, see Smith (2026)."
//   "Reprinted in X (Year)."
//   "Translated into Mandarin: <a href='...'>...</a>"
// HTML is allowed in this field (e.g. <a> tags, ) — used as set:html.

export type Publication = {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  link?: string;       // optional
  tags?: string[];
  note?: string;
  isEditedVolume?: boolean;
};

export const publications: Publication[] = [
  // 2026
  {
    title: 'Virtue-al Ethics?',
    venue: 'In <em>Virtue Theory and Video Games</em>, edited by Nicholas Baima and Sarah Malanowski',
    year: 2026,
    link: 'https://philpapers.org/rec/HEMVES',
    tags: ['Ethics', 'Philosophy of Technology', 'Philosophy of Sport & Games'],
  },
  {
    title: 'Authoring Physics: The Ontology of Video Games',
    venue: 'Philosophy and Technology',
    year: 2026,
    link: 'https://philpapers.org/rec/HEMAPT-3',
    tags: ['Philosophy of Technology'],
  },

  // 2025
  {
    title: 'Act Consequentialism and the Gamer\'s Dilemma',
    venue: 'Ethics and Information Technology',
    year: 2025,
    link: 'https://philpapers.org/rec/HEMACA-4',
    tags: ['Ethics', 'Philosophy of Technology', 'Philosophy of Sport & Games'],
  },
  {
    title: 'Unité et multiplicité: Métaphysique et éthique chez Spinoza, Zhang Zai et dans le bouddhisme chán',
    venue: 'In <em>Éthique et impersonnalité</em>, edited by Gordon Davis, Sandy Hinzelin and Philippe-Antoine Hoyeck',
    year: 2025,
    link: 'https://philpapers.org/rec/HEMUEM',
    tags: ['Ethics', 'Philosophy of Religion', 'Non-Western & Comparative Philosophy'],
    note: '<a href="https://www.researchgate.net/publication/395972926_Unity_and_Multiplicity_The_Metaphysics_and_Ethics_of_Benedict_de_Spinoza_Zhang_Zai_and_Chan_Buddhism">English version</a>.',
  },

  // 2024
  {
  title: 'Ethical Theory in Global Perspective',
  venue: 'SUNY Press',
  year: 2024,
  link: 'https://philpapers.org/rec/RANETI-2',
  isEditedVolume: true,
  tags: ['Ethics', 'Non-Western & Comparative Philosophy']
},
  {
    title: 'Framing the Gamer\'s Dilemma',
    venue: 'Ethics and Information Technology',
    year: 2024,
    link: 'https://philpapers.org/rec/HEMFTG',
    tags: ['Ethics', 'Philosophy of Technology', 'Philosophy of Sport & Games'],
    note: 'For a paper that pushes back on some elements of my view, see <a href="https://philpapers.org/rec/YEEGDS">Gamer’s de se imaginative resistance</a>, by Damin Yee.',
  },
  {
    title: 'Mapping the Terrain of Sport: A Core-Periphery Model',
    venue: 'Journal of the Philosophy of Sport',
    year: 2024,
    link: 'https://philpapers.org/rec/HEMMTT',
    tags: ['Philosophy of Sport & Games'],
        note: 'For an application and extension of the core-periphery model, see <a href="https://www.tandfonline.com/doi/full/10.1080/00948705.2026.2652331">A core–periphery framework to evaluate dangerous actions in sport</a>, by Emily Ryall & Alistair Brown.',
  },
  {
    title: 'What is a Metagame?',
    venue: 'Sport, Ethics and Philosophy',
    year: 2024,
    link: 'https://philpapers.org/rec/HEMWIA-2',
     tags: ['Philosophy of Sport & Games']
  },
  {
    title: 'Zhuangzi and Ideological State Apparatuses',
    venue: 'Philosophy & Social Criticism',
    year: 2024,
    link: 'https://philpapers.org/rec/HEMZAI',
    tags: ['Social & Political Philosophy', 'Non-Western & Comparative Philosophy'],
    note: 'For a paper taking my Zhuangzi/Althusser comparison in another direction, see <a href="https://journals.sagepub.com/doi/abs/10.1177/01914537251391450">Breaking the Self</a>, by Kanghun Ahn.',
  },

  // 2023
  {
    title: 'Movement Compression, Sport and eSport',
    venue: 'European Journal for Sport and Society',
    year: 2023,
    link: 'https://philpapers.org/rec/HEMMCS',
    tags: ['Philosophy of Sport & Games']
  },
  {
    title: 'Towards a Value Neutral Definition of Sport',
    venue: 'Sport, Ethics and Philosophy',
    year: 2023,
    link: 'https://philpapers.org/rec/TAITAV',
    tags: ['Philosophy of Sport & Games']
  },

  // 2022
  {
    title: 'Carl Schmitt, Sportspersonship, and the Ius Publicum Ludis',
    venue: 'Journal of the Philosophy of Sport',
    year: 2022,
    link: 'https://philpapers.org/rec/HEMCSS',
    tags: ['Philosophy of Sport & Games', 'Social & Political Philosophy']
  },
  {
    title: 'Sameness, Difference and Environmental Concern in the Metaphysics and Ethics of Spinoza and Chan Buddhism',
    venue: 'Comparative Philosophy',
    year: 2022,
    link: 'https://philpapers.org/rec/HEMSDA',
    tags: ['Social & Political Philosophy', 'Non-Western & Comparative Philosophy', 'Ethics', 'Environmental Philosophy']
  },

  // 2021
  {
    title: 'Code is Law: Subversion and Collective Knowledge in the Ethos of Video Game Speedrunning',
    venue: 'Sport, Ethics and Philosophy',
    year: 2021,
    link: 'https://philpapers.org/rec/HEMCIL',
    tags: ['Philosophy of Sport & Games']
  },
  {
    title: 'Cheaters Never Prosper? Winning by Deception in Purely Professional Games of Pure Chance',
    venue: 'Sport, Ethics and Philosophy',
    year: 2021,
    link: 'https://philpapers.org/rec/HEMCNP',
    tags: ['Philosophy of Sport & Games']
  },

  // 2020
  {
    title: 'Soul-Making and Social Progress',
    venue: 'International Journal for Philosophy of Religion',
    year: 2020,
    link: 'https://philpapers.org/rec/HEMSAS-2',
    tags: ['Philosophy of Religion', 'Social & Political Philosophy']
  },
  {
    title: 'The Tension Between Divine Command Theory and Utilitarianism in Mozi and George Berkeley: A Comparison',
    venue: 'Philosophy East and West',
    year: 2020,
    link: 'https://philpapers.org/rec/HEMTTB',
    tags: ['Philosophy of Religion', 'Ethics', 'Non-Western & Comparative Philosophy']
  },

  // 2019
  {
    title: 'Public Reason and Ecological Truth',
    venue: 'In <em>Philosophies of Place</em>, edited by Peter D. Hershock and Roger T. Ames',
    year: 2019,
    link: 'https://philpapers.org/rec/HEMPR-2',
    tags: ['Social & Political Philosophy', 'Environmental Philosophy']
  },

  // 2018
  {
    title: 'Māyā and Becoming: Deleuze and Vedānta on Attributes, Acosmism, and Parallelism in Spinoza',
    venue: 'Comparative and Continental Philosophy',
    year: 2018,
    link: 'https://philpapers.org/rec/HEMMAB',
    tags: ['Non-Western & Comparative Philosophy']
  },

  // 2016
  {
    title: 'Coercion, Value and Justice: Redistribution in a Neutral State',
    venue: 'Theoria',
    year: 2016,
    link: 'https://philpapers.org/rec/HEMCVA',
    tags: ['Social & Political Philosophy']
  },
  {
    title: 'Anthropocentrism, Conservatism and Green Political Thought',
    venue: 'In <em>The Nature of Peace and the Peace of Nature</em>, edited by Andrew Fiala',
    year: 2016,link: 'https://philpapers.org/rec/HEMACA-2',
    tags: ['Social & Political Philosophy', 'Environmental Philosophy']
  },
];

export type TextbookChapter = {
  title: string;
  pages?: string;          // e.g. "37–58"
  link: string;            // PhilPapers URL or DOI
  coauthors?: string;      // for the chapter you didn't sole-author
  note?: string;
};

export const textbookChapters: TextbookChapter[] = [
  { title: 'Global Philosophy and Ethical Theory', link: 'https://philpapers.org/rec/PLACEHOLDER' },
  { title: 'Character-Based Moral Theories', link: 'https://philpapers.org/rec/HEMCMT' },
  { title: 'Consequentialist Moral Theories', link: 'https://philpapers.org/rec/HEMCMT-2' },
  { title: 'Mozi and Inclusive Care', link: 'https://philpapers.org/rec/HEMMAI' },
  { title: 'Deontological Moral Theories', link: 'https://philpapers.org/rec/HEMDMT' },
  { title: 'Mou Zongsan and Moral Feeling', coauthors: 'Wing-Cheuk Chan and Hemmingsen', link: 'https://philpapers.org/rec/CHAMZA' },
  { title: 'Jürgen Habermas and Discourse Ethics', link: 'https://philpapers.org/rec/HEMJHA' },
  { title: 'Particularist, Anti-Theoretical, and Other Approaches to Morality', link: 'https://philpapers.org/rec/HEMPAA-3' },
];
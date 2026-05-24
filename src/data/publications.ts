// Publications.
//
// `tags` reference KEYS from src/i18n/tags.ts (not display labels).
// `note` is a translatable annotation; HTML allowed in each language's string.
// Titles, venues, authors, and links are not translated (stay plain strings).

import type { Translatable } from '../i18n/t';
import type { TagKey } from '../i18n/tags';

export type Publication = {
  title: string;
  authors?: string;
  venue: string;            // English; may contain <em> for the title
  year: number;
  link?: string;
  tags?: TagKey[];
  note?: Translatable;      // translatable; HTML allowed
  isEditedVolume?: boolean;
};

export const publications: Publication[] = [
  // 2026
  {
    title: 'Virtue-al Ethics?',
    venue: 'In <em>Virtue Theory and Video Games</em>, edited by Nicholas Baima and Sarah Malanowski',
    year: 2026,
    link: 'https://philpapers.org/rec/HEMVES',
    tags: ['ethics', 'philtech', 'sportgames'],
  },
  {
    title: 'Authoring Physics: The Ontology of Video Games',
    venue: 'Philosophy and Technology',
    year: 2026,
    link: 'https://philpapers.org/rec/HEMAPT-3',
    tags: ['philtech'],
  },

  // 2025
  {
    title: 'Act Consequentialism and the Gamer\'s Dilemma',
    venue: 'Ethics and Information Technology',
    year: 2025,
    link: 'https://philpapers.org/rec/HEMACA-4',
    tags: ['ethics', 'philtech', 'sportgames'],
  },
  {
    title: 'Unité et multiplicité: Métaphysique et éthique chez Spinoza, Zhang Zai et dans le bouddhisme chán',
    venue: 'In <em>Éthique et impersonnalité</em>, edited by Gordon Davis, Sandy Hinzelin and Philippe-Antoine Hoyeck',
    year: 2025,
    link: 'https://philpapers.org/rec/HEMUEM',
    tags: ['ethics', 'religion', 'nonwestern'],
    note: {
      en: '<a href="https://www.researchgate.net/publication/395972926_Unity_and_Multiplicity_The_Metaphysics_and_Ethics_of_Benedict_de_Spinoza_Zhang_Zai_and_Chan_Buddhism">English version</a>.',
      zh: '<a href="https://www.researchgate.net/publication/395972926_Unity_and_Multiplicity_The_Metaphysics_and_Ethics_of_Benedict_de_Spinoza_Zhang_Zai_and_Chan_Buddhism">英文版</a>。',
      ja: '<a href="https://www.researchgate.net/publication/395972926_Unity_and_Multiplicity_The_Metaphysics_and_Ethics_of_Benedict_de_Spinoza_Zhang_Zai_and_Chan_Buddhism">英語版</a>。',
    },
  },

  // 2024
  {
    title: 'Ethical Theory in Global Perspective',
    venue: 'SUNY Press',
    year: 2024,
    link: 'https://philpapers.org/rec/RANETI-2',
    isEditedVolume: true,
    tags: ['ethics', 'nonwestern'],
  },
  {
    title: 'Framing the Gamer\'s Dilemma',
    venue: 'Ethics and Information Technology',
    year: 2024,
    link: 'https://philpapers.org/rec/HEMFTG',
    tags: ['ethics', 'philtech', 'sportgames'],
    note: {
      en: 'For a paper that pushes back on some elements of my view, see <a href="https://philpapers.org/rec/YEEGDS">Gamer’s de se imaginative resistance</a>, by Damin Yee.',
      zh: '如欲閱讀一篇對我部分觀點提出批評的論文，可參見 Damin Yee 的 <a href="https://philpapers.org/rec/YEEGDS">Gamer’s de se imaginative resistance</a>。',
      ja: '私の見解の一部に異議を唱える論文として、Damin Yee による <a href="https://philpapers.org/rec/YEEGDS">Gamer’s de se imaginative resistance</a> を参照。',
    },
  },
  {
    title: 'Mapping the Terrain of Sport: A Core-Periphery Model',
    venue: 'Journal of the Philosophy of Sport',
    year: 2024,
    link: 'https://philpapers.org/rec/HEMMTT',
    tags: ['sportgames'],
    note: {
      en: 'For an application and extension of the core-periphery model, see <a href="https://www.tandfonline.com/doi/full/10.1080/00948705.2026.2652331">A core–periphery framework to evaluate dangerous actions in sport</a>, by Emily Ryall & Alistair Brown.',
      zh: '如欲閱讀一篇將核心–外圍模型加以應用與延伸的論文，可參見 Emily Ryall 與 Alistair Brown 的 <a href="https://www.tandfonline.com/doi/full/10.1080/00948705.2026.2652331">A core–periphery framework to evaluate dangerous actions in sport</a>。',
      ja: '中心‐周辺モデルの応用と発展については、Emily Ryall と Alistair Brown による <a href="https://www.tandfonline.com/doi/full/10.1080/00948705.2026.2652331">A core–periphery framework to evaluate dangerous actions in sport</a> を参照。',
    },
  },
  {
    title: 'What is a Metagame?',
    venue: 'Sport, Ethics and Philosophy',
    year: 2024,
    link: 'https://philpapers.org/rec/HEMWIA-2',
    tags: ['sportgames'],
  },
  {
    title: 'Zhuangzi and Ideological State Apparatuses',
    venue: 'Philosophy & Social Criticism',
    year: 2024,
    link: 'https://philpapers.org/rec/HEMZAI',
    tags: ['sociopolitical', 'nonwestern'],
    note: {
      en: 'For a paper taking my Zhuangzi/Althusser comparison in another direction, see <a href="https://journals.sagepub.com/doi/abs/10.1177/01914537251391450">Breaking the Self</a>, by Kanghun Ahn.',
      zh: '如欲閱讀一篇從不同方向發展我對莊子與阿圖塞比較的論文，可參見 Kanghun Ahn 的 <a href="https://journals.sagepub.com/doi/abs/10.1177/01914537251391450">Breaking the Self</a>。',
      ja: '私の庄子／アルチュセール比較を別の方向性へ発展させた論文として、Kanghun Ahn による <a href="https://journals.sagepub.com/doi/abs/10.1177/01914537251391450">Breaking the Self</a> を参照。',
    },
  },

  // 2023
  {
    title: 'Movement Compression, Sport and eSport',
    venue: 'European Journal for Sport and Society',
    year: 2023,
    link: 'https://philpapers.org/rec/HEMMCS',
    tags: ['sportgames'],
  },
  {
    title: 'Towards a Value Neutral Definition of Sport',
    venue: 'Sport, Ethics and Philosophy',
    year: 2023,
    link: 'https://philpapers.org/rec/TAITAV',
    tags: ['sportgames'],
  },

  // 2022
  {
    title: 'Carl Schmitt, Sportspersonship, and the Ius Publicum Ludis',
    venue: 'Journal of the Philosophy of Sport',
    year: 2022,
    link: 'https://philpapers.org/rec/HEMCSS',
    tags: ['sportgames', 'sociopolitical'],
  },
  {
    title: 'Sameness, Difference and Environmental Concern in the Metaphysics and Ethics of Spinoza and Chan Buddhism',
    venue: 'Comparative Philosophy',
    year: 2022,
    link: 'https://philpapers.org/rec/HEMSDA',
    tags: ['sociopolitical', 'nonwestern', 'ethics', 'environmental'],
  },

  // 2021
  {
    title: 'Code is Law: Subversion and Collective Knowledge in the Ethos of Video Game Speedrunning',
    venue: 'Sport, Ethics and Philosophy',
    year: 2021,
    link: 'https://philpapers.org/rec/HEMCIL',
    tags: ['sportgames'],
  },
  {
    title: 'Cheaters Never Prosper? Winning by Deception in Purely Professional Games of Pure Chance',
    venue: 'Sport, Ethics and Philosophy',
    year: 2021,
    link: 'https://philpapers.org/rec/HEMCNP',
    tags: ['sportgames'],
  },

  // 2020
  {
    title: 'Soul-Making and Social Progress',
    venue: 'International Journal for Philosophy of Religion',
    year: 2020,
    link: 'https://philpapers.org/rec/HEMSAS-2',
    tags: ['religion', 'sociopolitical'],
  },
  {
    title: 'The Tension Between Divine Command Theory and Utilitarianism in Mozi and George Berkeley: A Comparison',
    venue: 'Philosophy East and West',
    year: 2020,
    link: 'https://philpapers.org/rec/HEMTTB',
    tags: ['religion', 'ethics', 'nonwestern'],
  },

  // 2019
  {
    title: 'Public Reason and Ecological Truth',
    venue: 'In <em>Philosophies of Place</em>, edited by Peter D. Hershock and Roger T. Ames',
    year: 2019,
    link: 'https://philpapers.org/rec/HEMPR-2',
    tags: ['sociopolitical', 'environmental'],
  },

  // 2018
  {
    title: 'Māyā and Becoming: Deleuze and Vedānta on Attributes, Acosmism, and Parallelism in Spinoza',
    venue: 'Comparative and Continental Philosophy',
    year: 2018,
    link: 'https://philpapers.org/rec/HEMMAB',
    tags: ['nonwestern'],
  },

  // 2016
  {
    title: 'Coercion, Value and Justice: Redistribution in a Neutral State',
    venue: 'Theoria',
    year: 2016,
    link: 'https://philpapers.org/rec/HEMCVA',
    tags: ['sociopolitical'],
  },
  {
    title: 'Anthropocentrism, Conservatism and Green Political Thought',
    venue: 'In <em>The Nature of Peace and the Peace of Nature</em>, edited by Andrew Fiala',
    year: 2016,
    link: 'https://philpapers.org/rec/HEMACA-2',
    tags: ['sociopolitical', 'environmental'],
  },
];

export type TextbookChapter = {
  title: string;
  pages?: string;
  link: string;
  coauthors?: string;
  note?: Translatable;
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
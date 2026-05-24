// Grants.
//
// title, funder, role, description are translatable ({ en, zh }).
// startDate / endDate are 'YYYY-MM' and formatted programmatically.
// amount (optional) and link (optional) are not translated.

import type { Translatable } from '../i18n/t';

export type Grant = {
  title: Translatable;
  funder: Translatable;
  amount?: string;          // optional, e.g. "NT$600,000"
  role: Translatable;
  startDate: string;        // 'YYYY-MM'
  endDate: string;          // 'YYYY-MM'
  description: Translatable;
  link?: string;            // optional project URL
};

export const grants: Grant[] = [
  {
    title: { en: 'Sport Across Cultures: Mapping Cross-Cultural Criteria', zh: '文化差異中的運動：標準的比較與分析' },
    funder: { en: 'National Science and Technology Council (NSTC), Taiwan', zh: '國家科學及技術委員會，臺灣' },
    role: { en: 'Principal Investigator', zh: '計畫主持人' },
    startDate: '2025-08',
    endDate: '2027-07',
    description: {
      en: 'Building on the core-periphery model, this project examines how different cultures understand and classify sport. Through large-scale cross-cultural surveys, it investigates how different linguistic communities weigh factors such as physical skill, strategy, competition, aesthetics, and institutional structure when deciding whether an activity counts as a sport. The project explores not only sport itself, but also the broader philosophical question of how concepts vary across cultures and how those differences can be studied systematically.',
      zh: '建立在核心–外圍模型的基礎上，本計畫探討不同文化如何理解與分類「運動」。透過大規模跨文化調查，計畫將分析不同語言社群在判斷某項活動是否屬於運動時，如何衡量身體技巧、策略、競爭、美感與制度結構等因素。本計畫所關注的不只是運動本身，也包括一個更廣泛的哲學問題：概念如何隨文化而改變，以及這些差異如何能被系統性地研究。',
    },
  },
  {
    title: { en: 'Understanding the Concept of Sport: A Core-Periphery Model', zh: '理解運動的概念：核心-外圍模型' },
    funder: { en: 'National Science and Technology Council (NSTC), Taiwan', zh: '國家科學及技術委員會，臺灣' },
    role: { en: 'Principal Investigator', zh: '計畫主持人' },
    startDate: '2024-08',
    endDate: '2025-07',
    description: {
      en: 'This project develops a new approach to defining sport. Rather than treating sport as a rigid category with fixed boundaries, it proposes a “core-periphery” model in which activities can be understood as more or less sport-like depending on the characteristics they possess. Combining philosophical analysis with experimental philosophy methods, the project investigates how people understand borderline cases such as esports, chess, martial arts, hiking, and aesthetic competition, and explores what these disagreements reveal about the concept of sport itself.',
      zh: '本計畫提出一種界定「運動」的新方法。它不將運動視為一個具有固定邊界的僵硬類別，而是提出一種「核心–外圍模型」，認為不同活動會依據其所具有的特徵，而呈現不同程度的運動性。透過結合哲學分析與實驗哲學方法，本計畫探討人們如何理解電子競技、西洋棋、武術、健行與美感競賽等邊界案例，並進一步分析這些分歧對於「運動」概念本身揭示了什麼。',
    },
  },
  // {
  //   title: { en: 'Understanding the Concept of Sport: A Core-Periphery Model', zh: '' },
  //   funder: { en: 'National Science and Technology Council (NSTC), Taiwan', zh: '' },
  //   role: { en: 'Principal Investigator', zh: '' },
  //   startDate: '2024-08',
  //   endDate: '2025-07',
  //   description: {
  //     en: 'A two-phase experimental philosophy project investigating how sport-likeness judgements vary across linguistic and cultural contexts. Phase 1 analysed vignette responses across five languages (English, German, Polish, Mandarin, Japanese); Phase 2 deploys a randomised conditional-vignette instrument via LimeSurvey and Prolific Academic.',
  //     zh: '',
  //   },
  // },
];
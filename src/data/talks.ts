// Conference presentations, invited talks, and other speaking engagements.
// Sorted chronologically (most recent first) on the page.
//
// `event` = the conference/series/meeting name — stays English.
//   Optional: department/institute talks have no event, just an institution.
// `institution` = the host venue — translatable.
// `month` = plain English month name; translated automatically at render.
// `tags` reference KEYS from src/i18n/tags.ts.
// Set `isInvited: true` for invited talks.

import type { Translatable } from '../i18n/t';
import type { TagKey } from '../i18n/tags';

export type Talk = {
  title: string;            // English
  event?: string;           // English; absent for department/institute talks
  institution: Translatable;
  year: number;
  month?: string;           // English month name, e.g. 'June' — translated automatically
  isInvited?: boolean;
  link?: string;
  tags?: TagKey[];
};

export const talks: Talk[] = [
  {
    title: 'What Makes a Sport a Sport? On Folk Intuitions about Rules and Movement in Sport',
    event: 'Australasian Association of Philosophy Annual Conference',
    institution: { en: 'University of Waikato', zh: '懷卡託大學', ja: 'ワイカト大学' },
    year: 2026,
    month: 'July',
    tags: ['sportgames'],
  }, 
  {
    title: 'The Sports Model and the Deliberative Model: Competition in Philosophy Pedagogy',
    event: 'Dialogue in Democratic Education',
    institution: { en: 'University of Oulu', zh: '奧盧大學', ja: 'オウル大学' },
    year: 2026,
    month: 'June',
    tags: ['ethics', 'sportgames', 'sociopolitical'],
  },
   {
    title: 'Beyond Consciousness: Project-Commitment and Moral Status in AI',
    event: 'SIpEIA Conference 2026: Ethics for AI',
    institution: { en: 'Sapienza Università di Roma', zh: '羅馬大學', ja: 'ローマ大学' },
    year: 2026,
    month: 'February',
    tags: ['philtech'],
  },
  {
    title: 'Beyond the Syntax/Semantics Gap: A Functionalist Dissolution of the Chinese Room',
    event: '(En)Active Minds and AI Workshop',
    institution: { en: 'University of Porto', zh: '波多大學', ja: 'ポルト大学' },
    year: 2025,
    month: 'September',
    tags: ['philtech'],
  },
  {
    title: 'AI, Relational Thinking, and the Democratization of Philosophy',
    event: 'Rethinking the Practice of Thinking in the Era of Artificial Intelligence',
    institution: { en: 'University of Beira Interior', zh: '貝拉因特里奧爾大學', ja: 'ベイラ・インテリオール大学' },
    year: 2025,
    month: 'September',
    tags: ['philtech'],
  },
  {
    title: 'Ecological Curation and Moral Cost: The Nature We Like',
    event: 'Green Marble 2025',
    institution: { en: 'University of Porto', zh: '波多大學', ja: 'ポルト大学' },
    year: 2025,
    month: 'September',
    tags: ['environmental'],
  },
  {
    title: 'Act Consequentialism and the Gamer\'s Dilemma',
    event: 'Canadian Philosophical Association Annual Meeting',
    institution: { en: 'George Brown College', zh: '喬治布朗學院', ja: 'ジョージ・ブラウン・カレッジ' },
    year: 2025,
    month: 'June',
    tags: ['philtech', 'ethics'],
  },
  {
    title: 'Occasional Intervention, Threshold Deontology and the Free Will Defense',
    event: 'Canadian Society for the Study of Religion Annual Meeting',
    institution: { en: 'George Brown College', zh: '喬治布朗學院', ja: 'ジョージ・ブラウン・カレッジ' },
    year: 2025,
    month: 'June',
    tags: ['religion', 'freewill'],
  },
  {
    title: 'Bait and Switch: Frankfurt\'s Compatibilism as Crypto-Libertarianism',
    event: 'ICIC',
    institution: { en: 'Tunghai University', zh: '東海大學', ja: '東海大学' },
    year: 2025,
    month: 'June',
    tags: ['freewill'],
  },
  {
    title: 'Deterrence Theory: The Price of Everything, the Value of Nothing',
    institution: { en: 'Department of Philosophy, University of Waikato', zh: '懷卡托大學哲學系', ja: 'ワイカト大学哲学科' },
    year: 2025,
    month: 'January',
    isInvited: true,
    tags: ['ethics', 'sociopolitical'],
  },
  {
    title: 'Zhuangzi and Ideological State Apparatuses',
    event: '12th East-West Philosopher\'s Conference',
    institution: { en: 'University of Hawaii at Mānoa', zh: '夏威夷大學馬諾阿分校', ja: 'ハワイ大学マノア校' },
    year: 2024,
    month: 'May',
    tags: ['sociopolitical', 'nonwestern'],
  },
  {
    title: 'Kongzi\'s (Business) Ethics',
    event: 'The Practice of Corporate Ethics and Social Responsibility',
    institution: { en: 'National Sun Yat-sen University', zh: '國立中山大學', ja: '国立中山大学' },
    year: 2023,
    month: 'November',
    tags: ['ethics', 'nonwestern'],
  },
  {
    title: 'eSports and Movement Compression',
    event: 'Ritsumeikan Center for Game Studies',
    institution: { en: 'Nagoya Zokei University', zh: '名古屋造形大學', ja: '名古屋造形大学' },
    year: 2023,
    month: 'August',
    tags: ['philtech', 'sportgames'],
  },
  {
    title: 'The Ethics of Mozi',
    event: 'Doyle Seminar Series',
    institution: { en: 'Georgetown University', zh: '喬治城大學', ja: 'ジョージタウン大学' },
    year: 2022,
    month: 'October',
    tags: ['ethics', 'nonwestern'],
  },
  {
    title: 'Mozi\'s Pantheism and Berkeley Theism: Dissolving (Or Not) the Tension between Consequentialism and Divine Command Theory',
    event: 'Institute for Advanced Studies on Asia',
    institution: { en: 'University of Tokyo', zh: '東京大學', ja: '東京大学' },
    year: 2019,
    month: 'December',
    isInvited: true,
    tags: ['ethics', 'nonwestern', 'religion'],
  },
  {
    title: 'Mozi\'s Pantheism and Berkeley Theism: Dissolving (Or Not) the Tension between Consequentialism and Divine Command Theory',
    event: 'International Society of East Asian Philosophy 2019 Conference',
    institution: { en: 'Meiji University', zh: '明治大學', ja: '明治大学' },
    year: 2019,
    month: 'December',
    tags: ['ethics', 'nonwestern', 'religion'],
  },
  {
    title: 'Do Cheaters Never Prosper? Winning by Deception in Purely Professional Games of Pure Chance',
    event: 'Philosophy and Gambling',
    institution: { en: 'University of Macau', zh: '澳門大學', ja: '澳門大学' },
    year: 2019,
    month: 'October',
    tags: ['sportgames'],
  },
  {
    title: 'Divine Utilitarianism: Consequentialist Ethics in Mozi and George Berkeley',
    event: 'Conference on Ethics, Religion & Philosophy 2019',
    institution: { en: 'Tokyo', zh: '東京', ja: '東京' },
    year: 2019,
    month: 'March',
    tags: ['ethics', 'nonwestern', 'religion'],
  },
  {
    title: 'Representing Ourselves: Ecological Truth Claims and the Ontology of Deliberation',
    event: 'New Zealand Political Science Association Conference',
    institution: { en: 'Victoria University of Wellington', zh: '威靈頓維多利亞大學', ja: 'ウェリントン・ビクトリア大学' },
    year: 2018,
    month: 'November',
    tags: ['sociopolitical'],
  },
  {
    title: 'Daoist Socialism: Althusser and Zhuangzi on Ideological State Apparatuses',
    event: 'Australasian Society for Continental Philosophy Conference',
    institution: { en: 'Western Sydney University', zh: '西雪梨大學', ja: '西シドニー大学' },
    year: 2018,
    month: 'November',
    tags: ['sociopolitical', 'nonwestern'],
  },
  {
    title: 'Place-Based Reasons in Non-Western Thought',
    event: '11th East-West Philosophers\' Conference: "Place"',
    institution: { en: 'University of Hawaii at Mānoa', zh: '夏威夷大學馬諾阿分校', ja: 'カリフォルニア州立大学フレズノ校' },
    year: 2016,
    month: 'May',
    tags: ['sociopolitical', 'nonwestern'],
  },
  {
    title: 'Edmund Burke and Green Political Thought: Environmental and Social Conservatisms',
    event: 'Concerned Philosophers for Peace National Conference',
    institution: { en: 'California State University, Fresno', zh: '加州州立大學弗雷斯諾分校', ja: 'グエルフ大学' },
    year: 2013,
    month: 'October',
    tags: ['sociopolitical', 'environmental'],
  },
  {
    title: 'The Tensions of Cosmopolitan Theory: An Examination of Martha Nussbaum, Judith Butler, and Jonathan Rée',
    event: 'Politics at the Limits of Civil Society',
    institution: { en: 'University of Guelph', zh: '圭爾夫大學' },
    year: 2013,
    month: 'September',
    tags: ['sociopolitical'],
  },
];
// Central dictionary for all UI "chrome" strings — nav labels, section
// headings, small notes, button labels. Anything that's interface text
// rather than content lives here, keyed by language with English fallback.
//
// Add a `ja` to any entry for Japanese later.

import type { Translatable } from './t';

export const ui = {
  nav: {
    home:     { en: 'Home',     zh: '首頁',             ja: 'ホーム' } as Translatable,
    research: { en: 'Research', zh: '研究',             ja: '研究' } as Translatable,
    talks:    { en: 'Talks',    zh: '演講',             ja: '発表' } as Translatable,
    grants:   { en: 'Grants',   zh: '研究計畫',         ja: '研究プロジェクト' } as Translatable,
    teaching: { en: 'Teaching', zh: '教學',             ja: '教育' } as Translatable,
  },

  // Section headings and notes — filled in as we reach each page.
  research: {
    topic:        { en: 'Topic:', zh: '主題：',                         ja: '分野：' } as Translatable,
    all:          { en: 'All',    zh: '全部',                           ja: 'すべて' } as Translatable,
    noMatch:      { en: 'No publications match this topic.', zh: '',    ja: 'この分野に該当する出版物はありません。' } as Translatable,
    authoredChapters: { en: 'Authored chapters', zh: '',                ja: '執筆章' } as Translatable,
  },
  talks: {
    topic:   { en: 'Topic:', zh: '主題：',                              ja: '分野：' } as Translatable,
    all:     { en: 'All',    zh: '全部',                                ja: 'すべて' } as Translatable,
    invited: { en: 'Invited', zh: '受邀',                               ja: '招待講演' } as Translatable,
    noMatch: { en: 'No talks match this topic.', zh: '',                ja: 'この分野に該当する発表はありません。' } as Translatable,
  },
  teaching: {
    pedagogyHeading: { en: 'Pedagogy & Assignments', zh: '教學方法與作業', ja: '教育方法と課題' } as Translatable,
    coursesHeading:  { en: 'Courses', zh: '課程',                        ja: '担当科目' } as Translatable,
    syllabiNote:     { en: 'Syllabi available on request.', zh: '課程大綱可來信索取。', ja: 'シラバスはご要望に応じて提供可能です。' } as Translatable,
    topic:           { en: 'Topic:', zh: '主題：',                       ja: '分野：' } as Translatable,
    all:             { en: 'All',    zh: '全部',                         ja: 'すべて' } as Translatable,
    noMatch:         { en: 'No courses match this topic.', zh: '沒有符合此主題的課程。', ja: 'この分野に該当する科目はありません。' } as Translatable,
    viewAssignment:  { en: 'View assignment (PDF)', zh: '查看作業說明（PDF）', ja: '課題を見る（PDF）' } as Translatable,
  },
  home: {
    education: { en: 'Education', zh: '學歷',                            ja: '学歴' } as Translatable,
  },
};
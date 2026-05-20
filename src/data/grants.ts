export type Grant = {
  title: string;
  funder: string;
  amount?: string;          // optional, e.g. "NT$600,000"
  role: string;             // e.g. "Principal Investigator"
  startDate: string;        // e.g. "2024-08"  (YYYY-MM)
  endDate: string;          // e.g. "2026-07"
  description: string;      // 1–3 sentences
  link?: string;            // optional project URL
};

export const grants: Grant[] = [
  // --- EXAMPLES — replace with your own ---
  {
    title: 'Sport Across Cultures: Mapping Cross-Cultural Criteria',
    funder: 'National Science and Technology Council (NSTC), Taiwan',
    role: 'Principal Investigator',
    startDate: '2025-08',
    endDate: '2027-07',
    description:
      'A two-phase experimental philosophy project investigating how sport-likeness judgements vary across linguistic and cultural contexts. Phase 1 analysed vignette responses across five languages (English, German, Polish, Mandarin, Japanese); Phase 2 deploys a randomised conditional-vignette instrument via LimeSurvey and Prolific Academic.',
  },
  // {
  //   title: 'Understanding the Concept of Sport: A Core-Periphery Model',
  //   funder: 'National Science and Technology Council (NSTC), Taiwan',
  //   role: 'Principal Investigator',
  //   startDate: '2024-08',
  //   endDate: '2025-07',
  //   description:
  //     'A two-phase experimental philosophy project investigating how sport-likeness judgements vary across linguistic and cultural contexts. Phase 1 analysed vignette responses across five languages (English, German, Polish, Mandarin, Japanese); Phase 2 deploys a randomised conditional-vignette instrument via LimeSurvey and Prolific Academic.',
  // },
];

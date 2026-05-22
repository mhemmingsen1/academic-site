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
      'Building on the core-periphery model, this project examines how different cultures understand and classify sport. Through large-scale cross-cultural surveys, it investigates how different linguistic communities weigh factors such as physical skill, strategy, competition, aesthetics, and institutional structure when deciding whether an activity counts as a sport. The project explores not only sport itself, but also the broader philosophical question of how concepts vary across cultures and how those differences can be studied systematically.',
  },
   {
    title: 'Understanding the Concept of Sport: A Core-Periphery Model',
    funder: 'National Science and Technology Council (NSTC), Taiwan',
    role: 'Principal Investigator',
    startDate: '2024-08',
    endDate: '2025-07',
    description:
      'This project develops a new approach to defining sport. Rather than treating sport as a rigid category with fixed boundaries, it proposes a “core-periphery” model in which activities can be understood as more or less sport-like depending on the characteristics they possess. Combining philosophical analysis with experimental philosophy methods, the project investigates how people understand borderline cases such as esports, chess, martial arts, hiking, and aesthetic competition, and explores what these disagreements reveal about the concept of sport itself.',
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

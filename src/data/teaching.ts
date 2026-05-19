export type Course = {
  title: string;
  description?: string;
  tags?: string[];
  syllabus?: string;
};

export type Pedagogy = {
  title: string;
  description: string;
  link?: string;
};

export const courses: Course[] = [
  // Required
  { title: 'Leadership & Global Citizen for the 21st Century', tags: ['General Education'], description: 'Considers questions about cosmopolitanism, nationalism, immigration, borders, and global justice.' },
  { title: 'Trends in Global Ecology & Environmental Change', tags: ['General Education'], description: 'Examination of environmental ethics, climate change, extinction, and humanity’s relationship with the natural world.' },
  { title: 'Personal Identity in Historical Perspective', tags: ['General Education'], description: 'Study of personal identity, free will, selfhood, and moral responsibility.' },
  { title: 'Tunghai Academic Exploration', tags: ['General Education'], description: 'Introduction to the intellectual methods, assumptions, and perspectives of diverse academic disciplines' },
  { title: 'Indigenous Philosophy', tags: ['General Education', 'Non-Western & Comparative Philosophy'], description: 'Introduction to indigenous philosophical traditions and their approaches to questions concerning human beings, nature, community, and knowledge.' },
  { title: 'Introduction to Philosophy', tags: ['General Education'], description: 'Topic-based introduction to philosophy through contemporary debates about free will, personal identity, skepticism, religion, consciousness, conspiracy theories, sport, and video games.' },
  { title: 'Contemporary Ethical Problems', tags: ['General Education', 'Ethics'], description: 'Topic-based introduction to applied ethics through debates about climate change, immigration, food ethics, robot ethics, reproduction, urban life, and space exploration.' },
  { title: 'Introduction to Asian and Non-Western Philosophy', tags: ['General Education', 'Ethics', 'Non-Western & Comparative Philosophy'], description: 'Introduction to Asian and non-Western philosophy, with particular emphasis on classical Chinese philosophy, Neo-Confucianism, and Indian philosophy.' },
  { title: 'Critical Thinking', tags: ['General Education'], description: 'Introduction to argument analysis, logical reasoning, fallacies, evidence evaluation, and problem solving.'},

  // Honors
  { title: 'Understanding International Relations', tags: ['Honors', 'Political Philosophy & International Relations'], description: 'Introduction to major approaches in international relations, including realism, liberalism, feminism, Marxism, and critical theory.' },
  { title: 'Ethical Theory in Global Perspective', tags: ['Honors', 'Ethics', 'Non-Western & Comparative Philosophy'], description: 'Examination of classical and contemporary ethical theories from both Western and non-Western philosophical traditions.' },
  { title: 'Advertising and Consumer Society', tags: ['Honors', 'Media Theory'], description: 'Critical study of advertising, consumer culture, ideology, and commodification.' },
  { title: 'The Problem of Evil', tags: ['Honors', 'Philosophy of Religion'], description: 'Examination of evil, suffering, free will, and theodicy in philosophy of religion.' },

  // Electives
  { title: 'Esports, Speedrunning, and Video Games', tags: ['Philosophy of Technology'], description: 'Study of esports, speedrunning, cheating, rules, metagames, and the philosophy of play and competition.' },
  { title: 'Punishment', tags: ['Ethics', 'Political Philosophy & International Relations'], description: 'Study of retributivism, deterrence, rehabilitation, restorative justice, and the ethics of criminal punishment.' },
  { title: 'The Philosophy of Video Games', tags: ['Philosophy of Technology'], description: 'Examination of virtual ethics, the Gamer’s Dilemma, esports, and the philosophy of video games.' },
  { title: 'Chat-GPT and Philosophy', tags: ['Philosophy of Technology', 'Artificial Intelligence'], description: 'Study of artificial intelligence, consciousness, creativity, free will, and the ethical implications of large language models.' },
  { title: 'Exploring Alternate Worlds', tags: ['Philosophy of Technology', 'Artificial Intelligence'], description: 'Uses science fiction to examine questions about reality, artificial intelligence, transhumanism, and the future of humanity.' },
  { title: 'The Philosophy of Sex and Relationships', tags: ['Ethics'], description: 'Examination of sex, sexuality, consent, relationships, polyamory, BDSM, and sexual ethics.' },
  { title: 'Philosophical and Social Dimensions of Artificial Intelligence', tags: ['Philosophy of Technology', 'Artificial Intelligence'], description: 'Examination of the philosophical and social implications of artificial intelligence.'},
  { title: 'Thinking Through China', tags: ['Non-Western & Comparative Philosophy'], description: 'Introduction to major traditions in Chinese philosophy, especially Confucianism and Daoism.' },
  { title: 'Korean Philosophy', tags: ['Non-Western & Comparative Philosophy'], description: 'Introduction to traditional Korean philosophy, especially Confucianism.' },
  { title: 'Philosophy and Artificial Intelligence', tags: ['Philosophy of Technology', 'Artificial Intelligence'], description: 'Study of artificial intelligence, machine consciousness, automation, moral status, and the ethics of advanced computing technologies.' },
  { title: 'The Philosophy of Harmony and Conflict', tags: ['Political Philosophy & International Relations', 'Non-Western & Comparative Philosophy'], description: 'Comparative study of the concepts of harmony and conflict in liberal, Marxist, Confucian, and Advaita Vedantic traditions.' },
  { title: 'The Philosophy of Race, Class and Gender', tags: ['Political Philosophy & International Relations', 'Ethics'], description: 'Examination of race, gender, and class through feminism, Marxism, embodiment theory, colonialism, and critical race theory.' },
  { title: 'Chinese Ethics', tags: ['Ethics', 'Non-Western & Comparative Philosophy'], description: 'Historical introduction to Chinese ethical thought, including Confucianism, Daoism, Mohism, Legalism, and Neo-Confucianism.' },
  { title: 'Business Negotiation', tags: ['Ethics'], description: 'Philosophical examination of negotiation, strategic interaction, and the ethics of deception in business.' },
  { title: 'Business Ethics', tags: ['Ethics'], description: 'Examination of ethical issues in business, including capitalism, corporations, consumers, the environment, discrimination, and the workplace.' },


  // Earlier
  { title: 'Media Theory and Cultural Production', tags: ['Media Theory'], description: 'Study of media and cultural theory through critical theory, the culture industry, the public sphere, postmodernism, nationalism, globalization, and networked identity.'},
  { title: 'International Relations Theory', tags: ['Political Philosophy & International Relations'], description: 'Study of critical approaches to international relations theory, including Marxism, critical theory, post-structuralism, feminism, psychoanalysis, and postcolonialism.' },
  { title: 'Virtue and Human Nature in World Philosophy', tags: ['Ethics', 'Non-Western & Comparative Philosophy'], description: 'Comparative study of virtue, human nature, and ethical life across Greek, Chinese, Indian, Māori, and African philosophical traditions' },
  { title: 'Popular Culture and the Media', tags: ['Media Theory'], description: 'Critical introduction to popular culture and media theory through topics such as television, sport, music, fashion, social media, and video games.' },
  { title: 'Hollywood Cinema', tags: ['Media Theory'], description: 'Examination of the economic, political, technological, and aesthetic developments shaping contemporary Hollywood cinema.' },
];

export const pedagogy: Pedagogy[] = [
  {
    title: 'Discussion Revision Assignment',
    description:
      'Students revisit and substantively rewrite earlier discussion contributions in light of subsequent course readings. The aim is to make conceptual change visible, and to treat reasoning as iterative rather than performative.',
  },
  {
    title: 'Philosophy in the Wild',
    description:
      'A field-observation exercise asking students to identify a philosophical question embedded in something they encountered outside the classroom, and to articulate why it is genuinely a question rather than a settled matter.',
  },
];
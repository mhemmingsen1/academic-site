// Conference presentations, invited talks, and other speaking engagements.
// Sorted chronologically (most recent first) on the page.
//
// Set `isInvited: true` for invited talks (keynotes, named lectures,
// invited department talks). Renders a small "Invited" marker beside the entry.

export type Talk = {
  title: string;
  venue: string;
  year: number;
  date?: string;
  isInvited?: boolean;
  link?: string;
  tags?: string[];
};

export const talks: Talk[] = [
  {
    title: 'Beyond Consciousness: Project-Commitment and Moral Status in AI',
    venue: 'SIpEIA Conference 2026: Ethics for AI, Sapienza Università di Roma',
    year: 2026,
    date: 'February',
    tags: ['Philosophy of Technology']
  },
  {
    title: 'Beyond the Syntax/Semantics Gap: A Functionalist Dissolution of the Chinese Room',
    venue: '(En)Active Minds and AI Workshop, University of Porto',
    year: 2025,
    date: 'September',
    tags: ['Philosophy of Technology']
  },
  {
    title: 'AI, Relational Thinking, and the Democratization of Philosophy',
    venue: 'Rethinking the Practice of Thinking in the Era of Artificial Intelligence, University of Beira Interior',
    year: 2025,
    date: 'September',
    tags: ['Philosophy of Technology']
  },
  {
    title: 'Ecological Curation and Moral Cost: The Nature We Like',
    venue: 'Green Marble 2025, University of Porto',
    year: 2025,
    date: 'September',
    tags: ['Environmental Philosophy']
  },
  {
    title: 'Act Consequentialism and the Gamer\'s Dilemma',
    venue: 'Canadian Philosophical Association Annual Meeting, George Brown College',
    year: 2025,
    date: 'June',
    tags: ['Philosophy of Technology', 'Ethics']
  },
  {
    title: 'Occasional Intervention, Threshold Deontology and the Free Will Defense',
    venue: 'Canadian Society for the Study of Religion Annual Meeting, George Brown College',
    year: 2025,
    date: 'June',
    tags: ['Philosophy of Religion', 'Free Will']
  },
  {
    title: 'Bait and Switch: Frankfurt\'s Compatibilism as Crypto-Libertarianism',
    venue: 'ICIC, International College, Tunghai University',
    year: 2025,
    date: 'June',
    tags: ['Free Will']
  },
  {
    title: 'Deterrence Theory: The Price of Everything, the Value of Nothing',
    venue: 'Department of Philosophy, University of Waikato',
    year: 2025,
    date: 'January',
    isInvited: true,
    tags: ['Ethics', 'Social & Political Philosophy']
  },
  {
    title: 'Zhuangzi and Ideological State Apparatuses',
    venue: '12th East-West Philosopher\'s Conference, University of Hawaii',
    year: 2024,
    date: 'May',
    tags: ['Social & Political Philosophy', 'Non-Western & Comparative Philosophy']
  },
  {
    title: 'Kongzi\'s (Business) Ethics',
    venue: 'The Practice of Corporate Ethics and Social Responsibility, National Sun Yat-sen University',
    year: 2023,
    date: 'November',
    tags: ['Ethics', 'Non-Western & Comparative Philosophy']
  },
  {
    title: 'eSports and Movement Compression',
    venue: 'Ritsumeikan Center for Game Studies, Nagoya Zokei University',
    year: 2023,
    date: 'August',
    tags: ['Philosophy of Technology', 'Philosophy of Sport & Games']
  },
  {
    title: 'The Ethics of Mozi',
    venue: 'Doyle Seminar Series, Georgetown University',
    year: 2022,
    date: 'October',
    tags: ['Ethics', 'Non-Western & Comparative Philosophy']
  },
  {
    title: 'Mozi\'s Pantheism and Berkeley Theism: Dissolving (Or Not) the Tension between Consequentialism and Divine Command Theory',
    venue: 'Institute for Advanced Studies on Asia, University of Tokyo',
    year: 2019,
    date: 'December',
    isInvited: true,
    tags: ['Ethics', 'Non-Western & Comparative Philosophy', 'Philosophy of Religion']
  },
  {
    title: 'Mozi\'s Pantheism and Berkeley Theism: Dissolving (Or Not) the Tension between Consequentialism and Divine Command Theory',
    venue: 'International Society of East Asian Philosophy 2019 Conference, Meiji University',
    year: 2019,
    date: 'December',
    tags: ['Ethics', 'Non-Western & Comparative Philosophy', 'Philosophy of Religion']
  },
  {
    title: 'Do Cheaters Never Prosper? Winning by Deception in Purely Professional Games of Pure Chance',
    venue: 'Philosophy and Gambling, University of Macau',
    year: 2019,
    date: 'October',
    tags: ['Philosophy of Sport & Games']
  },
  {
    title: 'Divine Utilitarianism: Consequentialist Ethics in Mozi and George Berkeley',
    venue: 'Conference on Ethics, Religion & Philosophy 2019, Tokyo',
    year: 2019,
    date: 'March',
    tags: ['Ethics', 'Non-Western & Comparative Philosophy', 'Philosophy of Religion']
  },
  {
    title: 'Representing Ourselves: Ecological Truth Claims and the Ontology of Deliberation',
    venue: 'New Zealand Political Science Association Conference, Victoria University of Wellington',
    year: 2018,
    date: 'November',
    tags: ['Social & Political Philosophy']
  },
  {
    title: 'Daoist Socialism: Althusser and Zhuangzi on Ideological State Apparatuses',
    venue: 'Australasian Society for Continental Philosophy Conference, Western Sydney University',
    year: 2018,
    date: 'November',
    tags: ['Social & Political Philosophy', 'Non-Western & Comparative Philosophy']
  },
  {
    title: 'Place-Based Reasons in Non-Western Thought',
    venue: '11th East-West Philosophers\' Conference: "Place", University of Hawaii',
    year: 2016,
    date: 'May',
    tags: ['Social & Political Philosophy', 'Non-Western & Comparative Philosophy']
  },
  {
    title: 'Edmund Burke and Green Political Thought: Environmental and Social Conservatisms',
    venue: 'Concerned Philosophers for Peace National Conference, California State University, Fresno',
    year: 2013,
    date: 'October',
    tags: ['Social & Political Philosophy', 'Environmental Philosophy']
  },
  {
    title: 'The Tensions of Cosmopolitan Theory: An Examination of Martha Nussbaum, Judith Butler, and Jonathan Rée',
    venue: 'Politics at the Limits of Civil Society, University of Guelph',
    year: 2013,
    date: 'September',
    tags: ['Social & Political Philosophy']
  },
];
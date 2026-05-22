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
  title: 'Critical Questions',
  description: 'I use this assignment in almost all of my courses. It a) pushes students to actually do the readings; b) encourages them to approach the readings in an engaged way; and c) when students can vote on which critical question will be the focus of the class discussion, pushes them to consider how to ask useful and productive questions in the first place.',
  link: '/pedagogy/Critical-Questions.pdf',
},
  {
  title: 'Philosophical Diary',
  description: 'Another assignment that finds its way into most of my courses. This assignment is great at getting students to find their own path into the material. Since I provide feedback on each diary, it also gives me a chance to model to the students what critical engagement looks like.',
  link: '/pedagogy/Philosophical-Diary.pdf',
},
{
  title: 'Class Discussions',
  description: 'This is my model for conducting class discussions. It draws significantly on p4cHI, and has been a successful mainstay of my courses.',
  link: '/pedagogy/Class-Discussions.pdf',
},
{
  title: 'Philosophy in the Wild',
  description: 'In this assignments, students discuss a philosophical question with someone outside of class, then reflect on the discussion (not the question, but the discussion itself). The main purpose of the assignment is not to merely develop students\' understanding of the course material (though it does do this), but rather to encourage them to take a metacognitive approach to what makes a philosophical discussion go well or go poorly. When students make a genuine attempt to do this assignment, they almost always report finding it both useful and enjoyable.',
  link: '/pedagogy/Philosophy-in-the-Wild.pdf',
},
{
  title: 'Discussion Revision',
  description: 'Here, students revise the transcript of a class discussion, with the aim of drawing out the underlying structure of the discussion. This is another assignment that aims at developing students\' metacognitive awareness. However, this is a tricky assignment, and easy to get wrong. Students will not do it well on the first try; they need at least two attempts in order to get the hang of it, ideally more.',
  link: '/pedagogy/Discussion-Revision.pdf',
},
{
  title: 'Living the Theory',
  description: 'I used this in a course on ethical theory (though it may perhaps be adaptable beyond that). The idea is that students try to live according to a theory for a day, and then reflect on what insights this has given them about the theory. So far, it has been quite effective, and students really enjoy it.',
  link: '/pedagogy/Living-the-Theory.pdf',
},
{
  title: 'Question Improvement',
  description: 'This assignment is used in tandem with the Critical Questions assignment. After submitting their questions, students are given a random set of the submitted questions and asked to make them better. I was amazed at the response I got when I introduced this assignment: students <em>really</em> responded to it, and were not shy about telling me how useful they found it.',
  link: '/pedagogy/Question-Improvement.pdf',
},
{
  title: 'AI-Mediated Reading Response',
  description: 'The purposes of this assignment are to simultaneously encourage students to dig deeper into the class material on their own, as well as consider how AI can be used (or not) to achieve this. I\'ve used it once, in a short course, and it was <em>moderately</em> successful, but I think it really needs to be iterative to work well. I hope to use it again in the future.',
  link: '/pedagogy/AI-Mediated-Reading-Response.pdf',
},
{
  title: 'Bridge Notes',
  description: 'The idea with Bridge Notes is to get students to go beyond the class material, but in a way that deepens their understanding of the class material through meaningful comparison. It also helps to develop their understanding of what a <em>philosophically useful</em> comparison of theories actually looks like.',
  link: '/pedagogy/Bridge-Notes.pdf',
},
{
  title: 'Debates',
  description: 'I call these "debates," but really they\'re more about learning how to make progress on a problem through disagreement: it is structured more like what we might call "adversarial collaboration." Students tend to really enjoy these. I give them time to prepare, set a timer, and then leave them to it. Often after the first one, I\'ll give them the chance to vote on whether to increase the length of time for the second: they always do.',
  link: '/pedagogy/Debates.pdf',
},
{
  title: 'Close Reading Presentations',
  description: 'Students are expected to pick up how to close-read a text, but rarely are they taught how to go about doing this. This assignment is my attempt to do this. The idea I foreground in this assignment is that a reading of a philosophical text is actually a kind of argument, where you are expected not to say what you think the text means, but rather to <em>persuade</em> others that your reading is the best one.',
  link: '/pedagogy/Close-Reading-Presentations.pdf',
},
{
  title: 'Scaffolded Response Papers',
  description: 'This is a simple but surprisingly effective assignment. In the first stage, students start by trying to briefly reconstruct the argument of a reading; the second time, they move on to pushing back at that argument; then in the third, they finish with a defence of the original argument against a criticism they raise. One key element is the way that it forces them to step back from their own opinions and criticism or defend an argument regardless of their own view. I\'ve done this with as few as three assignments (one for each step), but it works better with more.',
  link: '/pedagogy/Scaffolded-Response-Papers.pdf',
},
{
  title: 'Letters',
  description: 'This assignment was originally used in a course that aimed at helping students work out what they wanted to major in. The idea is to get them to think about the (non-instrumental) benefits of majoring in different subjects, by having them explain that discipline and its value to a friend or family member in a letter. However, I think it could be used more broadly, e.g. explaining the value of learning about a theory or exploring a particular philosophical question.',
  link: '/pedagogy/Letters.pdf',
},
{
  title: 'Questions Assignment',
  description: 'This is an extension of my Critical Questions assignment. By allowing students to sometimes choose to submit a "Clarificatory Question" instead of a "Critical Question," I could address some of the more common or widespread confusions about the assigned material at the beginning of class, allowing us to move into class discussions on a steadier footing. In essence, it\'s a way of trying to ensure that everyone is on the same page in a flipped classroom setting.',
  link: '/pedagogy/Questions-Assignment.pdf',
},
{
  title: 'Essay Introduction',
  description: 'This is a relatively straightforward assignment, in which students begin developing the introduction to their final paper earlier in the semester, then have that introduction peer-evaluated by other students. The point here is to both give them feedback on their own work before they start writing in earnest, as well as (through their review of other students) of what a well-structured introduction looks like. And because the introduction should set out their thesis and outline their argument, a well-structured introduction generally means a well-structured final paper.',
  link: '/pedagogy/Essay-Introduction.pdf',
},
{
  title: 'Spotlight & Shadow',
  description: 'This is an assignment for a course that helped students select their major. It probably only works in such a course, so the use-case is limited, but for this purpose I was <em>very</em> happy with how it went. The idea is, students are made to think about the nature of academic disciplines and what the different foci and methodologies of disciplines both illuminate and elide (hence "Spotlight" and "Shadow"). It also incidentally helps students develop research skills, for instance teaching them the difference between high and low quality journals.',
  link: '/pedagogy/Spotlight-and-Shadow.pdf',
},
];
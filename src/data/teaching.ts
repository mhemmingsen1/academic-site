// Courses and pedagogy.
//
// Course `title` stays English (catalogue entries in an English-medium college).
// Course `description` is translatable. `tags` reference KEYS from i18n/tags.ts.
// Pedagogy `title` and `description` are both translatable; `link` is not.
// HTML (e.g. <em>) is allowed in pedagogy descriptions (rendered set:html).
//
// Translatable prose fields are written multi-line (en/zh on their own lines)
// to make filling in translations easier. Fill the empty zh: '' values.

import type { Translatable } from '../i18n/t';
import type { TagKey } from '../i18n/tags';

export type Course = {
  title: string;                 // English
  description?: Translatable;
  tags?: TagKey[];
  syllabus?: string;
};

export type Pedagogy = {
  title: Translatable;
  description: Translatable;
  link?: string | Translatable;   // plain string, OR { en, zh } for per-language PDFs
};

export const courses: Course[] = [
  // Required
  {
    title: 'Leadership & Global Citizen for the 21st Century',
    tags: ['gened'],
    description: {
      en: 'Considers questions about cosmopolitanism, nationalism, immigration, borders, and global justice.',
      zh: '探討世界主義、民族主義、移民、邊界與全球正義等問題。',
    },
  },
  {
    title: 'Trends in Global Ecology & Environmental Change',
    tags: ['gened'],
    description: {
      en: 'Examination of environmental ethics, climate change, extinction, and humanity’s relationship with the natural world.',
      zh: '探討環境倫理、氣候變遷、物種滅絕，以及人類與自然世界之間的關係。',
    },
  },
  {
    title: 'Personal Identity in Historical Perspective',
    tags: ['gened'],
    description: {
      en: 'Study of personal identity, free will, selfhood, and moral responsibility.',
      zh: '探討人格同一性、自由意志、自我與道德責任等問題。',
    },
  },
  {
    title: 'Tunghai Academic Exploration',
    tags: ['gened'],
    description: {
      en: 'Introduction to the intellectual methods, assumptions, and perspectives of diverse academic disciplines',
      zh: '介紹不同學術領域的研究方法、核心問題與觀點。',
    },
  },
  {
    title: 'Indigenous Philosophy',
    tags: ['gened', 'nonwestern'],
    description: {
      en: 'Introduction to indigenous philosophical traditions and their approaches to questions concerning human beings, nature, community, and knowledge.',
      zh: '介紹原住民哲學傳統，以及其對人類、自然、社群與知識等問題的理解方式。',
    },
  },
  {
    title: 'Introduction to Philosophy',
    tags: ['gened'],
    description: {
      en: 'Topic-based introduction to philosophy through contemporary debates about free will, personal identity, skepticism, religion, consciousness, conspiracy theories, sport, and video games.',
      zh: '透過當代關於自由意志、人格同一性、懷疑論、宗教、意識、陰謀論、運動與電子遊戲的討論，作為哲學的主題式入門。',
    },
  },
  {
    title: 'Contemporary Ethical Problems',
    tags: ['gened', 'ethics'],
    description: {
      en: 'Topic-based introduction to applied ethics through debates about climate change, immigration, food ethics, robot ethics, reproduction, urban life, and space exploration.',
      zh: '透過氣候變遷、移民、飲食倫理、機器人倫理、生殖、都市生活與太空探索等議題的討論，作為應用倫理學的主題式入門。',
    },
  },
  {
    title: 'Introduction to Asian and Non-Western Philosophy',
    tags: ['gened', 'ethics', 'nonwestern'],
    description: {
      en: 'Introduction to Asian and non-Western philosophy, with particular emphasis on classical Chinese philosophy, Neo-Confucianism, and Indian philosophy.',
      zh: '介紹亞洲與非西方哲學，特別著重於中國古典哲學、新儒家與印度哲學。',
    },
  },
  {
    title: 'Critical Thinking',
    tags: ['gened'],
    description: {
      en: 'Introduction to argument analysis, logical reasoning, fallacies, evidence evaluation, and problem solving.',
      zh: '介紹論證分析、邏輯推理、謬誤、證據評估與問題解決。',
    },
  },

  // Honors
  {
    title: 'Understanding International Relations',
    tags: ['honors', 'political'],
    description: {
      en: 'Introduction to major approaches in international relations, including realism, liberalism, feminism, Marxism, and critical theory.',
      zh: '介紹國際關係理論中的主要取向，包括現實主義、自由主義、女性主義、馬克思主義與批判理論。',
    },
  },
  {
    title: 'Ethical Theory in Global Perspective',
    tags: ['honors', 'ethics', 'nonwestern'],
    description: {
      en: 'Examination of classical and contemporary ethical theories from both Western and non-Western philosophical traditions.',
      zh: '探討西方與非西方哲學傳統中的古典與當代倫理理論。',
    },
  },
  {
    title: 'Advertising and Consumer Society',
    tags: ['honors', 'media'],
    description: {
      en: 'Critical study of advertising, consumer culture, ideology, and commodification.',
      zh: '批判性探討廣告、消費文化、意識形態與商品化。',
    },
  },
  {
    title: 'The Problem of Evil',
    tags: ['honors', 'religion'],
    description: {
      en: 'Examination of evil, suffering, free will, and theodicy in philosophy of religion.',
      zh: '探討宗教哲學中的邪惡、苦難、自由意志與神義論。',
    },
  },

  // Electives
  {
    title: 'Esports, Speedrunning, and Video Games',
    tags: ['philtech'],
    description: {
      en: 'Study of esports, speedrunning, cheating, rules, metagames, and the philosophy of play and competition.',
      zh: '探討電子競技、速通、作弊、規則、元遊戲，以及遊戲與競爭的哲學。',
    },
  },
  {
    title: 'Punishment',
    tags: ['ethics', 'political'],
    description: {
      en: 'Study of retributivism, deterrence, rehabilitation, restorative justice, and the ethics of criminal punishment.',
      zh: '探討應報理論、嚇阻、矯正、修復式正義，以及刑罰倫理。',
    },
  },
  {
    title: 'The Philosophy of Video Games',
    tags: ['philtech'],
    description: {
      en: 'Examination of virtual ethics, the Gamer’s Dilemma, esports, and the philosophy of video games.',
      zh: '探討虛擬倫理、「玩家的兩難」（Gamer’s Dilemma）、電子競技與電子遊戲哲學。',
    },
  },
  {
    title: 'Chat-GPT and Philosophy',
    tags: ['philtech', 'ai'],
    description: {
      en: 'Study of artificial intelligence, consciousness, creativity, free will, and the ethical implications of large language models.',
      zh: '探討人工智慧、意識、創造力、自由意志，以及大型語言模型的倫理意涵。',
    },
  },
  {
    title: 'Exploring Alternate Worlds',
    tags: ['philtech', 'ai'],
    description: {
      en: 'Uses science fiction to examine questions about reality, artificial intelligence, transhumanism, and the future of humanity.',
      zh: '透過科幻作品探討現實、人工智慧、超人類主義與人類的未來等問題。',
    },
  },
  {
    title: 'The Philosophy of Sex and Relationships',
    tags: ['ethics'],
    description: {
      en: 'Examination of sex, sexuality, consent, relationships, polyamory, BDSM, and sexual ethics.',
      zh: '探討性、性慾、同意、關係、多元伴侶關係、BDSM 與性倫理。',
    },
  },
  {
    title: 'Thinking Through China',
    tags: ['nonwestern'],
    description: {
      en: 'Introduction to major traditions in Chinese philosophy, especially Confucianism and Daoism.',
      zh: '介紹中國哲學中的主要傳統，特別著重於儒家與道家思想。',
    },
  },
  {
    title: 'Korean Philosophy',
    tags: ['nonwestern'],
    description: {
      en: 'Introduction to traditional Korean philosophy, especially Confucianism.',
      zh: '介紹韓國傳統哲學，特別著重於儒家思想。',
    },
  },
  {
    title: 'Philosophy and Artificial Intelligence',
    tags: ['philtech', 'ai'],
    description: {
      en: 'Study of artificial intelligence, machine consciousness, automation, moral status, and the ethics of advanced computing technologies.',
      zh: '探討人工智慧、機器意識、自動化、道德地位，以及先進運算技術的倫理問題。',
    },
  },
  {
    title: 'The Philosophy of Harmony and Conflict',
    tags: ['political', 'nonwestern'],
    description: {
      en: 'Comparative study of the concepts of harmony and conflict in liberal, Marxist, Confucian, and Advaita Vedantic traditions.',
      zh: '比較自由主義、馬克思主義、儒家與不二論吠檀多傳統中的和諧與衝突概念。',
    },
  },
  {
    title: 'The Philosophy of Race, Class and Gender',
    tags: ['political', 'ethics'],
    description: {
      en: 'Examination of race, gender, and class through feminism, Marxism, embodiment theory, colonialism, and critical race theory.',
      zh: '透過女性主義、馬克思主義、具身理論、殖民主義與批判種族理論，探討種族、性別與階級問題。',
    },
  },
  {
    title: 'Chinese Ethics',
    tags: ['ethics', 'nonwestern'],
    description: {
      en: 'Historical introduction to Chinese ethical thought, including Confucianism, Daoism, Mohism, Legalism, and Neo-Confucianism.',
      zh: '歷史性介紹中國倫理思想，包括儒家、道家、墨家、法家與新儒家。',
    },
  },
  {
    title: 'Business Negotiation',
    tags: ['ethics'],
    description: {
      en: 'Philosophical examination of negotiation, strategic interaction, and the ethics of deception in business.',
      zh: '從哲學角度探討談判、策略互動，以及商業中的欺瞞倫理。',
    },
  },
  {
    title: 'Business Ethics',
    tags: ['ethics'],
    description: {
      en: 'Examination of ethical issues in business, including capitalism, corporations, consumers, the environment, discrimination, and the workplace.',
      zh: '探討商業中的倫理問題，包括資本主義、企業、消費者、環境、歧視與職場。',
    },
  },

  // Earlier
  {
    title: 'Media Theory and Cultural Production',
    tags: ['media'],
    description: {
      en: 'Study of media and cultural theory through critical theory, the culture industry, the public sphere, postmodernism, nationalism, globalization, and networked identity.',
      zh: '透過批判理論、文化工業、公共領域、後現代主義、民族主義、全球化與網絡身分認同等主題，探討媒介與文化理論。',
    },
  },
  {
    title: 'International Relations Theory',
    tags: ['political'],
    description: {
      en: 'Study of critical approaches to international relations theory, including Marxism, critical theory, post-structuralism, feminism, psychoanalysis, and postcolonialism.',
      zh: '探討國際關係理論中的批判取向，包括馬克思主義、批判理論、後結構主義、女性主義、精神分析與後殖民主義。',
    },
  },
  {
    title: 'Virtue and Human Nature in World Philosophy',
    tags: ['ethics', 'nonwestern'],
    description: {
      en: 'Comparative study of virtue, human nature, and ethical life across Greek, Chinese, Indian, Māori, and African philosophical traditions',
      zh: '比較希臘、中國、印度、毛利與非洲哲學傳統中的德性、人性與倫理生活。',
    },
  },
  {
    title: 'Popular Culture and the Media',
    tags: ['media'],
    description: {
      en: 'Critical introduction to popular culture and media theory through topics such as television, sport, music, fashion, social media, and video games.',
      zh: '透過電視、運動、音樂、時尚、社群媒體與電子遊戲等主題，批判性介紹流行文化與媒介理論。',
    },
  },
  {
    title: 'Hollywood Cinema',
    tags: ['media'],
    description: {
      en: 'Examination of the economic, political, technological, and aesthetic developments shaping contemporary Hollywood cinema.',
      zh: '探討塑造當代好萊塢電影的經濟、政治、科技與美學發展。',
    },
  },
];

export const pedagogy: Pedagogy[] = [
  {
    title: {
      en: 'Critical Questions',
      zh: '批判性提問',
    },
    description: {
      en: 'I use this assignment in almost all of my courses. It a) pushes students to actually do the readings; b) encourages them to approach the readings in an engaged way; and c) when students can vote on which critical question will be the focus of the class discussion, pushes them to consider how to ask useful and productive questions in the first place.',
      zh: '這個作業幾乎出現在我所有的課程中。它 a) 促使學生確實去閱讀文本；b) 鼓勵他們以更投入的方式面對閱讀內容；以及 c) 當學生可以投票決定哪一個批判性提問將成為課堂討論的核心時，也會進一步促使他們思考：究竟什麼樣的問題才是真正有助於思考與討論的問題。',
    },
    link: {
      en: '/pedagogy/Critical-Questions.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Philosophical Diary',
      zh: '哲學日誌',
    },
    description: {
      en: 'Another assignment that finds its way into most of my courses. This assignment is great at getting students to find their own path into the material. Since I provide feedback on each diary, it also gives me a chance to model to the students what critical engagement looks like.',
      zh: '這也是一個經常出現在我課程中的作業。它很能幫助學生找到自己進入課程內容的方式。由於我會對每篇日誌提供回饋，因此這個作業同時也讓我有機會向學生示範：所謂真正的批判性思考與投入，實際上會是什麼樣子。',
    },
    link: {
      en: '/pedagogy/Philosophical-Diary.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Class Discussions',
      zh: '課堂討論',
    },
    description: {
      en: 'This is my model for conducting class discussions. It draws significantly on p4cHI, and has been a successful mainstay of my courses.',
      zh: '這是我進行課堂討論時所採用的基本模式。它相當程度受到 p4cHI 的影響，並且長期以來都是我課程中相當成功的一個核心元素。',
    },
    link: {
      en: '/pedagogy/Class-Discussions.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Philosophy in the Wild',
      zh: '哲學走出教室',
    },
    description: {
      en: 'In this assignments, students discuss a philosophical question with someone outside of class, then reflect on the discussion (not the question, but the discussion itself). The main purpose of the assignment is not to merely develop students\' understanding of the course material (though it does do this), but rather to encourage them to take a metacognitive approach to what makes a philosophical discussion go well or go poorly. When students make a genuine attempt to do this assignment, they almost always report finding it both useful and enjoyable.',
      zh: '在這個作業中，學生需要與課堂之外的人討論一個哲學問題，之後再針對這場討論本身進行反思（重點不是那個問題，而是這場討論本身）。這個作業的主要目的，不只是幫助學生更理解課程內容（雖然它確實也能做到這點），更是希望他們去思考：究竟是什麼讓一場哲學討論進行得順利，或是不順利。只要學生是真正認真去做這個作業，他們幾乎都會認為它既有收穫，也很有趣。',
    },
    link: {
      en: '/pedagogy/Philosophy-in-the-Wild.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Discussion Revision',
      zh: '討論修訂',
    },
    description: {
      en: 'Here, students revise the transcript of a class discussion, with the aim of drawing out the underlying structure of the discussion. This is another assignment that aims at developing students\' metacognitive awareness. However, this is a tricky assignment, and easy to get wrong. Students will not do it well on the first try; they need at least two attempts in order to get the hang of it, ideally more.',
      zh: '在這個作業中，學生需要修訂一份課堂討論逐字稿，目的是將討論背後的結構與脈絡整理並呈現出來。這也是一個希望學生更理解討論本身是如何運作的作業。不過，這其實是一個相當困難、也很容易做不好的作業。學生第一次做通常不會做得很好；他們至少需要做兩次，最好更多次，才會真正掌握其中的要領。',
    },
    link: {
      en: '/pedagogy/Discussion-Revision.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Living the Theory',
      zh: '活出理論',
    },
    description: {
      en: 'I used this in a course on ethical theory (though it may perhaps be adaptable beyond that). The idea is that students try to live according to a theory for a day, and then reflect on what insights this has given them about the theory. So far, it has been quite effective, and students really enjoy it.',
      zh: '我是在一門倫理學理論課中使用這個作業的（雖然它或許也可以調整後用在其他課程）。這個作業的核心概念，是讓學生試著依照某一套理論生活一天，之後再反思：這樣的經驗讓他們對這套理論有了哪些新的理解。到目前為止，它的效果相當不錯，而且學生也真的很喜歡這個作業。',
    },
    link: {
      en: '/pedagogy/Living-the-Theory.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Question Improvement',
      zh: '問題改進',
    },
    description: {
      en: 'This assignment is used in tandem with the Critical Questions assignment. After submitting their questions, students are given a random set of the submitted questions and asked to make them better. I was amazed at the response I got when I introduced this assignment: students <em>really</em> responded to it, and were not shy about telling me how useful they found it.',
      zh: '這個作業是與「批判性提問」作業搭配使用的。在學生提交問題之後，他們會隨機收到其他學生提交的一組問題，並被要求將這些問題改得更好。我在第一次使用這個作業時，學生的反應讓我非常驚訝：他們對這個作業的投入程度真的很高，而且也毫不避諱地告訴我，他們覺得這個作業非常有幫助。',
    },
    link: {
      en: '/pedagogy/Question-Improvement.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'AI-Mediated Reading Response',
      zh: 'AI 輔助閱讀回應',
    },
    description: {
      en: 'The purposes of this assignment are to simultaneously encourage students to dig deeper into the class material on their own, as well as consider how AI can be used (or not) to achieve this. I\'ve used it once, in a short course, and it was <em>moderately</em> successful, but I think it really needs to be iterative to work well. I hope to use it again in the future.',
      zh: '這個作業的目的，一方面是鼓勵學生主動更深入地探索課程內容，另一方面則是希望他們思考：AI 可以（或不能）如何被用來達成這件事。我目前只在一門短期課程中使用過一次。它的效果算是 <em>中等程度</em> 的成功，但我認為這類作業需要透過反覆實作與修正，才能真正發揮效果。未來我希望能再次使用它。',
    },
    link: {
      en: '/pedagogy/AI-Mediated-Reading-Response.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Bridge Notes',
      zh: '連結筆記',
    },
    description: {
      en: 'The idea with Bridge Notes is to get students to go beyond the class material, but in a way that deepens their understanding of the class material through meaningful comparison. It also helps to develop their understanding of what a <em>philosophically useful</em> comparison of theories actually looks like.',
      zh: '「連結筆記」這個作業的核心概念，是希望學生能超越課堂本身的內容，但又不是單純地離題，而是透過有意義的比較，反過來加深他們對課程內容的理解。它同時也有助於學生理解：什麼樣的理論比較，才算是真正 <em>具有哲學意義</em> 的比較。',
    },
    link: {
      en: '/pedagogy/Bridge-Notes.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Debates',
      zh: '辯論',
    },
    description: {
      en: 'I call these "debates," but really they\'re more about learning how to make progress on a problem through disagreement: it is structured more like what we might call "adversarial collaboration." Students tend to really enjoy these. I give them time to prepare, set a timer, and then leave them to it. Often after the first one, I\'ll give them the chance to vote on whether to increase the length of time for the second: they always do.',
      zh: '我把這些活動稱作「辯論」，但實際上，它們更接近一種透過分歧來推進問題理解的方式；其結構其實更像我們所謂的「對抗式合作」（adversarial collaboration）。學生通常都非常喜歡這個活動。我會先給他們準備時間、設定計時器，之後基本上就交給他們自己進行。通常在第一次之後，我會讓他們投票決定第二次是否要延長時間：而他們總是會選擇延長。',
    },
    link: {
      en: '/pedagogy/Debates.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Close Reading Presentations',
      zh: '細讀報告',
    },
    description: {
      en: 'Students are expected to pick up how to close-read a text, but rarely are they taught how to go about doing this. This assignment is my attempt to do this. The idea I foreground in this assignment is that a reading of a philosophical text is actually a kind of argument, where you are expected not to say what you think the text means, but rather to <em>persuade</em> others that your reading is the best one.',
      zh: '學生通常被期待能學會如何細讀文本，但卻很少有人真正教他們應該怎麼做。這個作業就是我對這個問題的一種回應。在這個作業中，我特別強調的一點是：對哲學文本的閱讀，其實本身就是一種論證。你的任務不是單純說明你認為文本是什麼意思，而是要 <em>說服</em> 其他人：你的詮釋為什麼才是最好的詮釋。',
    },
    link: {
      en: '/pedagogy/Close-Reading-Presentations.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Scaffolded Response Papers',
      zh: '階段式回應論文',
    },
    description: {
      en: 'This is a simple but surprisingly effective assignment. In the first stage, students start by trying to briefly reconstruct the argument of a reading; the second time, they move on to pushing back at that argument; then in the third, they finish with a defence of the original argument against a criticism they raise. One key element is the way that it forces them to step back from their own opinions and criticism or defend an argument regardless of their own view. I\'ve done this with as few as three assignments (one for each step), but it works better with more.',
      zh: '這是一個簡單，但效果出乎意料地好的作業。在第一階段，學生需要先簡要重建文本中的論證；第二次則進一步對該論證提出批評；到了第三次，則需要替原本的論證辯護，回應自己先前提出的批評。這個作業其中一個關鍵點，在於它迫使學生暫時抽離自己的立場，不論他們實際上是否同意，都必須去批評或捍衛某個論證。我曾經只用三次作業完成這整個流程（每個階段一次），但如果次數更多，效果通常會更好。',
    },
    link: {
      en: '/pedagogy/Scaffolded-Response-Papers.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Letters',
      zh: '書信',
    },
    description: {
      en: 'This assignment was originally used in a course that aimed at helping students work out what they wanted to major in. The idea is to get them to think about the (non-instrumental) benefits of majoring in different subjects, by having them explain that discipline and its value to a friend or family member in a letter. However, I think it could be used more broadly, e.g. explaining the value of learning about a theory or exploring a particular philosophical question.',
      zh: '這個作業原本是用在一門幫助學生思考自己想主修什麼的課程中。它的核心概念，是讓學生透過寫信給朋友或家人的方式，說明某個學科及其價值，藉此思考主修不同領域所帶來的（非工具性的）收穫。不過，我認為這個作業其實也可以更廣泛地使用，例如讓學生去說明：學習某一套理論，或探討某個哲學問題，究竟有什麼價值。',
    },
    link: {
      en: '/pedagogy/Letters.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Questions Assignment',
      zh: '問題作業',
    },
    description: {
      en: 'This is an extension of my Critical Questions assignment. By allowing students to sometimes choose to submit a "Clarificatory Question" instead of a "Critical Question," I could address some of the more common or widespread confusions about the assigned material at the beginning of class, allowing us to move into class discussions on a steadier footing. In essence, it\'s a way of trying to ensure that everyone is on the same page in a flipped classroom setting.',
      zh: '這是我「批判性提問」作業的一個延伸版本。透過讓學生有時可以選擇提交「澄清性問題」（Clarificatory Question），而不一定只能提交「批判性提問」，我便能在課堂一開始先處理一些學生對指定閱讀中較常見、或較普遍的困惑，讓之後的課堂討論能建立在更穩固的基礎上。基本上，這是一種在翻轉教室模式下，嘗試確保所有人都能跟上課程進度的方法。',
    },
    link: {
      en: '/pedagogy/Questions-Assignment.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Essay Introduction',
      zh: '論文導論',
    },
    description: {
      en: 'This is a relatively straightforward assignment, in which students begin developing the introduction to their final paper earlier in the semester, then have that introduction peer-evaluated by other students. The point here is to both give them feedback on their own work before they start writing in earnest, as well as (through their review of other students) of what a well-structured introduction looks like. And because the introduction should set out their thesis and outline their argument, a well-structured introduction generally means a well-structured final paper.',
      zh: '這是一個相對直接的作業。在學期較早的階段，學生就需要開始撰寫期末論文的導論，之後再由其他學生進行同儕評閱。這個作業的目的，一方面是讓學生在正式開始寫作之前，就能先獲得對自己作品的回饋；另一方面，也讓他們透過閱讀與評論其他學生的作品，更理解一篇結構良好的導論應該是什麼樣子。由於導論本身應該清楚提出論題並概述論證，因此，一篇結構良好的導論，通常也意味著一篇結構良好的期末論文。',
    },
    link: {
      en: '/pedagogy/Essay-Introduction.pdf',
      zh: '',
    },
  },
  {
    title: {
      en: 'Spotlight & Shadow',
      zh: '聚光與陰影',
    },
    description: {
      en: 'This is an assignment for a course that helped students select their major. It probably only works in such a course, so the use-case is limited, but for this purpose I was <em>very</em> happy with how it went. The idea is, students are made to think about the nature of academic disciplines and what the different foci and methodologies of disciplines both illuminate and elide (hence "Spotlight" and "Shadow"). It also incidentally helps students develop research skills, for instance teaching them the difference between high and low quality journals.',
      zh: '這是一個用在協助學生選擇主修的課程中的作業。它大概只適合用在這類課程裡，因此適用範圍其實相當有限；不過，就這個用途而言，我對它的效果感到 <em>非常</em> 滿意。這個作業的核心概念，是讓學生去思考學科的本質，以及不同學科的關注焦點與研究方法，究竟會照亮什麼、又會遮蔽什麼（這也正是「聚光」與「陰影」這個名稱的由來）。此外，它也會順帶幫助學生培養一些研究能力，例如讓他們學會區分高品質與低品質的學術期刊。',
    },
    link: {
      en: '/pedagogy/Spotlight-and-Shadow.pdf',
      zh: '',
    },
  },
];
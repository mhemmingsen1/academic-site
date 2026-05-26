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
  title: string;
  description?: Translatable;
  tags?: TagKey[];
  syllabus?: string;
};

export type Pedagogy = {
  title: Translatable;
  description: Translatable;
  link?: string | Translatable;
};

export const courses: Course[] = [
  // Required
  {
    title: 'Leadership & Global Citizen for the 21st Century',
    tags: ['gened'],
    description: {
      en: 'Considers questions about cosmopolitanism, nationalism, immigration, borders, and global justice.',
      zh: '探討世界主義、民族主義、移民、邊界與全球正義等問題。',
      ja: 'コスモポリタニズム、ナショナリズム、移民、国境、グローバル・ジャスティスをめぐる諸問題を考察する。',
    },
  },
  {
    title: 'Trends in Global Ecology & Environmental Change',
    tags: ['gened'],
    description: {
      en: 'Examination of environmental ethics, climate change, extinction, and humanity’s relationship with the natural world.',
      zh: '探討環境倫理、氣候變遷、物種滅絕，以及人類與自然世界之間的關係。',
      ja: '環境倫理、気候変動、絶滅、人類と自然世界との関係を考察する。',
    },
  },
  {
    title: 'Personal Identity in Historical Perspective',
    tags: ['gened'],
    description: {
      en: 'Study of personal identity, free will, selfhood, and moral responsibility.',
      zh: '探討人格同一性、自由意志、自我與道德責任等問題。',
      ja: '人格同一性、自由意志、自己、道徳的責任を考察する。',
    },
  },
  {
    title: 'Tunghai Academic Exploration',
    tags: ['gened'],
    description: {
      en: 'Introduction to the intellectual methods, assumptions, and perspectives of diverse academic disciplines',
      zh: '介紹不同學術領域的研究方法、核心問題與觀點。',
      ja: '多様な学問分野における研究方法、中心的問題、視点を紹介する。',
    },
  },
  {
    title: 'Indigenous Philosophy',
    tags: ['gened', 'nonwestern'],
    description: {
      en: 'Introduction to indigenous philosophical traditions and their approaches to questions concerning human beings, nature, community, and knowledge.',
      zh: '介紹原住民哲學傳統，以及其對人類、自然、社群與知識等問題的理解方式。',
      ja: '先住民哲学の伝統と、人間、自然、共同体、知識に関する問いへのそのアプローチを紹介する。',
    },
  },
  {
    title: 'Introduction to Philosophy',
    tags: ['gened'],
    description: {
      en: 'Topic-based introduction to philosophy through contemporary debates about free will, personal identity, skepticism, religion, consciousness, conspiracy theories, sport, and video games.',
      zh: '透過當代關於自由意志、人格同一性、懷疑論、宗教、意識、陰謀論、運動與電子遊戲的討論，作為哲學的主題式入門。',
      ja: '自由意志、人格同一性、懐疑論、宗教、意識、陰謀論、スポーツ、ビデオゲームをめぐる現代的議論を通じた、トピック別の哲学入門。',
    },
  },
  {
    title: 'Contemporary Ethical Problems',
    tags: ['gened', 'ethics'],
    description: {
      en: 'Topic-based introduction to applied ethics through debates about climate change, immigration, food ethics, robot ethics, reproduction, urban life, and space exploration.',
      zh: '透過氣候變遷、移民、飲食倫理、機器人倫理、生殖、都市生活與太空探索等議題的討論，作為應用倫理學的主題式入門。',
      ja: '気候変動、移民、食の倫理、ロボット倫理、生殖、都市生活、宇宙探査をめぐる議論を通じた、応用倫理学へのトピック別入門。',
    },
  },
  {
    title: 'Introduction to Asian and Non-Western Philosophy',
    tags: ['gened', 'ethics', 'nonwestern'],
    description: {
      en: 'Introduction to Asian and non-Western philosophy, with particular emphasis on classical Chinese philosophy, Neo-Confucianism, and Indian philosophy.',
      zh: '介紹亞洲與非西方哲學，特別著重於中國古典哲學、新儒家與印度哲學。',
      ja: 'アジアおよび非西洋哲学を紹介し、とりわけ中国古典哲学、新儒学、インド哲学に重点を置く。',
    },
  },
  {
    title: 'Critical Thinking',
    tags: ['gened'],
    description: {
      en: 'Introduction to argument analysis, logical reasoning, fallacies, evidence evaluation, and problem solving.',
      zh: '介紹論證分析、邏輯推理、謬誤、證據評估與問題解決。',
      ja: '論証分析、論理的推論、誤謬、証拠評価、問題解決を紹介する。',
    },
  },

  // Honors
  {
    title: 'Understanding International Relations',
    tags: ['honors', 'political'],
    description: {
      en: 'Introduction to major approaches in international relations, including realism, liberalism, feminism, Marxism, and critical theory.',
      zh: '介紹國際關係理論中的主要取向，包括現實主義、自由主義、女性主義、馬克思主義與批判理論。',
      ja: '現実主義、自由主義、フェミニズム、マルクス主義、批判理論を含む、国際関係論の主要なアプローチを紹介する。',
    },
  },
  {
    title: 'Ethical Theory in Global Perspective',
    tags: ['honors', 'ethics', 'nonwestern'],
    description: {
      en: 'Examination of classical and contemporary ethical theories from both Western and non-Western philosophical traditions.',
      zh: '探討西方與非西方哲學傳統中的古典與當代倫理理論。',
      ja: '西洋および非西洋哲学の伝統における古典的・現代的倫理理論を考察する。',
    },
  },
  {
    title: 'Advertising and Consumer Society',
    tags: ['honors', 'media'],
    description: {
      en: 'Critical study of advertising, consumer culture, ideology, and commodification.',
      zh: '批判性探討廣告、消費文化、意識形態與商品化。',
      ja: '広告、消費文化、イデオロギー、商品化を批判的に考察する。',
    },
  },
  {
    title: 'The Problem of Evil',
    tags: ['honors', 'religion'],
    description: {
      en: 'Examination of evil, suffering, free will, and theodicy in philosophy of religion.',
      zh: '探討宗教哲學中的邪惡、苦難、自由意志與神義論。',
      ja: '宗教哲学における悪、苦しみ、自由意志、神義論を考察する。',
    },
  },

  // Electives
  {
    title: 'Esports, Speedrunning, and Video Games',
    tags: ['philtech'],
    description: {
      en: 'Study of esports, speedrunning, cheating, rules, metagames, and the philosophy of play and competition.',
      zh: '探討電子競技、速通、作弊、規則、元遊戲，以及遊戲與競爭的哲學。',
      ja: 'eスポーツ、スピードラン、不正行為、ルール、メタゲーム、遊びと競争の哲学を考察する。',
    },
  },
  {
    title: 'Punishment',
    tags: ['ethics', 'political'],
    description: {
      en: 'Study of retributivism, deterrence, rehabilitation, restorative justice, and the ethics of criminal punishment.',
      zh: '探討應報理論、嚇阻、矯正、修復式正義，以及刑罰倫理。',
      ja: '応報主義、抑止、更生、修復的正義、刑罰倫理を考察する。',
    },
  },
  {
    title: 'The Philosophy of Video Games',
    tags: ['philtech'],
    description: {
      en: 'Examination of virtual ethics, the Gamer’s Dilemma, esports, and the philosophy of video games.',
      zh: '探討虛擬倫理、「玩家的兩難」（Gamer’s Dilemma）、電子競技與電子遊戲哲學。',
      ja: 'ヴァーチャル倫理、ゲーマーズ・ディレンマ、eスポーツ、ビデオゲーム哲学を考察する。',
    },
  },
  {
    title: 'Chat-GPT and Philosophy',
    tags: ['philtech', 'ai'],
    description: {
      en: 'Study of artificial intelligence, consciousness, creativity, free will, and the ethical implications of large language models.',
      zh: '探討人工智慧、意識、創造力、自由意志，以及大型語言模型的倫理意涵。',
      ja: '人工知能、意識、創造性、自由意志、大規模言語モデルの倫理的含意を考察する。',
    },
  },
  {
    title: 'Exploring Alternate Worlds',
    tags: ['philtech', 'ai'],
    description: {
      en: 'Uses science fiction to examine questions about reality, artificial intelligence, transhumanism, and the future of humanity.',
      zh: '透過科幻作品探討現實、人工智慧、超人類主義與人類的未來等問題。',
      ja: 'サイエンス・フィクションを通じて、現実、人工知能、トランスヒューマニズム、人類の未来をめぐる諸問題を考察する。',
    },
  },
  {
    title: 'The Philosophy of Sex and Relationships',
    tags: ['ethics'],
    description: {
      en: 'Examination of sex, sexuality, consent, relationships, polyamory, BDSM, and sexual ethics.',
      zh: '探討性、性慾、同意、關係、多元伴侶關係、BDSM 與性倫理。',
      ja: '性、セクシュアリティ、同意、関係性、ポリアモリー、BDSM、性倫理を考察する。',
    },
  },
  {
    title: 'Thinking Through China',
    tags: ['nonwestern'],
    description: {
      en: 'Introduction to major traditions in Chinese philosophy, especially Confucianism and Daoism.',
      zh: '介紹中國哲學中的主要傳統，特別著重於儒家與道家思想。',
      ja: '中国哲学の主要な伝統を紹介し、とりわけ儒教と道教に重点を置く。',
    },
  },
  {
    title: 'Korean Philosophy',
    tags: ['nonwestern'],
    description: {
      en: 'Introduction to traditional Korean philosophy, especially Confucianism.',
      zh: '介紹韓國傳統哲學，特別著重於儒家思想。',
      ja: '韓国の伝統哲学を紹介し、とりわけ儒教に重点を置く。',
    },
  },
  {
    title: 'Philosophy and Artificial Intelligence',
    tags: ['philtech', 'ai'],
    description: {
      en: 'Study of artificial intelligence, machine consciousness, automation, moral status, and the ethics of advanced computing technologies.',
      zh: '探討人工智慧、機器意識、自動化、道德地位，以及先進運算技術的倫理問題。',
      ja: '人工知能、機械意識、自動化、道徳的地位、高度計算技術の倫理を考察する。',
    },
  },
  {
    title: 'The Philosophy of Harmony and Conflict',
    tags: ['political', 'nonwestern'],
    description: {
      en: 'Comparative study of the concepts of harmony and conflict in liberal, Marxist, Confucian, and Advaita Vedantic traditions.',
      zh: '比較自由主義、馬克思主義、儒家與不二論吠檀多傳統中的和諧與衝突概念。',
      ja: '自由主義、マルクス主義、儒教、アドヴァイタ・ヴェーダーンタにおける調和と対立の概念を比較検討する。',
    },
  },
  {
    title: 'The Philosophy of Race, Class and Gender',
    tags: ['political', 'ethics'],
    description: {
      en: 'Examination of race, gender, and class through feminism, Marxism, embodiment theory, colonialism, and critical race theory.',
      zh: '透過女性主義、馬克思主義、具身理論、殖民主義與批判種族理論，探討種族、性別與階級問題。',
      ja: 'フェミニズム、マルクス主義、身体化理論、植民地主義、批判的人種理論を通じて、人種、ジェンダー、階級を考察する。',
    },
  },
  {
    title: 'Chinese Ethics',
    tags: ['ethics', 'nonwestern'],
    description: {
      en: 'Historical introduction to Chinese ethical thought, including Confucianism, Daoism, Mohism, Legalism, and Neo-Confucianism.',
      zh: '歷史性介紹中國倫理思想，包括儒家、道家、墨家、法家與新儒家。',
      ja: '儒教、道教、墨家、法家、新儒学を含む、中国倫理思想を歴史的に紹介する。',
    },
  },
  {
    title: 'Business Negotiation',
    tags: ['ethics'],
    description: {
      en: 'Philosophical examination of negotiation, strategic interaction, and the ethics of deception in business.',
      zh: '從哲學角度探討談判、策略互動，以及商業中的欺瞞倫理。',
      ja: '交渉、戦略的相互作用、ビジネスにおける欺瞞の倫理を哲学的に考察する。',
    },
  },
  {
    title: 'Business Ethics',
    tags: ['ethics'],
    description: {
      en: 'Examination of ethical issues in business, including capitalism, corporations, consumers, the environment, discrimination, and the workplace.',
      zh: '探討商業中的倫理問題，包括資本主義、企業、消費者、環境、歧視與職場。',
      ja: '資本主義、企業、消費者、環境、差別、職場を含む、ビジネスにおける倫理的問題を考察する。',
    },
  },

  // Earlier
  {
    title: 'Media Theory and Cultural Production',
    tags: ['media'],
    description: {
      en: 'Study of media and cultural theory through critical theory, the culture industry, the public sphere, postmodernism, nationalism, globalization, and networked identity.',
      zh: '透過批判理論、文化工業、公共領域、後現代主義、民族主義、全球化與網絡身分認同等主題，探討媒介與文化理論。',
      ja: '批判理論、文化産業、公共圏、ポストモダニズム、ナショナリズム、グローバル化、ネットワーク化されたアイデンティティを通じて、メディアおよび文化理論を考察する。',
    },
  },
  {
    title: 'International Relations Theory',
    tags: ['political'],
    description: {
      en: 'Study of critical approaches to international relations theory, including Marxism, critical theory, post-structuralism, feminism, psychoanalysis, and postcolonialism.',
      zh: '探討國際關係理論中的批判取向，包括馬克思主義、批判理論、後結構主義、女性主義、精神分析與後殖民主義。',
      ja: 'マルクス主義、批判理論、ポスト構造主義、フェミニズム、精神分析、ポストコロニアリズムを含む、国際関係論における批判的アプローチを考察する。',
    },
  },
  {
    title: 'Virtue and Human Nature in World Philosophy',
    tags: ['ethics', 'nonwestern'],
    description: {
      en: 'Comparative study of virtue, human nature, and ethical life across Greek, Chinese, Indian, Māori, and African philosophical traditions',
      zh: '比較希臘、中國、印度、毛利與非洲哲學傳統中的德性、人性與倫理生活。',
      ja: 'ギリシャ、中国、インド、マオリ、アフリカの哲学伝統における徳、人間本性、倫理的生を比較検討する。',
    },
  },
  {
    title: 'Popular Culture and the Media',
    tags: ['media'],
    description: {
      en: 'Critical introduction to popular culture and media theory through topics such as television, sport, music, fashion, social media, and video games.',
      zh: '透過電視、運動、音樂、時尚、社群媒體與電子遊戲等主題，批判性介紹流行文化與媒介理論。',
      ja: 'テレビ、スポーツ、音楽、ファッション、ソーシャルメディア、ビデオゲームを題材として、ポピュラー文化とメディア理論を批判的に紹介する。',
    },
  },
  {
    title: 'Hollywood Cinema',
    tags: ['media'],
    description: {
      en: 'Examination of the economic, political, technological, and aesthetic developments shaping contemporary Hollywood cinema.',
      zh: '探討塑造當代好萊塢電影的經濟、政治、科技與美學發展。',
      ja: '現代ハリウッド映画を形作ってきた経済的・政治的・技術的・美学的展開を考察する。',
    },
  },
];

export const pedagogy: Pedagogy[] = [
  {
    title: {
      en: 'Critical Questions',
      zh: '批判性提問',
      ja: '批判的質問',
    },
    description: {
      en: 'I use this assignment in almost all of my courses. It a) pushes students to actually do the readings; b) encourages them to approach the readings in an engaged way; and c) when students can vote on which critical question will be the focus of the class discussion, pushes them to consider how to ask useful and productive questions in the first place.',
      zh: '這個作業幾乎出現在我所有的課程中。它 a) 促使學生確實去閱讀文本；b) 鼓勵他們以更投入的方式面對閱讀內容；以及 c) 當學生可以投票決定哪一個批判性提問將成為課堂討論的核心時，也會進一步促使他們思考：究竟什麼樣的問題才是真正有助於思考與討論的問題。',
      ja: 'この課題は、ほとんどすべての授業で用いている。a) 学生に実際に文献を読ませること、b) より積極的に文献へ取り組むよう促すこと、そして c) どの批判的質問を授業討論の中心にするかを学生自身に選ばせることで、そもそも有益で生産的な問いとはどのようなものかを考えさせること、を目的としている。',
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
      ja: '哲学日誌',
    },
    description: {
      en: 'Another assignment that finds its way into most of my courses. This assignment is great at getting students to find their own path into the material. Since I provide feedback on each diary, it also gives me a chance to model to the students what critical engagement looks like.',
      zh: '這也是一個經常出現在我課程中的作業。它很能幫助學生找到自己進入課程內容的方式。由於我會對每篇日誌提供回饋，因此這個作業同時也讓我有機會向學生示範：所謂真正的批判性思考與投入，實際上會是什麼樣子。',
      ja: 'これも、多くの授業で用いている課題の一つである。この課題は、学生が自分なりの視点から授業内容に取り組むうえで、かなり効果的に機能している。また、各日誌に対して私自身がフィードバックを行うため、批判的に考え、議論に関わるとはどういうことかを学生に示す機会にもなっている。',
    },
    link: {
      en: '/pedagogy/Philosophical-Diary.pdf',
      zh: '/pedagogy/zh/Philosophical-Diary.pdf',
      ja: '/pedagogy/ja/Philosophical-Diary.pdf',
    },
  },
  {
    title: {
      en: 'Class Discussions',
      zh: '課堂討論',
      ja: '授業討論',
    },
    description: {
      en: 'This is my model for conducting class discussions. It draws significantly on p4cHI, and has been a successful mainstay of my courses.',
      zh: '這是我進行課堂討論時所採用的基本模式。它相當程度受到 p4cHI 的影響，並且長期以來都是我課程中相當成功的一個核心元素。',
      ja: 'これは、私が授業討論を行う際の基本的なモデルである。p4cHI の影響を強く受けており、長年にわたって授業の中核的な要素となっている。',
    },
    link: {
      en: '/pedagogy/Class-Discussions.pdf',
      zh: '/pedagogy/zh/Class-Discussions.pdf',
      ja: '/pedagogy/ja/Class-Discussions.pdf',
    },
  },
  {
    title: {
      en: 'Philosophy in the Wild',
      zh: '哲學走出教室',
      ja: '哲学を日常へ',
    },
    description: {
      en: 'In this assignments, students discuss a philosophical question with someone outside of class, then reflect on the discussion (not the question, but the discussion itself). The main purpose of the assignment is not to merely develop students\' understanding of the course material (though it does do this), but rather to encourage them to take a metacognitive approach to what makes a philosophical discussion go well or go poorly. When students make a genuine attempt to do this assignment, they almost always report finding it both useful and enjoyable.',
      zh: '在這個作業中，學生需要與課堂之外的人討論一個哲學問題，之後再針對這場討論本身進行反思（重點不是那個問題，而是這場討論本身）。這個作業的主要目的，不只是幫助學生更理解課程內容（雖然它確實也能做到這點），更是希望他們去思考：究竟是什麼讓一場哲學討論進行得順利，或是不順利。只要學生是真正認真去做這個作業，他們幾乎都會認為它既有收穫，也很有趣。',
      ja: 'この課題では、学生は授業外の誰かと哲学的な問いについて議論し、その後、その問いそのものではなく「議論そのもの」について振り返りを行う。この課題の主な目的は、単に授業内容への理解を深めることだけではない（もちろん、その効果もある）。むしろ、哲学的議論がうまく進むのはどのような場合か、あるいは逆に何が議論をうまくいかなくさせるのかについて、メタ的に考える姿勢を身につけてもらうことにある。学生がきちんと取り組んだ場合、この課題は有益であると同時に、楽しめるものだったという反応がほとんどである。',
    },
    link: {
      en: '/pedagogy/Philosophy-in-the-Wild.pdf',
      zh: '/pedagogy/zh/Philosophy-in-the-Wild.pdf',
      ja: '/pedagogy/ja/Philosophy-in-the-Wild.pdf',
    },
  },
  {
    title: {
      en: 'Discussion Revision',
      zh: '討論修訂',
      ja: '討論の再構成',
    },
    description: {
      en: 'Here, students revise the transcript of a class discussion, with the aim of drawing out the underlying structure of the discussion. This is another assignment that aims at developing students\' metacognitive awareness. However, this is a tricky assignment, and easy to get wrong. Students will not do it well on the first try; they need at least two attempts in order to get the hang of it, ideally more.',
      zh: '在這個作業中，學生需要修訂一份課堂討論逐字稿，目的是將討論背後的結構與脈絡整理並呈現出來。這也是一個希望學生更理解討論本身是如何運作的作業。不過，這其實是一個相當困難、也很容易做不好的作業。學生第一次做通常不會做得很好；他們至少需要做兩次，最好更多次，才會真正掌握其中的要領。',
      ja: 'この課題では、学生は授業討論の文字起こしを修訂し、その背後にある議論の構造を浮かび上がらせることを目指す。これもまた、討論そのものがどのように機能しているのかについての理解を深めることを目的とした課題である。ただし、この課題はかなり難しく、うまく進めるのも容易ではない。学生は最初からうまくできるわけではなく、少なくとも二回、できればそれ以上取り組むことで、ようやく感覚を掴めるようになる。',
    },
    link: {
      en: '/pedagogy/Discussion-Revision.pdf',
      zh: '/pedagogy/zh/Discussion-Revision.pdf',
      ja: '/pedagogy/ja/Discussion-Revision.pdf',
    },
  },
  {
    title: {
      en: 'Living the Theory',
      zh: '活出理論',
      ja: '理論を生きる',
    },
    description: {
      en: 'I used this in a course on ethical theory (though it may perhaps be adaptable beyond that). The idea is that students try to live according to a theory for a day, and then reflect on what insights this has given them about the theory. So far, it has been quite effective, and students really enjoy it.',
      zh: '我是在一門倫理學理論課中使用這個作業的（雖然它或許也可以調整後用在其他課程）。這個作業的核心概念，是讓學生試著依照某一套理論生活一天，之後再反思：這樣的經驗讓他們對這套理論有了哪些新的理解。到目前為止，它的效果相當不錯，而且學生也真的很喜歡這個作業。',
      ja: 'この課題は、もともと倫理理論の授業で用いていたものである（もっとも、工夫次第では他の授業にも応用できるかもしれない）。学生は一日だけ特定の理論に従って生活してみて、その経験から、その理論についてどのような理解が得られたのかを振り返る。今のところ、この課題はかなりうまく機能しており、学生の反応も非常に良い。',
    },
    link: {
      en: '/pedagogy/Living-the-Theory.pdf',
      zh: '/pedagogy/zh/Living-the-Theory.pdf',
      ja: '/pedagogy/ja/Living-the-Theory.pdf',
    },
  },
  {
    title: {
      en: 'Question Improvement',
      zh: '問題改進',
      ja: '質問改善',
    },
    description: {
      en: 'This assignment is used in tandem with the Critical Questions assignment. After submitting their questions, students are given a random set of the submitted questions and asked to make them better. I was amazed at the response I got when I introduced this assignment: students <em>really</em> responded to it, and were not shy about telling me how useful they found it.',
      zh: '這個作業是與「批判性提問」作業搭配使用的。在學生提交問題之後，他們會隨機收到其他學生提交的一組問題，並被要求將這些問題改得更好。我在第一次使用這個作業時，學生的反應讓我非常驚訝：他們對這個作業的投入程度真的很高，而且也毫不避諱地告訴我，他們覺得這個作業非常有幫助。',
      ja: 'この課題は、「批判的質問」の課題と組み合わせて用いている。学生が質問を提出した後、他の学生が提出した質問の一部がランダムに配られ、それをより良い問いへと改善することが求められる。この課題を導入したときの学生の反応には、正直かなり驚かされた。学生たちはこの課題に非常によく取り組み、自分たちにとってどれほど役立ったかについても率直に話してくれた。',
    },
    link: {
      en: '/pedagogy/Question-Improvement.pdf',
      zh: '/pedagogy/zh/Question-Improvement.pdf',
      ja: '/pedagogy/ja/Question-Improvement.pdf',
    },
  },
  {
    title: {
      en: 'AI-Mediated Reading Response',
      zh: 'AI 輔助閱讀回應',
      ja: 'AI支援型リーディング・レスポンス',
    },
    description: {
      en: 'The purposes of this assignment are to simultaneously encourage students to dig deeper into the class material on their own, as well as consider how AI can be used (or not) to achieve this. I\'ve used it once, in a short course, and it was <em>moderately</em> successful, but I think it really needs to be iterative to work well. I hope to use it again in the future.',
      zh: '這個作業的目的，一方面是鼓勵學生主動更深入地探索課程內容，另一方面則是希望他們思考：AI 可以（或不能）如何被用來達成這件事。我目前只在一門短期課程中使用過一次。它的效果算是 <em>中等程度</em> 的成功，但我認為這類作業需要透過反覆實作與修正，才能真正發揮效果。未來我希望能再次使用它。',
      ja: 'この課題の目的は、学生が授業内容を自力でもう一歩深く掘り下げることを促すと同時に、その過程で AI をどのように活用できるのか（あるいは、できないのか）を考えさせることにある。今のところ、一度だけ短期集中授業で使用したことがあるが、結果としては <em>ある程度うまくいった</em> という程度だった。ただ、この種の課題は、反復的に実施してこそ本当に機能するのだろうと思っている。今後、改めて試してみたい。',
    },
    link: {
      en: '/pedagogy/AI-Mediated-Reading-Response.pdf',
      zh: '/pedagogy/zh/AI-Mediated-Reading-Response.pdf',
      ja: '/pedagogy/ja/AI-Mediated-Reading-Response.pdf',
    },
  },
  {
    title: {
      en: 'Bridge Notes',
      zh: '連結筆記',
      ja: 'ブリッジ・ノート',
    },
    description: {
      en: 'The idea with Bridge Notes is to get students to go beyond the class material, but in a way that deepens their understanding of the class material through meaningful comparison. It also helps to develop their understanding of what a <em>philosophically useful</em> comparison of theories actually looks like.',
      zh: '「連結筆記」這個作業的核心概念，是希望學生能超越課堂本身的內容，但又不是單純地離題，而是透過有意義的比較，反過來加深他們對課程內容的理解。它同時也有助於學生理解：什麼樣的理論比較，才算是真正 <em>具有哲學意義</em> 的比較。',
      ja: '「ブリッジ・ノート」の狙いは、学生に授業内容を越えて考えさせつつ、その比較を通じて、むしろ授業内容への理解を深めてもらうことにある。また、何が <em>哲学的に有意義な</em> 理論比較なのかについての感覚を養うことにもつながっている。',
    },
    link: {
      en: '/pedagogy/Bridge-Notes.pdf',
      zh: '/pedagogy/zh/Bridge-Notes.pdf',
      ja: '/pedagogy/ja/Bridge-Notes.pdf',
    },
  },
  {
    title: {
      en: 'Debates',
      zh: '辯論',
      ja: 'ディベート',
    },
    description: {
      en: 'I call these "debates," but really they\'re more about learning how to make progress on a problem through disagreement: it is structured more like what we might call "adversarial collaboration." Students tend to really enjoy these. I give them time to prepare, set a timer, and then leave them to it. Often after the first one, I\'ll give them the chance to vote on whether to increase the length of time for the second: they always do.',
      zh: '我把這些活動稱作「辯論」，但實際上，它們更接近一種透過分歧來推進問題理解的方式；其結構其實更像我們所謂的「對抗式合作」（adversarial collaboration）。學生通常都非常喜歡這個活動。我會先給他們準備時間、設定計時器，之後基本上就交給他們自己進行。通常在第一次之後，我會讓他們投票決定第二次是否要延長時間：而他們總是會選擇延長。',
      ja: '私はこれを「ディベート」と呼んでいるが、実際には、対立を通じてどのように問題について前進できるかを学ぶことに重点が置かれている。その意味では、むしろ「対立的協働（adversarial collaboration）」に近い。学生たちはこの活動をかなり楽しむ傾向がある。私は準備時間を与え、タイマーを設定した後は、基本的に学生たち自身に任せている。多くの場合、一回目の後に二回目の時間を延長するかどうか投票させるのだが、学生たちはいつも延長を選ぶ。',
    },
    link: {
      en: '/pedagogy/Debates.pdf',
      zh: '/pedagogy/zh/Debates.pdf',
      ja: '/pedagogy/ja/Debates.pdf',
    },
  },
  {
    title: {
      en: 'Close Reading Presentations',
      zh: '細讀報告',
      ja: '精読発表',
    },
    description: {
      en: 'Students are expected to pick up how to close-read a text, but rarely are they taught how to go about doing this. This assignment is my attempt to do this. The idea I foreground in this assignment is that a reading of a philosophical text is actually a kind of argument, where you are expected not to say what you think the text means, but rather to <em>persuade</em> others that your reading is the best one.',
      zh: '學生通常被期待能學會如何細讀文本，但卻很少有人真正教他們應該怎麼做。這個作業就是我對這個問題的一種回應。在這個作業中，我特別強調的一點是：對哲學文本的閱讀，其實本身就是一種論證。你的任務不是單純說明你認為文本是什麼意思，而是要 <em>說服</em> 其他人：你的詮釋為什麼才是最好的詮釋。',
      ja: '学生は「精読」ができることを期待される一方で、その方法を実際に教わる機会はほとんどない。この課題は、その不足を埋めるための私なりの試みである。この課題で特に重視しているのは、哲学テキストの読解そのものが一種の論証だという点である。求められているのは、自分がそのテキストをどう理解したかを述べることではなく、自分の解釈が最も説得力のあるものであることを他者に <em>納得させる</em> ことである。',
    },
    link: {
      en: '/pedagogy/Close-Reading-Presentations.pdf',
      zh: '/pedagogy/zh/Close-Reading-Presentations.pdf',
    },
  },
  {
    title: {
      en: 'Scaffolded Response Papers',
      zh: '階段式回應論文',
      ja: '段階的レスポンス・ペーパー',
    },
    description: {
      en: 'This is a simple but surprisingly effective assignment. In the first stage, students start by trying to briefly reconstruct the argument of a reading; the second time, they move on to pushing back at that argument; then in the third, they finish with a defence of the original argument against a criticism they raise. One key element is the way that it forces them to step back from their own opinions and criticism or defend an argument regardless of their own view. I\'ve done this with as few as three assignments (one for each step), but it works better with more.',
      zh: '這是一個簡單，但效果出乎意料地好的作業。在第一階段，學生需要先簡要重建文本中的論證；第二次則進一步對該論證提出批評；到了第三次，則需要替原本的論證辯護，回應自己先前提出的批評。這個作業其中一個關鍵點，在於它迫使學生暫時抽離自己的立場，不論他們實際上是否同意，都必須去批評或捍衛某個論證。我曾經只用三次作業完成這整個流程（每個階段一次），但如果次數更多，效果通常會更好。',
      ja: 'これは、シンプルではあるが、驚くほど効果的な課題である。第一段階では、学生はまず文献の論証を簡潔に再構成することから始める。次に、その論証に対して批判を加え、最後に、自分自身が提示した批判に対して元の論証を擁護する。この課題の重要な点の一つは、学生に自分自身の立場から一歩距離を取らせるところにある。実際にその議論に賛成しているかどうかに関わらず、批判したり擁護したりすることが求められるからである。これまで、三回の課題（各段階ごとに一回）だけで行ったこともあるが、回数が多いほうがうまく機能する。',
    },
    link: {
      en: '/pedagogy/Scaffolded-Response-Papers.pdf',
      zh: '/pedagogy/zh/Scaffolded-Response-Papers.pdf',
      ja: '/pedagogy/ja/Scaffolded-Response-Papers.pdf',
    },
  },
  {
    title: {
      en: 'Letters',
      zh: '書信',
      ja: '手紙',
    },
    description: {
      en: 'This assignment was originally used in a course that aimed at helping students work out what they wanted to major in. The idea is to get them to think about the (non-instrumental) benefits of majoring in different subjects, by having them explain that discipline and its value to a friend or family member in a letter. However, I think it could be used more broadly, e.g. explaining the value of learning about a theory or exploring a particular philosophical question.',
      zh: '這個作業原本是用在一門幫助學生思考自己想主修什麼的課程中。它的核心概念，是讓學生透過寫信給朋友或家人的方式，說明某個學科及其價值，藉此思考主修不同領域所帶來的（非工具性的）收穫。不過，我認為這個作業其實也可以更廣泛地使用，例如讓學生去說明：學習某一套理論，或探討某個哲學問題，究竟有什麼價值。',
      ja: 'この課題は、もともと、学生が自分の専攻について考えるための授業で用いていたものである。学生は、ある学問分野とその価値について、友人や家族に宛てた手紙の形で説明する。その過程を通じて、異なる分野を専攻することの「非道具的な」価値について考えてもらうことが狙いである。ただ、私はこの課題はもっと広く応用できるとも考えている。たとえば、ある理論を学ぶことや、特定の哲学的問題を探究することの価値を説明させる、といった形である。',
    },
    link: {
      en: '/pedagogy/Letters.pdf',
      zh: '/pedagogy/zh/Letters.pdf',
      ja: '/pedagogy/ja/Letters.pdf',
    },
  },
  {
    title: {
      en: 'Questions Assignment',
      zh: '問題作業',
      ja: '質問課題',
    },
    description: {
      en: 'This is an extension of my Critical Questions assignment. By allowing students to sometimes choose to submit a "Clarificatory Question" instead of a "Critical Question," I could address some of the more common or widespread confusions about the assigned material at the beginning of class, allowing us to move into class discussions on a steadier footing. In essence, it\'s a way of trying to ensure that everyone is on the same page in a flipped classroom setting.',
      zh: '這是我「批判性提問」作業的一個延伸版本。透過讓學生有時可以選擇提交「澄清性問題」（Clarificatory Question），而不一定只能提交「批判性提問」，我便能在課堂一開始先處理一些學生對指定閱讀中較常見、或較普遍的困惑，讓之後的課堂討論能建立在更穩固的基礎上。基本上，這是一種在翻轉教室模式下，嘗試確保所有人都能跟上課程進度的方法。',
      ja: 'これは、「批判的質問」の課題を発展させたものである。学生は「批判的質問」だけでなく、「確認的質問（Clarificatory Question）」を提出することもできる。そのおかげで、授業冒頭で、指定文献について学生が抱きやすい混乱や疑問を整理することができ、その後の討論をより安定した土台の上で進めやすくなった。要するに、これは反転授業の環境において、全員が同じ前提を共有した状態で議論に入れるようにするための方法である。',
    },
    link: {
      en: '/pedagogy/Questions-Assignment.pdf',
      zh: '/pedagogy/zh/Questions-Assignment.pdf',
      ja: '/pedagogy/ja/Questions-Assignment.pdf',
    },
  },
  {
    title: {
      en: 'Essay Introduction',
      zh: '論文導論',
      ja: '論文導入',
    },
    description: {
      en: 'This is a relatively straightforward assignment, in which students begin developing the introduction to their final paper earlier in the semester, then have that introduction peer-evaluated by other students. The point here is to both give them feedback on their own work before they start writing in earnest, as well as (through their review of other students) of what a well-structured introduction looks like. And because the introduction should set out their thesis and outline their argument, a well-structured introduction generally means a well-structured final paper.',
      zh: '這是一個相對直接的作業。在學期較早的階段，學生就需要開始撰寫期末論文的導論，之後再由其他學生進行同儕評閱。這個作業的目的，一方面是讓學生在正式開始寫作之前，就能先獲得對自己作品的回饋；另一方面，也讓他們透過閱讀與評論其他學生的作品，更理解一篇結構良好的導論應該是什麼樣子。由於導論本身應該清楚提出論題並概述論證，因此，一篇結構良好的導論，通常也意味著一篇結構良好的期末論文。',
      ja: 'これは比較的シンプルな課題であり、学生は学期の早い段階から期末論文の導入部分を書き始め、その後、学生同士で相互評価を行う。目的は、学生が本格的に論文執筆を始める前にフィードバックを得られるようにすることと、他の学生の導入を読むことを通じて、構成の良い導入とはどのようなものかを理解してもらうことにある。導入部分では論題と論証の概要を提示する必要があるため、導入がしっかり構成されていれば、最終論文全体の構成も良くなることが多い。',
    },
    link: {
      en: '/pedagogy/Essay-Introduction.pdf',
      zh: '/pedagogy/zh/Essay-Introduction.pdf',
      ja: '/pedagogy/ja/Essay-Introduction.pdf',
    },
  },
  {
    title: {
      en: 'Spotlight & Shadow',
      zh: '聚光與陰影',
      ja: 'スポットライトと影',
    },
    description: {
      en: 'This is an assignment for a course that helped students select their major. It probably only works in such a course, so the use-case is limited, but for this purpose I was <em>very</em> happy with how it went. The idea is, students are made to think about the nature of academic disciplines and what the different foci and methodologies of disciplines both illuminate and elide (hence "Spotlight" and "Shadow"). It also incidentally helps students develop research skills, for instance teaching them the difference between high and low quality journals.',
      zh: '這是一個用在協助學生選擇主修的課程中的作業。它大概只適合用在這類課程裡，因此適用範圍其實相當有限；不過，就這個用途而言，我對它的效果感到 <em>非常</em> 滿意。這個作業的核心概念，是讓學生去思考學科的本質，以及不同學科的關注焦點與研究方法，究竟會照亮什麼、又會遮蔽什麼（這也正是「聚光」與「陰影」這個名稱的由來）。此外，它也會順帶幫助學生培養一些研究能力，例如讓他們學會區分高品質與低品質的學術期刊。',
      ja: 'これは、学生が専攻選択について考える授業で用いた課題である。おそらく、この種の授業でしか機能しないため、用途はかなり限定されている。ただ、その目的に関して言えば、私はこの課題が <em>非常に</em> うまく機能したと感じている。この課題の中心にあるのは、学問分野とは何か、そして各分野の焦点や方法論が、何を照らし出し、逆に何を見えなくしているのかを考えさせることである（「スポットライト」と「影」という題名はそこから来ている）。また、副次的ではあるが、研究スキルの育成にも役立っており、たとえば質の高い学術雑誌とそうでない雑誌を区別する力なども養われる。',
    },
    link: {
      en: '/pedagogy/Spotlight-and-Shadow.pdf',
      zh: '/pedagogy/zh/Spotlight-and-Shadow.pdf',
      ja: '/pedagogy/ja/Spotlight-and-Shadow.pdf',
    },
  },
];
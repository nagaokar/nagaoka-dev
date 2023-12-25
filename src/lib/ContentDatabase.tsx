export interface Post {
  id: number;
  tag: string;
  subtag: string;
  title: string;
  organisation: string;
  desc: string;
  link: string;
  date: string;
  slug: string;
}

export const getAllPosts = (): Post[] => {
  return posts;
};

export const getAllPostSlugs = (): string[] => {
  return posts.map((post) => post.slug);
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};

export const posts: Post[] = [
  {
    id: 1,
    tag: 'employment',
    subtag: 'publication',
    title: 'Freelance Writer',
    organisation: 'Uppercut Crit',
    desc: "Article written for an online gaming blog titled: 'Planetary Play: Games and the Environment'.",
    link: 'https://uppercutcrit.com/planetary-play-games-and-the-environment',
    date: '2023',
    slug: 'uppercut'

  },
  {
    id: 2,
    tag: 'employment',
    title: 'Presenter + Consultant',
    subtag: 'academic',
    organisation: 'London School of Architecture',
    desc: "presentation of my phd research practice with a focus on methodology (primarily the MDA framework). this was to inform the design of a new 'part 4: design for life' ethical architectural practice course. ",
    link: 'https://www.the-lsa.org/',
    date: '2023',
    slug: 'lsa'

  },
  {
    id: 3,
    tag: 'employment',
    subtag: 'web development',
    title: 'Research Assistant',
    organisation: 'Manchester Game Centre',
    desc: 'my role revolves around developing the profile of the  manchester game centre (mgc), both internally (at manchester metropolitan university) and externally. primarily, this involves strategic planning and management of the mgc’s online presence.',
    link: 'https://manchestergamecentre.org/',
    date: '2022',
    slug: 'mgc-ra'
  },
  {
    id: 4,
    tag: 'employment',
    subtag: 'academic',
    title: 'MArch Y6 Tutor',
    organisation: 'Manchester School of Architecture',
    desc: 'i am an informal tutor of the 6th year master’s atelier: ‘complexity, planning, and urbanism’ (cpu) at the manchester school of architecture. the atelier specialises in computational methods for architectural and urban design.',
    link: 'https://twitter.com/CPU_Ai_atelier',
    date: '2022',
    slug: 'msacpututor'

  },
  {
    id: 5,
    tag: 'employment',
    subtag: 'computational design',
    title: 'Digital Engineer',
    organisation: 'Costain',
    desc: 'i work in the automated design department of costain. my work involves the design and development of computational design tools for critical national infrastructure.',
    link: 'https://www.costain.com/',
    date: '2021',
    slug: 'costain'

  },
  {
    id: 6,
    tag: 'game',
    subtag: 'game',
    title: 'Ecoville',
    organisation: 'phd',
    desc: 'An online multiplayer eco-planning game created for the AESOP 2023 Planning and Complexity conference. This online multiplayer game gave players individual roles in which they had to balance individual and collective goals to build a sustainable urban neighbourhood',
    link: '',
    date: '2023',
    slug: 'ecoville'

  },
  {
    id: 7,
    tag: 'game',
    subtag: 'game',
    title: 'Cityzen',
    organisation: 'MA Architecture',
    desc: "An online multiplayer eco-planning game created using Kate Raworth's 'Doughbut Econnomics' as the theoretical framework. This turn-based multiplayer online game was constructed with Manchester City Council as the client to envision how a zero-carbon future for the Northern Gateway - a £1 billion urban development in Northern Manchester.",
    link: 'https://issuu.com/nagaokastudio/docs/studio_three_25_05_21',
    date: '2021',
    slug: 'cityzen'

  },
  {
    id: 8,
    tag: 'education',
    subtag: 'academic',
    title: 'Ph.D. Architecture',
    organisation: 'Manchester Metropolitan University',
    desc: "Due to be completed in 2026, my research is Leverhulme-funded and uses online multiplayer games to understand player behaviour when the systemic consequences of climate change are revealed. I work across the MMU Postgraduate School of Arts and Humanities and the Manchester School of Architecture (MSA). My supervisors are Ulysess Sengupta (CPU Lab, MSA), Paul Wake (Dept. of English, MMU), and Bodhi Chattopadhyay (CoFutures Lab, University of Oslo)",
    link: 'https://manchestergamecentre.org/research-students',
    date: '2026',
    slug: 'phd'

  },
  {
    id: 9,
    tag: 'education',
    subtag: 'academic',
    title: 'MA Architecture',
    organisation: 'Manchester School of Architecture',
    desc: 'Specialised in computational design for architectural & urban design within the CPU.AI (Complexity, Planning & Urbanism. Architectural Intelligence).',
    link: '',
    date: '2021',
    slug: 'ma-architecture'
  },
  {
    id: 10,
    tag: 'education',
    subtag: 'academic',
    title: 'BA(hons) Architecture',
    organisation: 'Manchester School of Architecture',
    desc: 'Joined the Continuity In Architecture atelier during final year, which specialises in applying critical regionalism to sensitive placemaking',
    link: 'https://www.msa.ac.uk/study/ateliers/cia/',
    date: '2018',
    slug: 'ba-architecture'

  },
  {
    id: 11,
    tag: 'academic',
    subtag: 'publication',
    title:
      'Collaborative Play in an Eco-MMO Research Paper (WIP)',
    organisation: 'Phd',
    desc: "This forthcoming research paper, titled 'Collaborative Play in an Online Multiplayer Urban Planning Eco-Game' is a output from the ecoville game created for the AESOP conference in april 2023.",
    link: '',
    date: '2023',
    slug: 'ecommo-paper'
  },
  {
    id: 12,
    tag: 'academic',
    subtag: 'publication',
    title:
      'A eco-game conceptual framework. (WIP)',
    organisation: 'Phd',
    desc: "This forthcoming research paper, titled 'Virtual Eco-Cities: An Eco-game Conceptual Framework for the Analysis of Virtual Cities' is a conceptual article arising from my phd project literature review.",
    link: '',
    date: '2023',
    slug: 'ecogame-paper'
  },
  {
    id: 13,
    tag: 'academic',
    subtag: 'talk',
    title: 'Multiplatform 3: Remake, Reuse, Replay!',
    organisation: 'Manchester Game Centre',
    desc: "Multiplatform: Remake, Reuse, Replay is a two-day event that explores sustainability and gaming, including a live game jam.",
    link: 'https://manchestergamecentre.org/events/2023/6/7/multiplatform-3-remake-reuse-replay',
    date: '2023',
    slug: 'multiplatform2023'
  },
  {
    id: 14,
    tag: 'academic',
    subtag: 'talk',
    title: 'New Work in Game Studies: Alex Brooke and Reiji Nagaoka',
    organisation: 'Manchester Game Centre',
    desc: 'This work-in-progress seminar i presented my work arising from my research projects alongside Alex Brooke, another student within the Manchester Game Centre.',
    link: 'https://manchestergamecentre.org/events/2023/2/22/alex-and-reiji-wip',
    date: '2023',
    slug: 'new-work-in-game-studies'
  },
  {
    id: 15,
    tag: 'academic',
    subtag: 'talk',
    title:
      'Complex [Cognitive] Cities: Sensing, planning and design in urban transformations',
    organisation: 'AESOP',
    desc: 'the game online mutiplayer game ecoville was created especially for this conference, which took place in Manchester. The Planning & Complexity thematic is part of the European-wide AESOP institution',
    link: 'https://aesop-planning.eu/resources/news-archive/thematic-groups/planning-and-complexity/complex-cognitive-cities-sensing-planning-and-design-in-urban-transformations',
    date: '2023',
    slug: 'aesop2023'
  },
  {
    id: 16,
    tag: 'academic',
    subtag: 'talk',
    title:
      'Infrasystems Towards Healthy Brazil',
    organisation: 'Infrasystems',
    desc: 'Infrasystems Towards Healthy Brazil: Sustainable Urban Nexus (Water-Energy-Sanitation) in the Tiete River Basin',
    link: 'https://infrasystems.complexurban.com/people',
    date: '2021',
    slug: 'infrasystems2021'
  },
  {
    id: 17,
    tag: 'academic',
    subtag: 'publication',
    title: 'dissertation',
    organisation: 'ma',
    desc: "my ma dissertation, titled: 'emergence of institutional investors the post-crisis housing market of manchester, uk' argues that the emergence of institutional investors in post-2008 housing markets has generated a novel architectural typology re-defining the geographies of extraction. These architectural materialisations disguise a vast network of financialised service infrastructures as a sociotechnical object which, through deployment of neo-marxist theories of urbanisation and political ecology, are uncovered as mechanisms for renewed cycles of capital accumulation via case study methodology. These architectural materialisations capitalise on housing dispossession through reinvigoration of the Private Rented Sector, which has grown continuously since the neo-liberal Thatcher era. (Rolnik, 2019) These novel asset classes in the Private Rented Sector signal an acceleration of financialised urban (re)production by further disintegrating housing as a public good and commodifies communities for the maximisation of profit.",
    link: 'https://issuu.com/nagaokastudio/docs/ma5_financialisation_of_housing_dissertation.docx',
    date: '2020',
    slug: 'ma-dissertation'
  },
  {
    id: 18,
    tag: 'hobby',
    subtag:'music',
    title: 'drummer',
    organisation: 'ur ex-bf',
    desc: "drummer for the post-punk / indie rock band 'Ur EX-BF' formed in Manchester, with two singles arriving soon.",
    link: 'https://www.instagram.com/urexbfband/',
    date: '2023',
    slug: 'urexbf-band'
  },
  {
    id: 19,
    tag: 'hobby',
    subtag:'music',
    title: 'producer',
    organisation: 'MASSLAND',
    desc: 'My platform for my very sparse music experiments - from tracks perhaps recognisable as music to experiments with algorhythms.',
    link: 'https://soundcloud.com/massland',
    date: '2020',
    slug: 'massland-music'
  },  
  {
    id: 20,
    tag: 'hobby',
    subtag: 'web development',
    title: 'Web Developer',
    organisation: 'Nagaoka.dev',
    desc: "this site was written in html, css, and typescript - using react, next.js, and tailwindcss as the frameworks. This is still a work in progress and there are a lot more bits that are going to be added in future. so, come back soon. :) ",
    link: 'nagaoka.dev',
    date: '2023',
    slug: 'this'
  },
  {
    id: 21,
    tag: 'education',
    subtag: 'computational design',
    title: 'developer',
    organisation: 'Ma architecture',
    desc: "My first project at the Manchester School of Architecture's CPU atelier. THe aim of this project was to create a tool capable of generating an apartment block of social housing at runtime - using Design for Manufacture (DFMA) as the structural system. The user is able to input their preferences (cost, quality, time). This was accomplished through the construction of neural network (in grasshopper).",
    link: 'https://issuu.com/nagaokastudio/docs/group_portfolio_final',
    date: '2019',
    slug: 'ma-architecture-generative-housing'
  },  
  // {
  //   id: 22,
  //   tag: 'hobby',
  //   subtag: 'web development',
  //   title: 'designer + developer',
  //   organisation: 'ur exbf',
  //   desc: "design and development (currently ongoing) of a website for the band: ur ex-bf.",
  //   link: '',
  //   date: '2023',
  //   slug: 'urexbfbandwebsite'
  // },
  {
    id: 22,
    tag: 'employment',
    subtag: 'publication',
    title: 'writer',
    organisation: 'The Whip',
    desc: "A freelance writer for the satirical student newspaper 'The Whip'.",
    link: '',
    date: '2019-2020',
    slug: 'the-whip'
  },
]
export interface Post {
  id: number;
  tag: string;
  title: string;
  organisation: string;
  desc: string;
  link: string;
  date: string;
}

export const posts: Post[] = [
  {
    id: 1,
    tag: 'employment',
    title: 'Freelance Writer',
    organisation: 'Uppercut Crit',
    desc: "Article written for an online gaming blog titled: 'Planetary Play: Games and the Environment'.",
    link: 'https://uppercutcrit.com/planetary-play-games-and-the-environment',
    date: '2023',
  },
  {
    id: 2,
    tag: 'employment',
    title: 'Presenter + Consultant',
    organisation: 'London School of Architecture',
    desc: "Presented my phd research practice with a focus on methodology (primarily the MDA framework). this was to inform the design of a new 'part 4: design for life' ethical architectural practice course. ",
    link: 'https://www.the-lsa.org/',
    date: '2023',
  },
  {
    id: 3,
    tag: 'employment',
    title: 'Research Assistant',
    organisation: 'Manchester Game Centre',
    desc: 'my role revolves around developing the profile of the  manchester game centre (mgc), both internally (at manchester metropolitan university) and externally. primarily, this involves strategic planning and management of the mgc’s online presence.',
    link: 'https://manchestergamecentre.org/',
    date: '2022',
  },
  {
    id: 4,
    tag: 'employment',
    title: 'MArch Y6 Tutor',
    organisation: 'Manchester School of Architecture',
    desc: 'i am an informal tutor of the 6th year master’s atelier: ‘complexity, planning, and urbanism’ (cpu) at the manchester school of architecture. the atelier specialises in computational methods for architectural and urban design.',
    link: 'https://twitter.com/CPU_Ai_atelier',
    date: '2022',
  },
  {
    id: 5,
    tag: 'employment',
    title: 'Digital Engineer',
    organisation: 'Costain',
    desc: 'i work in the automated design department of costain. my work involves the design and development of computational design tools for critical national infrastructure.',
    link: 'https://www.costain.com/',
    date: '2021',
  },
  {
    id: 6,
    tag: 'game',
    title: 'Ecoville',
    organisation: 'Conference Workshop',
    desc: 'An online multiplayer eco-planning game created for the AESOP 2023 Planning and Complexity conference. This online multiplayer game gave players individual roles in which they had to balance individual and collective goals to build a sustainable urban neighbourhood',
    link: '',
    date: '2023',
  },
  {
    id: 7,
    tag: 'game',
    title: 'Cityzen',
    organisation: 'Final Thesis, MA Architecture',
    desc: "An online multiplayer eco-planning game created using Kate Raworth's 'Doughbut Econnomics' as the theoretical framework. This turn-based multiplayer online game was constructed with Manchester City Council as the client to envision how a zero-carbon future for the Northern Gateway - a £1 billion urban development in Northern Manchester.",
    link: "",
    date: "2021",
  },
  {
    id: 8,
    tag: "education",
    title: "Ph.D. Architecture",
    organisation: "Manchester Metropolitan University",
    desc: "Due to be completed in 2026, my research is Leverhulme-funded and uses online multiplayer games to understand player behaviour when the systemic consequences of climate change are revealed",
    link: "",
    date: "2026",
  },
  {
    id: 9,
    tag: "education",
    title: "MA Architecture",
    organisation: "Manchester School of Architecture",
    desc: "Specialised in computational design for architectural & urban design within the CPU.AI (Complexity, Planning & Urbanism. Architectural Intelligence).",
    link: "",
    date: "2021",
  },
  {
    id: 10,
    tag: "education",
    title: "BA(hons) Architecture",
    organisation: "Manchester School of Architecture",
    desc: "Joined the Continuity In Architecture atelier during final year, which specialises in applying critical regionalism to sensitive placemaking",
    link: "",
    date: "2018",
  },
  {
    id: 11,
    tag: "academic",
    title: "Collaborative Play in an Online Multiplayer Urban Planning Eco-Game",
    organisation: "Research Paper",
    desc: "forthcoming",
    link: "",
    date: "2023",
  },
  {
    id: 12,
    tag: "academic",
    title: "Virtual Eco-Cities: An Eco-game Conceptual Framework for the Analysis of Virtual Cities",
    organisation: "Research Paper",
    desc: "forthcoming",
    link: "",
    date: "2023",
  },
  {
    id: 13,
    tag: "academic",
    title: "Multiplatform 3: Remake, Reuse, Replay!",
    organisation: "Presenter",
    desc: "",
    link: "https://manchestergamecentre.org/events/2023/6/7/multiplatform-3-remake-reuse-replay",
    date: "2023",
  },
  {
    id: 14,
    tag: "academic",
    title: "New Work in Game Studies: Alex Brooke and Reiji Nagaoka",
    organisation: "Presenter",
    desc: "",
    link: "https://manchestergamecentre.org/events/2023/2/22/alex-and-reiji-wip",
    date: "2023",
  },
  {
    id: 15,
    tag: "academic",
    title: "Complex [Cognitive] Cities: Sensing, planning and design in urban transformations",
    organisation: "Presenter + Workshop Organiser",
    desc: "",
    link: "https://aesop-planning.eu/resources/news-archive/thematic-groups/planning-and-complexity/complex-cognitive-cities-sensing-planning-and-design-in-urban-transformations",
    date: "2023",
  },
  {
    id: 16,
    tag: "academic",
    title: "Infrasystems Towards Healthy Brazil: Sustainable Urban Nexus (Water-Energy-Sanitation) in the Tiete River Basin",
    organisation: "Presenter",
    desc: "",
    link: "https://infrasystems.complexurban.com/people",
    date: "2021",
  },
  {
    id: 17,
    tag: "academic",
    title: "emergence of institutional investors the post-crisis housing market of manchester, uk",
    organisation: "Research Paper",
    desc: "",
    link: "",
    date: "2020",
  },
]
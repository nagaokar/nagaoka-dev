export interface Text {
  id: number;
  title: string;
  sentences: string[],
  tag: string;
}

export const textData: Text[] = [
  {
    id: 1,
    title: "Introduction",
    sentences: [
      "i primarily work as a phd researcher, specialising in eco-games and urban studies, but also practice as a computational designer, web developer, and writer.",
    ],
    tag: "tagline",
  },
  {
    id: 2,
    title: "Academic Profile",
    sentences: [
      "my leverhulme-funded phd project is being studied at manchester metropolitan university (manchester, uk). ",
      "it is situated in the domains of urban planning, game studies, and climate change communication.",
      "the thesis is currently titled: 'reviving alternative future cities: cognitive climate behaviour in an online multiplayer urban eco-game'",
    ],
    tag: "profile",
  },
  {
    id: 3,
    title: "Developer Profile",
    sentences: [
      "for web design, ui/ux design and protyping is done in figma. development uses standard web languages - with react, next.js, tailwindcss, and bootstrap as frameworks.",
      "computational design is typically done using python, rhino3d, and grasshopper.",
      "game development projects use unity in c# with unity netcode for gameobjects as the architecture for multiplayer games.",
    ],
    tag: "profile",
  },
]
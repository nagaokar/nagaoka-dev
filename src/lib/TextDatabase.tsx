export interface Text {
  id: number;
  title: string;
  body: {
    p1: string;
    p2: string;
    p3: string;
  },
    tag: string;
}

export const textData: Text[] = [
  {
    id: 1,
    title: "",
    body: {
      p1: "i primarily work as a phd researcher, specialising in eco-games and urban studies, but also practice as a computational designer, web developer, and writer.",
      p2: "",
      p3: "",
    },
    tag: "tagline",
  },
  {
    id: 2,
    title: "Academic Profile",
    body: {
      p1: "my leverhulme-funded phd project is being studied at manchester metropolitan university (manchester, uk). ",
      p2: "it is situated in the domains of urban planning, game studies, and climate change communication.",
      p3: "the thesis is currently titled: 'reviving alternative future cities: cognitive climate behaviour in an online multiplayer urban eco-game'",
    },
      tag: "profile-academic",
  },
    {
    id: 3,
    title: "Developer Profile",
    body: {
      p1: "for web design, ui/ux design and protyping is done in figma. development uses standard web languages - with react, next.js, tailwindcss, and bootstrap as frameworks.",
      p2: "computational design is typically done using python, rhino3d, and grasshopper.",
      p3: "game development projects use unity in c# with unity netcode for gameobjects as the architecture for multiplayer games.",
    },
    tag: "profile-dev",
  },
]
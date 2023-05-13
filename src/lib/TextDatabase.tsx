export interface Text {
  id: number;
  title: string;
  body: string;
  tag: string;
}

export const textData: Text[] = [
  {
    id: 1,
    title: "",
    body: "i primarily work as a phd researcher, specialising in eco-games and urban studies, but also practice as a computational designer, web developer, and writer.",
    tag: "tagline",
  },
  {
    id: 2,
    title: "Academic Profile",
    body: "my leverhulme-funded phd project is being studied at manchester metropolitan university (manchester, uk). it is situated in the domains of urban planning, game studies, and climate change communication. the thesis is currently titled: 'reviving alternative future cities: cognitive climate behaviour in an online multiplayer urban eco-game'",
    tag: "profile-academic",
  },
    {
    id: 3,
    title: "Developer Profile",
    body: "i primarily develop using python, grasshopper (rhino3d), c# (unity), and standard web development tech. (html, css, js). game development projects use unity in c# and multiplayer games use unity netcode for gameobjects. currently, i use figma for ui/ux protyping then react, next.js, tailwindcss for frontend development.",
    tag: "profile-dev",
  },
]
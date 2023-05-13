export interface NewsPost {
  id: number
  title: string
  tag: string
  subtitle: string
  body: string[]
  link: string
  month: number
  year: number
}

//tags: work, event,

export const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: 'Work',
    tag: 'advert',
    subtitle: "if you'd like to hire me. I am currently able to take on",
    body: ['videogame-related journalism', 'small web design projects'],
    link: 'string',
    month: 6,
    year: 2023,
  },
]

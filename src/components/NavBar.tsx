import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['400'], subsets: ['latin']})

import Link from 'next/link'

export default function Nav() {
  return (
    <nav className=
    {`
    flex items-center justify-center h-16 w-screen flex-wrap 
      fixed z-40
      sm:text-sm md:text-md lg:text-l l:text-l 2xl:text-xl
    
    `}  
      >
      <ul className="flex items-center">
        <li className="p-2">
          <Link className=''href='/about'>about</Link>
        </li>
        <li className="p-2">
          <Link className=''href='/work'>work</Link>
        </li>
        <li className="p-2">
          <Link className=''href='/work'>contact</Link>
        </li>
      </ul>
    </nav>
  )
}
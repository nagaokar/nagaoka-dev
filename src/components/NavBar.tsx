
import { Jost } from 'next/font/google'
import Link from 'next/link'

const jost = Jost({ subsets: ['latin']})

export default function Nav() {
  return (
    <nav className='flex items-center justify-center h-16 w-screen flex-wrap 
      fixed
      backdrop-blur-2xl
      bg-gradient-to-b from-white/10 to-white/0
      sm:text-sm md:text-md lg:text-l l:text-l 2xl:text-xl
      '>
      <ul className="flex items-center flex-shrink-0 justify-between">
        <li className="p-2">
          <Link className=''href='/'>home</Link>
        </li>
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
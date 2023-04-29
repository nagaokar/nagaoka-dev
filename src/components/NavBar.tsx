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
      bg-blue-200
    `}  
      >
      <div className='font-thin'>
        <p className='m-1'>
          礼二
        </p>
        <p>
          長岡
        </p>
      </div>
    </nav>
  )
}
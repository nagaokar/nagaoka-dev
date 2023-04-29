import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['400'], subsets: ['latin']})

import Link from 'next/link'

export default function Nav() {
  return (
    <nav className=
    {`flex items-center justify-center py-2 h-12 w-screen
      fixed z-40 sm:text-sm md:text-md lg:text-l l:text-l 2xl:text-xl
      bg-blue-200
    `}>
      <div className='justify-between font-bold'>
          <Link href='/home' className='flex flow-row'>
          <p className='mx-2'>礼</p>
          <p className='mx-2'>二</p>
          <p className='mx-2'>長</p>
          <p className='mx-2'>岡</p>
          </Link>
      </div>
    </nav>
  )
}
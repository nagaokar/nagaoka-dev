import Image from 'next/image'
import { Inter, Jost } from 'next/font/google'
import Link from 'next/link'

import Nav from '@/components/NavBar';
import Footer from '@/components/Footer';
  
const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin']})

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${jost.className}`}>
      <div className={'text-4xl pb-4'}>
        <h1>nagaoka.dev</h1>
      </div>
      <div className=''>
        <Nav/>
      </div>
      </main>

  )
}
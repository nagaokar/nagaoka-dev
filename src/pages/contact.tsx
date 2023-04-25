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
      
      {/* START: Title */}
      <div className={'text-4xl m-10'}>
        <h1>contact</h1>
      </div>
      {/* END: Title */}

      {/* START: Nav */}
      <div className='pb-4'>
        <Nav/>
      </div>
      {/* END: Nav */}

        {/* START: Contact */}
      <div className='flex flex-col w-[500px] mt-10 items-center justify-center p-6'>
        <h2 className='text-2xl m-3'>If you&#39;d like to get in touch, please do so <span className='text-slate-400'><a href='mailto:nagaoka.ra@gmail.com'>via email</a></span></h2>
        </div>
        {/* END: Contact */}
      </main>

  )
}
import type { ReactElement } from 'react';
import { Inter, Jost } from 'next/font/google'

import Layout from '@/components/layout';  
import { NextPageWithLayout } from './_app'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin']})

export default function Contact() {
  return(
    <main className='flex flex-wrap justify-center align-middle overflow-x-hidden py-12'>
      <div className='flex flex-col justify-center'>
        <div className='mb-6 justify-center text-center font-vold
        xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl'>
          <p>If you&apos;d like to get in contact, please do so <span className='text-blue-500'>
              <Link href="mailto:nagaoka.ra@gmail.com">via email</Link>
              </span>
          </p>
        </div>
        </div>
    </main>
  )
}
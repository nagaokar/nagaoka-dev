import type { ReactElement } from 'react';
import { Inter, Jost } from 'next/font/google'

import Layout from '@/components/layout';  
import { NextPageWithLayout } from './_app'

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin']})

export default function Contact() {
  return(
    <main>
      <p>Contact</p>
    </main>
  )
}
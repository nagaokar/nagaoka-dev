import type { ReactElement } from 'react';
import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['100'], subsets: ['latin']})

import Layout from '@/components/layouts/layout';  
import NestedLayout from '@/components/layouts/nested-layout';
import { NextPageWithLayout } from './_app'

import About from './about'
import Work from './work'
import Contact from './contact'

const Home: NextPageWithLayout = () => {
  return (
    <main className='flex flex-col justify-center align-middle h-screen'>
      <p>Home</p>
    </main>
  )
}




Home.getLayout = function getLayout(home: ReactElement, about: ReactElement,work: ReactElement, contact: ReactElement ) {
  return(
    <Layout>
      <NestedLayout>
        {home}
        {about}
        {work}
        {contact}

      </NestedLayout>
    </Layout>
  )
}
export default Home;
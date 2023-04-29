import type { ReactElement } from 'react';
import Image from 'next/image';

import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['100'], subsets: ['latin']})


import Layout from '@/components/layouts/layout';  
import NestedLayout from '@/components/layouts/nested-layout';
import { NextPageWithLayout } from './_app'
import About from './about';
import Work from './work';

const Home: NextPageWithLayout = () => {
  return (
    <main className='flex flex-wrap justify-center align-middle h-screen overflow-x-hidden cursor-default'>
      <div className='flex flex-col justify-center px-16'>
            <p className='text-5xl font-bold'>
              nagaoka.dev 
            </p>

      </div>
    </main>
  )
}

Home.getLayout = function getLayout(home: ReactElement) {
  return(
    <>
        <Layout>
            <NestedLayout>
                {home}
                <About />
                <Work />
            </NestedLayout>
        </Layout>
    </>
  )
}
export default Home;
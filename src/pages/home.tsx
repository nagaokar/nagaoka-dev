import type { ReactElement } from 'react';
import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['100'], subsets: ['latin']})

import Layout from '@/components/layouts/layout';  
import NestedLayout from '@/components/layouts/nested-layout';
import { NextPageWithLayout } from './_app'
import About from './about';
import Work from './work';

const Home: NextPageWithLayout = () => {
  return (
    <main className='flex flex-col justify-center align-middle overflow-x-hidden'>
      
      <div className='flex flex-col justify-center h-screen'>
        <p>Hi. I&apos;m Reiji Nagaoka.</p>
        <div className='flex flex-col mt-6 ml-6 mr-6 text-align-left justify-center'>
        <p className='text-base'>
            An eco-game and urban studies scholar working in Manchester, UK.
          </p>
        </div>
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
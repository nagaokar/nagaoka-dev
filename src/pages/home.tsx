import type { ReactElement } from 'react';
import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['100'], subsets: ['latin']})

import Layout from '@/components/layouts/layout';  
import NestedLayout from '@/components/layouts/nested-layout';
import { NextPageWithLayout } from './_app'
import About from './about';
import Work from './work';
import Footer from '@/components/Footer';

const Home: NextPageWithLayout = () => {
  return (
    <main className='flex flex-col justify-center align-middle overflow-x-hidden cursor-default'>
      
      <div className='flex flex-col justify-center h-screen'>
        <div className='flex flex-col py-6 px-6 text-align-left justify-center'>
          <p className='bold'>
            Hi, I&apos;m Reiji Nagaoka.
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
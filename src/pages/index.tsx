import type { ReactElement } from 'react';
import Image from 'next/image'
import { Inter, Jost } from 'next/font/google'
import Link from 'next/link'

import Nav from '@/components/NavBar';
import Footer from '@/components/Footer';
import Layout from '@/components/layouts/layout';  
import NestedLayout from '@/components/layouts/nested-layout';
import { NextPageWithLayout } from './_app'


const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin']})


const Home: NextPageWithLayout = () => {
  return (
  <main className='sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl
  flex flex-col justify-center text-center
  '>
    <div className='flex flex-col text center bg-white h-12 w-24'> 
    <p>Hello World</p>
    </div>
    
  </main>
  )
}

Home.getLayout = function getLayout(home: ReactElement) {
  return(
    <Layout>
      <NestedLayout>
        {home}
      </NestedLayout>
    </Layout>
  )
}
export default Home;
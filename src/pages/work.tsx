import type { ReactElement } from 'react';
import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['100'], subsets: ['latin']})

import Layout from '@/components/layouts/layout';  
import NestedLayout from '@/components/layouts/nested-layout';
import { NextPageWithLayout } from './_app'

const Work: NextPageWithLayout = () => {
  return (
    <main className='flex flex-col justify-center align-middle h-screen'>
      <p>Work</p>
    </main>
  )
}

Work.getLayout = function getLayout(work: ReactElement) {
  return(
    <Layout>
      <NestedLayout>
        {work}
      </NestedLayout>
    </Layout>
  )
}
export default Work;
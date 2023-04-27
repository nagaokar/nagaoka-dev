import type { ReactElement } from 'react';

import Layout from '@/components/layouts/layout';  
import NestedLayout from '@/components/layouts/nested-layout';
import { NextPageWithLayout } from './_app'

const About: NextPageWithLayout = () => {
  return (
    <main className='flex flex-col justify-center align-middle h-screen overflow-hidden'>
      <div>
        <p>Hi.</p>
      </div>
    


    </main>
  )
}

About.getLayout = function getLayout(about: ReactElement) {
  return(
    <Layout>
      <NestedLayout>
        {about}
      </NestedLayout>
    </Layout>
  )
}
export default About;
import type { ReactElement } from 'react';
import { Inter, Jost } from 'next/font/google'

import Layout from '@/components/layout';  
import NestedLayout from '@/components/layouts/nested-layout';
import { NextPageWithLayout } from './_app'

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin']})

const Contact: NextPageWithLayout = () => {
  return (
    <main className='flex flex-col justify-center align-middle h-screen'>
      <p>Contact</p>
    </main>
  )
}

Contact.getLayout = function getLayout(contact: ReactElement) {
  return(
    <Layout>
      <NestedLayout>
        {contact}
      </NestedLayout>
    </Layout>
  )
}
export default Contact;
import Layout from '@/components/layout';
import Image from 'next/image';

import Employment from './employment';
import Publications from './publications';
import Talks from './talks';
import Games from './games';
import Footer from '@/components/Footer';
import About from './about';
import Contact from './contact';

export default function Home()
{
  return (
    <Layout>
        <main>
          <section id='intro' className='flex flex-row m-auto align-middle justify-center h-screen cursor-default'>
            <div className='flex flex-col justify-center text-start'>
              <div className='flex flex-col justify-center text-center p-6 rounded-2xl'>
                <p className='text-5xl font-normal'>
                  nagaoka.dev
                </p>
                <div className='flex flex-col mt-4 font-light justify-center'>
                  <p className='mx-4'>Reiji Nagaoka</p>
                  <p className='mx-4 mt-1'> 長岡礼二</p>
                </div>
              </div>
              {/* <div className='flex flex-wrap w-96 justify-center text-center px-3 bg-white text-gray-600 font-light'>
              <p className='my-2 mr-3'>Academic</p>
                <p className='my-2 mr-3'>Computational Designer</p>
                <p className='my-2 mr-3'>Web Developer</p>
                <p className='my-2 mr-3'>Writer</p>
                <p className='my-2 mr-3'>Game-maker</p>
                <p className='my-2 mr-3'>Musician</p>
              </div> */}
{/* 
              <div className='flex flex-row justify-center font-light text-start bg-white py-6 rounded-b-2xl
                xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl
                '>

              </div> */}
{/*
              <div className='flex flex-wrap font-light px-0
                sm:text-xs md:text-base lg:text-lg xl:text-lg
                xs:justify-center sm:justify-center
                '>
                <p className='mt-2 mr-3'>Academic</p>
                <p className='mt-2 mr-3'>Computational Designer</p>
                <p className='mt-2 mr-3'>Web Developer</p>
                <p className='mt-2 mr-3'>Writer</p>
                <p className='mt-2 mr-3'>Game-maker</p>
                <p className='mt-2 mr-3'>Musician</p>
              </div> */}
            </div>
          </section>

          <section>
            <About />
          </section>

          <section id='work'>
          <Employment />
          </section>

          <section id='publications'>
          <Publications/>
          </section>

          <section id='talks'>
          <Talks/>
          </section>

          <section id='games'>
          <Games/>
          </section>

          <section id='contact'>
            <Contact />
          </section>

        <section id='footer' className='my-2'>
          <Footer />
        </section>
        </main>
    </Layout>
  )
}


// <Link href='#academic'><p className='mx-2'>Academic</p></Link>
// <Link href='/home'><p className='mx-2'>Web Developer</p></Link>
// <Link href='/home'><p className='mx-2'>Digital Engineer</p></Link>
// <Link href='/home'><p className='mx-2'>Writer</p></Link>
// <Link href='/home'><p className='mx-2'>Game-maker</p></Link>
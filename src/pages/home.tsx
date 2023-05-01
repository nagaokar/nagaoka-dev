import Layout from '@/components/layout';  

import Work from './work';
import Publications from './publications';
import Talks from './talks';
import Games from './games';
import Footer from '@/components/Footer';
import About from './about';


export default function Home() 
{
  return (
    <Layout>
        <main>
          <section id='intro' className='flex flex-row m-auto align-middle justify-center h-screen cursor-default'>
            <div className='flex flex-col justify-center text-start'>
              <div className='flex flex-row mb-2 justify-center text-center'>
                <p className='text-5xl font-normal'>
                  nagaoka.dev                  
                </p>
              </div>
              
              <div className='border-b-2 border-white mt-3'>
              </div>

              <div className='flex flex-row m-0 justify-center font-light text-start
                xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl
                '>
                <p className='mr-2'>Reiji Nagaoka</p>
                <p> | </p>
                <p className='ml-2'> 長岡礼二</p>
              </div>
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

          {/* <section id='work'>
          <Work/>
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
          </section>

        <section id='footer' className='my-2'>
          <Footer />
        </section> */}
        </main>
    </Layout>
  )
}


// <Link href='#academic'><p className='mx-2'>Academic</p></Link>
// <Link href='/home'><p className='mx-2'>Web Developer</p></Link>
// <Link href='/home'><p className='mx-2'>Digital Engineer</p></Link>
// <Link href='/home'><p className='mx-2'>Writer</p></Link>
// <Link href='/home'><p className='mx-2'>Game-maker</p></Link>
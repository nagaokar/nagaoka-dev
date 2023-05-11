import Layout from '@/components/layout';
import Image from 'next/image';

import Employment from './employment';
import Publications from './publications';
import Talks from './talks';
import Games from './games';
import Footer from '@/components/Footer';
import About from './about';
import Contact from './contact';

import ghost from '../icons/undraw/undraw_ghost.svg'

export default function Home()
{
  return (
    <Layout>
        <main>
          <section id='intro' className='flex h-screen align-middle justify-center'>
          <div className='flex flex-row justify-center'>
            
            {/* INTRO IMAGE*/}
            <div className='flex flex-row justify-center align-middle'>
              <Image
                className='mx-7 translate-y-8
                xs:w-32
                sm:w-48
                md:w-48
                lg:w-48
                xl:w-48'
                src={ghost}
                width={150}
                height={150}
                alt='line drawing of a ghost'
              />
            </div>
            
            {/* INTRO TEXT*/}
            <div className='flex flex-row justify-center align-middle'>
              <div className='flex flex-col justify-center font-bold'>
                <p className='
                origin-top-left -rotate-12 
                -translate-x-8 translate-y-2 
                xs:text-7xl 
                sm:text-8xl 
                md:text-4xl  
                lg:text-6xl  
                xl:text-8xl'> 
                  hi!
                </p>
                <p className='
                xs:text-xl 
                sm:text-2xl  
                md:text-3xl  
                lg:text-4xl  
                xl:text-3xl'>
                  I&apos;m reiji nagaoka.   
                </p>
                <p className='
                font-thin
                xs:text-md xs:w-48
                sm:text-lg sm:w-64
                md:text-lg md:w-64
                lg:text-xl lg:w-72
                xl:text-2xl xl:w-72
                '>
                  scholar, game maker, web developer, writer.
                </p>
              </div>
            </div>


          </div>
          </section>
        </main>
    </Layout>
  )
}

{/* <section id='intro' className='flex flex-row m-auto align-middle justify-center h-screen cursor-default'>
<div className='flex flex-col justify-center text-start'>
<div className='flex flex-col justify-start p-6 rounded-2xl'>

</div>
</div>
</section>   */}
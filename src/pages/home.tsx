import LayoutNoFooter from '@/components/layouts/layout-no_footer';
import Image from 'next/image';
import ghost from '../icons/undraw/undraw_ghost.svg'
import Nav from '@/components/NavBar';

export default function Home()
{
  return (
    //START: HOME PAGE CONTAINER
    <main className='w-screen h-screen overflow-y-hidden'>
      <Nav/>
          {/* START: MAIN CONTENT CONTAINER */}
          <section id='intro' className='flex h-screen align-middle justify-center overflow-y-hidden'>
            {/* START: INTRO IMAGE*/}
            <div className='flex flex-row justify-center align-middle'>
              <Image
                className='mx-7 xs:w-32 sm:w-48 md:w-48 lg:w-48 xl:w-48'
                src={ghost}
                width={150}
                height={150}
                alt='line drawing of a ghost'
              />
            </div>
            {/* END: INTRO IMAGE*/}
            {/* START: INTRO TEXT CONTAINER*/}
            <div className='flex flex-row justify-center align-middle -translate-y-10'>
              {/* START: INTRO TEXT*/}
              <div className='flex flex-col justify-center font-bold'>
                <p className='origin-top-left -rotate-12 -translate-x-8
                xs:text-7xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl
                '>
                  hi!
                </p>
                <p className='xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl'>
                  I&apos;m reiji nagaoka.   
                </p>
                <p className='font-thin xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl xs:w-48 sm:w-64 md:w-64 lg:w-72 xl:w-72
                '>
                  scholar, game maker, web developer, writer.
                </p>
              </div>
              {/* END: INTRO TEXT*/}
            </div>
            {/* END: INTRO TEXT CONTAINER*/}
          </section>
          {/* END: MAIN CONTENT CONTAINER */}
      {/* END: HOME SCREEN CONTENT */}
    </main>
    //END: HOME PAGE CONTAINER
  )
}
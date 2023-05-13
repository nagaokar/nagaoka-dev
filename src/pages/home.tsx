import LayoutNoFooter from '@/components/layouts/layout-no_footer'
import Image from 'next/image'
import ghost from '../icons/undraw/undraw_ghost.svg'
import Nav from '@/components/NavBar'

export default function Home() {
  return (
    //START: HOME PAGE CONTAINER
    <main className="h-screen w-screen overflow-y-hidden">
      <Nav />
      {/* START: MAIN CONTENT CONTAINER */}
      <section
        id="intro"
        className="flex h-screen justify-center overflow-y-hidden align-middle"
      >
        {/* START: INTRO IMAGE*/}
        <div className="flex flex-row justify-center align-middle">
          <Image
            className="mx-7 xs:w-32 sm:w-48 md:w-48 lg:w-48 xl:w-48"
            src={ghost}
            width={150}
            height={150}
            alt="line drawing of a ghost"
          />
        </div>
        {/* END: INTRO IMAGE*/}
        {/* START: INTRO TEXT CONTAINER*/}
        <div className="flex -translate-y-10 flex-row justify-center align-middle">
          {/* START: INTRO TEXT*/}
          <div className="flex flex-col justify-center font-bold">
            <p
              className="origin-top-left -translate-x-8 -rotate-12
                xs:text-7xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl
                "
            >
              hi!
            </p>
            <p className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl">
              I&apos;m reiji nagaoka.
            </p>
            <p
              className="xs:text-md font-thin xs:w-48 sm:w-64 sm:text-lg md:w-64 md:text-lg lg:w-72 lg:text-xl xl:w-72 xl:text-2xl
                "
            >
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

import Link from 'next/link'

export default function Nav() {
  return (

    // START: MAIN NAV CONTAINER
    <nav className='flex flex-col z-40 h-12 justify-center align-middle bg-white mt-2
      sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl
    '>
      {/* START: NAV-ITEM CONTAINER */}
      <div className='flex flex-row align-middle font-thin text-center justify-center
      sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl
      '>
        {/* WEBSITE BRAND */}
        <Link href='/#'>
          <p className='flex-row font-bold align-middle mr-5'>
            nagaoka.dev
          </p>
        </Link>
        {/* NAV-ITEM: HOME */}
        <div className='xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5'>
          <Link href='/home'>
            <p>home</p>
          </Link>
        </div>
        {/* NAV-ITEM: ABOUT */}
        <div className='xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5'>
          <Link href='/about'>
            <p>about</p>
          </Link>
        </div>
        {/* NAV-ITEM: WORK*/}
        <div className='xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5'>
          <Link href='/work'>
            <p>work</p>
          </Link>
        </div>
        {/* NAV-ITEM: CONTACT */}
        <div className='xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5'>
          <Link href='/contact'>
            <p>contact</p>
          </Link>
        </div>
      </div>
      {/* END: NAV-ITEM CONTAINER */}
    </nav>
    // END: MAIN NAV CONTAINER
  )
}
import Link from 'next/link'

export default function Nav() {
  return (
    // START: MAIN NAV CONTAINER
    <nav
      className="md:text-md z-40 flex h-12 w-screen flex-col justify-center bg-white 
      align-top sm:text-sm lg:text-lg xl:text-xl 2xl:text-xl
    "
    >
      {/* START: NAV-ITEM CONTAINER */}
      <div
        className="md:text-md flex flex-row justify-center text-center align-middle
      font-thin sm:text-sm lg:text-lg xl:text-xl 2xl:text-xl
      "
      >
        {/* WEBSITE BRAND */}
        {/* <Link href='/#'>
          <p className='flex-row font-bold align-middle mr-5'>
            nagaoka.dev
          </p>
        </Link> */}
        {/* NAV-ITEM: HOME */}
        <div className="xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5">
          <Link href="/home">
            <p>home</p>
          </Link>
        </div>
        {/* NAV-ITEM: ABOUT */}
        <div className="xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5">
          <Link href="/about">
            <p>about</p>
          </Link>
        </div>
        {/* NAV-ITEM: PROJECTS*/}
        {/* <div className='xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5'>
          <Link href='/projects'>
            <p>projects</p>
          </Link>
        </div> */}
        {/* NAV-ITEM: CONTACT */}
        <div className="xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5">
          <Link href="/contact">
            <p>contact</p>
          </Link>
        </div>
      </div>
      {/* END: NAV-ITEM CONTAINER */}
    </nav>
    // END: MAIN NAV CONTAINER
  )
}

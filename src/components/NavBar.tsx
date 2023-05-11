import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['400'], subsets: ['latin']})

import Link from 'next/link'

export default function Nav() {
  return (

    <nav className='flex flex-col z-40 h-12 justify-center align-middle bg-white
      sm:text-sm 
      md:text-md 
      lg:text-lg 
      xl:text-xl
      2xl:text-xl

    '>
      
      <section id='nav-items' className='flex flex-row text-center justify-center'>

        {/* WEBSITE BRAND
        <Link href='/#'>
          <p className='font-bold'>
            nagaoka.dev
          </p>
        </Link> */}

        {/* START: NAV-ITEM CONTAINER */}
        <div className='flex flex-row align-middle font-thin
          sm:text-sm 
          md:text-md 
          lg:text-lg
          xl:text-xl
          2xl:text-xl
        '>
          
          {/* NAV-ITEM: HOME */}
          <div className='
          xs:px-2
          sm:px-3
          md:px-3 
          lg:px-5 
          xl:px-5
          2xl:px-5
          '>
            <Link href='/#'>
              <p>home</p>
            </Link>
          </div>

          {/* NAV-ITEM: ABOUT */}
          <div className='
          xs:px-2
          sm:px-3
          md:px-3 
          lg:px-5 
          xl:px-5
          2xl:px-5
          '>
            <Link href='/#'>
              <p>about</p>
            </Link>
          </div>

          {/* NAV-ITEM: WORK*/}
          <div className='
          xs:px-2
          sm:px-3
          md:px-3 
          lg:px-5 
          xl:px-5
          2xl:px-5
          '>
            <Link href='/#'>
              <p>work</p>
            </Link>
          </div>

          {/* NAV-ITEM: CONTACT */}
          <div className='
          xs:px-2
          sm:px-3
          md:px-3 
          lg:px-5 
          xl:px-5
          2xl:px-5
          '>
            <Link href='/#'>
              <p>contact</p>
            </Link>
          </div>

        </div>
        {/* END: NAV-ITEM CONTAINER */}

      </section>
    
    
    </nav>
  )
}
import Link from 'next/link'

export default function Index()
{
  return(
    <main className="flex flex-col text-center pb-2 w-screen h-screen overflow-y-hidden">
      <div className={`flex flex-col h-screen justify-center align-middle text-7xl cursor-default`}>
          
        {/* START: TITLE TEXT */}
          <div className='font-bold 
          xs:text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2x:text-7xl'>
            <p>nagaoka.dev</p>
          </div>
        {/* END: TITLE TEXT */}
        
        {/* START: ENTER TEXT */}
          <div className='font-regular
            xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2x:text-5xl'>
            <Link href='/home'>
              <p>enter</p>
            </Link>
          </div>
        {/* END: ENTER TEXT */}
      </div>
    </main>
  )
}
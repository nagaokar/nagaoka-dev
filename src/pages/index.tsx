import Link from 'next/link'

export default function Index() {
  return (
    <main className="flex h-screen w-screen flex-col overflow-y-hidden pb-2 text-center">
      <div
        className={`flex h-screen cursor-default flex-col justify-center align-middle text-7xl`}
      >
        {/* START: TITLE TEXT */}
        <div
          className="2x:text-7xl 
          font-bold xs:text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl"
        >
          <p>nagaoka.dev</p>
        </div>
        {/* END: TITLE TEXT */}

        {/* START: ENTER TEXT */}
        <div
          className="font-regular
            2x:text-5xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl"
        >
          <Link href="/home">
            <p>enter</p>
          </Link>
        </div>
        {/* END: ENTER TEXT */}
      </div>
    </main>
  )
}

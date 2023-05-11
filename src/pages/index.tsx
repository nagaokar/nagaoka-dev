import Link from 'next/link'

export default function Index()
{
  return(
    <main className="flex flex-col text-center pb-2 w-screen  h-screen overflow-x-hidden overflow-h-hidden">
      <div className={`flex flex-col h-screen justify-center align-middle text-7xl cursor-default`}>
        <div>
          <div className='font-bold text-4xl'>
            <p>nagaoka.dev</p>
          </div>
          <div className='font-regular text-3xl'>
            <Link href='/home'>
              <p>enter</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
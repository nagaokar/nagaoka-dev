import Link from 'next/link'

export default function Home()
{
  return(
    <main className="flex flex-col text-center pb-2 w-screen bg-blue-200 h-screen overflow-x-hidden overflow-h-hidden">
      <div className={`flex flex-col h-screen justify-center align-middle text-7xl cursor-default font-black`}>
        <Link href='/home'>
          <p>長岡</p>
          <div className='mt-3'>
            <p>礼二</p>
          </div>
        </Link>
      </div>
    </main>
  )
}
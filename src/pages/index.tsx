import Link from 'next/link'

export default function Index()
{
  return(
    <main className="flex flex-col text-center pb-2 w-screen bg-blue-200 h-screen overflow-x-hidden overflow-h-hidden">
      <div className={`flex flex-col h-screen justify-center align-middle text-7xl cursor-default font-regular`}>
        <Link href='/home'>
          <p>長 岡</p>
          <div className='mt-6'>
            <p>礼 二</p>
          </div>
        </Link>
      </div>
    </main>
  )
}
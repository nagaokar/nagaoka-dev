import Image from 'next/image'
import { Inter, Jost } from 'next/font/google'
import Nav from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin']})

export default function Home() {
  return (
    <main 
    className={`flex min-h-screen flex-col items-center justify-top p-24 ${jost.className}`}
    >
      {/* START: Title */}
      <div className={'text-4xl m-10'}>
        <h1>about</h1>
      </div>
      <div className='pb-4'>
        <Nav/>
      </div>
      {/* END: Title */}

      {/* START: Work */}
      <div className='flex flex-col w-[500px] mt-10 items-center justify-center p-6'>
        <h2 className='text-2xl m-3'>employment</h2>
        <div className='flex w-[500px] justify-center'>
          <div className='flex-basis pr-5'>
            <li className='list-none'>
              <ul>Research Assistant</ul>
              <ul>Graduate Digital Engineer</ul>
            </li>
          </div>
          <div className='flex-basis'>
            <li className='list-none'>
              <ul>Manchester Game Centre</ul>
              <ul>Costain</ul>
            </li>
        </div>
      </div>
      </div>
      {/* END: Work */}

      {/* START: Education */}
      <div className='flex flex-col w-[500px] mt-10 items-center justify-center p-2'>
        <h2 className='text-2xl m-3'>education</h2>
        <div className='flex w-[500px] justify-center'>
          <div className='flex-basis pr-5'>
            <li className='list-none'>
              <ul>BA Architecture</ul>
              <ul>MA Architecture</ul>
              <ul>PhD Architecture</ul>
            </li>
          </div>
          <div className='flex-basis'>
            <li className='list-none'>
              <ul>Manchester School of Architecture</ul>
              <ul>CPU.Ai, Manchester School of Architecture</ul>
              <ul>Manchester Metropolitan University</ul>
            </li>
        </div>
      </div>
    </div>
    {/* END: Education */}

    </main>
  )
}





  // <main
  //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  // >
  //   <div>
  //     <h1>Hello World </h1>
  //   </div>
  // </main>
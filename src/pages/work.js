import { Inter, Jost } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin']})

import Nav from '@/components/NavBar';
import PublicationPost from '@/components/Publications'
import PublicationList from '@/components/Publications'
import WorkList from '@/components/Works'
import WorkPost from '@/components/Works'
import ConferencePost from '@/components/Conferences'
import ConferenceList from '@/components/Conferences'
import Footer from '@/components/Footer';


export default function Work() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-top p-24 ${jost.className}`}>
      
      <div className={'text-4xl m-10'}>
        <h1>work</h1>
      </div>
      
      <div className='pb-4'>
        <Nav />
      </div>

      {/* START: Publications  */}
      <div className='flex w-[500] flex-col mt-10 items-center justify-center p-6'>
        <h2 className='text-2xl pb-4'>publications</h2>
        <div className='flex p-2 w-[500]'>
          <div className='basis'>
              <li className='list-none'>
                <PublicationPost items={PublicationList}/>
              </li>
          </div>
        </div>
      </div>
      {/* END: Publications  */}
      
      {/* START: Conferences  */}
      <div className='flex w-[500] flex-col mt-10 items-center justify-center p-6'>
        <h2 className='text-2xl pb-4'>conferences + talks</h2>
        <div className='flex p-2 w-[500]'>
          <div className='basis'>
              <li className='list-none'>
                <ConferencePost items={ConferenceList}/>
              </li>
          </div>
        </div>
      </div>
      {/* END: Works: Conferences  */}


      {/* START: Works: Games  */}
      <div className='flex w-[500] flex-col mt-10 items-center justify-center p-6'>
        <h2 className='text-2xl  pb-4'>games</h2>
        <div className='flex p-2 w-[500]'>
          <div className='basis'>
              <li className='list-none'>
                <WorkPost items={WorkList}/>
              </li>
          </div>
        </div>
      </div>
      {/* END: Works: Games  */}

      <Footer/>
    </main>
  );
}


// <div className='flex w-100 flex-col mt-10 items-center justify-center p-6'>
// <h2 className='text-2xl m-3'>Publications</h2>
// <div className='flex p-2'>
//   <div className='flex-basis pr-5'>
//     <li className='list-none'>
//     <PublicationPost items={PublicationList}/>
//     </li>
// </div>
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
    <main className={`flex min-h-screen max-h-screen flex-col items-center justify-top p-8 ${jost.className}`}>
    <nav className='flex items-center'>
      <Nav/>
    </nav>
      

      {/* <div class="flex flex-wrap pt-12">
        <WorkPost items={WorkList}/>
      </div> */}

    </main>
  );
}

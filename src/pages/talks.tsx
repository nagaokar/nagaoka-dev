import { Talk, talks } from '@/components/ContentDB';
import { TalkPost } from '@/components/TalkCard';


export default function Talks() {
  return (
    <main className='flex flex-wrap justify-center align-middle overflow-x-hidden py-8'>
      <div className='flex flex-col justify-center'>
        <div className='mb-6 justify-center text-center font-black
        xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl'>
          <p>Conferences & Talks</p>
        </div>
          <div className='flex flex-wrap mt-6 ml-6 mr-6 text-align-left justify-center'>
          {talks.map((talk: Talk, index:number) => (
            <TalkPost
            key={index}
            index={index}
            title={talk.title}
            organisation={talk.organisation}
            date={talk.date}
            />
            ))}
          </div>
        </div>
    </main>
  )
}
import { Talk, TalkPost, talks } from '@/components/Works';

export default function Publications() {
  return (
    <main className='flex flex-wrap justify-center align-middle overflow-x-hidden py-16'>
        <div className='flex flex-col justify-center h-screen'>
          <p>Conferences + Talks</p>
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
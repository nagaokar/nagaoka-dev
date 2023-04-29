import { Job, JobPost, jobs } from '@/components/Jobs';
import { Publication, PublicationPost, publications } from '@/components/Works';
import { Talk, TalkPost, talks } from '@/components/Works';
import { Game, GamePost, games } from '@/components/Works';

export default function work() {
  return (
    <main className='flex flex-wrap justify-center align-middle overflow-x-hidden py-16'>
      <div className='flex flex-col justify-center'>
          <p>Employment</p>

          <div className='flex flex-wrap my-6 mx-6 justify-center'>
          {jobs.map((job: Job, index:number) => (
            <JobPost
            key={index}
            index={index}
            title={job.title}
            desc={job.desc}
            organisation={job.organisation}
            date={job.date}
            />
            ))}
          </div>
        </div>

      <div className='flex flex-col justify-center'>
          <p>Publications</p>
          <div className='flex flex-wrap mt-6 ml-6 mr-6 text-align-left justify-center'>
          {publications.map((publication: Publication, index:number) => (
            <PublicationPost
            key={index}
            index={index}
            title={publication.title}
            organisation={publication.organisation}
            link={publication.link}
            date={publication.date}
            />
            ))}
          </div>
        </div>

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

        <div className='flex flex-col justify-center h-screen'>
          <p>Games</p>
          <div className='flex flex-wrap mt-6 ml-6 mr-6 text-align-left justify-center'>
          {games.map((game: Game, index:number) => (
            <GamePost
            key={index}
            index={index}
            title={game.title}
            desc={game.desc}
            organisation={game.organisation}
            date={game.date}
            />
            ))}
          </div>
        </div>

    </main>
  )
}
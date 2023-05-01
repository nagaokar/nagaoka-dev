import { Publication, publications } from '@/components/ContentDB';
import { PublicationPost } from '@/components/PublicationCard';



export default function publication() {
  return (
    <main className='flex flex-wrap justify-center align-middle overflow-x-hidden py-8'>
      <div className='flex flex-col justify-center'>
        <div className='mb-6 justify-center text-center font-black
        xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl'>
          <p>Publications</p>
        </div>
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
    </main>
  );
}
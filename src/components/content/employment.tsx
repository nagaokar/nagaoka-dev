import Image from 'next/image';
import { Job, jobs } from  '../../lib/ContentDB';
import { JobPost } from '@/components/cards/EmploymentCard';
import Underline from '../../icons/undraw/undraw_underline.svg'

export default function Employment() {
  return (
    <section id='employment-content' className='py-4'>
      {/* START: EMPLOYMENT TITLE */}
      <div className="flex flex-col justify-center font-bold text-3xl mb-8">
          {/* TITLE TEXT */}
          <p>employment</p>
          {/* TITLE UNDERLINE */}
          <Image 
          className="mt-1 rotate-2" src={Underline} width={200} height={500}
          alt="A black underline of the title"
          />
      </div>
      {/* END: EMPLOYMENT TITLE */}
      {/* START: EMPLOYMENT CARD */}
      <div>
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
      {/* END: EMPLOYMENT CARD */}
    </section>
  )
}

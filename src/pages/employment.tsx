import { Job, jobs } from '@/components/ContentDB';
import { JobPost } from '@/components/EmploymentCard';


export default function Employment() {
  return (
    <main className='flex flex-wrap justify-center align-middle overflow-x-hidden pt-16 pb-8'>
      <div className='flex flex-col justify-center'>
        <div className='mb-6 justify-center text-center font-black
        xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl'>
          <p>Employment</p>
        </div>
          <div className='flex flex-row flex-wrap justify-start text-start my-6 mx-6'>
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
    </main>
  )
}
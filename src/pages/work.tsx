import { Job, JobPost, jobs } from '@/components/Jobs';

export default function Work() {
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
    </main>
  )
}
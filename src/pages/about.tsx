import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app'

import { Job, JobPost, JobPostProps, jobs } from '@/components/Jobs';

import Layout from '@/components/layouts/layout';  
import NestedLayout from '@/components/layouts/nested-layout';




const About: NextPageWithLayout = () => 
{
  const job: Job[] = jobs;

  return (
    <main className='flex flex-col justify-center align-middle overflow-x-hidden'>
      
      <div className='flex flex-col justify-center h-screen'>
        <p>Hi. I&apos;m Reiji Nagaoka.</p>
        <div className='flex flex-col mt-6 ml-6 mr-6 text-align-left justify-center'>
        <p className='text-base'>
            An eco-game and urban studies scholar working in Manchester, UK.
          </p>
        </div>
      </div>
      <div>
        <div className='flex flex-col justify-center'>
          <p>Employment</p>

          <div className='flex flex-wrap mt-6 ml-6 mr-6 text-align-left justify-center'>
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

      </div>
    </main>
  )
}

About.getLayout = function getLayout(about: ReactElement) {
  return(
    <Layout>
      <NestedLayout>
        {about}
      </NestedLayout>
    </Layout>
  )
}
export default About;
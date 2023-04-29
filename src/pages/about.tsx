import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app'

import { Job, JobPost, JobPostProps, jobs } from '@/components/Jobs';

import Layout from '@/components/layouts/layout';  
import NestedLayout from '@/components/layouts/nested-layout';
import work from './work'


const About: NextPageWithLayout = () => 
{
  const job: Job[] = jobs;

  return (
    <main className='flex flex-col justify-center p-12 align-middle overflow-x-hidden h-content mt-[-10] bg-white text-blue-200 border-8 border-blue-200 10 bg-blur-2xl'>
      <div className='align-middle text-start sm:justify-left md:justify-left lg:justify-center md:p-12 lg:p-16 xl:p-24'>
        <div className='sm:text-sm md:text-md lg:text-base xl:text-lg sm: mx-2 md:mx-12 lg:mx-16 xl:scroll-mx-24 font-light'>
        <p>
            I am primarily a Ph.D Researcher working at Manchester Metropolitan University.
            My Leverhulme-funded PhD project is part of the Leverhulme Unit for the Design of Future Cities (LuDEC), which seeks to
            overcome interdisciplinary boundaries and challenge contemporary academic paradigms.
          </p>
          <p className='mt-6'>
            My research examines climate-related collective player actions in an Online Multiplayer Environmental Videogame.
            It adopts an interdisciplinary approach to analyse collective player actions within a (simulated) 
            urban context where interactive and collective player behaviours in a dynamic game environment have explicit climate implications 
            and ecological impacts at a systemic level. My thesis is currently titled: 
        </p>
        <p className='mt-6'>
          <span className=''>
            Revitalising Alternative Future Cities: Cognitive climate Behaviour in an Online Multiplayer Urban Eco-game.
        </span>
        </p>
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
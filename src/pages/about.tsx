import React from 'react'
import Spacer from '@/components/Spacer'
import Layout from '@/components/layouts/layout'
import { textData } from '@/lib/TextDatabase'
import Title from '@/components/Title'

export default function About() {
  const taglineText = textData.find((item) => item.tag === 'tagline')
  const academicProfileText = textData.find((item) => item.tag === 'academicProfile')
  const developerProfileText = textData.find((item) => item.tag === 'developerProfile')
  if (!taglineText) { return null }
  if (!academicProfileText) { return null }
  if (!developerProfileText) { return null }
  return (
    <>
        {/* <div className="font-bold my-3 flex flex-col text-5xl items-center text-center mb-12">
          <p className="-rotate-2">About</p>
          <Image
            className="justify-center"
            src={curvedUnderline}
            width={200}
            height={100}
            alt=""
          />
        </div> */}
        <Title text='About' />
        
        {/* START: NOTE */}
        <div className="flex justify-center">
          <div className="max-w-144 sm:text-md my-6 flex flex-col justify-center p-6 text-center text-2xl font-bold">
            <Spacer />
            <div className="my-4">
              <p className="my-2 bg-white text-xl font-bold underline decoration-2">
                note: summer <span className="text-sm">2023</span>
              </p>
              <p>
                if you&apos;d like to hire me, i am currently able to take on:{' '}
              </p>
              <ul className="my-3 font-normal">
                <li>videogame related articles</li>
                <li>small web design projects (design/dev)</li>
              </ul>
            </div>
            <Spacer />
          </div>
        </div>
        {/* END: NOTE */}
        {/* START: ABOUT */}
        <section id="taglineCard" className="flex justify-center">
          <div
            id="profileContainer"
            className="mb-5 mt-3 flex flex-col max-w-[800px]"
          >
            <div
              id="academicProfileTextprofileContainer"
              className='text-xl'
            >
              <p className='font-bold'>{academicProfileText.title}</p>
              <p className='text-xl max-w-144 mb-6'>
                {academicProfileText.sentences}
              </p>
            </div>
            <div
              id="developerProfileTextprofileContainer"
              className='text-xl'
            >
              <p className='font-bold'>{developerProfileText.title}</p>
              <p className='text-xl max-w-144 mb-6'>
                {developerProfileText.sentences}
              </p>
            </div>
          </div>
        </section>
        {/* END: ABOUT */}
    </>
  )
}

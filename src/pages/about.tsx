import React from 'react'
import Spacer from '@/components/Spacer'
import Layout from '@/components/layouts/layout'
import LayoutNoFooter from '@/components/layouts/layout-no_footer'
import { textData } from '@/lib/TextDatabase'

export default function About() {
  const taglineText = textData.find((item) => item.tag === 'tagline')
  const academicProfileText = textData.find((item) => item.tag === 'academicProfile')
  const developerProfileText = textData.find((item) => item.tag === 'developerProfile')
  if (!taglineText) { return null }
  if (!academicProfileText) { return null }
  if (!developerProfileText) { return null }
  return (
    <>
      <LayoutNoFooter>
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
        
        {/* START: TITLE */}
        <div className='flex justify-center text-6xl mt-3 mb-12 -rotate-3'>
          <p>About</p>
        </div>
        {/* END: TITLE */}

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
          </div>
        </section>

        {/* START: ABOUT */}
        {/* <section id="taglineCard" className="flex justify-center">
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
        </section> */}
        {/* END: ABOUT */}

      </LayoutNoFooter>
    </>
  )
}

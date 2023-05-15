import React from 'react'
import Image from 'next/image'
import Layout from '@/components/layouts/layout'
import curvedUnderline from '../icons/undraw/undraw_curved-underline.svg'
import TaglineSection from '@/sections/TaglineSection'
import ProfileSection from '@/sections/ProfileSection'
import CVSection from '@/sections/CVSection'
import ProfileListLayout from '@/components/layouts/ProfileListLayout'
import Spacer from '@/components/Spacer'
import StarSpacer from '@/components/StarSpacer'

export default function About() {
  return (
    <>
      <Layout>
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
        <TaglineSection />
        <div className="flex justify-center">
          <div className="w-144 sm:text-md my-6 flex flex-col justify-center border-2 border-black p-6 text-center text-2xl font-bold">
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
        <ProfileSection />
        {/* <CVSection /> */}
      </Layout>
    </>
  )
}

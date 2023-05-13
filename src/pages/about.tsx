import React from 'react'
import Image from 'next/image'

import { posts } from '../lib/ContentDatabase'
import { textData } from '../lib/TextDatabase'


import { PostCard } from '../components/PostCard'

import Layout from '@/components/layouts/layout'
import Title from '../components/Title'
import Underline from '../icons/undraw/undraw_underline.svg'
import CurvedUnderline from '../icons/undraw/undraw_curved-underline.svg'
import TreeIcon from '../icons/undraw/undraw_tree.svg';
import CodeIcon from '../icons/undraw/undraw_code.svg';
import Tagline from '@/components/Tagline'
import Profile from '@/components/Profile'


export default function About() {
  const CurvedUnderlineAlt = "a black curved underline";
  const UnderlineAlt = "a black underline"

  const employmentPosts = posts.filter((post) => post.tag === 'employment')
  const academicPosts = posts.filter((post) => post.tag === 'academic')
  const educationPosts = posts.filter((post) => post.tag === 'education')
  const gamesPosts = posts.filter((post) => post.tag === 'game')

  {/* START: x */ }
  {/* END: x */ }


  return (
    <>
      <Layout>
        {/* START: PAGE TITLE */}
        <div id="pageTitle" className='mb-12'>
          <Title
            title="about"
            graphic={CurvedUnderline}
            rotation='-rotate-4'
            alt={CurvedUnderlineAlt}
          />
        </div>
        {/* END: PAGE TITLE */}


        <Tagline />
        
        
        {/* START: PROFILES CONTAINER */}
        <div className='mt-3 mb-12'>
          <div className="flex flex-row justify-center align-top">
            <Image className="flex my-2" src={TreeIcon} width={40} height={50}
              alt="line drawing of a tree"/>
          </div>
          <Profile data={textData} fieldName='profile-academic' />
          
          <div className="flex flex-row justify-center align-top">
          <Image className="flex my-2" src={CodeIcon} width={50} height={50}
            alt="line drawing of a html closing tag"/>
          </div>
          <Profile data={textData} fieldName='profile-dev' />
        </div>
        {/* END: PROFILES CONTAINER */}

        {/* START: CV */}
        <div
          id="cv-container"
          className="flex flex-row flex-wrap align-top
          xs:w-full sm:w-full md:w-full lg:w-1/2 lg:translate-x-1/2 xl:w-1/2 xl:translate-x-1/2 2xl:w-1/2 2xl:translate-x-1/2"
        >
          {/* START: COLUMN 1 */}
          <div>
            {/* START: ACADEMIC */}
            <div className="my-5 mt-3 flex max-w-[400px] flex-col">
              <Title
                title="academic"
                graphic={Underline}
                rotation="-rotate-3"
                alt={UnderlineAlt}
              />
              {academicPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </div>
            {/* END: ACADEMIC */}
            {/* START: GAMES */}
            <div className="my-3 mt-3 flex max-w-[400px]  flex-col">
              <Title
                title="games"
                graphic={Underline}
                rotation="rotate-2"
                alt={UnderlineAlt}
              />
              {gamesPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </div>
            {/* END: GAMES */}
          </div>
          {/* END: COLUMN 1 */}

          {/* START: COLUMN 2 */}
          <div>
            {/* START: EMPLOYMENT */}
            <div className="my-3  mt-3 flex max-w-[400px] flex-col">
              <Title
                title="employment"
                graphic={Underline}
                rotation="rotate-3"
                alt={UnderlineAlt}
              />
              {employmentPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </div>
            {/* END: EMPLOYMENT */}
            {/* START: EDUCATION */}
            <div className="my-3 mt-3 flex max-w-[400px] flex-col">
              <Title
                title="education"
                graphic={Underline}
                rotation="-rotate-2"
                alt={UnderlineAlt}
              />
              {educationPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </div>
            {/* END: EDUCATION */}
          </div>
          {/* END: COLUMN 2 */}
        </div>
        {/* END: CV */}
      </Layout>
    </>
  )
}

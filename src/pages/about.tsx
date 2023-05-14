import React from 'react'
import Image from 'next/image'

import { posts } from '../lib/ContentDatabase'
import { textData } from '../lib/TextDatabase'

import { PostCard } from '../components/PostCard'

import Layout from '@/components/layouts/layout'
import Title from '../components/Title'
import Underline from '../icons/undraw/undraw_underline.svg'
import CurvedUnderline from '../icons/undraw/undraw_curved-underline.svg'
import TreeIcon from '../icons/undraw/undraw_tree.svg'
import CodeIcon from '../icons/undraw/undraw_code.svg'
import TaglineLayout from '@/components/layouts/TaglineLayout'
import ProfileLayout from '@/components/layouts/ProfileLayout'
import Profile from '@/components/profile'
import PostLayout from '@/components/layouts/PostLayout'

export default function About() {
  const CurvedUnderlineAlt = 'a black curved underline'
  const UnderlineAlt = 'a black underline'

  const employmentPosts = posts.filter((post) => post.tag === 'employment')
  const academicPosts = posts.filter((post) => post.tag === 'academic')
  const educationPosts = posts.filter((post) => post.tag === 'education')
  const gamesPosts = posts.filter((post) => post.tag === 'game')
  return (
    <>
      <Layout>
        {/* START: PAGE TITLE */}
        <div id="pageTitle" className="mb-12">
          <Title
            title="about"
            textSize="text-5xl"
            graphic={CurvedUnderline}
            rotation="-rotate-4"
            alt={CurvedUnderlineAlt}
          />
        </div>
        {/* END: PAGE TITLE */}


        {/* START: TAGLINE */}
        <TaglineLayout>
          <Profile data={textData} fieldName="tagline" />
        </TaglineLayout>
        {/* START: END */}

        {/* START: ACADEMIC PROFILE */}
        <ProfileLayout>
          <Profile data={textData} fieldName="profile-academic"
            imageSrc={TreeIcon}
            width={40}
            height={50}
            alt="line drawing of a tree" />
        </ProfileLayout>
        {/* END: ACADEMIC PROFILE */}

        {/* START: DEV PROFILE */}
        <ProfileLayout>
          <Profile data={textData} fieldName="profile-dev"
            imageSrc={CodeIcon}
            width={50}
            height={50}
            alt="line drawing of a html closing tag" />
        </ProfileLayout>
        {/* END: DEV PROFILE */}

        {/* START: CV */}
        <div className="flex flex-wrap justify-center">
          {/* START: COLUMN 1 */}
          <div id="column 1">
            {/* START: ACADEMIC */}
            <PostLayout>
              <Title
                title="academic"
                textSize="text-3xl"
                graphic={Underline}
                rotation="-rotate-3"
                alt={UnderlineAlt}
              />
              {academicPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </PostLayout>
            {/* END: ACADEMIC */}

            {/* START: GAMES */}
            <PostLayout>
              <Title
                title="games"
                textSize="text-3xl"
                graphic={Underline}
                rotation="rotate-2"
                alt={UnderlineAlt}
              />
              {gamesPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </PostLayout>
            {/* END: GAMES */}
          </div>
          {/* END: COLUMN 1 */}
          {/* START: COLUMN 2 */}
          <div  id="column 1">
            {/* START: EMPLOYMENT */}
            <PostLayout>
              <Title
                title="employment"
                textSize="text-3xl"
                graphic={Underline}
                rotation="rotate-3"
                alt={UnderlineAlt}
              />
              {employmentPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </PostLayout>
            {/* END: EMPLOYMENT */}
            {/* START: EDUCATION */}
            <PostLayout>
              <Title
                title="education"
                textSize="text-3xl"
                graphic={Underline}
                rotation="-rotate-2"
                alt={UnderlineAlt}
              />
              {educationPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </PostLayout>
            {/* END: EDUCATION */}
          </div>
          {/* END: COLUMN 2 */}
        </div>
        {/* END: CV */}
      </Layout>
    </>
  )
}

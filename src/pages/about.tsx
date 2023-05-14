import React from 'react'
import Image from 'next/image'

import { posts } from '../lib/ContentDatabase'
import { textData } from '../lib/TextDatabase'

import PostCard from '../components/PostCard'

import Layout from '@/components/layouts/layout'
import TaglineLayout from '@/components/layouts/TaglineLayout'
import ProfileLayout from '@/components/layouts/ProfileLayout'

import PostList from '../components/PostList'
import Title from '../components/Title'
import Underline from '../icons/undraw/undraw_underline.svg'
import CurvedUnderline from '../icons/undraw/undraw_curved-underline.svg'
import TreeIcon from '../icons/undraw/undraw_tree.svg'
import CodeIcon from '../icons/undraw/undraw_code.svg'
import StarIcon from '../icons/undraw/undraw_star.svg'
import TextParagraph from '@/components/TextParagraph'

export default function About() {
  const CurvedUnderlineAlt = 'a black hand-drawn curved underline'
  const UnderlineAlt = 'a black hand-drawn straight underline'

  const taglineText = textData.find((item) => item.tag === 'tagline')
  if (!taglineText) { return null }

  const academicProfile = textData.find((item) => item.tag === 'academic')
  if (!academicProfile) { return null }

  const developerProfile = textData.find((item) => item.tag === 'developer')
  if (!developerProfile) { return null }

  const employmentPosts = posts.filter((post) => post.tag === 'employment')
  if (!employmentPosts) { return null }

  const academicPosts = posts.filter((post) => post.tag === 'academic')
  if (!academicPosts) { return null }

  const educationPosts = posts.filter((post) => post.tag === 'education')
  if (!educationPosts) { return null }

  const gamesPosts = posts.filter((post) => post.tag === 'game')
  if (!gamesPosts) { return null }

  return (
    <>
      <Layout
        titleProps={{
          title: "about",
          titleType: 'imageUnder',
          titleCssProps: "text-5xl",
          imageSrc: CurvedUnderline,
          width: 200,
          height: 200,
          imageCssProps: "-rotate-6",
          alt: "a black curved underline"
        }}
      >

        {/* START: TAGLINE */}
        <TaglineLayout>
          <TextParagraph
            titleProps={{
              title: "Tagline",
              titleType: "imageUnder",
              titleCssProps: "text-3xl",
              imageSrc: "",
              width: 0,
              height: 0,
              imageCssProps: "",
              alt: ""
            }}
            jsonData={taglineText}
          />
        </TaglineLayout>
        {/* END: TAGLINE */}


        {/* START: PROFILE CONTAINER */}
        <div className="flex flex-row flex-wrap justify-center">
          <ProfileLayout>
            {/* START: ACADEMIC PROFILE */}
            <TextParagraph
              titleProps={{
                title: "Tagline",
                titleType: "imageAbove",
                titleCssProps: "font-bold text-center my-2",
                imageSrc: TreeIcon,
                width: 200,
                height: 200,
                imageCssProps: "",
                alt: "a black curved underline"
              }}
              jsonData={academicProfile}
            />
          </ProfileLayout>
          {/* END: ACADEMIC PROFILE */}

          {/* START: DEV PROFILE */}
          <ProfileLayout>
            <TextParagraph
              titleProps={{
                title: "Developer Profile",
                titleType: "imageAbove",
                titleCssProps: "ont-bold text-center my-2",
                imageSrc: CodeIcon,
                width: 200,
                height: 200,
                imageCssProps: "",
                alt: "a black curved underline"
              }}
              jsonData={developerProfile}
            />
            {/* END: DEV PROFILE */}
          </ProfileLayout>
        </div>



        {/* START: CV TITLE */}
        <div id="cvTitle" className="mt-8 mb-6">
          <Title
            title="CV"
            titleType='centered'
            titleCssProps="text-5xl absolute inset-0 flex justify-center items-center"
            imageSrc={StarIcon}
            width={150}
            height={200}
            imageCssProps="-rotate-6 relative mb-5 mt-1 flex justify-center"
            alt={"a black curved underline"}
          />
        </div>
        {/* END: CV TITLE */}

        {/* START: CV BODY */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex flex-row w-screen justify-center">
          </div>
          {/* START: COLUMN 1 */}
          <div id="postListColumn1">
            {/* START: ACADEMIC */}
            <PostList
              titleProps={{
                title: "Academic",
                titleType: 'imageUnder',
                titleCssProps: "text-3xl flex justify-center",
                imageSrc: Underline,
                width: 200,
                height: 500,
                imageCssProps: "-rotate-3",
                alt: UnderlineAlt,
              }}
              posts={academicPosts}
            />
            {/* END: ACADEMIC */}
            {/* START: GAMES */}
            <PostList
              titleProps={{
                title: "Games",
                titleType: 'imageUnder',
                titleCssProps: "text-3xl",
                imageSrc: Underline,
                width: 200,
                height: 500,
                imageCssProps: "rotate-6",
                alt: UnderlineAlt,
              }}
              posts={gamesPosts}
            />
            {/* END: GAMES */}
          </div>
          {/* END: COLUMN 1 */}
          {/* START: COLUMN 2 */}
          <div id="postListColumn2">
            {/* START: EMPLOYMENT */}
            <PostList
              titleProps={{
                title: "Employment",
                titleType: 'imageUnder',
                titleCssProps: "text-3xl",
                imageSrc: Underline,
                width: 200,
                height: 500,
                imageCssProps: "rotate-3",
                alt: UnderlineAlt,
              }}
              posts={employmentPosts}
            />
            {/* END: EMPLOYMENT */}
            {/* START: EDUCATION */}
            <PostList
              titleProps={{
                title: "Education",
                titleType: 'imageUnder',
                titleCssProps: "text-3xl",
                imageSrc: Underline,
                width: 200,
                height: 500,
                imageCssProps: "-rotate-3",
                alt: UnderlineAlt,
              }}
              posts={educationPosts}
            />
            {/* END: EDUCATION */}

          </div>
          {/* END: COLUMN 2 */}
        </div>
        {/* END: CV BODY*/}
      </Layout>
    </>
  )
}

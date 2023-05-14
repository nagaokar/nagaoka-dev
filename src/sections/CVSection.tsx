import React from "react";
import Image from 'next/image'
import { posts } from '../lib/ContentDatabase'
import { textData } from '../lib/TextDatabase'

import PostCard from '../components/PostCard'

import PostList from '../components/PostList'
import Title from '../components/Title'
import Underline from '../icons/undraw/undraw_underline.svg'
import CurvedUnderline from '../icons/undraw/undraw_curved-underline.svg'

import StarIcon from '../icons/undraw/undraw_star.svg'


export default function CVSection() {
  const CurvedUnderlineAlt = 'a black hand-drawn curved underline'
  const UnderlineAlt = 'a black hand-drawn straight underline'


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
      {/* START: CV TITLE SECTION */}
      <section id="cv-title" className="flex justify-center mt-8 mb-6">
        {/* START: CV TITLE */}
        <Title
          title="CV"
          titleType='centered'
          titleCssProps="text-5xl"
          imageSrc={StarIcon}
          width={150}
          height={200}
          imageCssProps="-rotate-6"
          alt="a black outline line drawing of a star"
        />
        {/* END: CV TITLE */}
      </section>
      {/* END: CV TITLE SECTION */}

      <main id="cv" className="flex flex-col">
        {/* START: CV BODY */}
        <section id="cv-content" className="flex flex-wrap justify-center mb-12">
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
        </section>
        {/* END: CV BODY*/}
      </main>
    </>
  )
}
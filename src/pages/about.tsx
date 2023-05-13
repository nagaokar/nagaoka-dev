import React from 'react'

import { posts } from '../lib/ContentDatabase'
import { PostCard } from '../components/PostCard'

import Title from '../components/Title'
import Underline from '../icons/undraw/undraw_underline.svg'

import Layout from '@/components/layouts/layout'

export default function About() {
  const employmentPosts = posts.filter((post) => post.tag === 'employment')
  const academicPosts = posts.filter((post) => post.tag === 'academic')
  const educationPosts = posts.filter((post) => post.tag === 'education')
  const gamesPosts = posts.filter((post) => post.tag === 'game')

  return (
    <>
      <Layout>
        <div
          id="cv-container"
          className="flex flex-row flex-wrap align-top
          xs:w-full sm:w-full md:w-full lg:w-1/2 lg:translate-x-1/2 xl:w-1/2 xl:translate-x-1/2 2xl:w-1/2 2xl:translate-x-1/2"
        >
          {/* START: COLUMN 1 */}
          <div>
            {/* START: ACADEMIC */}
            <div className="my-3 flex max-w-[400px]  flex-col">
              <Title
                title="academic"
                graphic={Underline}
                rotation="-rotate-3"
              />
              {academicPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </div>
            {/* END: ACADEMIC */}
            {/* START: GAMES */}
            <div className="my-3 flex max-w-[400px]  flex-col">
              <Title title="games" graphic={Underline} rotation="rotate-2" />
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
            <div className="h-content my-3 flex max-w-[400px] flex-col">
              <Title
                title="employment"
                graphic={Underline}
                rotation="rotate-3"
              />
              {employmentPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </div>
            {/* END: EMPLOYMENT */}
            {/* START: EDUCATION */}
            <div className="my-3 flex max-w-[400px] flex-col">
              <Title
                title="education"
                graphic={Underline}
                rotation="-rotate-2"
              />
              {educationPosts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </div>
            {/* END: EDUCATION */}
          </div>
          {/* END: COLUMN 2 */}
        </div>
      </Layout>
    </>
  )
}

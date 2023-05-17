import React from 'react'
import Spacer from '@/components/Spacer'
import Layout from '@/components/layouts/layout'
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
        {/* END: NOTE */}


        {/* <section id="cv">

        START: TITLE
        <div className='flex justify-center text-6xl mt-3 mb-12 rotate-3'>
        <p>About</p>
        </div>
        END: TITLE
        
        
        </section>
          <section id="cvContent"
            className="flex flex-row-reverse flex-wrap justify-center">
            <div id="cv-column" className="flex flex-col">
              <PostList title="Academic" posts={academicPosts} />
              <PostList title="Games" posts={gamesPosts} />
            </div>
            <div id="cv-column" className="flex flex-col">
              <PostList title="Employment" posts={employmentPosts} />
              <PostList title="Education" posts={educationPosts} />
            </div>
          </section>
        </section> */}

      </Layout>
    </>
  )
}

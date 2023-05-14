import React from 'react'
import Image from 'next/image'

import { posts } from '../lib/ContentDatabase'
import { textData } from '../lib/TextDatabase'

import PostCard from '../components/PostCard'

import Layout from '@/components/layouts/layout'
import CurvedUnderline from '../icons/undraw/undraw_curved-underline.svg'
import TaglineSection from '@/sections/TaglineSection'
import ProfileSection from '@/sections/ProfileSection'
import CVSection from '@/sections/CVSection'


import Title from '@/components/Title'

export default function About() {

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
        }}>
        <TaglineSection />
        <ProfileSection />
        <CVSection />
      </Layout>
    </>
  )
}

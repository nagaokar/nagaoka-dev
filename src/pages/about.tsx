import React from 'react'
import Layout from '@/components/layouts/layout'
import CurvedUnderline from '../icons/undraw/undraw_curved-underline.svg'
import TaglineSection from '@/sections/TaglineSection'
import ProfileSection from '@/sections/ProfileSection'
import CVSection from '@/sections/CVSection'
import ProfileListLayout from '@/components/layouts/ProfileListLayout'

export default function About() {
  return (
    <>
      <Layout
        titleProps={{
          title: "About",
          type: "curvedUnderline",
          titleProps: "flex justify-center rotate-3 text-5xl"
        }}
      >
        <TaglineSection />
        <ProfileSection />
        <CVSection />
      </Layout>
    </>
  )
}

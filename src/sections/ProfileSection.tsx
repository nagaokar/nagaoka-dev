import React from "react";
import Image from "next/image";

import { textData } from "@/lib/TextDatabase";

import ProfileLayout from "@/components/layouts/ProfileLayout";
import Title from "@/components/Title";
import TextParagraph from "@/components/TextParagraph";

import TreeIcon from '../icons/undraw/undraw_tree.svg'
import CodeIcon from '../icons/undraw/undraw_code.svg'

export default function ProfileSection() {
  const academicProfile = textData.find((item) => item.tag === 'academic')
  if (!academicProfile) { return null }

  const developerProfile = textData.find((item) => item.tag === 'developer')
  if (!developerProfile) { return null }


  return (
    <section id="profile" className="flex flex-row flex-wrap justify-center">
      {/* START: ACADEMIC PROFILE */}
      <ProfileLayout>
        <div className="max-w-[400px]">
        <Title
          title="Academic Profile"
          titleType="imageAbove"
          titleCssProps="text-2xl my-3"
          imageSrc={TreeIcon}
          imageCssProps=""
          width={50}
          height={150}
          alt="a line drawing of a tree"
        />
        <TextParagraph jsonData={academicProfile}/>
        </div>
      </ProfileLayout>
      {/* END: ACADEMIC PROFILE */}

      {/* START: DEV PROFILE */}
      <ProfileLayout>
        <div className="max-w-[400px]">
        <Title
          title="Developer Profile"
          titleType="imageAbove"
          titleCssProps="text-2xl text-center"
          imageSrc={CodeIcon}
          imageCssProps="m-2"
          width={50}
          height={150}
          alt="a line drawing of a tree"
        />
          <TextParagraph jsonData={developerProfile}/>
        </div>
        {/* END: DEV PROFILE */}
      </ProfileLayout>
    </section >
  )
}
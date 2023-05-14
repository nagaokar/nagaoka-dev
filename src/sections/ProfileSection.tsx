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
        <div className="flex flex-col justify-center max-w-[400px]">
          <div className="flex justify-center">
            <Image 
              className="flex justify-center"
              src={TreeIcon} width={50} height={150}
              alt="a line drawing of a tree"
              />
            </div>
            <Title title="Developer Profile" titleType="none"
              titleCssProps="flex text-2xl justify-center h-12"
            />
            <TextParagraph jsonData={academicProfile} />
        </div>
      </ProfileLayout>
      {/* END: ACADEMIC PROFILE */}

      {/* START: DEVELOPER PROFILE */}
      <ProfileLayout>
        <div className="flex flex-col justify-center max-w-[400px]">
          <div className="flex justify-center">
            <Image 
              className="flex justify-center"
              src={CodeIcon} width={50} height={150}
              alt="a line drawing of a tree"
              />
            </div>
            <Title title="Developer Profile" titleType="none"
              titleCssProps="flex text-2xl justify-center h-12"
            />
            <TextParagraph jsonData={developerProfile} />
        </div>
      </ProfileLayout>
      {/* END: DEVELOPER PROFILE */}

    </section >
  )
}
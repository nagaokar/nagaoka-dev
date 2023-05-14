import React from "react";
import { textData } from "@/lib/TextDatabase";
import Title from "@/components/Title";
import TextParagraph from "@/components/TextParagraph";

import TreeIcon from '../icons/undraw/undraw_tree.svg'
import CodeIcon from '../icons/undraw/undraw_code.svg'
import ProfileListLayout from "@/components/layouts/ProfileListLayout";
import ProfileList from "@/components/ProfileList";

export default function ProfileSection() {
  const profiles = textData.filter((item) => item.tag === 'profile');
  if (!profiles || profiles.length === 0) {
    return null;
  }
  return (
    <>
    <ProfileListLayout>
      <ProfileList
        titleProps={{
          title: "Academic Profile",
          titleType: 'imageUnder',
          titleCssProps: "text-3xl flex justify-center",
          imageSrc: "",
          width: 200,
          height: 500,
          imageCssProps: "-rotate-3",
          alt: "",
        }}
        profiles={profiles}
        />
    </ProfileListLayout>
    </>
  );
}

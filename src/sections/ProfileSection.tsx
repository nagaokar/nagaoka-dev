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
    <section className="flex flex-col flex-wrap justify-center">
        <ProfileList
          titleProps={{
            title: "Academic Profile",
            titleType: 'imageUnder',
            titleCssProps: "text-3xl justify-center",
            imageSrc: "",
            width: 200,
            height: 500,
            imageCssProps: "-rotate-3",
            alt: "",
          }}
          profiles={profiles}
        />
    </section>
  );
}


// <div className="max-w-[400px] flex flex-row flex-wrap font-normal justify-center text-start mt-3
// xs:flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap
// xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl px-2 my-3">
// </div>
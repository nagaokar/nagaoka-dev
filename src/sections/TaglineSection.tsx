import React from "react";
import Image from "next/image";

import TaglineLayout from "@/components/layouts/TaglineLayout";
import TextParagraph from "@/components/TextParagraph";
import { textData } from "@/lib/TextDatabase";

import TreeIcon from '../icons/undraw/undraw_tree.svg'
import CodeIcon from '../icons/undraw/undraw_code.svg'

export default function Tagline() {
  const taglineText = textData.find((item) => item.tag === 'tagline')
  if (!taglineText) { return null }

  return (
    <section id="tagline">
      {/* START: TAGLINE */}
      <TaglineLayout>
        <TextParagraph jsonData={taglineText}/>
      </TaglineLayout>
      {/* END: TAGLINE */}
    </section>
  )
}
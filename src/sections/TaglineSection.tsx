import React from "react";
import Image from "next/image";
import TextParagraph from "@/components/TextParagraph";
import { Text, textData } from "@/lib/TextDatabase";

import TreeIcon from '../icons/undraw/undraw_tree.svg'
import CodeIcon from '../icons/undraw/undraw_code.svg'
import TaglineCard from "@/components/TaglineCard";

export default function Tagline() {
  const taglineText = textData.find((item) => item.tag === 'tagline')
  if (!taglineText) { return null }

  return (
<section id="tagline">
  {/* START: TAGLINE */}
  <TaglineCard
    titleProps={{
      title: "Test",
      type: "none"
    }}
  />
  {/* END: TAGLINE */}
</section>

  )
}
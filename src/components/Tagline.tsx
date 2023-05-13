import React from 'react'
import TaglineLayout from './layouts/TaglineLayout'

import { textData, Text } from '@/lib/TextDatabase'

export default function Tagline() {
  const taglineData = textData.find((text) => text.tag === 'tagline')
  const tagline = taglineData ? taglineData.body : ''

  return (
    <TaglineLayout>
      <p>{tagline}</p>
    </TaglineLayout>
  )
}

import React from 'react'
import { Text } from '@/lib/TextDatabase'
import TaglineLayout from './layouts/TaglineLayout'

export interface TaglineProps {
  data: Text[] // Update the type to an array of Text objects
  fieldName: string // The field name to match against
}

export default function Tagline({ data, fieldName }: TaglineProps) {
  // Find the matching data object based on the fieldName
  const matchingData = data.find((item) => item.tag === fieldName)

  if (!matchingData) {
    return null // Handle the case when no matching data is found
  }
  const { title, body } = matchingData

  return (
    <TaglineLayout>
      <div id={matchingData.tag}>
        <div>
          <p>{body.p1}</p>
          <p>{body.p2}</p>
          <p>{body.p3}</p>
        </div>
      </div>
    </TaglineLayout>
  )
}

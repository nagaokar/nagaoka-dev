import React from 'react'
import { Text } from '@/lib/TextDatabase'
import ProfileLayout from './layouts/ProfileLayout'

export interface ProfileProps {
  data: Text[] // Update the type to an array of Text objects
  fieldName: string // The field name to match against
}

export default function Profile({ data, fieldName }: ProfileProps) {
  // Find the matching data object based on the fieldName
  const matchingData = data.find((item) => item.tag === fieldName)

  if (!matchingData) {
    return null // Handle the case when no matching data is found
  }

  const { title, body } = matchingData

  return (
    <ProfileLayout>
      <div id={matchingData.tag} className="my-3 max-w-[800px] px-2">
        <p className="my-2 text-center font-bold">{title}</p>
        <div>
          <p>{body}</p>
        </div>
      </div>
    </ProfileLayout>
  )
}
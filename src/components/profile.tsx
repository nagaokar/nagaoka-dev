import React from 'react'
import { Text } from '@/lib/TextDatabase'
import Image from 'next/image'

export interface ProfileProps {
  data: Text[] // Update the type to an array of Text objects
  fieldName: string // The field name to match against
  imageSrc?:string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function Profile({ data, fieldName, imageSrc, width, height, alt }: ProfileProps) {
  // Find the matching data object based on the fieldName
  const matchingData = data.find((item) => item.tag === fieldName)

  if (!matchingData) {
    return null // Handle the case when no matching data is found
  }

  const { title, body } = matchingData

  return (
    <div id={matchingData.tag} className="my-3 mb-5 max-w-[800px] px-2">
      <div>
        {imageSrc && (
          <div className='flex justify-center'>
            <Image src={imageSrc} width={width} height={height} alt={`"${alt}"`}/>
          </div>
        )}
      </div>
      <p className="my-2 text-center font-bold">{title}</p>
      <div>
        <p>{body.p1}</p>
        <p>{body.p2}</p>
        <p>{body.p3}</p>
      </div>
    </div>
  )
}

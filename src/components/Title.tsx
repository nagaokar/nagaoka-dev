import React from 'react'
import Image from 'next/image'

interface TitleProps {
  title: string
  graphic: string
  rotation: string
}

const TitleComponent: React.FC<TitleProps> = ({ title, graphic, rotation }) => {
  return (
    <div className="mb-8 flex flex-col justify-center text-3xl font-bold">
      {/* TITLE TEXT */}
      <p>{title}</p>
      {/* TITLE UNDERLINE */}
      <Image
        className={`${rotation} mt-1`}
        src={graphic}
        width={200}
        height={500}
        alt="A black underline of the title"
      />
    </div>
  )
}

export default TitleComponent

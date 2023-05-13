import React from 'react'
import Image from 'next/image'

interface TitleProps {
  title: string
  textSize: string
  graphic: string
  rotation: string
  alt: string
}

const TitleComponent: React.FC<TitleProps> = ({
  title,
  graphic,
  rotation,
  alt,
  textSize,
}) => {
  return (
    <div className="mb-8 flex flex-col text-3xl font-bold">
      {/* TITLE TEXT */}
      <div className="flex justify-center">
        <p className={`${textSize}`}>{title}</p>
      </div>
      {/* TITLE UNDERLINE */}
      <div className="flex justify-center">
        <Image
          className={`${rotation} mt-1`}
          src={graphic}
          width={200}
          height={500}
          alt={alt}
        />
      </div>
    </div>
  )
}

export default TitleComponent

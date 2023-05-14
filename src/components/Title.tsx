import React from 'react'
import Image from 'next/image'

export interface TitleProps {
  title: string
  titleType: 'imageUnder' | 'centered' | 'imageAbove'
  titleCssProps: string
  imageSrc?: string
  imageCssProps?: string
  width?: number
  height?: number
  alt?: string
}

const Title: React.FC<TitleProps> = ({
  title,
  titleCssProps,
  imageSrc,
  imageCssProps,
  width,
  height,
  alt,
  titleType,
}) => {
  return (
    <div
      id={`${title}TitleContainer`}
      className="flex flex-col text-3xl font-bold"
    >
      {/* TITLE TEXT */}
      {titleType === 'imageUnder' && (
        <div className="flex justify-center">
          <p id={`${title}Text`} className={`${titleCssProps}`}>
            {title}
          </p>
        </div>
      )}
      {/* TITLE GRAPHIC */}
      {imageSrc && (
        <div
          id={`${title}Image`}
          className={`${imageCssProps} mb-5 mt-1 flex justify-center`}
        >
          {titleType === 'centered' && (
            <p className={`${titleCssProps}`}>{title}</p>
          )}
          {titleType === 'centered' && (
            <>
              <Image
                src={imageSrc}
                width={width}
                height={height}
                alt={`${alt}`}
              />
              <p className={`${titleCssProps}`}>{title}</p>
            </>
          )}
          {titleType !== 'imageAbove' && titleType !== 'centered' && (
            <Image
              src={imageSrc}
              width={width}
              height={height}
              alt={`${alt}`}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Title

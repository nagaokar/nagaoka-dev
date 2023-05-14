import React from 'react'
import Image from 'next/image'

export interface TitleProps {
  title: string
  titleType: 'imageUnder' | 'centered' | 'imageAbove' | 'none'
  titleCssProps: string
  imageSrc?: string // Make it optional
  imageCssProps?: string
  width?: number
  height?: number
  alt?: string
}

const Title: React.FC<TitleProps> = ({
  title,
  titleCssProps,
  imageSrc = '',
  imageCssProps,
  width,
  height,
  alt,
  titleType,
}) => {
  const renderTitle = () => {
    if (titleType === 'imageUnder') {
      return (
        <div className="flex flex-col items-center">
          <p id={`${title}Text`} className={`${titleCssProps}`}>
            {title}
          </p>
          <div className="flex justify-center">
            <Image
              src={imageSrc}
              className={`${imageCssProps}`}
              width={width}
              height={height}
              alt={`${alt}`}
            />
          </div>
        </div>
      )
    } else if (titleType === 'centered') {
      return (
        <div className="flex w-screen flex-row justify-center">
          <div className="mb-24 -rotate-2 text-center text-5xl font-bold">
            <p className={`${titleCssProps} translate-y-24`}>{title}</p>
            <Image
              className={imageCssProps}
              src={imageSrc}
              width={width}
              height={height}
              alt={`${alt}`}
            />
          </div>
        </div>
      )
    } else if (titleType === 'imageAbove') {
      return (
        <div className="flex flex-col items-center align-top">
          <Image
            className={imageCssProps}
            src={imageSrc}
            width={width}
            height={height}
            alt={`${alt}`}
          />
          <p className={`${titleCssProps}`}>{title}</p>
        </div>
      )
    } else {
      return (
        <>
          <p className={`${titleCssProps}`}>{title}</p>
        </>
      )
    }
  }

  return (
    <div id={`${title}TitleContainer`} className="font-bold">
      {renderTitle()}
    </div>
  )
}

export default Title

import React from 'react'
import Image from 'next/image'
import Underline from '../icons/undraw/undraw_underline.svg'
import curvedUnderline from '../icons/undraw/undraw_curved-underline.svg'
import StarIcon from '../icons/undraw/undraw_star.svg'

export interface TitleProps {
  title: string
  type: 'underlined' | 'star' | 'curvedUnderline' | 'none'
  titleProps?: string
}

const Title: React.FC<TitleProps> = ({ title, type, titleProps }) => {
  const renderTitle = () => {
    if (type === 'underlined') {
      return (
        <div className="my-3 ml-12 flex flex-col">
          <p id={`${title}Text`} className={titleProps}>
            {title}
          </p>
          <Image
            className="rotate-3"
            src={Underline}
            width={200}
            height={100}
            alt=""
          />
        </div>
      )
    }
    if (type === 'curvedUnderline') {
      return (
        <div className="my-3 flex flex-col">
          <p id={`${title}Text`} className={titleProps}>
            {title}
          </p>
          <Image
            className="rotate-3 justify-center"
            src={curvedUnderline}
            width={200}
            height={100}
            alt=""
          />
        </div>
      )
    } else if (type === 'star') {
      return (
        <div className="flex w-screen flex-row justify-center">
          <div className="mb-20 text-center text-5xl font-bold">
            <p className="translate-y-24 text-5xl">{title}</p>
            <Image
              className="-rotate-6"
              src={StarIcon}
              width={150}
              height={200}
              alt=""
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className={titleProps}>
          <p>{title}</p>
        </div>
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

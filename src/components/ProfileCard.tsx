import React from 'react'
import { Text } from '@/lib/TextDatabase'
import Title, { TitleProps } from '@/components/Title'
import TextParagraph from './TextParagraph'
import TreeIcon from '../icons/undraw/undraw_tree.svg'
import CodeIcon from '../icons/undraw/undraw_code.svg'

export interface ProfileCardProps {
  titleProps: TitleProps
  profile: Text
  index: number
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  titleProps,
  profile,
  index,
}) => {
  return (
    <div
      id="profileContainer"
      key={index}
      className="mb-7 mt-3 flex max-w-[800px]"
    >
      <div id={`${profile.title}profileContainer`}>
        <TextParagraph className="text-lg" jsonData={profile} />
      </div>
    </div>
  )
}

export default ProfileCard

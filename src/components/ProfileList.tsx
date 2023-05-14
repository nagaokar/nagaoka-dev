import React from 'react'
import ProfileCard from './ProfileCard'
import Title, { TitleProps } from './Title'
import ProfileLayout from './layouts/ProfileListLayout'

interface ProfileListProps {
  titleProps: TitleProps
  profiles: any[] // Update the type to match the actual type of posts
}

const ProfileList: React.FC<ProfileListProps> = ({ titleProps, profiles }) => {
  const {
    title,
    titleType,
    titleCssProps,
    imageSrc,
    imageCssProps,
    width,
    height,
    alt,
  } = titleProps

  return (
    <div id={`${title}ProfileContainer`}>
      <ProfileLayout>
        <div id={`${title}ListContainer`}>
          {profiles.map((profile, index) => (
            <ProfileCard
              titleProps={{
                title: profile.title,
                titleType: titleType,
                titleCssProps: titleCssProps,
                imageSrc: imageSrc,
                imageCssProps: imageCssProps,
                width: width,
                height: height,
                alt: alt,
              }}
              key={index}
              profile={profile}
              index={index}
            />
          ))}
        </div>

      </ProfileLayout>
    </div>
  )
}

export default ProfileList;

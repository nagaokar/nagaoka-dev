import React from 'react'
import ProfileCard from './ProfileCard'
import Title, { TitleProps } from './Title'
import ProfileListLayout from './layouts/ProfileListLayout'
import Tagline from '@/sections/TaglineSection'

interface ProfileListProps {
  titleProps: TitleProps
  profiles: any[] // Update the type to match the actual type of posts
}

const ProfileList: React.FC<ProfileListProps> = ({ titleProps, profiles }) => {
  return (
    <div id={`${titleProps.title}ProfileContainer`}>
      <p className={titleProps.titleProps}>{titleProps.title}</p>
      <div id={`${titleProps.title}ListContainer`}>
        <ProfileListLayout>
          {profiles.map((profile, index) => (
            <ProfileCard
              titleProps={{
                title: profile.title,
                type: titleProps.type,
              }}
              key={index}
              profile={profile}
              index={index}
            />
          ))}
        </ProfileListLayout>
      </div>
    </div>
  )
}

export default ProfileList

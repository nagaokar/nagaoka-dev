import React from "react";
import { Text } from "@/lib/TextDatabase";
import Title, { TitleProps } from "@/components/Title";
import TextParagraph from "./TextParagraph";
import TreeIcon from '../icons/undraw/undraw_tree.svg';
import CodeIcon from '../icons/undraw/undraw_code.svg';

export interface ProfileCardProps {
  titleProps: TitleProps;
  profile: Text;
  index: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ titleProps, profile, index }) => {
  const {
    title,
    titleType,
    titleCssProps,
    imageSrc,
    imageCssProps,
    width,
    height,
    alt,
  } = titleProps;

  return (
    <div id="profileContainer" className="flex flex-row mt-3 mb-5" key={index}>
      <div id={`${profile.title}profileContainer`} className="flex flex-col justify-between h-full">
        <Title
          title={profile.title}
          titleType="imageAbove"
          titleCssProps="text-2xl mb-4 mt-2"
          imageSrc={profile.title === 'Academic Profile' ? TreeIcon : CodeIcon}
          imageCssProps="flex align-top"
          width={50}
          height={150}
          alt={`a line drawing of ${profile.title === 'Academic Profile' ? 'a tree' : 'a computer'}`}
        />
        <TextParagraph jsonData={profile} />
      </div>
    </div>
  );
};

export default ProfileCard;

import React from 'react';
import { Post } from '../lib/ContentDatabase';
import Image from 'next/image';

import academicIcon from '../icons/undraw/undraw_person.svg';
import writingIcon from '../icons/undraw/undraw_note.svg';
import compDesignIcon from '../icons/undraw/undraw_command-line.svg';
import webDevIcon from '../icons/undraw/undraw_code.svg';
import gameIcon from '../icons/undraw/undraw_tree.svg';
import musicIcon from '../icons/undraw/undraw_heart-fun.svg';
import talkIcon from '../icons/undraw/undraw_chat.svg';

interface PostImageProps {
  post: Post;
}

const PostImage: React.FC<PostImageProps> = ({ post }) => {
  const { title, tag, subtag, date, organisation } = post;

  let icon;
  switch (subtag) {
    case 'academic':
      icon = academicIcon;
      break;
    case 'computational design':
      icon = compDesignIcon;
      break;
    case 'publication':
      icon = writingIcon;
      break;
    case 'talk':
      icon = talkIcon;
      break;
    case 'web development':
      icon = webDevIcon;
      break;
    case 'game':
      icon = gameIcon;
      break;
    case 'music':
      icon = musicIcon;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div id="postImageContainer" className="flex justify-center">
      {icon && (
        <Image
            className="w-24 h-16 mb-5 justify-start align-top"
            src={icon}
            width={70}
            height={70}
            alt=""
          />
      )}
    </div>
  );
};

export default PostImage;

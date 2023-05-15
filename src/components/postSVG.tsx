import React from 'react';
import { Post } from '@/lib/ContentDatabase';

export interface PostSVGProps {
  post: Post;
  index: number;
}

const PostSVG: React.FC<PostSVGProps> = ({ post, index }) => {
  const { title, organisation, desc, link, date, image } = post;

  return (
    <>
      <svg width="400" height="200">
        <rect width="400" height="200" fill="#ffffff" />
        {/* <image href={image} width="100" height="100" x="10" y="50" /> */}
        <text x="120" y="50" fontSize="16" fontWeight="bold">
          {title}
        </text>
        <text x="120" y="70" fontSize="14" fontStyle="italic">
          {organisation}
        </text>
        <text x="120" y="130" fontSize="14">
          {date}
        </text>
      </svg>
    </>
  );
};

export default PostSVG;

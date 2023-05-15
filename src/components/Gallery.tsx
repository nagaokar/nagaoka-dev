import React from 'react';
import { Post, posts } from '../lib/ContentDatabase';
import ProjectCard from './ProjectCard';

interface GalleryProps {
  selectedCategory: string | null;
}

const Gallery: React.FC<GalleryProps> = ({ selectedCategory }) => {
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.tag === selectedCategory || selectedCategory === 'all')
    : posts;

  return (
    <div>
      <div className='flex flex-wrap lowercase'>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <ProjectCard key={post.id} project={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

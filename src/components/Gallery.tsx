import React from 'react'
import { Post, posts } from '../lib/ContentDatabase'
import ProjectCard from './ProjectCard'

interface GalleryProps {
  selectedCategory: string | null
}

const Gallery: React.FC<GalleryProps> = ({ selectedCategory }) => {
  const filteredPosts = selectedCategory
    ? posts.filter(
        (post) => post.subtag === selectedCategory || selectedCategory === 'all'
      )
    : posts

  // Sort the filteredPosts array by date
  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      <div className="h-content w-100 flex flex-wrap justify-start lowercase">
        {sortedPosts.map((post) => (
          <div key={post.id}>
            <ProjectCard key={post.id} post={post} index={post.id} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery

import React from 'react'
import PostCard from './PostCard'

interface PostListProps {
  posts: any[] // Update the type to match the actual type of posts
  title: string
}

const PostList: React.FC<PostListProps> = ({ posts, title }) => {
  return (
    <div id={`${title}List`} className="flex flex-col">
      {/* TITLE */}
      <div className="mb-12 mt-3 flex rotate-3 justify-center text-6xl">
        <p>{title}</p>
      </div>

      <main className="mx-5 mb-8 flex max-w-[400px] flex-col">
        <div className="flex flex-col justify-center align-top">
          <div id={`${title}ListContainer`}>
            {posts.map((post, index) => (
              <PostCard key={index} post={post} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default PostList

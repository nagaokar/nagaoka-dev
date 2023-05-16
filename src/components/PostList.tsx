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
      <div className='flex justify-center text-6xl mt-3 mb-12 rotate-3'>
        <p>{title}</p>
      </div>

      <main className="flex max-w-[400px] flex-col mx-5 mb-8">
        <div className='flex flex-col justify-center align-top'>
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

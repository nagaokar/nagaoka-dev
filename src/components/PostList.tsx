import React from 'react'
import PostCard from './PostCard'
import PostListLayout from './layouts/PostListLayout'
import Title from './Title'

interface PostListProps {
  posts: any[] // Update the type to match the actual type of posts
  title: string;
}

const PostList: React.FC<PostListProps> = ({ posts, title }) => {
  return (
    <div id={`${title}List`} className='flex flex-col'>
      <Title title={title} type="underlined" titleProps="text-3xl" />
      <PostListLayout>
        <div id={`${title}ListContainer`}>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}
        </div>
      </PostListLayout>
    </div>
  )
}

export default PostList
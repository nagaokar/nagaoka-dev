import React from 'react'
import PostCard from './PostCard'
import Title, { TitleProps } from './Title'
import PostListLayout from './layouts/PostListLayout'

interface PostListProps {
  titleProps: TitleProps
  posts: any[] // Update the type to match the actual type of posts
}

const PostList: React.FC<PostListProps> = ({ titleProps, posts }) => {
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
    <div id={`${title}PostList`}>
      <PostListLayout>
        <div id="postListTitle" className="mb-6">
          <Title
            title={title}
            titleType={titleType}
            titleCssProps={titleCssProps}
            imageSrc={imageSrc}
            imageCssProps={imageCssProps}
            width={width}
            height={height}
            alt={alt}
          />
        </div>
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

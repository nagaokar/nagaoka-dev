import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Post } from '@/lib/ContentDatabase'
import Popup from '@/components/Popup'
import PostImage from '@/components/PostImage'
import Spacer from './Spacer'

interface ProjectCardProps {
  post: Post
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ post, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const router = useRouter()

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }
  return (
    <section
      id="projectCardContainer"
      className="flex flex-col flex-wrap justify-center md:flex-row"
    >
      <button
        className="m-3 border-2 border-black p-2"
        onClick={openPopup}
      >
        <div
          id={`project${post.id}Card`}
          className="m-5 flex h-64 w-52 flex-col justify-center p-5 lowercase md:w-64"
        >
          <div className="flex flex-col">
            <PostImage key={post.id} post={post} />
          </div>

          <div className="flex flex-col justify-center text-center">
            <p className="text-lg font-bold">{post.organisation}</p>
          </div>
          <div className="flex flex-col justify-start text-center text-lg">
            <p>{post.title}</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="mt-2 text-sm opacity-30">{post.date}</p>
          </div>
        </div>
      </button>

      {isPopupOpen && (
        <Popup onClick={closePopup}>
          <>
            <div className="flex flex-col h-content">
              <div className="flex text-5xl m-3 justify-center text-center">
                <p>{post.title}</p>
              </div>
            </div>
            <div className="flex text-3xl h-content">
              <p>{post.organisation}</p>
            </div>
            <div className="flex flex-col h-full justify-center">
              <div className="text-xl text-red-500 text-center my-3">
                <p>{post.date}</p>
              </div>
              <Spacer />
              <div className="flex text-xl my-2">
                <p>{post.desc}</p>
              </div>
              <Spacer />
              <div className="flex">
                <a
                  className="mt-2 hover:underline"
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.link}
                </a>
              </div>
            </div>
          </>
        </Popup>
      )}
    </section>
  )
}

export default ProjectCard

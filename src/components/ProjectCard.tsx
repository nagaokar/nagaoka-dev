import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Post, posts } from '@/lib/ContentDatabase'
import Popup from '@/components/Popup'
import PostImage from '@/components/PostImage'
import Spacer from './Spacer'
import circledArrow from '../icons/undraw/undraw_circled-arrow.svg'
import GitgraphViewer from './GitgraphViewer'

interface ProjectCardProps {
  post: Post
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ post, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isPopupOpen])

  const isNagaokaDev = post.organisation === 'Nagaoka.dev'

  return (
    <section
      id="projectCardContainer"
      className="flex flex-col flex-wrap justify-center md:flex-row"
    >
      {/* START REFACTOR? PROJECTCARD */}
      <button className="m-3 border-2 border-black p-2" onClick={openPopup}>
        <div
          id={`project${post.id}Card`}
          className="m-5 flex h-64 w-52 flex-col justify-center p-5 lowercase md:w-64"
        >
          <div className="flex flex-col">
            <PostImage key={post.id} post={post} />
          </div>

          <div className="flex flex-col justify-center text-center">
            <p className="text-center text-lg font-bold">{post.organisation}</p>
          </div>
          <div className="flex flex-col justify-start text-center text-lg">
            <p>{post.title}</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="mt-2 text-sm opacity-30">{post.date}</p>
          </div>
        </div>
      </button>
      {/* END: REFACTOR? */}

      {isPopupOpen && (
        <Popup onClick={closePopup}>
          {/* START REFACTOR? PROJECTPOPUP */}
          <>
            <div className="h-content flex flex-col">
              <div className="m-3 flex justify-center text-center text-5xl">
                <p>{post.title}</p>
              </div>
            </div>
            <div className="h-content flex text-center text-3xl">
              <p>{post.organisation}</p>
            </div>
            <div className="flex h-full flex-col justify-center">
              <div className="my-3 text-center text-xl text-red-500">
                <p>{post.date}</p>
              </div>
              <Spacer />
              <div className="my-2 flex text-xl">
                <p>{post.desc}</p>
              </div>
              <Spacer />
              {/* {isNagaokaDev && (
                <>
                  <div className='flex flex-col my-5 text-center justify-center'>
                    <div className='flex flex-col flex-wrap justify-center text-center'>
                      <p className='text-4xl text-center mb-3 rotate-2'>Development History</p>
                      <p className='text-xl mb-3 text-center'>This is a git info. viewer for this project, showing most recent developments.</p>
                      <p className='mb-1 underline text-center'>click on an entry to see the gitlog.</p>
                    </div>
                    <div className='flex justify-center m-2'>
                      <GitgraphViewer />
                    </div>
                  </div>
                  <Spacer />
                </>
              )} */}
              {/* START: IMAGE LINK */}
              {post.link && post.link !== '' && (
                <div className="mb-12">
                  <a
                    className="mt-5 flex justify-center"
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="absolute -rotate-90 hover:w-[45px]"
                      src={circledArrow}
                      width={40}
                      height={25}
                      alt="A sketched line drawing of circle with an arrow pointing down inside."
                    />
                  </a>
                </div>
              )}
              {/* END: IMAGE LINK */}
            </div>
          </>
        </Popup>
      )}
    </section>
  )
}

export default ProjectCard

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Post, posts } from '@/lib/ContentDatabase'
import Popup from '@/components/Popup'
import PostImage from '@/components/PostImage'
import Spacer from './Spacer'
import circledArrow from '../icons/undraw/undraw_circled-arrow.svg'


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
        closePopup();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);


  const isNagaokaDev = post.organisation === 'Nagaoka.dev';

  return (
    <section
      id="projectCardContainer"
      className="flex flex-col flex-wrap justify-center md:flex-row"
    >

      {/* START REFACTOR? PROJECTCARD */}
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
            <p className="text-lg font-bold text-center">
              {post.organisation}
            </p>
          </div>
          <div className="flex flex-col justify-start text-center text-lg">
            <p>{post.title}</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="mt-2 text-sm opacity-30">
              {post.date}
            </p>
          </div>
        </div>
      </button>
      {/* END: REFACTOR? */}

      {isPopupOpen && (
        <Popup onClick={closePopup}>
          {/* START REFACTOR? PROJECTPOPUP */}
          <>
            <div className="flex flex-col h-content">
              <div className="flex text-5xl m-3 justify-center text-center">
                <p>{post.title}</p>
              </div>
            </div>
            <div className="flex text-center text-3xl h-content">
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

              {/* START: IMAGE LINK */}
              <div className='mb-12'>
                <a
                  className='flex justify-center mt-5'
                  href={post.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="absolute -rotate-90 hover:w-[45px]"
                    src={circledArrow}
                    width={40}
                    height={25}
                    alt="A sketched line drawing of circle with an arrow pointing down inside."
                  />
                </a>
                {/* END: IMAGE LINK */}
              </div>
            </div>
          </>
        </Popup>
      )
      }
    </section>
  )
}

export default ProjectCard
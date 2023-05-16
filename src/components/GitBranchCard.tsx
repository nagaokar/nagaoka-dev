import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Commit } from './GitgraphViewer'
import Popup from '@/components/Popup'
import PostImage from '@/components/PostImage'
import Spacer from './Spacer'
import circledArrow from '../icons/undraw/undraw_circled-arrow.svg'

interface GitBranchCardProps {
  commit: Commit,
  index: number
}

const GitBranchCard: React.FC<GitBranchCardProps> = ({ commit, index }) => {
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



  return (
    <section
      id="commitCardContainer"
      className="flex flex-col flex-wrap justify-center md:flex-row"
    >
      {/* START REFACTOR? PROJECTCARD */}
      <button
        className="m-3 border-2 border-black p-2"
        onClick={openPopup}
      >
        <div
          id={`project${commit.sha}Card`}
          className="m-5 flex h-64 w-52 flex-col justify-center p-5 lowercase md:w-64"
        >
          <div className="flex flex-col justify-center text-center">
            <p className="text-lg font-bold text-center">
              {commit.branch}
            </p>
          </div>
          <div className="flex flex-col justify-start text-center text-lg">
            <p>{commit.message}</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="mt-2 text-sm opacity-30">
              {commit.date}
            </p>
          </div>
        </div>
      </button>
      {/* END: REFACTOR? */}

      {isPopupOpen && (
        <div className='flex flex-col h-content justify-center items-center'>
        <Popup onClick={closePopup}>
          {/* START REFACTOR? PROJECTPOPUP */}
          <>
            <div className="flex flex-col h-content">
              <div className="flex text-5xl m-3 mt-6 justify-center text-center">
                <p>{commit.sha}</p>
              </div>
            </div>
            <div className="flex text-center text-3xl h-content">
              <p>{commit.branch}</p>
            </div>
            <div className="flex text-center text-2xl h-content">
              <p>{commit.author}</p>
            </div>
            <div className="flex flex-col h-full justify-center">
              <div className="text-sm text-center my-3">
                <p>{commit.date}</p>
              </div>
              <Spacer />
              <div className="flex text-center text-xl my-2">
                <p>{commit.message}</p>
              </div>
              <Spacer />
            </div>
          </>
        </Popup>
      </div>
      )
      }
    </section>
  )
}

export default GitBranchCard;
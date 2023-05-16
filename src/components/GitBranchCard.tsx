import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Commit } from './GitgraphViewer'
import Popup from '@/components/Popup'
import PostImage from '@/components/PostImage'
import Spacer from './Spacer'
import circledPlus from '../icons/undraw/undraw_circled-plus.svg'
import commitIcon from '../icons/undraw/undraw_x-mark.svg'
import underline from '../icons/undraw/undraw_underline.svg'

interface GitBranchCardProps {
  commit: Commit,
  nodeCount: number;
  index: number
}

const GitBranchCard: React.FC<GitBranchCardProps> = ({ commit, nodeCount }) => {
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

  const branchMarginMap: { [branch: string]: string } = {
    'main': "ml-0",
    'develop/layout': "ml-8",
    'develop/work': "ml-12",
    'feature/gitgraph': "ml-16",
    'feature/spa': "ml-24",
  };


  
  const branchWidthMap: { [branch: string]: string } = {
    'main': "w-4",
    'develop/layout': "w-10",
    'develop/work': "w-12",
    'feature/gitgraph': "w-16",
    'feature/spa': "w-24",
  };

  
  const branchMargin = branchMarginMap[commit.branch];
  const branchWidth = branchWidthMap[commit.branch];
  
  
  const branchLineHeight = 48;
  const branchLineTopOffset = branchLineHeight / 2;
  const connectingLinesHeight = branchLineHeight * (nodeCount - 1);
  const connectingLinesTopOffset = branchLineTopOffset - connectingLinesHeight / 2;


  return (
    <>
      {/* START: GRAPHCONTAINER */}
      <section
        id="graphContainer"
        className='hover:font-bold'>

        {/* START: GRAPH */}
        <div className="flex flex-row w-content">
          <div className='flex flex-col mr-2 w-20 justify-center text-xs'>
            <p className='flex justify-end align-middle'>{commit.sha}</p>
          </div>
          
          <div className='w-[3px] bg-black'></div>
          <div className={`${branchWidth} h-[3px] border-b-2 mt-3 border-black flex align-middle`}>

          </div>
          {/* START: COMMITCARD */}
          <button
            id={`project${commit.sha}Card`}
            className={`text-start bg-white h-content`}
            onClick={openPopup}
          >
            {/* START: GRAPHNODE */}
            <div id={`${commit.sha}Node`}
              className='flex'>
            </div>
            {/* END: GRAPHNODE */}
              <div className='flex flex-row w-content ml-2'>
              <p className="text-lg">{commit.branch}</p>
              {/* <p className="ml-2 flex flex-col text-xs justify-center opacity-30">{commit.date}</p> */}
            </div>
          </button>
          {/* END: COMMITCARD */}
        </div>
        {/* END: GRAPH */}
        {/* START: POPUP */}
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
        )}
        {/* END: POPUP */}
      </section>

    </>
  )
}

export default GitBranchCard



// {/* START: COMMITCARD */}
// <button
//   id={`project${commit.sha}Card`}
//   className={` hover:border-2 border-red-500 px-3 py-2 rounded-xl
//     justify-start text-start flex flex-row w-64
//     ${branchMargin}
//   `}
//   onClick={openPopup}
// >
//   {/* START: GRAPHNODE */}
//   <div id={`${commit.sha}Node`}
//     className='flex mr-2 p-2'>
//     <Image
//       src={circledPlus}
//       width={25}
//       height={50}
//       alt=''
//     />
//   </div>
//   {/* END: GRAPHNODE */}
//   <div>
//     <p className="text-lg">{commit.branch}</p>
//     <p className="text-sm opacity-30">{commit.date}</p>
//   </div>

// </button>
// {/* END: COMMITCARD */}
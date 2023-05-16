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
      <section id="graphContainer">
        {/* START: GRAPH */}
        <div className="flex flex-row w-content justify-start text-start 
        hover:underline">
          {/* <div className='w-[5px] bg-black'></div> */}
          {/* START: COMMITCARD */}
          <button
            id={`project${commit.sha}Card`}
            className={`text-start flex flex-row bg-white h-content`}
            onClick={openPopup}
          >
            <div className='flex mr-1 text-end justify-end'>
              <p className='opacity-70'>{commit.sha}</p>
            </div>

            <div className={`${branchWidth} h-[5px] border-b-2 mt-3 
            border-black flex align-middle`}>
            </div>

            {/* START: GRAPHNODE */}
            <div id={`${commit.sha}Node`}
              className='flex text-start'>
            </div>
            {/* END: GRAPHNODE */}
            <div className='flex flex-row justify-start'>
              <p className="text-lg text-start">{commit.branch}</p>
              {/* <p className="ml-2 flex flex-col text-xs justify-center opacity-30">{commit.date}</p> */}
            </div>
          </button>
          {/* END: COMMITCARD */}
        </div>
        {/* END: GRAPH */}

        {/* START: POPUP */}
        {isPopupOpen && (
          <div className='flex flex-col h-content justify-center items-center max-w-screen min-w-72'>
            <Popup onClick={closePopup}>
              {/* START REFACTOR? PROJECTPOPUP */}
              <>
                <div className="flex flex-col h-content">
                  <div className="flex flex-col text-4xl m-3 mb-6 mt-6 justify-center text-center">
                    <p className='font-bold underline'>{commit.branch}</p>
                    <p className='text-sm'>branch</p>
                  </div>
                  <div className="flex text-center text-xl justify-center h-content">
                    <p>{commit.sha}</p>
                  </div>
                  <div className="flex flex-col h-full justify-center">
                    <div className="text-center my-3 opacity-50">
                      <p>{commit.date}</p>
                    </div>
                    <Spacer />
                    <p className='text-md underline'>message:</p>
                    <div className="flex flex-col text-start text-xl my-2 min-w-[300px]">
                      <p>{commit.message}</p>
                    </div>
                    <Spacer />
                    <div className="flex justify-end text-end text-2xl mb-3">
                      <p>- {commit.author}</p>
                    </div>
                  </div>
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
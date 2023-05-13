import React from 'react'
import Image from 'next/image'

import TreeIcon from '../../icons/undraw/undraw_tree.svg'
import CodeIcon from '../../icons/undraw/undraw_code.svg'
import CurvedUnderline from '../../icons/undraw/undraw_curved-underline.svg'
import ExclaimMark from '../../icons/undraw/undraw_exclamation-point(1).svg'
import StarSpacer from '../StarSpacer'

export default function Profile() {
  return (
    <>
      {/* START: ABOUT SECTION */}
      <section id="about">
        {/* START: PAGE TITLE */}
        <div className="flex -rotate-2 flex-col text-center text-5xl font-bold">
          <p>about</p>
          <div className="flex justify-center">
            <Image
              className="-rotate-6"
              src={CurvedUnderline}
              width={175}
              height={10}
              alt="a line drawn curved line."
            />
          </div>
        </div>
        {/* END: PAGE TITLE */}

        {/* START: TAGLINE CONTAINER */}
        <div
          className="xs:full sm:full sm:full
        flex flex-col p-8 xs:w-full xs:text-xl sm:text-xl
        md:w-2/3 md:translate-x-1/4 md:text-xl lg:w-2/3 lg:translate-x-1/4 lg:text-lg
        xl:w-2/3 xl:translate-x-1/4 xl:text-xl 2xl:w-2/3 2xl:translate-x-1/4 2xl:text-xl 
        "
        >
          {/* START: CURRENT JOB ACCEPTANCE */}
          <div className="mb-3 flex flex-col">
            {/* <div className="flex justify-center mb-2">
              <Image src={ExclaimMark} width={25} height={25} alt="line drawing of an exclaimation mark"/>
            </div> */}
            {/* START: CURRENT JOB ACCEPTANCE CONTENT */}
            <div
              className="mb-4 mt-5 flex flex-col justify-center text-center 
            xs:w-72 sm:w-72 md:w-full lg:w-full xl:w-full 2xl:w-full"
            >
              <p className="my-2 text-xl font-bold underline decoration-2">
                summer 2023
              </p>
              <p>
                if you&apos;d like to hire me, i am currently able to take on:
              </p>
              {/* START: LIST OF PROJECTS */}
              <div className="mx-8 my-3 text-center">
                <ul>
                  <li className="my-1">videogame-related journalism</li>
                  <li className="my-1">
                    small web design projects (design/dev)
                  </li>
                </ul>
              </div>
              {/* END: LIST OF PROJECTS */}
            </div>
            {/* END: CURRENT JOB ACCEPTANCE CONTENT */}
            <StarSpacer />
          </div>
          {/* END: CURRENT JOB ACCEPTANCE */}

          {/* START: TAGLINE */}
          <div
            className="w-content mb-5 mt-7 flex flex-wrap justify-center px-2 text-center 
          align-middle font-bold xs:text-start sm:text-start md:text-center lg:text-center xl:text-center 2xl:text-center
          "
          >
            <p>
              i primarily work as a phd researcher, specialising in eco-games
              and urban studies, but also practice as a computational designer,
              web developer, and writer.
            </p>
          </div>
          {/* END: TAGLINE CONTAINER*/}

          {/* START: PROFILES CONTAINER */}
          <div
            className="align-items-center xs:text-md sm:text-md mt-5 flex justify-center
            text-start font-normal xs:flex-wrap sm:w-full sm:flex-wrap md:flex-nowrap
            md:text-lg lg:flex-nowrap lg:text-lg xl:flex-nowrap xl:text-lg 2xl:flex-nowrap 2xl:text-lg 
            "
          >
            {/* START: ACADEMIC PROFILE CONTAINER */}
            <div className="my-3 max-w-[400px] px-2">
              <div className="flex flex-row justify-center align-top">
                <Image
                  className="my-2 flex"
                  src={TreeIcon}
                  width={40}
                  height={50}
                  alt="line drawing of the outline of a tree"
                />
              </div>
              <p className="my-2 text-center font-bold">academic profile</p>
              <p>
                my leverhulme-funded phd project is being studied at manchester
                metropolitan university (manchester, uk). it is situated in the
                domains of urban planning, game studies, and climate change
                communication. the thesis is currently titled:
              </p>
              <p className="my-2">
                “reviving alternative future cities: cognitive climate behaviour
                in an online multiplayer urban eco-game”.
              </p>
            </div>
            {/* END: ACADEMIC PROFILE CONTAINER */}

            {/* START: DEV PROFILE CONTAINER */}
            <div className="my-3 max-w-[400px] px-2">
              <div className="flex flex-row justify-center align-top">
                <Image
                  className="my-2 flex"
                  src={CodeIcon}
                  width={50}
                  height={50}
                  alt="line drawing of a html closing tag"
                />
              </div>
              <p className="my-2 text-center font-bold">developer profile</p>
              <p>
                i primarily develop using python, grasshopper (rhino3d), c#
                (unity), and standard web development tech. (html, css, js).
              </p>
              <p className="my-2">
                game development projects use unity in c# and multiplayer games
                use unity netcode for gameobjects.
              </p>
              <p>
                currently, i use figma for ui/ux protyping then react, next.js,
                tailwindcss for frontend development.
              </p>
            </div>
            {/* END: DEV PROFILE CONTAINER */}
          </div>
          {/* END: PROFILES CONTAINER */}
        </div>
        {/* END: TAGLINE CONTAINER */}
      </section>
      {/* END: ABOUT SECTION */}
    </>
  )
}

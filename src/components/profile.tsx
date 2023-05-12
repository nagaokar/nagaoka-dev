import React from "react";
import Image from "next/image";

import Layout from "@/components/layout";
import Employment from "../pages/employment";
import Academic from "./academic";
import Education from "../pages/education";
import Games from "../pages/games";

import Underline from '../icons/undraw/undraw_underline.svg'
import Spacer from "@/components/Spacer";

import TreeIcon from '../icons/undraw/undraw_tree.svg'
import CodeIcon from '../icons/undraw/undraw_code.svg'

export default function Profile() {
    return(
        <>
    {/* START: ABOUT SECTION */}
      <section id='about'>

        {/* START: PAGE TITLE */}
        <div className='font-bold text-5xl text-center -rotate-2'>
          about
        </div>
        {/* END: PAGE TITLE */}
        
        {/* START: TAGLINE CONTAINER */}
        <div className='flex flex-col p-8
        xs:full sm:full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3
        xs:w-full sm:full md:translate-x-1/4 lg:translate-x-1/4 xl:translate-x-1/4 2xl:translate-x-1/4
        xs:text-xl sm:text-xl md:text-xl lg:text-lg xl:text-xl 2xl:text-xl 
        '>
          {/* START: TAGLINE */}
          <div className="flex flex-wrap font-bold justify-center align-middle text-center px-2 max-w-[840px] 
          mt-7 mb-5
          xs:text-start sm:text-start md:text-center lg:text-center xl:text-center 2xl:text-center
          ">
            <p>
              i primarily work as a phd researcher, specialising in eco-games and urban studies,
              but also practice as a computational designer, web developer, and writer.
            </p>
          </div>
          {/* END: TAGLINE CONTAINER*/}
          
          {/* START: PROFILES CONTAINER */}
          <div className='flex font-normal justify-center align-items-center text-start mt-5
            xs:flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap
            xs:text-md sm:text-md sm:w-full md:text-lg lg:text-lg xl:text-lg 2xl:text-lg 
            '>
            {/* START: ACADEMIC PROFILE CONTAINER */}  
            <div className="px-2 my-3 max-w-[400px]">
              <div className="flex flex-row justify-center align-top"> 
              <Image
                className="flex my-2"
                src={TreeIcon}
                width={40}
                height={50}
                alt="line drawing of the outline of a tree"
                />
              </div>
              <p className="font-bold text-center my-2">
                academic profile</p>
              <p>
                my leverhulme-funded phd project is being studied at manchester metropolitan university (manchester, uk). 
                it is situated in the domains of urban planning, game studies, and climate change communication.
                the thesis is currently titled:
              </p>
              <p className="my-2">
                “reviving alternative future cities: cognitive climate behaviour in an online multiplayer urban eco-game”.
              </p>
            </div>
            {/* END: ACADEMIC PROFILE CONTAINER */}

            {/* START: DEV PROFILE CONTAINER */}
            <div className="px-2 my-3 max-w-[400px]">
              <div className="flex flex-row justify-center align-top"> 
                <Image
                  className="flex my-2"
                  src={CodeIcon}
                  width={50}
                  height={50}
                  alt="line drawing of a html closing tag"
                  />
              </div>
              <p className="font-bold text-center my-2">developer profile</p>
              <p>
                i primarily develop using python, grasshopper (rhino3d), c# (unity), and standard web development tech. (html, css, js). 
              </p>
              <p className="my-2">
                game development projects use unity in c# and multiplayer games use unity netcode for gameobjects.
              </p>
              <p>
                my current full stack web development projects use react and next.js, previously they used create-react-app with express.js and react router.
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
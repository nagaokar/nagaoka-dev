import React from 'react'
import Image from 'next/image'

export default function TaglineContainer() {
  return (
    <div className="xs:full sm:full sm:full flex flex-col p-8 xs:w-full xs:text-xl sm:text-xl md:w-2/3 md:translate-x-1/4 md:text-xl lg:w-2/3 lg:translate-x-1/4 lg:text-lg xl:w-2/3 xl:translate-x-1/4 xl:text-xl 2xl:w-2/3 2xl:translate-x-1/4 2xl:text-xl">
      <div className="mb-3 flex flex-col">
        <div className="mb-4 mt-5 flex flex-col justify-center text-center xs:w-72 sm:w-72 md:w-full lg:w-full xl:w-full 2xl:w-full">
          <p className="my-2 text-xl font-bold underline decoration-2">
            summer 2023
          </p>
          <p>if you&apos;d like to hire me, i am currently able to take on:</p>
          <div className="mx-8 my-3 text-center">
            <ul>
              <li className="my-1">videogame-related journalism</li>
              <li className="my-1">small web design projects (design/dev)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-content mb-5 mt-7 flex flex-wrap justify-center px-2 text-center align-middle font-bold xs:text-start sm:text-start md:text-center lg:text-center xl:text-center 2xl:text-center">
        <p>
          i primarily work as a phd researcher, specialising in eco-games and
          urban studies, but also practice as a computational designer, web
          developer, and writer.
        </p>
      </div>

      <ProfilesContainer />
    </div>
  )
}

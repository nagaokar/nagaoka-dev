import React from 'react'

export default function TaglineLayout({ children }: any) {
  return (
    <>
      <div id="tagline" className="flex flex-wrap font-bold justify-center align-middle text-center w-content text-xl px-4
          mt-7 mb-5 xs:text-start sm:text-start md:text-center lg:text-center xl:text-center 2xl:text-center
          xs:w-full sm:w-full md:w-full lg:w-1/2 lg:translate-x-1/2 xl:w-1/2 xl:translate-x-1/2 2xl:w-1/2 2xl:translate-x-1/2
          ">
        {children}
      </div>
    </>
  )
}

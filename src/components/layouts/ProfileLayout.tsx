import React from 'react'

export default function ProfileLayout({ children }: any) {
  return (
    <>
      <div id="tagline" className="flex font-normal justify-center align-items-center text-start mt-5
            xs:flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap
            xs:text-md sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
        <p>{children}</p>
      </div>
    </>
  )
}

import React from 'react'

export default function ProfileLayout({ children }: any) {
  return (
    <>
      <div id="profile" className="flex font-normal justify-center align-items-center text-start mt-3
            xs:flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap
            xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl px-2 my-3 max-w-[400px]">
        {children}
      </div>
    </>
  )
}

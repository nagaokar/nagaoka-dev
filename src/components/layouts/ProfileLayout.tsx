import React from 'react'
import Image, { ImageProps } from 'next/image'

export interface ProfileLayoutProps {
}

export default function ProfileLayout({ children }: any) {
  return (
    <>
      <div id="profile" className="flex flex-col flex-wrap font-normal justify-center align-items-center text-start mt-3
            xs:flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap
            xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl px-2 my-3">
        <div className="px-2 my-3 max-w-[400px]">
          <div className="flex flex-row justify-center align-top">
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

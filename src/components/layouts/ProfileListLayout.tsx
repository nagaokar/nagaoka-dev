import React from 'react'

export default function ProfileListLayout({ children }: any) {
  return (
    <main className="max-w-[400px] flex-col flex flex-wrap font-normal justify-center text-start mt-3
    xs:flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap
    xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl px-2 my-3">
      <div className='flex flex-col justify-center align-top'>
        {children}
      </div>
    </main>
  )
}
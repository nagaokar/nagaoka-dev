import React from 'react'

export default function PostListLayout({ children }: any) {
  return (
    <main className="my-5 mt-3 flex max-w-[400px] flex-col">
      <div className='flex flex-col justify-center align-top'>
        {children}
      </div>
    </main>
  )
}

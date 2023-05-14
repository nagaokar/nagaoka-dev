import React from 'react'

export default function PostListLayout({ children }: any) {
  return (
    <main className="flex max-w-[400px] flex-col mx-5 mb-8">
      <div className='flex flex-col justify-center align-top'>
        {children}
      </div>
    </main>
  )
}

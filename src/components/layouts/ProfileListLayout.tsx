import React from 'react'

export default function ProfileListLayout({ children }: any) {
  return (
    <main>
      <div className='flex flex-wrap justify-center my-5 mt-3'>
        {children}
      </div>
    </main>
  )
}
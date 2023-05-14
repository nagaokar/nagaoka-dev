import React from 'react'

export default function ProfileListLayout({ children }: any) {
  return (
    <main>
      <div className='flex flex-row justify-center'>
        {children}
      </div>
    </main>
  )
}
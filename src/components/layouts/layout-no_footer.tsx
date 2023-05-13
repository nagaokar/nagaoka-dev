import React from 'react'
import Nav from '../NavBar'
import Spacer from '../Spacer'
import Footer from '../Footer'

export default function LayoutNoFooter({ children }: any) {
  return (
    <main
      className="max-w-screen font-regular flex h-screen flex-col 
    overflow-x-hidden bg-white lowercase text-black"
    >
      <Nav />
      {children}
    </main>
  )
}

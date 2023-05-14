import React from 'react'
import Nav from '../NavBar'
import Spacer from '../Spacer'
import Footer from '../Footer'

export default function Layout({ children }: any) {
  return (
    <>
      <nav className="overflow-x-hidden">
        <Nav />
      </nav>
      <main
        className="mt-12 max-w-screen font-regular flex flex-col 
        overflow-x-hidden bg-white px-4 lowercase text-black"
      >
        {children}
      </main>
      <footer className="overflow-x-hidden">
        <Footer />
      </footer>
    </>
  )
}

import React from 'react'
import Nav from '../NavBar'
import Footer from '../Footer'
import Title, { TitleProps } from '../Title'

interface LayoutProps {
  children: React.ReactNode;
  titleProps: TitleProps;
}

export default function Layout({ children, titleProps }: LayoutProps) {
  return (
    <>
      <nav className="overflow-x-hidden">
        <Nav />
      </nav>
      <main className="mt-12 max-w-screen font-regular flex flex-col overflow-x-hidden bg-white px-4 lowercase text-black">
        {/* START: PAGE TITLE */}
        <div id="pageTitle" className="mb-12">
          <Title {...titleProps} />
        </div>
        {/* END: PAGE TITLE */}
        {children}
      </main>
      <footer className="overflow-x-hidden">
        <Footer />
      </footer>
    </>
  )
}

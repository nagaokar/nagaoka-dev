import React from 'react'
import Nav from '../NavBar'
import Footer from '../Footer'
import Title, { TitleProps } from '../Title'
interface LayoutProps {
  children: React.ReactNode;
  titleProps: any; // Replace with the appropriate type for titleProps
}

const Layout: React.FC<LayoutProps> = ({ children, titleProps }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="overflow-x-hidden">
        <Nav />
      </nav>
      <main className="mt-12 max-w-screen font-regular flex flex-col overflow-x-hidden bg-white px-8 lowercase text-black flex-grow">
        {/* START: PAGE TITLE */}
        <div id="pageTitle" className="mb-12 flex justify-center rotate-3 text-5xl">
          <Title {...titleProps} />
        </div>
        {/* END: PAGE TITLE */}
        {children}
      </main>
      <footer className="overflow-x-hidden">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

import React from 'react';
import { useEffect, useState } from 'react';
import Nav from '../NavBar';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav className={`overflow-x-hidden z-99 ${isScrolled ? 'sticky top-0' : ''}`}>
          <Nav />
        </nav>
      <main className="mt-12 max-w-screen font-regular flex flex-col overflow-x-hidden bg-white px-8 lowercase text-black">
        {children}
      </main>
      <footer className="overflow-x-hidden">
        <Footer />
      </footer>
      </div>
    </>
  );
};

export default Layout;

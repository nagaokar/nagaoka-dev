import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { NavItem } from './NavItem'
import { UndrawGhost } from '../UndrawIcons'


export default function Nav() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // 768 is the width for md breakpoint
        setIsCollapsed(true)
      } else {
        setIsCollapsed(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header aria-label="Site Header" className="bg-white">
      <nav className={`z-40 flex flex-col items-center justify-center border-b-2 border-black bg-white py-3 ${isCollapsed ? 'collapsed' : ''}`}>

        <div className="flex flex-col justify-center text-center align-middle font-thin">
          <div className="flex justify-center text-center md:hidden">
            <button className="mb-2 bg-white px-3 text-center bg-transparent p-2 rounded-md inline-flex items-center justify-center text-black-900 
                hover:text-gray-500 hover:bg-gray-100 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleCollapse}>

              {isCollapsed ? (
                <div className='md:hidden items-center justify-center'>
                  <p>Open</p>
                </div>
              ) : (
                <div className='md:hidden items-center justify-center'>
                  <p>Close</p>
                </div>
              )}
            </button>
          </div>
          {!isCollapsed && (
            <div className="flex-col items-center justify-center bg-white md:flex md:flex-row">
              <NavItem href="/home">home</NavItem>
              <NavItem href="/about">about</NavItem>
              <NavItem href="/projects">projects</NavItem>
              <NavItem href="/contact">contact</NavItem>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

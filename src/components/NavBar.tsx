import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

import CircledPlus from '../icons/undraw/undraw_circled-plus.svg'
import DoubleUnderline from '../icons/undraw/undraw_double-underline.svg'

interface NavItemProps {
  href: string
  children: React.ReactNode
  imageProps?: ImageProps
}

export const NavItem: React.FC<NavItemProps> = ({ href, children, imageProps }) => {
  const { asPath } = useRouter()
  const isCurrent = asPath === href

  return (
    <div className="xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5 flex flex-col items-center">
      <Link href={href} className="flex hover:font-bold">
        {children}
      </Link>
      <div>
        {isCurrent && (
          <div className="flex justify-center align-top">
            <Image
              src={DoubleUnderline}
              width={25}
              height={50}
              alt=""
              {...imageProps}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Nav() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // 768 is the width for md breakpoint
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
    <nav
      className={`z-40 flex flex-col items-center justify-center border-b-2 border-black bg-white py-3 ${isCollapsed ? 'collapsed' : ''
        }`}
    >
      <div className="flex flex-col justify-center text-center align-middle font-thin">
        <div className="flex justify-center text-center md:hidden">
          <button className="mb-2 flex items-center bg-white px-3 text-center" onClick={toggleCollapse}>
            {isCollapsed ? (
              <Image src={CircledPlus} width={25} height={25} alt="" />
            ) : (
              <Image className="rotate-90" src={CircledPlus} width={25} height={25} alt="" />
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
  );
}

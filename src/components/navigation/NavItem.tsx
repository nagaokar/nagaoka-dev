import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

interface NavItemProps {
  href: string
  children: React.ReactNode
}

export const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const { asPath } = useRouter()
  const isCurrent = asPath === href

  return (
    <div className={`flex flex-col items-center xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5 
    hover:underline hover:decoration-2
    
    ${isCurrent ? 'font-bold' : ''}`}>
      {children}
    </div>
  )
}
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import CircledPlus from '../icons/undraw/undraw_circled-plus.svg';
import DoubleUnderline from '../icons/undraw/undraw_double-underline.svg';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  imageProps?: ImageProps;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, imageProps }) => {
  const { asPath } = useRouter();
  const isCurrent = asPath === href;

  return (
    <div className="h-12 xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5">
      <Link href={href} className="flex">
        {children}
      </Link>
      <div>
        {isCurrent && (
          <div className="flex justify-center align-top">
            <Image src={DoubleUnderline} width={25} height={50} alt="" {...imageProps} />
          </div>
        )}
      </div>
    </div>
  );
};

export default function Nav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <nav className={`z-40 flex flex-col justify-center items-center mt-2 bg-white align-top ${isCollapsed ? 'collapsed' : ''} lowercase`}>
      <div className="flex flex-col justify-center text-center align-middle font-thin">
        <div className="md:hidden flex justify-center text-center">
          <button
            className="block px-3"
            onClick={toggleCollapse}
          >
            {isCollapsed ? (
              <Image src={CircledPlus} width={25} height={25} alt="" />
            ) : (
              <Image className="rotate-90" src={CircledPlus} width={25} height={25} alt="" />
            )}
          </button>
        </div>
        {!isCollapsed && (
          <div className="md:flex flex-col md:flex-row justify-center items-center">
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

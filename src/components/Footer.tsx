import React from 'react'
import Image from 'next/image'
import ghost from '../icons/undraw/undraw_ghost.svg'
import heart from '../icons/undraw/undraw_heart-fun.svg'

export default function Footer() {
  return (
    <footer className="mt-5 flex w-screen justify-center text-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center text-center">
          <Image
            className="mr-2"
            src={ghost}
            width={20}
            height={20}
            alt="black and white line drawing of a ghost"
          />
          <p className="text-center">nagaoka.dev</p>
        </div>
        <div className="mb-1 flex flex-row justify-center text-center text-xs">
          <p>website made with react, nextjs, tailwindcss, and love.</p>
        </div>
      </div>
    </footer>
  )
}

import React from "react"
import Image from "next/image"
import ghost from '../icons/undraw/undraw_ghost.svg'
import heart from '../icons/undraw/undraw_heart-fun.svg'

export default function Footer()
{
    return(
        <footer className="flex text-center justify-center w-screen">
            <div className="flex flex-col">
                <div className="flex flex-row text-center justify-center">
                    <Image className="mr-2"
                    src={ghost} width={20} height={20} alt="black and white line drawing of a ghost"/>
                    <p className="mr-1">nagaoka.dev</p>
                </div>
                <div className="flex flex-row text-xs text-center justify-center px-2 mb-2">
                    <p>website made with react, nextjs, tailwindcss, and love.</p>
                </div>
            </div>
        </footer>
    )
}
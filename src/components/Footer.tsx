import React from "react"
import Image from "next/image"
import ghost from '../icons/undraw/undraw_ghost.svg'

export default function Footer()
{
    return(
        <main className='flex flex-col'>
            <div className="flex flex-row justify-center">
                <Image src={ghost} width={20} height={20} alt="black and white line drawing of a ghost"/>
                <div className="flex flex-row text-sm ml-2">
                    <p>nagaoka.dev <span className="text-xs">2023</span>.
                    </p>
                </div>
            </div>
        </main>
    )
}
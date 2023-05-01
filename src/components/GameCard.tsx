import React from "react";

import Image from "next/image";
import placeholderImage from '../images/placeholder.png'


import { Game, GamePostProps, games } from "./ContentDB";


export function GamePost(props: GamePostProps) 
{
    return (
        <main>
            <div className='flex flex-col p-2 max-w-[500] '>
                <div className="px-4 py-1 bg-white font-light rounded-t-2xl">
                    <p>{props.date}</p>
                </div>
                <div className="relative bgName flex justify-start">
                    <Image
                        className=" rounded-b-2xl"
                        src={placeholderImage}
                        alt=""
                        width={300}
                        height={100}
                        />
                    <div className='absolute flex flex-col m-2 p-2'>                      
                        <p>
                            {props.organisation} 
                        </p>
                    <p className="font-bold">{props.title}</p>
                    </div>
                </div>
            </div>
        </main>

    );
}
import React from "react";
import  Image from "next/image";
import { JobPostProps } from "./ContentDB";
import placeholderImage from '../images/placeholder.png'


export function JobPost(props: JobPostProps) 
{
    return (
        <main>
            <div className='flex flex-col p-2 max-w-[500] '>
                <div className="flex px-4 py-1 bg-white font-light rounded-t-2xl">
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
                        <p className="font-bold">
                            {props.title} 
                        </p>
                    <p>{props.organisation} </p>
                        <div className="mt-3">
                            <p>{props.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


{/* <div className="align-bottom text-center p-4">
<div className='text-slate-500'>
        <p>{props.desc}</p>
        <p className="font-light">{props.date}</p>  
    </div>
</div>                */}
import React from "react";
import Image from "next/image";

import Layout from "@/components/layouts/layout";
import Employment from "./employment";
import Academic from "./academic";
import Education from "./education";
import Games from './games';

import Underline from '../icons/undraw/undraw_underline.svg'
import Spacer from "@/components/Spacer";

export default function Work() {
    return(
        <>
            {/* START: WORK SECTION */}
            <section>
                {/* START: WORK TITLE */}       
                <div className='font-bold text-5xl mt-2 mb-24 text-center -rotate-2'>
                    cv  
                </div>
                {/* END: PAGE TITLE */}

                {/* START: WORK CONTENT CONTAINER */}
                <div className="flex flex-row flex-wrap justify-center">
                    
                    {/* START: WORK SUB-CONTAINER 1 */}
                    <div className="flex flex-col">
                        {/* ACADEMIC COMPONENT*/}
                        <div className="flex mx-8">
                            <Academic />
                        </div>
                        {/* GAMES COMPONENT*/}
                        <div className="flex mx-8">
                            <Games />
                        </div>
                    </div>
                    {/* END: WORK SUB-CONTAINER 1*/}
                    {/* START: WORK SUB-CONTAINER 2*/}
                    <div className="flex flex-col">
                        {/*EMPLOYMENT COMPONENT*/}
                        <div className="flex mx-8">
                            <Employment />
                        </div>
                        {/* EDUCATION COMPONENT */}   
                        <div className="flex mx-8">
                            <Education />
                        </div>          
                    </div>
                    {/* END: WORK SUB-CONTAINER 2*/}
                </div>
                {/* END: WORK CONTENT CONTAINER */}
            </section>
            {/* END: WORK SECTION */}
        </>
    )
}
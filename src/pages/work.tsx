import React from "react";
import Image from "next/image";

import Layout from "@/components/layout";
import Employment from "./employment";
import Academic from "./academic";
import Education from "./education";
import Underline from '../icons/undraw/undraw_underline.svg'

export default function Work() {
    return(
        <main>
            <Layout>
                {/* START: WORK PAGE CONTAINER */}
                <section className="xs:p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                    {/* START: PAGE TITLE */}
                    <div className='font-bold text-5xl mt-2 mb-24 text-center translate-y-5 -rotate-2'>
                        work
                    </div>
                    {/* END: PAGE TITLE */}

                    {/* START: WORK CONTAINER */}
                    <div className="flex flex-row flex-wrap justify-center">
                        {/* ACADEMIC COMPONENT*/}
                        <div className="flex mx-8">
                                <Academic />
                        </div>
                        {/* START: WORK SUB-CONTAINER */}
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
                        {/* END: WORK SUB-CONTAINER */}
                    </div>
                    {/* END: WORK CONTAINER */}
                </section>
                {/* END: WORK PAGE CONTAINER */}
            </Layout>
        </main>
    )
}
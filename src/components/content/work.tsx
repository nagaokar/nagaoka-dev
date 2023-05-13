import React from "react";
import Image from "next/image";

import Employment from "./employment";
import Academic from "./academic";
import Education from "./education";
import Games from "./games";

import StarIcon from "../../icons/undraw/undraw_star.svg";

export default function Work() {
  return (
    <>
      {/* START: WORK SECTION */}
      <section>
        {/* START: WORK TITLE */}
        <div className="flex w-screen flex-row justify-center">
          <div className="mb-24 mt-2 -rotate-2 text-center text-5xl font-bold">
            <p className="translate-y-24">cv</p>
            <Image
              src={StarIcon}
              width={125}
              height={100}
              alt="a line drawn star"
            />
          </div>
        </div>
        {/* END: PAGE TITLE */}
        {/* START: WORK CONTENT CONTAINER */}
        <div className="flex flex-row flex-wrap justify-center">
          {/* START: WORK SUB-CONTAINER 1 */}
          <div className="flex flex-col">
            {/* ACADEMIC COMPONENT*/}
            <div className="flex">
              <Academic />
            </div>
            {/* GAMES COMPONENT*/}
            <div className="flex">
              <Games />
            </div>
          </div>
          {/* END: WORK SUB-CONTAINER 1*/}
          {/* START: WORK SUB-CONTAINER 2*/}
          <div className="flex flex-col">
            {/*EMPLOYMENT COMPONENT*/}
            <div className="flex">
              <Employment />
            </div>
            {/* EDUCATION COMPONENT */}
            <div className="flex">
              <Education />
            </div>
          </div>
          {/* END: WORK SUB-CONTAINER 2*/}
        </div>
        {/* END: WORK CONTENT CONTAINER */}
      </section>
      {/* END: WORK SECTION */}
    </>
  );
}

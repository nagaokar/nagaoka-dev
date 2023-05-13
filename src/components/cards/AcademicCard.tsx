import React from "react";
import { useState } from "react";
import Image from "next/image";
import { AcademicPostProps } from "../../lib/ContentDB";

import CircledArrow from "../../icons/undraw/undraw_circled-arrow.svg";

export function AcademicCard(props: AcademicPostProps) {
  return (
    <div
      className="flex flex-row my-1
					xs:text-md sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
      {/* START: CARD DATE */}
      <div className="flex flex-row justify-end text-start w-10 px-2 ml-3 mr-1 text-red-500 text-base">
        <p>{props.date}</p>
      </div>
      {/* END: CARD DATE */}
      {/* START: CARD TITLE CONTAINER*/}
      <div className="flex w-72 mr-1 border-b-2 border-black">
        {/* START: CARD TITLE SUB-CONTAINER */}
        <div className="flex flex-col pr-3">
          {/* CARD TITLE */}
          <p className="font-bold">{props.title}</p>
          {/* CARD ORGANISATION */}
          <p>{props.organisation}</p>
          {/* START: MORE INFO LINK */}
          {props.link && (
            <div className="mb-1 flex flex-row align-middle">
              <div className="flex flex-row">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  more info.
                </a>
              </div>
              <div className="mx-3 flex flex-row">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="-rotate-90"
                    src={CircledArrow}
                    width={25}
                    height={50}
                    alt="a line drawing of an arrow inside a circle"
                  />
                </a>
              </div>
            </div>
          )}
          {/* END: MORE INFO LINK */}
        </div>
        {/* END: CARD TITLE SUB-CONTAINER */}
      </div>
      {/* END: CARD TITLE CONTAINER*/}
    </div>
  );
}

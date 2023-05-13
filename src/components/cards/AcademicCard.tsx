import React from "react";
import { useState } from "react";
import Image from "next/image";
import { academics, Academic, AcademicPostProps } from "../../lib/ContentDB";

import CircledArrow from "../../icons/undraw/undraw_circled-arrow.svg";

export function AcademicCard(props: AcademicPostProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="my-1 flex flex-row
					xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
    >
      {/* START: CARD DATE */}
      <div className="mr-2 flex w-12 flex-col font-bold text-red-500">
        <p>{props.date}</p>
      </div>
      {/* END: CARD DATE */}
      {/* START: CARD TITLE CONTAINER*/}
      <div
        className="mb-1 flex w-72 flex-row border-b-2 border-black px-2 pb-2
				xs:pr-12 sm:pr-10 md:pr-8 lg:pr-6 xl:pr-12"
      >
        {/* START: CARD TITLE SUB-CONTAINER */}
        <div className="flex flex-col">
          {/* CARD TITLE */}
          <p className="font-bold">{props.title}</p>
          {/* CARD ORGANISATION */}
          <p>{props.organisation}</p>
          {/* START: MORE INFO LINK */}
          {props.link && (
            <div className="mt-2 flex flex-row align-middle">
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

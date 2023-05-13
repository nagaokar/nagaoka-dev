import React from "react";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";

import { GamePostProps } from "../../lib/ContentDB";
import ExpandIcon from "../../icons/undraw/undraw_circled-plus.svg";

export function GamePost(props: GamePostProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="my-1 flex flex-row 
        xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
      {/* START: CARD DATE */}
			<div className="flex flex-row justify-end text-start w-10 px-2 ml-3 mr-1 text-red-500 text-base">
        <p>{props.date}</p>
      </div>
      {/* END: CARD DATE */}
      {/* START: CARD TITLE CONTAINER*/}
      <div className="flex w-72 mr-1 border-b-2 border-black">
        {/* START: CARD TITLE SUB-CONTAINER */}
        <div className="flex flex-col">
          {/* CARD TITLE */}
          <p className="font-bold">{props.title}</p>
          {/* CARD ORGANISATION */}
          <p>{props.organisation}</p>
          {/* START: CARD DESCRIPTION  */}
          <div className="py-2">
            <Disclosure>
              {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                  <Disclosure.Button>
                    <div className={open ? "rotate-90 transform" : ""}>
                      <Image
                        src={ExpandIcon}
                        width={20}
                        height={40}
                        alt="sketched line drawing of circle with an addition symbol inside."
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="">{props.desc}</div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {/* END: CARD DESCRIPTION  */}
        </div>
        {/* END: CARD TITLE SUB-CONTAINER */}
      </div>
      {/* END: CARD TITLE CONTAINER*/}
    </div>
  );
}

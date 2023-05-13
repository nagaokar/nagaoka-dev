import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

import { JobPostProps } from "../../lib/ContentDB";

import ExpandIcon from "../../icons/undraw/undraw_circled-plus.svg";
import Underline from "../../icons/undraw/undraw_underline.svg";
import CircledArrow from "../../icons/undraw/undraw_circled-arrow.svg";

export function JobPost(props: JobPostProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="my-1 flex flex-row 
					xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg
					"
    >
      {/* START: CARD DATE */}
      <div className="mr-2 flex w-12 flex-col font-bold text-red-500">
        <p>{props.date}</p>
      </div>
      {/* END: CARD DATE */}
      {/* START: CARD TITLE CONTAINER*/}
      <div
        className="mb-1 flex w-72 flex-row border-b-2 border-black px-2
									xs:pr-12 sm:pr-10 md:pr-8 lg:pr-6 xl:pr-12"
      >
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
                        width={25}
                        height={40}
                        alt="sketched line drawing of circle with an addition symbol inside."
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="flex flex-col">
                      <p>{props.desc}</p>

                      {/* START: MORE INFO LINK */}
                      <div className="mt-2 flex flex-row align-middle">
                        <div className="flex flex-row">
                          <a
                            href={props.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            more info.
                          </a>
                        </div>
                        <div className="mx-2 flex flex-row">
                          <a
                            href={props.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              className="-rotate-90"
                              src={CircledArrow}
                              width={24}
                              height={25}
                              alt="a line drawing of an arrow inside a circle"
                            />
                          </a>
                        </div>
                      </div>
                      {/* END: MORE INFO LINK */}
                    </div>
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

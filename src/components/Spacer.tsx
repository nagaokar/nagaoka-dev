import React from "react";
import Image from "next/image";

import AsteriskIcon from '../icons/undraw/undraw_asterisk.svg'

export default function Spacer() {
return(
    <main className="flex flex-row justify-center"> 
            <Image
                className="flex m-2 -rotate-12"
                src={AsteriskIcon}
                width={15}
                height={25}
                alt="line drawing of an asterik"
            />
            <Image
                className="flex m-2 rotate-12"
                src={AsteriskIcon}
                width={15}
                height={25}
                alt="line drawing of an asterik"
            />
            <Image
                className="flex m-2 rotate-45"
                src={AsteriskIcon}
                width={15}
                height={25}
                alt="line drawing of an asterik"
            />
    </main>
)
}
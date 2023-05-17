import React from "react";

interface TitleProps {
  text: string;
}

export default function Title({text}:TitleProps) {
  return(
    <div className='flex justify-center text-6xl mt-3 mb-12 -rotate-3'>
    <p>{text}</p>
  </div>
  )
}
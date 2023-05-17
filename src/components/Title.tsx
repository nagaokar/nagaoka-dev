import React from 'react'

interface TitleProps {
  text: string
}

export default function Title({ text }: TitleProps) {
  return (
    <div className="mb-12 mt-3 flex -rotate-3 justify-center text-6xl">
      <p>{text}</p>
    </div>
  )
}

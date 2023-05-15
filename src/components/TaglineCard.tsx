import React from 'react'
import Image from 'next/image'
import StarSpacer from './StarSpacer'

export default function TaglineSection({ text }: any) {
  return (
    <section id="taglineCard" className="flex justify-center">
      <div className="m-3">
        <p className="max-w-[800px] text-xl font-bold">{text}</p>
        <div className="mt-8 flex justify-center">
        </div>
      </div>
    </section>
  )
}

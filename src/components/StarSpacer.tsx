import React from 'react'
import Image from 'next/image'
import StarIcon from '../icons/undraw/undraw_star.svg'

export default function StarSpacer() {
  return (
    <section className="flex justify-center">
      <div className="mx-3 -translate-y-1 rotate-12">
        <Image src={StarIcon} width={25} height={50} alt="a hand-drawn star" />
      </div>
      <div className="mx-3 rotate-45">
        <Image src={StarIcon} width={25} height={50} alt="a hand-drawn star" />
      </div>
      <div className="mx-3 -rotate-12">
        <Image src={StarIcon} width={25} height={50} alt="a hand-drawn star" />
      </div>
    </section>
  )
}

import React from 'react';
import Image from 'next/image';

import { Academic, academics } from '../../lib/ContentDB'
import { AcademicCard } from '@/components/cards/AcademicCard';

import Underline from '../../icons/undraw/undraw_underline.svg'

export default function Academic() {
  return (
    <section id='academic-content' className='py-4'>
      
      {/* START: ACADEMIC TITLE */}
      <div className="flex flex-col justify-center font-bold text-3xl mb-8">
          {/* TITLE TEXT */}
          <p>academic</p>
          {/* TITLE UNDERLINE */}
          <Image 
          className="mt-1 -rotate-6" src={Underline} width={200} height={500}
          alt="A black underline of the title"
          />
      </div>
      {/* END: ACADEMIC TITLE */}

      {/* START: ACADEMIC CARD */}
      <div>
        {academics.map((props: Academic, index:number) => (
          <AcademicCard
          key={props.id}
          index={index}
          id={props.id}
          title={props.title}
          organisation={props.organisation}
          date={props.date}
          link={props.link}
          />
        ))}
      </div>
      {/* END: ACADEMIC CARD */}
    </section>
  );
}
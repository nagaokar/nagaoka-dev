import Image from 'next/image';

import { Education, educations } from '../../lib/ContentDB'
import { EducationCard } from '@/components/cards/EducationCard';
import Underline from '../../icons/undraw/undraw_underline.svg'

export default function Education() {
  return (
    <section id='academic-content' className='py-4'>
      
      {/* START: EDUCATION TITLE */}
      <div className="flex flex-col justify-center font-bold text-3xl mb-8">
          {/* TITLE TEXT */}
          <p>education</p>
          {/* TITLE UNDERLINE */}
          <Image 
          className="mt-1 -rotate-2" src={Underline} width={200} height={500}
          alt="A black underline of the title"
          />
      </div>
      {/* END: EDUCATION TITLE */}

      {/* START: EDUCATION CARD */}
      <div>
        {educations.map((props: Education, index:number) => (
          <EducationCard
          key={index}
          index={index}
          title={props.title}
          organisation={props.organisation}
          desc={props.desc}
          date={props.date}
          />
        ))}
      </div>
      {/* END: EDUCATION CARD */}
    </section>
  );
}
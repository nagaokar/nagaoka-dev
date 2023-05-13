import Image from 'next/image'
import { Job, jobs } from '../../lib/ContentDB'
import { JobPost } from '@/components/cards/EmploymentCard'
import Underline from '../../icons/undraw/undraw_underline.svg'

export default function Employment() {
  return (
    <section id="employment-content" className="py-4">
      {/* START: EMPLOYMENT TITLE */}
      <div className="mb-8 flex flex-col justify-center text-3xl font-bold">
        {/* TITLE TEXT */}
        <p>employment</p>
        {/* TITLE UNDERLINE */}
        <Image
          className="mt-1 rotate-2"
          src={Underline}
          width={200}
          height={500}
          alt="A black underline of the title"
        />
      </div>
      {/* END: EMPLOYMENT TITLE */}
      {/* START: EMPLOYMENT CARD */}
      <div>
        {jobs.map((props: Job, index: number) => (
          <JobPost
            key={index}
            index={index}
            title={props.title}
            desc={props.desc}
            organisation={props.organisation}
            link={props.link}
            date={props.date}
          />
        ))}
      </div>
      {/* END: EMPLOYMENT CARD */}
    </section>
  )
}

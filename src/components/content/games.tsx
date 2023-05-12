import Image from 'next/image';

import { Game, games } from '../../lib/ContentDB';
import { GamePost } from '@/components/cards/GameCard';
import Underline from '../../icons/undraw/undraw_underline.svg'

export default function Games() {
  return (
    <section id='employment-content' className='py-4'>
      {/* START: EMPLOYMENT TITLE */}
      <div className="flex flex-col justify-center font-bold text-3xl mb-8">
          {/* TITLE TEXT */}
          <p>games</p>
          {/* TITLE UNDERLINE */}
          <Image 
          className="mt-1 rotate-2" src={Underline} width={200} height={500}
          alt="A black underline of the title"
          />
      </div>
      {/* END: EMPLOYMENT TITLE */}
      {/* START: EMPLOYMENT CARD */}
      <div>
        {games.map((prop: Game, index:number) => (
          <GamePost
          key={index}
          index={index}
          title={prop.title}
          desc={prop.desc}
          organisation={prop.organisation}
          date={prop.date}
          />
        ))}
      </div>
      {/* END: EMPLOYMENT CARD */}
    </section>
  )
}
  //   <main className='flex flex-wrap justify-center align-middle overflow-x-hidden py-8'>
  //     <div className='flex flex-col justify-center'>
  //       <div className='mb-6 justify-center text-center font-black
  //       xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl'>
  //         <p>Games</p>
  //       </div>
  //         <div className='flex flex-wrap mt-6 ml-6 mr-6 text-align-left justify-center'>
  //         {games.map((game: Game, index:number) => (
  //           <GamePost
  //           key={index}
  //           index={index}
  //           title={game.title}
  //           desc={game.desc}
  //           organisation={game.organisation}
  //           date={game.date}
  //           />
  //           ))}
  //         </div>
  //       </div>
  //   </main>
  // )
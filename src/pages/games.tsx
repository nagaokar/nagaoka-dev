import { Game, games } from '@/components/ContentDB';
import { GamePost } from '@/components/GameCard';

export default function Games() {
  return (
    <main className='flex flex-wrap justify-center align-middle overflow-x-hidden py-8'>
      <div className='flex flex-col justify-center'>
        <div className='mb-6 justify-center text-center font-black
        xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl'>
          <p>Games</p>
        </div>
          <div className='flex flex-wrap mt-6 ml-6 mr-6 text-align-left justify-center'>
          {games.map((game: Game, index:number) => (
            <GamePost
            key={index}
            index={index}
            title={game.title}
            desc={game.desc}
            organisation={game.organisation}
            date={game.date}
            />
            ))}
          </div>
        </div>
    </main>
  )
}
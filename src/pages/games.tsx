import { Game, GamePost, games } from '@/components/Works';

export default function Games() {
  return (
    <main className='flex flex-wrap justify-center align-middle overflow-x-hidden py-16'>
        <div className='flex flex-col justify-center h-screen'>
          <p>Games</p>
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
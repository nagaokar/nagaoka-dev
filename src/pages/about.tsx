export default function About() 
{


  return (
    <main className='flex flex-col justify-center p-12 align-middle overflow-x-hidden h-content mt-[-10] text-black bg-white rounded-2xl '>
      <div className='align-middle text-start xs:justify-start sm:justify-start md:justify-start lg:justify-start md:p-10 lg:p-12 xl:p-16'>        
        <div className='sm:text-sm md:text-md lg:text-base xl:text-lg sm: mx-2 md:mx-12 lg:mx-16 xl:scroll-mx-24 font-normal'>
            <span className="font-bold">
            Hi. I&apos;m Reiji Nagaoka. A Phd researcher, computational designer, university tutor, web developer, writer, game-maker, and musician.
            </span> 
          <p className='mt-12'>
              I am currently working towards a PhD at Manchester Metropolitan University. 
              My research sits at an intersection between urban planning, game studies, and climate change communication. 
              It examines climate-related collective player actions online multiplayer videogames.
          </p>
        </div>
      </div>
    </main>
  )
}

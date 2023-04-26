
export default function WorkList()
{   
    const works = [
        {
            title: 'Cityzen',
            desc: 'An online multiplayer eco-planning game', 
            organisation: 'Final Thesis, MA Architecture',
            date: '2021'
        },
        {
            title: 'Ecoville',
            desc: 'An online multiplayer eco-planning game',
            organisation: 'May 2023',
            date: ''
        },
    ]
    
    return(
        <>
        {works.map((works, index) => (
            <WorkPost 
                key={index} 
                index={index} 
                title={works.title}
                desc={works.desc}
                organisation={works.organisation}
                date={works.date} />
        ))}
        </>
    );
}

export function WorkPost(post: {title: string, organisation: string, desc: string, date:string, index: number})
{
    return(
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 ml-2 mr-2 bg-gray-500">
            {post.title}. {post.organisation}
        </div>


    )
}


//CARD
{/* <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 border-solid border border-white">
<img className="w-full" src="https://generative-placeholders.glitch.me/image?width=300&height=300" alt="Sunset in the mountains" />
<div className="px-6 py-4">
    <div className="font-bold text-xl">{post.title}</div>
    <p className="text-gray-400 text-base">
    {post.organisation}
    </p>
</div>
</div> */}


// ORIGINAL
// <main>
// <div className='pb-4'>
//     <div>
//         <p className='p-6'>{post.title}</p>

//     </div>
//     <p className='text-slate-400'>{post.organisation}. {(post.date)}</p>  
// </div>
// </main>
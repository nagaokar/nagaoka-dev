
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
            organisation: 'AESOP Conference',
            date: 'May 2023'
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
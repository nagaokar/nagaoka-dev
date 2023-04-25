
export default function WorkList()
{   
    const works = [
        {
            title: 'Cityzen: A Online Multiplayer Participatory Planning Game for the Northern Gateway, Manchester',
            organisation: 'Final Thesis, MA Architecture',
            date: '2021'
        },
        {
            title: 'Ecoville: An Online Multiplayer Environmental Planning Game',
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
                organisation={works.organisation}
                date={works.date} />
        ))}
        </>
    );
}

export function WorkPost(post: {title: string, organisation: string, date:string, index: number})
{
    return(
        <main>
            <div className='pb-3'>
                <ul>{post.title}</ul>
                <ul className='text-slate-400'>{post.organisation}. {(post.date)}</ul>  
            </div>
        </main>
    )
}
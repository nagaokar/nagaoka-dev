
export default function PublicationList()
{   
    const publications = [
        {
            title: 'Planetary Play: Games and the Environment',
            organisation: 'Uppercut Crit',
        },
        {
            title: 'Collaborative Play in an Online Multiplayer Urban Planning Eco-Game',
            organisation: 'Forthcoming',
        },
        {
            title: 'Virtual Eco-Cities: An Eco-game Conceptual Framework for the Analysis of Virtual Cities',
            organisation: 'Forthcoming',
        },
    ]
    
    return(
        <>
        {publications.map((publication,index) => (
            <PublicationPost 
                key={index} 
                index={index} 
                title={publication.title}
                organisation={publication.organisation} />
        ))}
        </>
    );
}

export function PublicationPost(post: {title: string, organisation: string, index: number})
{
    return(
        <>
            <div className='pb-3 w-[500]'>
                <ul>{post.title}</ul>
                <ul className='text-slate-400'>{post.organisation}</ul>  
            </div>
    </>
    )
}

export default function ConferenceList()
{   
    const conferences = [
        {
            title: 'Infrasystems Towards Healthy Brazil:Sustainable Urban Nexus (Water-Energy-Sanitation) in the Tiete River Basin',
            organisation: 'Presenter',
            date: 'July 2021',
            link: 'https://infrasystems.complexurban.com/people'
        },
        {
            title: 'Complex [Cognitive] Cities: Sensing, planning and design in urban transformations',
            organisation: 'Presenter + Workshop Organiser',
            date: 'April 2023',
            link: 'https://aesop-planning.eu/resources/news-archive/thematic-groups/planning-and-complexity/complex-cognitive-cities-sensing-planning-and-design-in-urban-transformations'
        },
        {
            title: 'New Work in Game Studies',
            organisation: 'Presenter',
            date: 'April 2023',
            link: 'https://manchestergamecentre.org/events/2023/2/22/alex-and-reiji-wip'
        },
        {
            title: 'Multiplatform 3: Remake, Reuse, Replay!',
            organisation: 'Presenter',
            date: 'June 2023',
            link: 'https://manchestergamecentre.org/events/2023/6/7/multiplatform-3-remake-reuse-replay'
        },
    ]
    
    return(
        <>
        {conferences.map((conference, index) => (
            <ConferencePost 
                key={index} 
                index={index} 
                title={conference.title}
                organisation={conference.organisation}
                date={conference.date} 
                link={conference.link}/>
        ))}
        </>
    );
}

export function ConferencePost(post: {title: string, organisation: string, date:string, link:string, index: number})
{
    return(
        <main>
            <div className='pb-4 w-[500]'>
                <ul>{post.title}</ul>
                <ul className='text-slate-400'>{post.organisation}. {(post.date)}</ul>
                <ul className='text-slate-500'><a href={post.link}>More Details</a></ul>
            </div>
        </main>
    )
}
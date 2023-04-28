import React from 'react';

export interface Game 
{
    title: string;
    desc: string;
    organisation: string;
    date: string; 
}


export interface Talk {
    title: string;
    organisation: string;
    link: string;
    date: string; 
}

export interface Publication {
    title: string;
    organisation: string;
    date: string;
    link: string;
}


export const games: Game[] = [
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
export interface GamePostProps 
{
    title: string;
    organisation: string;
    desc: string;
    date: string;
    index: number;
}


export function GamePost(props: GamePostProps)
{
    return(
        <div className="flex flex-col max-w-sm min-h-[300] h-[300] rounded overflow-hidden m-2">
        <div className="px-6 py-4 pb-2">
            <div className="text-xl mb-2">
                {props.title}
            </div>
            <p className="text-gray-700 text-base mb-3">
                {props.desc}
            </p>
            <div className="flex flex-col text-gray-400 text-sm justify-center align-bottom">
                <p>{props.organisation}</p>
                <p>{props.date}</p>
            </div>
        </div>
    </div>
    )
}





export const publications: Publication[] = [
    {
        title: 'Planetary Play: Games and the Environment',
        organisation: 'Uppercut Crit',
        date: 'May 2023 (currently in edit)',
        link: '-',
    },
    {
        title: 'Collaborative Play in an Online Multiplayer Urban Planning Eco-Game',
        organisation: 'Forthcoming',
        date: 'May 2023 (currently in edit)',
        link: '-',
    },
    {
        title: 'Virtual Eco-Cities: An Eco-game Conceptual Framework for the Analysis of Virtual Cities',
        organisation: '-',
        date: 'May 2023 (currently in edit)',
        link: '-',
    },
]

export interface PublicationPostProps 
{
    title: string;
    organisation: string;
    date: string;
    link: string;
    index: number;
}
  

export function PublicationPost(props: PublicationPostProps)
{
    return(
        <div className="flex flex-col max-w-sm min-h-[300] h-[300] rounded overflow-hidden m-2">
        <div className="px-6 py-4 pb-2">
            <div className="text-xl mb-2">
                {props.title}
            </div>
            <p className="text-gray-700 text-base mb-3">
                {props.desc}
            </p>
            <div className="flex flex-col text-gray-400 text-sm justify-center align-bottom">
                <p>{props.organisation}</p>
                <p>{props.date}</p>
            </div>
        </div>
    </div>
    )
}




export interface TalkPostProps 
{
    title: string;
    organisation: string;
    date: string;
    index: number;
}
  
export const talks: Talk[] = [
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

export function TalkPost(props: TalkPostProps)
{
    return(
        <div className="flex flex-col max-w-sm min-h-[300] h-[300] rounded overflow-hidden m-2">
        <div className="px-6 py-4 pb-2">
            <div className="text-xl mb-2">
                {props.title}
            </div>
            <div className="flex flex-col text-gray-400 text-sm justify-center align-bottom">
                <p>{props.organisation}</p>
                <p>{props.date}</p>
            </div>
        </div>
    </div>
    )
}
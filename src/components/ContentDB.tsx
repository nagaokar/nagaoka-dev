import React from 'react';

export interface Job {
    title: string;
    desc: string;
    organisation: string;
    date: string;
}

export const jobs: Job[] = [

    {
        title: 'Research Assistant',
        desc: 'Managing the online presence of MGC. Assisting with general duties. ',
        organisation: 'Manchester Game Centre',
        date: '2022 - 2023',
    },
    {
        title: 'Digital Engineer',
        desc: 'Design and development of computational tools for national infrastructure.', 
        organisation: 'Costain',
        date: '2021 - Present',
    },
    {
        title: 'MArch Y6 Tutor',
        desc: 'Informal tutor of the Complexity, Planning, and Urbanism (CPU) taught MA.', 
        organisation: 'Manchester School of Architecture',
        date: '2022 - Present',
    }
];

export interface JobPostProps 
{
    title: string;
    organisation: string;
    desc: string;
    date: string;
    index: number;
}
  

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
        title: 'Ecoville',
        desc: 'An online multiplayer eco-planning game',
        organisation: 'AESOP Conference',
        date: 'May 2023'
    },
    {
        title: 'Cityzen',
        desc: 'An online multiplayer eco-planning game', 
        organisation: 'Final Thesis, MA Architecture',
        date: '2021'
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


export const publications: Publication[] = [
    {
        title: 'Planetary Play: Games and the Environment',
        organisation: 'Uppercut Crit',
        date: 'May 2023 (currently in edit)',
        link: '',
    },
    {
        title: 'Collaborative Play in an Online Multiplayer Urban Planning Eco-Game',
        organisation: 'Research Paper',
        date: 'Forthcoming',
        link: '',
    },
    {
        title: 'Virtual Eco-Cities: An Eco-game Conceptual Framework for the Analysis of Virtual Cities',
        organisation: 'Research Paper',
        date: 'Forthcoming',
        link: '',
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

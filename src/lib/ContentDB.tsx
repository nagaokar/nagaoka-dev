import React from 'react';

/// START: JOBS (EMPLOYMENT)
///////////////////////////// 
export interface Job {
    title: string;
    desc: string;
    organisation: string;
    date: string;
}

export const jobs: Job[] = [
    {
        title: 'Freelance Writer',
        desc: "Article written for an online gaming blog titled: 'Planetary Play: Games and the Environment'. you can read it here: https://uppercutcrit.com/planetary-play-games-and-the-environment",
        organisation: 'Uppercut Crit',
        date: '2023',
    },
    {
        title: 'Research Assistant',
        desc: 'my role revolves around developing the profile of the  manchester game centre (mgc), both internally (at manchester metropolitan university) and externally. primarily, this involves strategic planning and management of the mgc’s online presence. for more information visit: https://manchestergamecentre.org/',
        organisation: 'Manchester Game Centre',
        date: '2022',
    },
    {
        title: 'MArch Y6 Tutor',
        desc: 'i am an informal tutor of the 6th year master’s atelier: ‘complexity, planning, and urbanism’ (cpu) at the manchester school of architecture. the atelier specialises in computational methods for architectural and urban design.', 
        organisation: 'Manchester School of Architecture',
        date: '2022',
    },
    {
        title: 'Digital Engineer',
        desc: 'i work in the automated design department of costain. my work involves the design and development of computational design tools for critical national infrastructure.', 
        organisation: 'Costain',
        date: '2021',
    },
];

export interface JobPostProps 
{
    title: string;
    organisation: string;
    desc: string;
    date: string;
    index: number;
}
// END: JOBS
  

// START: GAMES
export interface Game 
{
    title: string;
    desc: string;
    organisation: string;
    date: string; 
}

export const games: Game[] = [
    {
        title: 'Ecoville',
        desc: 'An online multiplayer eco-planning game created for the AESOP 2023 Planning and Complexity conference. This online multiplayer game gave players individual roles in which they had to balance individual and collective goals to build a sustainable urban neighbourhood',
        organisation: 'Conference Workshop',
        date: '2023'
    },
    {
        title: 'Cityzen',
        desc: "An online multiplayer eco-planning game created using Kate Raworth's 'Doughbut Econnomics' as the theoretical framework. This turn-based multiplayer online game was constructed with Manchester City Council as the client to envision how a zero-carbon future for the Northern Gateway - a £1billion urban development in Northern Manchester.", 
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
// END: GAMES

// START: EDUCATION
export interface Education
{
    title: string;
    desc: string;
    organisation: string;
    date: string; 
}

export const educations: Education[] = [
    {
        title: 'Ph.D. Architecture',
        desc: 'Due to be completed in 2026, my research is Leverhulme-funded and uses online multiplayer games to understand player behaviour when the systemic consequences of climate change are revealed',
        organisation: 'manchester metropolitan university',
        date: 'wip'
    },
    {
        title: 'MA Architecture',
        desc: 'Specialised in computational design for architectural & urban design within the CPU.AI (Complexity, Planning & Urbanism. Architectural Intelligence).',
        organisation: 'manchester school of architecture',
        date: '2021'
    },
    {
        title: 'BA(hons) Architecture',
        desc: 'Joined the Continuity In Architecture atelier during final year, which specialises in applying critical regionalism to sensitive placemaking',
        organisation: 'manchester school of architecture',
        date: '2018'
    },
]

export interface EducationPostProps {
    title: string;
    desc:string;
    organisation: string;
    date: string;
    index: number;
}

// END: EDUCATION


/// START: ACADEMIC
/////////////////////////////

export interface Academic 
{
    title: string;
    organisation: string;
    date: string;
    link: string;
}
  
export const academics: Academic[] = [
    {
        title: 'Collaborative Play in an Online Multiplayer Urban Planning Eco-Game',
        organisation: 'Research Paper',
        date: 'wip',
        link: ''
    },
    {
        title: 'Virtual Eco-Cities: An Eco-game Conceptual Framework for the Analysis of Virtual Cities',
        organisation: 'Research Paper',
        date: 'wip',
        link: ''
    },
    {
        title: 'Multiplatform 3: Remake, Reuse, Replay!',
        organisation: 'Presenter',
        date: '2023',
        link: ''
    },
    {
        title: 'New Work in Game Studies: Alex Brooke and Reiji Nagaoka',
        organisation: 'Presenter',
        date: '2023',
        link: 'https://manchestergamecentre.org/events/2023/2/22/alex-and-reiji-wip'
    },
    {
        title: 'Complex [Cognitive] Cities: Sensing, planning and design in urban transformations',
        organisation: 'Presenter + Workshop Organiser',
        date: '2023',
        link: 'https://aesop-planning.eu/resources/news-archive/thematic-groups/planning-and-complexity/complex-cognitive-cities-sensing-planning-and-design-in-urban-transformations'
    },
    {
        title: 'Infrasystems Towards Healthy Brazil:Sustainable Urban Nexus (Water-Energy-Sanitation) in the Tiete River Basin',
        organisation: 'Presenter',
        date: '2021',
        link: 'https://infrasystems.complexurban.com/people'
    },
]
export interface AcademicPostProps 
{
    title: string;
    organisation: string;
    date: string;
    link: string;
    index: number;
}
// END: ACADEMIC


// START: PROJECTS

export interface Project 
{
    title: string;
    type: string;
    tech: string;
    image: string;
    desc: string;
    date: string;
}
  
export const projects: Project[] = [
    {
        title: 'projectName',
        type: 'web dev',
        tech: 'react, nextjs, tailwindcss',
        image: '../images/TokyoSkyline.jpg',
        desc: 'lorem ipsum',
        date: 'wip',
    },
    {
        title: 'projectName',
        type: 'web dev',
        tech: 'react, nextjs, tailwindcss',
        image: '../images/TokyoSkyline.jpg',
        desc: 'lorem ipsum',
        date: 'wip',
    },
    {
        title: 'projectName',
        type: 'web dev',
        tech: 'react, nextjs, tailwindcss',
        image: '../images/TokyoSkyline.jpg',
        desc: 'lorem ipsum',
        date: 'wip',
    },
]
export interface ProjectPostProps 
{
    title: string;
    type: string;
    tech: string;
    image: string;
    desc: string;
    date: string;
    index: number;
}
// END: PROJECTS
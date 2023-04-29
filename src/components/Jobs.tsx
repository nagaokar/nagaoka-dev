import React from "react";

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
        date: '2022 - 2023'
    },
    {
        title: 'Digital Engineer',
        desc: 'Design and development of computational tools for national infrastructure.', 
        organisation: 'Costain',
        date: '2021 - Present'
    },
    {
        title: 'MArch Y6 Tutor',
        desc: 'Informal tutor of the Complexity, Planning, and Urbanism (CPU) taught MA.', 
        organisation: 'Manchester School of Architecture',
        date: '2022 - Present'
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
  
export function JobPost(props: JobPostProps) 
{
    return (
        <div className="flex flex-col bg-white m-2 p-4 rounded-md w-64 h-auto">
            <div className="flex">
                <img src="https://placehold.co/250"/>
            </div>
            <div className="flex flex-col p-2 text-center h-24">
                <p className="text-xl text-blue-200 mx-2 my-3">
                    {props.title}
                </p>
            </div>
            <div className="flex justify-center align-bottom">
                <p className="text-base text-slate-400">
                    {props.desc}
                </p>
            </div>
        </div>

    );
}


{/* <div className="flex flex-col max-w-sm min-h-[300] h-[300] rounded overflow-hidden m-2">
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
</div> */}
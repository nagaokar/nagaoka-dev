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
        title: 'Graduate Digital Engineer',
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

    // return(
    //     <>
    //         {jobs.map((job: Job, index:number) => (
    //             <JobPost
    //             key={index}
    //             index={index}
    //             title={job.title}
    //             desc={job.desc}
    //             organisation={job.organisation}
    //             date={job.date}
    //             />
    //         ))}
    //     </>
    // )

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
    );
}
import React from 'react';

export interface Commit {
  sha: string;
  message: string;
  branch: string;
  author: string;
  tag: string;
  date: string;
}

const GitgraphViewer: React.FC = () => {
  const [commits, setCommits] = React.useState<Commit[]>([]);

  React.useEffect(() => {
    async function fetchCommits() {
      const response = await fetch('/api/repogitlog'); // Replace with the actual server-side route path
      const commitHistory: Commit[] = await response.json();
      setCommits(commitHistory);
    }
    fetchCommits();
  }, []);

  return (
    <div id="gitrepoViewer" className='w-content mx-4'>
      <ul className=''>
        {commits.map((commit) => (
          <li key={commit.sha} className='my-2'>
            <p>{commit.sha}</p>
            <p className='text-red-500'>{commit.author}</p>
            <p>{commit.date}</p> 
            <p>{commit.message}</p>
            <p>{commit.date}</p>
            <p id="branchName" className='font-bold'>{commit.branch}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default GitgraphViewer;


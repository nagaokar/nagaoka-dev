import React from 'react';

export interface Commit {
  sha: string;
  message: string;
  branch: string;
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
    <div>
      <ul className='list-disc'>
        {commits.map((commit) => (
          <li key={commit.sha}>{commit.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitgraphViewer;


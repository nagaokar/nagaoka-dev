import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Popup from './Popup';

import GitBranchCard from './GitBranchCard';

export interface Commit {
  sha: string;
  message: string;
  branch: string;
  author: string;
  tag: string;
  date: number;
  index: number;
}

const GitgraphViewer: React.FC = () => {
  const [commits, setCommits] = React.useState<Commit[]>([]);

  React.useEffect(() => {
    async function fetchCommits() {
      const response = await fetch('/api/repogitlog');
      const formattedCommits: Commit[] = await response.json();
      const sortedCommits = formattedCommits.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setCommits(sortedCommits);
    }
    fetchCommits();
  }, []);

  return (
    <>
      <div className='flex flex-col'>
        {commits.map((commit, index) => (
          <GitBranchCard
            key={index}
            commit={commit}
            index={index}
            nodeCount={commits.length}
          />
        ))}
      </div>
    </>
  );
};

export default GitgraphViewer;


//commit div
// className="h-content w-100 flex flex-col flex-no-wrap justify-start lowercase"
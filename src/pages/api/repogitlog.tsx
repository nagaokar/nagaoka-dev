import { NextApiRequest, NextApiResponse } from 'next';
import gitlog, { GitlogOptions } from 'gitlog';
import path from 'path';

interface Commit {
  sha: string;
  message: string;
  branch: string;
}

export default async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  const repoPath = path.resolve(process.cwd(), '..\\nagaoka-dev'); // Corrected path with escaped backslashes

  const branches = [
    'main',
    'develop/layout',
    'develop/work',
    'feature/gitgraph',
    'feature/spa',
  ];

  const formattedCommits: Commit[] = [];
  
  for (const branch of branches) {
    const commitHistory = await getCommitHistory(repoPath, branch);
    formattedCommits.push(...commitHistory);
  }

  res.status(200).json(formattedCommits);
}

async function getCommitHistory(repoPath: string, branch: string): Promise<Commit[]> {
  const options: GitlogOptions = {
    repo: repoPath,
    number: 10,
    branch,
    fields: ['subject', 'authorName', 'authorDate', 'abbrevHash'] as const,
  };

  const commitHistory = gitlog(options);
  return commitHistory.map((commit) => ({
    sha: commit.abbrevHash,
    message: commit.subject,
    branch,
    author: commit.authorName,
    date: commit.authorDate
  }));
}

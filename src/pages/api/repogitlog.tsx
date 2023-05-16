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
    "main",
    "develop/layout", 
    "develop/work", 
    "feature/gitgraph", 
    "feature/spa",
  ] 
  
  const options = {
    repo: repoPath,
    number: 10,
    branch: "main",
    fields: [
      "subject", 
      "authorName", 
      "authorDate",
      "abbrevHash",
      "tag",
    ] as const, 
  };

  const commitHistory = gitlog(options);
  const formattedCommits: GitlogOptions[] = commitHistory.map((commit) => ({
    repo: repoPath,
    sha: commit.abbrevHash,
    message: commit.subject,
    author: commit.authorName,
    date: commit.authorDate,
    tag: commit.tag,
  }));

  res.status(200).json(formattedCommits);
}
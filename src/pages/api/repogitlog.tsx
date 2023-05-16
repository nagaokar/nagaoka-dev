import { NextApiRequest, NextApiResponse } from 'next';
import gitlog from 'gitlog';
import path from 'path';

interface Commit {
  sha: string;
  message: string;
}

export default async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  const repoPath = path.resolve(process.cwd(), '..\\nagaoka-dev'); // Corrected path with escaped backslashes
  const options = {
    repo: repoPath,
    number: 10, // Limit the number of commits to fetch
  };

  const commitHistory = gitlog(options);
  const formattedCommits: Commit[] = commitHistory.map((commit) => ({
    sha: commit.hash,
    message: commit.subject,
  }));

  res.status(200).json(formattedCommits);
}

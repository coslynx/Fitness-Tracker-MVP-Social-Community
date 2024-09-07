import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate');

  return res.status(200).json({ message: 'Authenticated' });
}
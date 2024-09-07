import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { goalId } = req.query;

  if (!goalId) {
    return res.status(400).json({ message: 'Missing goal ID' });
  }

  try {
    const goal = await prisma.goal.findUnique({
      where: {
        id: parseInt(goalId.toString()),
        userId: session.user.id,
      },
      include: {
        workouts: {
          orderBy: {
            date: 'desc',
          },
        },
      },
    });

    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    const progressData = goal.workouts.map((workout) => ({
      date: workout.date.toISOString().slice(0, 10),
      progress: goal.target
        ? parseInt(goal.target) - workout.calories
        : undefined,
    }));

    return res.status(200).json(progressData);
  } catch (error) {
    console.error('Error fetching progress data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
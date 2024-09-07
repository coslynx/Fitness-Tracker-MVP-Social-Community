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

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const goals = await prisma.goal.findMany({
          where: {
            userId: session.user.id,
          },
        });
        return res.status(200).json(goals);
      } catch (error) {
        console.error('Error fetching goals:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    case 'POST':
      try {
        const { name, target, deadline } = req.body;

        if (!name || !target || !deadline) {
          return res.status(400).json({ message: 'Missing required fields' });
        }

        const goal = await prisma.goal.create({
          data: {
            name,
            target,
            deadline: new Date(deadline),
            userId: session.user.id,
          },
        });

        return res.status(201).json(goal);
      } catch (error) {
        console.error('Error creating goal:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    case 'PUT':
      try {
        const { id, name, target, deadline } = req.body;

        if (!id || !name || !target || !deadline) {
          return res.status(400).json({ message: 'Missing required fields' });
        }

        const goal = await prisma.goal.update({
          where: {
            id,
            userId: session.user.id,
          },
          data: {
            name,
            target,
            deadline: new Date(deadline),
          },
        });

        return res.status(200).json(goal);
      } catch (error) {
        console.error('Error updating goal:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    case 'DELETE':
      try {
        const { id } = req.body;

        if (!id) {
          return res.status(400).json({ message: 'Missing goal ID' });
        }

        await prisma.goal.delete({
          where: {
            id,
            userId: session.user.id,
          },
        });

        return res.status(204).send();
      } catch (error) {
        console.error('Error deleting goal:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
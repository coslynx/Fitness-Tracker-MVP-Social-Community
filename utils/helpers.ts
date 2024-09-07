import { getSession } from "next-auth/react";
import { prisma } from "../../../lib/prisma";

export const generateShareUrl = async (goalId: number) => {
  const session = await getSession();

  if (!session) {
    throw new Error("User is not authenticated");
  }

  const goal = await prisma.goal.findUnique({
    where: {
      id: goalId,
      userId: session.user.id,
    },
  });

  if (!goal) {
    throw new Error("Goal not found");
  }

  const shareUrl = `https://your-app-url.com/dashboard?goalId=${goalId}`;
  return shareUrl;
};
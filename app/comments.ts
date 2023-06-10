'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
const prisma = new PrismaClient()

export const getComments = async () => {
  const comments = await prisma.comment.findMany({
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  })
  return comments
}

export const createComment = async (
  userId: string,
  username: string,
  profileImage: string,
  userComment: string,
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })

  // For a existing user, create a new comment else just create a user and comment
  if (user) {
    await prisma.comment.create({
      data: {
        comment: userComment,
        userId: userId,
      },
    })
  } else {
    await prisma.user.create({
      data: {
        id: userId,
        username: username,
        profileImage: profileImage,
        comments: { create: { comment: userComment } },
      },
    })
  }
  revalidatePath('/experiments')
}

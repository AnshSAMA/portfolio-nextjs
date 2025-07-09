import Image from 'next/image'
import React, { Suspense } from 'react'
import MagicalText from '../(components)/(magicalText)/magicalText'
import { getComments } from '../comments'
import LoginComment from './LoginComment'

type Props = {}
export default async function page({}: Props) {
  return null;
  // await prisma.comment.deleteMany()
  // await prisma.user.deleteMany()
  const comments = await getComments()
  return (
    <div className="mx-auto flex w-4/5 flex-col items-center gap-y-3 rounded bg-black p-8">
      <Suspense fallback={<p>getting comments ...</p>}>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-3xl font-medium text-[var(--secondary)] md:text-4xl">
            <span className="">Comments</span> <span>😉</span>
          </h1>
          <LoginComment />
          <div className="flex flex-col gap-y-2">
            {comments.map((commentData, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center gap-x-2 text-sm"
                >
                  <Image
                    src={commentData.user.profileImage}
                    alt="user profile pic"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                  <MagicalText
                    text={commentData.user.username + ': '}
                    stars={false}
                  />
                  <span>{commentData.comment}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Suspense>
    </div>
  )
}


import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { HeroData } from '../../typings'

const query = groq`*[_type == "pageInfo"]`

type Data = {
  pageInfo: HeroData[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const pageInfo: HeroData[] = await sanityClient.fetch(query)
  res.status(200).json({ pageInfo })
}

interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface HeroData extends SanityBody {
  _type: 'pageInfo'
  heroText: string[]
  profilePicture: Image
  role: string
}

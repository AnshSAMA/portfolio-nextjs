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

export interface Skill extends SanityBody {
  _type: 'skill'
  title: string
  progress: string
  image: Image
}

export interface Technology extends SanityBody {
  _type: 'skill'
  title: string
  progress: string
  image: Image
}

export interface WorkExperience extends SanityBody {
  _type: 'workExperience'
  position: string
  companyName: string
  startDate: date
  endDate: date
  currentlyWorkingHere: boolean
  technologies: Technology[]
}

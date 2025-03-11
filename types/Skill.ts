import { StaticImageData } from 'next/image'

export type SkillType = {
  name?: string
  image: StaticImageData | string
}

export type SkillDataType = {
  id: number
  name: string
  image: StaticImageData
}

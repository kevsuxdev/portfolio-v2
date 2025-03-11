import { StaticImageData } from 'next/image'

export interface Technology {
  id: number
  title: string
  image: StaticImageData
}

export interface ProjectDetail {
  id: number
  name: string
  description: string
  technologies: Technology[]
}

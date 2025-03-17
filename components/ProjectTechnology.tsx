import Image, { StaticImageData } from 'next/image'
import React from 'react'

const ProjectTechnology = ({
  image,
  title,
}: {
  image: StaticImageData
  title: string
}) => {
  return (
    <div className='border rounded-lg border-black w-fit flex items-center gap-2 px-4 py-2 h-10'>
      <h1 className='text-xs font-medium'>{title}</h1>
      <Image src={image} alt='Node JS' width={20} />
    </div>
  )
}

export default ProjectTechnology

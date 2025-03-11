import { SkillType } from '@/types/Skill'
import Image from 'next/image'
import React, { FC } from 'react'

const Skill: FC<SkillType> = ({ image }) => {
  return (
    <article className='flex items-center justify-center gap-2 w-12 h-12 rounded-xl bg-gradient-to-b from-blue-300 via-purple-100 to-blue-600  hover:-translate-y-3 duration-200 shadow-[-3px_3px_0_black]'>
      {/* <h3 className='text-xs font-medium tracking-wide'>{name}</h3> */}
      <Image src={image} alt='Skill Image' width={25} height={25} />
    </article>
  )
}

export default Skill

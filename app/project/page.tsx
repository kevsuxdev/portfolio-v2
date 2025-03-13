'use client'
import PageLayout from '@/components/PageLayout'
import { projects } from '@/constant/projects'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { icons } from '@/constant/icons'
import { hiddenAnimation } from '@/constant/animationVariant'

const ProjectPage = () => {
  return (
    <PageLayout pageName='Project' className='px-5'>
      <motion.section
        initial='hidden'
        animate='visible'
        variants={hiddenAnimation}
        className='mt-5 space-y-5 lg:pr-12'
      >
        {projects.map((project, index) => {
          const { name, description, technologies } = project
          return (
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              key={index}
              className='pb-8 flex flex-col gap-4 items-start lg:items-start border-b border-black/10'
            >
              <div className='flex flex-col gap-3 w-full'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-lg font-bold tracking-wide'>{name}</h1>
                  <button className='fill-button items-center gap-2 !text-xs tracking-wide !px-4 !bg-blue-500 active:scale-90 hidden lg:flex'>
                    Request Demo
                    <icons.IoVideocamOutline className='text-lg' />
                  </button>
                </div>
                <p className='text-sm lg:w-2/3 text-justify'>{description}</p>
              </div>
              <h1 className='font-medium mt-3 text-sm w-full'>Techonologies:</h1>
              <div className='flex items-center gap-2 flex-wrap w-full'>
                {technologies.map((technology, techIndex) => {
                  const { title, image } = technology
                  return (
                    <div
                      key={techIndex}
                      className='border rounded-lg border-black w-fit flex items-center gap-2 px-4 py-2'
                    >
                      <h1 className='text-xs font-medium'>{title}</h1>
                      <Image src={image} alt='Node JS' width={20} />
                    </div>
                  )
                })}
              </div>
              <button className='fill-button flex items-center gap-2 !text-xs tracking-wide !px-4 !bg-blue-500 active:scale-90 z-10 lg:hidden'>
                Request Demo
                <icons.IoVideocamOutline className='text-lg' />
              </button>
            </motion.article>
          )
        })}
      </motion.section>
    </PageLayout>
  )
}

export default ProjectPage

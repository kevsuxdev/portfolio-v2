'use client'
import PageLayout from '@/components/PageLayout'
import { projects } from '@/constant/projects'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { hiddenAnimation } from '@/constant/animationVariant'
import ProjectTechnology from '@/components/ProjectTechnology'
import RequestDemoButton from '@/components/RequestDemoButton'
import RequestDemoModal from '@/components/RequestDemoModal'

const ProjectPage = () => {
  const [openRequestModal, setOpenRequestModal] = useState<number | null>(null)
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
                  <RequestDemoButton
                    onClick={() => setOpenRequestModal(index)}
                    className='hidden lg:flex'
                  />
                </div>
                <p className='text-sm lg:w-2/3 text-justify'>{description}</p>
              </div>
              <h1 className='font-medium mt-3 text-sm w-full'>
                Techonologies:
              </h1>
              <div className='flex items-center gap-2 flex-wrap w-full'>
                {technologies.map((technology, techIndex) => {
                  const { title, image } = technology
                  return (
                    <ProjectTechnology
                      key={techIndex}
                      image={image}
                      title={title}
                    />
                  )
                })}
              </div>
              <RequestDemoButton
                onClick={() => setOpenRequestModal(index)}
                className='flex lg:hidden'
              />
              {openRequestModal === index && (
                <RequestDemoModal
                  title={name}
                  onClose={() => setOpenRequestModal(null)}
                />
              )}
            </motion.article>
          )
        })}
      </motion.section>
    </PageLayout>
  )
}

export default ProjectPage

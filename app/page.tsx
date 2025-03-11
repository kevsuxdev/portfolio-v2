'use client'
import PageLayout from '@/components/PageLayout'
import React from 'react'
import { icons } from '@/constant/icons'
import CallToAction from '@/components/CallToAction'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <PageLayout pageName='Home'>
      <section className='flex items-center justify-center min-h-[90vh] w-full flex-col'>
        <motion.article
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='flex flex-col gap-2 items-center'
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='flex items-start gap-5 flex-col'
          >
            <p className='text-sm font-bold text-blue-800 tracking-wide flex items-center justify-start gap-2'>
              <icons.FaRankingStar className='text-xl' />
              Freelancer
            </p>
            <h1 className='text-5xl font-bold capitalize'>
              I Serve as expected
            </h1>
          </motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='text-[16px] text-center w-[67%]'
          >
            Hi there! I&apos;m Kevin Romero, a{' '}
            <span className='text-blue-800 capitalize font-bold border-blue-500'>
              full-stack web developer
            </span>{' '}
            who produces high-quality and user-friendly systems or projects
            tailored to the needs of clients.
          </motion.p>
          <motion.div
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <CallToAction
              title='View Projects'
              className='mt-2'
              icon={icons.LiaProjectDiagramSolid}
              href='/project'
            />
          </motion.div>
        </motion.article>
      </section>
    </PageLayout>
  )
}

export default HomePage

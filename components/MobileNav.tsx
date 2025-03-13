import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { socials } from '@/constant/socials'
import { navLinks } from '@/constant/navbar'

const MobileNav = ({
  show,
  setShowNav,
}: {
  show: boolean
  setShowNav: (value: boolean) => void
}) => {
  return (
    <motion.nav
      initial={{
        x: show ? -300 : 0,
      }}
      animate={{
        x: show ? -300 : 0,
      }}
      exit={{
        x: -300,
      }}
      transition={{ duration: 0.2, ease: 'easeInOut', staggerChildren: 0.2 }}
      className={`fixed duration-200 w-64 top-0 h-screen bg-black lg:hidden p-5 z-30 flex items-start justify-start flex-col gap-5`}
    >
      <Link
        href={'/'}
        className='text-2xl font-title font-bold tracking-tighter text-white text-nowrap'
        onClick={() => setShowNav(true)}
      >
        Kevs Dev
      </Link>

      {navLinks.map((link, index) => {
        const { path, name } = link
        return (
          <Link
            key={index}
            className='text-white text-xs font-medium py-3 border-white/30 border-b w-full text-start'
            href={path}
            onClick={() => setShowNav(true)}
          >
            {name}
          </Link>
        )
      })}

      <footer className='flex items-center gap-3 justify-center w-full'>
        {socials.map((social) => {
          const { id, icon, link } = social
          const Icons = icon
          return (
            <Link href={link} key={id} target='_blank'>
              <Icons className='text-2xl cursor-pointer active:scale-90 duration-150 text-white' />
            </Link>
          )
        })}
      </footer>
    </motion.nav>
  )
}

export default MobileNav

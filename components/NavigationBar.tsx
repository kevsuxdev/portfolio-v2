'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { socials } from '@/constant/socials'
import { icons } from '@/constant/icons'
import MobileNav from './MobileNav'
import { AnimatePresence } from 'framer-motion'

const NavigationBar = () => {
  const [showNav, setShowNav] = useState<boolean>(true)

  return (
    <>
      <icons.HiOutlineMenuAlt1
        className={`text-3xl absolute right-5 top-5 lg:hidden active:scale-90 duration-200 z-10`}
        onClick={() => {
          setShowNav(!showNav)
        }}
      />
      <AnimatePresence>
        <MobileNav setShowNav={setShowNav} show={showNav} />
      </AnimatePresence>
      <aside className='min-w-56 min-h-screen items-center justify-between flex-col py-24 z-10 hidden lg:flex'>
        <article className='flex items-center justify-center flex-col gap-1'>
          <Link
            href={'/'}
            className='text-3xl font-title font-bold tracking-tighter'
          >
            Kevs Dev
          </Link>
          <p className='text-sm tracking-wide'>Web Developer</p>
        </article>
        <nav className='w-full flex items-center justify-center flex-col gap-5'>
          <NavLink name='Projects' href='/project' />
          <NavLink name='Contact' href='/contact' />
        </nav>
        <footer className='flex items-center gap-3 justify-center'>
          {socials.map((social) => {
            const { id, icon, link } = social
            const Icons = icon
            return (
              <Link href={link} key={id} target='_blank'>
                <Icons className='text-2xl cursor-pointer active:scale-90 duration-150' />
              </Link>
            )
          })}
        </footer>
      </aside>
    </>
  )
}

export default NavigationBar

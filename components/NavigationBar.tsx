import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import { socials } from '@/constant/socials'

const NavigationBar = () => {
  return (
    <aside className='min-w-56 min-h-screen flex items-center justify-between flex-col py-24 z-10'>
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
  )
}

export default NavigationBar

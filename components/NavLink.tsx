'use client'
import { NavLinkType } from '@/types/NavLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

const NavLink: FC<NavLinkType> = ({ href, name }) => {
  const path = usePathname()
  const isActivePage = path === href
  return (
    <Link
      className={`w-32 font-medium text-sm hover:bg-foreground hover:text-background rounded-lg p-2 text-center border-transparent duration-200 ${
        isActivePage && 'bg-foreground text-background'
      }`}
      href={href}
    >
      {name}
    </Link>
  )
}

export default NavLink

'use client'
import React, { ReactNode } from 'react'
import PageWriter from './PageWriter'
import { usePathname } from 'next/navigation'

const PageLayout = ({
  pageName,
  children,
  className,
}: {
  pageName: string
  children?: ReactNode
  className?: string
}) => {
  const path = usePathname()
  const isHome = path === '/'

  return (
    <section className={`w-full py-10 ${className}`}>
      {!isHome && (
        <h1 className='text-[17px] font-bold tracking-wide'>
          {'>'} <PageWriter pageName={`${pageName}`} /> {'>'}
        </h1>
      )}
      {children}
    </section>
  )
}

export default PageLayout

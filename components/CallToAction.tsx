import { CallToActionType } from '@/types/Button'
import Link from 'next/link'
import React, { FC } from 'react'

const CallToAction: FC<CallToActionType> = ({
  title,
  className,
  icon: Icon,
  href
}) => {
  return (
    <Link
      href={href}
      className={`outline-button flex items-center gap-2 ${className}`}
    >
      {Icon && <Icon className='text-xl' />} {title || 'Button'}
    </Link>
  )
}

export default CallToAction

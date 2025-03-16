import React from 'react'
import { icons } from '@/constant/icons'

const RequestDemoButton = ({
  onClick,
  className,
}: {
  onClick?: () => void
  className?: string
}) => {
  return (
    <button
      onClick={onClick}
      className={`fill-button items-center gap-2 !text-xs tracking-wide !px-4 !bg-blue-500 active:scale-90 ${className}`}
    >
      Request Demo
      <icons.IoVideocamOutline className='text-lg' />
    </button>
  )
}

export default RequestDemoButton

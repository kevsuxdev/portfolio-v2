import React, { ChangeEvent, FC } from 'react'

interface TextField {
  label: string
  type: 'password' | 'text' | 'email'
  placeholder: string
  name: string
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputField: FC<TextField> = ({
  label,
  type,
  placeholder,
  name,
  handleOnChange,
}) => {
  return (
    <article className='flex items-start flex-col gap-1 w-full'>
      <label className='font-medium text-xs lg:text-sm'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleOnChange}
        className='p-2 py-3 rounded-lg bg-transparent border-black border text-xs outline-none w-full'
      />
    </article>
  )
}

export default InputField

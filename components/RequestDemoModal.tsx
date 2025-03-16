'use client'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { icons } from '@/constant/icons'
import type { RequestDemoForm, RequestDemoModal } from '@/types/Modal'
import InputField from './InputField'
import { requestDemo } from '@/lib/mailer'
import { toast } from 'react-toastify'
import { toastifyStyle } from '@/constant/animationVariant'
import { motion } from 'framer-motion'
import Spinner from './Spinner'
import { isValidEmail } from '@/constant/regex'

const RequestDemoModal = ({ onClose, title }: RequestDemoModal) => {
  const [loading, setLoading] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement | null>(null)

  const [requestForm, setRequestForm] = useState<RequestDemoForm>({
    title: title,
    email: '',
    reason: '',
  })

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    if (requestForm.reason.trim() === '' || requestForm.email.trim() === '') {
      setLoading(false)
      return toast.warn('Please fill up the request form.', toastifyStyle)
    }

    if (!isValidEmail(requestForm.email)) {
      setLoading(false)
      return toast.warn('Please enter a valid email address.', toastifyStyle)
    }

    const response = await requestDemo({
      email: requestForm.email,
      reason: requestForm.reason,
      project: requestForm.title,
    })

    if (response.success) {
      formRef.current?.reset()
      onClose?.()
      setLoading(false)
      return toast.success(response.message, toastifyStyle)
    }

    setLoading(false)
    return toast.error(response.message, toastifyStyle)
  }

  return (
    <div className='absolute inset-0 bg-black/40 h-screen flex items-center justify-center'>
      <motion.form
        ref={formRef}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onSubmit={handleForm}
        className='w-[90%] lg:w-fit z-20 bg-background rounded-lg p-5 flex flex-col gap-5'
      >
        <article className='space-y-3'>
          <div className='flex items-center justify-between'>
            <h1 className='font-semibold text-lg'>Requesting Project Demo</h1>
            <icons.IoClose
              onClick={onClose}
              className='text-lg cursor-pointer active:scale-90 duration-200'
            />
          </div>
          <div className='space-y-3'>
            <p className='text-xs lg:text-sm font-medium'>
              Get an exclusive video demo of the{' '}
              <span className='font-bold text-sm lg:text-[18px]'>
                {title} Project!
              </span>
            </p>
            <p className='text-xs lg:text-sm'>
              Fill out the form below, and I&apos;ll send you a detailed
              walkthrough showcasing its features and functionality.
            </p>
          </div>
        </article>

        <article className='flex flex-col gap-3'>
          <InputField
            label='Email Address'
            placeholder='e.g., johndoe@example.com'
            type='email'
            name='email'
            handleOnChange={(event) =>
              setRequestForm({ ...requestForm, email: event.target.value })
            }
          />
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-xs lg:text-sm'>
              Reason for Requesting
            </label>
            <textarea
              placeholder="Briefly explain why you're interested in this demo..."
              name='reason'
              className='bg-transparent w-full resize-none border border-black rounded-lg outline-none p-2 py-3 text-xs min-h-44 max-w-[813.88px]'
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setRequestForm({ ...requestForm, reason: event.target.value })
              }
            ></textarea>
          </div>
        </article>
        <button
          disabled={loading}
          className='fill-button flex items-center justify-center'
        >
          {loading ? <Spinner /> : 'Send Request'}
        </button>
      </motion.form>
    </div>
  )
}

export default RequestDemoModal

'use client'
import InputField from '@/components/InputField'
import PageLayout from '@/components/PageLayout'
import React, { FormEvent, useState } from 'react'
import { icons } from '@/constant/icons'

const ContactPage = () => {
  const [formData, setFormData] = useState<{
    name: string
    email: string
    feedback: string
  }>({
    name: '',
    email: '',
    feedback: '',
  })

  const handleContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.table(formData)
  }

  return (
    <PageLayout pageName='Contact'>
      <section className='h-[89vh] flex items-center justify-center'>
        <aside className='flex flex-col items-center gap-5'>
          <article className='space-y-2 text-center flex items-center flex-col'>
            <h1 className='text-3xl font-bold capitalize'>
              Let&apos;s Connect and Build Something Amazing Together!
            </h1>
            <p className='text-sm w-2/3'>
              Have a project in mind or just want to connect? Feel free to reach
              out—I&apos;d love to hear from you!
            </p>
          </article>

          <form
            onSubmit={handleContactForm}
            className='flex flex-col gap-5 items-center p-3 w-full'
          >
            <article className='flex items-center gap-x-5 w-full'>
              <InputField
                label='Name'
                placeholder='e.g., John Doe'
                type='text'
                name='name'
                handleOnChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
              <InputField
                label='Email Address'
                placeholder='e.g., johndoe@example.com'
                type='text'
                name='email'
                handleOnChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
            </article>
            <article className='flex items-start flex-col gap-1 w-full'>
              <label className='font-medium text-sm'>Message</label>
              <textarea
                placeholder='I’d love to hear your thoughts! Let me know what you liked or how I can improve.'
                name='message'
                className='bg-transparent w-full resize-none border border-black rounded-lg outline-none p-2 py-3 text-xs min-h-44 max-w-[813.88px]'
              ></textarea>
            </article>
            <button className='fill-button flex items-center gap-x-2'>
              <icons.AiOutlineSend className='text-lg' />
              Send Feedback 
            </button>
          </form>
        </aside>
      </section>
    </PageLayout>
  )
}

export default ContactPage

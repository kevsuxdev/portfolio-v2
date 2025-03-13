'use client'
import InputField from '@/components/InputField'
import PageLayout from '@/components/PageLayout'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { icons } from '@/constant/icons'
import { Feedback } from '@/types/Feedback'
import { motion } from 'framer-motion'
import { hiddenAnimation, toastifyStyle } from '@/constant/animationVariant'
import { sendFeedback } from '@/lib/mailer'
import { isValidEmail } from '@/constant/regex'
import { toast } from 'react-toastify'
import Spinner from '@/components/Spinner'

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<Feedback>({
    name: '',
    email: '',
    feedback: '',
  })

  const handleContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.feedback === ''
    ) {
      setLoading(false)
      return toast.warn('Please complete the form.', toastifyStyle)
    }

    if (!isValidEmail(formData.email)) {
      setLoading(false)
      return toast.warn('Please enter a valid email address.', toastifyStyle)
    }

    const response = await sendFeedback({
      name: formData.name,
      email: formData.email,
      feedback: formData.feedback,
    })

    if (response.success) {
      formRef.current?.reset()
      setLoading(false)
      return toast.success('Email sent successfully.', toastifyStyle)
    }

    toast.error(response.message, toastifyStyle)
    setLoading(false)
  }

  return (
    <PageLayout pageName='Contact' className='px-5'>
      <section className='h-[89vh] flex items-center justify-center'>
        <motion.aside
          initial='hidden'
          animate='visible'
          variants={hiddenAnimation}
          className='flex flex-col items-center gap-5'
        >
          <motion.article
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='space-y-2 text-center flex items-center flex-col'
          >
            <h1 className='text-xl lg:text-3xl font-bold capitalize'>
              Let&apos;s Connect and Build Something Amazing Together!
            </h1>
            <p className='text-xs md:text-sm md:w-2/3'>
              Have a project in mind or just want to connect? Feel free to reach
              out—I&apos;d love to hear from you!
            </p>
          </motion.article>

          <motion.form
            ref={formRef}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
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
                  setFormData({ ...formData, email: event.target.value })
                }
              />
            </article>
            <article className='flex items-start flex-col gap-1 w-full'>
              <label className='font-medium text-sm'>Message</label>
              <textarea
                placeholder='I’d love to hear your thoughts! '
                name='message'
                className='bg-transparent w-full resize-none border border-black rounded-lg outline-none p-2 py-3 text-xs min-h-44 max-w-[813.88px]'
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData({ ...formData, feedback: event.target.value })
                }
              ></textarea>
            </article>
            <button
              disabled={loading}
              className='fill-button flex items-center gap-x-2 active:scale-90 duration-200 z-20'
            >
              {loading ? (
                <>
                  <Spinner />
                </>
              ) : (
                <>
                  <icons.AiOutlineSend className='text-lg' />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </motion.aside>
      </section>
    </PageLayout>
  )
}

export default ContactPage

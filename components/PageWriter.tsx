import { Typewriter } from 'nextjs-simple-typewriter'
import React from 'react'

const PageWriter = ({ pageName }: { pageName: string }) => {
  return <Typewriter words={[pageName]} typeSpeed={50} />
}

export default PageWriter

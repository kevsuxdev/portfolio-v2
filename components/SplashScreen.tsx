import { useEffect, useState } from 'react'

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(onFinish, 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 bg-blue-500 flex flex-col items-center justify-center gap-4 transition-opacity duration-500 z-20 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className='animate-pulse text-white text-4xl font-bold'>
        GizmoHub
      </div>
      <div className='w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
    </div>
  )
}

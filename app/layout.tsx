import type { Metadata } from 'next'
import { Roboto_Flex, Poppins } from 'next/font/google'
import './globals.css'
import GradientOval from '@/components/GradientOval'
import NavigationBar from '@/components/NavigationBar'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const robotoFlex = Roboto_Flex({
  variable: '--font-roboto-flex',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Kevs Dev',
  description: 'The best front-end developer all over the town!',
  icons: '/next.svg',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.variable} ${robotoFlex.variable} font-poppins antialiased flex items-start`}
      >
        <NavigationBar />
        <main className='max-h-screen overflow-x-hidden overflow-y-auto w-full'>
          {children}
        </main>
        <GradientOval />
      </body>
    </html>
  )
}

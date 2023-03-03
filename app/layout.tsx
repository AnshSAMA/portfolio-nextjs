import './globals.css'
import Contacts from './contacts'
import { Poppins } from '@next/font/google'
import { Neucha } from '@next/font/google'

const bodyfont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-bodyfont',
})

// const titlefont = Neucha({
//   subsets: ['latin'],
//   weight: [ '400'],
//   variable: '--font-bodyfont',
// })

export const metadata = {
  title: "Anshy's World",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${bodyfont.variable} bg-[var(--background)] font-serif text-[var(--primary)] 
        overflow-x-hidden scrollbar-thin scrollbar-track-[#111010]/20 scrollbar-thumb-[#fe5d26]`}
      >
        <div className="relative mx-auto max-w-[1920px]">{children}</div>
        <Contacts />
      </body>
    </html>
  )
}

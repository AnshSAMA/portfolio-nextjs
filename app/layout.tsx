import './globals.css'
import Contacts from './socials'
import { Poppins } from '@next/font/google'
import Navbar from './navbar'
import { ClerkProvider } from '@clerk/nextjs'

const bodyfont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-bodyfont',
})

export const metadata = {
  title: "Anshy's World",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${bodyfont.variable} bg-[var(--background)] font-serif text-[var(--primary)] 
        overflow-x-hidden scrollbar-thin scrollbar-track-[#111010]/20 scrollbar-thumb-[#fe5d26]`}
        >
          <Navbar />
          <div className="relative mx-auto mb-6 max-w-[1920px] md:mb-24">
            {children}
          </div>
          <Contacts />
        </body>
      </html>
    </ClerkProvider>
  )
}

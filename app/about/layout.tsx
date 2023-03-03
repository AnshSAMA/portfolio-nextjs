import Navbar from '../navbar'
import Interests from './interests'
// import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mb-6 md:mb-24">
      <Interests />
      {children}
    </main>
  )
}

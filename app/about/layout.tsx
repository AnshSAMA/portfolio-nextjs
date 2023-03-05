import Interests from './interests'

export const metadata = {
  title: 'About Me',
}

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

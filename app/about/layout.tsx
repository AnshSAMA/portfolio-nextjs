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
    <main>
      <Interests />
      {children}
    </main>
  )
}

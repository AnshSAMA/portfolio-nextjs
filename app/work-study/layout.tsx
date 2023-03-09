import Navbar from '../navbar'

export const metadata = {
  title: 'Work & Study',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}

import Navbar from '../navbar'

export const metadata = {
  title: 'Contact Info',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}

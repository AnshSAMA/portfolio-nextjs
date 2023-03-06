export const metadata = {
  title: 'Contact Info',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="mb-6 md:mb-24">{children}</main>
}

export const metadata = {
  title: "Anshy's World",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}

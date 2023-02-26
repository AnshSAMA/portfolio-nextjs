import './globals.css'
import Header from './header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="mx-auto max-w-7xl">
        <div
          className="h-screen bg-[var(--background)] text-white
        scrollbar overflow-x-hidden scrollbar-track-[#111010]/20 scrollbar-thumb-[#fe5d26]"
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

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
      <body className="scroll-p-0">
        <div
          className="z-0 bg-[var(--background)] text-white h-screen snap-y snap-mandatory 
        overflow-x-hidden
        scrollbar scrollbar-track-[#0b2027]/50 scrollbar-thumb-[#040E10]"
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
